<template>
<div class="login"    v-if="$store.state.language === 'spanish' || $store.state.language === 'english'">

    <div class="userError" v-if="$store.state.language == 'english' && $store.state.token">
        <h1  style="font-family: 'Kanit',sans-serif;">Hi {{$store.state.username}} ! to create a new account you need to logout first. </h1>
    <button v-on:click="goToHome">go to home</button><button v-on:click="$store.commit('logOut')">logout</button>
    </div>

    <div class="userError" v-if="$store.state.language == 'spanish' && $store.state.token">
        <h1  style="font-family: 'Kanit',sans-serif;">Hola {{$store.state.username}} ! si quieres crear una nueva cuenta primero deber cerrar sesion. </h1>
    <button v-on:click="goToHome">ir a inicio</button><button v-on:click="$store.commit('logOut')">cerrar sesion</button>
    </div>

    <div class="confirmMail" v-if="$store.state.registerSuccess">
    
    <h1  style="font-family: 'Kanit', sans-serif;">you've been succesfully registered, please confirm your email </h1>
    <button v-on:click="$store.commit('goLogin')">understood</button>

    </div>
     

             <div class="log">

                 <div class="info" v-if="$store.state.language == 'english'">
                     <h1 style="color:#fff;font-size:4vh">Hi Raptorean!</h1><h1 style="color:#f00;font-size:4vh">nice to see you again.</h1>
                 </div>
                 <div class="info" v-if="$store.state.language == 'spanish'">
                     <h1 style="color:#fff;font-size:4vh">Hola raptoreano!</h1><h1 style="color:#f00;font-size:4vh">un gusto verte denuevo.</h1>
                 </div>

                          <form class="form" v-if="$store.state.language=='english'" v-on:submit.prevent="$store.commit('registerPost')">

                               <h1 style="color:#f00;font-size: 6vh;font-family:'Kanit', sans-serif" >Register</h1>
                               <label for="username">username</label>
                               <input id='username' v-model="$store.state.registerUser" type="text">
                               <small class="rule">username length must be higher than 3 but less than 15.numbers and symbols not allowed.</small>
                               <label for="email">email</label>
                               <input id="email" v-model="$store.state.registerEmail" type="email">
                               <small class="rule">enter a valid email</small>
                               <label for="password">password</label>
                               <input id="password" v-model="$store.state.registerPassword" type="password">
                               <small class="rule">minimum length:8, maximum length:40, at least 1 upperCase, 1 lowerCase,1 number and 1 symbol</small>
                               <label for="password2">repeat password</label>
                               <input id="password2" v-model="$store.state.registerPasswordTwo" type="password">
                               <small class="rule">repeat password</small>
                               <input type="submit" style="font-family: 'Kanit', sans-serif;" class='submit' value="register">
                               <div class="error" v-if="error">something's wrong with our server, try again later</div>
        
                         </form>

                         <form class="form" v-if="$store.state.language=='spanish'" v-on:submit.prevent="$store.commit('registerPost')">

                            <h1 style="color:#f00;font-size: 6vh;font-family: 'Kanit', sans-serif" >Registro</h1>
                            <label for="username">usuario</label>
                            <input id='username' v-model="$store.state.registerUser" type="text">
                            <small class="rule">el usuario debe contener mas de 3 caracteres pero menos de 15.solo letras.</small>
                            <label for="email">correo</label>
                            <input id="email" v-model="$store.state.registerEmail" type="email">
                            <small class="rule">introduzca un email valido</small>
                            <label for="password">contraseña</label>
                            <input id="password" v-model="$store.state.registerPassword" type="password">
                            <small class="rule">largo minimo:8, largo maximo:40, al menos 1 mayúscula, 1 minúscula,1 numero y 1 simbolo</small>
                            <label for="password2">repita la contraseña</label>
                            <input id="password2" v-model="$store.state.registerPasswordTwo" type="password">
                            <small class="rule">repita la contraseña</small>
                            <input type="submit" style="font-family: 'Kanit', sans-serif;" class='submit' value="registrarme">
                            <div class="error" v-if="error">hubo un error con el servidor porfavor intentelo denuevo</div>

</form>
            </div>
</div>
</template>

<script  scoped>
import axios from 'axios'
export default {
name: 'registerView',
components: {

  },
  data(){
    return{


    }
  },
  computed:{
   userRegister(){
   
   }
  },
  methods:{
    goToHome:()=>{
        window.location.href="https://6386e8a973fe3103a27554a0--enchanting-basbousa-1f7aaa.netlify.app/"
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
  .confirmMail{
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
 .rule{
    color: #fff;
  }
  .confirmMail h1{
    color: #fff;
    text-align: center;
  
  
  }
  .confirmMail button{
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
  .confirmMail button:hover{
    background-image: linear-gradient(#000,red);
 color: #fff;
}
    .login{
        height:90vh;
        width: 100%;
        background-color: black;
    }
    .error{
    color: #f00;
    text-align: center;
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

#password,#email, #password2, #username{
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
.confirmMail{
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content:start;
    align-items: center;
    height: 200%;
    width: 100vw;
    background-color: #151515;
    z-index: 10;
  }
  .confirmMail h1{
    color: #fff;
    text-align: center;
     padding-top: 50%;
     margin: 1vh;
  
  }
  .confirmMail button{
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
  .userError{
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content:start;
    align-items: center;
    height: 200%;
    width: 100vw;
    background-color: #151515;
    z-index: 10;
  }
  .userError h1{
    color: #fff;
    text-align: center;
     padding-top: 50%;
     margin: 1vh;
  
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
}
</style>