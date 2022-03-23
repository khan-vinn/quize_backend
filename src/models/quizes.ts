import { model, Schema } from "mongoose";
import { IQuistion, IQuize } from '../types/quize';

const QuestionSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    answers: {
        type: [String],
        required: true,
        minlength: 2
    },
    answer: {
        type: String,
        required: true
    },
    pictures: {
        type: [String]
    }
})

const QuizeSchema = new Schema({
    values: [QuestionSchema], user: { type: String, required: true }
})

export const QuestionModel = model<IQuistion>("Question", QuestionSchema)
export const QuizeModel = model<IQuize>("Quize", QuizeSchema)
