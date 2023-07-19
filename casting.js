"use strict";
var casting;
(function (casting) {
    let idade = 28;
    //toFixed é aapenas para numero
    //como nesse caso não sabemos o que a idade é usaremos o >>>> as <<<<
    idade.toFixed();
    idade.length;
    idade.forEach(x => {
        console.log(x);
    });
    let nome = 35;
})(casting || (casting = {}));
