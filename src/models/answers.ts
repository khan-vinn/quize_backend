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
    values: [
        {
            type: Schema.Types.ObjectId,
            ref: "Answer"
        }
    ],
    user: {
        type: String, required: true
    },
    quize_id: {
        type: Schema.Types.ObjectId, ref: "Quize"
    }
})

export const AnswerModel = model<IAnswer>("Answer", AnswerSchema)
export const AnswersBlockModel = model<IAnswers>("Answers", AnswersBlockSchema)
