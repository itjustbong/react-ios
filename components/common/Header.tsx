import styled from '@emotion/styled';
import tw from 'twin.macro';
import Link from 'next/link';
import { HeaderType } from '../../types/props';
import React from 'react';
import Text from './Text';
import usePopUp from '../../hooks/usePopUp';
import useToast from '../../hooks/useToast';
import { Col, Row } from './Layout';
import { FaReact } from 'react-icons/fa';

const MenuList = [
  { name: '팝업', url: '/pop-up' },
  { name: '알림창', url: '/noti' },
  { name: '슬라이드업', url: '/slide-up' },
];

const Header = (props: HeaderType) => {
  const PopUp = usePopUp();
  const Toast = useToast();

  return (
    <Container>
      <PopUp.Render />
      <Toast.Render />

      <Right>
        <Link href="/">
          <Row>
            <FaReact color="sky" size="32px" />
            <Text color="gray" fontWeight="bold">
              with IOS
            </Text>
          </Row>
        </Link>
      </Right>

      <Left>
        {MenuList.map((item) => (
          <Menu key={item.name} clicked={item.url === props.loc}>
            <Link href={item.url}>{item.name}</Link>
          </Menu>
        ))}
      </Left>
    </Container>
  );
};

export default React.memo(Header);

const Container = tw.div`
  flex
  flex-row
  justify-between
  items-center
  h-16
  w-[1000px]
  mx-auto
`;

const Menu = styled.span`
  color: black;
  font-weight: bold;
  ${({ clicked = false }: { clicked: boolean }) =>
    clicked && tw`text-green-600 font-bold`};
`;

const Right = tw.div`
  
`;

const Left = tw.div`
  flex
  flex-row
  gap-10
`;
