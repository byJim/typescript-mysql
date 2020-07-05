import { Router } from 'express';
const router = Router();

//Controllers
import { indexWelcome} from "../controllers";

router.route('/')
    .get(indexWelcome)


export default router;
