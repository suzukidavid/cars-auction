import PropTypes from "prop-types";
import VehicleCard from "../VehicleCard";
import AuctionCountdown from "./AuctionCountdown";

function VehicleAuctionCard({ image, title, timeData, topBidPrice, allBidCount, vehicleInfo, action }){
	const { timeStart, timeDuration } = timeData;
	const timeEnd = timeStart + timeDuration;

	const description = <AuctionCountdown timeEnd={timeEnd}/>;
	return (
		<VehicleCard image={image} title={title} description={description} timeData={timeData} vehicleInfo={vehicleInfo} action={action} />
	);
}

VehicleAuctionCard.defaultProps = {
	allBidCount: 0,
	topBidPrice: 0
};

VehicleAuctionCard.propTypes = {
	image: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	vehicleInfo: PropTypes.shape({
		miles: PropTypes.number,
		fuel: PropTypes.string,
		transmission: PropTypes.oneOf(["Manual", "Automatic"]),
	}).isRequired,
	timeData: PropTypes.shape({
		timeStart: PropTypes.instanceOf(Date),
		timeDuration: PropTypes.number
	}),
	topBidPrice: PropTypes.number,
	allBidCount: PropTypes.number,
	action: PropTypes.shape({
		type: PropTypes.oneOf(["external", "internal"]).isRequired,
		route: PropTypes.string.isRequired,
		color: PropTypes.oneOf([
			"primary",
			"secondary",
			"info",
			"success",
			"warning",
			"error",
			"dark",
			"light",
		]),
		label: PropTypes.string.isRequired,
	}).isRequired,
};

export default VehicleAuctionCard;