const clickBtn = document.getElementById('click-btn')
const resetBtn = document.getElementById('reset-btn')
const increaseStepBtn = document.getElementById('increaseStep-btn')
const increaseMaxBtn = document.getElementById('increaseMax-btn')
const clickValue = document.getElementById('click-value')
const maxValue = document.getElementById('max-value')
const LeftValue = document.getElementById('left-value')
const clickStep = document.getElementById('click-step')

const TWENTY = 20

let clicks = 0
let step = 1
let maxNumber = TWENTY
maxValue.innerHTML = maxNumber
LeftValue.innerHTML = maxNumber - clicks

clickBtn.onclick = function() {
	if (clicks < maxNumber) {
		clicks = clicks + step
	} else {
		maxValue.innerHTML = 'max value reached'
	}

	clickValue.innerHTML = clicks

	LeftValue.innerHTML = maxNumber - clicks
}

resetBtn.onclick = function() {
	clicks = 0
	clickValue.innerHTML = clicks
	maxValue.innerHTML = TWENTY
	clickStep.innerHTML = 1
	LeftValue.innerHTML = TWENTY
}

increaseStepBtn.onclick = function() {
	step = step + 1

	clickStep.innerHTML = step
}

increaseMaxBtn.onclick = function() {
	maxNumber = maxNumber + 1

	maxValue.innerHTML = maxNumber
}
