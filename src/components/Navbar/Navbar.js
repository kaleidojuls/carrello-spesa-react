import React from 'react';
import { useSelector } from 'react-redux';

import './Navbar.css';

import Button from "../Button/Button";
import Searchbar from "./Searchbar/Searchbar";


const Navbar = ({ setSearch, pageState }) => {

    const [page, setPage] = pageState;
    const newPage = page === 'home' ? "cart" : "home";
    const buttonClass = page === 'home' ? "success" : "danger";
    const iconClass = page === 'home' ? "right" : "down";
    const counter = useSelector((state) => state.cartHandler.counter);

    function returnHome() {
        setPage('home');
    }

    return (
        <nav className="navbar navbar-dark bg-dark fixed-top">
            <Searchbar setSearch={setSearch} pageState={pageState} />
            <div className="title" onClick={() => returnHome()}>
                <h1 className="navbar-brand">Shopping Online</h1>
            </div>
            <Button className={`btn btn-${buttonClass}`} buttonOnClick={() => { setPage(newPage) }}>
                <i className={`bi bi-caret-${iconClass}-fill`}></i> <i className="bi bi-cart4"></i>({counter})
            </Button>
        </nav>
    )
}

export default Navbar;