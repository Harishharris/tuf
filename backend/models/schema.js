import mongoose from 'mongoose';

const schmema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Please provide the username'],
    },
    language: {
      type: String,
      required: [true, 'Please provide the language'],
    },
    input: {
      type: String,
      default: '',
    },
    code: {
      type: String,
      required: [true, 'Please provide the code'],
    },
    output: {
      type: String,
    },
  },
  {
    timeStamps: true,
  }
);

const model = mongoose.model('codeSnippets', schmema);
export default model;
