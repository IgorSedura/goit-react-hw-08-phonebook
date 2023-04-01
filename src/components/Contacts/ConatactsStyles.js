import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-around;
  height: 600px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 180px;
  }
`;

export const InputSearch = styled.div`
  display: flex;
  justify-content: center;
`;
