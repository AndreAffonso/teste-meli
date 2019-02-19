import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from 'assets/colors';
import * as dimens from 'assets/dimens';
import media from 'assets/media';

export const Wrapper = styled(Link)`
  positon: relative;
  color: unset;
  text-decoration: unset;
  display: flex;
  justify-content: space-between;
  margin: ${dimens.defaultSpace}px;

  border-bottom: 1px solid ${colors.borderGrey};

  &:focus {
    color: unset;
  }

  &:active {
    color: unset;
  }

  ${media.phone`
    flex-direction: column-reverse;
  `};
`;

export const FloatLeft = styled.div`
  display: flex;
  align-items: center;
  div {
    margin: ${dimens.defaultSpace}px;
  }
`;

export const FloatRight = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Image = styled.img`
  height: auto;
  width: auto;
`;

export const Price = styled.span`
  font-size: 1.5rem;
`;

export const Name = styled.span``;

export const City = styled.span`
  padding-right: ${dimens.defaultDoubleSpace * 2}px;

  ${media.phone`
    padding: 0;
  `};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
