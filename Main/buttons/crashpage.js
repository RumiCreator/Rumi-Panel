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
