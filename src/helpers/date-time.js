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

export const formatDateMY = (date) =>{
	return moment(date).format("MMM YYYY")
}

export const isLater = (timeBefore, timeAfter) => {
	const tb = moment(timeBefore, "HH:mm");
	const ta = moment(timeAfter, "HH:mm");

	return ta.isAfter(tb);
};
