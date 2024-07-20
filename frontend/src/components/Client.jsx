import React from "react";

const Client = () => {
  return (
    <section className="bg-white dark:bg-gray-900 max-w-7xl flex flex-col items-center justify-center px-5 mx-auto md:py-20 py-20">
      <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
        You’ll be in good company
      </h2>
      <div className="grid grid-cols-1  w-fit gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-5 lg:grid-cols-4 dark:text-gray-400 justify-center md:justify-center">
        <div className="border-dashed border-2 p-2 border-gray-200 flex justify-center items-center h-32 w-32 md:h-48 md:w-48">
          <a href="#" className="flex justify-center items-center h-full w-full">
            <img className="max-h-full max-w-full" src="../assets/travel3.png" alt="BigCo Inc. logo" />
          </a>
        </div>
        <div className="border-dashed p-2 border-2 border-gray-200 flex justify-center items-center h-32 w-32 md:h-48 md:w-48">
          <a href="#" className="flex justify-center items-center h-full w-full">
            <img className="max-h-full max-w-full" src="../assets/travel3.png" alt="BigCo Inc. logo" />
          </a>
        </div>
        <div className="border-dashed p-2 border-2 border-gray-200 flex justify-center items-center h-32 w-32 md:h-48 md:w-48">
          <a href="#" className="flex justify-center items-center h-full w-full">
            <img className="max-h-full max-w-full" src="../assets/travel3.png" alt="BigCo Inc. logo" />
          </a>
        </div>
        <div className="border-dashed p-2 border-2 border-gray-200 flex justify-center items-center h-32 w-32 md:h-48 md:w-48">
          <a href="#" className="flex justify-center items-center h-full w-full">
            <img className="max-h-full max-w-full" src="../assets/travel3.png" alt="BigCo Inc. logo" />
          </a>
        </div>
        <div className="border-dashed p-2 border-2 border-gray-200 flex justify-center items-center h-32 w-32 md:h-48 md:w-48">
          <a href="#" className="flex justify-center items-center h-full w-full">
            <img className="max-h-full max-w-full" src="../assets/travel3.png" alt="BigCo Inc. logo" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Client;



