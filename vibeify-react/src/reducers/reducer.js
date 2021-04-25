export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // remove after development
    // token: "BQDXifP8eBf8I-XVeAyIC7ItxIqCZVGTvDK84ZJy3zrWXGFDPH…bhmYCKtHz9nKdA0RbNv4YCmDCjC0iJ7_KF_HOf1Q2_swHY3rU"
    token: null,
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
        //hard coded for just the specific playlist called proximity
        case 'SET_PROXIMITY':
            return {
                ...state,
                proximity: action.proximity,
            };
        default:
            return state;
    }
}

export default reducer;

