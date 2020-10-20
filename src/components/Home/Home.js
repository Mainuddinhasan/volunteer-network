import React from 'react';
import volunteerServices from '../../FakeData/FakeData';
import FreewillService from '../FreewillService/FreewillService';
import Header from '../Header/Header';
import Login from '../Login/Login';

const Home = () => {

    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div className="row card-container">
                {
                    volunteerServices.map(vService =><FreewillService key={vService.itemId} vService={vService}></FreewillService>)
             
                }

            </div>
        </div>
    );
};

export default Home;