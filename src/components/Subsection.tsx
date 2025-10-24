import { Divider, Typography } from "@mui/material";
import type React from "react";
import styled from "styled-components";

const SubsectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 32px;
  max-width: 1080px;
`;

const contentMap: { [key: string]: string | React.ReactNode } = {
  "Places to Eat":
    "Taniti currently has 10 restaurants: five serve mostly local fish and rice, three serve American-style meals, and two serve Pan-Asian cuisine.",
  "Places to Stay":
    "Taniti has a wide variety of lodging that ranges from an inexpensive hostel to one large, four-star resort. There are many small, family-owned hotels and a growing number of bed and breakfasts. All types of lodging are strictly regulated and regularly inspected by the Tanitian government.",
  "Getting to Taniti":
    "Almost all visitors arrive to Taniti by air, though some arrive on a small cruise ship that docks in Yellow Leaf Bay for one night per week. Taniti is served by a small airport that can accommodate small jets and propeller planes. Taniti is in the process of expanding the airport so larger jets will be able to land on the island within the next few years. ",
  "Getting around Taniti":
    "Public buses serve Taniti City and run from 5 a.m. to 11 p.m. every day. Private buses serve the rest of the island. Taxis are available in Taniti City, and rental cars can be rented from a local rental agency near the airport. Bikes and helmets are available to rent from several vendors (helmets are required by law). Taniti City is fairly flat and very walkable. Many tourists stay in the area surrounding Merriton Landing: this area is easy to explore on foot.",
  "Things to See":
    "Most tourists spend most of their time in Taniti City, which boasts native architecture and nearby white, sandy beaches that encircle Yellow Leaf Bay. Other popular activities include boat or bus tours of the island, hikes in the rainforest, or visits to Taniti’s active volcano.",
  "Things to Do":
    "Most people visit Taniti to enjoy the beaches, explore the rainforest, and to visit the volcano. However, there are other things to do, including visiting a local history museum, going on chartered fishing tours, snorkeling, zip-lining in the rainforest, visiting several pubs, including a microbrewery, dancing at a new dance club, seeing a movie, taking helicopter rides, playing at an arcade, visiting art galleries, and bowling. Also, a nine-hole golf course should be operational by next year. Many of these activities are located in Merriton Landing, which is a rapidly developing area on the north side of Yellow Leaf Bay. ",
  "Groceries & Convenience":
    "Taniti has two supermarkets, two smaller grocery stores, and one convenience store that is open 24 hours a day. ",
  "Frequently Asked Questions": (
    <ul>
      <li>Power outlets are 120 volts (the same as in the United States).</li>
      <li>
        Alcohol is not allowed to be served or sold between the hours of
        midnight and 9:00 a.m.
      </li>
      <li>
        The drinking age on Taniti is 18 and the drinking age is not strictly
        enforced.
      </li>
      <li>
        Many younger Tanitians speak fluent English. Very little English is
        spoken in rural areas, especially by the older residents.
      </li>
      <li>
        There is one hospital and several clinics. The hospital has many
        multilingual employees.
      </li>
      <li>
        Violent crime is very rare on Taniti, but as tourism increases, there
        are more reports of pickpocketing and other petty crimes.
      </li>
      <li>
        Taniti enjoys a large number of national holidays, and many tourist
        attractions and restaurants will be closed on holidays, so visitors
        should plan accordingly.
      </li>
      <li>
        Taniti uses the U.S. dollar as its currency, but many businesses will
        also accept euros and yen. Several banks facilitate currency exchange,
        and many businesses accept major credit cards.
      </li>
    </ul>
  ),
};

const Subsection = ({ title }: { title: string }) => {
  return (
    <SubsectionDiv style={{ width: "100%" }}>
      <Typography variant="h4">{title}</Typography>
      <Divider />
      {contentMap[title] ? (
        <Typography variant="body1">{contentMap[title]}</Typography>
      ) : (
        <Typography variant="body1">Content for {title} goes here.</Typography>
      )}
    </SubsectionDiv>
  );
};

export default Subsection;
