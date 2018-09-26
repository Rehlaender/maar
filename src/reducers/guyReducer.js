const guyStates = {
    IDLE: 'IDLE',
    TALKING: 'TALKING'
};

const guySpeeches = {
    WELCOME: (name) => {`Welcome to my webpage, ${name}`},
    IDLE: '...'
};
const initialState = {
    guyState: guyStates.IDLE,
    speech: guySpeeches.IDLE,
    speechIsLoop: true,
};
  
export default (state = initialState, action) => {
    switch(action.type) {
        case 'GO_IDLE':
            console.log(action, 'action -> go idle');
            return {
                ...state,
                guyState: guyStates.IDLE,
                speech: guySpeeches.IDLE,
                speechIsLoop: true,
            }
        case 'SAY_HI':
            console.log(action, 'action -> go idle');
            return {
                ...state,
                guyState: guyStates.TALKING,
                speech: guySpeeches.WELCOME('user'),
                speechIsLoop: false,
            }
        default:
            return state;
    }
} 