function main() {

const HackLogs = [

];     

console.log(`Started! Site test ${document.location}`);
HackLogs.push(
["ServerMessage",`Session started: ${Date()}`]
)
  


   function CreateGui() {
      alert("You are in!");

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
        
      /* https://raw.githubusercontent.com/RumiCreator/Rumi-Panel/main/ 
      DO NOT EDIT ANYWHERE BELOW THIS, THIS WILL CAUSE EVERYTHING TO BREAK.
      */
        
      // Choose hack button
      fetch("https://raw.githubusercontent.com/RumiCreator/Rumi-Panel/main/Main/buttons/choosehackbutton.js",{mode: "cors"})
              .then((res) => res.text()
              .then((t) => eval(t)))

      // Credits Button
      fetch("https://raw.githubusercontent.com/RumiCreator/Rumi-Panel/main/Main/buttons/credits.js",{mode: "cors"})
               .then((res) => res.text()
               .then((t) => eval(t)))

     // Crash-Page Button
     fetch("https://raw.githubusercontent.com/RumiCreator/Rumi-Panel/main/Main/buttons/crashpage.js",{mode: "cors"})
               .then((res) => res.text() 
               .then((t) => eval(t)))

   };
    CreateGui();
}

main();

