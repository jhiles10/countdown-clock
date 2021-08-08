const express = require("express");
const router = express.Router();

const deadline = "December 31 2021 23:59:59 GMT+0200";

const getRemainingTime = endtime => {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total/1000) % 60);
    const minutes = Math.floor((total/1000/60) % 60);
    const hours = Math.floor((total/(1000*60*60)) % 24);
    const days = Math.floor(total/(1000*60*60*24));

    const response = [];
    response.push(total);
    response.push(days);
    response.push(hours);
    response.push(minutes);
    response.push(seconds);

    return response;
}

console.log(getRemainingTime(deadline));

router.get("/", async (req, res) => {

    try {
        res.json(getRemainingTime(deadline));
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;