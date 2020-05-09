import idiomData from "./translationData.js";

const brFlag = document.querySelector(".brFlag");
const engFlag = document.querySelector(".engFlag");

brFlag.onclick = () => {
  document.querySelector("#Hp1").innerHTML = idiomData.ptBr.p1;
  document.querySelector("#Hp2").innerHTML = idiomData.ptBr.p2;
  document.querySelector(".btn").innerHTML = idiomData.ptBr.p3;
};

engFlag.onclick = () => {
  document.querySelector("#Hp1").innerHTML = idiomData.eng.p1;
  document.querySelector("#Hp2").innerHTML = idiomData.eng.p2;
  document.querySelector(".btn").innerHTML = idiomData.eng.p3;
};
