import ajax from './promise.js';

// State
let todos = [];
let navState = 'all';

// DOMs
const $todos = document.querySelector('.todos');
const $inputTodo = document.querySelector('.input-todo');
const $completeAll = document.querySelector('.complete-all > .checkbox');
const $completedTodos = document.querySelector('.completed-todos');
const $activeTodos = document.querySelector('.active-todos');
const $clearCompleted = document.querySelector('.clear-completed > .btn');
const $nav = document.querySelector('.nav');

const render = () => {
  let html = '';

  const _todos = todos.filter(({ completed }) =>
    navState === 'completed' ? completed : navState === 'active' ? !completed : true
  ).sort((todo1, todo2) => todo2.id - todo1.id);

  _todos.forEach(({ id, content, completed }) => {
    html += `<li id="${id}" class="todo-item">
        <input id="ck-${id}" class="checkbox" type="checkbox" ${completed ? 'checked' : ''}>
        <label for="ck-${id}">${content}</label>
        <i class="remove-todo far fa-times-circle"></i>
      </li>`;
  });

  $todos.innerHTML = html;
  $completedTodos.textContent = todos.filter(({ completed }) => completed).length;
  $activeTodos.textContent = todos.filter(({ completed }) => !completed).length;
};

const setTodos = _todos => {
  todos = [..._todos];
  render();
};

const getTodos = () => {
  /* ajax.get('/todos')
  .then(setTodos)
  .catch(console.error); */
  fetch('/todos')
    .then(res => res.json())
    .then(setTodos)
    .catch(console.error);
};


const generateId = () => (todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1);

const addTodo = content => {
  const newTodo = { id: generateId(), content, completed: false };
  
  /* ajax.post('/todos', newTodo)
  .then(setTodos)
  .catch(console.error); */
  fetch('/todos', {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(newTodo)
  }).then(res => res.json())
    .then(setTodos)
    .catch(console.error);
};

const toggleTodo = id => {
  const {completed} = todos.find(todo => todo.id === +id);

  ajax.patch(`/todos/${id}`, { completed: !completed })
  .then(setTodos)
  .catch(console.error);
};

const removeTodo = id => {
  ajax.delete(`/todos/${id}`)
  .then(setTodos)
  .catch(console.error);
};

const toggleCompleteAll = completed => {
  ajax.patch('/todos', {completed})
  .then(setTodos)
  .catch(console.error);
};

const removeCompleted = () => {
  ajax.delete('/todos/completed')
  .then(setTodos)
  .catch(console.error);
};

const changeNavState = id => {
  [...$nav.children].forEach($navItem => {
    $navItem.classList.toggle('active', $navItem.id === id);
  });

  navState = id;

  render();
};

// Event bindings
window.onload = getTodos;

$inputTodo.onkeyup = ({ keyCode, target }) => {
  const content = target.value.trim();
  if (keyCode !== 13 || content === '') return;
  addTodo(content);
  target.value = '';
};

$todos.onchange = e => {
  toggleTodo(e.target.parentNode.id);
};

$todos.onclick = e => {
  if (!e.target.matches('.todos > li > .remove-todo')) return;
  removeTodo(e.target.parentNode.id);
};

$completeAll.onchange = e => {
  toggleCompleteAll(e.target.checked);
};

$clearCompleted.onclick = removeCompleted;

$nav.onclick = ({ target }) => {
  if (target === $nav) return;
  // if (!target.matches('.nav > li:not(.active)')) return;

  changeNavState(target.id);
};
