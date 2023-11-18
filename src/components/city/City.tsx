import { FC, useState } from 'react'
import '../../App.css'
/* (event: React.ChangeEvent<HTMLInputElement>) */
const City: FC = () => {
	const [PlayerOne, setPlayerOne] = useState('')
	const [PlayerTwo, setPlayerTwo] = useState('')
	const [lastLetter, setLastLetter] = useState('')

	const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault()
		const city = e.target.city.value.trim()
		const lastChar = city.slice(-1).toLowerCase()

		if (lastChar !== '' && lastChar !== 'ь' && lastChar !== 'ъ') {
			if (lastLetter === '') {
				setPlayerOne(city)
				setLastLetter(lastChar)
			} else {
				setPlayerTwo(city)
				setLastLetter(lastChar)
			}
		} else {
			alert(
				'Введите город, начинающийся на нужную букву! ИЛИ выберите город без твердого и мягкого знака'
			)
		}

		e.target.reset()
	}

	return (
		<div className='App'>
			<h1 className='font-sans mt-6 font-black  leading-5  ml-4 w-full'>
				Сейчас ваша очередь
			</h1>
			<hr className='h-0.5 w-full my-8 bg-gray-200 border-0 dark:bg-gray-700' />
			<form className='cityWindow' onSubmit={handleSubmit}>
				<div className='mb-20	'>
					<p className='flex justify-start bg-violet-50 text-white'>
						{PlayerOne}
					</p>

					<p className='flex justify-end bg-violet-600 text-white 	'>
						{' '}
						{PlayerTwo}
					</p>
				</div>

				<p>Последняя буква: {lastLetter || '—'}</p>

				<div className='flex flex-nowrap'>
					<input
						className=' w-full'
						type='text'
						name='city'
						placeholder='Напишите любой город, например: Где вы живете?'
					/>
					<button
						type='submit'
						className='bg-blue-500 hover:bg-blue-700 text-white font-bold  px-4 borderrounded '
					>
						Отправить
					</button>
				</div>
			</form>
		</div>
	)
}

export default City
