import './SecondSection.css'

import mainWall from '../../images/main_background_2.png'
import dogBlueBlur from '../../images/dog_blue_blur.png'
import blueGlow from '../../images/allody_blue_glow.png'
import doggoBox from '../../images/doggoBox.png'
import doggo from '../../images/doggo.png'
import lootList from '../../data/data.js'

function SecondSection() {

	function handleClickBtn() {
		alert('Типа открылся попап с формой для заказа')
	}

	return (
		<section className="second-section">
			<img className='second-section__main-background' src={mainWall} alt="" />
			<img className='second-section__lower-blue-blur' src={blueGlow} alt="" />

			<div className='second-section__dog-container'>
				<img className='second-section__dog-blue-blur' src={dogBlueBlur} alt="голубой фон для пса" />
				<img className='second-section__doggo' src={doggo} alt="пес для голубого фона" />
			</div>


			<div className='second-section__info'>

				<h2 className='second-section__title'>НАБОР «ПОСЫЛКА С КОНТРАБАНДОЙ»</h2>

				<div className='second-section__hint'>
					<p className='second-section__hint-info'>Бесплатные сервера</p>
					<p className='second-section__hint-info'>Подписочный сервер</p>
				</div>

				<ul className='second-section__list'>
					{
						lootList.map((item) => {
							return (
								<li className='second-section__item' key={item.title}>
									<img className='second-section__item-image' src={item.image} alt="" />
									<h3 className='second-section__item-title'>{item.title}</h3>
									<p className='second-section__item-subtitle'>{item.freeServer}</p>
									<p className='second-section__item-subtitle'>{item.subServer}</p>
								</li>
							)
						})
					}
				</ul>

				<div className='second-section__buy-container'>

					<img className='second-section__doggo-image' src={doggoBox} alt="" />

					<div className='second-section__btn-wrapper'>
						<h3 className='second-section__price'>
							399 ₽
						</h3>
						<button className='second-section__order-btn' type='button' onClick={handleClickBtn}>
							ПРИОБРЕСТИ
						</button>
					</div>
				</div>

			</div>




		</section>
	)
}

export default SecondSection
