import React from 'react';

import Button from "../../Button/Button";

const Searchbar = ({ setSearch }) => {

    const searchText = (e) => {
        const searchText = document.getElementById("search").value;
        setSearch(searchText);
        e.preventDefault();
    }

    return (
        <div className="d-flex">
            <input id="search" className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <Button className="btn btn-outline-success" buttonOnClick={(e) => searchText(e)}>
                <i className="bi bi-search"></i>
            </Button>
        </div>
    )
}

export default Searchbar;