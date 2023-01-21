import { Sun, Moon, ArrowsClockwise } from 'phosphor-react'

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
		<header className="flex items-center w-full py-8">
			<h1 className="uppercase tracking-wider text-2xl mr-auto">
				spark
			</h1>

			<button
				className="mx-8"
				onClick={() => {
					setDarkMode(!darkMode)
				}}
			>
				{
					darkMode?
					<Moon weight="fill" size={iconSize} />
					:
					<Sun weight="fill" size={iconSize} />
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