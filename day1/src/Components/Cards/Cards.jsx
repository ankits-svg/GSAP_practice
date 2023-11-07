import React, { useState } from 'react'
import "./Cards.css"

const itemsData = [
    {
        id:'1',
      title: 'Owl',
      secondary: 'Hoo are you?',
      text: 'Owel lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure cum, est amet delectus, blanditiis voluptatem laborum pariatur consequatur quae voluptate, nisi. Laborum adipisci iste earum distinctio, fugit, quas ipsa impedit.',
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-owl.png',
    },
    {
        id:'2',
      title: 'Deer',
      secondary: 'Hi deer.',
      text: 'Deer lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure cum, est amet delectus, blanditiis voluptatem laborum pariatur consequatur quae voluptate, nisi. Laborum adipisci iste earum distinctio, fugit, quas ipsa impedit.',
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-deer.png',
    },
    {
        id:'3',
      title: 'Hipster',
      secondary: "What's new?",
      text: 'Hipster lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure cum, est amet delectus, blanditiis voluptatem laborum pariatur consequatur quae voluptate, nisi. Laborum adipisci iste earum distinctio, fugit, quas ipsa impedit.',
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-hipster.png',
    },
    {
        id:'4',
      title: 'Ram',
      secondary: 'I just drank a Mountain Dew.',
      text: 'Ram lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure cum, est amet delectus, blanditiis voluptatem laborum pariatur consequatur quae voluptate, nisi. Laborum adipisci iste earum distinctio, fugit, quas ipsa impedit.',
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-ram.png',
    },
    {
        id:'5',
      title: 'Dog',
      secondary: "I'm trying to sleep here.",
      text: 'Dog lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure cum, est amet delectus, blanditiis voluptatem laborum pariatur consequatur quae voluptate, nisi. Laborum adipisci iste earum distinctio, fugit, quas ipsa impedit.',
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-dog.png',
    },
    {
        id:'6',
      title: 'Bored Ram',
      secondary: 'No time for you.',
      text: 'Ram side lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure cum, est amet delectus, blanditiis voluptatem laborum pariatur consequatur quae voluptate, nisi. Laborum adipisci iste earum distinctio, fugit, quas ipsa impedit.',
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-sideram.png',
    },
    {
        id:'7',
      title: 'Super Ram',
      secondary: 'I have lazer vision.',
      text: 'Ram horns lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure cum, est amet delectus, blanditiis voluptatem laborum pariatur consequatur quae voluptate, nisi. Laborum adipisci iste earum distinctio, fugit, quas ipsa impedit.',
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-multiram.png',
    },
    {
        id:'8',
      title: 'Gorilla',
      secondary: 'I can fit a whole watermelon in my mouth.',
      text: 'Gorrilla lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure cum, est amet delectus, blanditiis voluptatem laborum pariatur consequatur quae voluptate, nisi. Laborum adipisci iste earum distinctio, fugit, quas ipsa impedit.',
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-gorilla.png',
    },
    {
        id:'9',
      title: 'Birb',
      secondary: "I'm just here to chill.",
      text: 'Birb lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure cum, est amet delectus, blanditiis voluptatem laborum pariatur consequatur quae voluptate, nisi. Laborum adipisci iste earum distinctio, fugit, quas ipsa impedit.',
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-bird.png',
    },
  ];
const Cards = () => {
    
    
      const [activeItem, setActiveItem] = useState(null);
        // console.log("activeItem:",activeItem)
      const showDetails = (item) => {
        if (activeItem === item) {
          setActiveItem(null);
        } else {
          setActiveItem(item);
        }
      };
    
      return (
        <div className="apps">
          <div className="gallery">
            {itemsData.map((item, index) => (
              <div
                key={index}
                className={`item ${activeItem === item ? 'active' : ''}`}
                onClick={() => showDetails(item)}
              >
                <img className='img1' src={item.image} alt="" />
              </div>
            ))}
          </div>
          <div className="detail">
            {activeItem && (
              <>
                <img src={activeItem.image} alt="ads" />
                <div className="content">
                  <div className="title">{activeItem.title}</div>
                  <div className="secondary">{activeItem.secondary}</div>
                  <div className="description">{activeItem.text}</div>
                </div>
              </>
            )}
          </div>
        </div>
      );
}

export default Cards
