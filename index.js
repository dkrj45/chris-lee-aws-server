const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8080;

//brainflix routes
const videosRoutes =  require("./brainflix/routes/videosRoutes")

//misely routes
const providerRoute = require("./misely/routes/providersRoute");
const bookingsRoute = require("./misely/routes/bookingsRoute");
const classesRoute = require("./misely/routes/classesRoute");
const groupsRoute = require ("./misely/routes/groups");
const informationRoute = require("./misely/routes/information");

app.use(cors());

app.use(express.json());

//brainflix
app.use('/static',express.static('brainflix/public'))

//Endpoint for Brainflix
app.use("/videos", videosRoutes);

//misely
app.use(express.static('misely/assets'))

// Endpoints for Misely
app.use("/providers", providerRoute);
app.use('/bookings', bookingsRoute);
app.use('/classes', classesRoute);
app.use('/groups', groupsRoute);
app.use('/information', informationRoute);

app.get('/', (req, res) => {
    res.send("Welcome to Chris's Server")
  })

app.listen(PORT, () => {
    console.log(`Server is ready on port ${PORT}`)
})