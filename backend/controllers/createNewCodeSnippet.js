import model from '../models/schema.js';
import axios from 'axios';

const langugesMap = {
  'c++': 54,
  python: 71,
  javascript: 93,
  java: 91,
};

const createNewCodeSnippet = async (req, res) => {
  const { username, input, language, code } = req.body;
  let stdout = '';

  try {
    const response = await axios.request({
      method: 'POST',
      url: 'https://judge0-ce.p.rapidapi.com/submissions/?wait=true',
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': '786803fff3mshe809139012b204ep1e78f7jsn9b0a1788a0c0',
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
      },
      data: {
        language_id: langugesMap[language.toLowerCase()],
        source_code: code,
        stdin: input || '',
      },
    });
    console.log(code);
    console.log(response.data);

    try {
      const innerResponse = await axios.request({
        method: 'GET',
        url: `https://judge0-ce.p.rapidapi.com/submissions/${response.data.token}`,
        headers: {
          'X-RapidAPI-Key':
            '786803fff3mshe809139012b204ep1e78f7jsn9b0a1788a0c0',
          'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
        },
      });

      stdout = innerResponse.data;
      console.log({ stdout });
    } catch (error) {
      console.error(error);
      return res.status(400).send(error.message);
    }
  } catch (error) {
    console.error(error);
    return res.status(400).send(error.message);
  }

  try {
    console.log({ ...req.body });
    const createdCodeSnippet = await model.create({
      username,
      language: language,
      input,
      code,
      output: stdout,
    });
    return res.status(201).json(createdCodeSnippet);
  } catch (err) {
    return res.status(400).send(err.message);
  }
};

export default createNewCodeSnippet;
