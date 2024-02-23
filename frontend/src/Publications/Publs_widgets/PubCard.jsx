import React from "react";

export default function PubCard(props) {
    return (
        <div className='pubs-card'>
            <div className='pubs-card-overlay'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora officiis quo, maxime voluptate amet deserunt a consequuntur corrupti similique? Ut!</p>
               
            </div>

            <div
                className='pubs-card-image'
                style={{ backgroundImage: `url(C:\\Users\\thara\\Videos\\project1\\mongo\\website\\frontend\\src\\assets\\react.svg)` }}
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quisquam facere? Qui perspiciatis magnam nobis. Soluta sint a ea libero.</div>
            <div className='pubs-card-title'>LLM guard</div>
            <div className='pubs-card-conference'>AAAI 2024</div>
        </div>
    );
}
