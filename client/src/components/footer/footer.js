import "./footer.css"

export default function Footer(){
    return(
        <div className="footer-container">
            <h1>Stay in the know</h1>
            <div className="subscriber">
                <input type="email" placeholder="enter your email"/>
                <button>Subscribe</button>
            </div>

            <p>&#169; 2022 Abdullah Shadeer</p>
        </div>
    )
}