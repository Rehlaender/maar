const initialState = {
    saidHi: false,
    user: 'nobody'
};
  
export default (state = initialState, action) => {
    switch(action.type) {
        case 'SAY_HI': 
            console.log(action, 'action -> payload');
            return {
                ...state, 
                saidHi: true,
                user: action.payload
            }
        default: 
            return state;
    }
} 