// IIFE to create a closure avoiding the global scope problems
(() => {
  const input = document.getElementById('input');
  const items = document.querySelector('.items');
  const todo = document.querySelector('.todo');
  const clearBtn = document.querySelector('.clear');
  // const clearBtn = document.querySelector('.trash');
  // const item = document.querySelector('.item');
  loadEventListener();

  function loadEventListener() {
    input.addEventListener('keyup', addTask);
    items.addEventListener('click', deleItem);
    clearBtn.addEventListener('click', clearItems);
  }

  // add Todo
  function addTask(e) {
    if (input.value === '' && e.keyCode === 13) {
      alert('please add task');
    } else if (e.keyCode === 13) {
      // console.log(e.target.value);
      // create an item
      const item = document.createElement('li');
      // console.log(item);
      // insert span tag and icon
      item.innerHTML = `${e.target.value}<span><i class="fas fa-trash-alt trash"></i></span>`;
      item.className = 'item';
      // show up on the items
      items.appendChild(item);
      input.value = '';
      // console.log(items);
      ifShowTodo();
    }
    e.preventDefault();
  }

  // delete todo
  function deleItem(e) {
    // console.log(e.target);
    if (e.target.classList.contains('trash')) {
      const child = e.target.parentElement.parentElement;
      console.log(child);
      child.remove();
    }
    ifShowTodo();
  }

  function clearItems(e) {
    e.preventDefault();
    if (confirm('Are you sure')) {
      // while loop , faster than set innerHTML directly to ""
      while (items.firstChild) {
        items.removeChild(items.firstChild);
      }
    }
    ifShowTodo();
  }

  function ifShowTodo() {
    if (items.childElementCount === 0) {
      todo.style.display = 'none';
    } else {
      todo.style.display = 'block';
    }
  }
})();

// post new todo to baackend serveer:

// (() => {
//   const ul;
//   const form;
//   const inputEL;
//   // form.addEventListener('submit', e => {
//   //   e.preventDefault();
// // fetch way
//   //   fetch('url', {
//   //     method: "POST",
//   //     header: "Content-Type : application/json",
//   //     body: JOSN.stringify({ todo: inputEL.value })
//   //   }).then(res => res.json())
//   //     .then(data => {
//   //       const li = document.createElement("li");
//   //       li.innerHTML = data.todo;
//   //       ul.appendChild(li);
//   //     })
//   // })
// //   async/await way
//   form.addEventListener('submit', async e => {
//     e.preventDefault();
//     const resp = await fetch('url', {
//       method: "POST",
//       header: "Content-Type : application/json",
//       body: JOSN.stringify({ todo: inputEL.value })
//     })
//     const res = await res.json();
//     const li = document.createElement("li");
//     li.innerHTML = res.todo;
//     ul.appendChild(li);
//   })
// })()
