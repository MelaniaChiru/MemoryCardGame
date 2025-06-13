/**
 * Displays the rules pop-up
 * and applies a blur effect to the rest of the homepage.
 */
export function displayRulesPopUp(){
	let rulesButton = document.getElementById('rules-btn');
	rulesButton.addEventListener('click', ()=>{
		// Display rules
		let rules = document.querySelector('.homepage__rules');
		rules.classList.remove('hidden');

		// Blur everything else
		let headings = document.querySelector('.homepage__headings');
		let buttons = document.querySelector('.homepage__buttons');
		let footer = document.querySelector('footer');
		headings.classList.add('blurred');
		buttons.classList.add('blurred');
		footer.classList.add('blurred'); 
	});
}
