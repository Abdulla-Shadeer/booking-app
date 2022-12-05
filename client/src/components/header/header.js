import { useState } from "react";
import "./header.css"
import Results from "../results/results.js";
import Hero from '../hero/hero.js';
import Carousel from '../carousel/Carousel.js';
import Blog from '../blog/blog.js';

export default function Header() {
    const [city, setCity] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckout] = useState("");
    const [adults, setAdults] = useState(0);
    const [Children, setChildren] = useState(0);
    const [rooms, setRooms] = useState(0);
    const [searchMode, setSearchMode] = useState(false)

    //belongs to navbar
    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

    //belongs to options div in search bar
    function addAdults() {
        setAdults(adults + 1)
    }
    function addChildren() {
        setChildren(Children + 1)
    }
    function addRooms() {
        setRooms(rooms + 1)
    }
    function removeAdults() {
        if (adults === 0) {
            document.getElementsById("adults").disable = true
        } else {
            setAdults(adults - 1)
        }
    }
    function removeChildren() {
        if (Children === 0) {
            document.getElementsById("children").disable = true
        } else {
            setChildren(Children - 1)
        }
    }
    function removeRooms() {
        if (rooms === 0) {
            document.getElementsById("rooms").disable = true
        } else {
            setRooms(rooms - 1)
        }
    }


    //belongs to search button in search bar
    const handleSubmit = async () => {
        setSearchMode(true)
    }

    return (
        <>
            <div className="header">
                <nav className="navbar">
                    <div className="topnav" id="myTopnav">
                        <a className="logo" href="/" style={{ "fontSize": "0px" }}>
                            <img width="200px" height="auto" src="/logo.svg" alt="Shadeer" />
                        </a>
                        <a href="/">Login</a>
                        <a href="/">Contact</a>
                        <a href="/"> About </a>
                        <a href="/"> Home </a>
                        <button onClick={myFunction} className="icon"> <i className="fa fa-bars"> </i> </button>
                    </div>
                </nav>

                <div className="search-bar">
                    <input id="city-input" type="text" placeholder="where are you going?" onChange={ev => setCity(ev.target.value)} />
                    <div className="date-container">
                        <p>check-in</p>
                        <input type="date" onChange={ev => setCheckIn(ev.target.value)} />
                    </div>
                    <div className="date-container">
                        <p>check-out</p>
                        <input type="date" onChange={ev => setCheckout(ev.target.value)} />
                    </div>


                    <div className="dropdown">
                        <div className="dropbtn">Adults, Children, Rooms <img src="down_facing arrow.png" alt="" /> </div>
                        <div className="dropdown-content">
                            <div>
                                Adults :
                                <button className="btn-increase-descrease" id="adults" onClick={removeAdults}> - </button>
                                {adults}
                                <button className="btn-increase-descrease" onClick={addAdults}> + </button>
                            </div>

                            <div>
                                Children : <button className="btn-increase-descrease" id="children" onClick={removeChildren}> - </button>
                                {Children}
                                <button className="btn-increase-descrease" onClick={addChildren}> + </button>
                            </div>

                            <div>
                                Rooms : <button className="btn-increase-descrease" id="rooms" onClick={removeRooms}> - </button>
                                {rooms}
                                <button className="btn-increase-descrease" onClick={addRooms}> + </button>
                            </div>
                        </div>
                    </div>


                    <button className="btn-search" onClick={handleSubmit}>
                        search
                    </button>

                </div>

            </div>
            {
                searchMode ?
                    <Results 
                    city={city}
                    rooms={rooms}
                    /> :
                    <>
                        <Hero />
                        <Carousel />
                        <Blog />
                    </>
            }
        </>
    )
}