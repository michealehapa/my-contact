import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(Props) {
  return (

    <div className="card">
        <div className="top">
          <p className="user">{Props.id}</p>
          <h2 className="name">{Props.name}</h2>
          <Avatar img={Props.img}/>
          
        </div>
        <div className="bottom">
           <Detail
            detailInfo={Props.tel}
           />

           <Detail
            detailInfo={Props.email}
           />
         
        </div>
    </div>

  );
}

export default Card;