import styled from 'styled-components';

const Card = styled.div`
  box-sizing: border-box;
  max-width: 410px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  padding: 1rem;
  border: 1px solid #999;
  margin-bottom: 1rem;
  font-size: 0.8rem;
`;

const Button = styled.button`
  background: linear-gradient(to bottom, #6371c7, #5563c1);
  border-color: #3f4eae;
  border-radius: 3px;
  padding: 1rem;
  color: white;
  font-weight: 700;
  width: 100%;
  margin-bottom: 1rem;
  font-size: 0.8rem;
`;

const Logo = styled.img`
  width: 50%;
  margin-bottom: 1rem;
`;

const Error = styled.div`
padding: 15px;
background-color: #f44336; /* Red */
color: white;
margin-bottom: 15px;
opacity: 0.83;
    transition: opacity 0.6s;
`;

const Success = styled.div`
  padding: 15px;
  background-color: #4CAF50;
  color: white;
  margin-bottom: 15px;`
  ;

  const Container = styled.div`
  max-width: 500px;
  margin: 40px auto;
  @media(max-width: 590px) {
    width: 300px;
  }`
  ;

export { Form, Input, Button, Logo, Card, Error, Success };