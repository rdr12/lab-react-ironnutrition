import React, { useState } from 'react';
import foodsJson from './foods.json';
import FoodBox from './FoodBox';
import AddFood from './NewFood';
import Search from './Search';

function FoodList() {
  const [foods, setFoods] = useState(foodsJson);

  function AddFood(newFood) {
    const updateFoodsArr = [newFood, ...foods];
    setFoods(updateFoodsArr);
  }

  function search(searchFood) {
    const filterredFoods = foods.filter((foodI) => {
      return foodI.name.includes(searchFood);
    });
    setFoods(filterredFoods);
  }

  return (
    <div>
      <Search handleSearch={search} />
      <AddFood handleAddFood={AddFood} />
      <ul>
        <li>
          {foods.map((food, index) => {
            return <FoodBox key={index} food={food} />;
          })}
        </li>
      </ul>
    </div>
  );
}

export default FoodList;