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
