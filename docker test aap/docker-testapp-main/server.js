const express = require("express");
const path = require("path");
const app = express();
const { MongoClient } = require("mongodb");

const PORT = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

const MONGO_URL =
  "mongodb://admin:qwerty@mongodb:27017/apnacollege-db?authSource=admin";

const client = new MongoClient(MONGO_URL);

// GET users
app.get("/getUsers", async (req, res) => {
  await client.connect();

  const db = client.db("apnacollege-db");

  const data = await db.collection("users").find({}).toArray();

  res.send(data);
});

// POST user
app.post("/addUser", async (req, res) => {
  const userObj = req.body;

  await client.connect();

  const db = client.db("apnacollege-db");

  const result = await db.collection("users").insertOne(userObj);

  res.send(result);
});


app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});