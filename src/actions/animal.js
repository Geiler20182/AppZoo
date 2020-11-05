export const setAnimal  = (animal) => (dispatch) => {

    dispatch(
        {
            type : 'SET_ANIMAL',
            payload : { animal }
        }
    );
}

export const getAnimal = (id) => (dispatch) => {
    dispatch (
        {
            type : 'GET_ANIMAL',
            payload : id 
        }
    );
}

export const getCategory = (id_category) => (dispatch) => {
    dispatch (
        {
            type : 'GET_CATEGORY',
            payload : id_category
        }
    );
}

export const setCategory = (id_category) => (dispatch) => {
    
    dispatch (
        {
            type : 'SET_CATEGORY',
            payload : id_category
        }
    );
}