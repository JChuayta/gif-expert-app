import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export default function GifExpertApp() {
  const [category, setCategory] = useState([]);
  
  return (
    <>
      <h1> GifExpertApp</h1>
      <hr />
      <AddCategory setCategory={setCategory} />
      <ol>
          {
            category.map( category => (
              <GifGrid
                key = { category }
                category={ category }
              />
            ))
          }   
      </ol>
    </>
  );
}
