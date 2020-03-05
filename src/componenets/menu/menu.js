import React from 'react';
import './menu.css';


function Menu() {
  return (
    <div className="menu">
        <a href="#" class="active">Home</a>
        <a href="#">Accueil</a>
        <a href="#">Profile </a>
        <a href="#">Match</a>
        <a href="#">Players</a>
        <a href="#">Contacts</a>
        <a href="#">A propos de nous</a>
     </div>
  );
}

export default Menu;