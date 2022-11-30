<template >
    <div class="surveys"  v-if="$store.state.language === 'spanish' || $store.state.language === 'english'" >
      <h1 v-if="$store.state.language === 'english' " class="title">scored surveys (real votes in real time)</h1> <h1 v-if="$store.state.language === 'spanish' " class="title">encuestas (votos reales en tiempo real)</h1>
       <div class="surveysList">
          <div class="survey miningPools">
                <h1 class="question"  v-if="$store.state.language === 'english' ">what mining pool do you like better?</h1><h1 class="question"  v-if="$store.state.language === 'spanish' ">¿cual es tu pool de mineria favorita?</h1>
                <div class="options">
                           <div><img class="shareNodeOption" src="@/assets/raptoreumzone.jpg" v-on:click="surveyvote('raptoreumzone')" alt=""><h1 class="votes">{{raptoreumzonevotes}} votes</h1></div> 
                           <div> <img class="shareNodeOption" src="@/assets/raptorhash.jpg" v-on:click="surveyvote('raptorhash')" alt=""><h1 class="votes">{{raptorhashvotes}} votes</h1></div>
                           <div> <img class="shareNodeOption" src="@/assets/flockpool.png" v-on:click="surveyvote('flockpool')" alt=""><h1 class="votes">{{flockpoolvotes}} votes</h1> </div>  
                           <div><img class="shareNodeOption" src="@/assets/minafacil.jpg" v-on:click="surveyvote('minafacil')" alt=""><h1 class="votes">{{minafacilvotes}} votes</h1></div> 
                </div>
          </div>
          <div class="survey share nodes">
            <h1 class="question"  v-if="$store.state.language === 'english' ">what sharenode service do you like better?</h1>  <h1 class="question"  v-if="$store.state.language === 'spanish' ">¿que servicio de nodos compartidos prefieres?</h1>
               <div class="options">
                  <div><img class="shareNodeOption" v-on:click="surveyvote('sullynode')" src="@/assets/sully.png" alt=""><h1 class="votes">{{sullynodevotes}} votes</h1></div> 
                  <div> <img class="shareNodeOption" v-on:click="surveyvote('inodez')" src="@/assets/inodez.jpg" alt=""><h1 class="votes">{{inodezvotes}} votes</h1></div>  
               </div>
          </div>
          <div class="survey developersWork">
            <h1 class="question"  v-if="$store.state.language === 'english' ">the raptoreum development has been...</h1>  <h1 class="question"  v-if="$store.state.language === 'spanish' ">el desarrollo de raptoreum ha sido...</h1>
              <div class="options">
              <div> <h1 class="developersWorkOption" v-if="$store.state.language === 'english' " v-on:click="surveyvote('fast')" id="fast">fast</h1><h1  v-if="$store.state.language === 'spanish' " class="developersWorkOption" v-on:click="surveyvote('fast')" id="fast">rapido</h1><h1 class="votes">{{fastvotes}} votes</h1> </div>      <div><h1 class="developersWorkOption"  v-if="$store.state.language === 'english' " v-on:click="surveyvote('slow')" id="fast">slow</h1><h1 class="developersWorkOption"  v-if="$store.state.language === 'spanish'" v-on:click="surveyvote('slow')" id="fast">lento</h1><h1 class="votes">{{slowvotes}} votes</h1></div>
              </div>
          </div>
          <div class="survey youtubers">
            <h1  v-if="$store.state.language === 'english' "  class="question">what youtuber do you like better?</h1>   <h1  v-if="$store.state.language === 'spanish' "  class="question">¿que youtuber te gusta más?</h1>
              <div class="options">
                <div><img class="shareNodeOption" v-on:click="surveyvote('bit')" src="@/assets/bit.jpg" alt=""><h1 class="votes">{{bitvotes}} votes</h1> </div>
                 <div><img class="shareNodeOption" v-on:click="surveyvote('charlie')" src="@/assets/charlie.jpg" alt=""><h1 class="votes">{{charlievotes}} votes</h1> </div>  
                  <div> <img class="shareNodeOption" v-on:click="surveyvote('verdad')" src="@/assets/verdad.jpg" alt=""><h1 class="votes">{{verdadvotes}} votes</h1> </div>
                   <div><img class="shareNodeOption" v-on:click="surveyvote('rabid')" src="@/assets/rabid.jpg" alt=""><h1 class="votes">{{rabidvotes}} votes</h1> </div>
              </div>
          </div>
          <div class="survey bestMascot">
            <h1 class="question"  v-if="$store.state.language === 'english' "  >what raptoreum mascot do you like better?</h1> <h1 class="question"  v-if="$store.state.language === 'spanish' "  >¿que mascota de raptoreum te gusta más?</h1> 
              <div class="options">
                 <div><img class="shareNodeOption" v-on:click="surveyvote('zlatachan')"  src="@/assets/raptochan1.jpg" alt=""><h1 class="votes">{{zlatachanvotes}} votes</h1> </div>  
                  <div><img class="shareNodeOption" v-on:click="surveyvote('verdadchan')" src="@/assets/raptochan2.png" alt=""><h1 class="votes">{{verdadchanvotes}} votes</h1> </div> 
              </div>
          </div>
          <div class="survey marketingWork">
            <h1  v-if="$store.state.language === 'english' " class="question">rains are rigged?</h1>    <h1  v-if="$store.state.language === 'spanish' " class="question">¿las lluvias están amañadas?</h1>
            <div class="options">
               <div><h1 class="developersWorkOption" v-if="$store.state.language === 'english' "  v-on:click="surveyvote('yes')"  id="yes">yes</h1><h1 class="developersWorkOption" v-if="$store.state.language === 'spanish' "  v-on:click="surveyvote('yes')"  id="yes">si</h1><h1 class="votes">{{yesvotes}} votes</h1></div>   <div><h1 class="developersWorkOption"  v-if="$store.state.language === 'english'"   v-on:click="surveyvote('no')"  id="no">no</h1><h1  v-if="$store.state.language === 'spanish'" class="developersWorkOption"   v-on:click="surveyvote('no')"  id="no">no</h1><h1 class="votes">{{novotes}} votes</h1></div> 
            </div>
          </div>
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
  name: 'surveysView',

  components: {

},data(){
return{
  raptoreumzonevotes:0,
  flockpoolvotes:0,
  raptorhashvotes:0,
  minafacilvotes:0,
  inodezvotes:0,
  sullynodevotes:0,
  fastvotes:0,
  slowvotes:0,
  bitvotes:0,
  charlievotes:0,
  verdadvotes:0,
  rabidvotes:0,
  zlatachanvotes:0,
  verdadchanvotes:0,
  yesvotes:0,
  novotes:0
}
},
created(){
  axios.get(`https://truthbackend1-production.up.railway.app/settings/${localStorage.getItem('token')}`)
     .then(res=>{

      if(res.data.success==='true'){
        localStorage.removeItem('user')
        localStorage.removeItem('picture')
        localStorage.removeItem('email')
        localStorage.setItem('user',res.data.username)
        localStorage.setItem('email',res.data.email)
        localStorage.setItem('picture',res.data.picture)
  
      alert('time to say the truth!//¡hora de decir la verdad!')
   }
  }).catch(err=>{
 
     localStorage.removeItem('user')
     localStorage.removeItem('picture')
     localStorage.removeItem('token')
     localStorage.removeItem('email')
    })
},
mounted(){

socket.emit('surveysVisitor')
socket.on('surveysvotes',data=>{

 this.raptoreumzonevotes=data.raptoreumzonevotes
 this.flockpoolvotes=data.flockpoolvotes
 this.raptorhashvotes=data.raptorhashvotes
 this.minafacilvotes=data.minafacilvotes
 this.inodezvotes=data.inodezvotes
 this.sullynodevotes=data.sullynodevotes
 this.fastvotes=data.fastvotes
 this.slowvotes=data.slowvotes
 this.bitvotes=data.bitvotes
 this.charlievotes=data.charlievotes
 this.verdadvotes=data.verdadvotes
 this.rabidvotes=data.rabidvotes
 this.zlatachanvotes=data.zlatachanvotes
 this.verdadchanvotes=data.verdadchanvotes
 this.yesvotes=data.yesvotes
 this.novotes=data.novotes
})

},
methods:{
    goToHome:()=>{
        window.location.href="https://theraptoreumtruth.netlify.app/"
    },
    surveyvote(vote){
      axios.get(`https://truthbackend1-production.up.railway.app/settings/${localStorage.getItem('token')}`)
     .then(res=>{

      if(res.data.success==='true'){
        localStorage.removeItem('user')
        localStorage.removeItem('picture')
        localStorage.removeItem('email')
        localStorage.setItem('user',res.data.username)
        localStorage.setItem('email',res.data.email)
        localStorage.setItem('picture',res.data.picture)
  
        socket.emit('surveyvote',{user:localStorage.getItem('user'),email:localStorage.getItem('email'),profilepicture:localStorage.getItem('picture'),vote:vote})
   }
  }).catch(err=>{
     alert('please login or create a new account // porfavor inicie sesion o cree una nueva cuenta')
     localStorage.removeItem('user')
     localStorage.removeItem('picture')
     localStorage.removeItem('token')
     localStorage.removeItem('email')
    })

    }
}
}
</script >

<style scoped>
.title{
    text-align: center;
    color: #f00;
    font-family:'Kanit' , sans-serif ;
}
    
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
.surveys{
        min-height: min-content;
        min-width: 100%;
        background-color: black;
        display: flex;
       flex-direction: column;
    }
.surveysList{
     height: 100%;
     width: 100%;
     display: flex;
     flex-direction: column;
   
    }
    .survey{
        min-height: min-content;
        background: #222;
        border: 4px solid #f00;
        display: flex;
        flex-direction: column;
        justify-content:space-around;
        align-items: center;
        
    }
    .question{
        font-family:'Kanit' , sans-serif ;
        color: #fff;
        text-align: center;
    }
.options{
    display: flex;
    width: 50%;
    flex-direction: row;
    justify-content:space-evenly;
    align-items: center;
    min-height:20vh ;
 
}
.developersWorkOption{
    color: #fff;
    cursor: pointer;
    font-family:'Kanit' , sans-serif;
    margin-right: 10%;
}
.developersWorkOption:hover{
    color: #f00;
    font-family:'Kanit' , sans-serif;
}
.shareNodeOption{
 width: 13vh;
 height: 13vh;
 cursor: pointer;
}
.shareNodeOption:hover{
border: 3px solid #f00;
}
.options div{

  width: 25%;
  display: flex;
  align-items: center;

}
.votes{
  text-align: center;
  font-family:'Kanit' , sans-serif;
  color: #fff;
}
@media(max-width: 1400px){
.options{
  width: 100%;
  flex-direction: column;
}
}
</style>