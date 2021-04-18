const router = require('express').Router();
const db = require('../models');
const path = require("path");


router.get("/workouts", async (req, res) => {
    try {
        // const workoutData = await db.Workout.find({})
        const workoutData = await db.Workout.aggregate([
            {$set: {
                totalDuration: {$sum: "$exercises.duration"}
            }},
        ])
        console.log(workoutData)
        res.status(200).json(workoutData);
        } catch (err) {
            res.status(400).json(err);
        }
    });

router.get("/workouts/range", async (req, res) => {
    try {
        // const workoutData = await db.Workout.find({})
        const workoutData = await db.Workout.aggregate([
            {$set: {
                totalDuration: {$sum: "$exercises.duration"}
            }},
        ])
        console.log(workoutData)
        res.status(200).json(workoutData) 
        } catch (err) {
            res.status(400).json(err);
        }
    });

router.post("/workouts", async (req, res) => {
    try {
        const workoutData = await db.Workout.create(req.body)
        res.status(200).json(workoutData);
        } catch (err) {
            res.status(400).json(err);
        }
    });

router.put("/workouts/:id", async (req, res) => {
    try{
        const workoutData = await db.Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
        res.status(200).json(dbWorkout)
        } catch (err) {
            res.status(400).json(err);
        }
    });


module.exports = router;