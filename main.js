var names = ["Nitin","Pooja","Savita"];
var length_names=names.length

var Images = ["https://www.oneplusul.in/assets/front/images/nitin-profile.png","https://www.oneplusul.in/assets/front/images/dr-pooja.jpg","https://images1-fabric.practo.com/54199224d5c0a1e8be387f2f88c2d5b530aba61573c45.jpg"];
              
              var i=0;
              function Add_name()
              {
                console.log([i]);  
                    document.getElementById("image1").src=Images[i];
                    document.getElementById("h1i").innerHTML=names[i];
                  i++;
                  if (i>=length_names)
                  i=0;
              }