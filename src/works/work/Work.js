import React from "react";
import c from './Work.module.css'
import {Button} from "../../button/Button";

export const Work = (props) => {
    console.log(props.title)
    console.log(props.description)
    return (
        <>
            <div className={c.work}>
                <div className={c.workImage} style={{backgroundImage: `url(${props.img})`}}>
                    <Button title={'Site'}>
                        works
                    </Button>
                    <Button title={'Code'}>
                        works
                    </Button>
                </div>
                <div className={c.textBlock}>
                    <h3>{props.title}</h3>
                    <div className={c.description}>
                        {props.description}
                    </div>
                </div>
            </div>

        </>

    )
}