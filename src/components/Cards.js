import React from 'react';

let items = [
    {
        name: 'Garden Gnome',
        src: '',
        description: 'This is the Garden Gnome Chonk lighter',
        alt:'item image'
    },
    {
        name: 'Coffee Coffee',
        src: '',
        description: 'This is the Coffee Coffee Chonk Lighter. ',
         alt:'item image'
    },
    {
        name: 'Wu Wei',
        src: "https://i.ibb.co/0sNZFkW/IMG-1114-removebg-preview.png",
        description: 'This is the Wu Wei lighter',
        alt:'item image'
    },
];



function Cards () {
    return (
        <div>
            {items.map((item, index) => (
                <div className='card' key={index}>
                    {item.name}<br></br>
                    <img
                    src={item.src}
                    alt={item.alt} /> <br></br>
                    {item.description}
                </div>
            ))}
        </div>
    )
};

export default Cards;