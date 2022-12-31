import { model, Schema } from "mongoose";

// Define the User schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 50,
    },
    mobile: {
        type: String,
        required: true,
        //  validate number is 10 digits
        validator: {
            validator: (v: string) => {
                return /\d{10}/.test(v);
            },
            message: (props: any) => `${props.value} is not a valid mobile number!`
        }
    },
    type: {
        type: String,
        required: true,
        // type is either lander or borrower
        enum: {
            values: ['lander', 'borrower'],
            message: 'Type is either: lander or borrower'
        },
    },
});


export const UserModel = model("user", UserSchema);