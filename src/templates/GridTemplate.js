import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import UserPageTemplate from 'templates/UserPageTemplate';
import { PropTypes } from 'prop-types';

const StyledWrapper = styled.div`
  padding: 25px 50px 25px 40px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 65px;
`;

const StyledHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  margin: 0;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;
`;

const GridTemplate = ({ children, pageType }) => {
  return (
    <UserPageTemplate pageType={pageType}>
      <StyledWrapper>
        <StyledHeader>
          <Input search placeholder="Search" />
          <StyledHeading as="h1">Notes</StyledHeading>
          <StyledParagraph>6 notes</StyledParagraph>
        </StyledHeader>
        <StyledGrid>{children}</StyledGrid>
      </StyledWrapper>
    </UserPageTemplate>
  );
};

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageType: PropTypes.oneOf(['note', 'twitter', 'article']),
};

GridTemplate.defaultProps = {
  pageType: 'note',
};

export default GridTemplate;
