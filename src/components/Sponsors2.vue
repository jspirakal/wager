<template>
    <div class="col-md-8 main-content">
         <div>
                  <h5 class="heading-80">Sponsors</h5>
    <b-card-group  v-if="currentPage == 1" columns>
        <b-card 
       
                img-src="/images/steam.png"
                img-alt="Img"
                img-top
                footer="Steam is a digital distribution platform developed by Valve Corporation for purchasing and playing video games. ">
        </b-card>
               <b-card 
                img-src="/images/woolworths.jpg"
                img-alt="Img"
                img-top
                footer="Razer is the world leader in high-performance gaming hardware, software and systems. We live by our motto: For Gamers. By Gamers.">
        </b-card>
              <b-card 
                img-src="/images/coles.jpg"
                img-alt="Img"
                img-top
                footer="Red Bull is well-known for its Red Bull energy drink. The company is also known for its sponsorship of a range of sporting events and teams.">
        </b-card>
           <b-card 
                img-src="/images/bigw.png"
                img-alt="Img"
                img-top
                footer="Steam is a digital distribution platform developed by Valve Corporation for purchasing and playing video games. ">
        </b-card>
               <b-card 
                img-src="/images/visa.png"
                img-alt="Img"
                img-top
                footer="Razer is the world leader in high-performance gaming hardware, software and systems. We live by our motto: For Gamers. By Gamers.">
        </b-card>
              <b-card 
                img-src="/images/redbull.png"
                img-alt="Img"
                img-top
                footer="Red Bull is well-known for its Red Bull energy drink. The company is also known for its sponsorship of a range of sporting events and teams.">
        </b-card>
           <b-card 
                img-src="/images/amex.png"
                img-alt="Img"
                img-top
                footer="Steam is a digital distribution platform developed by Valve Corporation for purchasing and playing video games. ">
        </b-card>
               <b-card 
                img-src="/images/suncorp.png"
                img-alt="Img"
                img-top
                footer="Razer is the world leader in high-performance gaming hardware, software and systems. We live by our motto: For Gamers. By Gamers.">
        </b-card>
              <b-card 
                img-src="/images/ubuntu.png"
                img-alt="Img"
                img-top
                footer="Red Bull is well-known for its Red Bull energy drink. The company is also known for its sponsorship of a range of sporting events and teams.">
        </b-card>
    </b-card-group>

    <b-card-group  v-if="currentPage == 2" columns>
               <b-card 
                img-src="/images/visa.png"
                img-alt="Img"
                img-top
                footer="Razer is the world leader in high-performance gaming hardware, software and systems. We live by our motto: For Gamers. By Gamers.">
        </b-card>
              <b-card 
                img-src="/images/redbull.png"
                img-alt="Img"
                img-top
                footer="Red Bull is well-known for its Red Bull energy drink. The company is also known for its sponsorship of a range of sporting events and teams.">
        </b-card>
           <b-card 
                img-src="/images/amex.png"
                img-alt="Img"
                img-top
                footer="Steam is a digital distribution platform developed by Valve Corporation for purchasing and playing video games. ">
        </b-card>
               <b-card 
                img-src="/images/suncorp.png"
                img-alt="Img"
                img-top
                footer="Razer is the world leader in high-performance gaming hardware, software and systems. We live by our motto: For Gamers. By Gamers.">
        </b-card>
              <b-card 
                img-src="/images/ubuntu.png"
                img-alt="Img"
                img-top
                footer="Red Bull is well-known for its Red Bull energy drink. The company is also known for its sponsorship of a range of sporting events and teams.">
        </b-card>
          <b-card 
       
                img-src="/images/steam.png"
                img-alt="Img"
                img-top
                footer="Steam is a digital distribution platform developed by Valve Corporation for purchasing and playing video games. ">
        </b-card>
               <b-card 
                img-src="/images/woolworths.jpg"
                img-alt="Img"
                img-top
                footer="Razer is the world leader in high-performance gaming hardware, software and systems. We live by our motto: For Gamers. By Gamers.">
        </b-card>
              <b-card 
                img-src="/images/coles.jpg"
                img-alt="Img"
                img-top
                footer="Red Bull is well-known for its Red Bull energy drink. The company is also known for its sponsorship of a range of sporting events and teams.">
        </b-card>
           <b-card 
                img-src="/images/bigw.png"
                img-alt="Img"
                img-top
                footer="Steam is a digital distribution platform developed by Valve Corporation for purchasing and playing video games. ">
        </b-card>
    </b-card-group>
    
    <b-card-group  v-if="currentPage == 3" columns>
               <b-card 
                img-src="/images/visa.png"
                img-alt="Img"
                img-top
                footer="Razer is the world leader in high-performance gaming hardware, software and systems. We live by our motto: For Gamers. By Gamers.">
        </b-card>
              <b-card 
                img-src="/images/redbull.png"
                img-alt="Img"
                img-top
                footer="Red Bull is well-known for its Red Bull energy drink. The company is also known for its sponsorship of a range of sporting events and teams.">
        </b-card>
           <b-card 
                img-src="/images/amex.png"
                img-alt="Img"
                img-top
                footer="Steam is a digital distribution platform developed by Valve Corporation for purchasing and playing video games. ">
        </b-card>
               <b-card 
                img-src="/images/suncorp.png"
                img-alt="Img"
                img-top
                footer="Razer is the world leader in high-performance gaming hardware, software and systems. We live by our motto: For Gamers. By Gamers.">
        </b-card>
              <b-card 
                img-src="/images/ubuntu.png"
                img-alt="Img"
                img-top
                footer="Red Bull is well-known for its Red Bull energy drink. The company is also known for its sponsorship of a range of sporting events and teams.">
        </b-card>
         <b-card 
       
                img-src="/images/steam.png"
                img-alt="Img"
                img-top
                footer="Steam is a digital distribution platform developed by Valve Corporation for purchasing and playing video games. ">
        </b-card>
               <b-card 
                img-src="/images/woolworths.jpg"
                img-alt="Img"
                img-top
                footer="Razer is the world leader in high-performance gaming hardware, software and systems. We live by our motto: For Gamers. By Gamers.">
        </b-card>
              <b-card 
                img-src="/images/coles.jpg"
                img-alt="Img"
                img-top
                footer="Red Bull is well-known for its Red Bull energy drink. The company is also known for its sponsorship of a range of sporting events and teams.">
        </b-card>
           <b-card 
                img-src="/images/bigw.png"
                img-alt="Img"
                img-top
                footer="Steam is a digital distribution platform developed by Valve Corporation for purchasing and playing video games. ">
        </b-card>
    </b-card-group>
</div>
<div>
    <h6>Default</h6>
    
    <b-pagination align="center" size="md" :total-rows="100" v-model="currentPage" :per-page="10">
    </b-pagination>
<div style="text-align: center;">
           <b-button v-b-modal.sponsorform>Become a sponsor</b-button>
        </div>


          <!-- Modal Component -->
  <b-modal id="sponsorform" hide-footer title="Sponsor form">
    
      <b-form v-if="counter ==1" >
   
    <h5>Contact Details</h5>
   <b-form-group
      id="fieldset1"
      description="eg. John Stark"
      label="Enter your name"
      label-for="input1"
      :invalid-feedback="invalidFeedback"
      :valid-feedback="validFeedback"
      :state="state"
    >
      <b-form-input id="input2" :state="state" v-model="name" trim />
    </b-form-group>
    <b-form-group
      id="fieldset1"
      description="eg. call me on +61400123456"
      label="Enter your preferred contact"
      label-for="input1"
      :invalid-feedback="invalidFeedback"
      :valid-feedback="validFeedback"
      :state="state"
    >
      <b-form-input id="input3" :state="state" v-model="name" trim />
    </b-form-group>
   <b-form-group
      id="fieldset1"
      description="eg. smokingnoobs@gmail.com"
      label="Enter your email"
      label-for="input1"
      :invalid-feedback="invalidFeedback"
      :valid-feedback="validFeedback"
      :state="state"
    >
      <b-form-input id="input4" :state="state" v-model="name" trim />
    </b-form-group>
  <b-form-group
      id="fieldset1"
      description="eg. NikkiMinaj000"
      label="Enter your Skype ID"
      label-for="input1"
      :invalid-feedback="invalidFeedback"
      :valid-feedback="validFeedback"
      :state="state"
    >
      <b-form-input id="input5" :state="state" v-model="name" trim />
    </b-form-group>




      <b-btn class="mt-3" variant="outline-success" block v-on:click="counter += 1">Next</b-btn>
    

    Page {{ counter }} of 4
    </b-form>


    <b-form v-if="counter ==2">
   
    <h5>Corporate Details</h5>
   <b-form-group
      id="fieldset1"
      description="eg. WagerGames PTY LTD"
      label="Enter the name of the company you work for."
      label-for="input1"
      :invalid-feedback="invalidFeedback"
      :valid-feedback="validFeedback"
      :state="state"
    >
      <b-form-input id="input2" :state="state" v-model="name" trim />
    </b-form-group>
    <b-form-group
      id="fieldset1"
      description="eg. CEO"
      label="Enter your job title"
      label-for="input1"
      :invalid-feedback="invalidFeedback"
      :valid-feedback="validFeedback"
      :state="state"
    >
      <b-form-input id="input3" :state="state" v-model="name" trim />
    </b-form-group>
   <b-form-group
      id="fieldset1"
      description="eg. Australia"
      label="Enter the country you are located in"
      label-for="input1"
      :invalid-feedback="invalidFeedback"
      :valid-feedback="validFeedback"
      :state="state"
    >
      <b-form-input id="input4" :state="state" v-model="name" trim />
    </b-form-group>
  <b-form-group
      id="fieldset1"
      description="eg. Perth, Western Australia"
      label="Enter the city and state you are located in."
      label-for="input1"
      :invalid-feedback="invalidFeedback"
      :valid-feedback="validFeedback"
      :state="state"
    >
      <b-form-input id="input5" :state="state" v-model="name" trim />
    </b-form-group>




      <b-btn class="mt-3" variant="outline-success" block v-on:click="counter += 1">Next</b-btn>
    
     <b-btn class="mt-3" variant="outline-danger" block @click="counter -= 1">Back</b-btn>
    Page {{ counter }} of 4
    </b-form>
  

         
<b-form v-if="counter ==3">
        
    <h5>Social Media</h5>
   <b-form-group
      id="fieldset1"
      description="eg. https://www.facebook.com/WagerGames/"
      label="Enter your company's facebook URL"
      label-for="input1"
      :invalid-feedback="invalidFeedback"
      :valid-feedback="validFeedback"
      :state="state"
    >
      <b-form-input id="input2" :state="state" v-model="name" trim />
    </b-form-group>
    <b-form-group
      id="fieldset1"
      description="eg. http://www.wagergames.co"
      label="Enter your company's website"
      label-for="input1"
      :invalid-feedback="invalidFeedback"
      :valid-feedback="validFeedback"
      :state="state"
    >
      <b-form-input id="input3" :state="state" v-model="name" trim />
    </b-form-group>
   <b-form-group
      id="fieldset1"
      description="eg. https://www.twitch.tv/witlessmc"
      label="Enter your company's Twitch channel (optional)"
      label-for="input1"
      :invalid-feedback="invalidFeedback"
      :valid-feedback="validFeedback"
      :state="state"
    >
      <b-form-input id="input4" :state="state" v-model="name" trim />
    </b-form-group>
  <b-form-group
      id="fieldset1"
      description="eg. https://www.youtube.com/channel/UCW69klJO5t2_kc4-HrjPJRg"
      label="Enter your company's YouTube channel (optional)"
      label-for="input1"
      :invalid-feedback="invalidFeedback"
      :valid-feedback="validFeedback"
      :state="state"
    >
      <b-form-input id="input5" :state="state" v-model="name" trim />
    </b-form-group>

      <b-btn class="mt-3" variant="outline-success" block v-on:click="counter += 1">Next</b-btn>
    
     <b-btn class="mt-3" variant="outline-danger" block @click="counter -= 1">Back</b-btn>
    Page {{ counter }} of 4
  

     </b-form>
      
   <b-form v-if="counter ==4">
    <h5>esports History</h5>
   <b-form-group
      id="fieldset1"
      description="eg. 102"
      label="How many tournaments have you organised?"
      label-for="input1"
      :invalid-feedback="invalidFeedback"
      :valid-feedback="validFeedback"
      :state="state"
    >
      <b-form-input id="input2" :state="state" v-model="name" trim />
    </b-form-group>
    <b-form-group
      id="fieldset1"
      description="eg. 40"
      label="How many players took part in your tournaments generally?"
      label-for="input1"
      :invalid-feedback="invalidFeedback"
      :valid-feedback="validFeedback"
      :state="state"
    >
      <b-form-input id="input3" :state="state" v-model="name" trim />
    </b-form-group>
   <b-form-group
      id="fieldset1"
      description="eg. DotA2, LoL, CS:GO" 
      label="What games are you interested in hosting tournaments for? Seperate them with commas"
      label-for="input1"
      :invalid-feedback="invalidFeedback"
      :valid-feedback="validFeedback"
      :state="state"
    >
      <b-form-input id="input4" :state="state" v-model="name" trim />
    </b-form-group>
  <b-form-group
      id="fieldset1"
      description="eg. FPS, Survival"
      label="What genres are you most interested in? Seperate them with commas"
      label-for="input1"
      :invalid-feedback="invalidFeedback"
      :valid-feedback="validFeedback"
      :state="state"
    >
      <b-form-input id="input5" :state="state" v-model="name" trim />
    </b-form-group>

      <b-btn class="mt-3" variant="outline-success" block >Submit</b-btn>
    
     <b-btn class="mt-3" variant="outline-danger" block @click="counter -= 1">Back</b-btn>
    Page {{ counter }}
  </b-form>
     





  </b-modal>
    <br>

    
  </div>    


                                                
                            </div>
                            
                           
</template>

<script>
export default {
    data () {
    return {
      currentPage: 1,
      sponsorFormPage: 1,
      counter: 1,
      
    },
    },
   methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
  name: 'MainContent',
  
}

</script>



