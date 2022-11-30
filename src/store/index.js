import { createStore } from 'vuex'
import axios from 'axios'


export default createStore({
  state: {
    registerUser:'',
    registerEmail:'',
    registerPassword:'',
    registerPasswordTwo:'',
    loginEmail:'',
    loginPassword:'',
    isUser:false,
    userUsername:'',
    userError:false,
    emailError:false,
    registerSuccess:false,
    userNotVerified:false,
    loginError:false,
    credentialError:false,
    isNotUser:true,
    token:localStorage.getItem("token"),
    username:localStorage.getItem("user"),
    language:localStorage.getItem("language"),
   picture:''
  },
  getters: {
  },
  mutations: {
    loginPost(state){
      if(state.loginEmail.includes('*','=','or','OR','SELECT','select','from','FROM','DROP','drop') || state.loginPassword.includes('*','=','or','OR','SELECT','select','from','FROM')){
     alert('you are using not allowed characters // estás usando caracteres no permitidos')
}
else{
        let loginUserData={loginEmail:state.loginEmail,loginPassword:state.loginPassword}
        axios.post('https://truthbackend1-production.up.railway.app/login',loginUserData)
        .then(res=>{
    

          try {
          if(res.data.access=='approved'){

          localStorage.setItem('user',res.data.username)
          localStorage.setItem('token',res.data.token)
       
          state.isUser=true
          state.isNotUser=false
           window.location.href = "https://truthbackend1-production.up.railway.app"

          }else if(res.data.access=='denied'){
            console.log('denied:',res)
            loginError=true
          }
          } catch (error) {
            console.log(error)
          }

       
          }).catch(err=>{
         
           console.log(err)
              try {
                if(err.response.data.error === "userDoesn'tExist"){
                
                    alert('invalid email or username || usuario o email invalidos')

                }else if(err.response.data.error === "userNotVerified"){
                  state.userNotVerified=true
                }else if(err.response.data.error === "databaseError"){
                  alert('invalid email or username || usuario o email invalidos')
                  state.error=true
                } 
              } catch (error) {
                console.log(error)
              }
               
              try {
                if(err.response.data.errors.errors[0].param === 'loginEmail' && state.language === 'english'){
                  alert('invalid email')
              }else if(err.response.data.errors.errors[0].param === 'loginPassword' && state.language === 'english'){
                alert('invalid password')
              }else if(err.response.data.errors.errors[0].param === 'loginEmail' && state.language === 'spanish'){
                  alert('email invalido')
              }else if(err.response.data.errors.errors[0].param === 'loginPassword' && state.language === 'spanish'){
                alert('contraseña invalida')
            }
              } catch (error) {
                console.log(error)
              }
         
        })
      }
     
    },
    registerPost(state){
      console.log(state.registerUser)
  if(state.registerEmail.includes('*' || '=' || 'or' ||'OR' ||'SELECT' ||'select' || 'DROP' || 'drop' || "#")){
        alert('your email contains not allowed characters // tu email contiene caracteres no permitidos')
   }else if(state.registerPassword != state.registerPasswordTwo){
         alert('password do not match // las contraseñas no coinciden')
   }
   else{
           let registerUserData={registerEmail:state.registerEmail,registerPassword:state.registerPassword,registerUser:state.registerUser,registerPasswordTwo:state.registerPasswordTwo}
           axios.post('https://truthbackend1-production.up.railway.app/register',registerUserData)
           .then(res=>{
          
             console.log('res',res)         
//aqui vendria la redireccion a la pagina para que confime su correo electronico
            
            try{
              if(res.data.access == 'denied'){
               alert('something went wrong please try again later // algo salió mal porfavor intente mas tarde')
              }else if(res.data.access == 'granted'){
                state.registerSuccess=true
                console.log('granted',res.data)
              }
            }catch(e){

            }
               

           }).catch(err=>{
            try {
              if(err.response.data.error === "invalid user" || err.response.data.error === "invalid email"){
  
                   alert('invalid email or username || usuario o email invalidos')
  
              }
             } catch (error) {
              console.log(error)
             }
              try {
                console.log('err',err)

                if(err.response.data.error.errors[0].param==='registerUser'){
                  alert('invalid username // nombre de usuario invalido')
                }else if(err.response.data.error.errors[0].param==='registerEmail'){
                  alert('invalid email // cuenta de email invalida')
                }else if(err.response.data.error.errors[0].param==='registerPassword'){
                  alert('invalid password // contraseña invalida')
                }else if(err.response.data.error.errors[0].param==='registerPassword2'){
                  alert('passwords do not match // las contraseñas no coinciden')
                }
              } catch (error) { 
                console.log(error)
              }
       
           })
         }
        
}, goLogin:(state)=>{
      state.registerSuccess=false
},goRegister:(state)=>{
   state.userError=false
},goVerify(state){
   state.userNotVerified=false
},goError(state){
  state.loginError=false
},userStatus(state){

console.log(state.token)
},
credentialErrorFalse(state){
state.credentialError=false
},logOut(){
  localStorage.removeItem("token")
  localStorage.removeItem("user")
  localStorage.removeItem("picture")
  window.location.href = "http://localhost:8080/"
},   goToHome:()=>{
  this.$router.push('homeView')
},
 settingsLoaded(state){
 axios.get(`https://truthbackend1-production.up.railway.app/settings/${state.token}`)
.then(res=>{
  if(res.data.success==='true'){
    console.log('success')
    state.picture=res.data.picture
    state.username=res.data.username
    window.location.href = "https://truthbackend1-production.up.railway.app/userSettings"
  }
})
.catch(err=>{
  if(err){
    window.location.href = "https://truthbackend1-production.up.railway.app"
  }
})
},
changeProfilePicture:(event)=>{

  }
},
  actions: {
  
  },
  modules: {
  }
})

