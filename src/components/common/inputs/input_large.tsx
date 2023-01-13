import styled from 'styled-components';
const Input = styled.input`
  backgournd-color: red;
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
    <div>
      <Input
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        type={type}
      />
    </div>
  );
};
