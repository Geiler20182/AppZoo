import axios from 'axios';

export const setAnimal  = (animal) => (dispatch) => {
    dispatch(
        {
            type : 'SET_ANIMAL',
            payload : { animal }
        }
    );
}

export const getAnimal = (id) => (dispatch) => {
    axios.get(`/animalsi/${id}`).then((response) => {
        let temp = response.data.data;
        dispatch ({
                type : 'GET_ANIMAL',
                payload : { temp }
        });
    });
}

export const setCategory = (id_category) => (dispatch) => {
    axios.get(`/animalsc/${id_category}`).then((response) => {
        let temp = response.data.data;
        dispatch ({
                type : 'SET_CATEGORY',
                payload : { temp }
        });
    });
}

export const setCategory1 = () => async (dispatch) => {
    axios.get('/animals').then((response) => {
        let temp = response.data.data;
        dispatch ({
                type : 'SET_CATEGORY1',
                payload : { temp }
        });
    });
}