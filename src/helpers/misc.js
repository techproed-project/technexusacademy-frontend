import { config } from "./config";

export const getGenderValues = () => {
	return config.genders.map((item) => item.value);
};

export const getTermValues = () => {
	return config.educationTerms.map((item) => item.value);
};

export const getDayValues = () => {
	return config.days.map((item) => item.value);
};

export const getTermLabel = (val) => {
	const term = config.educationTerms.find((item) => item.value === val);
	return term?.label ?? "";
};
