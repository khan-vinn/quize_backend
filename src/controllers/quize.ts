import { Request, Response } from "express"
import { AnswersBlockModel } from "../models/answers";
import { QuestionModel, QuizeModel } from '../models/quizes';
import { IQuistion, IQuize } from '../types/quize';

const createNewQuestion = async (req: Request, res: Response): Promise<void> => {
    try {
        const { question, answers, answer, pictures, id } = req.body;
        const questionM = new QuestionModel({
            question, answers, answer, pictures
        })
        const newQuestion: IQuistion = await questionM.save()
        res.status(200).json({ message: "created", question: newQuestion })
    } catch (error) {
        throw error
    }
}

const createNewQuizeBlock = async (req: Request, res: Response): Promise<void> => {
    try {
        const block = new QuizeModel()
        const newBlock = await block.save()
        res.status(200).json({ message: "created", quize: newBlock })
    } catch (error) {
        throw error
    }
}

const updateQuizeBlock = async (req: Request, res: Response): Promise<void> => {
    try {
        const { quizeId, answersId } = req.body;
        const quizeBlock = await QuizeModel.findByIdAndUpdate(quizeId, { values: answersId })
        res.status(200).json(quizeBlock)
    } catch (error) {
        throw error
    }
}

const getQuizeId = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params
        const quize: IQuize | null = await QuizeModel.findById(id).populate("values")
        if (!quize) {
            throw new Error
        }
        res.status(200).json(quize)
    } catch (error) {
        throw error
    }
}

const updateQuestionId = async (req: Request, res: Response): Promise<void> => {
    try {
        const { question, answer, answers, pictures } = req.body
        const { id } = req.params
        const questionM: IQuistion | null = await QuestionModel.findByIdAndUpdate(id, { question, answer, answers, pictures })
        res.status(200).json({ message: "updated", question: questionM })
    } catch (error) {
        throw error
    }
}

const getQuizeIdAnswers = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const answersM = await AnswersBlockModel.find({ quize_id: id }).populate("values")
        res.status(200).json(answersM)
    } catch (error) {
        throw error
    }
}

const getQuizeAll = async (req: Request, res: Response): Promise<void> => {
    try {
        const { user } = req.params;
        const quizesAll = await QuizeModel.find({ user }).populate("values")
        res.status(200).json(quizesAll)
    } catch (error) {
        throw error
    }
}

export { getQuizeAll, createNewQuizeBlock, getQuizeId, getQuizeIdAnswers, createNewQuestion, updateQuestionId, updateQuizeBlock }