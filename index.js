function New_join() {
    window.open("newjoin.html","newjoinpopup","width=400px, height= 400px, left=200, right=200");
  }


function Create(){
    var number = document.getElementById("gugudan").value;
    var guguarray=[];
    if(number == 0){
        alert("chioce the number please!")
    }else{
        for(var i=1; i<=9;i++){
        var numtext = number+"*"+i+"="+(number*i);
        guguarray.push(numtext);
        document.getElementById('gugubox').value = guguarray
        }                    
    }
}
