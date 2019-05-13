import Actions from './Actions';

const initialState =   {
    GIFS : [],
    isLoading: true
};

const Reducer =(state=initialState , action)=> {
    switch(action.type) {

        case Actions.ONSEARCHUPDATE :
              return {
                  ...state,
                  ...action.payload
              }
        case Actions.ONPAGELOAD : 
                return {
                    ...state,
                    ...action.payload
                }
        case Actions.ONPAGELOADUPDATE : 
                return {
                    ...state,
                    GIFS : [...action.payload],
                    isLoading: action.payload.isLoading
                    
                }
        default : 
             return state

    }
}

export default Reducer;