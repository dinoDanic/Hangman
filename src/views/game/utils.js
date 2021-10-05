export const checkWin = (sentance, trueLetters) => {
  if (!sentance) return null;
  let state = "win";
  let text1 = sentance;
  let text2 = text1.replace(/ /g, "");
  let text3 = text2.replace(/[^a-zA-Z ]/g, "");
  let filtered = text3.toLowerCase();

  filtered.split("").forEach((letter) => {
    if (!trueLetters.includes(letter)) {
      state = "no win";
    }
  });
  return state;
};

export const getUniqueChars = (content) => {
  let str = content.split("");
  let str2 = new Set(str);
  str2 = [...str2].join("");
  let str3 = str2.replace(/ /g, "");
  let str4 = str3.replace(/[^a-zA-Z ]/g, "");

  return str4.length;
};
