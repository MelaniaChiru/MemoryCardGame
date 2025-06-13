// rules container
let rules = document.querySelector('.homepage__rules');
// Elements of homepage that need to be blurred / un-blurred 
// Depending on if the rules are shown or not
let headings = document.querySelector('.homepage__headings');
let buttons = document.querySelector('.homepage__buttons');
let footer = document.querySelector('footer');

/**
 * Displays the rules pop-up
 * and applies a blur effect to the rest of the homepage.
 */
export function displayRulesPopUp(){
	let rulesButton = document.getElementById('rules-btn');
	rulesButton.addEventListener('click', ()=>{
		// Display rules
		rules.classList.remove('hidden');

		// Blur everything else
		headings.classList.add('blurred');
		buttons.classList.add('blurred');
		footer.classList.add('blurred'); 
	});
}


/**
 * Hides the rules pop-up
 * and removes the blur effect of the rest of the homepage.
 */
export function hideRulesPopUp(){
	let closeButton = document.querySelector('.homepage__rules .rules__header img');
	closeButton.addEventListener('click', ()=>{
		//hide rules
		rules.classList.add('hidden');

		// Un-blur everything else
		headings.classList.remove('blurred');
		buttons.classList.remove('blurred');
		footer.classList.remove('blurred'); 
	});
}