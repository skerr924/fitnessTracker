const Workout = require("../models/workoutModel");

module.exports = function (app) {
  //get all workouts
  app.get("/api/workouts", function (req, res) {
    Workout.find()
      .then((data) => {
        console.log("GOT all workouts", data);
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  //add a new workout
  app.post("/api/workouts", function (req, res) {
    Workout.create({})
      .then((data) => {
        console.log("CREATED new workout");
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  //find data without a certain range
  app.get("/api/workouts/range", function (req, res) {
    Workout.find()
      .then((data) => {
        console.log("GOT data within range");
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  //find workout by ID and update that workout
  app.put("/api/workouts/:id", (req, res) => {
    Workout.findOneAndUpdate(
      { _id: req.params.id },
      {
        //pushes new exercise to the existing workout
        $push: { exercises: req.body },
      },
      { new: true }
    )
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
