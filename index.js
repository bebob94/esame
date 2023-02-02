const myurl = "https://dummyjson.com/todos";

const myList = async () => {
  let myUl = document.querySelector("ul");
  let res = await fetch(myurl);
  let myTask = await res.json();
  console.log(myTask);
  const newArray = myTask.todos.filter((elem) => elem.completed === false);
  newArray.forEach((elem) => {
    myUl.innerHTML += `<li>${elem.todo}</li>`;
    console.log(elem);
  });
};

myList();
