const imgBox = document.querySelector(".imgbox");
const whiteBoxes = document.getElementsByClassName("whitebox");

imgBox.addEventListener("dragstart", (e) => {
  console.log("trigered");
  e.target.className += " hold";
  setTimeout(() => {
    e.target.className = "hide";
  }, 0);
});

imgBox.addEventListener("dragend", (e) => {
  e.target.className = "imgbox";
});

for (whiteBox of whiteBoxes) {
  // whiteBox.addEventListener("dragover", (e) => {
  //   e.preventDefault();
  //   console.log("dragover triggered");
  // });

  // whiteBox.addEventListener("dragenter", (e) => {
  //   // e.preventDefault();
  //   console.log("dragenter triggered");
  // });

  // whiteBox.addEventListener("dragleave", (e) => {
  //   // e.target.append(imgBox);
  //   console.log("dragleave triggered");
  // });
  
}
 whiteBoxes[0].addEventListener("dragover", (e) => {
   e.preventDefault();
   console.log("dragover triggered");
 });
 whiteBoxes[1].addEventListener("drop", (e) => {
   e.target.append(imgBox);
   console.log("drop triggered");
 });
 whiteBoxes[1].addEventListener("dragover", (e) => {
   e.preventDefault();
   console.log("dragover triggered");
 });
 whiteBoxes[0].addEventListener("drop", (e) => {
   e.target.append(imgBox);
   console.log("drop triggered");
 });