var express = require("express");

var app = express();

app.use(express.static("dist"));

//get a list of all users
app.get("/api/users", (req, res) => {
  res.send([
    {
      id: 1,
      name: "John Does",
      age: 32,
    },
    {
      id: 2,
      name: "John Dosen",
      age: 25,
    },
    {
      id: 3,
      name: "John Dosen",
      age: 25,
    },
    {
      id: 4,
      name: "John Dosen",
      age: 25,
    },
  ]);
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`lISTENING ON PORT ${port}`));
