import React from "react";
import c from './Skill.module.css'

export const Skill = (props) => {
    return (
        <div className={c.skill}>
            <div className={c.icon}>
                <img src={props.img} alt=""/>
            </div>
            <h3>{props.title}</h3>
            <div className={c.description}>
                {props.description}
            </div>
        </div>
    )
}