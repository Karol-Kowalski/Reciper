import styled from 'styled-components';

const Form = styled.form`
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.5);
  background: rgba(0, 0, 0, 0.02);
  border: 2px solid white;
  padding: 20px;
  font-size: 2rem;
  line-height: 1.5;
  font-weight: 600;
  fieldset {
    border: none;

    &[disabled] {
      opacity: 0.5;
    }
  }
  textarea,
  input {
    width: 100%;
    padding: 1rem;
    &:focus {
      border: 0.3rem solid var(--orange);
      outline: 0;
    }
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
