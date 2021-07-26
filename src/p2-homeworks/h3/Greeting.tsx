import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import {UserType} from './HW3';

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    onKeyPressHandler: (e:KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressHandler}
) => {
    const inputClass = error ? s.error : s.notError


    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass} onKeyPress={onKeyPressHandler}/>
            <span className={s.totalUsers}>{totalUsers}</span>
            <button className={s.buttonAdd} onClick={addUser} disabled={!name}>add</button>
            <div><span className={s.errorMessage}>{error}</span></div>


        </div>
    )
}

export default Greeting