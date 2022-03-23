import { Request, Response } from "express"
import { QuestionModel, QuizeModel } from "../models/quizes"
import { IQuistion } from '../types/quize';

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

const getQuizeId = async (req: Request, res: Response): Promise<void> => {
    try {

    } catch (error) {
        throw error
    }
}

const updateQuestionId = async (req: Request, res: Response): Promise<void> => {
    try {

    } catch (error) {
        throw error
    }
}

const getQuizeIdAnswers = async (req: Request, res: Response): Promise<void> => {
    try {

    } catch (error) {
        throw error
    }
}

const getQuizeAll = async (req: Request, res: Response): Promise<void> => {
    try {

    } catch (error) {
        throw error
    }
}

export { getQuizeAll, createNewQuizeBlock, getQuizeId, getQuizeIdAnswers, createNewQuestion, updateQuestionId }