import React from 'react'
import Layout from '../../component/layout'
import styles from './home.module.css'

const Home = () => {
    return (
        <>
            <Layout>
                <div className={styles.home}>

                    <div className={styles.home_left}>
                        <img className={styles.home_left_imgae} src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt="" />
                    </div>
                    <div className={styles.home_right}>
                        <div className={styles.home_right_bio}>
                            <span className={styles.home_right_name}>Muhammad Hastiningrat</span>
                            <span className={styles.home_right_title}>Web Developer</span>
                            <div className={styles.home_right_skill}>
                                <img className={styles.home_right_medsos_icon_shadow} src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png' alt='' />
                                <img className={styles.home_right_medsos_icon_shadow} src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png' alt='' />
                                <img className={styles.home_right_medsos_icon_shadow} src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png' alt='' />
                                <img className={styles.home_right_medsos_icon_shadow} src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' alt='' />
                                <img className={styles.home_right_medsos_icon_shadow} src='https://cdn-icons-png.flaticon.com/512/5968/5968322.png' alt='' />
                            </div>
                        </div>
                        <div className={styles.home_right_medsos}>
                            <img className={styles.home_right_medsos_icon} src='https://cdn-icons-png.flaticon.com/512/733/733635.png' alt='' />
                            <img className={styles.home_right_medsos_icon} src='https://cdn-icons-png.flaticon.com/512/739/739193.png' alt='' />
                            <img className={styles.home_right_medsos_icon} src='https://cdn-icons-png.flaticon.com/512/3536/3536569.png' alt='' />
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Home