
var canvas = document.getElementById('xxx');
var context = canvas.getContext('2d');
var using = false
var lastPoint = {
  x:undefined,
  y:undefined
}


//画板逻辑

autoSetCanvasSize(canvas)

listenToUser(canvas)

//画笔、橡皮切换
var eraserEnabled = false
pen.onclick = function(){
  eraserEnabled = false
  pen.classList.add('active')
  eraser.classList.remove('active')
}
eraser.onclick = function(){
  eraserEnabled = true
  eraser.classList.add('active')
  pen.classList.remove('active')
}
//画笔颜色
black.onclick = function(){
  context.fillStyle = 'black'
  context.strokeStyle = 'black'
  black.classList.add('active')
  red.classList.remove('active')
  yellow.classList.remove('active')
  blue.classList.remove('active')
  green.classList.remove('active')
  orange.classList.remove('active')
  pink.classList.remove('active')
  purple.classList.remove('active')
  gold.classList.remove('active')
}
red.onclick = function(){
  context.fillStyle = 'red'
  context.strokeStyle = 'red'
  black.classList.remove('active')
  red.classList.add('active')
  yellow.classList.remove('active')
  blue.classList.remove('active')
  green.classList.remove('active')
  orange.classList.remove('active')
  pink.classList.remove('active')
  purple.classList.remove('active')
  gold.classList.remove('active')
}
yellow.onclick = function(){
  context.fillStyle = '#ffe600'
  context.strokeStyle = '#ffe600'
  black.classList.remove('active')
  red.classList.remove('active')
  yellow.classList.add('active')
  blue.classList.remove('active')
  green.classList.remove('active')
  orange.classList.remove('active')
  pink.classList.remove('active')
  purple.classList.remove('active')
  gold.classList.remove('active')
}
blue.onclick = function(){
  context.fillStyle = 'DeepSkyBlue'
  context.strokeStyle = 'DeepSkyBlue'
  black.classList.remove('active')
  red.classList.remove('active')
  yellow.classList.remove('active')
  blue.classList.add('active')
  green.classList.remove('active')
  orange.classList.remove('active')
  pink.classList.remove('active')
  purple.classList.remove('active')
  gold.classList.remove('active')
}
green.onclick = function(){
  context.fillStyle = '#b2d235'
  context.strokeStyle = '#b2d235'
  black.classList.remove('active')
  red.classList.remove('active')
  yellow.classList.remove('active')
  blue.classList.remove('active')
  green.classList.add('active')
  orange.classList.remove('active')
  pink.classList.remove('active')
  purple.classList.remove('active')
  gold.classList.remove('active')
}
orange.onclick = function(){
  context.fillStyle = 'orange'
  context.strokeStyle = 'orange'
  black.classList.remove('active')
  red.classList.remove('active')
  yellow.classList.remove('active')
  blue.classList.remove('active')
  green.classList.remove('active')
  orange.classList.add('active')
  pink.classList.remove('active')
  purple.classList.remove('active')
  gold.classList.remove('active')
}
pink.onclick = function(){
  context.fillStyle = '#f58f98'
  context.strokeStyle = '#f58f98'
  black.classList.remove('active')
  red.classList.remove('active')
  yellow.classList.remove('active')
  blue.classList.remove('active')
  green.classList.remove('active')
  orange.classList.remove('active')
  pink.classList.add('active')
  purple.classList.remove('active')
  gold.classList.remove('active')
}
purple.onclick = function(){
  context.fillStyle = '#8552a1'
  context.strokeStyle = '#8552a1'
  black.classList.remove('active')
  red.classList.remove('active')
  yellow.classList.remove('active')
  blue.classList.remove('active')
  green.classList.remove('active')
  orange.classList.remove('active')
  pink.classList.remove('active')
  purple.classList.add('active')
  gold.classList.remove('active')
}
gold.onclick = function(){
  context.fillStyle = '#ad8b3d'
  context.strokeStyle = '#ad8b3d'
  black.classList.remove('active')
  red.classList.remove('active')
  yellow.classList.remove('active')
  blue.classList.remove('active')
  green.classList.remove('active')
  orange.classList.remove('active')
  pink.classList.remove('active')
  purple.classList.remove('active')
  gold.classList.add('active')
}
//画笔粗细
thin.onclick = function(){
  context.lineWidth = 1
  thin.classList.add('active')
  medium.classList.remove('active')
  thick.classList.remove('active')
}
medium.onclick = function(){
  context.lineWidth = 3
  thin.classList.remove('active')
  medium.classList.add('active')
  thick.classList.remove('active')
}
thick.onclick = function(){
  context.lineWidth = 6
  thin.classList.remove('active')
  medium.classList.remove('active')
  thick.classList.add('active')
}

//画布清除
clear.onclick = function(){
  context.clearRect(0, 0, canvas.width, canvas.height);
}
//画布保存
save.onclick = function(){
  var url = canvas.toDataURL('image/png');
    var a = document.createElement('a');
    document.body.appendChild(a);
    a.href=url;
    a.download='my drawing';
    a.click();                          
}


/********/
/********/
/********/



//自动设置canvas画板宽高
function autoSetCanvasSize(canvas){
  setCanvasSize()
  
  window.onresize = function(){
  setCanvasSize()
  }
}
//防止手机上画板上下移动
function preventBehavior(eee) {
  eee.preventDefault()
}
  
document.addEventListener("touchmove", preventBehavior, false)

//重置canvas画板宽高
function setCanvasSize(){
  var pageWidth = document.documentElement.clientWidth
  var pageHeight = document.documentElement.clientHeight
  canvas.width =pageWidth
  canvas.height = pageHeight
}

//drawLine
function drawCircle(x,y,radius){
  context.beginPath()
  context.arc(x,y,radius,0, Math.PI * 2);
  context.fill()
}

function drawLine(x1, y1, x2, y2){
  context.beginPath()
  context.moveTo(x1, y1)
  context.lineTo(x2, y2)
  context.stroke()
  context.closePath()
}

/**********************/

function listenToUser(canvas){

  //特性检测
  if(document.body.ontouchstart !== undefined){
    //触屏设备
    canvas.ontouchstart = function(aaa){
        var x = aaa.touches[0].clientX
        var y = aaa.touches[0].clientY
        console.log(x,y)
        using = true
        if(eraserEnabled){
          context.clearRect(x - 10,y - 10, 20, 20)
        }else{
          lastPoint = {
          "x":x,
          "y":y
          }
         }
        }
  
    canvas.ontouchmove = function(aaa){
      console.log('边摸边动')
      var x = aaa.touches[0].clientX
      var y = aaa.touches[0].clientY
      
      if(!using){return}
      //(简化了下面两个if(using)
      if(eraserEnabled){
        context.clearRect(x - 5,y - 5, 20, 20)
      }else{
        var newPoint = {
          "x":x,
          "y":y
        }
        drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
        lastPoint = newPoint
        }
    }
    canvas.ontouchend = function(){
      console.log('摸完了')
      using = false
    }
  }else{
    //非触屏设备
    canvas.onmousedown = function(aaa){
      var x = aaa.clientX
      var y = aaa.clientY
      using = true
      if(eraserEnabled){
        context.clearRect(x,y, 15, 15)
      }else{
        lastPoint = {
        "x":x+8,
        "y":y+8
        }
       }
      }
      //鼠标移动监听
      canvas.onmousemove = function(aaa){
      var x = aaa.clientX
      var y = aaa.clientY
      
      if(!using){return}
      //(简化了下面两个if(using)
      if(eraserEnabled){
        context.clearRect(x,y, 15, 15)
      }else{
        var newPoint = {
          "x":x+8,
          "y":y+8
        }
        drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
        lastPoint = newPoint
        }
      
      }
    //鼠标移动监听
    canvas.onmouseup = function(aaa){
      using = false
      }
    }
  }
