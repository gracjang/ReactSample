import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import LinkIcon from 'assets/link.svg';

const StyledWrapper = styled.div`
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  width: 35%;
  min-height: 400px;
  border-radius: 10px;
  overflow: hidden;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  padding: 15px 30px 10px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};
  position: relative;

  :first-of-type {
    z-index: 9999;
  }

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const DateInfo = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.cs};
  margin: 0 0 8px;
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`;

const StyledAvatar = styled.img`
  width: 86px;
  height: 86px;
  border-radius: 50px;
  border: 5px solid ${({ theme }) => theme.twitter};
  position: absolute;
  right: 25px;
  top: 50px;
`;

const StyledLinkButton = styled.a`
  display: block;
  width: 47px;
  height: 47px;
  border-radius: 50px;
  background: white url(${LinkIcon}) no-repeat;
  background-size: 60%;
  background-position: 50%;
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
`;

const Card = ({ cardType }) => {
  return (
    <StyledWrapper>
      <InnerWrapper activeColor={cardType}>
        <StyledHeading>Siemandero Gracjan</StyledHeading>
        <DateInfo>3 days</DateInfo>
        {cardType === 'twitter' && (
          <StyledAvatar src="https://unavatar.now.sh/twitter/MorawieckiM" />
        )}
        {cardType === 'article' && <StyledLinkButton href="https://twitter.com/MorawieckiM" />}
      </InnerWrapper>
      <InnerWrapper flex>
        <Paragraph>
          Sed dolor justo accusam sed sadipscing stet erat aliquyam lorem amet. Rebum justo diam
          takimata sanctus dolore rebum amet aliquyam.
        </Paragraph>
        <Button secondary>REMOVE</Button>
      </InnerWrapper>
    </StyledWrapper>
  );
};

Card.propTypes = {
  cardType: PropTypes.oneOf(['note', 'twitter', 'article']),
};

Card.defaultProps = {
  cardType: 'note',
};

export default Card;
