import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { login } from "./services/auth-service";

const config = {
	providers: [
		Credentials({
			authorize: async (credentials) => {
				const res = await login(credentials);
				const data = await res.json();

				if (!res.ok) return null;

				const payload = {
					user: { ...data, name: "test" },
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

			const isLoggedIn = auth?.user;
			const isInLoginPage = pathname.startsWith("/login");
			const isInDashboardPages = pathname.startsWith("/dashboard");

			if (isLoggedIn) {
				if (isInLoginPage) {
					const url = new URL("/dashboard", request.nextUrl);
					return Response.redirect(url);
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
			session.user = token.user;
			session.accessToken = token.accessToken;
			return session;
		},
	},
	pages: {
		signIn: "/login",
	},
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);
