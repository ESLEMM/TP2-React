import './bootstrap.min.css';
import React from 'react';


function Recherche() {
  return (
    <nav className="navbar navbar-expand-sm bg-light">
    <img src={ require('./logo.png')} style={{width:"200px"}}  />
    <form className="form-inline" action="" style={{marginLeft:"50%"}}>
     <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
    <button className="btn " type="submit" style={{backgroundColor: "#f15b26"}}>Valider</button>
    </form>
  </nav>
  );
}

export default Recherche;

