import styled from 'styled-components';
const Div = styled.div`
  padding: 3px;
  maring: 5px;
`;
const Input = styled.input`
  width: 300px;
`;
export const InputLarge = ({
  onChange,
  placeholder,
  type,
  value,
}: {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  type: React.HTMLInputTypeAttribute;
  value: string;
}) => {
  return (
    <Div>
      <Input
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        type={type}
      />
    </Div>
  );
};
