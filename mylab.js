function isTouching(ajay,salman){
    if(ajay.x-salman.x<ajay.width/2+salman.width/2&&salman.x-ajay.x<ajay.width/2+salman.width/2&&
        ajay.y-salman.y<ajay.height/2+salman.height/2&&salman.y-ajay.y<ajay.height/2+salman.height/2){
        
      return true;
      } else{
       
      return false;
    }
    }
    function bounceoff(ajay,sarukh){
      if(ajay.x-sarukh.x<ajay.width/2+sarukh.width/2&&sarukh.x-ajay.x<ajay.width/2+sarukh.width/2){
        ajay.velocityX=ajay.velocityX*(-1);
      
      
      }
      if(ajay.y-sarukh.y<ajay.height/2+sarukh.height/2&&sarukh.y-ajay.y<ajay.height/2+sarukh.height/2){
        ajay.velocityY=ajay.velocityY*(-1);
      
      
      }
    }