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


app.get("/create", (req, res) => {
    db.query("CREATE TABLE food (id varchar(255), address varchar(255), name varchar(255), category varchar(255), allergen varchar(255), restaurant varchar(255), creator varchar(255))", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.get("/create2", (req, res) => {
    db.query("CREATE TABLE claimR (username varchar(255), name varchar(255), time varchar(255), restaurant varchar(255))", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.get("/create3", (req, res) => {
    db.query("CREATE TABLE claimU (address varchar(255), name varchar(255), time varchar(255), restaurant varchar(255), username varchar(255))", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.get("/delete", (req, res) => {
    db.query("DROP TABLE claimU", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
})

app.get("/delete2", (req, res) => {
    db.query("DROP TABLE claimR", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
})

app.get("/delete3", (req, res) => {
    db.query("DROP TABLE food", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
})

app.get("/delete4", (req, res) => {
    const id = req.query.id;
    db.query("DELETE FROM food WHERE id=" + mysql.escape(String(id)), (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
})

app.get("/insert2", (req, res) => {
    const id = req.query.id;
    const name = req.query.name;
    const restaurant = req.query.restaurant;
    const address = req.query.address;
    const allergen = req.query.allergen;
    const category = req.query.category;
    const creator = req.query.creator;
    db.query("INSERT INTO food (id, address, name, category, allergen, restaurant, creator) VALUES (?,?,?,?,?,?,?)", [id, address, name, category, allergen, restaurant, creator], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.get("/insert3", (req, res) => {
    const name = req.query.name;
    const restaurant = req.query.restaurant;
    const time = req.query.time;
    const username = req.query.username;
    console.log(name + " " + restaurant + " " + username + " " + time);
    db.query("INSERT INTO claimR (username, name, time, restaurant) VALUES (?,?,?,?)", [username, name, time, restaurant], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.get("/insert4", (req, res) => {
    const name = req.query.name;
    const restaurant = req.query.restaurant;
    const address = req.query.address;
    const username = req.query.username;
    const time = req.query.time;
    console.log(name + " " + restaurant + " " + address + " " + username + " " + time);
    db.query("INSERT INTO claimU (address, name, time, restaurant, username) VALUES (?,?,?,?,?)", [address, name, time, restaurant, username], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.get("/count", (req, res) => {
    db.query("SELECT COUNT(id) AS count FROM food", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.get("/search", (req, res) => {
    db.query("SELECT * FROM food", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.get("/search2", (req, res) => {
    const restaurant = req.query.restaurant;
    db.query("SELECT username, name, time FROM claimR WHERE restaurant=" + mysql.escape(String(restaurant)), (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.get("/search3", (req, res) => {
    const user = req.query.username;
    db.query("SELECT name, restaurant, address, time FROM claimU WHERE username=" + mysql.escape(String(user)), (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.get("/search5", (req, res) => {
    const user = req.query.user;
    db.query("SELECT name, restaurant, address, time, username FROM claimU", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.get("/search4", (req, res) => {
    const id = req.query.id;
    db.query("SELECT * FROM food WHERE id=" + mysql.escape(String(id)), (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
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

app.get("/check", (req, res) => {
    const user = req.query.user;
    const email = req.query.email;
    const type = req.query.type;
    if (type === "Restaurant") {
        db.query("SELECT username, email FROM Rlogin WHERE username=" + mysql.escape(String(user)) + " OR email=" + mysql.escape(String(email)), (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });
    } else if (type === "Customer") {
        db.query("SELECT username, email FROM Clogin WHERE username=" + mysql.escape(String(user)) + " OR email=" + mysql.escape(String(email)), (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });
    }
});

app.get("/list", (req, res) => {
    const alrg = req.query.alrg;
    const cat = req.query.cat;
    db.query("SELECT pass FROM Rlogin WHERE allergen=" + mysql.escape(String(alrg)) + " AND category=" + mysql.escape(String(cat)), (err, result) => {
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