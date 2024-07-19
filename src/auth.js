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
					user: { ...data, sub: "1212312" },
					accessToken: data.token.split(" ")[1],
					sub: "234234"
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
	},
	pages: {
		signIn: "/login",
	},
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);
