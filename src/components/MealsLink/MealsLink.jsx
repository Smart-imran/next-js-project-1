'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const MealsLink = () => {
  const [search, setSearch] = useState('');
  const [meals, setMeals] = useState([]);

  // API থেকে ডেটা আনার ফাংশন
  const loadData = async () => {
    if (!search.trim()) {
      alert('Please enter a search term!');
      return;
    }
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    );
    const data = await res.json();
    setMeals(data.meals || []);
  };

  // ডেটা ক্লিয়ার করার ফাংশন
  const clearData = () => {
    setSearch('');
    setMeals([]);
  };

  return (
    <div className="h-screen text-center mt-10">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-4 outline-none rounded-md border-2 border-indigo-600 text-slate-900"
        type="text"
        placeholder="Search meals..."
      />

      <button
        onClick={loadData}
        className="bg-orange-500 p-4 rounded-md text-white font-semibold ml-4 hover:bg-orange-700"
      >
        Search
      </button>

      {meals.length > 0 && (
        <button
          onClick={clearData}
          className="bg-red-500 p-4 rounded-md text-white font-semibold ml-4 hover:bg-red-700"
        >
          Clear
        </button>
      )}

      <div className="mt-8 grid grid-cols-3 gap-8">
        {meals.length > 0 ? (
          meals.map((meal) => (
            <div
              key={meal.idMeal}
              className="p-6 bg-white shadow-md rounded-md"
            >
              <h3 className="text-xl font-bold">{meal.strMeal}</h3>
              
              {/* Next.js Image Component */}
              <Image
                src={meal.strMealThumb}
                alt={meal.strMeal}
                width={400}
                height={300}
                className="rounded-md mt-4"
              />
              <p className="mt-2 text-gray-700">
                {meal.strInstructions.slice(0, 100)}...
              </p>
            </div>
          ))
        ) : (
          <p className="col-span-3 text-red-500 font-bold mt-4">
            No meals found!
          </p>
        )}
      </div>
    </div>
  );
};

export default MealsLink;
