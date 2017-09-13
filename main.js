var img = document.getElementById('notification')  
  var div = document.querySelector('.Clear')
  
  

  img.onclick = function () {
    var div2 = div.getAttribute('class')

   switch(div2) {
     
     case "Clear":
      div.setAttribute('class', 'red')
      img.setAttribute('src', 'downloads/chris2.png')

      break;

    case "red": 
     div.setAttribute('class', 'Clear')
     img.setAttribute('src', 'downloads/chris.png')
   
    

   }

  };

  