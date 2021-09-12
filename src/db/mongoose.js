const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect(
  'mongodb+srv://admin:F1vMGGJ2gdneouPF@cluster0.lxyhk.mongodb.net/task-manager-api',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    require: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Invalid email');
      }
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) throw new Error('Age must be a positive number');
    },
  },
});

const Task = mongoose.model('Task', {
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

// const task = new Task({
//   description: 'Task 1',
//   completed: true,
// });

// task
//   .save()
//   .then(() => {
//     console.log(task);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const me = new User({
  name: '     Maria         Tereza',
  email: '            vaLid@email.com',
});

me.save()
  .then(() => {
    console.log(me);
  })
  .catch((e) => {
    console.log(e.message);
  });
