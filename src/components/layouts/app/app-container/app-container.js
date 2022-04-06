import { Main, StyledAppContainer } from './app-container-styled';
import { Footer } from './footer';
import { Header } from './header';

const AppContainer = () => {
  return (
    <StyledAppContainer>
      <Header />
      <Main>test</Main>
      <Footer />
    </StyledAppContainer>
  );
};

export default AppContainer;
