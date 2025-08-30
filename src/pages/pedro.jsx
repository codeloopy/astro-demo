import { useState } from "react";

export default function Pedro() {
  const [counter, setCounter] = useState(0);

  return(
    <>
    <div className="flex items-center space-x-4">
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer"onClick={() => setCounter(counter - 1)}>-</button>
      <h1>Pedro {counter}</h1>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer" onClick={() => setCounter(counter + 1)}>+</button>
    </div>
    </>
  );
}
