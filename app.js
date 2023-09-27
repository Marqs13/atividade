const express = require("express");
require("dotenv").config();
const routerApp = require("./routes/route");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(routerApp);

app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});
