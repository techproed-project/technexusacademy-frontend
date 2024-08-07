import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { login } from "./services/auth-service";
import { getIsTokenValid, getIsUserAuthorized } from "./helpers/auth-helper";

const config = {
	providers: [
		Credentials({
			authorize: async (credentials) => {
				const res = await login(credentials);
				const data = await res.json();

				if (!res.ok) return null;

				const payload = {
					user: { ...data },
					accessToken: data.token.split(" ")[1],
				};
				delete payload.user.token;
				return payload;
			},
		}),
	],
	callbacks: {
		// middleware in kapsama alanina giren sayfalara yapilan isteklerden hemen once calisir
		authorized({ auth, request }) {
			const { pathname } = request.nextUrl;

			const userRole = auth?.user?.role;
			const isLoggedIn = !!userRole;
			const isInLoginPage = pathname.startsWith("/login");
			const isInDashboardPages = pathname.startsWith("/dashboard");
			const isTokenValid = getIsTokenValid(auth?.accessToken);

			if (isLoggedIn && isTokenValid) {
				if (isInLoginPage) {
					const url = new URL("/dashboard", request.nextUrl);
					return Response.redirect(url);
				} else if (isInDashboardPages) {
					const isUserAuthorized = getIsUserAuthorized(
						userRole,
						pathname
					);

					if (!isUserAuthorized) {
						const url = new URL("/unauthorized", request.nextUrl);
						return Response.redirect(url);
					}

					return true;
					
				}
			} else if (isInDashboardPages) {
				return false;
			}

			return true;
		},

		// jwt token a ihtiac dyulan her yerde calisir
		async jwt({ token, user }) {
			return { ...user, ...token };
		},

		// session a ihtiyac duyulan her yerde calisir
		async session({ session, token }) {
			const { accessToken, user } = token;

			//console.log("accessToken:", accessToken)
			const isTokenValid = getIsTokenValid(accessToken);
			if (!isTokenValid) return null; // Burasi kullaniciyi logout yapar.

			session.user = user;
			session.accessToken = accessToken;
			return session;
		},
	},
	pages: {
		signIn: "/login",
	},
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);
