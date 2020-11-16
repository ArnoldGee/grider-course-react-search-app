import React from 'react';

const SearchBAr = ({text, onSearchSubmit, onInputChange}) => {
  return (
    <div style={{marginTop: '2em'}} className="ui segment">
      <form onSubmit={onSearchSubmit} className="ui form">
        <div className="field">
          <label htmlFor="">Image Search</label>
          <input
            type="text"
            value={text}
            onChange={onInputChange}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBAr