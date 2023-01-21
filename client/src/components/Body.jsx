import Loader from './Loader'

function Alphabet({ alphabet }){
	return (
		<p className="m-auto text-lg">
			{
				(parseInt(alphabet) !== 0) ?
				alphabet
				:
				' '
			}
		</p>
	)
}

function Body({ words, isLoading, setIsLoading, iconSize }){
	return (
		<div className="grid grid-cols-8 gap-4 min-h-[336px] relative">
			{
				isLoading?
				<Loader iconSize={iconSize} />
				: null
			}
			{
				words.map((i, ind) => <Alphabet key={ind+''} alphabet={i} />)
			}
		</div>
	)
}

export default Body