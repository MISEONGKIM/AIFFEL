import styled from 'styled-components';
const Button = styled.button`
  backgournd-color: black;
`;
export const ButtonBlack = ({
  disabled = false,
  text,
  onClick,
}: {
  disabled?: boolean;
  text: string;
  onClick: () => void;
}) => (
  <Button disabled={disabled} onClick={onClick}>
    {text}
  </Button>
);
