import React from 'react';
import Card from './Card';

const CardList = ({ monsters }) => {
  const cardComponent = monsters.map((user, i) => {
    return <Card key={i} id={monsters[i].id} name={monsters[i].name} email={monsters[i].email}/>
  });
  return (
    <div>
      {cardComponent}
    </div>
  );
}

export default CardList;