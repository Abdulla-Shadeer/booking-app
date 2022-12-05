import { useEffect, useState } from "react";
import "./results.css"

export default function Results(params) {
    const [hotels, setHotels] = useState([]);
    const [noData, setNodata] = useState(false);
    const [message, setMessage] = useState("");
    const [length, setLength] = useState(0);
    let city = params.city;

    useEffect(() => {
        const fetchHotels = async () => {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                "city": city
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
            const fposts = await fetch('http://localhost:3001/api/hotels', requestOptions)
                .then(response => response.json())


            if (fposts.name === "nd") {
                setLength(0)
                setNodata(true)
                setMessage("no data found!")
            } else {
                setLength(fposts.length)
                setHotels(fposts)
                setNodata(false)
            }

        }
        fetchHotels()
    }, [city])



    return (
        <div className="results-page-container">


            <div className="found-results">
                <h1>{params.city} : {length} results found</h1>
            </div>

            <div className="results-and-filter-container">

                <div className="results-container">
                    {
                        noData ?
                            <div>
                                <h1> {message} </h1>
                            </div> :
                            hotels.map((item) => {
                                return (
                                    <div className="results-card" key={item.name}>

                                        <div className="results-img">
                                            <img src={item.img} alt={item.img} />
                                        </div>

                                        <div className="results-contents">
                                            <h2 className="hotel-name">{item.name} </h2>
                                            <div className="rating-container">
                                                <img src="star_orange.png" alt="rating" />
                                                <div className="rating-div"> <span><b>{item.rating}.0 Rating</b></span></div>
                                            </div>


                                            {item.features.features.map((feature) => {
                                                return (
                                                    <div className="rating-container">
                                                        <img src="check_mark.png" alt=""/>
                                                        <span> {feature} </span>
                                                    </div>
                                                )
                                            })}


                                            <div className="rating-container">
                                                <div className="occupancy">
                                                    {item.rooms} rooms available
                                                </div>
                                                <div className="occupancy">
                                                    Min-Price : {item.minPrice}.00 LKR
                                                </div>
                                            </div>

                                            <div className="rating-container">
                                                <button>Book now</button>
                                                <button className="btn-view-more">View more</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })

                    }

                </div>


                <div className="filters-container">
                    <div>
                        Filter by
                    </div>

                    <div className="rating-container">
                        Rating
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                    </div>

                    <div>
                        <input type="checkbox" name="meals" />
                        <label htmlFor="melas"> Meals included</label>
                    </div>

                    <div>
                        <input type="checkbox" name="cancellation" />
                        <label htmlFor="freeCancellation"> Free cancellation</label>
                    </div>

                    <div>
                        <input type="checkbox" name="wifi" />
                        <label htmlFor="wifi"> Free wifi</label>
                    </div>

                    <div>
                        <input type="checkbox" name="parking" />
                        <label htmlFor="parking"> Parking available</label>
                    </div>

                    <div>
                        <input type="checkbox" name="pets" />
                        <label htmlFor="pets"> Pets allowed</label>
                    </div>

                </div>
            </div>

        </div>
    )
}