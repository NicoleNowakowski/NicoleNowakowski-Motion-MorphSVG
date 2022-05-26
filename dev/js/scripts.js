import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

const mainTL = gsap.timeline();
let hearts = gsap.utils.toArray(".heart");

gsap.set(hearts, {
    autoAlpha: 0,
    y: "+=15",
    scale: 0.6,
    transformOrigin: "center bottom"
});
let PERC = {
    num: 0
};
let PERC_num = document.querySelector("#percentage tspan");

function setStage() {
    let tl = gsap.timeline();

    tl.set("#coffeebottom", {
            y: "+=155",
            alpha: 0.99
        })
        .set("#coffeetop", {
            y: "+=155",
            alpha: 1
        })
        .set("#number", {
            y: "+=95",
            alpha: 1
        });

    return tl;
}

function showCoffee() {
    let tl = gsap.timeline({
        onStart: moveSteam
    });

    tl.to(
            "#coffeebottom", {
                duration: 5,
                y: "-=155",
                alpha: 1,
                ease: "sine.out"
            },
            "coffee"
        )
        .to(
            "#coffeetop", {
                duration: 5,
                y: "-=155",
                alpha: 1,
                ease: "sine.out"
            },
            "coffee"
        )
        .to(
            PERC, {
                duration: 5,
                num: "+=100",
                roundProps: "num",
                onUpdate: percentHandler,
                ease: "sine.out"
            },
            "coffee"
        )
        .to(
            "#number", {
                duration: 5,
                y: "-=140",
                ease: "sine.out",
                alpha: 1
            },
            "coffee"
        );

    return tl;
}

function percentHandler() {
    //console.log("percentHandler ran");
    PERC_num.textContent = PERC.num;
}

function moveSteam() {
    let dur = 5;
    let hearts = gsap.utils.toArray(".heart");
    hearts.forEach((heart, i) => {
        gsap
            .timeline({
                repeat: -1,
                delay: i * 0.5
            })
            .to(heart, {
                duration: dur * 0.35,
                autoAlpha: 1,
                repeat: 1,
                yoyo: true,
                repeatDelay: dur * 0.2,
                ease: "none"
            })
            .to(
                heart,

                {
                    duration: dur,
                    y: "-=50",
                    ease: "none",
                    scale: 1
                },
                0
            );
    });
  
}

mainTL.add(setStage()).add(showCoffee());




//GSDevTools.create();