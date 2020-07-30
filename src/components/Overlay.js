/* //da non usare
import React from 'react'
import OverlaySlide from '../components/OverlaySlide'

const Overlay = ({ cani}) => {

    return (
        <div className="foto-container">
           
               {cani.map(cane => {
                   return <OverlaySlide key={cane.nome + cane.contentful_id} {...cane} />
               })}
        
        </div>
    )
}

export default Overlay
 */