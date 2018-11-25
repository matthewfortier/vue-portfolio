<template>
    <div class="login">
        <div class="inputs">
            <input v-model="loginForm.email" type="text" placeholder="Email"><br>
            <input v-model="loginForm.password" type="password" placeholder="Password">
        </div>
        <button @click="login()">Login</button>
    </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      this.$fb.auth
        .signInWithEmailAndPassword(
          this.loginForm.email,
          this.loginForm.password
        )
        .then(() => {
          this.$router.push("/home");
        })
        .catch(err => {
          // eslint-disable-next-line
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -40px;

  input {
    height: 60px;
    width: 400px;
    background-color: transparent;
    color: white;
    font-size: 28px;
    border: 4px solid white;
    margin: 10px;
    outline: none;
    padding: 10px;
  }

  button {
    height: 60px;
    width: 300px;
    background-color: transparent;
    border: 4px solid white;
    color: white;
    font-size: 28px;
    outline: none;

    &:hover,
    &:active {
      background-color: white;
      color: black;
    }
  }
}
</style>
