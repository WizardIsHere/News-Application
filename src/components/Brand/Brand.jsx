import React from 'react'
import NewsIllustration from '../../assets/News-amico.svg'

const Brand = () => {
    return (
        <>
            <div className='text-light' style={{ marginTop: '7rem' }}>
                <h3>
                    Hey, Welcome to reactiveNews.
                </h3>

                <h6>News at Another Perspective.</h6>

                <div>
                    <img src={NewsIllustration} alt="" width='600rem' />
                </div>
            </div>
        </>
    )
}

export default Brand