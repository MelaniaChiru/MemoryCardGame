import { flipTile } from './_level.js';
import {displayRulesPopUp} from './_homepage.js'

/**
 * Only call filpTile() function if active page is a specific level page
 * /levels/2 -- calls function
 * /home -- doesn't call function 
 * /levels/ -- doesn't call function  
 */
if (/^\/levels\/\d+$/.test(window.location.pathname)) {
	flipTile();
}

if (window.location.pathname === ("/") || window.location.pathname === ("/home")) {
	displayRulesPopUp();
}
