import React from 'react';
import './List.scss';
import Card from '../Card/Card';

const List = () => {
  const data = [
    {
      id: 1,
      img: 'https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Grey Set',
      isNew: true,
      oldPrice: 49,
      price: 30,
    },
    {
      id: 2,
      img: 'https://images.pexels.com/photos/6310924/pexels-photo-6310924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Premium Hoodie',
      isNew: true,
      oldPrice: 29,
      price: 22,
    },
    {
      id: 3,
      img: 'https://images.pexels.com/photos/2072453/pexels-photo-2072453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Denim Jacket',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: 'https://images.pexels.com/photos/12156299/pexels-photo-12156299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Relaxed Pants',
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className='list'>
      {data.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
