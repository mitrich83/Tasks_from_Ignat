import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW8.module.css'

export type UserType = {
    _id: number,
    name: string,
    age: number
}

export type sortUpActionType = {
    type: 'sort'
    payload: 'up'
}
export type sortDownActionType = {
    type: 'sort'
    payload: 'down'
}
export type sorCheckActionType = {
    type: 'check'
    payload: 18
}

export type ActionsType = sortUpActionType | sortDownActionType | sorCheckActionType

const initialPeople: UserType[] = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<UserType[]>(initialPeople)


    const finalPeople = people.map((p: UserType) => (
        <div className={s.users} key={p._id}>
            <div >
            {p.name}
            </div>
            <div >
            {p.age}
            </div>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}))

    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'}))

    const sortCheck = () => setPeople(homeWorkReducer(initialPeople, {type: 'check', payload: 18}))

    return (
        <div>
            <hr/>
            homeworks 8
            <div className={s.container}>
                <div className={s.table}>
                    {finalPeople}
                </div>
                <div className={s.allButtons}>
                    <div ><SuperButton onClick={sortUp}>sort up</SuperButton></div>
                    <div ><SuperButton onClick={sortDown}>sort down</SuperButton></div>
                    <div ><SuperButton onClick={sortCheck}>check 18</SuperButton></div>
                </div>
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
