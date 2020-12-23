// 1번

let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function render() {
  let html = '';

  todos.forEach(todo => {
    html += `<li id="${todo.id}">
      <label><input type="checkbox">${todo.content}</label>
    </li>`;
  });

  return html;
}

console.log('## 1번 ##');
console.log(render());
console.log('#########');
console.log();

// 2번

function getValues(key) {
  return todos.map(v => v[key]);
}

console.log('## 2번 ##');
console.log(getValues('id')); // [3, 2, 1]
console.log(getValues('content')); // ['HTML', 'CSS', 'Javascript']
console.log(getValues('completed')); // [false, true, false] */
console.log('#########');
console.log();

// 3번

function sortBy(key) {
  const cTodos = todos.slice();
  return cTodos.sort((a, b) => ((a[key] > b[key]) ? 1 : (a[key] < b[key]) ? -1 : 0));
}

console.log('## 3번 ##');
console.log(sortBy('id'));
console.log(sortBy('content'));
console.log(sortBy('completed'));
console.log(todos);
console.log('#########');
console.log();

// 4번

function addTodo(newTodo) {
  return todos.splice(0, 0, newTodo);
}

addTodo({ id: 4, content: 'Test', completed: false });

console.log('## 4번 ##');
console.log(todos);
console.log('#########');
console.log();

// 5번

function removeTodo(id) {
  todos = todos.filter(v => v.id !== id);
}

removeTodo(2);

console.log('## 5번 ##');
console.log(todos);
console.log('#########');
console.log();

// 6번

// 프로퍼티 참조 연산자
function toggleCompletedById(id) {
  todos.forEach(v => {
    if (v.id === id) v.completed = !v.completed;
  });
}

// 스프레드 프로퍼티
/* function toggleCompletedById(id) {
  todos.forEach((v, i) => {
    if (v.id === id) todos[i] = { ...v, completed: !v.completed };
  });
}*/

// Object.assign
/* function toggleCompletedById(id) {
  todos.forEach((v, i) => {
    if (v.id === id) todos[i] = Object.assign({},v,{completed:!v.completed});
  });
} */

toggleCompletedById(2);


console.log('## 6번 ##');
console.log(todos);
console.log('#########');
console.log();

// 7번

// 프로퍼티 접근 연산자
function toggleCompletedAll() {
  todos.forEach(v => { v.completed = true; });
}

// 스프레드 연산자
/* function toggleCompletedAll() {
  todos.forEach((v, i) => todos[i] = { ...v, completed: !v.completed });
} */

// Object.assign
/* function toggleCompletedAll() {
  todos.forEach((v, i) => todos[i] = Object.assign({},v,{completed:!v.completed}));
} */


toggleCompletedAll();

console.log('## 7번 ##');
console.log(todos);
console.log('#########');
console.log();

// 8번

todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
  { id: 1, content: 'Javascript', completed: false },
  { id: 1, content: 'Javascript', completed: true },
  { id: 1, content: 'Javascript', completed: true }
];

function countCompletedTodos() {
  return todos.reduce((res, v) => {
    if (v.completed) res += 1;
    return res;
  }, 0);
}

// 디스트럭처링 할당

/* function countCompletedTodos() {
  return todos.filter(v => {
    const { completed } = v;
    if (completed) return true;
  }).length;
} */


console.log('## 8번 ##');
console.log(countCompletedTodos());
console.log('#########');
console.log();

// 9번

todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function getMaxId() {
  return todos.reduce((maxId, v) => {
    if (maxId < v.id) maxId = v.id;
    return maxId;
  }, 0);
}

console.log('## 9번 ##');
console.log(getMaxId());
console.log('#########');