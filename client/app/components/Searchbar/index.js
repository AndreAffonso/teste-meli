import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  SearchInput,
  SearchButton,
  Container,
  SuggestionContainer,
  SuggestedResult,
  Logo,
  SuggestedValue
} from './styles';

const Searchbar = React.memo(({ onSubmit }) => {
  const lastFiveResults = localStorage.getItem('lastFiveResults')
    ? localStorage.getItem('lastFiveResults').split(',')
    : [];
  const [searchValue, setSearchValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const openSuggestions = () => setShowSuggestions(true);
  const closeSuggestions = () => setShowSuggestions(false);

  const handleSubmitValue = value => {
    onSubmit(value);
    document.getElementById('search-input').blur();
    closeSuggestions();
  };

  return (
    <Wrapper
      onSubmit={e => {
        e.preventDefault();
        if (searchValue) {
          handleSubmitValue(searchValue);
        }
      }}
    >
      <SearchButton>
        <i className="material-icons">search</i>
      </SearchButton>
      <SearchInput
        onFocus={openSuggestions}
        onBlur={() => closeSuggestions()}
        autoComplete="off"
        id="search-input"
        placeholder="Nunca dejes de buscar"
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        type="text"
      />
      <SuggestionContainer open={lastFiveResults.length && showSuggestions}>
        {lastFiveResults
          .filter(value => value.includes(searchValue))
          .map((filteredValue, index) => (
            <SuggestedResult
              onMouseDown={e => {
                setSearchValue(filteredValue);
                onSubmit(filteredValue);
              }}
            >
              <Logo className="material-icons">access_time</Logo>
              <SuggestedValue>{filteredValue}</SuggestedValue>
            </SuggestedResult>
          ))}
      </SuggestionContainer>
    </Wrapper>
  );
});

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired
};

export default Searchbar;
