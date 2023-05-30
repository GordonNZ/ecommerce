import React, { useState } from 'react';
import './Products.scss';
import List from '../../components/List/List';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  console.log(selectedSubCats);

  return (
    <div className='products'>
      <div className='left'>
        <div className='filterItem'>
          <h2>Product Categories</h2>
          {data?.map((item) => (
            <div className='inputItem' key={item.id}>
              <input
                type='checkbox'
                id={item.id}
                value={item.id}
                onChange={handleChange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>
        <div className='filterItem'>
          <h2>Filter by Price</h2>
          <div className='inputItem'>
            <span>0</span>
            <input
              type='range'
              min='0'
              max='1000'
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className='filterItem'>
          <h2>Sort by</h2>
          <input
            type='radio'
            name='price'
            id='asc'
            value='asc'
            onChange={(e) => setSort('asc')}
          />
          <label htmlFor='asc'>Price (Low to High</label>
          <input
            type='radio'
            name='price'
            id='desc'
            value='desc'
            onChange={(e) => setSort('desc')}
          />
          <label htmlFor='desc'>Price (High to Low</label>
        </div>
      </div>
      <div className='right'>
        <img
          className='catImg'
          src='https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600'
          alt='cat'
        ></img>
        <List
          catId={catId}
          maxPrice={maxPrice}
          sort={sort}
          subCats={selectedSubCats}
        />
      </div>
    </div>
  );
};

export default Products;
