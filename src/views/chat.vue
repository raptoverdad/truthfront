<template>
<div class="chatDiv"  v-if="$store.state.language === 'spanish' || $store.state.language === 'english'">

  <div class="arrowDiv"> <i id='arrow' class="fa-solid fa-turn-down" v-on:click="arrow()"></i>
  <label class='arrowLabel' v-if="$store.state.language === 'english'" for="arrow" >last message</label>
  <label class='arrowLabel' v-if="$store.state.language === 'spanish'" for="arrow" >ultimo mensaje</label>
</div>

 
  <h1 style="font-family:'Kanit' , sans-serif;color: #f00;" >truth chat</h1>
  <div class="chatBox">
   <div class="chatMessage" v-for="item in messages"><img class="chatProfilePicture" v-bind:src="item.profilepicture" alt=""><h1 class="chatUser">{{item.user + ':'}}</h1> <p class="chatUserMessage">{{item.mensaje}}</p></div>
  </div>
   <div class="chatOptions">
     <input class="messageInput" v-model="message" type="text">
     <input type="button" class="sendButton" v-on:click="sendMessage()" value="send">
   </div>
</div>
</template>
<script>
import {io} from 'socket.io-client'
import axios from 'axios'
const socket=io('https://truthbackendsockets-production.up.railway.app/',{
  withCredentials:false,
  extraHeaders:{
    "Access-Control-Allow-Origin":null
  }
})
export default {
  name: 'chat',
  data(){
return{
  messages:[],
  message:''
}
  },
  components: {

}, 
created(){
  axios.get(`https://truthbackend1-production.up.railway.app/settings/${localStorage.getItem('token')}`)
     .then(res=>{
      console.log(res)
      if(res.data.success==='true'){
        localStorage.removeItem('user')
        localStorage.removeItem('picture')
        localStorage.removeItem('email')
        localStorage.setItem('user',res.data.username)
        localStorage.setItem('email',res.data.email)
        localStorage.setItem('picture',res.data.picture)
  
      alert('welcome to the chat'+' '+localStorage.getItem('user')+'!')
   }
  }).catch(err=>{
 
     localStorage.removeItem('user')
     localStorage.removeItem('picture')
     localStorage.removeItem('token')
     localStorage.removeItem('email')
     
 
  })
},
mounted(){

setTimeout(() => {
  const observerFunction2=entries2=>{
const entry2 = entries2[0]
console.log(entry2.isIntersecting)
if(entry2.isIntersecting===false){
document.querySelector('.fa-solid').style.display='inline'
document.querySelector('.arrowLabel').style.display='inline'
}else if(entry2.isIntersecting===true){
  document.querySelector('.fa-solid').style.display='none'
  document.querySelector('.arrowLabel').style.display='none'
}

}
const observer2 = new IntersectionObserver(observerFunction2)

observer2.observe(document.querySelector('.chatBox').lastElementChild)
}, "3000")


socket.on('connect',()=>{
socket.emit('chatVisitor')
})
socket.on('chatMessages',(datos)=>{
this.messages=datos
console.log('messages:',this.messages)
})
socket.on('permission',()=>{
alert('invalid credentials//credenciales invalidas')
})
socket.on('message-status',()=>{
alert('something went wrong please try again later//algo salió mal, porfavor intentelo denuevo')
})
socket.on('chatMessages',(datos)=>{
t
his.messages=datos
console.log('messages:',this.messages)
})

}
,
methods:{
sendMessage(){

document.querySelector('.chatBox').lastElementChild.scrollIntoView({behavior: "smooth", block: "end", });
setTimeout(() => {
    document.querySelector('.chatBox').scrollBy(0,40000000)
}, "0500")

  console.log('frontend message:',this.message)
  axios.get(`https://truthbackend1-production.up.railway.app/settings/${localStorage.getItem('token')}`)
     .then(res=>{
      console.log(res)
      if(res.data.success==='true'){
        localStorage.removeItem('user')
        localStorage.removeItem('picture')
        localStorage.removeItem('email')
        localStorage.setItem('user',res.data.username)
        localStorage.setItem('email',res.data.email)
        localStorage.setItem('picture',res.data.picture)
        socket.emit('new-message',{user:localStorage.getItem('user'),message:this.message,profilepicture:localStorage.getItem('picture'),email:localStorage.getItem('email')})
  }
  }).catch(err=>{
 alert('please login or create an account // porfavor inicie sesion o cree una nueva cuenta')

 window.location.href='http://localhost:8080/'
})
},
arrow(){
  document.querySelector('.chatBox').lastElementChild.scrollIntoView({behavior: "smooth", block: "start", });
setTimeout(() => {
    document.querySelector('.chatBox').scrollBy(0,100000)
}, "0500")
}
}
}
  </script>
  <style scoped>
.chatDiv{
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
min-height: 90vh;
width: 100%;
max-height: 90vh;
background-color: #222;
}
.chatBox{
background: #000;
width: 70vw;
height: 70vh;
overflow-y: scroll;
overflow-x:hidden;
}
.div{
  color: #f00;
}
.messageInput{
  width: 61vw;
  height: 4vh;
}

.chatProfilePicture{
  max-height: 10%;
max-width: 10%;
}
.chatUser{
  color: #f00;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  margin-left:2vh ;
  max-width: 30%;
}
.chatMessage{
  display: flex;
  align-items: center;
  width: 70vw;
  
  height: min-content;
  word-wrap: break-word; /*solucion al problema de las frases muy largas*/
}
.chatUser{

}
.sendButton{
width: 8vw;
height: 6vh;
background-color: #000;
color: #f00;
border: 3px solid #f00;
font-weight: bold;
font-size: x-large;
cursor: pointer;
}
.chatOptions{
  display: flex;
  justify-content: center;
  align-items: center;
}
.chatUserMessage{
  color: #fff;
  font-size: x-large;
  margin: 2vh;
  max-width: 40%;
 word-wrap: break-word; 
}
.arrowDiv{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 100;
  color: #fff;
  font-size: 12vh;
  right: 6vh;
  transition: 1s;
  cursor: pointer;
}
label{
  font-family: 'Kanit', sans-serif;
  font-size: x-large
;
}
@media(max-width: 1450px){
  .arrowDiv{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 100;
  color: #fff;
  font-size: 12vh;
  right: 2vh;
  transition: 1s;
  width: 20vh;
  cursor: pointer;
  text-align: center;
}
}
@media(max-width: 1000px){
.chatOptions{
  flex-direction: column;
  width: 100%;
}
.chatBox{
background: #000;
width: 100%;
height: 70vh;
overflow-y: scroll;
overflow-x:hidden;
}
.chatMessage{
  display: flex;
  align-items: center;
  width: 100%;
  
  height: min-content;
  word-wrap: break-word; /*solucion al problema de las frases muy largas*/
}
.chatUser{
  color: #f00;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  margin-left:2vh ;
  max-width: 30%;
  font-size: x-large;
}
.sendButton{
width: 97%;
height: 6vh;
background-color: #000;
color: #f00;
border: 3px solid #f00;
font-weight: bold;
font-size: x-large;
cursor: pointer;
}
.messageInput{
  width:96%;
  height: 4vh;
}

.arrowDiv{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 100;
  color: #fff;
  font-size: 12vh;
  right: 2vh;
  transition: 1s;
  width: 10vh;
  cursor: pointer;
  text-align: center;
}
}
@media(max-width: 900px){
  .arrowDiv{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 100;
  color: #fff;
  font-size: 6vh;
  right: 2vh;
  transition: 1s;
  width: 10vh;
  cursor: pointer;
  text-align: center;
}
label{
  font-family: 'Kanit', sans-serif;
  font-size:small
;
}
}
  </style>