import React, { useEffect, useState } from 'react';
import './Veggie.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const Veggie = () => {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${`5b11b96881eb47e69f959ba370ef2b90`}&number=9&tags=vegetarian`
    )
      .then((res) => res.json())
      .then((data) => setVeggie(data.recipes));
  }, []);
  return (
    <div>
      <div className='container '>
        <div className='wrapper'>
          <h4>Vegitable Items</h4>
          <Splide
            options={{
              perPage: 3,
              arrows: false,
              pagination: false,
              drag: 'free',
              gap: '2rem',
            }}
          >
            {veggie.map((recipe) => (
              <SplideSlide key={recipe.id}>
                <div className='cardItem'>
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className='img-fluid  '
                  />
                  <p className='cardTitle'>{recipe.title}</p>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default Veggie;
