import React from 'react'
import SingleCard from'../components/SingleCard'

const Cards = ({cani}) => {

    return (

        <section className="section">
            <div className="cards-content">
                {cani.map(cane => {
                    return <SingleCard key={cane.contentful_id} {...cane} />
                })}
            </div>
        </section>
    )
}

export default Cards
