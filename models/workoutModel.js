const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: new Date(),
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
        duration: {
          type: Number,
          trim: true,
        },
        weight: {
          type: Number,
          trim: true,
        },
        reps: {
          type: Number,
          trim: true,
        },
        sets: {
          type: Number,
          trim: true,
        },
        distance: Number,
      },
      ,
    ],
  },
  {
    toObject: { virtuals: true },
    toJson: { virtuals: true },
  }
);

WorkoutSchema.virtual("totalDuration").get(function () {
  let total = 0;
  for (let i = 0; i < this.exercises.length; i++) {
    total += +this.exercises[i].duration;
    console.log("exercises: ", this.exercises[i].duration);
  }
  return total;
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
