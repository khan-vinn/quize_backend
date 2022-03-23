import { Document } from "mongoose"

export interface IQuistion extends Document {
    title: string
    value: string[]
    truethValue: string
    pictures: string[]
}

export interface IQuize extends Document {
    questions: IQuistion[]
    user: string
}
