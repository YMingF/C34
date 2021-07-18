console.log('tree')
const createTree=value=>{//告诉根节点的值
    return {
        data:value,
        children:null,
        parent:null //用于记录父节点
    }
} 
const addChild=(node,value)=>{ //给节点node添加新节点值为 value 
    const newNode={
        data:value,
        children:null,
        parent:node //新建节点的父节点为node
    }
    node.children=node.children || [] //之前讲到的或运算,返回第一个为true的式子的返回值,要么是等于自己,要么是返回一个空数组
    node.children.push(newNode)
    return newNode  //返回新建的节点
}
const travel=(tree,fn)=>{
    fn(tree)//调用函数处理数
    if(!tree.children){return}
    for(let i=0;i<tree.children.length;i++){
        travel(tree.children[i],fn)
    }
}
// const find=(tree,node)=>{ //从数里面去查找一个节点,被废弃使用,因为发现没有用武之地
//     if(tree===node){
//         return tree 
//     }
//     else if(tree.children){
//         for(let i=0;i<tree.children.length;i++){
//             const result=find(tree.children[i],node )
//             if(result){return result}
//         }
//         return undefined 


//     }
//     else{
//         return undefined
//     }
// }
const removeNode=(tree,node)=>{
    console.log(`我要删除的节点是：`)
    console.log(node)
    console.log('------')
    const siblings=node.parent.children //得到父节点的所有子元素
    let index=0
    console.log(`当前父节点的子元素有：`)
    for(let i=1;i<siblings.length;i++){ //至于为啥这里 i从1开始而不从0开始,是因为你前面index已经设置成了0,那我就可跳过第一个,直接从索引1开始找。如果后面的都找不到,这时index已经等于0了,同样可以删除掉第一个咯;
        
        console.log(siblings[i])
        if(siblings[i]===node){
            index=i
        }
    }
    siblings.splice(index,1)
}
const tree=createTree(10)
const node2=addChild(tree,20)
const node3=addChild(tree,30)
addChild(tree,40)
addChild(tree,50)
addChild(node2,201)
addChild(node2,203)
addChild(node2,204)

console.log(tree)
const fn=node=>{
    console.log(node.data)
}
travel(tree,fn)
console.log('开始删除节点：')
removeNode(tree,node2)

// console.log(tree)