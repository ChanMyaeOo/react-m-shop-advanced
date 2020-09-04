import styled, { css } from "styled-components";
import { ReactComponent as Logo } from "../../assets/images/crown.svg";
import { Link } from "react-router-dom";

const OptionContainerStyles = css`
  padding: 15px;
  cursor: pointer;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
`;

export const LogoContainer = styled(Logo)`
  height: 80px;
  margin-left: 25px;
`;

export const OptionsContainer = styled.div`
  display: flex;
  height: 80px;
  justify-content: center;
  align-items: center;
`;

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;

export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`;
