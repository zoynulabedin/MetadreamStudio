

// eslint-disable-next-line react/prop-types
const BulletButton = ({ onClick, active }) => {
	return (
		<button
			onClick={onClick}
			className={`w-3 h-3 mx-2 rounded-full transition-all duration-300 ${
				active ? "bg-blue-500" : "bg-gray-300"
			}`}></button>
	);
};

export default BulletButton;
