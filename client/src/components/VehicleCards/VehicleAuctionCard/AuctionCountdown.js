import React from "react";
import Countdown from "react-countdown";
import PropTypes from "prop-types";
import MKBadge from "components/MKBadge";

// Random component
const Completionist = () =>
  <MKBadge badgeContent="Completed" color="success" container />;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  }
  const time = <>{hours}:{minutes}:{seconds}</>
  let color;
  if(hours * 1 === 0 && minutes * 1 === 0)
    color = 'error';
  else color = 'light';

    // Render a countdown
    return (
      <MKBadge badgeContent={time} color={color} container />
    );

};

function AuctionCountdown({timeEnd}){
  return <Countdown date={timeEnd} renderer={renderer} />;
}

AuctionCountdown.propTypes = {
  timeEnd: PropTypes.instanceOf(Date).isRequired
};

export default AuctionCountdown;