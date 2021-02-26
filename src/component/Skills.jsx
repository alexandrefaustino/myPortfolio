import React from 'react';
import './skills.css';

function Skills() {
  return (
    <div>
      <div class="sections"> 
        <h2>Idiomas</h2>
      </div>

      <ul>
        <li>Português - Nativo</li>
        <li>Inglês - Intermediário</li>    
      </ul>

      <div class="sections"> 
        <h2 id="softSkill">Soft Skill</h2> 
      </div>
    
      <ul>
        <li>Flexibilidade</li>
        <li>Habilidade para lidar com números</li>
        <li>Capacidade de resolver problemas</li>
        <li>Resiliência</li>
        <li>Colaboração</li>
      </ul>
  
      <div class="sections"> <h2>Hard Skill</h2> </div>
        <ul>
          <li>JavaScript
            <div class="life">
              <div class="lifeJavaScript"></div>
            </div>
          </li>

          <li>HTML5
            <div class="life">
              <div class="lifeHtml"></div>
            </div>
          </li>

          <li>CSS
            <div class="life">
              <div class="lifeCss"></div>
            </div>
          </li>

          <li>Banco de Dados
            <div class="life">
              <div class="lifeBD"></div>
            </div>
          </li>

          <li>Linux
            <div class="life">
              <div class="lifeLinux"></div>
            </div>
          </li>

          <li>Git & GitHub
            <div class="life">
              <div class="lifeGit"></div>
            </div>
          </li>
        </ul>
    </div>
  )
}

export default Skills;
