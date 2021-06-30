import React from 'react';

const Categories = ({filterItems,category}) => {
  return (
    <div className="btn-container">
        {category.map((element, index) => {
          return (            
            <button key={index} className="filter-btn" type="button" onClick={() => filterItems(element)}>
              {element}
            </button>
          );
        })}
    </div>
  );
};

export default Categories;
