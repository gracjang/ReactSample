import React from 'react';
import styled from 'styled-components';
import bulbIcon from 'assets/bulb.svg';
import linkIcon from 'assets/link.svg';
import penIcon from 'assets/pen.svg';
import plusIcon from 'assets/plus.svg';
import logoutIcon from 'assets/logout.svg';
import twitterIcon from 'assets/twitter.svg';
import ButtonIcon from './ButtonIcon';

const YellowBackround = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 500px;
  background-color: ${({ theme }) => theme.note};
`;

export default {
  title: './ButtonIcon',
  component: ButtonIcon,
  decorators: [
    (Story) => (
      <YellowBackround>
        <Story />
      </YellowBackround>
    ),
  ],
};

export const BulbIcon = () => {
  return <ButtonIcon icon={bulbIcon} />;
};

export const LinkIcon = () => {
  return <ButtonIcon icon={linkIcon} />;
};

export const PenIcon = () => {
  return <ButtonIcon icon={penIcon} />;
};

export const PlusIcon = () => {
  return <ButtonIcon icon={plusIcon} />;
};

export const LogoutIcon = () => {
  return <ButtonIcon icon={logoutIcon} />;
};

export const TwitterIcon = () => {
  return <ButtonIcon icon={twitterIcon} />;
};
