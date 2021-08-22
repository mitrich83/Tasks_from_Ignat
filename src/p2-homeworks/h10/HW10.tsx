import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from '../h10/bll/HW.module.css'
import {loadingAC} from './bll/loadingReducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from './bll/store';

function HW10() {
    const isLoading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    const dispatch = useDispatch()

    const setLoading = () => {
         dispatch(loadingAC(true))
         setTimeout(()=> {
             dispatch(loadingAC(false))
         },2000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {isLoading
                ? (
                    <div className={s.spinner}>
                        <div className={s.rect1}></div>
                        <div className={s.rect2}></div>
                        <div className={s.rect3}></div>
                        <div className={s.rect4}></div>
                        <div className={s.rect5}></div>

                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
