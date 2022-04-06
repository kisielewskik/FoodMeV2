import { Main, StyledAppContainer } from './app-container-styled';
import { Header } from './header';

const AppContainer = () => {
  return (
    <StyledAppContainer>
      <Header />
      <Main>test</Main>
    </StyledAppContainer>
  );
};

export default AppContainer;
