// import { Component } from 'react'
import Card from '../card/card.component';
import './card-list.styles.css'

const CardList = ({ monsters }) => (              // Iplicite return
    <div className='card-list'>
      {monsters.map((monster) => {
        // const { name, email, id} = monster
        return (                         // this is the callback function of map() function
          <Card monster={monster} />
        );
      })}
    </div>
  );

export default CardList
