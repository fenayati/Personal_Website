const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");

//config app
const app = express();
const server = http.createServer(app);

//config body to req
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set public
app.use(express.static("public"));

//config env
require("dotenv").config();

//config mongoose
mongoose.connect(`mongodb://localhost:27017/shop2`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//config fileupload
app.use(
  fileUpload({
    createParentPath: true,
  })
);

// config Routes
const Router = require("./src/routes");
app.use(Router);

server.listen(process.env.PORT, () => {
  console.log("server running on port" + process.env.PORT);
});
