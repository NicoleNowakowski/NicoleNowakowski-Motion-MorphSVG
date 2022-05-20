import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

const mainTL = gsap.timeline();

let PERC = {num:0};
let PERC_num = document.querySelector("#percentage tspan");


function setStage(){
    let tl= gsap.timeline();

    tl.set("#coffeebottom",{y:"+=155", alpha:1})
    .set("#coffeetop",{y:"+=155", alpha:1})
    .set("#number",{y:"+=95", alpha:1})
   
    ;

return tl;


}

function showCoffee(){
    let tl= gsap.timeline({onStart:moveSteam});

    tl.to("#coffeebottom",{duration:5, y:"-=155", alpha:1, ease: "sine.out" }, "coffee")
        .to("#coffeetop",{duration:5, y:"-=155", alpha:1, ease: "sine.out"}, "coffee")
        .to(PERC,{ duration:5, num:"+=100", roundProps:"num", onUpdate:percentHandler, ease:"sine.out" }, "coffee")
        .to("#number",{ duration:5, y:"-=140", ease:"sine.out", alpha:1}, "coffee")
    ;

return tl;
}


function percentHandler(){

    //console.log("percentHandler ran");
    PERC_num.textContent = PERC.num;
}

function moveSteam(){
gsap.fromTo(".heart",{alpha:0, y:"+=50"}, { duration:4 ,y:"-=50", stagger:0.5, repeat:-1, ease:"back.inOut", alpha:1})

}

mainTL.add(setStage()) 
.add(showCoffee())

;




//GSDevTools.create();