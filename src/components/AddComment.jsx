import data from "../data/data.json";

const AddComment = () => {
	return (
		<form className={`bg-white mb-4 max-w-[700px] flex gap-2 p-4 rounded-lg items-start`}>
			<div>
				<img src={data.currentUser.image.webp} alt={`${data.currentUser.username} photo`}
					 className={`h-[35px] aspect-square`} />
			</div>
			<textarea placeholder={`Add a comment...`}
					  className={`w-full border min-h-[100px] px-4 py-2 rounded-lg text-gray_blue`} />
			<button className={`bg-moderate_blue font-bold text-white px-4 py-2 rounded-lg uppercase`}>send
			</button>
		</form>
	);
};

export default AddComment;