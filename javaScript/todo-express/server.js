import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import isEmptyObject from './utils/isEmptyObject.js';
import isDuplicatedId from './utils/isDuplicatedId.js';
import makeError from './utils/makeError.js';

let todos = [
  { id: 3, content: 'Javascript', completed: false},
  { id: 2, content: 'CSS', completed: false},
  { id: 1, content: 'HTML', completed: false}
];

const app = express();
app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(morgan('tiny'));


// post #0 에러 처리
app.use((err, req, res, next) => {
  if (+err[1] > 0) next(err);

  const error = makeError(err);
  res.status(err.status).send(error);
})

// post #1 에러 처리
app.use((err, req, res, next) => {
  if (+err[1] > 1) next(err);

  const error = makeError(err);
  res.status(err.status).send(error);
})

// delete, patch #2 에러 처리
app.use((err, req, res, _) => {
  const error = makeError(err);
  res.status(err.status).send(error);
})

// Get All
app.get('/todos', (req, res) => {
  res.send(todos);
});

// Get One
app.get('/todos/:id', (req, res) => {
  res.send(todos.filter(todo => todo.id === +req.params.id));
});

// Create One
app.post('/todos',
  (req, res, next) => {
    const id = +req.body.id;
    const payload = req.body;

    // 페이로드 없는 경우 예외 처리
    if (isEmptyObject(payload)) return next(`#0 : no payload`);

    // 중복된 id 생성 예외 처리
    if (isDuplicatedId(todos, id)) return next(`#1 : id-${id} todo is already in DB`);

    // 정상 동작
    todos = [req.body, ...todos];
    res.send(todos);
  }
);

// Toggle All
app.patch('/todos', (req, res) => {
  const {completed} = req.body;

  todos = todos.map(todo => {
    return {...todo, completed};
  });
  res.send(todos);
});

// Toggle One
app.patch('/todos/:id', (req, res, next) => {
  const id = +req.params.id;
  
  // 존재하지 않는 id 토글 예외 처리
  if (!todos.find(todo => todo.id === id)) {
    const error = new Error(`#2 : id-${id} todo is not in DB`);
    error.status = 404;
    next(error);
  } else next();
}, (req, res, _) => {
  const id = +req.params.id;
  const {completed} = req.body;

  todos = todos.map(todo => todo.id === id ? {...todo, completed} : todo);
  res.send(todos);
});

// Clear Complete
app.delete('/todos/completed', (req, res) => {
  todos = todos.filter(todo => !todo.completed);
  res.send(todos);
});

// Delete One
app.delete('/todos/:id', (req, res, next) => {
  const id = +req.params.id;

  // 존재하지 않는 id 삭제 예외 처리
  if (!todos.find(todo => todo.id === id)) {
    const error = new Error(`#1 : id-${id} todo is not in DB`);
    error.status = 404;
    next(error);
  }
}, (req, res, _) => {
  const id = +req.params.id;

  todos = todos.filter(todo => todo.id !== id);
  res.send(todos);
});


app.listen('7000', () => {
  console.log(`Server is listening on 'http://localhost:7000'...`);
});