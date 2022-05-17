import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

const mainTL = gsap.timeline();

function setStage(){
    let tl= gsap.timeline();

    tl.set("#coffee",{x:"-=1075", alpha:0})
  
    ;

return tl;


}

function showCoffee(){
    let tl= gsap.timeline();

    tl.to("#coffee",{duration:1, x:"+=1075", alpha:1, ease:"back.out"})

    ;

return tl;


}

mainTL.add(setStage()) 
.add(showCoffee())


;



GSDevTools.create();