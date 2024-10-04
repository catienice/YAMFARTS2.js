import React from 'react';

let items = [
    {
        name: 'Dusk',
        src: 'https://i.ibb.co/9GN3QvC/IMG-1652-removebg-preview.png',
        description: 'This is the Dusk chonk Lighter. ',
         alt:'item image'
    },
    {
        name: 'Wu Wei',
        src: "https://i.ibb.co/0sNZFkW/IMG-1114-removebg-preview.png",
        description: 'This is the Wu Wei chonk lighter',
        alt:'item image'
    },
];

function Cards () {
    return (
        <div>
            {items.map((item, index) => (
                <div className='tile' key={index}>
                    <h1 className='name'>{item.name}</h1>
                    <img className='media'
                    src={item.src}
                    alt={item.alt} />
                    <p id='description'>{item.description} </p>
                    <button>Add to cart</button>
                </div>
            ))}
        </div>
    )
};

export default Cards;