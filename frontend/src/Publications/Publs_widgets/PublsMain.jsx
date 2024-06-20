import React from 'react'
import PubCard from './PubCard'

export default function PublsMain(publications) {
    return (
        <div className='publs-main'>
            {
                publications.publications.map((elem)=>{
                    return <PubCard publication={elem}/>
                })



            }
            <h1> Hi there this is RAID</h1>
            <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, quibusdam id obcaecati similique ea perspiciatis iure dolorum iste et recusandae enim. Eius nihil a neque adipisci error quaerat nulla provident.</h3>
        </div>
    );
}
