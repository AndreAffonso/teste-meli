import styled from 'styled-components';

import * as dimens from 'assets/dimens';
import colors from 'assets/colors';
import media from 'assets/media';

export const Flex = styled.div`
  display: flex;

  ${media.phone`
    flex-direction: column;
  `};
`;

export const FloatRight = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${dimens.defaultSpace}px;
  flex-basis: 30%;
`;

export const ImageWrapper = styled.div`
  padding: ${dimens.defaultSpace}px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 70%;
`;

export const Image = styled.img`
  width: 360px;

  ${media.tablet`
    width: 240px;
  `};

  ${media.phone`
    width: 160px;
  `};
`;

export const QuantitySold = styled.span``;

export const Name = styled.span`
  font-weight: bold;
  font-size: ${dimens.defaultOneAndHalfSpace}px;
`;

export const Button = styled.button`
  background: ${colors.infoButton};
  padding: ${dimens.defaultHalfSpace}px;
  border-radius: ${dimens.defaultBorderRadius}px;
  font-weight: bold;
  color: ${colors.white};

  &:hover {
    cursor: pointer;
  }
`;

export const Price = styled.span`
  display: flex;
  align-items: flex-start;

  padding: ${dimens.defaultSpace}px 0 ${dimens.defaultDoubleSpace}px 0;
`;

export const Amount = styled.span`
  font-size: ${dimens.defaultDoubleSpace}px;
`;

export const Decimals = styled.span`
  margin: ${dimens.defaultSpace / 4}px 0 0 ${dimens.defaultSpace / 4}px;

  font-size: 16px;
`;

export const Description = styled.div`
  padding: 0 ${dimens.defaultOneAndHalfSpace}px;
  color: ${colors.secondaryText};

  ${media.phone`
    padding: 0 ${dimens.defaultHalfSpace}px;
  `};
`;

export const DescriptionTitle = styled.h2`
  font-size: ${dimens.defaultDoubleSpace}px;
  font-weight: 400;
  padding: 0;
  margin-top: ${dimens.defaultDoubleSpace}px;

  ${media.phone`
    font-size:  ${dimens.defaultOneAndHalfSpace}px;
  `};
`;

export const DescriptionContent = styled.p`
  font-size: ${dimens.defaultSpace}px;
  line-height: ${dimens.defaultOneAndHalfSpace}px;
  width: 70%;
  white-space: pre-line;

  ${media.phone`
    width: 100%;
    word-break: break-word;
  `};
`;
