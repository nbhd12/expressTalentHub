import { Router } from "express";
import globalRouter from "./home";
import jobRouter from "./job";

// Initialiastion du router Express
const router = Router();

// On lie le router "globals" au router principale
router.use(globalRouter);

// On lie le router spécial "job" au router principale
router.use('/jobs', jobRouter);

export default router;
