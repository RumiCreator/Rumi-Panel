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
    ["Rickroll", "off"]
];

chooseHackButton.onclick = function() {
    try {
        let pr1 = prompt("Hack?")
        if (pr1.match(\Rickroll\gi)) {
         location.href = "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwiwm8-7sI72AhVGO-wKHSBgDJUQwqsBegQIBhAB&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DxvFZjo5PgG0&usg=AOvVaw1bR_FN-SnfIGtKD3fjAA5P";
        }
    } catch {
        console.error("what the hell is wrong with Javascript!?!?!?!?")
    }
}
