<style>
#current-pane {
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
                        <div class="footer2" id="current-pane">
    <table class="table table-hover">
     
                Wager Games uses tracking cookies to optimize your web experience
                <b-button href="#current-pane" class="close" data-dismiss="alert" aria-label="close" id="hide">I agree&times;</b-button>
       
  
        <tbody>
        </tbody>
    </table>
</div>
    </footer>
</div>
 






    </div>
</template>

<script>
export default {
  data () {
    return {
    
    }
  },
  name: 'MainFooter',
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
