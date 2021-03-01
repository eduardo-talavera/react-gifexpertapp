import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export function GifExpertApp() {

  const [categories, setCategories] = useState(['One Punch']);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory
        categories={ categories }
        setCategories={ setCategories }
      />
      <hr/>
      
      <ol>
        {
          categories.map( (category) => (
           <GifGrid 
              key={category}
              category={category} 
            />
          ))
        }
      </ol>

    </>
  )
}

