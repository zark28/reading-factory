import React from 'react'
import FactsItem from './FactsItem'

const FactsSection = () => {
    const factItems = [{topic:"Happy Clients",num:12345},{topic:"Projects Done",num:12345},{topic:"Awards won",num:12345}]
    return (
        <div class="container-fluid facts py-5 pt-lg-0">
        <div class="container py-5 pt-lg-0">
            <div class="row gx-0">
                {
                    factItems.map((factItem,index)=>(
                        <FactsItem topic={factItem.topic} num={factItem.num} key={index}/>
                    ))
                }

            </div>
        </div>
    </div>
    )
}

export default FactsSection
