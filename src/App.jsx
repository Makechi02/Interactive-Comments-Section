import { Attribution, Comments } from "./components";
import AddComment from "./components/AddComment.jsx";

function App() {
	return (
		<main className={`px-[10%] bg-very_light_gray py-8 flex flex-col items-center`}>
			<div>
				<Comments />
				<AddComment />
			</div>
			<Attribution />
		</main>
	);
}

export default App;
