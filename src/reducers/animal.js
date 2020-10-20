

let initialState = {
    animal : {},
    animals : [
        {
            id : 1,
            src : "https://www.leoness.org/wp-content/uploads/2019/05/Caracter%C3%ADsticas-Generales-de-los-leones.jpg",
            title : "León africano",
            leyenda : "El rey!",
            description : "De todos los felinos del planeta, son los únicos que viven en familia. Cuando llega el momento de buscar alimento las hembras adultas toman la iniciativa, y sólo si la presa es muy grande, el macho suspenderá repentimanente su descanso para sumarse a la cacería. Las crías aprenden poco a poco jugando entre ellas y empiezan a participar de la búsqueda de alimento cuando cumplen más de un año. Son verdaderos amantes del descanso, en cada familia por una hora de actividad se garantizan diez horas de pausa.",
            photos : ["https://www.leoness.org/wp-content/uploads/2019/05/Caracter%C3%ADsticas-Generales-de-los-leones.jpg","https://www.leoness.org/wp-content/uploads/2019/05/Caracter%C3%ADsticas-Generales-de-los-leones.jpg"]
        },
        {
            id : 2,
            src: "https://i.blogs.es/8140d0/lisa-h-205622-unsplash/840_560.jpg",
            title : "Cebra",
            leyenda : "Muy amigable",
            description : "....",
            photos : ["https://i.blogs.es/8140d0/lisa-h-205622-unsplash/840_560.jpg", "https://i.blogs.es/8140d0/lisa-h-205622-unsplash/840_560.jpg"]
        },
        {
            id : 3,
            src: "https://blogs.publico.es/strambotic/files/2017/08/tortugon-533x400.jpg",
            title : "Tortuga",
            leyenda : "Lento pero con sabiduría!",
            description : ".............................",
            photos : ["https://blogs.publico.es/strambotic/files/2017/08/tortugon-533x400.jpg", "https://blogs.publico.es/strambotic/files/2017/08/tortugon-533x400.jpg"]
        },

        {
            id : 4,
            src : "https://images.freeimages.com/images/large-previews/224/bear-zacango-zoo-1360777.jpg",
            title : "Oso pardo",
            leyenda : "Oso yogi",
            description : "................",
            photos : ["https://images.freeimages.com/images/large-previews/224/bear-zacango-zoo-1360777.jpg", "https://images.freeimages.com/images/large-previews/224/bear-zacango-zoo-1360777.jpg"]
        },


        /* Repetidos desde aui */

        {
            id : 1,
            src : "https://www.leoness.org/wp-content/uploads/2019/05/Caracter%C3%ADsticas-Generales-de-los-leones.jpg",
            title : "León",
            leyenda : "Leyenda",
            description : "Description...",
            photos : ["https://www.leoness.org/wp-content/uploads/2019/05/Caracter%C3%ADsticas-Generales-de-los-leones.jpg","https://www.leoness.org/wp-content/uploads/2019/05/Caracter%C3%ADsticas-Generales-de-los-leones.jpg"]
        },
        {
            id : 2,
            src: "https://i.blogs.es/8140d0/lisa-h-205622-unsplash/840_560.jpg",
            title : "Cebra",
            leyenda : "Leyenda",
            description : "....",
            photos : ["https://i.blogs.es/8140d0/lisa-h-205622-unsplash/840_560.jpg", "https://i.blogs.es/8140d0/lisa-h-205622-unsplash/840_560.jpg"]
        },
        {
            id : 3,
            src: "https://blogs.publico.es/strambotic/files/2017/08/tortugon-533x400.jpg",
            title : "Tortuga",
            leyenda : "Leyenda",
            description : ".............................",
            photos : ["https://blogs.publico.es/strambotic/files/2017/08/tortugon-533x400.jpg", "https://blogs.publico.es/strambotic/files/2017/08/tortugon-533x400.jpg"]
        },

        {
            id : 4,
            src : "https://images.freeimages.com/images/large-previews/224/bear-zacango-zoo-1360777.jpg",
            title : "Oso pardo",
            leyenda : "Oso yogi",
            description : "................",
            photos : ["https://images.freeimages.com/images/large-previews/224/bear-zacango-zoo-1360777.jpg", "https://images.freeimages.com/images/large-previews/224/bear-zacango-zoo-1360777.jpg"]
        },

        {
            id : 1,
            src : "https://www.leoness.org/wp-content/uploads/2019/05/Caracter%C3%ADsticas-Generales-de-los-leones.jpg",
            title : "León",
            leyenda : "Leyenda",
            description : "Description...",
            photos : ["https://www.leoness.org/wp-content/uploads/2019/05/Caracter%C3%ADsticas-Generales-de-los-leones.jpg","https://www.leoness.org/wp-content/uploads/2019/05/Caracter%C3%ADsticas-Generales-de-los-leones.jpg"]
        },
        {
            id : 2,
            src: "https://i.blogs.es/8140d0/lisa-h-205622-unsplash/840_560.jpg",
            title : "Cebra",
            leyenda : "Leyenda",
            description : "....",
            photos : ["https://i.blogs.es/8140d0/lisa-h-205622-unsplash/840_560.jpg", "https://i.blogs.es/8140d0/lisa-h-205622-unsplash/840_560.jpg"]
        },
        {
            id : 3,
            src: "https://blogs.publico.es/strambotic/files/2017/08/tortugon-533x400.jpg",
            title : "Tortuga",
            leyenda : "Leyenda",
            description : ".............................",
            photos : ["https://blogs.publico.es/strambotic/files/2017/08/tortugon-533x400.jpg", "https://blogs.publico.es/strambotic/files/2017/08/tortugon-533x400.jpg"]
        },

        {
            id : 4,
            src : "https://images.freeimages.com/images/large-previews/224/bear-zacango-zoo-1360777.jpg",
            title : "Oso pardo",
            leyenda : "Oso yogi",
            description : "................",
            photos : ["https://images.freeimages.com/images/large-previews/224/bear-zacango-zoo-1360777.jpg", "https://images.freeimages.com/images/large-previews/224/bear-zacango-zoo-1360777.jpg"]
        }
    
    ]

};

const animalReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'SET_ANIMAL':

            return {
                ...state,
                animal : action.payload.animal,
            };
        default:
            return state;
    }
}
export default animalReducer;