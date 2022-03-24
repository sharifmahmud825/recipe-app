import React, { useEffect, useState } from 'react';
import './Popular.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${`5b11b96881eb47e69f959ba370ef2b90`}&number=9`
    ).then((res) => res.json());
    // .then((data) => setPopular(data.recipes));
  }, []);
  return (
    <div>
      <div className='container '>
        <div className='wrapper'>
          <Splide
            options={{
              perPage: 4,
              arrows: false,
              pagination: false,
              drag: 'free',
              gap: '4rem',
            }}
          >
            {popular.map((recipe) => (
              <SplideSlide key={recipe.id}>
                <div className='card-item'>
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className='img-fluid img-thumbnail '
                  />
                  <p className='cardTitle'>{recipe.title}</p>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
      <h1>This is popular component</h1>
    </div>
  );
};

export default Popular;
