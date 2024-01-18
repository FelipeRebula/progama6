
function filtrar(){
var input, filter,ul,a,i,txtvalue,li,count = 0

input =document.getElementById('searchbar');
ul = document.getElementById('listaprodutos');
filter = input.value.toUpperCase();
li = ul.getElementsByTagName("li");
for(i = 0;i<li.length;i++){
    a = li[i].getElementsByTagName("a")[0]
    txtvalue = a.textContent || a.innerText;
    if(txtvalue.toUpperCase().indexOf(filter)>-1){
        li[i].style.display = "flex";
        count++
    }else{
        li[i].style.display = "none"
    }
}







}
//function togglemode() {
  //  const html = document.documentElement
   //if(

      //  html.classList.contains("green")
    //){
    //    html.classList.add("black")
     //}else(
     //  html.classList.add("green")
   //     )
   //html.classList.toggle('black')

//}
//<input type="button" name="trocacor" id="trocacor" onclick="togglemode()">
