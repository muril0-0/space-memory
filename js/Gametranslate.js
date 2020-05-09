import idiomData from "./translationData.js";

const brFlag = document.querySelector(".brFlag");
const engFlag = document.querySelector(".engFlag");

brFlag.onclick = () => {
  document.querySelector("#Gp1").innerHTML = idiomData.ptBr.p4;
  document.querySelector("#Gp2").innerHTML = idiomData.ptBr.p5;
  document.querySelector("#info-text").innerHTML = idiomData.ptBr.p6;
};

engFlag.onclick = () => {
  document.querySelector("#Gp1").innerHTML = idiomData.eng.p4;
  document.querySelector("#Gp2").innerHTML = idiomData.eng.p5;
  document.querySelector("#info-text").innerHTML = idiomData.eng.p6;
};
