<template>
    <div>              
<div class="logo-section">
    <img src="img/logo.png" class="img-logo">
</div>

<!-- Main-Content -->
<div class="main-w3layouts-form">
    <h2>Register to your account</h2>
    <!-- main-w3layouts-form -->
    <form @submit.prevent="register" aria-label="Register" method="post">
      
        <div class="fields-w3-agileits">
            <span class="fa fa-user" aria-hidden="true"></span>
            <input v-model="name" id="name" type="text" class="form-control" name="name" value="" required autofocus placeholder="username">
        </div>
       
            <span class="invalid-feedback" role="alert" style="color: red; margin-bottom: 10px; display: block;">
            <strong></strong>
        </span>
       
        <div class="fields-w3-agileits">
            <span class="fa fa-envelope" aria-hidden="true"></span>
            <input v-model="email" id="email" type="text" class="form-control" name="email" value="" required autofocus placeholder="email">
        </div>
       <span class="invalid-feedback" role="alert" style="color: red; margin-bottom: 10px; display: block;">
                                        <strong v-if="error">{{ error }}</strong>
                                  
        </span>
       
        <div class="fields-w3-agileits">
            <span class="fa fa-key" aria-hidden="true"></span>
            <input v-model="password" id="password" type="password" class="form-control" name="password" required placeholder="password">
        </div>
        
            <span class="invalid-feedback" role="alert" style="color: red; margin-bottom: 10px; display: block;">
            <strong></strong>
        </span>
      
        <div class="fields-w3-agileits">
            <span class="fa fa-key" aria-hidden="true"></span>
            <input v-model="passwordConfirm" id="password-confirm" type="password" class="form-control" name="password_confirmation" required placeholder="confirm password">
        </div>
         <span class="invalid-feedback" role="alert" style="color: red; margin-bottom: 10px; display: block;">
                                        <strong v-if="errorPassword">{{ errorPassword }}</strong>
                                  
        </span>
        <input type="submit" value="Register" />
    </form>
    <!--// main-w3layouts-form -->
    <!-- Social icons -->
    <div class="footer_grid-w3ls">
        <h5 class="sub-hdg-w3l">or your social profile</h5>
        <ul class="social-icons-agileits-w3layouts">
            <li><a href="" class="fa fa-facebook"></a></li>
            <li><a href="" class="fa fa-twitch"></a></li>
        </ul>
    </div>
    <!--// Social icons -->
</div>
    </div>
</template>

<script>

export default {
    name: 'Register',
    data() {
        return {
            name: '',
            email: '',
            password: '',
            passwordConfirm: '',
            error: null,
            errorPassword: null
        }
    },
     beforeMount() {
        let AddStyle = document.createElement('link')
        AddStyle.type = "text/css";
        AddStyle.rel = "stylesheet";
        AddStyle.href = "css/auth.css";
        AddStyle.id = "auth";
        document.head.appendChild(AddStyle)
    },
    beforeDestroy() {
        document.getElementById("auth").disabled = true;
        var stylesheet = document.getElementById('auth');
        stylesheet.parentNode.removeChild(stylesheet);
    },
     methods: {
        register() {
            if (this.password != this.passwordConfirm) {
                this.errorPassword = "Password and passwordConfirm did't mcatched"
                return false;
            }
            this.$store.dispatch('register', {
                username: this.name,
                email: this.email,
                password: this.password,
                // passwordConfirm: this.passwordConfirm
            })
            .then(response => {
                this.$router.push({ name: 'home' });
            }).catch(error => {
                console.log(error);
            })
        }
    } 
}
</script>

<style>

</style>
