import { useState } from "react";
import CommentComponent from "./CommentComponent.jsx";

import data from "./../data/data.json";
import Replies from "./comment/Replies.jsx";
import DeleteCommentModal from "./comment/DeleteCommentModal.jsx";

const Comments = () => {
	const [comments] = useState(data.comments);
	const currentUser = data.currentUser;

	const [showModal, setShowModal] = useState(false);
	const toggleModal = () => {
		setShowModal(prevState => !prevState);
	};

	return (
		<div className="my-4">
			{comments.map((comment) => (
				<div key={comment.id} className={`max-w-[700px] flex flex-col gap-4`}>
					<CommentComponent data={comment} toggleModal={toggleModal} />
					<div className={`pl-8`}>
						{comment.replies && <Replies replies={comment.replies} currentUser={currentUser.username} />}
					</div>
				</div>
			))}
			<DeleteCommentModal showModal={showModal} />
		</div>
	);
};

export default Comments;
