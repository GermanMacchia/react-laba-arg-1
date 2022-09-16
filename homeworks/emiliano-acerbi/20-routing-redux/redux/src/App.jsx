import React from 'react';

function App() {
  return (
    <main className="min-h-screen bg-gradient font-primary text-3xl grid place-content-center">
      <div className="flex">
        <input className="w-[554px] h-[65px] px-5 text-neutral-700 " value="Create Todo-Task" />
        <button className="bg-add-bg text-white w-[122px] h-[65px]">Add</button>
      </div>
    </main>
  );
}

export default App;
