import styled from '@emotion/styled';
import tw from 'twin.macro';
import {
  color,
  ColorProps,
  typography,
  TypographyProps,
  border,
  BorderProps,
} from 'styled-system';

type ButtonProps = ColorProps & TypographyProps & BorderProps;

// const Button = tw.button`
//   bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md
// `;

const Button = styled.button<ButtonProps>(
  tw`bg-white text-black font-bold py-2 px-4 rounded-md border border-black`,
  color,
  typography,
  border
);

const BorderButton = styled.button(({ selected }: { selected?: boolean }) => [
  tw`bg-gray-50 text-gray-700  hover:bg-white hover:border-gray-100 border font-bold py-2 px-4 rounded-md`,
  selected && tw`border border-green-500 bg-white`,
]);

export default Button;

export { BorderButton };
