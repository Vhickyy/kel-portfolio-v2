import mongoose, {Schema} from "mongoose";

const PortfolioSchema = new Schema(
    {
        // email: {
        //     type: String,
        //     unique: true,
        //     required: true
        // },
        user:{
            type: String,
        },
        skills: [{id:String, name: String, rate: Number }],
        experience: [{id:String, job:String, location:String, started: Number, end: Number}],
        videos: [{id:String, thumbnail: String, youtube:String, detail:String}],
        project: [{id:String,image:String,detail:String}]
    },
    {timestamps: true}
)

export default mongoose.models.User || mongoose.model("Portfolio", Portfolio);