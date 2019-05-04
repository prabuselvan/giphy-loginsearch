import Actions from './Actions';

const initialState =  [

];

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
                    // ...state,
                    ...action.payload
                    
                }
        default : 
             return state

    }
}

export default Reducer;