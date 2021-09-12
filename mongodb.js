const { MongoClient, ObjectID } = require('mongodb');

const connectionURL =
  'mongodb+srv://admin:F1vMGGJ2gdneouPF@cluster0.lxyhk.mongodb.net/test';
const databaseName = 'task-manager';

MongoClient.connect(
  connectionURL,
  { useUnifiedTopology: true },
  (error, client) => {
    if (error) return console.log('Unable to connect to database');

    const db = client.db(databaseName);

    db.collection('tasks')
      .deleteOne({
        description: 'Task 3',
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
