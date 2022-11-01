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
    password: "9MLko8ctg",
    database: "loginDB"
});


app.get("/insert", (req, res) => {
    const user = req.query.user;
    const email = req.query.email;
    const pass = req.query.pass;
    console.log(user);
    console.log(email);
    console.log(pass);
    db.query("INSERT INTO login (username, email, pass) VALUES (?,?,?)", [user, email, pass], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.get("/pass", (req, res) => {
    const user = req.query.user;
    console.log(user);
    db.query("SELECT pass FROM login WHERE username=" + mysql.escape(String(user)), (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.listen(3001, () => {
    console.log("server running");
});