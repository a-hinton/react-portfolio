import React from 'react';
import './Card.css';

function Card({ title, gitLink, webLink, img }) {
    return (
        <div className="card-wrapper col-lg-4 col-md-6 col-sm-11 glass d-flex justify-content-center">
           <figure className="img-wrapper">
               <a href={webLink} target="_blank" rel="noreferrer">
                   <img src={img} alt="" title="" className="proj-img"></img>
               </a>

               <div className="card-title">
                   <a href={gitLink} target="_blank" rel="noreferrer">{title}</a>
               </div>
           </figure>
        </div>
    )

}

export default Card