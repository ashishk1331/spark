import { Sun, Moon, ArrowsClockwise, Sparkle } from 'phosphor-react'

function Header({ darkMode, setDarkMode, refresh, iconSize, setIsLoading }){

	function handleClick(){
		(async () => {
			setIsLoading(true)
			await refresh()
		})()
	}

	function debounce(fn, ms){
		let timerID;
		return function(){
			if(timerID) { clearTimeout(timerID) }
			timerID = setTimeout(fn, ms)
		}
	}

	return (
		<header className="flex items-center w-full py-12">

			<Sparkle weight="fill" size={iconSize} />

			<h1 className="text-lg ml-4"> spark </h1>

			<button
				className="mx-8 ml-auto"
				onClick={() => {
					setDarkMode(!darkMode)
				}}
			>
				{
					darkMode?
					<Sun weight="fill" size={iconSize} />
					:
					<Moon weight="fill" size={iconSize} />
				}
			</button>

			<button
				onClick={ debounce(handleClick, 500) }
			>
				<ArrowsClockwise size={iconSize} />
			</button>

		</header>
	)
}

export default Header