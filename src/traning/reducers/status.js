//phan chia reducer

//state khoi tao ban dau (store)
var initialState = false;
//tao ra redecer => muc dich la tra ra cac state moi
var myReducer =(state = initialState, action)=>{
	//phana tich hanh dong
	if (action.type === 'TOGGLE_STATUS') {
		state = !state;
		return state;
	}
	
	return state;
}

export default myReducer;
