import { FC } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
const Main: FC = () => {
	return (
		<div className='App'>
			<h1 className='font-sans mt-6 font-black  leading-5  ml-4'>
				Игра в города на время
			</h1>
			<hr className='h-0.5 w-full my-8 bg-gray-200 border-0 dark:bg-gray-700' />
			<p className='font-sans text-sm  not-italic	font-normal	 leading-5 w-full ml-4	'>
				Цель: Назвать как можно больше реальных городов.
			</p>
			<ul className='list-disc font-sans text-sm not-italic	leading-5 my-6 w-11/12'>
				<li>Запрещается повторение городов.</li>
				<li>
					Названий городов на твердый “ъ” и мягкий “ъ” знак нет. Из-за этого бы
					пропускаем эту букву и игрок должен назвать город на букву стоящую
					перед ъ или ь знаком.
				</li>
				<li>
					Каждому игроку дается 2 минуты на размышления, если спустя это время
					игрок не вводит слово он считается проигравшим
				</li>
			</ul>
			<Link to={'/city'}>
				<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mb-6'>
					Начать игру
				</button>
			</Link>
		</div>
	)
}

export default Main
