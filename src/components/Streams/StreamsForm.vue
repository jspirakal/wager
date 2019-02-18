 <template>
  <div class="col-md-8 main-content">
    <h5 class="heading-80">Streams & Videos Submission</h5> 
     <b-card>
  <b-form  @submit="onSubmit" @reset="onReset" >
    <h5>Contact Details</h5>
    <ValidationProvider name="url" rules="required|min:15|max:60|url">
  <div slot-scope="{ errors }">  
   <b-form-group
      description="eg. https://www.youtube.com/embed/vLEek3I3wac"
      label="On the YouTube video go to 'Share' then 'Embed' and enter the URL located in the popup"
    >
      <b-form-input v-model="form.url" trim />
    </b-form-group>
        <p>{{ errors[0] }}</p>
  </div>
</ValidationProvider>
    <ValidationProvider name="title" rules="required|min:5|max:200">
  <div slot-scope="{ errors }">  
    <b-form-group
      description="eg. Dota 2 Daily WTF - Deadly Love"
      label="Enter the title that appears on the YouTube videos."
    >
      <b-form-input v-model="form.title" trim />
    </b-form-group>
            <p>{{ errors[0] }}</p>
  </div>
  </ValidationProvider>
  <ValidationProvider name="creator" rules="required|min:2|max:40">
  <div slot-scope="{ errors }">  
   <b-form-group
      description="eg. Dota Watafak"
      label="Enter the creator of the YouTube video here">
    
      <b-form-input v-model="form.creator" trim />
    </b-form-group>
                <p>{{ errors[0] }}</p>
  </div>
  </ValidationProvider>
   <ValidationProvider name="Select a suitable content type from the list" rules="required">
  <div slot-scope="{ errors }">  
       <b-form-group 
                    label="Select the content type from the dropdown list"
                    description="eg. Gaming">
        <b-form-select :options="contents"
                      v-model="form.content">
        </b-form-select>
      </b-form-group>
                <p>{{ errors[0] }}</p>
  </div>
  </ValidationProvider>      
   <ValidationProvider name="country" rules="required|min:5|max:50">
  <div slot-scope="{ errors }">  
   <b-form-group
      description="eg. Australia"
      label="Enter the country you are located in"
    >
      <b-form-input  v-model="form.country" trim />
    </b-form-group>
    <p>{{ errors[0] }}</p>
  </div>
    </ValidationProvider>     
   
          <b-form-checkbox name="accurate">I agree the above content is accurate</b-form-checkbox>        
          <b-form-checkbox name="terms" value="that">I agree to WagerGames Terms and Conditions</b-form-checkbox>   
       <p style="color: red"> Incorrect entries or entries including profanity/hate speech will be deleted </p>

 <b-button block type="submit" variant="primary">Submit</b-button>
 <b-button block type="reset" variant="danger">Reset</b-button>
  </b-form>
  </b-card>
 
  

    </div>
    </template>

     <script>
  export default {
    data() {
      return {
        form: {
          url: '',
          title: '',
          creator: '',
          content: null,
          country: '',
          accurate: [],
          terms: [],
        },
         contents: [{ text: 'Select One', value: null }, 'Crypto', 'Gaming', 'Humour', 'Music', 'Other'],
      }
      
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        const userStr = JSON.stringify(this.form);
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        /* Reset our form values */
        this.form.name = ''
        this.form.contact = ''
        this.form.email = ''
        this.form.skype = ''
        this.form.company = ''
        this.form.job = ''
        this.form.city = ''
        this.form.country = ''
        this.form.facebook = ''
        this.form.website = ''
        this.form.twitch = ''
        this.form.youtube = ''
        this.form.tournaments = ''
        this.form.players = ''
        this.form.games = ''
        this.form.genres = ''
        /* Trick to reset/clear native browser form validation state */
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
  </script>