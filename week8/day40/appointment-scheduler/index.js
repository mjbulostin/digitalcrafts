const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3040;

// instance of our connection to our db
// via the models
const { doctor } = require("./models");

const es6Renderer = require("express-es6-template-engine");
app.use(express.urlencoded({ extended: true }));

// middleware
app.use(express.json());
app.use(cors());
app.engine("html", es6Renderer);
app.set("appointment", "../appointment");
app.set("appointment schedule", "html");

// routes
app.get("/", (req, res) => res.render("home"));
app.get("/appointment_scheduler", (req, res) => {
  res.render("appointmentScheduler");
});

// patients

app.get("/patients", async (req, res) => {
    const patientsFromDB = await patient.findAll();
    //   console.log(res.json(patientsFromDB));
    res.render("patient", {
      locals: {
        patient: patientsFromDB,
        title: "Patient",
      },
    });
  });
  
  app.get("/patients/:id", async (req, res) => {
    const { id } = req.params;
    const patientsFromDB = await patient.findByPk(id);
  
    res.render("patient", {
      locals: {
        patient: [patientsFromDB],
        title: "Patient",
      },
    });
  });
  // post and update
  app.post("/patients", async (req, res) => {
    const { name, email } = req.body;
    const patientsFromDB = await patient.create({
      name,
      email,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.status(200).redirect("/patients");
  });
  app.post("/patient_update", async (req, res) => {
    const { name } = req.body;
  
    const patientsFromDB = await patient.update(req.body, {
      where: { name: name },
    });
  
    res.status(200).redirect("/patients");
  });
  
  app.post("/patient_delete/:id", async (req, res) => {
    const { id } = req.params;
    console.log(id);
  
    const patientsFromDB = await patient.destroy({
      where: { id: id },
    });
  
    res.status(200).redirect("/patients");
  });


// doctors

app.get("/doctors", async (req, res) => {
  const doctorsFromDB = await doctor.findAll();
  //   console.log(res.json(doctorsFromDB));
  res.render("doctor", {
    locals: {
      doctor: doctorsFromDB,
      title: "Doctor",
    },
  });
});

app.get("/doctors/:id", async (req, res) => {
  const { id } = req.params;
  const doctorsFromDB = await doctor.findByPk(id);

  res.render("doctor", {
    locals: {
      doctor: [doctorsFromDB],
      title: "Doctor",
    },
  });
});
// post and update
app.post("/doctors", async (req, res) => {
  const { name, email } = req.body;
  const doctorsFromDB = await doctor.create({
    name,
    email,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  res.status(200).redirect("/doctors");
});
app.post("/doctor_update", async (req, res) => {
  const { name } = req.body;

  const doctorsFromDB = await doctor.update(req.body, {
    where: { name: name },
  });

  res.status(200).redirect("/doctors");
});

app.post("/doctor_delete/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);

  const doctorsFromDB = await doctor.destroy({
    where: { id: id },
  });

  res.status(200).redirect("/doctors");
});

app.listen(PORT, () => console.log(`On port ${PORT}`));