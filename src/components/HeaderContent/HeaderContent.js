import React from 'react';
import './HeaderContent.css'

const HeaderContent = () => {
    return (
        <div className="mt-5 mb-3 text-center">
            <h1>I GROW BY HELPING PEOPLE IN NEED.</h1><br />
            <input className="input-style"type="text" placeholder="  Search..." />
            <button type="button" className="btn-style">Search</button>
        </div>
    );
};

export default HeaderContent;
