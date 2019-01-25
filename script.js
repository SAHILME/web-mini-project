var start = new Date().getTime();
           function makeRandomColor(){
               var letters="123456789ABCDEF".split('');
               var color="#";
               for(var i=0;i<6;i++){
                   color+=letters[Math.floor(Math.random()*16)];
               }
               return color;
           }
            function makeshapeappear(){
                var top=Math.random()*400;
                document.getElementById("shapes").style.top=top+"px"
                var left=Math.random()*400;
                var width=(Math.random()*300)+100;
                if(Math.random()>0.5){
                    document.getElementById('shapes').style.borderRadius="50%"
                }
                else{
                    document.getElementById("shapes").style.borderRadius="0"
                }
                document.getElementById("shapes").style.backgroundColor=makeRandomColor();
                document.getElementById("shapes").style.height=width+"px";
                document.getElementById("shapes").style.width=width+"px";
                document.getElementById("shapes").style.left=left+"px";
             
                document.getElementById("shapes").style.display="block";
            
            start = new Date().getTime();
            }
           function appearafterdelay(){
               setTimeout(makeshapeappear,Math.random()*2000)
           }

           appearafterdelay(); 

            document.getElementById("shapes").onclick=function(){
                document.getElementById("shapes").style.display="none";
                var end = new Date().getTime();
                var time = (end - start)/1000;
              document.getElementById("timetaken").innerHTML=time+"s"
              appearafterdelay();

            }