import React from 'react';
import './header.css';

function Header() {
  return (
    <div>
      <header class="name sections">
        <h1 id="name">Alexandre Faustino Leite</h1>
        <nav class="menu">
          <ul>
            <li class="linkMenu">
              <a class="likMenu" href="#name">
                Quem sou eu? 🙋 
              </a>
            </li>
            
            <li>
              <a class="likMenu" href="#idiomas">
                Idiomas 🗺 
              </a>
            </li>

            <li>
              <a class="likMenu" href="#softSkill">
                Soft Skill 🗣
              </a>
            </li>

            <li>
              <a class="likMenu" href="#hardSkill">
                Hard Skill 👨‍🎓
              </a>
            </li>

            <li>
              <a class="likMenu" href="#contacts">
                Contatos 📞 
              </a>
            </li>            
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header;
