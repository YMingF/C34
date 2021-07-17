const createList=value=>{
    return createNode(value)
}
//新建链表节点
const appendList=(list,value)=>{
    const node=createNode(value)
    let x=list
    //添加新节点肯定就是找到最后一个节点然后添加
    while(x.next){ //如果x.next不为空的话,就说明还没到最后一个节点
        x=x.next //走到下一个节点
    }
    x.next=node //上面的循环不成立时,将最后一个节点的next设置为我新建的node
    return node
}
//删除链表
const removeFromList=(list,node)=>{
    
    let x=list//存储链表的第一个节点
    let p=node
    while(x!==node && x!==null){ //当前的节点还不是我要删除的节点并且不为空
        p=x  //p来存储好我上一次的节点
        x=x.next //x移动到我下一个节点处
    }
    if(x===null){//若x为null，不需要删除，直接return false.表示无法删除不在list里的节点
        return false
    }else if(x===p){ //说明要删除的是第一个节点
        p=x.next
        return p  //如果删除的是第一个节点,将新list的头结点p返回到外面,这个p就是对应的地址,即 newList = removeFromList(list, list)

    }else{
        p.next=x.next //将上一个节点的next设置成要删除节点的next,这样就能够起到删除当前节点node的功能
        return list //如果不是删除的第一个节点,返回原来的list就行,因为本身就是对list进行的修改  
    }
    
}
const createNode=value=>{
    return {
        data:value,
        next:null
    }
}
const list=createList(10)
//新建并添加节点
const node1=appendList(list,20)
const node2=appendList(list,30)
const node3=appendList(list,40)
console.log(`添加节点后的链表`)
console.log(list)
setTimeout(()=>{return true},13000)
//删除普通节点
removeFromList(list,node2)
console.log(`删除节点node2后的链表`)
console.log(list)
//删除头结点
const node=list
const newList=removeFromList(list,node)//还得通过这样的方法得到删除头节点后的新列表
console.log(`删除了头节点后的链表：`)
console.log(newList)
//遍历查询列表
const travelList=(list,fn)=>{
    let x=list 
    while(x!==null){
        fn(x)
        x=x.next
    }

}
travelList(list,node=>{     //调用travelList的同时去定义一个函数打印出节点的数据
    console.log(node.data)//打印出当前节点的数据
})