

/*
    Las categorias se establecieron de la sgte manera:
    0 : todos (Por defecto en el almacen)
    1 : Anfibios
    2 : Aves
    3 : Mamiferos
    4 : Peces
    5 : Reptiles

*/

let initialState = {
    id_category : 0,
    animal : {},
    animals : []
};

const animalReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'SET_ANIMAL':

            return {
                ...state,
                animal : action.payload.animal,
            };
        
        case 'GET_ANIMAL':

            return {
                ...state,
                animal: action.payload.temp.rows[0]
            }
        
            case 'SET_CATEGORY':

                return {
                    ...state,
                    animals : action.payload.temp.rows
                }
            
            case 'SET_CATEGORY1':
    
                return {
                    ...state,
                    animals : action.payload.temp.rows
                }
    
            default:
                return state;
    }
}
export default animalReducer;