import React, { Component } from 'react';
import './Who.css';
import imagen from './zoológico-de-cali-1280x720.jpg';
import imagen2 from './zoo.jpg';
// import videoZoo from './';

class Who extends Component {
    render() {
        return(
            <div>
                <div className = "rowW">
                    <div className = "columna contenido"> 
                        {/* Pendiente de Cambiar la fuente del título */}
                        <h1 className = "t1">¿Quiénes Somos?</h1>
                        <h2 style = {{'margin-left': '40px'}}>...</h2>
                        <p style = {{'margin-left': '40px', 'width' : '80%'}}>El zoológico de Cali cuenta con 
                        alrededor de 2500 animales de 233 especies,1​2​ entre anfibios (7%), mamíferos (21%), reptiles 
                        (12%), aves (30%), peces (21%) y mariposas (9%). Es el cuarto mejor zoológico de América 
                        Latina.</p>
                        <p style = {{'margin-left': '40px', 'width' : '80%'}}>Contamos con uno de los programas de 
                        crianza más elaborados del mundo ya que aceptamos crías de Suricata surricata Pteronura 
                        brasiliensis, Papio y Cervidae. Hemos contado con el apoyo de canales televisivos, como animal 
                        planet, para que muestren el compromiso y labor que tenemos con los animales.</p>
                    </div>
                    <div className = "columna imgS1">
                        <img src = {imagen} width = "430" height = "360"/>
                    </div>
                </div>
                <hr></hr>
                <div className = "rowW2">
                    <div className = "columna contenido">
                        <h1 className = "titulo2">Historia del Zoológico</h1>
                        <p style = {{'margin-left': '40px', 'width' : '80%'}}>Abrió sus puertas en 1969 bajo la alcaldía de Marino Rengifo Salcedo 
                        y fue administrado en ese entonces por el municipio,5​6​ pero debido a los malos manejos estuvo a 
                        punto de cerrar, hasta que en el año 1981, el 1 de octubre, la fundación sin animo de lucro 
                        Zoológico de Cali se hizo cargo de ella. Desde entonces se empezó a remodelar las exhibiciones, 
                        además de contar con un programa de cría7​ que le ha ganado reconocimiento internacional y lo ha 
                        ubicado como uno de los mejores zoológicos de América .</p>
                        <p style = {{'margin-left': '40px', 'width' : '80%'}}>El 22 de abril de 1980, durante la administración del alcalde Rodrigo Escobar Navia, fue 
                        creada la Fundación Zoológica de Cali, con la participación conjunta del sector oficial y 
                        privado. Pero fue hasta el 1° de octubre de 1981, cuando la Fundación empezó a administrar 
                        el Zoológico de Cali.</p>
                    </div>
                    <div className = "columna imgS2">
                        <img src = {imagen2} width = "450" height = "400"/>
                    </div>
                </div>
                <hr></hr>
                <div>
                    <h1 className = "titulo3">CaliZoo</h1>
                    <iframe className = "videoZoo" width = "1000" height = "550" src = "https://www.youtube.com/watch?v=_XxWKrzpZzA">
                    </iframe>
                </div>
            </div>
        );
    }
}

export default Who;