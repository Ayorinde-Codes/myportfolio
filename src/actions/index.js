import axios from 'axios';

const ROOT_URL= `https://coronavirus-19-api.herokuapp.com/`;

export const CORONA_SUMMARY= 'CORONA_SUMMARY';

export const CORONA_ALL= 'CORONA_ALL';

export const CORONA_SEARCH='CORONA_SEARCH';

export function coronaSummary(){

    const url= `${ROOT_URL}all`;
    const request= axios.get(url);

    return {
        type: CORONA_SUMMARY,
        payload:request
    }
}


export function coronaSearch(country){

    const url= `${ROOT_URL}countries/${country}`;
    const request= axios({
        method:'GET',
        url:url
    });

    return {
        type: CORONA_SEARCH,
        payload:request
    } 
}

