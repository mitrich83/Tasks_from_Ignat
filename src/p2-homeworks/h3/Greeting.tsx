import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import Input from './components/Input/Input';
import Button from './components/Button/Button';

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressHandler}
) => {
    const inputClass = error ? s.error : s.notError


    return (
        <div>
            <div className={s.block}>
                <Input value={name}
                       onChange={setNameCallback}
                       className={inputClass}
                       onKeyPress={onKeyPressHandler}/>
                <span className={s.totalUsers}>{totalUsers}</span>
                <Button name={name}
                        callback={addUser}
                />
            </div>
            <div><span className={s.errorMessage}>{error}</span></div>
        </div>
    )
}

export default Greeting
