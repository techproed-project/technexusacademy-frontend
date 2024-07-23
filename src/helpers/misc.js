import { config } from "./config";

export const getGenderValues = () => {
	return config.genders.map((item) => item.value);
};
