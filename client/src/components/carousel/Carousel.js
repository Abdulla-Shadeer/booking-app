import "./carousel.css"

export default function Carousel() {
    return (<>
        <div className="carousel-container">

            <div className="carousel-title">
                <h2>Explore By Categories</h2>
            </div>

            <div className="carousel-item-container">
                <div className="carousel-item">
                    <div> <img src="/images/hotels.jpg" alt="" /> </div>
                    <p> Hotels </p>
                </div>
                <div className="carousel-item">
                    <div> <img src="/images/villas.jpg" alt="" /> </div>
                    <p> Villas </p>
                </div>
                <div className="carousel-item">
                    <div> <img src="/images/resorts.jpg" alt="" /> </div>
                    <p> Resorts </p>
                </div>
                <div className="carousel-item">
                    <div> <img src="/images/hostels.jpg" alt="" /> </div>
                    <p> Hostels </p>
                </div>
            </div>


            <div className="carousel-title">
                <h2>Popular Hotels</h2>
            </div>

            <div className="carousel-item-container">
                <div className="carousel-item">
                    <div> <img src="/hotels/hotel1.webp" alt="" /> </div>
                    <p> Hotel Boss</p>
                </div>
                <div className="carousel-item">
                    <div> <img src="/hotels/hotel2.webp" alt="" /> </div>
                    <p> Hotel Grand</p>
                </div>
                <div className="carousel-item">
                    <div> <img src="/hotels/hotel3.webp" alt="" /> </div>
                    <p> Lucky Hotels</p>
                </div>
                <div className="carousel-item">
                    <div> <img src="/hotels/hotel4.webp" alt="" /> </div>
                    <p> Hotel Bluemoon</p>
                </div>
            </div>
        </div>
    </>
    )
}