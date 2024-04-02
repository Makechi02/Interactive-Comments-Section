/** @type {import("tailwindcss").Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				moderate_blue: "hsl(238, 40%, 52%)",
				soft_red: "hsl(358, 79%, 66%)",
				light_gray_blue: "hsl(239, 57%, 85%)",
				pale_red: "hsl(357, 100%, 86%)",

				dark_blue: "hsl(212, 24%, 26%)",
				gray_blue: "hsl(211, 10%, 45%)",
				light_gray: "hsl(223, 19%, 93%)",
				very_light_gray: "hsl(228, 33%, 97%)"
			}
		}
	},
	plugins: []
};
