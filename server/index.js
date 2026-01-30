const express = require("express");
const app = express();
const Port = 5000;
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Backend is running!");
});

app.get("/api/hello", (req, res)=> {
    res.json({ message: "Biography"});
});

app.listen(Port, () => {
  console.log(`Server running on http://localhost:${Port}`);
});