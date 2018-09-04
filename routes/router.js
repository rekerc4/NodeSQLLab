const express = require("express");
const router = express.Router();
const pool = require("../connection");

router.get("/router", (req, res) => {
    pool.query("SELECT * FROM cart").then((results) => {
        res.send(results.rows); 
    });
});

router.post("/router/", (req, res) => {
    console.log(req.quantity); 
    pool.query("INSERT INTO cart(product, price, quantity) VALUES($1::text, $2::text, $3::int)", [req.body.name, req.body.price, req.body.quantity]).then(() => {
        pool.query("SELECT * FROM cart").then((results) => {
            res.send(results.rows); 
        });
    });
});

router.put("/router/", (req, res) => {
    console.log(req.body[0]); 
    pool.query("UPDATE cart SET quantity = $1::int WHERE id = $2::int", [req.body[1], req.body[0]]).then(() => {
        pool.query("SELECT * FROM cart ORDER BY id").then((results) => {
            console.log(results);
            res.send(results.rows); 
        });
    }); 
});

router.delete("/router/:id", (req, res) => {
    console.log("delete ran");
    pool.query("DELETE FROM cart WHERE id=$1::int", [parseInt(req.params.id)]).then(() => {
        pool.query("SELECT * FROM cart").then((results) => {
            res.send(results.rows); 
        });
    });
});

module.exports = router; 