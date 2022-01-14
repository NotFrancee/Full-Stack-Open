import React from "react";

const Filter = ({searchFilter, handleFilterChange}) => {
  return (
      <>
      filter shown with <input 
      name='searchFilter'
      value={searchFilter} 
      placeholder='Search Name' 
      onChange={handleFilterChange}
    />
    </>
  )
}

export default Filter