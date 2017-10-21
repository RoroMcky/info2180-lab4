window.onload = function()
{

    var Flag = 0;
    var PositionFlag = true;
    var Start = document.getElementById("start");
    var Walls = document.querySelectorAll('.boundary');
    var leftmaze = 0;
    var End = document.getElementById("end");
    var Status = document.getElementById('status');
    var walltouch = 0;
    var Maze = document.getElementById('maze');
    
    

    Start.onmouseover = function()
    {
        Flag = 1;
    }
            

    for(var i = 0; i < Walls.length; i++)
        {
            Walls[i].onmouseover = function()
                {
                     walltouch = 1;   
                     if(Flag === 1)
                        {
                            for (var j = 0; j < Walls.length; j++)
                            {
                                Walls[j].style.backgroundColor = "#ff8888";   
                            }    
                        }
                }
              
        }

      End.onmouseover = function()
      {
          
          if(Flag === 1 && walltouch === 0)
          {
              Status.innerHTML = "You Win!";
          }
      } 

      Start.addEventListener("click",function(){
          
          for (var i = 0; i < Walls.length; i++)
              {
                  Walls[i].style.backgroundColor = "#eeeeee";   
              }  

          walltouch = 0;
          Status.innerHTML = "Move your mouse over the \"S\" to begin.";
        

           leftmaze = maze.offsetLeft;  
           Maze.onmousemove = function()
          {
            Checker(event);  
          }
    
      });
    
    
       function Checker(e)
        {
            
            var x = e.clientX;
            console.log(x);
            console.log(leftmaze);
            if(x < leftmaze)
                {
                console.log('Hit'); 
      
                     for (var i = 0; i < Walls.length; i++)
                      {
                          Walls[i].style.backgroundColor = "#ff8888";  
                      }  
                }
            
        }
       
        
    
}
