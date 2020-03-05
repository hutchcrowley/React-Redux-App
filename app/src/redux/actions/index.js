import axios from 'axios'

export const FETCHING_DATA_START = 'FETCHING_DATA_START';
export const FETCHING_DATA_SUCCESS = 'FETCHING_DATA-SUCCESS';
export const FETCHING_DATA_FAILURE = 'FETCHING_DATA_FAILURE';

export const getData = () => dispatch => {
    dispatch({ type: FETCHING_DATA_START });

    axios
    .get(`https://sv443.net/jokeapi/v2/joke/Any?type=single`)
    .then(res => {
        console.log('result of initial API fetch: ', res.data);

        dispatch({ type: FETCHING_DATA_SUCCESS, payload: res.data.joke })
    })
    .catch(err => {
        console.log('ERRROR: ', err);

        dispatch({ 
            type: FETCHING_DATA_FAILURE,
            error: err
        });
    });
};