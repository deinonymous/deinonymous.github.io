import { Explore, Map, Spa, Store } from "@mui/icons-material";
import { Button, useMediaQuery } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledAppBar = styled(AppBar)<{ $isMobile: boolean; $expanded: boolean }>`
  display: flex;
  ${({ $isMobile, $expanded }) => `
    flex-direction: ${
      !($isMobile && $expanded) ? "row !important;" : "column !important;"
    }
`}
`;

const StyledTypography = styled(Typography)`
  width: max-content;
  padding: 6px;
  cursor: pointer;
`;

const Menu = styled.div<{ $expanded: boolean; $isMobile: boolean }>`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  width: max-content;
  ${({ $isMobile, $expanded }) => `
    ${
      $isMobile && $expanded
        ? `
      width: 100%;
      justify-content: space-around;
    `
        : `
    `
    }

`}
`;

const StyledButton = styled(Button)<{ $isMobile: boolean; $expanded: boolean }>`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  ${({ $isMobile }) => `
    flex-direction: ${$isMobile ? "column" : "row"};
  `}
`;

const NavButton = ({
  icon,
  to,
  children,
  $isMobile,
  $expanded,
  setExpanded,
}: {
  icon: React.ReactNode;
  to: string;
  children: React.ReactNode;
  $isMobile: boolean;
  $expanded: boolean;
  setExpanded: (expanded: boolean) => void;
}) => (
  <StyledButton
    variant="text"
    color="inherit"
    startIcon={icon}
    onClick={() =>
      $expanded
        ? document.querySelector(to)?.scrollIntoView({
            block: "center",
            behavior: "smooth",
          })
        : setExpanded(true)
    }
    $isMobile={$isMobile}
    $expanded={$expanded}
  >
    {children}
  </StyledButton>
);

const Header = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [expanded, setExpanded] = useState(isMobile);

  useEffect(() => {
    const handleScroll = () => {
      console.log("User is scrolling");
      setExpanded(window.scrollY < 100 || !isMobile);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  return (
    <StyledAppBar $isMobile={isMobile} $expanded={expanded}>
      <StyledTypography
        variant="h5"
        onClick={() =>
          document
            .querySelector("#hero")
            ?.scrollIntoView({ block: "center", behavior: "smooth" })
        }
      >
        Discover Taniti
      </StyledTypography>
      <Menu $expanded={expanded} $isMobile={isMobile}>
        <NavButton
          icon={<Map />}
          to="#travel"
          $isMobile={isMobile}
          $expanded={expanded}
          setExpanded={setExpanded}
        >
          {(!isMobile || expanded) && <span>Travel</span>}
        </NavButton>
        <NavButton
          icon={<Explore />}
          to="#explore"
          $isMobile={isMobile}
          $expanded={expanded}
          setExpanded={setExpanded}
        >
          {(!isMobile || expanded) && <span>Explore</span>}
        </NavButton>
        <NavButton
          icon={<Spa />}
          to="#relax"
          $isMobile={isMobile}
          $expanded={expanded}
          setExpanded={setExpanded}
        >
          {(!isMobile || expanded) && <span>Relax</span>}
        </NavButton>
        <NavButton
          icon={<Store />}
          to="#essentials"
          $isMobile={isMobile}
          $expanded={expanded}
          setExpanded={setExpanded}
        >
          {(!isMobile || expanded) && <span>Essentials</span>}
        </NavButton>
      </Menu>
    </StyledAppBar>
  );
};

export default Header;
