import React from 'react'
import './bootstrap.min.css';


function Card (props){
    return ( 
 <div className="card" style={{width: "18rem"}}>
 <img src={ require('./'+props.image) }/>
 <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text"></p>{props.description}</div>
</div>
      )
}

export default Card;

