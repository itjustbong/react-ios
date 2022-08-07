import tw from 'twin.macro';
import styled from '@emotion/styled';

///////////// Form /////////////
const Form = tw.form`
  flex
  flex-row
  gap-3
  mx-auto
  justify-center
  relative
`;

const SubOption = styled.div(({ hide }: { hide: boolean }) => [
  tw`flex flex-col absolute bg-gray-200 py-5 rounded-md top-14 gap-1 w-full invisible`,
  hide && tw`visible`,
]);

///////////// InputBox /////////////
const Input = tw.input`
 appearance-none border-2 border-gray-200 rounded-md py-2 px-4 text-gray-700 leading-tight min-w-[340px]
  focus:outline-none focus:bg-white focus:border-green-500 hover:border-green-500 
`;

///////////// Select /////////////
const Select = tw.select`
  bg-white rounded-md border border-gray-200 text-gray-500 hover:ring-2 hover:ring-green-500 outline-none px-2
`;

///////////// Option /////////////
const Option = tw.option`
`;

export { Form, Input, Select, Option, SubOption };
