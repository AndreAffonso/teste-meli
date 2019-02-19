import styled, { css } from 'styled-components';
import colors from 'assets/colors';
import { boxShadow } from 'assets/mixins';
import * as dimens from 'assets/dimens';
import media from 'assets/media';

export const Wrapper = styled.form`
  border-radius: ${dimens.defaultBorderRadius}px;
  background: ${colors.white};
  width: 100%;
  flex-direction: row-reverse;
  display: flex;
  position: relative;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.16);
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: ${dimens.defaultSpace * (2 / 3)}px ${dimens.defaultHalfSpace}px;

  &:focus {
    outline: none;
  }
`;

export const SearchButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  background: ${colors.searchButton};
  border-radius: 0 ${dimens.defaultBorderRadius}px
    ${dimens.defaultBorderRadius}px 0;

  &:focus {
    outline: none;
  }
`;

export const SuggestionContainer = styled.div`
  z-index: 99;
  display: ${props => (props.open ? 'flex' : 'none')};
  position: absolute;
  top: ${dimens.defaultDoubleSpace + dimens.defaultHalfSpace}px;
  background: ${colors.white};
  left: 0;
  width: 100%;

  ${boxShadow};
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  flex-direction: column;
`;
// display: none;

export const SuggestedResult = styled.button`
  cursor: pointer;
  background: papaywhip;
  padding: ${dimens.defaultHalfSpace / 2}px 0 ${dimens.defaultHalfSpace / 2}px
    ${dimens.defaultSpace}px;
  color: ${colors.text};
  border-radius: 0 0 ${dimens.defaultBorderRadius}px
    ${dimens.defaultBorderRadius}px;
  display: flex;
  align-items: center;
  font-weight: bold;

  ${props =>
    props.active &&
    css`
      background: ${colors.infoButton};
      color: ${colors.white};
      > i {
        color: ${colors.white};
      }
    `};
  &:hover {
    background: ${colors.infoButton};
    color: ${colors.white};
    > i {
      color: ${colors.white};
    }
  }
`;

export const Logo = styled.i`
  color: ${colors.secondaryText};
  font-size: ${dimens.defaultSpace}px;
  margin-right: ${dimens.defaultSpace}px;
`;

export const SuggestedValue = styled.span`
  font-size: ${dimens.defaultSpace}px;
  line-height: 2;
`;
