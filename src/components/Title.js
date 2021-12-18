import React, { useEffect, useState } from 'react';

const Title = ({ todos }) => {
  const [percentDone, setpercentDone] = useState(null);

  const getPercentDone = () => {
    const totalTodos = todos.length;
    const totalTodosDone = todos.filter((todo) => todo.done).length;
    setpercentDone(Math.round((totalTodosDone / totalTodos) * 100));
  };

  useEffect(() => {
    getPercentDone();
  }, [todos]);

  return (
    <div>
      <h2>
        Todo List{' '}
        {!!todos.length && (
          <span className="animate__animated animate__fadeIn title-color">
            ({percentDone}% complete)
          </span>
        )}
      </h2>
    </div>
  );
};

export default Title;
