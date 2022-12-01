import React from "react";
import c from './Skill.module.css'

export const Work = (props) => {
    console.log(props.title)
    console.log(props.description)
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