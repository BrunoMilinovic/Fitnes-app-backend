const express = require("express");
const app = express();
const Register = require("./routes/user.js");
const Blog = require("./routes/blog.js");
const jwksRsa = require("jwks-rsa");
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.use("/api/user", Register);
app.use("/api/user/blog", Blog);
app.use(bodyParser.json());

const Port = 2000;
app.listen(Port, () => {
  console.log(`Server is running on ${Port}`);
});
