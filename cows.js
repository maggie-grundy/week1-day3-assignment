"use strict";

import cowsay from "cowsay";

export function cows() {
   return cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
});
}
