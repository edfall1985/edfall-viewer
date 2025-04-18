import { skillFunctionality } from "./skills.js";
import { topNav } from "./topnav.js";
import { animation } from "./animation.js";


topNav();
skillFunctionality();
animation();


const copyright = `&copy Education For All - ${new Date().getFullYear()} <br> All rights reserved.`;
document.querySelector('footer p').innerHTML = copyright;

