//phan chia reducer

//state khoi tao ban dau (store)
var initialState = {
	//o day co sratus va sort ta tach tiep reducer la status.js va sort.js
	by: 'name',
	value: 1,
	
}
//tao ra redecer => muc dich la tra ra cac state moi
var myReducer =(state = initialState, action)=>{
	//phana tich hanh dong
	if (action.type === 'TOGGLE_SORT') {
		var {by, value} = action.sort;
		state = {
			sort: {
				by: by,
				value: value,
			}
		}
		return state;
	}
	return state;
}

export default myReducer;
