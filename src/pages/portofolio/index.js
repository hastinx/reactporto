import React from 'react'
import Layout from '../../component/layout'
import styles from './portofolio.module.css'
import danone from '../../assets/img/dnn.png'
import oms from '../../assets/img/oms.png'
import mps from '../../assets/img/mps.png'
import pims from '../../assets/img/pims.png'
import xv from '../../assets/img/xv.png'
import book from '../../assets/img/book.png'

const Portofolio = () => {
    return (
        <>
            <Layout>

                <div className='p-5 w-75 d-flex justify-content-center mx-auto flex-wrap'>
                    <img className={`rounded-3 h-auto shadow-lg mb-3 me-3 ${styles.portofolio_img}`} src={danone} alt='' style={{ width: '300px' }} />
                    <img className={`rounded-3 h-auto shadow-lg mb-3 me-3 ${styles.portofolio_img}`} src={oms} alt='' style={{ width: '300px' }} />
                    <img className={`rounded-3 h-auto shadow-lg mb-3 me-3 ${styles.portofolio_img}`} src={mps} alt='' style={{ width: '300px' }} />
                    <img className={`rounded-3 h-auto shadow-lg mb-3 me-3 ${styles.portofolio_img}`} src={pims} alt='' style={{ width: '300px' }} />
                    <img className={`rounded-3 h-auto shadow-lg mb-3 me-3 ${styles.portofolio_img}`} src={xv} alt='' style={{ width: '300px' }} />
                    <img className={`rounded-3 h-auto shadow-lg mb-3 me-3 ${styles.portofolio_img}`} src={book} alt='' style={{ width: '300px' }} />
                </div>
            </Layout>
        </>
    )
}

export default Portofolio