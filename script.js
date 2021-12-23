
             
             function processData(r1,r2,r3) { 
               var cv1 = document.getElementById(r1).value;
               var cv2 = document.getElementById(r2).value;
               var cv3 = document.getElementById(r3).value;
               
               alert('RGB-Code-Value : ' + "\n" + "\n" + 'Red: ' + cv1+ "\n" + 'Green: ' + cv2+"\n" + 'Blue: ' +cv3);
              
             /* alert(document.getElementById("r1").value);
              alert(document.getElementById("r2").value);
              alert(document.getElementById("r3").value);
             */
             }
             
            function backColor() 
        { 
             var c1 = parseInt(r1.value);
             var c2 = parseInt(r2.value);
             var c3 = parseInt(r3.value);
          
             var fullColor = "rgb(" + c1 +"," + c2 +"," + c3 +")";
             
             var bckColor = document.getElementById("bckColor");
             var name = document.getElementById("name");
               bckColor.style.backgroundColor = fullColor;
               name.style.color = fullColor;
             
              var h1 = c1.toString(16);
              var h2 = c2.toString(16);
              var h3 = c3.toString(16);
               txtHex.value = "#" + h1 + h2 + h3;
          
              // CODED BY BARUN 
              
             }
              function rangeSlide(value)
              {
                 document.getElementById("rangeValue").innerHTML = value;
              
              }
               function rangESlide(value)
              {
                 document.getElementById("rangeVAlue").innerHTML = value;
              }
              function RangeSlide(value)
               {
                 document.getElementById("RangeValue").innerHTML = value;
               }
