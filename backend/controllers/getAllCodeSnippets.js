import model from '../models/schema.js';
import axios from 'axios';

const getAllCodeSnippets = async (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://judge0-ce.p.rapidapi.com/languages',
    headers: {
      'X-RapidAPI-Key': '786803fff3mshe809139012b204ep1e78f7jsn9b0a1788a0c0',
      'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
    },
  };

  try {
    const allCodeSnippets = await model.find({});
    return res.json(allCodeSnippets);
  } catch (err) {
    res.send(err.message);
  }
};

export default getAllCodeSnippets;
