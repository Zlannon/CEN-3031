const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "logindb.cfnvy4jewi1o.us-east-2.rds.amazonaws.com",
    port: "3306",
    user: "root",
    password: "9MLjo8ctg",
    database: "loginDB"
});


app.get("/insert", (req, res) => {
    const user = req.query.user;
    const email = req.query.email;
    const pass = req.query.pass;
    const type = req.query.type;
    if (type === "Restaurant") {
        db.query("INSERT INTO Rlogin (username, email, pass) VALUES (?,?,?)", [user, email, pass], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });
    } else if (type === "Customer") {
        db.query("INSERT INTO Clogin (username, email, pass) VALUES (?,?,?)", [user, email, pass], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });
    }
});

app.get("/pass", (req, res) => {
    const user = req.query.user;
    const type = req.query.type;
    if (type === "Restaurant") {
        db.query("SELECT pass FROM Rlogin WHERE username=" + mysql.escape(String(user)), (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });
    } else if (type === "Customer") {
        db.query("SELECT pass FROM Clogin WHERE username=" + mysql.escape(String(user)), (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });
    }
});

app.listen(3001, () => {
    console.log("server running");
});