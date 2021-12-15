import React from 'react';
import {CORONA_SEARCH} from '../actions/index'


export default function(state=[], action){

    switch(action.type){
        case CORONA_SEARCH:
            return [action.payload.data, ...state]
        default:
            return state
    }
}