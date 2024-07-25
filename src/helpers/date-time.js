import moment from "moment";

export const formatDateLL = (date) => {
	return moment(date).format("LL");
};

export const formatDateISO = (date) => {
	return moment(date).format("YYYY-MM-DD");
};

export const formatTimeLT = (time) => {
	return moment(time, "HH:mm:ss").format("LT");
};

export const isLater = (timeBefore, timeAfter) => {
	const tb = moment(timeBefore);
	const ta = moment(timeAfter);

	return ta.isAfter(tb);
};
