const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  date: {
    type: Date,
    default: Date.now(),
  },
  totalDuration: {
    type: Number,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
      },
      name: {
        type: String,
        trim: true,
      },
      exerciseDuration: Number,
      weight: Number,
      reps: Number,
      sets: Number,
      distance: Number,
    },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
