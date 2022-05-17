import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

const mainTL = gsap.timeline();

function setStage(){
    let tl= gsap.timeline();

    tl.set("#coffeebottom",{y:"-=1075", alpha:0})
  
    ;

return tl;


}

function showCoffee(){
    let tl= gsap.timeline();

    tl.to("#coffeebottom",{duration:1, y:"+=1075", alpha:1, ease:"back.out"})

    ;

return tl;


}

mainTL.add(setStage()) 
.add(showCoffee())


;



GSDevTools.create();