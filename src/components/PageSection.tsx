import { Typography } from "@mui/material";
import styled from "styled-components";

const Title = styled(Typography)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    315deg,
    rgba(0, 0, 123, 0.6),
    rgba(255, 0, 0, 0.4)
  );
  gap: 32px;
  padding: 12px;
  background-position: center;
  background-size: cover;
  color: white;

  svg {
    scale: 3;
  }
`;

const SubsectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 16px;
  gap: 32px;
`;

const PageSection = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <section>
      <Title variant="h2" id={title.toLowerCase()}>
        {icon && icon}
        {title}
      </Title>
      <SubsectionContainer>{children}</SubsectionContainer>
    </section>
  );
};

export default PageSection;
