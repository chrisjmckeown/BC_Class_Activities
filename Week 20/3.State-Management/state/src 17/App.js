import React, { useReducer } from "react";

function Count() {
  const dogs = [
    {
      name: "Harry",
      image: "https://images.dog.ceo/breeds/vizsla/n02100583_10960.jpg",
      praises: 0,
    },
    {
      name: "Hermione",
      image: "https://images.dog.ceo/breeds/husky/n02110185_1511.jpg",
      praises: 0,
    },
  ];

  const [state, dispatch] = useReducer(
    (state, action) => {
      if (action === "dog1") {
        state[0].praises++;
        return [...state];
      } else if (action === "dog2") {
        state[1].praises++;
        return [...state];
      } else {
        return state;
      }
    },
    { dogs }
  );

  return (
    <div className='App'>
      <div className='row mt-5'>
        {dogs.map((item) => (
          <div key={item.name} className='card mx-auto col-4'>
            <img className='card-img-top' src={item.image} alt={item.name} />
            <div className='card-body'>
              <h4 className='card-title'>{item.name}</h4>
              <p className='card-text'>
                {item.name} has been praised {state[item.name]} times!
              </p>
              <button
                className='btn btn-primary'
                onClick={() => dispatch("praise" + item.name)}
              >
                Praise
              </button>
              <button
                className='btn btn-primary'
                onClick={() => dispatch("depraise" + item.name)}
              >
                De-Praise
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Count;
