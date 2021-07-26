import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './pages/PreJunior.module.css'


function Header() {

    return (
        <div className={s.div}>
            <NavLink className={s.preJunior}  to={'pre-junior'}>| pre-junior |</NavLink>
            <NavLink className={s.junior} to={'junior'}> junior </NavLink>
            <NavLink className={s.juniorPlus} to={'junior-plus'}>| junior+ |</NavLink>
            <button className={s.button}></button>
        </div>
    )
}

export default Header