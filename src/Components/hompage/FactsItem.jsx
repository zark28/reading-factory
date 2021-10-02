import React from 'react'

const FactsItem = ({topic,num}) => {
    return (
        <div className="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
        <div className="bg-primary shadow d-flex align-items-center justify-content-center p-4" style={{height: '150px'}}>
            <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2" style={{width: '60px', height: '60px'}}>
                <i className="fa fa-users text-primary"></i>
            </div>
            <div className="ps-4">
                <h5 className="text-white mb-0">{topic}</h5>
                <h1 className="text-white mb-0" data-toggle="counter-up">{num}</h1>
            </div>
        </div>
    </div>
    )
}

export default FactsItem
