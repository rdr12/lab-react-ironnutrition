import React, { useState } from 'react';



function Search(props) {

    const [ search, setSearch ] = useState("")
  
    const handleSearch = (event) => {
      setSearch(event.target.value)
  
       props.searchList(event.target.value)
    }
  
    return (
      <div>
      
        <form>
  
          <label htmlFor="search">Search:</label>
          <input type="text" name="search" onChange={handleSearch} value={search}/>
          
  
        </form>
      
      </div>
    )
  }
  
  export default Search;