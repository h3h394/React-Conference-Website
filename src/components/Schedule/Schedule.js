/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { useState } from "react";
import Title from "../GlobalComponents/Title";
import ScheduleNavItem from "./ScheduleNavItem";
import Container from "../GlobalComponents/Container";
import ScheduleCard from "./ScheduleCard";
import ScheduleOneBg from "../../img/scheduleOne.jpg";
import ScheduleTwoBg from "../../img/scheduleTwo.jpg";
import ScheduleThreeBg from "../../img/scheduleThree.jpg";
import ScheduleFourBg from "../../img/scheduleFour.jpg";

const Schedule = () => {
  const [day, setDay] = useState("Monday");

  return (
    <section css={styles} className="schedule" id="pages">
      <Title subtitle="OUR TIMETABLE" title="SCHEDULE PLAN" />
      <div className="scheduleNav">
        <ScheduleNavItem
          day={day}
          setDay={setDay}
          itemName="Monday"
          itemDate="January 14, 2019"
        />
        <ScheduleNavItem
          day={day}
          setDay={setDay}
          itemName="Tuesday"
          itemDate="January 15, 2019"
        />
        <ScheduleNavItem
          day={day}
          setDay={setDay}
          itemName="Wednesday"
          itemDate="January 16, 2019"
        />
      </div>
      <Container>
        {day === "Monday" && (
          <React.Fragment>
            <ScheduleCard
              scheduleImg={ScheduleOneBg}
              scheduleTitle="Dealing with Difficult People"
              scheduleDesc="by Gary Armstrong / Ceo of Confer"
            />
            <ScheduleCard
              scheduleImg={ScheduleTwoBg}
              scheduleTitle="Crop Insurance Conference"
              scheduleDesc="by Amanda Hudson / Ceo of Confer"
            />
            <ScheduleCard
              scheduleImg={ScheduleThreeBg}
              scheduleTitle="Capdm Executive Conference"
              scheduleDesc="by Martha Burke / Ceo of Confer"
            />
            <ScheduleCard
              scheduleImg={ScheduleFourBg}
              scheduleTitle="Street Food Convention"
              scheduleDesc="by Jeffrey Morales / Ceo of Confer"
            />
          </React.Fragment>
        )}
        {day === "Tuesday" && (
          <React.Fragment>
            <ScheduleCard
              scheduleImg={ScheduleTwoBg}
              scheduleTitle="Crop Insurance Conference"
              scheduleDesc="by Amanda Hudson / Ceo of Confer"
            />
            <ScheduleCard
              scheduleImg={ScheduleThreeBg}
              scheduleTitle="Capdm Executive Conference"
              scheduleDesc="by Martha Burke / Ceo of Confer"
            />
            <ScheduleCard
              scheduleImg={ScheduleFourBg}
              scheduleTitle="Street Food Convention"
              scheduleDesc="by Jeffrey Morales / Ceo of Confer"
            />
          </React.Fragment>
        )}
        {day === "Wednesday" && (
          <React.Fragment>
            <ScheduleCard
              scheduleImg={ScheduleOneBg}
              scheduleTitle="Dealing with Difficult People"
              scheduleDesc="by Gary Armstrong / Ceo of Confer"
            />
            <ScheduleCard
              scheduleImg={ScheduleFourBg}
              scheduleTitle="Street Food Convention"
              scheduleDesc="by Jeffrey Morales / Ceo of Confer"
            />
          </React.Fragment>
        )}
      </Container>
    </section>
  );
};

const styles = css`
  width: 100%;
  background: #151853;
  padding: 100px 0;
  .scheduleNav {
    display: flex;
    justify-content: center;
  }
  .container {
    min-height: 634px;
  }
  @media (max-width: 970px) {
    .scheduleNav {
      padding: 14px 0 0 0;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  @media (max-width: 1168px) {
    .scheduleNav {
      width: 100%;
      max-width: 90%;
      margin: 0 auto;
    }
  }
`;

export default Schedule;
