<template>
  <div class="login">
    <h1 class="title">REGISTRARSE A MI TIENDA</h1>
    <form action class="form" @submit.prevent="register">
      <label class="form-label" for="#email">Correo Electronico:</label>
      <input v-model="email" 
            class="form-input" 
            type="email" 
            id="email" 
            required 
            placeholder="Email">
      <label class="form-label" for="#password">Contraseña:</label>
      <input v-model="password" 
            class="form-input" 
            type="password" 
            id="password" 
            placeholder="Password">
    <label class="form-label" for="#password-confirmed">Confirmar contraseña:</label>
      <input v-model="passwordConfirmed" 
            class="form-input" 
            type="password-confirmed" 
            id="password-confirmed" 
            placeholder="Password-confirmed">
      <span v-if="error">Correo o contraseña incorrecta</span>
      <input class="form-submit" type="submit" value="Login">
    </form>
  </div>
</template>


<script>

import auth from "@/auth/auth";

export default {
  name: 'Register', //this is the name of the component
  data:()=>({
    email:"",
    password:"",
    passwordConfirmed:"",
    error:false
  }),
  methods:{
    async register(){
    try{
        await auth.register(this.email,this.password);
        this.$router.push("/")
    }catch(err){
        console.log(err);
    }
        
    }
  }
}
</script>
<style lang="css" scoped>
.login {
  padding: 2rem;
}
.title {
  text-align: center;
}
.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  background: #FFF /*rgba(19, 35, 47, 0.9)*/;
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}
.form-label {
  margin-top: 2rem;
  color: black;
  text-align:left;
  margin-bottom: 0.5rem;
  &:first-of-type {
    margin-top: 0rem;
  }
}
.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid #0c0c0c;
  color: black;
  &:focus {
    outline: 0;
    border-color: #1ab188;
  }
}
.form-submit {
  background: #f06292 !important;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #0b9185;
  }
}
</style>
