import { createGlobalStyle } from 'styled-components';

import * as dimens from 'assets/dimens';
import media from 'assets/media';
import colors from 'assets/colors';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    background: ${colors.backgroundGrey};
    color:  ${colors.text};
    font-size: ${dimens.defaultSpace};

    ${media.phone`
      background:  ${colors.white};
    `};
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  p,
  label {
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
