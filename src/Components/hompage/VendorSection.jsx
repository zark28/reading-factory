import React from 'react'

const VendorSection = () => {
    const vendors= ["img/vendor-2.jpg","img/vendor-3.jpg","img/vendor-4.jpg","img/vendor-5.jpg","img/vendor-6.jpg","img/vendor-7.jpg","img/vendor-8.jpg","img/vendor-9.jpg","img/vendor-1.jpg",]
    return (
        
    <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container py-5 mb-5">
            <div class="bg-white">
                <div class="owl-carousel vendor-carousel">
                    {vendors.map((vendor,index)=>
                    <img src={vendor[index]} alt="" key={index}/>)}
                </div>
            </div>
        </div>
    </div>
    )
}

export default VendorSection
