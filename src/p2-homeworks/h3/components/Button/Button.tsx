import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './Button.module.css'


type ButtonPropsType = {
    red?: boolean

    callback: () => void
    name: string
}


const Button = (props: ButtonPropsType) => {
    return (
        <div>
            <button
                className={s.default}
                onClick={props.callback}
                disabled={!props.name}
            >
                Add
            </button>
        </div>
    )
}

export default Button;