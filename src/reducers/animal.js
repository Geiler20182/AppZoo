

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
    animals : [
        {   
            /* Id unico */
            id : 1,
            /* Imagen principal */
            src : "https://www.zoologicodecali.com.co/~zoologic/images/zooanimalesapp/zorrocaeroh.jpg",
            /* Nombre del animal */
            title : "Zorro Cañero",
            /* Leyenda corta */
            leyenda : "Un astuto y recursivo",
            /*Nombre cientifico */
            scientific_name : "Cerdocyon thous",
            /* Descripcion */
            description_1 : "El zorro cangrejero es una especie de zorro nativa del centro y norte de Sudamérica, cuya población se extiende por países como Argentina, Brasil, Bolivia, Colombia, Panamá, Paraguay, Uruguay y Venezuela. Al igual que todos los tipos de zorros, el zorro cangrejero es un mamífero que pertenece a la familia de los cánidos, la cual también comprende otras especies como perros, lobos, dingos, chacales, entre otros animales.",
            /* Dieta */
            description_2 : "Los zorros cangrejeros mantienen una dieta omnívora muy variada, que está basada principalmente el consumo de proteínas de origen animal, pero que también incorpora frutos, semillas y frutas ricas en fibras, vitaminas y minerales para suplir enteramente sus requerimientos nutricionales. ",
            /* Reproduccion */
            description_3 : "El zorro cangrejero es una especie monógama que suele experimentar un único período de reproducción anual, aunque los ejemplares que viven en zonas favorables con abundante alimento puedan llegar a reproducirse dos veces por año. ",
            /* Categoria a la cual pertecene */
            id_category : 3,
            /* Seccion de fotos (para la descripcion) */
            photos : []
        },

        {
            id : 2,
            src : "https://static.iris.net.co/sostenibilidad/upload/images/2020/4/10/49833_1.jpg",
            title : "Avestruz",
            leyenda : "Huevos supergigantes!",
            scientific_name : "Struthio camelus",
            description_1 : "Es el ave más grande y de mayor peso del mundo. Cuando nacen los polluelos miden entre 25 y 30 cm de altura, pesando unos 900 g. Durante el primer año de vida los polluelos crecen unos 25 cm al mes. Los machos adultos pueden llegar a alcanzar los 2,75 o incluso 3 metros, y pesar alrededor de 180 kg.",
            description_2 : "El avestruz, al igual que todas las aves, carece de dientes y presenta escasa movilidad en la lengua, por lo que no realiza masticación alguna sobre lo que ingiere. Coge el alimento con el pico y lo hace avanzar hacia la apertura del esófago.",
            description_3 : "Su comportamiento reproductivo es muy variable, dependiendo de la densidad de población, las condiciones climáticas y el hábitat.9​ Los machos alcanzan la madurez alrededor de los 3 años de edad. Las hembras, si están bien alimentadas, pueden alcanzar esta madurez unos 6 meses antes. pepeneneneenenene nen en nen en nen ne ne nen nen ennew nen nneen ",
            id_category : 2,
            photos : []
        },

        {
            id : 3,
            src : "https://pbs.twimg.com/media/DEO0JCNXoAQ3ApX.jpg",
            title : "Rana de Lehamnn",
            leyenda : "Hermosa pero peligrosa",
            scientific_name : "Oophaga lehmanni",
            description_1 : "Con sus 31 a 36 mm la rana venenosa de Lehmann es uno de los dendrobátidos más grandes. Existen tres formas de color, rojo, naranja y amarillo sobre un fondo marrón, negro o corteza. La rana es principalmente de color oscuro y está rodeada por dos bandas de colores brillantes. Una banda está detrás de la cabeza y la otra está alrededor de la joroba de la espalda. Los diseños de colores están separados por una coloración irregular oscura. Los brazos y patas también están rodeados por los colores brillantes.",
            description_2 : "Las larvas se alimentan de huevos no fertilizados que deposita la madre, algunas de estas larvas son caníbales, de ahí que los adultos, las ubiquen en reservorios de agua diferentes. En edad adulta se alimenta de pequeños insectos, principalmente de hormigas",
            description_3 : "Las hembras depositan los huevos entre la hojarasca húmeda, después de un cortejo breve y agresivo del macho, que incluye cantos insistentes, empujones, amplexus erráticos y rápidos; los machos fertilizan en el suelo las posturas; el tamaño de la nidada oscila entre 4 y 6 huevos, que eclosionan en dos semanas para ser cargadas de manera individual por las hembras (aun cuando se sospecha que los machos podrían transportar los renacuajos para ser depositadas en aguas de axilas de plantas epifitas, donde 60 días después se llegan a la metamorfosis. Solo el 30% del esfuerzo reproductivo de la población puede tener éxito",
            id_category : 1,
            photos : []
        },

        {
            id : 4,
            src : "https://www.pecesdeacuarios.net/wp-content/uploads/2018/05/pez-disco-Symphysodon-discus.jpg",
            title : "Pez disco",
            leyenda : "Simplemente hermoso!",
            scientific_name : "Symphysodon discus",
            description_1 : "El pez Disco (Symphysodon discus) es un Cíclido originario de la selva amazónica.Lleva con nosotros desde 1.993, cuando los primeros ejemplares fueron importados a Europa, aunque el estudio de sus costumbres reproductoras en acuario, data desde 1.956, fecha a partir de la que se reproducen en cautividad, en acuarios específicos. En la clasificación de esta especie hay cierta controversia, aunque se admite en términos habituales dos tipos de peces disco, el Symphysodon aequifasciatus aequifasciatus o pez Disco Verde y el Symphysodon aequifasciatus axelrodi o pez Disco Marrón. Para el acuario y también con el ánimo de simplificar las cosas, vamos a tratar al pez Disco como si fuera una sola especie (Symphysodon discus), aunque se pueda dividir en dos o más, como veremos a lo largo del artículo.",
            description_2 : "Su dieta se puede definir como omnívora, ligeramente carnívora. Todo en el pez Disco es majestuoso, por eso se le llama el Rey del acuario. Sin embargo, al igual que un “Rey”, es bastante delicado de mantener, como ya hemos visto en las condiciones del acuario. Para comer es igualmente delicado. Debemos proveerle una dieta a base de gusanos, dafnias y lombrices. También suelen aceptar trozos pequeños de corazón de buey y presas liofilizadas. La dieta se puede completar con algunos vegetales y escamas secas.",
            description_3 : " Los peces Disco pueden comenzar a formar parejas a partir de los 10 meses de vida. Lo normal es que alcancen la madurez sexual entorno a los dos años de vida. Entre estos dos primeros años y los cuatro es la mejor etapa para su cría.",
            id_category : 4,
            photos : []
        },

        {
            id : 5,
            src : "https://www.lavanguardia.com/r/GODO/LV/p7/WebSite/2020/07/01/Recortada/img_npalou_20200701-153028_imagenes_lv_otras_fuentes_croc-768x512-k3u-U482045242561hJH-992x558@LaVanguardia-Web.png",
            title : "Cocodrillo",
            leyenda : "El mejor amigo de la tortuga",
            scientific_name : "Crocodylidae",
            description_1 : "",
            description_2 : "",
            description_3 : "",
            id_category : 5,
            photos : []
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
        
        case 'GET_ANIMAL':
            
            const animals = state.animals;
            let temp;

            for (let index = 0; index < animals.length; index++) {
                
                if (action.payload == animals[index].id) {
                    temp = animals[index];
                    break;
                }
            }

            return {
                ...state,
                animal : temp
            }
        
        case 'GET_CATEGORY':
            
            return {
                ...state,
                id_category : action.payload
            }

        case 'SET_CATEGORY':

            return {
                ...state,
                id_category : action.payload
            }

        default:
            return state;
    }
}
export default animalReducer;