<template >
  <div class="home"  v-if="$store.state.language === 'spanish' || $store.state.language === 'english'">
   
    <div class="wrapper" v-if="$store.state.language == 'english'" >
     <div v-on:click="openChat()" class="container"><img src="../assets/raptoreumworld.png" alt=""></div>
     <div  v-on:click="openSurveys()" class="container"><img src="../assets/scoredsurveys.png" alt=""></div>
     <div   v-on:click="openGames()"  class="container"><img src="../assets/raptogames.png" alt=""></div>

  </div>


    <div class="wrapper" v-if="$store.state.language == 'spanish'">
     <div v-on:click="openChat()" class="container"><img src="../assets/raptoreummundial.png" alt=""></div>
     <div  v-on:click="openSurveys()" class="container"><img src="../assets/encuestas.png" alt=""></div>
     <div  v-on:click="openGames()" class="container" ><img src="../assets/raptojuegos.png" alt=""></div>
    </div>

  </div>

  <div  v-if="$store.state.language=='spanish' && !$store.state.token"  class="footer">
    <div class="time">Desarrollado por Rapto Verdad</div>
  </div>
  <div  v-if="$store.state.language=='english' && !$store.state.token" class="footer">
    <div class="time">powered by Rapto Verdad</div>
  </div>

  <div  v-if="$store.state.language=='spanish' && $store.state.token"  class="footer">
  <div class="time"> <i class="fa-solid fa-gear" v-if="$store.state.token" v-on:click="openSettings">configuración</i></div> 
  </div>
  <div  v-if="$store.state.language=='english' && $store.state.token" class="footer">
    <div class="time"><i class="fa-solid fa-gear" v-if="$store.state.token" v-on:click="openSettings">user settings</i></div>
  </div> 


</template>

<script>
// @ is an alias to /src
import router from '../router/index.js'

export default {
  name: 'homeView',
  components: {

  },
  methods:{
    openGames(){
this.$router.push('games')
}, openAbout(){
this.$router.push('about')
},openContracts(){
  this.$router.push('smartcontracts')
}
,openSurveys(){
  this.$router.push('surveys')
}
,openStatistics(){
  this.$router.push('statistics')
}
,openChat(){

  window.location.href='https://theraptoreumtruth.netlify.app/chat'

},openSettings(){

  window.location.href='https://theraptoreumtruth.netlify.app/userSettings'
}
  }
}
</script>
<style scoped>

*{
  box-sizing: border-box;
  margin: 0;
padding: 0;
}

  .home{
    height: min-content;
    max-width: 100vw;
    overflow: hidden;
  
  }
.wrapper{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px; /*The space between grid containers*/
  grid-auto-rows:80vh;
  animation: background 3s infinite;
  padding: 5px 0;
  max-width: 100vw;
 overflow-x: hidden;
}
.container{
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
background-color: #000;
cursor: pointer;
overflow: hidden;
}
.container:hover{
  transform: rotateY(360deg);
  transition: 1s;
}
.container img{

  height: 60%;
}
.footer{
  position:sticky;
  bottom: 0;
  max-width:100vw ;
  height: 5vh;
  background-color: #000;
  background: rgba(0, 0,0, 1);
  overflow: hidden;
}
  .time{
    display: flex;
    justify-content:center ;
    align-items: center;
    max-width:100%;
    height: 100%;
    color: #f00;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    cursor: pointer;
  }

  @keyframes background{
0%{
background-color: #000;
}
50%{
  background-color: #f00;
}
100%{
  background-color: #000;
}
}
@media (max-width: 1200px) {
  .wrapper{
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 5px; /*The space between grid containers*/
  grid-auto-rows:minmax(50vh,50vh);
  animation: background 3s infinite;
  padding:   5px 0px;
  max-width: 100vw;
 
}
.container img{

height: 80%;
}
}
</style>