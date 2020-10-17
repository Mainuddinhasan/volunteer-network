import React from 'react';
import './FreewillService.css'

const FreewillService = ({vService}) => {
    return (
     
            <div className="col-md-3 ">
            <div class="card " style={{width: '18rem'}}>
            <img src={vService.img} class="card-img-top " alt="..."></img>
            <div class="card-body">
                <h5 class="card-title">{vService.name}</h5>
            </div>
            </div>
           
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