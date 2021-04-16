const express = require("express");
const path = require("path");
const app = express();
var PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
require("./routes/apiRoutes")(app);
require("./routes/htmlroutes")(app);

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
