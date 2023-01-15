import styled from 'styled-components';

export const ForumPagination = ({
  // page,
  onClick,
}: {
  // page: number;
  onClick: (page: number) => void;
}) => {
  return (
    <Nav>
      <Button onClick={() => onClick(1)}>{1}</Button>
      <Button onClick={() => onClick(2)}>{2}</Button>
      <Button onClick={() => onClick(3)}>{3}</Button>
      <Button onClick={() => onClick(4)}>{4}</Button>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: black;
  color: white;
  font-size: 1rem;
`;
