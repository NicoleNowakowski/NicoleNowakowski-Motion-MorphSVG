import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";


gsap.registerPlugin(GSDevTools, DrawSVGPlugin, MorphSVGPlugin)

const mainTL = gsap.timeline({id:"mainTL"});

mainTL