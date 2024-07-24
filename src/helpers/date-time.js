import moment from "moment"


export const formatDateLL = (date) => {
    return moment(date).format('LL');
}