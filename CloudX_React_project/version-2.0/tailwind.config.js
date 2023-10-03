/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		container: {
			center: true,
			padding: "1rem", // Adjust the padding as needed
			maxWidth: "1596px", // Set your desired container width
		},
		extend: {
			transform: ["hover", "focus"], // Add this line
			fontSize: {
				xs16: "16px", // Extra Small
				sm18: "18px", // Small
				base20: "20px", // Base
				lg24: "24px", // Large
				xl30: "30px", // Extra Large
				xxl40: "40px", // Extra Large
				xxxl50: "50px", // Extra Large
				xxxl80: "80px", // Extra Large
				xlx100: "100px", // Extra Large
			},
			fontFamily:{
				Inter: "Inter",
				SpaceGratestk: "Space Grotesk",
				WorkSans: "Work Sans",
			},
			colors: {
				white: "#ffffff",
				white60: "#ffffff99",
				white70: "#ffffffb3",
				white80: "#ffffffcc",
				white90: "#ffffffe6",
			},
			screens: {
				xs: "320px",
				sm: "375px",
				sml: "500px",
				md: "667px",
				mdl: "768px",
				lg: "960px",
				lgl: "1024px",
				xl: "1280px",
				xll: "1400px",
				xlll: "1500px",
				xllll: "1600px",
			},
		},
	},
	plugins: [],
};
