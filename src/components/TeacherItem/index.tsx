import React from 'react';
import { Link } from 'react-router-dom';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/3949208?s=460&v=4" alt="Jaqueline Fernandes" />
        <div>
          <strong>Jaqueline Fernandes</strong>
          <span>Informática</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            <br /><br />
            Sapiente dicta, nisi autem harum non voluptates nobis earum, excepturi id deleniti debitis expedita dolorem ex incidunt voluptatibus recusandae possimus vel error.
          </p>

      <footer>
        <p>
          Preço/hora:
              <strong>R$50,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" /> Entrar em Contato
            </button>
      </footer>
    </article>
  );
}

export default TeacherItem;