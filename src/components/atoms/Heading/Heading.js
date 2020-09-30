import styled from 'styled-components';

const Heading = styled.h1`
  font-size: ${({ theme, big }) => (big ? theme.fontSize.m : theme.fontSize.s)};
  font-weight: ${({ theme }) => theme.bold};
`;

export default Heading;
