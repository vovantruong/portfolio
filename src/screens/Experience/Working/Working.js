import React from 'react'
import classNames from 'classnames/bind'
import styles from './Working.module.scss'

const cx = classNames.bind(styles)

const Working = () => {
    return (
        <div className={cx('working')}>
            <div className={cx('wrap-work')}>
                <h2 className={cx('work-title')}>Thu Duc college of technology.</h2>
                <div className={cx('work-prj')}>
                    <h2 className={cx('work-prj__title')}>
                        03/2021 - 07/2021 | Online Shopping - ReactJs [ Web Developer ]
                    </h2>
                    <h2 className={cx('work-prj__title')}>
                        09/2021 - 12/2021 | Car Blog - Laravel & VueJs [ Web Developer ]
                    </h2>
                </div>
            </div>
            <div className={cx('wrap-work')}>
                <h2 className={cx('work-title')}>Onicorn communication joint stock company (Internship)</h2>
                <div className={cx('work-prj')}>
                    <h2 className={cx('work-prj__title')}>
                        11/2021 - 01/2022 | NFT Marketplace - ReactJs [ Web Developer ]
                    </h2>
                    <p className={cx('work-prj__desc')}>
                        - During this process, I participated in an online internship at
                        the company and worked on an NFT website project using the
                        ReactJs framework.
                    </p>
                    <h2 className={cx('work-prj__title')}>
                        02/2022 - 04/2022 | Nextia NFT - ReactJS [ Web Developer ]
                    </h2>
                    <p className={cx('work-prj__desc')}>
                        - Is a project about a website to buy and sell NFT related items,
                        with a connection to a cryptocurrency storage wallet
                        (Metamask). Connect API to get faq information put on the
                        website
                    </p>
                </div>
            </div>
            <div className={cx('wrap-work')}>
                <h2 className={cx('work-title')}>Isaigon marketing C.o | 06/2022 - 05/2023 (Fresher)</h2>
                <div className={cx('work-prj')}>
                    <p className={cx('work-prj__desc')}>
                        - Participate in the design of projects in terms of user
                        interface, landing page, blog, ...
                    </p>
                    <p className={cx('work-prj__desc')}>
                        - Website interface design for e-sports game genres,
                        payment pages, authentication, ..
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Working