function main() {
  const Hacks = [
    "crashPage":"off",
  ]
 
 
console.log(`Started! Site test ${document.location}`)
   const Information = {
      user: 'Name',
      id: 'XXXX-XXXX-XXXX',
      hackLevel: 5,
   };
   const user = Information.user;
   const id = Information.id;
   const hackLevel = Information.hackLevel;
   const secureButton = document.createElement(
      'button'
   ); // Creates button, people can access this on private?
   secureButton.style.position = 'absolute';
   secureButton.style.top = '20px';
   // Sets position, I guess most people would know that.
   secureButton.style.left = '500px';
   secureButton.style.zIndex = '2147483647';
   secureButton.innerText = 'Run Security';
   document.body.appendChild(secureButton);
   secureButton.onclick = function() {
      // The click detector.
      console.log('Button [1] was clicked: {User has entered!}}');
      const Prompt1 = prompt('User?');
      if (Prompt1 === user) {
         const Prompt2 = prompt('ID?');
         if (Prompt2 === id) {
            CreateGui();
         };
      };
   };

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
      const chooseHackButton = document.createElement("button");
      makeElem(chooseHackButton, "Load Hack", "25px", "20px", "99px");
     
      chooseHackButton.onclick = function() {
     
     
      const checklvlButton = document.createElement("button");
      makeElem(checklvlButton, "Check Level", "50px", "20px", "99px");

      checklvlButton.onclick = function() {
         alert(`Your hack level is: {${Number(hackLevel)}}`);
      };

      // Credits Button
      const credits = document.createElement("button");
      makeElem(credits, "Credits", "75px", "20px","99px");

      credits.onclick = function() {
         alert("Made by Kahmron, this is the first version of the Rumi Panel!");
      }

      // Crash page button, please use at your own risk.
      const CrashPage = document.createElement("button");
      makeElem(CrashPage, "Crash Page!", "100px", "20px", "99px");
       
      Hacks["crashPage"] = "on";

      CrashPage.onclick = function() {
         while (true) {
            console.log("Crashed page, succesfully!");
         }
      }
     

   };
}

main();
