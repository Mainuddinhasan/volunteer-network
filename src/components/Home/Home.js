import React, { useEffect, useState } from 'react';
import volunteerServices from '../../FakeData/FakeData';
import FreewillService from '../FreewillService/FreewillService';
import Header from '../Header/Header';
// import Login from '../Login/Login';

const Home = () => {
    // const [volunteerItems,setVolunteerItems] = useState([])

    //   useEffect(()=>{
    //     fetch('http://localhost:5000/products')
    //     .then(res => res.json())
    //     .then(data => setVolunteerItems(data))
    //   }, [])


    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div className="row card-container">
                {
                    volunteerServices.map(vService =><FreewillService key={vService.itemId} vService={vService}></FreewillService>)
                    // volunteerItems.map(vService =><FreewillService key={vService.itemId} vService={vService}></FreewillService>)
             
                }

            </div>
            
        </div>
    );
};

export default Home;

   // const handleAddProduct = () => {
    //     // fetch('http://localhost:5000/volunteerAllItemsAdd')
    //     fetch('http://localhost:5000/addProduct', {
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify(volunteerServices)
    //     })

    //   }