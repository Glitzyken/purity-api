const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = require("./app");

dotenv.config({ path: "./config.env" });

mongoose
  .connect("mongodb://localhost:27017/purity", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection is successful!"));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Application listening port ${port}...`);
});
