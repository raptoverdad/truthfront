<template >
    <div class="login"  v-if="$store.state.language === 'spanish' || $store.state.language === 'english'">
    <!-- modals -->
      <div class="userError" v-if="$store.state.userError && $store.state.language == 'english'">
        <h1  style="font-family: 'Kanit', sans-serif;">you are not registered </h1>
    <button v-on:click="$store.commit('goRegister')">understood</button>
    </div>
      <div class="userError" v-if="$store.state.userNotVerified && $store.state.language == 'english'">
        <h1  style="font-family: 'Kanit', sans-serif;">please verify your email</h1>
    <button v-on:click="$store.commit('goVerify')">understood</button>
    </div>
    <div class="userError" v-if="$store.state.loginError && $store.state.language == 'english'">
        <h1  style="font-family: 'Kanit', sans-serif;">there was an error please try again later</h1>
    <button v-on:click="$store.commit('goError')">understood</button>
    </div>

    <div class="userError" v-if="$store.state.credentialError && $store.state.language == 'english'">
        <h1  style="font-family:'Kanit', sans-serif;">invalid credentials please login again or try again later</h1>
    <button v-on:click="$store.commit('credentialErrorFalse')">understood</button>
    </div>

    <div class="userError" v-if="$store.state.language == 'english' && $store.state.token">
        <h1  style="font-family: 'Kanit',sans-serif;">Hi {{$store.state.username}} ! you are already logged. </h1>
    <button v-on:click="goToHome">go to home</button>
    </div>
    <!--spanish modals -->

    <div class="userError" v-if="$store.state.userError && $store.state.language == 'spanish'">
        <h1  style="font-family:'Kanit', sans-serif;">no estás registrado </h1>
    <button v-on:click="$store.commit('goRegister')">entendido</button>
    </div>
      <div class="userError" v-if="$store.state.userNotVerified && $store.state.language == 'spanish'">
        <h1  style="font-family:'Kanit', sans-serif;">porfavor verifica tu email</h1>
    <button v-on:click="$store.commit('goVerify')">entendido</button>
    </div>
    <div class="userError" v-if="$store.state.loginError && $store.state.language == 'english'">
        <h1  style="font-family:'Kanit', sans-serif;">hubo un error por favor intenta denuevo</h1>
    <button v-on:click="$store.commit('goError')">entendido</button>
    </div>

    <div class="userError" v-if="$store.state.credentialError && $store.state.language == 'english'">
        <h1  style="font-family:'Kanit', sans-serif;">credenciales invalidas porfavor intenta iniciar sesion nuevamente o intentalo mas tarde</h1>
    <button v-on:click="$store.commit('credentialErrorFalse')">entendido</button>
    </div>

    <div class="userError" v-if="$store.state.language ==='spanish' && $store.state.token">
        <h1  style="font-family:'Kanit',sans-serif;">Hola {{$store.state.username}} ! tu sesión ya está iniciada. </h1>
    <button v-on:click="goToHome">ir a inicio</button>
    </div>
    <!-- /modals -->
        <div class="log">
       
        <div class="info" v-if="$store.state.language == 'english'">
            <h1 style="color:#fff;font-size:4vh">Hi Raptorean!</h1><h1 style="color:#f00;font-size:4vh">nice to see you again.</h1>
        </div>
                
        
        <div class="info" v-if="$store.state.language == 'spanish'">
            <h1 style="color:#fff;font-size:4vh">Hola raptoreano!</h1><h1 style="color:#f00;font-size:4vh">un gusto verte denuevo.</h1>
        </div>

        <form class="form" v-if="$store.state.language == 'english'" v-on:submit.prevent="$store.commit('loginPost')">

            <h1 style="color:#f00;font-size: 6vh;font-family: 'Kanit', sans-serif" >Login</h1>
           
            <label for="email">email</label>
            <input id="email" v-model="$store.state.loginEmail" type="email">
            <label for="password">password</label>
            <input id="password" v-model="$store.state.loginPassword" type="password">
            <input type="submit" style="font-family: 'Kanit', sans-serif;" class='submit' value="log in">
           
            <div class="error" v-if="error">something's wrong with the server, try again later</div>
        
        </form>

        <form class="form" v-if="$store.state.language == 'spanish'" v-on:submit.prevent="$store.commit('loginPost')">

<h1 style="color:#f00;font-size: 6vh;font-family: 'Kanit', sans-serif" >ingreso</h1>

<label for="email">correo</label>
<input id="email" v-model="$store.state.loginEmail" type="email">
<label for="password">contraseña</label>
<input id="password" v-model="$store.state.loginPassword" type="password">
<input type="submit" style="font-family: 'Kanit', sans-serif;" class='submit' value="ingresar">

<div class="error" v-if="error">hubo un error con el servidor porfavor intentalo mas tarde</div>

</form>

        </div>
        
    </div>
</template>

<script>
import axios from 'axios'
import createStore from '@/main.js'
    export default {
  name: 'loginView',
  createStore,
  components: {

},data(){

},
beforeCreate(){
    
},
methods:{
    goToHome:()=>{
        window.location.href="https://theraptoreumtruth.netlify.app/"
    }
}
}
</script >

<style scoped>
    
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
    .login{
        height: 90vh;
        width: 100%;
        background-color: black;

    }
    .logbackground{
        display: flex;
        justify-content: center;
        align-items: center;
        height:90vh;
        width: 100%;
       background-color: #151515;
    }
    .log{
        display: flex;
        justify-items: center;
        align-items: center;
        background-color:#000;
        height: min-content;
    }
    .info{
        background: transparent  !important;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        height:90vh;
        width: 50vw;
        font-family: 'Kanit', sans-serif;

    }
    form{

        flex-direction: column;
     
        justify-content: center;
        align-items: center;
        display: flex;
        height:100%;
        width: 50%;

    }
.raptologo{
  height: 30vh;
  width: 30vh;
  animation: raptoreumlogo 2s cubic-bezier(.63,.63,.75,.76)  both infinite;
}
label{
    margin:1vh;
    color: #fff;
    font-size: 5vh;
    font-family: 'Kanit', sans-serif;
}
.submit{
    margin-top: 5vh;
    width: 20vw;
    cursor: pointer;
    border:2px solid #fff;
    
}

#password,#email{
    width: 20vw;
    border: none;
    border-bottom:2px solid #f00;
}
input{
    background-color: transparent;
    color: #fff;
    outline: none;
    border-bottom: 2px solid #f00;
    font-size: 5vh;
}
.submit:hover{
    background-image: linear-gradient(#000,red);
 color: #fff;
}
.userError{
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 110%;
    width: 100vw;
    background-color: #151515;
    z-index: 10;
  
  }
  .userError h1{
    color: #fff;
    text-align: center;
  
  
  }
  .userError button{
    margin-top: 5vh;
    width: 20vw;
    height: 5vh;
    cursor: pointer;
    border:2px solid #fff;
    background: transparent;
    color: #fff;
 font-family: 'Kanit', sans-serif;
 font-weight: 900;
  }

@keyframes raptoreumlogo {
    
    0%{
        transform: rotateY(0deg);
        filter: drop-shadow(0 0 5vh rgb(255, 0, 0));
    }50%{
        filter: drop-shadow(0 0 0vh rgb(255, 0, 0));
        
    }100%{
        filter: drop-shadow(0 0 5vh rgb(255, 0, 0));
        transform: rotateY(360deg);
    }
    
}

@media(max-width: 1000px){
    .log{
        display: flex;
        justify-items: center;
        background-color:#000;

        flex-direction: column;
        height: min-content;
    }
    form{
        flex-direction: column;
       text-align: center;
        justify-content: center;
        align-items: center;
        display: flex;
        height:min-content;
        width: 100%;
     
    }
    .info{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        height:30vh;
        width: 100%;
        font-family: 'Kanit', sans-serif;

    }
    #password,#email, #password2, #username{
    width: 70vw;
    border: none;
    border-bottom:2px solid #f00;
}
.submit{
    margin-top: 5vh;
    width: 70vw;
    cursor: pointer;
    border:2px solid #fff;
    
}
.userError{
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 140%;
    width: 100vw;
    background-color: #151515;
    z-index: 10;
  
  }
}

</style>