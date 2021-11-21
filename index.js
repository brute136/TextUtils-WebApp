let input = document.querySelector('input');

let btn = document.querySelector('button');

let text = document.getElementById('v');
let totaldots = 0;
let totalWhiteSpaces = 0;
let totalLines = 1;
let totalword = 1;
let totalTabs = 0;

btn.addEventListener('click',(event)=>{
  if(input.value == undefined || input.value == ""){
    input.placeholder = "Please Enter Your Text"
  }else{
    totaldots = 0;
    totalWhiteSpaces = 0;
    totalLines = 1;
    totalword = 1;
    totalTabs = 0;
    fetchdata(input.value)
    text.innerHTML = "Total Dots => " + String(totaldots) +
    "<br>Total While Spaces => " + String(totalWhiteSpaces) + "<br>Total Lines {Magure On Total . Or ?} => " + String(totalLines) + "<br>Total Words(Magure on .) => " + String(totalword) +
     "<br>Total Tabs => " + String(totalTabs);
  }
});



function fetchdata(str){
  for (let i in str){
    if (str[i] == "."){
      totaldots++;
      totalLines++;
    }
    else if (str[i] == " "){
      totalWhiteSpaces++;
      totalword++;
    }
    else if(str[i] == "?"){
      totalLines++;
    }
    else if (str[i] == " " && str[i+1] == " " && str[i+2] == " " && str[i+3] == " "){
        totalTabs++;
      }
    
  }
}