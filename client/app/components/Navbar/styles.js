import styled from 'styled-components';

import * as dimens from 'assets/dimens';
import media from 'assets/media';
import colors from 'assets/colors';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background: ${colors.primary};
  align-items: center;
  height: ${dimens.navbarHeight}px;
  padding: 0 ${dimens.desktopMargin};
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);

  ${media.tablet`
    padding: 0 ${dimens.defaultSpace}px;
  `};

  a {
    margin-right: ${dimens.defaultSpace}px;
  }
`;
