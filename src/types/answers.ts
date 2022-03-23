import { IQuistion } from './quize';

export interface IAnswer extends IQuistion {
    selected: string
}

export interface IAnswers extends Document {
    values: IAnswer[]
    user: string
}
