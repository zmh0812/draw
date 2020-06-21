var data = [2017000011, 2017000014, 2017000007, 2017000013, 2017000017,
            2017000020, 2017000030, 2017000051, 2017000023, 2017000064];
var index = 1;  //控制滚动
var isDraw = false;     //控制开始停止
var myL = document.getElementsByClassName("d");

//开始一次抽奖
function start(){  
    var timeRun = 0;
    var t = setInterval(function(){
        if(index === data.length) index = 0;       
        //i指向列表,j指向data
        for(var i = 0, j = index; i < myL.length; i++, j++){
            if(j === data.length) j = 0;
            myL[i].innerHTML = data[j];
        }
        index++;
        isDraw = true;
        timeRun += 1;
        //抽奖结束条件
        if(timeRun === 7){
            clearInterval(t);
            showResult();
        } 
    }, 1000);
}

function showResult(){
    var t = myL[3].innerHTML;
    var e = document.getElementById("show");
    e.innerHTML = t;
}