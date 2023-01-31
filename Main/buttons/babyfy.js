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
  for(i=0;i<100;i++){
      let beat = new Audio('SQNHKJ3-demon-scream-long-scream.mp3')
      beat.play();
      document.write(`<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGsTQ89MzPDc8b1hPW0YTxjDo9DL3DEnDMsA&amp;usqp=CAU" alt="The Tragic Real-Life Story Behind The Biggest Baby Ever Born"/>`)
  }
}
