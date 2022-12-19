import React, { useEffect, useState } from "react";

function Home() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTodos(data);
      });
  }, []);
  return (
    <div className="container">
      <h2 className="text-center">Home page</h2>
      <div className="grid-4">
        {todos.map((todo) => {
          const { id, title } = todo;
          return (
            <div className="single-grid" key={id}>
              <h6>{title}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
