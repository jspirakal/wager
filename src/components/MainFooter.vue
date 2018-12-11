<style>
#footer2 {
    position: absolute;
    z-index: 101;

    line-height: 2;
    
    opacity: 0.5;

    position: fixed;
    height: 50px;
    background-color: black;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin-bottom: 0px;
}

.terms {
        text-decoration-color:black;
}

</style>
<template>
     <div class="container">
        <div class="col-md-12 mb-5">
               <div class="socialmediaicons">
                        <ul>
                                <hr width="100%">

                             <div class="container-fluid social-info mt-5">
                             <ul><li><a href="https://twitter.com/WagerGamesWGT" target="_blank" class="icon"><i class="fa fa-twitter"></i></a><p class="icon-content">
                             <br><span></span></p></li><li><a href="https://www.facebook.com/WagerGames/" target="_blank" class="icon"><i class="fa fa-facebook"></i></a><p class="icon-content">
                             <br><span></span></p></li><li><a href="https://www.linkedin.com/company/wagergames/" target="_blank" class="icon"><i class="fa fa-linkedin"></i></a><p class="icon-content">
                             <br><span></span></p></li><li><a href="https://www.reddit.com/user/WagergamesWGT" target="_blank" class="icon"><i class="fa fa-reddit"></i></a><p class="icon-content">
                               <br><span></span></p></li><li><a href="https://t.me/WagerGames_Community" target="_blank" class="icon"><i class="fa fa-telegram"></i></a><p class="icon-content">
                            
                    <br><span></span></p></li></ul></div>
                        </ul>
               </div>
        </div>

     <footer class="mt-5">
                <div class="col-md-12">
                                <div class="row">
                                        <div class="col-md-4">
                                                <h5>Contact</h5>
                                                <div>  
       </div>
                                                <ul>
                                                        <li><a href="Support@wagergames.io" style="text-decoration: none;">Support@wagergames.io</a></li>
                                                 <a href="http://localhost:8080/media" style="text-decoration: none;">Media Submission</a>
  
                                                </ul>
                                        </div>
  
                                        <div class="col-md-4">
                                                <h5>About</h5>
                                                <ul>
                                                        <li> <a href="https://www.crunchbase.com/organization/wager-games" style="text-decoration: none;">Company</a></li>
                                                        <li> <a href="https://www.crunchbase.com/organization/wager-games#section-current-team" style="text-decoration: none;">Developers</a></li>
                                                </ul>
                                        </div>
                                        <div class="col-md-4">
                                                <h5>Help</h5>
                                                <ul> 
                      <li>  <a href="/termsandconditions" style="text-decoration: none;">Terms and Conditions</a></li>                                              
                                                      <li><a href="/privacypolicy" style="text-decoration: none;">Privacy Policy</a></li>
                                                </ul>
                                        </div>
                                </div>
                        </div>

                        <div class="col-md-12 mt-5 mb-5">
                                <p class="copyright">Copyright © Wager Games. All rights reserved</p>
                        </div>
                        <div class="footer2" id="footer2">

<div id="myDIV">
  <p>WagerGames uses tracking cookies to enable the best experience for you &nbsp; &nbsp;<b-button onclick="">I agree</b-button></p>
  </div>
</div>
     </footer>





     <b-modal id="modal1" title="Media Submission Form">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="exampleInputGroup1"
                    label="Email address:"
                    label-for="exampleInput1"
                    description="We'll never share your email with anyone else.">
        <b-form-input id="exampleInput1"
                      type="email"
                      v-model="form.email"
                      required
                      placeholder="Enter email">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Your Name:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="Enter name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup3"
                    label="User type:"
                    label-for="exampleInput3">
        <b-form-select id="exampleInput3"
                      :options="foods"
                      required
                      v-model="form.food">
        </b-form-select>
      </b-form-group>
      <b-form-group id="exampleGroup4">
        <b-form-checkbox-group v-model="form.checked" id="exampleChecks">
          <b-form-checkbox value="me">I agree to pay 1 WGT to use this service</b-form-checkbox>
          <b-form-checkbox value="that">I agree to all terms and conditions*</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
       <b-form-group id="exampleInputGroup5"
                    label="Your Story"
                    label-for="exampleInput5">
        <b-form-textarea id="exampleInput5"
                      type="text"
                      v-model="form.submission"
                      required
                      placeholder="Enter submission"
                      rows="6">
        </b-form-textarea>
          <b-form-file v-model="file" accept="image/*" :state="Boolean(file)" placeholder="Choose a file..."></b-form-file>
  <div class="mt-3">Selected file: {{file && file.name}}</div>
         </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>

  </b-modal> 

    </div>
</template>

<script>
export default {
  data () {
    return {
    
    }
  },
  name: 'MainFooter',
  methods: {
    Hide: function(){
      var x = document.getElementById("myDIV");
      if (x.style.display === "none") {
          x.style.display = "block";
      } else {
          x.style.display = "none";
      }
    }
  }
}

// var cookiesAlert = new vue({
//   el: 'myDIV',
//   methods: {
//     Hid: function(){
//       var x = document.getElementById("myDIV");
//       if (x.style.display === "none") {
//           x.style.display = "block";
//       } else {
//           x.style.display = "none";
//       }
//     }
//   }
// })


/*function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}*/

</script>

<style>
.mydiv{
  display: block;
}
</style>
