import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './pages/Header.module.css'


function Header() {

    return (
        <div className={s.div}>
            <NavLink className={s.preJunior} activeClassName={s.active}  to={'pre-junior'}>| pre-junior |</NavLink>
            <NavLink className={s.junior} activeClassName={s.active} to={'junior'}> junior </NavLink>
            <NavLink className={s.juniorPlus} activeClassName={s.active} to={'junior-plus'}>| junior+ |</NavLink>
            <button className={s.button}></button>
        </div>
    )
}

export default Header