import status from './status';
import sort from './sort';
import {combineReducers} from 'redux';
//phan chia reducer
//state khoi tao ban dau (store)
// var initialState = {
// 	//o day co sratus va sort ta tach tiep reducer la status.js va sort.js
// 	status: false,
// 	sort: {
// 		by: 'name',
// 		value: 1,
// 	}
// }
//tao ra redecer => muc dich la tra ra cac state moi
// var myReducer =(state = initialState, action)=>{
// 	//phana tich hanh dong
// 	if (action.type === 'TOGGLE_STATUS') {
// 		state.status = !state.status;
// 		return state;
// 	}
// 	if (action.type === 'TOGGLE_SORT') {
// 		var {by, value} = action.sort;
// 		var {status} = state;

// 		state = {
// 			status: status,
// 			sort: {
// 				by: by,
// 				value: value,
// 			}
// 		}
// 		return state;
// 	}
// 	return state;
// }

//du lieu sort va status
const myReducer = combineReducers({
	status: status,
	sort: sort // ~ sort,
});
export default myReducer;
