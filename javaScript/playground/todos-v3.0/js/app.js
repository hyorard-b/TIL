// 요소 취득
const $all = document.getElementById('all');
const $todos = document.querySelector('.todos');
const $input = document.querySelector('.input-todo');
const $container = document.querySelector('.container');
const $nav = document.querySelector('.nav');
const $completeAll = document.querySelector('.complete-all');
const $numCompleted = document.querySelector('.completed-todos');
const $numLeft = document.querySelector('.active-todos');
const $clearBtn = document.querySelector('.clear-completed .btn');

let todos = [];

// nav 상태를 자유 변수로 가지는 클로저? 객체긴 한데.. 
const navStatus = (() => {
    let navStatus = 'all';

    return {
        getStatus() {
            return navStatus;
        },
        setStatus(newStatus) {
            navStatus = newStatus;
            return navStatus;
        },
    };
})();

// 리스트 요소 마크업
const parseLi = filteredLi => {
    return filteredLi.map(({ id, content, completed }) => `<li id="${id}" class="todo-item" style="text-decoration:${completed ? 'line-through' : 'none'}"><input id="ck-${id}" type="checkbox" ${completed ? 'checked' : ''}><label for="ck-${id}">${content}</label><i class="remove-todo far fa-times-circle"></i></li>`).join('');
};

// 렌더링
const render = () => {
    const filtered = navStatus.getStatus() === 'all' ? todos : ( navStatus.getStatus() === 'active' ? todos.filter(todo => !todo.completed) : todos.filter(todo => todo.completed) );
    $todos.innerHTML = parseLi(filtered);

    const numCompleted = todos.filter(todo => todo.completed).length;
    $numCompleted.textContent = numCompleted;
    $numLeft.textContent = todos.length - numCompleted;
};

// 데이터 패치
const fetchData = () => {
    todos = [{ id: 1, content: 'HTML', completed: true }, { id: 2, content: 'CSS', completed: false }, { id: 3, content: 'JS', completed: false }];
    render();
};

document.addEventListener('DOMContentLoaded', fetchData);

// 할 일 추가
const addTodo = (() => {
    const generateId = () => Math.max(...todos.map(({ id }) => id)) + 1;
    return content => {
    todos = [{ id: generateId(), content, completed: false }, ...todos];
    render();
    };
})();

// add 버튼 눌렸을 때
$container.onkeydown = e => {
    if ( e.key !== 'Enter') return;
    const newContent = $input.value;
    if (!newContent) return;
    addTodo(newContent);

    // 초기화하기
    $input.value = '';
    $input.focus(); // onfocus는 메서드가 아니라 이벤트..
};

// 지우기
$todos.onclick = e => {
    if (!e.target.classList.contains('remove-todo')) return;
    todos = todos.filter(({ id }) => id !== +e.target.parentNode.id);
    render();
};

// 줄 긋기
$todos.onchange = e => {
    todos = todos.map(todo => {
    const isCheckedLi = +e.target.parentNode.id === todo.id;
    return isCheckedLi ? { ...todo, completed: !todo.completed } : todo;
    });
    render();
};

// nav 아이템 클릭 시
$nav.onclick = e => {
    if (e.target.classList.contains('active')) return;

    [...$nav.children].forEach(navItem => {
        if (navItem.classList.contains('active')) navItem.classList.remove('active');
    });

    e.target.classList.add('active');

    navStatus.setStatus(e.target.id);
    render();
};

// 모든 거 체크하기
$completeAll.onclick = e => {
    todos = e.target.parentNode.children[0].checked ? todos.map(todo => {
        return {...todo, completed: true};
    }) : todos.map(todo => {
        return {...todo, completed: false};
    })
    render();
};

// 체크된 거 삭제
$clearBtn.onclick = e => {
    todos = todos.filter(todo => !todo.completed);
    render();
}