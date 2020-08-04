import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
  return (
<article className="teacher-item">
  <header>
    <img src="https://avatars2.githubusercontent.com/u/51796767?s=460&u=f6e736a1f959e372169654aedf060b64a07acc2d&v=4" alt="Gabriel Almeida"/>
    <div>
      <strong>Gabriel Almeida</strong>
      <span>Astrofísica</span>
    </div>
  </header>

  <p>
  Astrophysics is the branch of astronomy 
  <br /><br />
  that employs the principles of physics and chemistry "to ascertain the nature of the astronomical objects, rather than their positions or motions in space".
  </p>

  <footer>
    <p>
      Preço/hora
    <strong>R$ 90,00</strong>
    </p>
    <button type="button">
      <img src={whatsappIcon} alt="Whatsapp"/>
      Entrar em contato
      </button>
  </footer>
</article>
);
}

export default TeacherItem;