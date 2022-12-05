import Express from "express";
import bodyParser from "body-parser";
import Cors from "cors";
import mysql from "mysql"
import path from "path";

const app = Express()

app.use(bodyParser.json())
app.use(Cors())
app.listen(3001, () => console.log("server started on port 3001"))

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bookingapp'
});
connection.connect();


app.post("/api/hotels", (req, res) => {
    let hotelsArr = []
    let location = req.body.city
    let responseArr = []

    let querySelectHotels = "SELECT name FROM hotels WHERE location LIKE '" + location + "'"

    try {
        connection.query(querySelectHotels, (error, results) => {
            error ? console.log("Error: " + error) :
                results.map((item) => {
                    hotelsArr.push(item.name)
                })

            hotelsArr.map((item) => {
                let query = "SELECT COUNT(rooms.hotel_id) AS count, rating, image, rooms.price, features FROM hotels LEFT JOIN rooms ON hotels.id = rooms.hotel_id WHERE name = '" + item + "';"
                connection.query(query, (err, result) => {
                    if (err) {
                        console.log(err)
                    } else {
                        let name = item
                        let rooms = result[0].count
                        let rating = result[0].rating
                        let features = JSON.parse(result[0].features)
                        let price = (result[0].price)
                        if (result[0].price <= price) {
                            price = result[0].price;
                        }
                        let img = "/hotels/"+result[0].image

                        responseArr.push({
                            "name":name,
                            "rooms":rooms,
                            "rating":rating,
                            "features":features,
                            "minPrice":price,
                            "img":img
                            });
                    }
                })
            })
        });
    } catch (error) {
        console.log("error!")
    }

    let time = 2000;

    if (responseArr.length === 0) {
        setTimeout(() => {
            if (responseArr.length === 0) {
                res.json({"name":"nd"});
                res.end();
                time = 0;
            } else {
                res.send(responseArr);
                res.end();
                time = 0;
            }
        }, time)
    }
})


