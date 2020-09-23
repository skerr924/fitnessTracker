const Workout = require("../models /workout")

module.exports = function(app){ 

    //get all workouts 
    app.get("/api/workouts",function(req,res){  
        Workout.find()
        .then(data =>{  
            console.log("GOT all workouts")
            res.json(data)
        })
        .catch(err => { 
            res.json(err)
        })
    });

    //add a new workout 
    app.post("/api/workouts",function (req,res){    
        Workout.create({})
        .then(data => 
            console.log("CREATED new workout");
            res.json(data)
        .catch(err => { 
            res.json(err)
        })
    });

    //find data without a certain range 
    app.get("/api/workouts/range",function(req,res){  
        Workout.find()
        .then(data =>{  
            console.log("GOT data within range")
            res.json(data)
        })
        .catch(err => { 
            res.json(err)
        })
    });

    //find workout by ID 
    app.put("/api/workouts/:id",({body,params},res)=>{   
        Workout.findByIdAndUpdate(  
         params.id,
         {$push:{exercises:body} },
         {new: true,runValidators:true }
        )
        .then(data => {  
            console.log("FOUND workout by ID")
            res.json(data)
        }) 
        .catch(err => { 
            res.json(err)
        })
    });
}