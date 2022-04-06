import { Main, StyledAppContainer } from './app-container-styled';
import { Footer } from './footer';
import { Header } from './header';

const AppContainer = ({ children }) => {
  return (
    <StyledAppContainer>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </StyledAppContainer>
  );
};

export default AppContainer;
