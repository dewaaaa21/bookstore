const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

require("./db.js");

const app = express();
const port = 4000;
const routeAkses = require("./routes.js")

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use("/book", routeAkses);

app.listen(port, () => {
  console.log("Server berhasil running pada port : " + port);
});