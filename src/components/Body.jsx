import Loader from './Loader'
import { random } from 'uniqolor'
import { useRef } from 'react'

function cn(...classes){
	return classes.filter(Boolean).join(' ')
}

function randomColor(){
	return random({
		lightness: 84
	})
}

function Alphabet({ alphabet, left, right, color }){
	return (
		(parseInt(alphabet) !== 0) ?
		<div className={cn("alphabet relative m-auto text-lg w-full h-full flex overflow-hidden mb-2 ", left ? ' rounded-l-xl ' : '' , right ? ' rounded-r-xl ' : '' )} 
			style={{
				background: color.color
			}}
		>
			<p className="m-auto text-[black]">{alphabet}</p>
		</div>
		:
		<p>{' '}</p>
	)
}

function Body({ words, isLoading, setIsLoading, iconSize }){

	let color = useRef(randomColor())
	let c = randomColor()

	return (
		<div className="grid grid-cols-8 gap-y-2 mb-4 min-h-[336px] relative">
			{
				isLoading?
				<Loader iconSize={iconSize} />
				:
				words.map((i, ind) => {
					let left = false, right = false;
					if(ind === 0 || words[ind-1] === '0'){
						left = true
						right = false
					} else if( ind === words.length - 1 || words[ind+1] === '0' ){
						left = false
						right = true
					}

					if(i === '0'){
						color.current = randomColor()
						c = randomColor()
					}

					return <Alphabet 
						key={ind+''} 
						color={c} 
						alphabet={i} 
						left={left} 
						right={right}
					/>
				})
			}
		</div>
	)
}

export default Body