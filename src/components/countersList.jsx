import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Ненужная вещь" },
    { id: 1, value: 4, name: "Ложка" },
    { id: 2, value: 0, name: "Вилка" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 0, name: "Набор минималиста" },
  ];

  const [counters, setCounters] = useState(initialState);
  const handleDelete = (id) => {
    console.log("handleDelete", id);
    const newCounters = counters.filter((c) => c.id !== id);
    setCounters(newCounters);
  };
  const handleReset = () => {
    setCounters(initialState);
    console.log("reset");
  };
  const handleIncrement = (id) => {
    // counters[id].value = counters[id].value + 1;
    const tst = counters;
    tst[id].value = tst[id].value + 1;
    console.log(tst);
    setCounters(tst);
  };

  const handleDecrement = (id) => {
    console.log("-", id);
  };
  return (
    // <>
    //   {counters.map((count) => (
    //     <Counter
    //       key={count.id}
    //       id={count.id}
    //       value={count.value}
    //       name={count.name}
    //       onDelete={handleDelete}
    //     />
    //   ))}
    // </>
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onDelete={handleDelete}
          {...count}
        />
        //{...count} позволяет не дописывать код если в объекте появляется новый ключ. Или же другими словами с помощью ... мы передаем сразу все поля из объекта в атрибуты
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};

export default CountersList;
