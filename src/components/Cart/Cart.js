import React from 'react';
import './Cart.scss';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const Cart = () => {
  const data = [
    {
      id: 1,
      img: 'https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Grey Set',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
      isNew: true,
      oldPrice: 49,
      price: 30,
    },
    {
      id: 2,
      img: 'https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Grey Set',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
      isNew: true,
      oldPrice: 49,
      price: 30,
    },
  ];
  return (
    <div className='cart'>
      <h1>Products in your cart</h1>
      {data.map((item) => (
        <div className='item' key={item.id}>
          <img src={item.img} alt={item.title} />
          <div className='details'>
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <p className='price'>1 x ${item.price}</p>
          </div>
          <DeleteOutlinedIcon className='delete' />
        </div>
      ))}
      <div className='total'>
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className='reset'>Clear Cart</span>
    </div>
  );
};

export default Cart;
