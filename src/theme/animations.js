export const welcomeAni = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const popContentAnimation = {
  initial: { y: -30, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

export const errorAnimation = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0 },
};

export const scoreBoardAnimation = {
  initial: { x: "-120%", rotate: -20 },
  animate: { x: 0, rotate: -3, transition: { duration: 0.5, type: "spring" } },
  exit: { opacity: 0 },
};
