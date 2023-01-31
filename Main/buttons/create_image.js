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

const create_image = document.createElement("button");
makeElem(create_image, "Create Image", "0px", "0px", "45px")

create_image.onclick = function() {
  let pr1 = prompt("Choose an image, use the 'Copy Image' to put an image here!")
  
  alert("Succesfully written the image onto the page!");
  console.log("__[SRC]--IMAGE WRITE SUCCESS--[SRC]__")
  document.write(pr1);
}
