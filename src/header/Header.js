import React from 'react'
import s from './Header.module.css'
import {Nav} from "./nav/Nav";
import styleContainer from "../common/styles/Container.module.css";

export const Header = () => {
    return (
        <div className={s.headerBlock}>
            <div className={`${styleContainer.container} ${s.header}`}>
                <div className={s.container}>
                    <Nav/>
                </div>
            </div>
        </div>

    )
}