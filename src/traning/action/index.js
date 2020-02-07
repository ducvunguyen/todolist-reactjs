import * as types from '../constants/ActionType';
//phan chia action

export const status = ()=>{
	return {
		// type: 'TOGGLE_STATUS',
		type: types.TOGGLE_STATUS
	}
}

export const sort = (sort)=>{
	return {
		// type: "TOGGLE_SORT",
		type: types.TOGGLE_SORT,
		sort: sort, // 2 tu giong nhau co the viet 1 chu sort
	}
}