import './InstructionComponent.css'
import {Link } from 'react-router-dom'

export const InstructionComponent = (props) => {

    /* Color variants */
    const colorRoot = ["#FF595E","#FFCA3A","#8AC926","#1982C4"];

    /*Title variansts*/ 
    const instructionTitles = [
        "Selecciona una fecha para cuatro imágenes del Sol.", 
        "Identifica una mancha en cada imagen y selecciónala para extraer sus coordenadas.",
        "Este paso va por nuestra cuenta.",
        "¿Quieres conocer más?",
    ];

    /*Paragraph variants*/
    const paragraphTitle = [
        "La aplicación buscará imágenes del Sol desde la primera fecha hasta otras tres fechas. Las imágenes forman parte de la colección del Solar & Heliospheric Observatory (SOHO).",
        "Asegúrate de seleccionar la misma mancha en cada imagen y hazlo con mucho cuidado para tener resultados más precisos.",
        "La aplicación se encargará del resto y mostrará los cálculos en la sección de resultados.",
        <span>Para tener más detalles y mucha más información de cómo la aplicación obtiene resultados, visita <Link id="LinkBlue"to='/Conoce'>Conoce.</Link></span>
    ];

    let textColor = "";
    let insTitle = "";
    let paraTitle = "";

    /*For instruction number one */

    if (props.number == "01") {
        textColor = colorRoot[0];
        insTitle = instructionTitles[0];
        paraTitle = paragraphTitle[0];
    }

    /*For instruction number two */
    if (props.number == "02") {
        textColor = colorRoot[1];
        insTitle = instructionTitles[1];
        paraTitle = paragraphTitle[1];
    }

    /*For instruction number three */
    if (props.number == "03") {
        textColor = colorRoot[2];
        insTitle = instructionTitles[2];
        paraTitle = paragraphTitle[2];
    }

    /*For instruction number four */
    if (props.number == "04") {
        textColor = colorRoot[3];
        insTitle = instructionTitles[3];
        paraTitle = paragraphTitle[3];
    }

    const componentStyle = {
        color: textColor,
    }

  return (
    <div id='instructionComponent'>
        <div id="numberContainer">
            <h1 id='numberInstruction' style={componentStyle}>{props.number}</h1>
        </div>
        <div id="deInstructionContainer">
            <h5 id="titleInstruction">{insTitle}</h5>
            <p id="detailInstruction">{paraTitle}</p>
        </div>
    </div>
  )
}
