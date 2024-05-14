import React, { useContext, useState } from 'react';
import NewsCard from '../card/NewsCard';
import { MyContext } from './MyContext';

export default function SearchPage() {
  const value = useContext(MyContext);
  // console.log(`search :${value}`);

  return (
    <>
      <div className="homeHead">
        <h1 className='blink'>Welcome to News World</h1>
        <NewsCard data={value} />
      </div>
    </>
  )
}
