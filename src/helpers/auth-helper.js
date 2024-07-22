import { auth } from "@/auth";

export const getAuthHeader = async () => {
	const session = await auth();
	const token = session?.accessToken;

	let authHeader = {
		"Content-Type": "application/json",
	};

	if (token) {
		authHeader = {
			Authorization: `Bearer ${token}`,
			...authHeader,
		};
	}

	return authHeader;
};

const parseJWT = (token) => {
	// token.split(".") -> token dan nokta ya gore 3 elemanli bir dizi olusturur
	// token.split(".")[1] -> dizideki ikinci elemani alir
	// atob(...) -> Sifrelenmis datayi cozer
	// JSON.parse(....) -> string haldeki datayi JS object haline cevirir

	return JSON.parse(atob(token.split(".")[1]));
};

export const getIsTokenValid = (token) => {
	if (!token) return false;

	const jwtExpireTimeStamp = parseJWT(token).exp;
	// Burada gelen exp degeri SANIYE cinsinden olur.

	const jwtExpireDateTime = new Date(jwtExpireTimeStamp * 1000); // SN degeri MS degerine cevirmek icin 1000 ile carptik
	// new Date kensisine verieln MILISANIYE cinsinden degerden bir tarih saat olusturabilmek icin bu degeri 1 Ocak 1970 tarihine ekler.

    console.log("jwtExpireDateTime:",jwtExpireDateTime)
	return jwtExpireDateTime > new Date();
};
