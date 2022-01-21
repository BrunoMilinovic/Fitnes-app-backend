const express = require("express");
const routes = express.Router();
const jwksRsa = require("jwks-rsa");
const bodyParser = require("body-parser");

// konekcija na bazu - prizma -  mysql
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

//api za kreiranje usera
routes.post("/createuser", async (req, res) => {
  try {
    await prisma.user.create({
      data: {
        email: req.body.email,
        name: req.body.name,
      },
    });
    res.send({ status: "ok" }).status(200);
  } catch (err) {
    res.status(200).send(`error:${err}`);
  }
});

//api za kreiranje plana treninga
routes.post("/plan", async (req, res) => {
  try {
    await prisma.userinput.create({
      data: {
        Trener: req.body.Trener,
        Plan: req.body.Plan,
        Program: req.body.Program,
        Number_Trening: req.body.Number_Trening,
        Working_team: req.body.Working_team,
        Food: req.body.Food,
        Weight: parseInt(req.body.Weight),
        Height: parseInt(req.body.Height),

        User_name: req.body.User_name,
        User_email: req.body.User_email,
      },
    });
    res.send({ status: "ok" }).status(200);
  } catch (err) {
    res.status(200).send(`error:${err}`);
  }
});

//Api za login - korisnikaemail

routes.post("/login", async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: req.body.email,
      },
    });
    if (user) {
      res.send(user);
    } else {
      res.send({ status: "fail" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server error Occured");
  }
});

// Api za  prikaz detalja o korisniku
routes.get("/get/:id", async (req, res) => {
  try {
    const data = await prisma.user.findMany({
      where: {
        id: parseInt(req.params.id),
      },
    });
    res.json(data).status(200);
  } catch (err) {
    res.send(`error : ${err}`).status(404);
  }
});

// Api za  listanje korisnika - User role
routes.get("/render", async (req, res) => {
  try {
    const data = await prisma.user.findMany({
      where: {
        Role: "visitor",
      },
    });
    res.json(data).status(200);
  } catch (err) {
    res.send(`error : ${err}`).status(404);
  }
});

// Api za  Update korisnika --vidit dali doat sliku usera da se updatejta
routes.put("/updateuser/:id", async (req, res) => {
  try {
    const user = await prisma.user.update({
      where: {
        id: parseInt(req.params.id),
      },
      data: {
        name: req.body.Name,
        email: req.body.Email,
      },
    });
    res.json({ status: "updated", user });
  } catch (err) {
    console.log(`Eroro: ${err}`);
  }
});

// Api za  Brisanje korisnika
routes.delete("/delete/:id", async (req, res) => {
  try {
    const user = await prisma.user.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });

    res.json(`user is deleted: ${user.name}`);
    console.log(`user is deleted: ${req.params.id}`);
  } catch (err) {
    console.log(`Eroro: ${err}`);
  }
});

//api za kreiranje plana treninga
routes.post("/trenis", async (req, res) => {
  try {
    await prisma.trening.create({
      data: {
        Treningtype: req.body.Treningtype,
        UserName: req.body.Name,
        Ponavljanje: req.body.Ponavljanje,
        Date: req.body.Date,
        Hour: req.body.Hour,
        Opistreninga: req.body.Opistreninga,
        Pauze: req.body.Pauze,
      },
    });
    res.send({ status: "ok" });
  } catch (err) {
    res.send(`error:${err}`);
  }
});

// Api za  generiranje podataka o odabiru pocetnom treninga
routes.post("/jala", async (req, res) => {
  try {
    const data = await prisma.userinput.findUnique({
      where: {
        User_email: req.body.email,
      },
    });
    res.json(data).status(200);
  } catch (err) {
    res.send(`error : ${err}`).status(404);
  }
});

// api za provjerit sve treninge
routes.get("/users", async (req, res) => {
  const users = await prisma.user.findMany({
    where: {
      Role: "visitor",
    },
  });
  res.json(users);
});
routes.post("/maptrening", async (req, res) => {
  const datass = await prisma.trening.findMany({
    where: {
      UserName: req.body.name,
    },
  });
  res.json(datass);
});
module.exports = routes;
