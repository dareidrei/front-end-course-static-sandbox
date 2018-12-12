const container = document.getElementById('container')
const MALE = 'male'
const FEMALE = 'female'
const BLACK = 'black'
const BLUE = 'blue'
const GREEN = 'green'
const ORANGE = 'orange'

const boots = [
	{
		label: 'Original',
		color: BLACK,
		size: 25,
		sex: MALE,
		img:
      'https://ssl.quiksilver.com/www/store.quiksilver.eu/html/images/catalogs/global/dcshoes-products/all/default/hi-res/adys100435_legacy98slims,p_tyb_frt2.jpg',
	},

	{
		label: 'Air Max',
		color: BLACK,
		size: 25,
		sex: MALE,
		img: 'https://images.ua.prom.st/1048665390_w640_h640_5376_78965.jpg',
	},

	{
		label: 'Classic',
		color: BLACK,
		size: 25,
		sex: MALE,
		img: 'https://www.basketshop.ru/files/catalog/32438/AJ0877-001(2).JPG',
	},

	{
		label: 'Jordan',
		color: BLUE,
		size: 30,
		sex: FEMALE,
		img:
      'http://atletika64.ru/wp-content/uploads/2018/08/%D0%9A%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-Nike-Air-Max-Invigor-%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9-1.jpg',
	},

	{
		label: 'Tekno',
		color: BLUE,
		size: 30,
		sex: FEMALE,
		img:
      'http://elementshop.ru/upload/resize_cache/iblock/afd/700_700_1/afd89936f40f5411878e55ac34b7d3fb.jpeg',
	},

	{
		label: 'Cactus',
		color: BLUE,
		size: 30,
		sex: FEMALE,
		img:
      'https://img.brandshop.ru/cache/products/z/zhenskie-krossovki-nike-air-max-95-og-white-pure-platinum-white-0_676x676.jpg',
	},

	{
		label: 'Precent',
		color: GREEN,
		size: 28,
		sex: MALE,
		img:
      'https://vkrossovki.ru/image/cache/catalog/i/ej/ac/9167eb1d25ac14d6c73ebe1486e8ccdc-900x700.jpg',
	},

	{
		label: 'Huperdrunk',
		color: GREEN,
		size: 28,
		sex: MALE,
		img: 'http://www.balenc.ru/pictures/product/big/7469_big.JPG',
	},

	{
		label: 'Flower',
		color: GREEN,
		size: 28,
		sex: MALE,
		img:
      'https://krassovki.ru/image/cache/catalog/nike-air-max-97-folder/4/nike-air-max-97-leather-white-photo-1-950x950.jpg',
	},

	{
		label: 'Candy',
		color: ORANGE,
		size: 15,
		sex: FEMALE,
		img:
      'https://xn--80aab6birx.xn--80agbcqdjc3d.xn--p1ai/images/prodacts/sourse/61986/61986109_jenskie-krossovki-nike-air-max-97-ultra17-917704-103.jpg',
	},

	{
		label: 'Huper',
		color: ORANGE,
		size: 15,
		sex: FEMALE,
		img: 'https://images.ru.prom.st/514768436_w640_h640_cid2692398_pid337446742-c032ac6d.jpg',
	},

	{
		label: 'Drunk',
		color: ORANGE,
		size: 15,
		sex: FEMALE,
		img:
      'http://elementshop.ru/upload/resize_cache/iblock/bf2/700_700_1/bf2b9d27c38020f3db527a1fde33a994.jpeg',
	},
]

boots.forEach(function(item) {
	const card = document.createElement('div')
	card.classList.add('card', 'card-narrow', 'standard-border', 'margin', 'text-center')

	const label = createField(item.label)
	card.append(label)

	const image = document.createElement('img')
	image.classList.add('avatar')
	image.src = item.img
	card.append(image)

	const color = createField(item.color)
	card.append(color)

	const size = createField(item.size)
	card.append(size)

	const sex = createField(item.sex)
	card.append(sex)

	if (isHuper(item)) {
		color.classList.add('colorOrange')
	}
	if (isTextColor(item)) {
		label.classList.add('colorRed')
	}

	if (isTextSize(item)) {
		label.classList.add('testText', 'colorBlue')
	}

	if (isTekno(item)) {
		label.classList.add('testText', 'colorOrange')
	}

	if (isBootsSize(item)) {
		label.classList.add('testText')
	}

	if (isOval(item)) {
		const one = document.createElement('div')
		one.innerHTML = one.classList
		card.append(one)
		one.classList.add('shedul', 'm-auto')
	}

	if (isPrecent(item)) {
		const two = document.createElement('div')
		two.innerHTML = two.classList
		card.append(two)
		two.classList.add('shedulTwo', 'm-auto')
	}

	container.append(card)
})

function createField(text) {
	const field = document.createElement('div')
	field.classList.add('text-center')
	field.innerHTML = text

	return field
}

function isHuper(item) {
	return (
		item.size <= 15 && item.color === ORANGE && item.label !== 'Candy' && item.label !== 'Drunk'
	)
}

function isTextColor(item) {
	return item.color === BLACK && item.sex === MALE
}

function isTextSize(item) {
	return item.label === 'Jordan' || (item.label === 'Cactus' && item.sex !== MALE)
}

function isTekno(item) {
	return item.label === 'Tekno' && item.size >= 30
}

function isBootsSize(item) {
	return item.size <= 15
}

function isOval(item) {
	return item.label === 'Precent' || item.label === 'Huperdrunk' || item.label === 'Flower'
}

function isPrecent(item) {
	return item.label === 'Precent' && item.size >= 25 && item.size <= 30
}
