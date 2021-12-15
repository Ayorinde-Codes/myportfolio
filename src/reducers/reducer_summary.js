import {CORONA_SUMMARY} from '../actions/index';


export default function(state=[], action){

    switch(action.type){
        case CORONA_SUMMARY :
        return [ ...state, action.payload.data ]
        default:
            return state;
    }
    

}