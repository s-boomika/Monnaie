const pieces = [100, 50, 20, 10, 5, 2, 1];
const rendu = (arendre, i = 0) => {
  const sol = [];

  if (arendre == 0) {
    return sol;
  }
  const p = pieces[i];

  if (p <= arendre) {
    sol.push(p);
    return sol.concat(rendu(arendre - p, i));
  } else {
    return sol.concat(rendu(arendre, ++i));
  }
};

const print = (tab) => {
  const o = tab.reduce((a, x) => {
    if (!a[x]) a[x] = 0;
    a[x] = a[x] + 1;
    return a;
  }, {});
  
  let msg = ``;
  Object.keys(o).forEach(function (c) {

    
      msg +=`\n Billet${o[c] > 1 ? "s" : " "} de ${c}\t${c > 9 ? "" : "\t"} : ${
        o[c]
      }`
    
  });
  
  document.querySelector("[data-message]").innerText = `${msg}`;
};

let input = document.querySelector("[data-input]");
input.addEventListener("change", function () {
  const aRendre = this.value;
  // console.log(`${aRendre}$ : ${rendu(aRendre)}`)
  // document.querySelector("[data-message]").innerText = `${aRendre}$ : ${rendu(
  //   aRendre
  // )}`;
  const tab = rendu(aRendre);
  print(tab);
});
