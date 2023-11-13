import mongoose, {Schema} from "mongoose";



const UserSchema = new Schema(
    {
        email: {
            type: String,
            unique: true,
            required: true
        },
        fullName: {
            type: String,
            required: true
        },
        password: {
            type: String,
            unique: true,
        }
    },
    {timestamps: true}
)

export default mongoose.models.User || mongoose.model("User", UserSchema);