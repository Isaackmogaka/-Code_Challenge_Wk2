let animalDetail = document.querySelector('#animalDetail');
//Getting the Data
fetch("http://localhost:3000/characters").then(response => response.json()).then(jsData => {
    for (charactersObj of jsData) {
      console.log(charactersObj.name);
      
   //creating a reset button and styling of the reset button 
       let button = document.createElement('button');
         button.textContent="Reset";
         button.style.fontSize=100;
         button.style.display = 'none';
         button.style.backgroundColor="black";
         button.style.color="white";
         button.style.width= "60px";
         button.style.height= "30px";
         button.style.radius = "1rem"

      // adding event listener to the reset button to return votes to zero 
      function reset(){
        voteCount= 0;
        votesParagraph.textContent = 'Votes: ' + voteCount;
         }
         button.addEventListener('click',reset)


     //DOM manipulation
     // Creating a list tag
      let liTag = document.createElement('li');
      liTag.style.cursor="pointer";
  
    //adding  event listener to the liTag

      liTag.addEventListener('click',hiddenContent)
         function hiddenContent(){
          imgTag.style.display='block';
          votesParagraph.style.display='block';
          button.style.display = 'inline-block';
        }


      // Creating  lidata
           let liData = document.createTextNode(charactersObj.name);

      // Creating an image element
          let imgTag = document.createElement('img');
      //styling the images 
          imgTag.src = charactersObj.image;
          imgTag.width = 350;
          imgTag.height = 300;
          imgTag.style.display="none";


      const imgTags = document.querySelectorAll('img');
      imgTags.forEach((imgTag) => {
        const votesParagraph = imgTag.nextElementSibling; 
        let voteCount = 0; 
      //adding the eventListener to the image
        imgTag.addEventListener('click', () => {
          voteCount++; 
          votesParagraph.textContent = `Votes: ${voteCount}`; // Update the displayed vote count
        });
      });


      // Creating a paragraph that will display the votes & DOM manipulation
      let votesParagraph = document.createElement('p');
      votesParagraph.textContent = `Votes: ${charactersObj.votes}`;
      votesParagraph.style.display="none"


      // Appending liData to liTag
      liTag.append(liData);

      // Appending imgTag to liTag
      liTag.append(imgTag);

      // Appending votesSpan to liTag
      liTag.append(votesParagraph);

      //append buttonto liTag
      liTag.append(button)

      // Appending the li element to the animalDetail div
      animalDetail.append(liTag);
    }
  }).catch(error => {
    console.error(error);
  });
  

