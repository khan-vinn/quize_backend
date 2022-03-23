import { Request, Response } from "express";
import { AnswerModel, AnswersBlockModel } from '../models/answers';
import { IAnswer, IAnswers } from "../types/answers";

const getAnswers = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const answers = await AnswersBlockModel.findById(id)
        res.status(200).json(answers)
    } catch (error) {
        throw error
    }
}

const createAnser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { question, answers, answer } = req.body;
        const answerM = new AnswerModel({ question, answers, answer })
        const newAnswer: IAnswer = await answerM.save()
        res.status(200).send({ message: "Created", answer: newAnswer })
    } catch (error) {
        throw error
    }
}

const createAnswerBlock = async (req: Request, res: Response): Promise<void> => {
    try {
        const { user } = req.body;
        const answerBlockM = new AnswersBlockModel({ user })
        const newAnswerBlock: IAnswers = await answerBlockM.save()
        res.status(200).json({ message: "created", block: newAnswerBlock })
    } catch (error) {
        throw error
    }
}

export { getAnswers, createAnser, createAnswerBlock }