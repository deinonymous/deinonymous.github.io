import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PageSection from "./components/PageSection";
import Subsection from "./components/Subsection";
import { Explore, Map, Spa, Store } from "@mui/icons-material";

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

function App() {
  return (
    <div>
      <Header />
      <MainContent>
        <Hero />
        <PageSection title="Travel" icon={<Map />}>
          <Subsection title="Getting to Taniti" />
          <Subsection title="Getting around Taniti" />
        </PageSection>
        <PageSection title="Explore" icon={<Explore />}>
          <Subsection title="Things to See" />
          <Subsection title="Things to Do" />
        </PageSection>
        <PageSection title="Relax" icon={<Spa />}>
          <Subsection title="Places to Eat" />
          <Subsection title="Places to Stay" />
        </PageSection>
        <PageSection title="Essentials" icon={<Store />}>
          <Subsection title="Groceries & Convenience" />
          <Subsection title="Frequently Asked Questions" />
        </PageSection>
      </MainContent>
    </div>
  );
}

export default App;
