import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

function Categories({ categories }) {
  return (
    !!categories.length && (
      <Wrapper>
        {categories.slice(0, 5).map((category, index) => (
          <div key={category}>
            <span>{category}</span>
            {index !== 4 && <i className="material-icons">navigate_next</i>}
          </div>
        ))}
      </Wrapper>
    )
  );
}

Categories.propTypes = {
  categories: PropTypes.array.isRequired
};

export default Categories;
