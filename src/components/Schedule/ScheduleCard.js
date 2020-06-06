/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Button from "../GlobalComponents/Button";

const ScheduleCard = ({ scheduleImg, scheduleTitle, scheduleDesc }) => (
  <div css={styles} className="scheduleCard">
    <div className="cardWrapper">
      <div className="infoWrapper">
        <img src={scheduleImg} alt="schedule" />
        <div className="info">
          <h3>{scheduleTitle}</h3>
          <p>{scheduleDesc}</p>
        </div>
      </div>
      <div className="about">
        <p>
          <i className="far fa-clock"></i> 12-14 Jan 2019
        </p>
        <p>
          <i className="fas fa-map"></i> Mountain Resort, Phoenix, USA
        </p>
      </div>
    </div>
    <Button btnTitle="View more" />
  </div>
);

const styles = css`
  width: 100%;
  border: 1px solid #444675;
  border-radius: 10px;
  padding: 30px;
  margin: 22px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: border 500ms ease-in-out;
  cursor: pointer;
  &:hover {
    border: 1px solid #df42b1;
  }
  .cardWrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 740px;
    color: #fff;
    .infoWrapper {
      display: flex;
      align-items: center;
      img {
        width: 80px;
        height: 80px;
        display: block;
        border-radius: 50%;
        margin-right: 30px;
      }
    }
    .about {
      padding-left: 14px;
      p {
        i {
          color: #df42b1;
          margin-right: 10px;
        }
      }
    }
  }
  @media (max-width: 970px) {
    flex-direction: column;
    align-items: center;
    max-width: 608px;
    .cardWrapper {
      max-width: 100%;
      flex-wrap: wrap;
      .infoWrapper {
        width: 100%;
        .info {
          h3 {
            font-size: 15px;
          }
          p {
            font-size: 13px;
          }
        }
      }
      .about {
        padding: 18px 14px;
        p {
          font-size: 15px;
        }
      }
    }
    .btn {
      width: 100%;
    }
  }

  @media (min-width: 971px) and (max-width: 1168px) {
    .cardWrapper {
      max-width: 80%;
      justify-content: flex-start;
      .infoWrapper {
        width: 100%;
        max-width: 55%;
        .info {
          h3 {
            font-size: 15px;
          }
          p {
            font-size: 13px;
          }
        }
      }
      .about {
        p {
          font-size: 15px;
        }
      }
    }
  }
`;

export default ScheduleCard;
