export const welcomeAni = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const popContentAnimation = {
  initial: { y: -30, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

export const scoreBoardAnimation = {
  initial: { x: "-120%", rotate: -20 },
  animate: { x: 0, rotate: -3, transition: { duration: 0.5, type: "spring" } },
  exit: { opacity: 0 },
};

export const loadAnimation = {
  animate: {
    opacity: 1,
    transition: {
      repeat: Infinity,
      ease: "linear",
      repeatType: "reverse",
      duration: 0.3,
    },
  },
  initial: { opacity: 0.5 },
};

export const errorAnimation = {
  initial: { y: -150 },
  animate: { y: 0 },
  exit: { y: -150 },
};
