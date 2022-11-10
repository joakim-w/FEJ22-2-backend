const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema({

  user:       { type: Schema.Types.ObjectId, ref: 'User' },
  title:      { type: String, required: true },
  completed:  { type: Boolean, default: false }

})


const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;