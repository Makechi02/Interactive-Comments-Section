import Score from "./comment/Score.jsx";
import DetailsBar from "./comment/DetailsBar.jsx";
import { useState } from "react";

const CommentComponent = ({ data, currentUser = "", toggleModal }) => {
	const [score, setScore] = useState(data.score);

	const addScore = () => {
		setScore(prev => prev + 1);
	};

	const subtractScore = () => {
		setScore(prev => prev > 0 ? prev - 1 : 0);
	};

	return (
		<div className={`bg-white rounded-lg p-4`}>
			<div className="comment-content flex gap-4">
				<Score score={score} addScore={addScore} subtractScore={subtractScore} />
				<div>
					<DetailsBar user={data.user} createdAt={data.createdAt} currentUser={currentUser}
								toggleModal={toggleModal} />
					<div className="text-gray_blue">
						<p>
							{data.replyingTo &&
								<span className={`text-moderate_blue font-bold`}>
									@{data.replyingTo}{" "}
								</span>
							}
							{data.content}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CommentComponent;