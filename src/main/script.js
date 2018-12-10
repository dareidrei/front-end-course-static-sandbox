const container = document.getElementById('container')

const boots = [
	{
		label: 'Original',
		color: 'black',
		size: '25',
		sex: 'male',
		img:
      'https://ssl.quiksilver.com/www/store.quiksilver.eu/html/images/catalogs/global/dcshoes-products/all/default/hi-res/adys100435_legacy98slims,p_tyb_frt2.jpg',
	},

	{
		label: 'Air Max',
		color: 'black',
		size: '25',
		sex: 'male',
		img: 'https://images.ua.prom.st/1048665390_w640_h640_5376_78965.jpg',
	},

	{
		label: 'Classic',
		color: 'black',
		size: '25',
		sex: 'male',
		img: 'https://www.basketshop.ru/files/catalog/32438/AJ0877-001(2).JPG',
	},

	{
		label: 'Jordan',
		color: 'blue',
		size: '30',
		sex: 'female',
		img:
      'http://atletika64.ru/wp-content/uploads/2018/08/%D0%9A%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-Nike-Air-Max-Invigor-%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9-1.jpg',
	},

	{
		label: 'Tekno',
		color: 'blue',
		size: '30',
		sex: 'female',
		img:
      'http://elementshop.ru/upload/resize_cache/iblock/afd/700_700_1/afd89936f40f5411878e55ac34b7d3fb.jpeg',
	},

	{
		label: 'Cactus',
		color: 'blue',
		size: '30',
		sex: 'female',
		img:
      'https://img.brandshop.ru/cache/products/z/zhenskie-krossovki-nike-air-max-95-og-white-pure-platinum-white-0_676x676.jpg',
	},

	{
		label: 'Precent',
		color: 'green',
		size: '28',
		sex: 'male',
		img:
      'https://vkrossovki.ru/image/cache/catalog/i/ej/ac/9167eb1d25ac14d6c73ebe1486e8ccdc-900x700.jpg',
	},

	{
		label: 'Huperdrunk',
		color: 'green',
		size: '28',
		sex: 'male',
		img: 'http://www.balenc.ru/pictures/product/big/7469_big.JPG',
	},

	{
		label: 'Flower',
		color: 'green',
		size: '28',
		sex: 'male',
		img:
      'https://krassovki.ru/image/cache/catalog/nike-air-max-97-folder/4/nike-air-max-97-leather-white-photo-1-950x950.jpg',
	},

	{
		label: 'Candy',
		color: 'orange',
		size: '15',
		sex: 'female',
		img:
      'https://xn--80aab6birx.xn--80agbcqdjc3d.xn--p1ai/images/prodacts/sourse/61986/61986109_jenskie-krossovki-nike-air-max-97-ultra17-917704-103.jpg',
	},

	{
		label: 'Huper',
		color: 'orange',
		size: '15',
		sex: 'female',
		img: 'https://images.ru.prom.st/514768436_w640_h640_cid2692398_pid337446742-c032ac6d.jpg',
	},

	{
		label: 'Drunk',
		color: 'orange',
		size: '15',
		sex: 'female',
		img:
      'http://elementshop.ru/upload/resize_cache/iblock/bf2/700_700_1/bf2b9d27c38020f3db527a1fde33a994.jpeg',
	},
]

boots.forEach(function(item) {
	const card = document.createElement('div')
	card.classList.add('card', 'card-narrow', 'standard-border', 'margin', 'text-center')

	const label = document.createElement('div')
	label.classList.add('text-center')
	label.innerHTML = item.label
	card.append(label)

	const image = document.createElement('img')
	image.classList.add('avatar')
	image.src = item.img
	card.append(image)

	const color = document.createElement('div')
	color.classList.add('text-center')
	color.innerHTML = item.color
	card.append(color)

	const size = document.createElement('div')
	size.classList.add('text-center')
	size.innerHTML = item.size
	card.append(size)

	const sex = document.createElement('div')
	sex.classList.add('text-center')
	sex.innerHTML = item.sex
	card.append(sex)

	textColor(item, label)
	textSize(item, label)
	bootsSize(item, label)
	oval(item, card)
	tekno(item, label)
	Huper(item, color)
	Precent(item, card)

	container.append(card)
})

function textColor(item, label) {
	if (item.color == 'black' && item.sex == 'male') {
		label.classList.add('colorRed')
	}
}

function textSize(item, label) {
	if (item.label == 'Jordan' || (item.label == 'Cactus' && item.sex != 'male')) {
		label.classList.add('testText', 'colorBlue')
	}
}

function tekno(item, label) {
	if (item.label == 'Tekno' && item.size >= '30') {
		label.classList.add('testText', 'colorOrange')
	}
}

function bootsSize(item, label) {
	if (item.size <= '15') {
		label.classList.add('testText')
	}
}

function Huper(item, color) {
	if (
		item.size <= '15' &&
    item.color == 'orange' &&
    item.label != 'Candy' &&
    item.label != 'Drunk'
	) {
		color.classList.add('colorOrange')
	}
}

function oval(item, card) {
	const one = document.createElement('div')
	one.innerHTML = one.classList
	card.append(one)

	if (item.label == 'Precent' || item.label == 'Huperdrunk' || item.label == 'Flower') {
		one.classList.add('shedul', 'm-auto')
	}
}

function Precent(item, card) {
	const two = document.createElement('div')
	two.innerHTML = two.classList
	card.append(two)

	if (item.label == 'Precent' && item.size >= '25' && item.size <= '30') {
		two.classList.add('shedulTwo', 'm-auto')
	}
}

// if (qwerty(item)) {
// 	label.classlist.add('test')
// }

// function isEligibleForMilitaryService(item) {
//   return item.sex === 'male' && item.age < 27 && item.orientation !== 'gay'
// }
