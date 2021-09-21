import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])

    const SearchApiByLetter= () => {
        const InputValue = document.getElementById('input-field').value;
        fetch(`https://restcountries.eu/rest/v2/name/${InputValue}`)
        .then((res) => res.json())
        .then((data) => setCountries(data));
    }

    const SearchApi= () => {
        const InputValue = document.getElementById('input-field').value;
        fetch(`https://restcountries.eu/rest/v2/name/${InputValue}`)
        .then((res) => res.json())
        .then((data) => setCountries(data));
    }
    return (
        <div className="container">
            <h1 className="mt-5 text-danger">Countries Found: {countries.length}</h1>
            <div className="input-group my-5 w-50 mx-auto">
                <input
                    type="text"
                    id="input-field"
                    className="form-control"
                    placeholder="Search Country"
                    onChange = {SearchApiByLetter}
                />

                <button
                    className="btn btn-outline-dark bg-danger text-white px-5"
                    id="search-btn"
                    onClick={SearchApi}
                >
                    Search
                </button>
            </div>
            <div class="row row-cols-1 row-cols-md-3 g-5">
                {countries.map((country) => (
                    <Country  country={country}
                    key={country.alpha3Code}></Country>
                ))}
            </div>
        </div>
    );
};

export default Countries;



