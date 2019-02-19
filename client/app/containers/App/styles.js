import styled from 'styled-components';

import * as dimens from 'assets/dimens';
import media from 'assets/media';
import colors from 'assets/colors';
import { boxShadow } from 'assets/mixins';

export const Wrapper = styled.div`
  margin: ${dimens.defaultSpace}px ${dimens.desktopMargin};
  ${media.tablet`
    margin: ${dimens.defaultSpace}px;
  `};
`;

export const InfoContainer = styled.div`
  background: ${colors.white};
  display: flex;
  flex-direction: column;
  border-radius: ${dimens.defaultBorderRadius}px;
  ${boxShadow};
`;
