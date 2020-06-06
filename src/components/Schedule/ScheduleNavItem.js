/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const ScheduleNavItem = ({ itemName, itemDate, day, setDay }) => {
  return (
    <div
      style={{
        background: day === itemName ? "#5d5e8d" : "",
        color: day === itemName ? "#fff" : "",
      }}
      onClick={() => setDay(itemName)}
      css={styles}
      className="navItem"
    >
      <p>{itemName}</p>
      <span>{itemDate}</span>
    </div>
  );
};
const styles = css`
  width: 100%;
  max-width: 170px;
  background: #1f2371;
  color: #9293bc;
  text-align: center;
  padding: 14px 20px;
  margin: 70px 0 20px 0;
  font-weight: 600;
  cursor: pointer;
  transition: background 500ms ease-in-out;
  span {
    font-size: 14px;
    margin: 8px 0 0 0;
    display: block;
  }
  &:first-of-type {
    border-radius: 14px 0 0 14px;
  }
  &:nth-child(2) {
    border-left: 1px solid #4c4f8d;
    border-right: 1px solid #4c4f8d;
  }
  &:last-of-type {
    border-radius: 0 14px 14px 0;
  }
  @media (max-width: 970px) {
    margin: 10px 0;
    max-width: 608px;
    &:first-of-type,
    &:nth-child(2),
    &:last-of-type {
      border-radius: 0px;
      border-left: none;
      border-right: none;
    }
  }
  @media (min-width: 971px) and (max-width: 1168px) {
    max-width: 33%;
  }
`;

export default ScheduleNavItem;
