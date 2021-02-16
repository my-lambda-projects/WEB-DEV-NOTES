// Action Type Definitions
const SET_RANDOM_CARD = 'photos/SET_RANDOM_CARD';

//Action Creators
export const setRandomCard = (payload) => ({
    type: SET_RANDOM_CARD,
    payload,
});

//Thunk Action Creators
/*************  TO DO #4 & #9 ******************/
export const getRandomCard = () => (dispatch) => {};

// Define an initial state
const initState = {
    code: 'AH',
    image: 'https://deckofcardsapi.com/static/img/AH.png',
    images: {
        svg: 'https://deckofcardsapi.com/static/img/AH.svg',
        png: 'https://deckofcardsapi.com/static/img/AH.png',
    },
    value: 'ACE',
    suit: 'HEARTS',
};
//Reducer
const cardReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_RANDOM_CARD:
            return action.payload;
        default:
            return state;
    }
};

export default cardReducer;
