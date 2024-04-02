import replyIcon from "../../assets/images/icon-reply.svg";
import deleteIcon from "../../assets/images/icon-delete.svg";
import { useEffect } from "react";

const DetailsBar = ({ user, createdAt, currentUser, toggleModal }) => {
	const isCurrentUser = currentUser === user.username;

	useEffect(() => {
		if (!isCurrentUser) {
			console.log(toggleModal);
		}
	}, []);

	return (
		<div className="flex items-center gap-4 mb-4">
			<img src={user.image.png} alt={user.username} className={`h-[30px] aspect-square`} />
			<div className={`flex gap-2 items-center`}>
				<h2 className="text-dark_blue font-bold">{user.username}</h2>
				{isCurrentUser && <p className={`text-white bg-moderate_blue px-2`}>you</p>}
			</div>
			<p className="text-gray_blue">{createdAt}</p>
			<div className="ml-auto flex gap-4 items-center">
				{isCurrentUser && <DeleteAction toggleModal={toggleModal} />}
				<ReplyAction />
			</div>
		</div>
	);
};

const DeleteAction = ({ toggleModal }) => {

	const togglefModal = () => {
		console.log(toggleModal);
	};

	return (
		<div className="reply flex items-center gap-2 cursor-pointer" onClick={togglefModal}>
			<img src={deleteIcon} alt="delete-icon" />
			<button className={`font-bold text-soft_red`}>Delete</button>
		</div>
	);
};

const ReplyAction = () => {
	return (
		<div className="reply flex items-center gap-2 cursor-pointer">
			<img src={replyIcon} alt="reply-icon" />
			<button className={`font-bold text-moderate_blue`}>Reply</button>
		</div>
	);
};

export default DetailsBar;
