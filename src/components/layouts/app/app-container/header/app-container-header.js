import { Logo, StyledHeader } from './app-header-styled';
import Navi from './navi-items';

const Header = () => {
  return (
    <StyledHeader>
      <Logo>
        <div>FoodMe</div>
        <p>byNewRelic</p>
      </Logo>
      <Navi />
    </StyledHeader>
  );
};

export default Header;
