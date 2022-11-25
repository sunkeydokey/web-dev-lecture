const express = require('express');

const db = require('./data/database');
const todosRoutes = require('./routes/todos.routes');

const app = express();

app.use(express.json());

app.use('/todos', todosRoutes);

app.use(function (error, req, res, next) {
  res.status(500).json({
    message: '오류',
  });
});

db.initDb()
  .then(function () {
    app.listen(3000);
    console.log('데이터베이스 연결 완료');
  })
  .catch(function (error) {
    console.log('데이터베이스 연결에 실패했습니다.');
  });
