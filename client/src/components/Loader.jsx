import { CircleNotch } from 'phosphor-react'

function Loader({ iconSize }){
	return (
		<div className="absolute w-full h-full bg-[white] flex items-center dark:bg-gray-900 dark:text-white">
			<CircleNotch weight="bold" size={iconSize} className="animate-spin m-auto" />
		</div>
	)
}

export default Loader