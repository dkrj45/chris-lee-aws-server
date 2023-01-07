const express = require("express");
const router = express.Router();
const fs = require("fs")

const groups = JSON.parse(fs.readFileSync(`misely/assets/data/groups.json`));

router.get("/", (req, res) => {
    res.json(groups)
})

module.exports = router;