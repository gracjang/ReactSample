import React from 'react';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

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

const UserPageTemplate = ({ children, pageType }) => {
  return (
    <>
      <Sidebar pageType={pageType} />
      <StyledWrapper>
        <StyledHeader>
          <Input search placeholder="Search" />
          <StyledHeading as="h1">Notes</StyledHeading>
          <StyledParagraph>6 notes</StyledParagraph>
        </StyledHeader>

        <StyledGrid>{children}</StyledGrid>
      </StyledWrapper>
    </>
  );
};

UserPageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  pageType: PropTypes.oneOf(['note', 'twitter', 'article']),
};

UserPageTemplate.defaultProps = {
  pageType: 'note',
};

export default UserPageTemplate;
