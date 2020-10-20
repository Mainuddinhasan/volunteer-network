import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FreewillService.css'

const FreewillService = ({vService}) => {
// 

    // const handleVolunteerWorks = () => {
    //     console.log('clicked')

    // }
    return (
     
            <div className="col-md-3 ">
            <Link to={`/registration/${vService.itemId}`} >
            <div className="card "  style={{width: '18rem'}}>
            {/* <img src={volunteerItem.img} className="card-img-top " alt="..."></img> */}

            <img src={vService.img} className="card-img-top " alt="..."></img>
            <div className="card-body">
            <h5 className="card-title">{vService.name}</h5>
            </div>
            </div>
            </Link>
           
        </div>
     
        
        // <div clasName="card" style="width: 18rem;">
        //     <div>
        //     <img src={vService.img} alt="" className="card-img-top">
        //     </div>
        //     <div className="card-body">
        //     <h5 className="card-title">{vService.name}</h5>
        //     </div>
        // </div>
        
        
        
        
       

        
    
    );
};

export default FreewillService;