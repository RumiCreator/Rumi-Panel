function main() {
     const Information = [
      ["User","test"],
      ["id","test"],
      ["hackLevel",Infinity],
   ];
   const user = Information.user;
   const id = Information.id;

   const hackLevel = Information.hackLevel
  // Session start.
  
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
      fetch("https://raw.githubusercontent.com/RumiCreator/Rumi-Panel/main/Main/buttons/choosehackbutton.js",{mode: "cors"})
              .then((res) => res.text()
              .then((t) => eval(t)))
     
     
      const checklvlButton = document.createElement("button");
      makeElem(checklvlButton, "Check Level", "50px", "20px", "99px");

      checklvlButton.onclick = function() {
         alert(`Your hack level is: {${Number(hackLevel)}}`);
      };

      // Credits Button
      const credits = document.createElement("button");
      makeElem(credits, "Credits", "75px", "20px","99px");

      credits.onclick = function() {
        try {
         alert("Made by Kahmron, this is the first version of the Rumi Panel!");
        } catch {
          console.log("Failed to load.")
        }
      }

      // Crash page button, please use at your own risk.
      const CrashPage = document.createElement("button");
      makeElem(CrashPage, "Crash Page!", "100px", "20px", "99px");
      

      CrashPage.onclick = function() {
        try {
         // hehe, just gotta y'know crash the page >:)
          
          
          while (true) {
            console.log("Crashed page, succesfully!");
         }
        } catch {
          console.error("_Error_ RumiPanel couldn't proccess the hack."); 
          alert("There was a problem executing this button");
        } 
      }
     

   };
    CreateGui();
}

main();

