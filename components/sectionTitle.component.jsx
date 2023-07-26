export default function SectionTitle({ children }) {
	return (
		<h2 className='font-bold text-mainTextColor text-center text-2xl px-5 mb-6 md:text-left md:text-3xl md:px-0 md:mt-5'>
			{children}
		</h2>
	);
}
