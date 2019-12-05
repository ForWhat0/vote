import React from 'react';
import s from './tittle.module.css';
const Tittle=(props)=>{
    return(
        <div className={s.tittle}>
            <div className={s.first}>{props.first}</div><div className={s.second}>{props.second}</div>
        </div>
    );
}

export default Tittle;