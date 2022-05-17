import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

const mainTL = gsap.timeline();

let PERC = {num:0};
let PERC_num = document.querySelector("#percentage tspan");


function setStage(){
    let tl= gsap.timeline();

    tl.set("#coffeebottom",{y:"+=200", alpha:1})
    .set("#coffeetop",{y:"+=200", alpha:1})
    .set("#number",{y:"+=95", alpha:1})
    ;

return tl;


}

function showCoffee(){
    let tl= gsap.timeline();

    tl.to("#coffeebottom",{duration:5, y:"-=200", alpha:1}, "coffee")
        .to("#coffeetop",{duration:5, y:"-=200", alpha:1}, "coffee")
        .to(PERC,{delay:0.5, duration:5, num:"+=100", roundProps:"num", onUpdate:percentHandler, ease:"expo.out"}, "coffee")
        .to("#number",{duration:5, y:"-=140", delay:0.5, alpha:1}, "coffee")

    
    ;

return tl;
}

//function countUpNumbers(){
  //  let tl = gsap.timeline();

 //   tl.to(PERC,{duration:5, num:"+=100", roundProps:"num", onUpdate:percentHandler, ease:"expo.out"}, "coffee");

  //  return tl;
//}

function percentHandler(){

    //console.log("percentHandler ran");
    PERC_num.textContent = PERC.num;
}

mainTL.add(setStage()) 
.add(showCoffee())
//.add(countUpNumbers())

;



GSDevTools.create();