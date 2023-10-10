import './FirstSection.css'

import mainBackground from '../../images/main_background_1.png'
import mainBlueGlow from '../../images/allody_main_blue_glow.png'
import logo from '../../images/allody_logo.png'
import boxes from '../../images/allody_boxes.png'
import blueGlow from '../../images/allody_blue_glow.png'
import layerBottom from '../../images/layer_bottom.png'
import layerRight from '../../images/layer_right.png'
import layerLeft from '../../images/layer_left.png'
import skinLeft from '../../images/skin_left.png'
import skinRight from '../../images/skin_right.png'

function FirstSection() {
	return (
		<section className="first-section">

			<img className='first-section__main-background' src={mainBackground} alt="фон" />
			<img className='first-section__main-blur' src={mainBlueGlow} alt="" />
			<img className='first-section__lower-blue-blur' src={blueGlow} alt="" />
			<img className='first-section__bottom-blur' src={layerBottom} alt="" />
			<img className='first-section__left-blur' src={layerLeft} alt="" />
			<img className='first-section__right-blur' src={layerRight} alt="" />
			<img className='first-section__skin-right' src={skinRight} alt="" />
			<img className='first-section__skin-left' src={skinLeft} alt="" />

			<div className="first-section__preview-content">
				<img className='first-section__logo' src={logo} alt="логотип" />
				<img className='first-section__boxes' src={boxes} alt="продукт" />
				<h1 className='first-section__title'>КОЛЛЕКЦИОННЫЕ ИЗДАНИЯ</h1>
				<p className='first-section__subtitle'>Побеждайте легко, побеждайте стильно с новыми коллекционными изданиями «Аллодов Онлайн»!</p>
			</div>

		</section >
	)
}

export default FirstSection;
