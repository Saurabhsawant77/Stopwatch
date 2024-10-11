let hh = 0;
let mm = 0;
let ss = 0;
let ms = 0;
let run = false;
let interval;

let arr = [];

console.log(hh+mm+ss+ms);


const hour = document.getElementById('hh');
const minute = document.getElementById("mm");
const seconds = document.getElementById("ss");
const milliseconds = document.getElementById("ms");


function updateValues(){
    hour.innerText = String(hh).padStart(2,'0');
    minute.innerText = String(mm).padStart(2,'0');
    seconds.innerText = String(ss).padStart(2,'0');
    milliseconds.innerText = String(ms).padStart(3,'0');
}

function stopWatch(){
    console.log("Hello Welcome to Stopwatch function");
    if(!run){
        interval = setInterval(function(){
            ms += 10 ;

            if(ms >= 1000){
                ss++;
                ms = 0;
            }

            if(ss >= 60){
                mm++;
                ss = 0;
            }

            if(mm >= 60){
                hh++;
                mm = 0;
            }

             updateValues();  
            //  console.log(hh + " : " + mm + " : " + ss + " : " + ms);         
        },10)

        
    }
}

function start(){
    stopWatch();
    document.getElementById('start').disabled = true;
}

function stop() {
    document.getElementById('prev-record').style.display = 'flex';
    run = false;
    clearInterval(interval);
    hh = String(hh).padStart(2,'0');
    mm = String(mm).padStart(2,'0');
    ss = String(ss).padStart(2,'0');
    ms = String(ms).padStart(3,'0');
    const currentTime = `${hh} : ${mm} : ${ss} : ${ms}`;

    if(hh==='00' && mm==='00'&& ss ==='00'&& ms==='000'){
    document.getElementById('prev-record').style.display = 'none';
    return ;
    }
    else{
    document.getElementById('prev-record').style.display = 'flex';
    }


    if (!arr.includes(currentTime)) {
        arr.push(currentTime);
        const recordsContainer = document.getElementsByClassName("records")[0];
        recordsContainer.innerText = ""; 
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
            recordsContainer.innerHTML +=  '<p>' + arr[i] + '</p>'; 
        }
    } else {
        alert("Already Existing Time : " + currentTime);
    }
    document.getElementById('start').disabled = false;
}

function reset(){
    run = false;
    clearInterval(interval);
    hh = 0;
    mm = 0;
    ss = 0;
    ms = 0;
    updateValues();
    arr = [];
    const recordsContainer = document.getElementsByClassName("records")[0];
    recordsContainer.innerHTML = "";
    document.getElementById('start').disabled = false;
    document.getElementById('prev-record').style.display = 'none';

}
