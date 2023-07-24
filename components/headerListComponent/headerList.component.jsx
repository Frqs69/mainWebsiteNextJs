import { Icon } from "@iconify/react";
import HeaderListItem from "../headerListItemComponent/headerListItem.component";

export default function HeaderList() {
	return (
		<ul className='mt-10 mb-40 inline-grid grid-cols-3 gap-5 md:flex md:mt-0 md:mb-0 md:ml-10 md:gap-7'>
			<HeaderListItem>
				<Icon
					icon='vscode-icons:file-type-html'
					className='m-4 md:m-0'
					width='30'
				/>
			</HeaderListItem>
			<HeaderListItem>
				<Icon icon='vscode-icons:file-type-css' width='30' />
			</HeaderListItem>
			<HeaderListItem>
				<Icon
					icon='vscode-icons:file-type-js-official'
					className='m-4 md:m-0'
					width='30'
				/>
			</HeaderListItem>
			<HeaderListItem>
				<Icon icon='devicon:react' className='m-4 md:m-0' width='30' />
			</HeaderListItem>
			<HeaderListItem>
				<Icon icon='logos:tailwindcss-icon' width='30' />
			</HeaderListItem>
			<HeaderListItem>
				<Icon icon='logos:sass' width='30' />
			</HeaderListItem>
			<HeaderListItem>
				<Icon icon='skill-icons:photoshop' className='m-4 md:m-0' width='30' />
			</HeaderListItem>
		</ul>
	);
}
