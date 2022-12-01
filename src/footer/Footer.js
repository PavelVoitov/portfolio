import React from 'react'
import s from './Header.module.css'
import {Nav} from "./nav/Nav";

export const Foter = () => {
    return (
        <div className={s.header}>
            <div className={s.container}>
                <Nav/>
            </div>
        </div>
    )
}