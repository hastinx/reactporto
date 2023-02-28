import React from 'react'
import styles from './right.module.css'

const Right = () => {
    return (
        <>
            <div className='d-flex gap-2 me-4 align-items-center'>
                <img className={styles.img_profile} src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='' />
                <button className={styles.btn_profile}>Click Me</button>
            </div>

        </>
    )
}

export default Right