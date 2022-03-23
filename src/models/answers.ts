import { model, Schema } from "mongoose";
import { IAnswer, IAnswers } from '../types/answers';

const AnswerSchema = new Schema({
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
    }
})

const AnswersBlockSchema = new Schema({
    values: [AnswerSchema], user: { type: String, required: true }
})

export const AnswerModel = model<IAnswer>("Answer", AnswerSchema)
export const AnswersBlockModel = model<IAnswers>("Answers", AnswersBlockSchema)
