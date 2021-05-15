import styled from 'styled-components';

const ErrorStyle = styled.div`
  padding: 2rem;
  background: white;
  margin: 2rem 0;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-left: 5px solid red;
  p {
    margin: 0;
    font-weight: 100;
  }
`;

const DisplayError = ({ error }) => {
  if (!error || !error.message) return null;
  console.log(error);
  return (
    <ErrorStyle>
      <p data-test="server-error">{error.message}</p>
    </ErrorStyle>
  );
};

DisplayError.defaultProps = {
  error: {},
};

DisplayError.propTypes = {
  error: PropTypes.object,
};

export default DisplayError;
