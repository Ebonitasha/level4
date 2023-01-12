import React from "react";

export default function Main(){

    return(
        <main className="body">
            
            
            <h1 className="services">SERVICES WE OFFER</h1>
                <div className="flexbox">
                        <h2 className="repair1">PLUMBING REPAIR</h2>
                        <p className="repair">Our team of experienced plumbing technicians are ready to handle any plumbing issue you may be experiencing from diagnosis to repair.</p>
                        <h2 className="sewer1">SEWER AND DRAINAGE</h2>
                        <p className="sewer">Our plumbing professionals have the tools to handle any drain cleaning issue, from clogged drains to sewer rooter repair. We also offer sewer camera inspections.</p>
                </div>
                <div className="box2">
                        <h2 className="toilet1">TOILETS</h2>
                        <p className="toilet">Whether you need to replace your old toilet with a high efficiency model, a new faucet or fixture, our experienced plumbers are ready for the job</p>
                        <h2 className="water1">WATER HEATER REAPAIR</h2>
                        <p className="water">Our water heater specialists have the expertise to install and service both standard and tankless water heaters.</p>
                </div>
                    <br/>
            <h1 className="deals">!!Deals & Discounts!!</h1>
            <img className="discount" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiLhUIWHAdcZOkDlTA7wyRpK4JDlseFHR_-w&usqp=CAU"/>
        </main>
    )
}