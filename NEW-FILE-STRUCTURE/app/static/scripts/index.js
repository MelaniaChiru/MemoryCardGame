import { flipTile } from './_level.js';

/**
 * Only call filpTile() function if active page is a specific level page
 * /levels/2 -- calls function
 * /home -- doesn't call function 
 * /levels/ -- doesn't call function  
 */
if (/^\/levels\/\d+$/.test(window.location.pathname)) {
	flipTile();
}
