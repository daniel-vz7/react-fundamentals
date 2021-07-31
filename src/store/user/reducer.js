const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGGED_IN':
      return {
        //...state,
        isAuth: true,
        name: 'admin',
        email: 'admin@email.com',
        token: 'token', 
      }
  
    default:
      return state;
  }
}