const ms1 = document.querySelector("#ps1");
const ms2 = document.querySelector("#ms2");
const ms3 = document.querySelector("#ms3");
const ms4 = document.querySelector("#ms4");
const ps1 = document.querySelector("#ps1");
const ps2 = document.querySelector("#ps2");
const ps3 = document.querySelector("#ps3");
const ps4 = document.querySelector("#ps4");
const cs1 = document.querySelector("#cs1");
const cs2 = document.querySelector("#cs2");
const cs3 = document.querySelector("#cs3");
const cs4 = document.querySelector("#cs4");
const ts1 = document.querySelector("#ts1");
const ts2 = document.querySelector("#ts2");
const ts3 = document.querySelector("#ts3");
const ts4 = document.querySelector("#ts4");
const es1 = document.querySelector("#es1");
const es2 = document.querySelector("#es2");
const es3 = document.querySelector("#es3");
const es4 = document.querySelector("#es4");
const is1 = document.querySelector("#is1");
const is2 = document.querySelector("#is2");
const is3 = document.querySelector("#is3");
const is4 = document.querySelector("#is4");
const pls1 = document.querySelector("#pls1");
const pls2 = document.querySelector("#pls2");
const pls3 = document.querySelector("#pls3");
const pls4 = document.querySelector("#pls4");
const cls1 = document.querySelector("#cls1");
const cls2 = document.querySelector("#cls2");
const cls3 = document.querySelector("#cls3");
const cls4 = document.querySelector("#cls4");
const ils1 = document.querySelector("#ils1");
const ils2 = document.querySelector("#ils2");
const ils3 = document.querySelector("#ils3");
const ils4 = document.querySelector("#ils4");
function analyse() {
  visible();
  var gm1 = document.querySelector("#gm1");
  var gm2 = document.querySelector("#gm2");
  var gm3 = document.querySelector("#gm3");
  var gm4 = document.querySelector("#gm4");
  var gp1 = document.querySelector("#gp1");
  var gp2 = document.querySelector("#gp2");
  var gp3 = document.querySelector("#gp3");
  var gp4 = document.querySelector("#gp4");
  var gc1 = document.querySelector("#gc1");
  var gc2 = document.querySelector("#gc2");
  var gc3 = document.querySelector("#gc3");
  var gc4 = document.querySelector("#gc4");
  var gt1 = document.querySelector("#gt1");
  var gt2 = document.querySelector("#gt2");
  var gt3 = document.querySelector("#gt3");
  var gt4 = document.querySelector("#gt4");
  var ge1 = document.querySelector("#ge1");
  var ge2 = document.querySelector("#ge2");
  var ge3 = document.querySelector("#ge3");
  var ge4 = document.querySelector("#ge4");
  var gi1 = document.querySelector("#gi1");
  var gi2 = document.querySelector("#gi2");
  var gi3 = document.querySelector("#gi3");
  var gi4 = document.querySelector("#gi4");
  var gpl1 = document.querySelector("#gpl1");
  var gpl2 = document.querySelector("#gpl2");
  var gpl3 = document.querySelector("#gpl3");
  var gpl4 = document.querySelector("#gpl4");
  var gcl1 = document.querySelector("#gcl1");
  var gcl2 = document.querySelector("#gcl2");
  var gcl3 = document.querySelector("#gcl3");
  var gcl4 = document.querySelector("#gcl4");
  var gil1 = document.querySelector("#gil1");
  var gil2 = document.querySelector("#gil2");
  var gil3 = document.querySelector("#gil3");
  var gil4 = document.querySelector("#gil4");

  var cm1 = document.querySelector("#cm1");
  var cm2 = document.querySelector("#cm2");
  var cm3 = document.querySelector("#cm3");
  var cm4 = document.querySelector("#cm4");
  var cp1 = document.querySelector("#cp1");
  var cp2 = document.querySelector("#cp2");
  var cp3 = document.querySelector("#cp3");
  var cp4 = document.querySelector("#cp4");
  var cc1 = document.querySelector("#cc1");
  var cc2 = document.querySelector("#cc2");
  var cc3 = document.querySelector("#cc3");
  var cc4 = document.querySelector("#cc4");
  var ct1 = document.querySelector("#ct1");
  var ct2 = document.querySelector("#ct2");
  var ct3 = document.querySelector("#ct3");
  var ct4 = document.querySelector("#ct4");
  var ce1 = document.querySelector("#ce1");
  var ce2 = document.querySelector("#ce2");
  var ce3 = document.querySelector("#ce3");
  var ce4 = document.querySelector("#ce4");
  var ci1 = document.querySelector("#ci1");
  var ci2 = document.querySelector("#ci2");
  var ci3 = document.querySelector("#ci3");
  var ci4 = document.querySelector("#ci4");
  var cpl1 = document.querySelector("#cpl1");
  var cpl2 = document.querySelector("#cpl2");
  var cpl3 = document.querySelector("#cpl3");
  var cpl4 = document.querySelector("#cpl4");
  var ccl1 = document.querySelector("#ccl1");
  var ccl2 = document.querySelector("#ccl2");
  var ccl3 = document.querySelector("#ccl3");
  var ccl4 = document.querySelector("#ccl4");
  var cil1 = document.querySelector("#cil1");
  var cil2 = document.querySelector("#cil2");
  var cil3 = document.querySelector("#cil3");
  var cil4 = document.querySelector("#cil4");

  gm1.textContent = Number(ms1.value);
  gm2.textContent = Number(ms2.value);
  gm3.textContent = Number(ms3.value);
  gm4.textContent = Number(ms4.value);
  gp1.textContent = Number(ps1.value);
  gp2.textContent = Number(ps2.value);
  gp3.textContent = Number(ps3.value);
  gp4.textContent = Number(ps4.value);
  gc1.textContent = Number(cs1.value);
  gc2.textContent = Number(cs2.value);
  gc3.textContent = Number(cs3.value);
  gc4.textContent = Number(cs4.value);
  gt1.textContent = Number(is1.value);
  gt2.textContent = Number(is2.value);
  gt3.textContent = Number(is3.value);
  gt4.textContent = Number(is4.value);
  ge1.textContent = Number(es1.value);
  ge2.textContent = Number(es2.value);
  ge3.textContent = Number(es3.value);
  ge4.textContent = Number(es4.value);
  gi1.textContent = Number(is1.value);
  gi2.textContent = Number(is2.value);
  gi3.textContent = Number(is3.value);
  gi4.textContent = Number(is4.value);
  gpl1.textContent = Number(pls1.value);
  gpl2.textContent = Number(pls2.value);
  gpl3.textContent = Number(pls3.value);
  gpl4.textContent = Number(pls4.value);
  gcl1.textContent = Number(cls1.value);
  gcl2.textContent = Number(cls2.value);
  gcl3.textContent = Number(cls3.value);
  gcl4.textContent = Number(cls4.value);
  gil1.textContent = Number(ils1.value);
  gil2.textContent = Number(ils2.value);
  gil3.textContent = Number(ils3.value);
  gil4.textContent = Number(ils4.value);

  cm1.textContent = (Number(ms1.value) * 5) / 10;
  cm2.textContent = (Number(ms2.value) * 5) / 10;
  cm3.textContent = (Number(ms3.value) * 5) / 10;
  cm4.textContent = (Number(ms4.value) * 5) / 10;
  cp1.textContent = (Number(ps1.value) * 4) / 10;
  cp2.textContent = (Number(ps2.value) * 4) / 10;
  cp3.textContent = (Number(ps3.value) * 4) / 10;
  cp4.textContent = (Number(ps4.value) * 4) / 10;
  cc1.textContent = (Number(cs1.value) * 4) / 10;
  cc2.textContent = (Number(cs2.value) * 4) / 10;
  cc3.textContent = (Number(cs3.value) * 4) / 10;
  cc4.textContent = (Number(cs4.value) * 4) / 10;
  ct1.textContent = (Number(is1.value) * 3) / 10;
  ct2.textContent = (Number(is2.value) * 3) / 10;
  ct3.textContent = (Number(is3.value) * 3) / 10;
  ct4.textContent = (Number(is4.value) * 3) / 10;
  ce1.textContent = (Number(es1.value) * 3) / 10;
  ce2.textContent = (Number(es2.value) * 3) / 10;
  ce3.textContent = (Number(es3.value) * 3) / 10;
  ce4.textContent = (Number(es4.value) * 3) / 10;
  ci1.textContent = (Number(is1.value) * 2) / 10;
  ci2.textContent = (Number(is2.value) * 2) / 10;
  ci3.textContent = (Number(is3.value) * 2) / 10;
  ci4.textContent = (Number(is4.value) * 2) / 10;
  cpl1.textContent = Number(pls1.value) / 10;
  cpl2.textContent = Number(pls2.value) / 10;
  cpl3.textContent = Number(pls3.value) / 10;
  cpl4.textContent = Number(pls4.value) / 10;
  ccl1.textContent = Number(cls1.value) / 10;
  ccl2.textContent = Number(cls2.value) / 10;
  ccl3.textContent = Number(cls3.value) / 10;
  ccl4.textContent = Number(cls4.value) / 10;
  cil1.textContent = Number(ils1.value) / 10;
  cil2.textContent = Number(ils2.value) / 10;
  cil3.textContent = Number(ils3.value) / 10;
  cil4.textContent = Number(ils4.value) / 10;
  // gpa
  var mc =
    ((Number(ms1.value) +
      Number(ms2.value) +
      Number(ms3.value) +
      Number(ms3.value)) *
      5) /
    10;

  var pc =
    ((Number(ps1.value) +
      Number(ps2.value) +
      Number(ps3.value) +
      Number(ps3.value)) *
      4) /
    10;
  var cc =
    ((Number(cs1.value) +
      Number(cs2.value) +
      Number(cs3.value) +
      Number(cs3.value)) *
      4) /
    10;
  var tc =
    ((Number(ts1.value) +
      Number(ts2.value) +
      Number(ts3.value) +
      Number(ts3.value)) *
      3) /
    10;
  var ec =
    ((Number(es1.value) +
      Number(es2.value) +
      Number(es3.value) +
      Number(es3.value)) *
      3) /
    10;
  var ic =
    ((Number(is1.value) +
      Number(is2.value) +
      Number(is3.value) +
      Number(is3.value)) *
      2) /
    10;
  var plc =
    (Number(pls1.value) +
      Number(pls2.value) +
      Number(pls3.value) +
      Number(pls3.value)) /
    10;
  var clc =
    (Number(cls1.value) +
      Number(cls2.value) +
      Number(cls3.value) +
      Number(cls3.value)) /
    10;
  var ilc =
    (Number(ils1.value) +
      Number(ils2.value) +
      Number(ils3.value) +
      Number(ils3.value)) /
    10;

  document.querySelector("#cm").textContent = mc;
  document.querySelector("#cp").textContent = pc;
  document.querySelector("#cc").textContent = cc;
  document.querySelector("#ct").textContent = tc;
  document.querySelector("#ce").textContent = ec;
  document.querySelector("#ci").textContent = ic;
  document.querySelector("#cpl").textContent = plc;
  document.querySelector("#ccl").textContent = clc;
  document.querySelector("#cil").textContent = ilc;

  document.querySelector("#gm").textContent = mc * (10 / (4 * 5));
  document.querySelector("#gp").textContent = pc * (10 / (4 * 4));
  document.querySelector("#gc").textContent = cc * (10 / (4 * 4));
  document.querySelector("#gt").textContent = tc * (10 / (4 * 3));
  document.querySelector("#ge").textContent = ec * (10 / (4 * 3));
  document.querySelector("#gi").textContent = ic * (10 / (4 * 2));
  document.querySelector("#gpl").textContent = plc * (10 / 4);
  document.querySelector("#gcl").textContent = clc * (10 / 4);
  document.querySelector("#gil").textContent = ilc * (10 / 4);

  var gs1 =
    (Number(ms1.value) * 5 +
      Number(ps1.value) * 4 +
      Number(cs1.value) * 4 +
      Number(ts1.value) * 3 +
      Number(es1.value) * 3 +
      Number(is1.value) * 2 +
      Number(cls1.value) +
      Number(ils1.value) +
      Number(pls1.value)) /
    10;
  var gs2 =
    (Number(ms2.value) * 5 +
      Number(ps2.value) * 4 +
      Number(cs2.value) * 4 +
      Number(ts2.value) * 3 +
      Number(es2.value) * 3 +
      Number(is2.value) * 2 +
      Number(pls2.value) +
      Number(cls2.value) +
      Number(ils2.value)) /
    10;
  var gs3 =
    (Number(ms3.value) * 5 +
      Number(ps3.value) * 4 +
      Number(cs3.value) * 4 +
      Number(ts3.value) * 3 +
      Number(es3.value) * 3 +
      Number(is3.value) * 2 +
      Number(pls3.value) +
      Number(cls3.value) +
      Number(ils3.value)) /
    10;
  var gs4 =
    (Number(ms4.value) * 5 +
      Number(ps4.value) * 4 +
      Number(cs4.value) * 4 +
      Number(ts4.value) * 3 +
      Number(es4.value) * 3 +
      Number(is4.value) * 2 +
      Number(pls4.value) +
      Number(cls4.value) +
      Number(ils4.value)) /
    10;

  var gss1 = String(gs1 * (10 / 24));
  var gss2 = String(gs2 * (10 / 24));
  var gss3 = String(gs3 * (10 / 24));
  var gss4 = String(gs4 * (10 / 24));

  document.querySelector("#gred1").textContent = gss1.slice(0, 4);
  document.querySelector("#gred2").textContent = gss2.slice(0, 4);
  document.querySelector("#gred3").textContent = gss3.slice(0, 4);
  document.querySelector("#gred4").textContent = gss4.slice(0, 4);

  document.querySelector("#cred1").textContent = gs1;
  document.querySelector("#cred2").textContent = gs2;
  document.querySelector("#cred3").textContent = gs3;
  document.querySelector("#cred4").textContent = gs4;
  var rome = String(
    (gs1 * (10 / 24) + gs2 * (10 / 24) + gs3 * (10 / 24) + gs4 * (10 / 24)) / 4
  );
  document.querySelector("#ogpa").textContent = rome.slice(0, 4);

  document.querySelector("#ocredit").textContent = gs1 + gs2 + gs3 + gs4;

  function visible() {
    document.getElementById("sectiontwo").style.display = "block";
  }
}
