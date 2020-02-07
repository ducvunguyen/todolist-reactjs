import {createStore} from 'redux';
import {status, sort} from './action/index';
import myReducer from './reducers/index';

const store = createStore(myReducer);//toa mot store
console.log('DEFAULT',store.getState());

//thuc hien thay doi status
// var action = {type: 'TOGGLE_STATUS'}; //action nay se la action trong myReducer
// store.dispatch(action);//dispatch de thuc thi
store.dispatch(status());//da phan chia action
console.log('TOGGLE_STATUS',store.getState());

//
// var actionSort = {
// 	type: 'TOGGLE_SORT',
// 	sort: {
// 		by: 'nguyen',
// 		value: 2,
// 	}
// };
store.dispatch(sort({
	by: 'nguyen',
	value: 2
}));
console.log('TOGGLE_STATUS',store.getState());
