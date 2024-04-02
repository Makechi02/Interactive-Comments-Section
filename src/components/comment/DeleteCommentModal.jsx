const DeleteCommentModal = ({ showModal }) => {
	return (
		<div
			className={`fixed w-full h-screen top-0 left-0 items-center justify-center bg-[#000000aa] ${showModal ? "flex" : "hidden"}`}>
			<div className={`bg-white p-8 rounded-md space-y-4 max-w-sm`}>
				<h2 className={`text-dark_blue font-bold text-lg`}>Delete comment</h2>
				<p className={`text-gray_blue`}>Are you sure you want to delete this comment? This will remove the
					comment and can't be undone.</p>
				<div className={`flex gap-2`}>
					<button className={`flex-1 uppercase bg-gray_blue text-white rounded-md p-2 font-bold`}>no, cancel
					</button>
					<button className={`flex-1 uppercase bg-soft_red text-white rounded-md p-2 font-bold`}>yes, delete
					</button>
				</div>
			</div>
		</div>
	);
};

export default DeleteCommentModal;