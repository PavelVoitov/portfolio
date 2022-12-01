import React from "react";
import s from './Button.module.css'

export const Button = (props) => {
    return (
        <button className={props.children === 'works' ? s.works : s.default}>
                {props.title}
        </button>
    )
}