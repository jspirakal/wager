<template>
    <div class="col-md-8 main-content">
    
 
      <p style ="   color: white;
    font-size: xx-large;">Streams & Videos</p>
  
    <VideoPlayer/>

    
    <br>
 <b-dropdown id="ddown1" text="Dropdown Button" class="m-md-2">
    <b-dropdown-item v-b-modal.modal3>YouTube Video</b-dropdown-item>
    <b-dropdown-item disabled>Twitch Channel</b-dropdown-item>
  </b-dropdown>

 
     
  <b-modal id="modal3" title="YouTube submission form">
 <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="exampleInputGroup1"
                    label="Embed Youtube URL"
                    label-for="exampleInput1"
                    description="On the YouTube video go to 'Share' then 'Embed' and enter the URL located after inside. For example: https://www.youtube.com/embed/vLEek3I3wac">

        <b-form-input id="exampleInput1"
                      type="url"
                      v-model="form.email"
                      required
                      placeholder="Enter the YouTube embed url">
                    
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Video Title:"
                    label-for="exampleInput2"
                      description="Enter the title that appears on the YouTube videos. Incorrect entries or entries including profanity will be deleted.">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="Enter the title of the YouTube video">
        </b-form-input>
      </b-form-group>
      
            <b-form-group id="exampleInputGroup5"
                    label="Video Creator:"
                    label-for="exampleInput5"
                      description="Enter the title that appears on the YouTube videos. Incorrect entries or entries including profanity will be deleted and if fraud is detected could result in a ban.">
        <b-form-input id="exampleInput5"
                      type="text"
                      v-model="form.creator"
                      required
                      placeholder="Enter the creator of the YouTube video here">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup3"
                    label="Content Type"
                    label-for="exampleInput3">
        <b-form-select id="exampleInput3"
                      :options="foods"
                      required
                      v-model="form.food">
        </b-form-select>
      </b-form-group>
      <b-form-group id="exampleGroup4">
        <b-form-checkbox-group v-model="form.checked" id="exampleChecks">
          <b-form-checkbox value="me">I agree the above content is accurate</b-form-checkbox>
          <b-form-checkbox value="that">I agree to WagerGames Terms and Conditions</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </b-modal>
  </div>

  
                            
                           
</template>

<script>
import VideoPlayer from '@/components/VideoPlayer'
export default 
{
   name: 'Streams',
  components: {
    VideoPlayer
  },
  data () {
    return {
      form: {
        email: '',
        name: '',
        creator: '',
        food: null,
        checked: []
      },
      foods: [
        { text: 'Select One', value: null },
        'Gaming', 'Offtopic', 'Crypto', 'Music'
      ],
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      this.form.food = null;
      this.form.checked = [];
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}

</script>

<style scoped> 
</style>


