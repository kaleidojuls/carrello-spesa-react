import React from 'react';

import "./Searchbar.scss";

import Button from "../../Button/Button";


const Searchbar = ({ setSearch, pageState }) => {

    const [page, setPage] = pageState;

    function searchText(e) {
        const searchText = document.getElementById("searchText").value;

        if (page === "cart") {
            setPage("home");
        }

        setSearch(searchText);
        e.preventDefault();
    }

    return (
        <div id="search" className="d-flex">
            <button className="searchBtn btn btn-outline-success" onClick={(e) => searchText(e)}>
                <i className="bi bi-search"></i>
            </button>
            <input id="searchText" className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        </div>
    )
}

export default Searchbar;