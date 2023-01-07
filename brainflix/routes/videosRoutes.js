const express = require("express");
const router = express.Router();
const fs = require("fs")
const {v4: uuidv4} = require('uuid')

const videoDetails = JSON.parse(fs.readFileSync(`brainflix/data/video-details.json`));

const URL = process.env.URL || "http://localhost:8080";

let stringDate = new Date().getTime()

router.get("/", (req, res) => {
    res.json(videoDetails)
})

router.get("/:id", (req, res) => {
    videoDetail = videoDetails.filter((e)=>{
        return e.id === `${req.params.id}`
    })
    res.json(videoDetail[0]);
})

router.post("/", function(req, res) {
    const newVideoDetail = {
        "title": req.body.title,
        "channel": "Chris Lee",
        "image": `static/images/upload.jpg`,
        "description": req.body.description,
        "views": "9,999,999",
        "likes": "999,999",
        "timestamp": stringDate-1500000000,
        "comments": [
            {
                "name": "Chris",
                "comment": "Thank you for visiting",
                "timestamp": stringDate+1000000000
            },
            {
                "name": "Bryan",
                "comment": "Nicely done!",
                "timestamp": stringDate+500000000
            },
            {
                "name": "Aryanna",
                "comment": "Nicely done!",
                "timestamp": stringDate+300000000
            }
        ],
        "id": uuidv4()
    }
    videoDetails.push(newVideoDetail);
    fs.writeFileSync("./brainflix/data/video-details.json", JSON.stringify(videoDetails));
    res.json(newVideoDetail);
}) 

module.exports = router;