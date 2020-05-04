import { SET_EVENT } from "../constants/types";
// @ts-ignore

export const timeFormatting = store => next => action => {
  const {type, payload} = action;
  if (type === SET_EVENT) {
	console.log('store', action)

	// const processedData = payload.map(trip => {
	//   const data = moment(trip.departure_date, "DD/MM/YYYY, HH:mm:ss")
	// 	.format("HH:mm,DD MMMM YYYY")
	// 	.split(",");
	//
	//   const departureUnix = moment(
	// 	trip.departure_date,
	// 	"DD/MM/YYYY, HH:mm:ss"
	//   ).format("X");
	//
	//   const total = Number(departureUnix) + trip.duration.value;
	//   const totalDate = moment(total, "X")
	// 	.format("HH:mm,DD MMMM YYYY")
	// 	.split(",");
	//
	//   return {
	// 	...trip,
	// 	duration: {
	// 	  ...trip.duration,
	// 	  value: (trip.duration.value / 3600).toFixed(1)
	// 	},
	// 	departure_date: {
	// 	  time: data[0],
	// 	  day: data[1]
	// 	},
	// 	arrival_date: {
	// 	  time: totalDate[0],
	// 	  day: totalDate[1]
	// 	}
	//   };
	// });
	// const newAction = { ...action, payload: processedData };
	next({...action, payload});
  } else {
	next(action);
  }
};
