import React from 'react'
import '../Css/searchBar.css'
import Button from './button'

const SearchBar = () => {
  return (
    <div className='search-container'>
      <div className='searchBar'>
      <input placeholder="Search here..."type="text" />
      <Button  
      className = 'searchButton'
      content = 'Search'
      logo='bx-search-big'
      />
    </div>
    </div>
    
  )
}

export default SearchBar
