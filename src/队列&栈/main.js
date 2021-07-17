const divScreen=document.querySelector('#screen')
const btnCreatNumber=document.querySelector('#creatNumber')
const btnCallNumber=document.querySelector('#callNumber')
const spanNewNumber=document.querySelector('#newNumber')
const spanQueue=document.querySelector('#queue')

let n=0;
let queue=[]

btnCreatNumber.onclick=()=>{

    n+=1
    queue.push.call(queue,n)//入队
    spanNewNumber.innerText=`当前是第${n}号`
    spanQueue.innerHTML=JSON.stringify(queue)//转换成同等显示类型的字符串
}

btnCallNumber.onclick=()=>{
    if(queue.length===0){alert('没号了大哥')}
    
    const s=queue.shift.call(queue)
    
    divScreen.innerHTML=`请第${s}号用餐`
    spanQueue.innerHTML=JSON.stringify(queue)
    }