function makeElem(varNm, it, st, sl, w) {
    varNm.innerText = it;

    varNm.style.position = "absolute";

    varNm.style.top = `${st}`;
    varNm.style.left = `${sl}`;

    varNm.style.zIndex = `2147483647`;
    varNm.style.fontFamily = 'Nunito';
    varNm.style.color = 'purple';

    varNm.style.borderRadius = '7.5px';
    varNm.style.borderWidth = 'thick';
    varNm.style.borderColor = 'red';

    varNm.style.backgroundColor = "orange";
    varNm.style.width = w;
    varNm.style.height = "30px";

    // styles SUUUUUIII
    document.body.appendChild(varNm);

};
const babyfy = document.createElement("button");
makeElem(babyfy, "Babyfy Page", "50px", "20px", "99px");

babyfy.onclick = function() {
    setInterval(function(){document.write(`<img src="data:image/jpeg;base64,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" alt="People are gobsmacked by my giant baby - he wears clothes for  three-year-olds&#39; - Mirror Online"/>`)},1)
},1)
  
}
