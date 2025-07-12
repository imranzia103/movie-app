import mongoose from "mongoose";


//define Schema


const moviesSchema = new mongoose.Schema({
    name:{type: String, required: true, trim: true},
    ratings : { type: Number, required: true, min:1, max:5},
    money :{
        type: mongoose.decimal128,
        requird : true,
        validate: (v) => v >= 10,
    },

    genre:{type: Array},
    isActive :{type: Boolean},
    comments: [
        {value:{type: String}, published:{type: Date, default: Date.now()}},

    ],
});

const MovieModel = mongoose.model("Movie", moviesSchema);




const createDoc = async () => {
    try {
        const m1 = new MovieModel({
            name: "Extraction 2",
            ratings: 4,
            money: 60000,
            genre: ['action', 'adventure'],
            isActive: true,
            comments: [{ value: "that was an amazind movie."}]
        })
        
        const result = await m1.save()
        console.log(result)
        
    } catch (error) {
        console.log(error)
        
    }
}
export {createDoc};