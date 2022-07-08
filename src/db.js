import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/wetube", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const db = mongoose.connection;

const handleOpen = () => console.log("Connected DB");
const handleError = (error) => console.log("DB error", error);

db.on("error", handleError);
db.once("open", handleOpen);