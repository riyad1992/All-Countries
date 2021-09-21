import React from 'react';
import './Country.css'
const Country = (props) => {
    const { name, capital, population, flag,} = props.country;
    const Details = () => {
        alert("What are you want to know about " + name)
    }
    return (
        <div class="col country">
            <div class="card">
                <img src={flag} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Name: {name.slice(0, 25)}</h5>
                    <p class="card-text">Capital is: {capital}</p>
                    <p><small>Population is: {population}</small></p>
                </div>
                <button onClick={Details} className="btn btn-primary mt-5">Details About {name.slice(0, 25)}</button>
            </div>
        </div>
    );
};

export default Country;


  