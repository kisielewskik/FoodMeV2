import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: ${({ theme: { color } }) => color.mainYellow};
  padding: 0 10px;
`;

export const Logo = styled.div`
  font-size: 40px;
  font-weight: 100;
  height: 94px;

  p {
    font-size: 14px;
    margin 0 0 0 120px;
    color: ${({ theme }) => theme.color.black};
  }
`;

export const NaviWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ theme: { fontSize } }) => fontSize.lg};
  width: 350px;
  padding-right: 50px;
`;
