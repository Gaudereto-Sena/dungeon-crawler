import { Schema } from "mongoose"
import { IHero, heroSchema } from "../hero/hero.schema"

export interface IUser {
    name: string,
    surname: string,
    username: string,
    password: string,
    email: string,
    heroes: IHero[],
    crystal: number
}

export const userSchema = new Schema<IUser>({
    username: {
        type: Schema.Types.String,
        required: true,
        unique: true,
        minlength: 2,
        maxlength: 18,
        lowercase: true
    },
    name: {
        type: Schema.Types.String,
        required: true,
        minlength: 2,
        maxlength: 64
    },
    surname: {
        type: Schema.Types.String,
        required: true,
        minlength: 2,
        maxlength: 64
    },
    email: {
        type: Schema.Types.String,
        required: true,
        minlength: 6,
        maxlength: 64
    },
    password: {
        type: Schema.Types.String,
        required: true,
        minlength: 6,
        maxlength: 64
    },
    crystal: {
        type: Schema.Types.Number,
        required: true,
        min: 0
    },
    heroes: [heroSchema]
})