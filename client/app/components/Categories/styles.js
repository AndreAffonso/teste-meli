import styled from 'styled-components';
import * as dimens from 'assets/dimens';
import colors from 'assets/colors';
import media from 'assets/media';

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: ${dimens.defaultSpace}px;
  div {
    display: flex;
    align-items: center;
    white-space: nowrap;
    overflow: hidden;
    margin-right: 0;
    color: ${colors.secondaryText};
    font-weight: 400;
    position: relative;
    font-size: ${dimens.defaultSpace}px;
    text-overflow: ellipsis;

    i {
      margin: 0 ${dimens.defaultHalfSpace}px;
    }

    ${media.phone`
      font-weight: 600;
      font-size: ${dimens.defaultSpace * (2 / 3)}px;
    `};
  }
`;
