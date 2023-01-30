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
const chooseHackButton = document.createElement("button");
makeElem(chooseHackButton, "Load Hack", "25px", "20px", "99px"); 

const Hacks = [
    ["Youtube","window.open(\"https://www.youtube.com\")"],
];

chooseHackButton.onclick = function() {
    try {
        let pr1 = prompt("Hack?")
        Hacks.forEach((item,ev) => { 
          if(pr1.match(/item/gi)){
              eval(toString(ev));
          }
        })
    } catch {
        console.error("__couldn't run Eval?, possible forEach() function failed to proccess.")
        alert('something didnt work. oof.')
    }
}
