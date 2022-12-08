

const checklvlButton = document.createElement("button");
      makeElem(checklvlButton, "Check Level", "50px", "20px", "99px");

      checklvlButton.onclick = function() {
         alert(`Your hack level is: {${Number(hackLevel)}}`);
      };
