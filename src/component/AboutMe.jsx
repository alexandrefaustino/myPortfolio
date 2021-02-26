import React from 'react'
import eu01 from '../images/eu01.png';
import trybe from '../images/trybe.png';
import ufpb from '../images/ufpb.png';
import esab from '../images/esab.png';
import fip2 from '../images/fip2.png';
import './aboutMe.css';

function AboutMe() {
  return (
    <div class="description-photo">
      <div class="divPhoto">
        <img class="myPicture" src={eu01} alt="Evento: Campus Party - Salvador BA" />
      </div>
  
      <div class="divDescription">
        <p><strong> Brasileiro 🇧🇷, Natural de Conceição PB </strong> </p>   
        <p> <strong>Residindo na cidade de Patos PB desde 2007</strong> </p>
        <p> <strong>40 anos de idade</strong></p>
    
        <p>
          Aluno de Desenvolvimento <strong>Web Full-Stack</strong> na <strong>Trybe - 2020/2021</strong> 
          <img class="emojiTrybe" src={trybe} alt="Trybe" />  
        </p>

        <p>
          Licenciando em Matemática <strong>2021 - UFPB </strong> 
          <img class="ufpbPicture" src={ufpb} alt="UFPB" />  
        </p>
        <p>
          Especilista em Redes de Computadores <strong>2015 - ESAB </strong> 
          <img class="esabPicture" src={esab} alt="ESAB"/>  
        </p>
        <p>
          Bacharel em Sistemas de Informação <strong>2010 - FIP </strong> 
          <img class="fipPicture" src={fip2} alt="FIP" />  
        </p>
      </div>  
    </div>
  )
}

export default AboutMe;
