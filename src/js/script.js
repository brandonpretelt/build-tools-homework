const todoForm = document.querySelector('form');
const currentTodos = document.querySelector('.current-todos');
const finishedTodos = document.querySelector('.finished-todos');
const userTodo = document.querySelector('#todo');

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const createTodo = document.createElement('div');
    let userTodoInput = userTodo.value;

    if (!userTodoInput) {
        console.log('Nothing there....');
    } else {
        createTodo.textContent = userTodoInput;
        createTodo.classList.add('todo-item');
        currentTodos.append(createTodo);
    }
});

userTodo.addEventListener('focus', () => {
    userTodo.value = '';
});

document.addEventListener('click', (e) => {
    if (e.target.className === 'todo-item') {
        if (currentTodos.children.length > 0) {
            e.target.classList.add('done');
            e.target.setAttribute('data-finished-item', 'true');
            finishedTodos.append(e.target);
        }
    }
});

document.addEventListener('dblclick', (e) => {
    if (e.target.hasAttribute('data-finished-item')) {
        if (e.target.classList.contains('done')) {
            finishedTodos.removeChild(e.target);
            document.querySelector('.message').classList.remove('hidden');
        }
    }
    setTimeout(() => {
        document.querySelector('.message').classList.add('hidden');
    }, 2000);
});
