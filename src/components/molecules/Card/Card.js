import React from 'react';
import styled, { css } from 'styled-components';

import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  width: 35%;
  min-height: 450px;
  border-radius: 10px;
  overflow: hidden;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  padding: 17px 30px 10px;
  background-color: ${({ yellow, theme }) => (yellow ? theme.primary : 'white')};

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

const Card = () => {
  return (
    <StyledWrapper>
      <InnerWrapper yellow>
        <StyledHeading>Siemandero Gracjan</StyledHeading>
        <DateInfo>3 days</DateInfo>
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

export default Card;
