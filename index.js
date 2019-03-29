//function move defines elem, width and id(which is set to a setinterval function
//that increments by 10); function frame states that if the width is greater than or 
//equal to 100, otherwise increase the width and sets the bar element's width styling to 
//width plus the percentage 

/*function move(){ 
    var elem = document.getElementById("bar"); 
    var width = 1; 
    var id = setInterval(frame, 10); 
    function frame () { 
        if(width>=100){ 
            clearInterval(id); 
        }
        else{ 
            width++; 
           elem.style.width = width+'%'; 

        }
    }   
}*/

/* if(this.width>=100) { 
        clearInterval(id); 
    }
    else{ 
        this.width++; 
       elem.style.width = width+'%'; 
  }

} */ 

setInterval(() => { 
    frame; 
    },10); 

 

document.addEventListener("DOMContentLoaded",() => {
    let elem = document.getElementById("bar");
    let btn_press = document.getElementById("press");
    //let id  = setInterval ((10); 
    let width = 1;
     
  });


 let frame = () => { 
    if(this.width>=100) { 
        clearInterval(id); 
    }
    else{ 
        this.width++; 
       elem.style.width = width+'%'; 
    }
}
