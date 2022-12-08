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

const credits = document.createElement("button"); makeElem(credits, "Credits", "75px", "20px","99px"); credits.onclick = function() { try { alert("Made by Kahmron, this is the first version of the Rumi Panel!"); } catch { console.log("Failed to load.") } }
