const mongoose = require("mongoose");
const db = mongoose.connection;

mongoose.connect("mongodb://localhost:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", async function () {
    console.log("we are connected");
});

export default db;
