import { auth } from "@/auth";

export const getAuthHeader = async () => {
	const session = await auth();
	const token = session?.accessToken;

    let authHeader = {
        "Content-Type": "application/json"
    }

    if(token){
        authHeader = {
            Authorization: `Bearer ${token}`,
            ...authHeader
        }
    }

    return authHeader;
};
