import CommentComponent from "../CommentComponent.jsx";

const Replies = ({ replies, currentUser }) => {
	return (
		<div className="flex flex-col gap-4 border-l-2 pl-8">
			{replies.map((reply) => (
				<div key={reply.id}>
					<CommentComponent data={reply} currentUser={currentUser} />
				</div>
			))}
		</div>
	);
};

export default Replies;