export default function HeaderListItem({ children }) {
	return (
		<li className='rounded-[50%] shadow-3xl flex justify-center items-center md:p-3'>
			{children}
		</li>
	);
}
