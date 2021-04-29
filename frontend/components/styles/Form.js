import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  background: rgba(0, 0, 0, 0.02);
  border: 5px solid white;
  padding: 20px;
  font-size: 2rem;
  line-height: 1.5;
  font-weight: 600;
  fieldset {
    border: none;
  }
  textarea,
  input {
    width: 100%;
    padding: 1rem;
    &:focus {
      border-color: var(--orange);
      border: 0.3rem solid;
      outline: 0;
    }
  }
  input[type='number'] {
    width: 80px;
    margin-left: 2rem;
  }
  button[type='submit'] {
    width: 200px;
    border: 0;
    border-radius: 1rem;
    padding: 1em 2.5rem;
    font-weight: 600;
    background: var(--orange);
    transition: background 0.3s ease;
  }
  button[type='submit']:hover {
    background: green;
  }
  label {
    display: block;
    margin-bottom: 1rem;
  }
`;

export default Form;
