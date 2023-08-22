var express = require("express");
var Alien = require("./alien");

var Router = express.Router();

Router.get("/", async (req, res) => {
  try {
    const aliens = await Alien.find();
    res.json(aliens);
  } catch (err) {
    res.send("error:" + err);
  }
});

Router.get("/:id", async (req, res) => {
  try {
    const alien = await Alien.findById(req.params.id);
    res.json(alien);
  } catch (err) {
    res.send("error:" + err);
  }
});

Router.patch("/:id", async (req, res) => {
  try {
    const alien = await Alien.findById(req.params.id);
    alien.sub = req.body.sub;
    const a1 = await alien.save();
    res.json(alien);

    res.json(alien);
  } catch (err) {
    res.send("error:" + err);
  }
});

Router.delete("/:id", async (req, res) => {
  try {
    const alien = await Alien.delete(req.params.id);
    const a1 = await alien.save();
    res.json(a1);

    res.json(alien);
  } catch (err) {
    res.send("error:" + err);
  }
});

Router.post("/", async (req, res) => {
  const alien = new Alien({
    name: req.body.name,
    tech: req.body.tech,
    sub: req.body.sub,
  });

  try {
    const a1 = await alien.save();
    res.json(a1);
  } catch (err) {
    res.send("error");
  }
});

module.exports = Router;
