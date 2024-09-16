import { Link } from "react-router-dom";
import styled from "styled-components";

const Logo = () => {
  return (
    <LogoStyle>
      <div>
        <Link to={"/"} className="Logof">
          SneakMax
        </Link>
      </div>
    </LogoStyle>
  );
};

const LogoStyle = styled.section`
  .Logof {
    font-family: "Intro Bold";
    font-weight: 700;
    font-size: 30px;
    line-height: 30px;
    color: white;
  }
`;


export default Logo;
