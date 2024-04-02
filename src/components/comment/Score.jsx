import plusIcon from "../../assets/images/icon-plus.svg";
import minusIcon from "../../assets/images/icon-minus.svg";

const Score = ({ score = 0, addScore, subtractScore }) => {
	return (
		<div
			className="bg-very_light_gray py-2 rounded-lg flex flex-col gap-4 h-fit min-w-[30px] justify-between items-center">
			<div className="plus cursor-pointer" onClick={addScore}>
				<img src={plusIcon} alt="add-score-icon" />
			</div>
			<div className="text-moderate_blue font-bold">{score}</div>
			<div className="minus cursor-pointer w-full h-[10px] flex items-center justify-center"
				 onClick={subtractScore}>
				<img src={minusIcon} alt="minus-score-icon" />
			</div>
		</div>
	);
};

export default Score;
