import { LOGIN_USER, LOGOUT_USER } from './actionTypes';

const userInitialState = {
	isAuth: false, // default value - false. After success login - true
	name: '', // default value - empty string. After success login - name of user
	email: '', // default value - empty string. After success login - email of user
	token: '', // default value - empty string or token value from localStorage. After success login - value from API /login response.
};

export const userReducer = (state = userInitialState, action) => {
	switch (action.type) {
		case LOGIN_USER:
			return action.payload;
		case LOGOUT_USER:
			return userInitialState;
		default:
			return state;
	}
};
