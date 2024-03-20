import express from 'express';
const router = express.Router();

import getAllCodeSnippets from '../controllers/getAllCodeSnippets.js';
import createNewCodeSnippet from '../controllers/createNewCodeSnippet.js';

router.route('/').get(getAllCodeSnippets).post(createNewCodeSnippet);

export default router;
