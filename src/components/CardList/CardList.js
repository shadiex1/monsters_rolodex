import React from "react";
import "./CardList.css";
import {Card} from "../Card/Card"

export const CardList = props =>{
    return (
        <div className="card-list">
        {
       props.monsters.map(monster=>{
       return <Card key={monster.id} monster={monster}/>
       })
     }
        </div>
    )
}

