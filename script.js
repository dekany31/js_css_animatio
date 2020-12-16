function pageLoad() {

  let rootE = document.getElementById("root");
  let myObjects = [
    {
      tag: "h1",
     content: "Dekany Monika"
    },
     {
      tag: "p",
      content: "Frontend developer"
    }
  ];
  //console.log(myObjects);

  // for (let i = 0; i < myObjects.length; i++) {
  //   console.log();
    
  for (myObject of myObjects) {
      console.log(myObjects.tag);

      rootE.insertAdjacentHTML("beforeend", `
          <${myObject.tag}>${myObject.content}</${myObject.tag}>

        `);
    }
    // rootE.addEventListener("click", function(event){
    //   event.target.classList.toggle("clicked");
    // });

    rootE.addEventListener("click", function(){
      rootE.classList.toggle("clicked");
    });
  

    // let newTag = document.createElement(myObject.tag);
    // newTag.innerHTML = myObject.content;
    // rootDiv.appendChild(newTag);

  }


window.addEventListener("load", pageLoad);