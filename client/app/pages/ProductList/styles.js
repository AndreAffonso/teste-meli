import styled from 'styled-components';

import * as dimens from 'assets/dimens';
import colors from 'assets/colors';

export const Wrapper = styled.div`
  background: ${colors.white};
  display: flex;
  flex-direction: column;
  margin: ${dimens.defaultDoubleSpace}px ${dimens.desktopMargin} 0
    ${dimens.desktopMargin};
  border-radius: ${dimens.defaultBorderRadius}px;
`;
