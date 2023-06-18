// har sanie ye taqiri ro site anjam mishe pas niaz be ye setinterval darim 
//az date get hour o getminute o getsecond mikonim
//harkodom yereqami bud poshtesh ye 0 mizarim 
//harkodom az get hour minute va second ro harsanie anjam midim va mindazim dakhele div safhe 
//


const hourElem = document.getElementById('hour')
const minuteElem = document.getElementById('minute')
const secondElem = document.getElementById('seconds')

// har yek sanie yebar in balaia ro baiad avaz konim 

 // let myDate = new Date()  // vaqti ejra begirim timi k in khat ejra shode ro faqat namaiesh mide . pas jash ro avaz mikonim 


setInterval(function(){
let myDate = new Date()  // injori etelaat hamon lahze ro migirim 

let nowHour = myDate.getHours()   // az ina bara mohtava variable haii k bala entekhab kardim estefade mikonim 
let nowMinute = myDate.getMinutes()
let nowSecond = myDate.getSeconds()

if(nowHour < 10 ){
    nowHour = '0' + nowHour
}
else if(nowMinute < 10 ){
    nowMinute = '0' + nowSecond
}
else if(nowSecond < 10 ){
    nowSecond = '0' + nowSecond
}
hourElem.innerHTML = nowHour
minuteElem.innerHTML = nowMinute
secondElem.innerHTML = nowSecond


console.log(myDate);
},1000)
