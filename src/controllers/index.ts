import { Router } from "express";
import { createAnser, getAnswers } from "./answer";
import { createNewQuizeBlock, getQuizeAll, getQuizeId, getQuizeIdAnswers, updateQuestionId } from "./quize";

const router: Router = Router();

router.get("/new-quize", createNewQuizeBlock);
router.get("/quize/:id", getQuizeId);
router.put("/quize/:id", updateQuestionId);
router.get("/quize/result/:id", getQuizeIdAnswers);
router.get("/quizes/:user", getQuizeAll);

router.post("/quize/:id", createAnser);
router.get("/result/:id", getAnswers);

export default router;