const express = require("express");
const routes = express.Router();

// konekcija na bazu - prizma -  mysql
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

routes.post("/newblog", async (req, res) => {
  try {
    await prisma.post.create({
      data: {
        First_Name: req.body.FirstName,
        Last_Name: req.body.LastName,
        Message: req.body.Message,
        Email: req.body.Email,
        Title: req.body.Title,
        Subtitle: req.body.Subtitle,
        Image: req.body.Image,
      },
    });
    console.log(req.body);
    res.send({ status: "ok", post: "Create a post" }).status(200);
  } catch (err) {
    console.log(err);
    res.send(`error : ${err}`).status(500);
  }
});

routes.get("/", async (req, res) => {
  try {
    const data = await prisma.post.findMany();
    res.json(data).status(200);
  } catch (err) {
    res.send(`error : ${err}`).status(404);
  }
});

module.exports = routes;
