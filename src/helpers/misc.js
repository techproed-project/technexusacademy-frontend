import { config } from "./config";

export const getGenderValues = () => {
	return config.genders.map((item) => item.value);
};

export const getTermValues = () => {
	return config.educationTerms.map((item) => item.value);
};
