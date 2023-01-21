import Header from './components/Header'
import Body from './components/Body'
import { useState, useEffect } from 'react'

function App(){

	const iconSize = 24;
	const [ darkMode, setDarkMode ] = useState(false)
	const [ isLoading, setIsLoading ] = useState(true)
	const [ words, setWords ] = useState([])

	useEffect(() => {
		(async () => {
			await fetchData()
		})()
	}, [])

	const refresh = async () => {
		await fetchData()
	}

	useEffect(() => {
		if(darkMode){
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [darkMode])

	async function fetchData(){
		const url = `https://random-word-api.herokuapp.com/word?number=10`
		let r = await fetch(url)
		r = await r.json()
		r = r.join('0').split('').splice(0,64)
		setWords(r)
		setIsLoading(false)
	}

	return (
		<div className="max-w-[420px] mx-auto flex flex-col px-8 md:px-0">
			<Header darkMode={darkMode} setDarkMode={setDarkMode} refresh={refresh} iconSize={iconSize} setIsLoading={setIsLoading} />
			<Body words={words} isLoading={isLoading} setIsLoading={setIsLoading} iconSize={iconSize}/>
		</div>
	)
}

export default App