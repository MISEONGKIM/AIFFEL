import styled from 'styled-components';
const Button = styled.button`
  backgournd-color: black;
`;
export const ButtonBlack = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) => <Button onClick={onClick}>{text}</Button>;
