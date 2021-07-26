import React from 'react'
import Affair from '../Affair/Affair'
import {AffairType, FilterType} from '../../HW2'
import s from './Affairs.module.css'
import Button from '../Button/Button';

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }


    return (
        <div className={s.container}>
            <div className={s.tasks}>
                {mappedAffairs}
            </div>
            <div className={s.filterButtons}>
                <Button className={props.filter === 'all' ? s.active : ''}
                        title={'All'} callback={setAll}/>
                <Button className={props.filter === 'high' ? s.active : ''}
                        title={'High'} callback={setHigh}/>
                <Button className={props.filter === 'middle' ? s.active : ''}
                        title={'Middle'} callback={setMiddle}/>
                <Button className={props.filter === 'low' ? s.active : ''}
                        title={'Low'} callback={setLow}/>
            </div>
        </div>
    )
}

export default Affairs
