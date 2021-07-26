import React from 'react'
import {AffairType} from '../../HW2';
import Button from '../Button/Button';
import s from './Affair.module.css'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    const colorPriority = s[props.affair.priority]

    return (
        <div className={s.container}>
            <div className={s.item}>{props.affair.name}</div>
            <div className={colorPriority}>{props.affair.priority}</div>
            <div className={s.item}><Button title={'X'} callback={deleteCallback} red={true}/></div>

        </div>
    )
}

export default Affair
