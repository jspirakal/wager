<template>

  <!-- Modal Component -->


    <div class="col-md-8 main-content">

      <b-modal id="modal2" title="Media Submission Form">
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
         <b-form-group id="exampleInputGroup6"
                    label="Your Title:"
                    label-for="exampleInput6">
        <b-form-input id="exampleInput6"
                      type="text"
                      v-model="form.title"
                      required
                      placeholder="Enter title">
        </b-form-input>
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
        </b-form-group>
        
          <b-form-file v-model="file" accept="image/*" :state="Boolean(file)" placeholder="Choose a file..."></b-form-file>
  <div class="mt-3">Selected file: {{file && file.name}}</div>
     
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>

  </b-modal> 



                              <font color="white">  <h5 class="heading-80">Media Submissions</h5>
              </br>            
  <b-btn v-b-modal.modal2>Launch media submission form</b-btn>
    


                    
                                <div class="tournaments" style >
                                                </div>
                                              <h5><span class="glyphicon glyphicon-time"></span><font size="6"> <b>{{this.form.title}} </b></font></h5>
                                              <h5><span class="glyphicon glyphicon-time"></span><font size="4"> {{this.form.name}}</font> </h5>
                                                     <h5><span class="glyphicon glyphicon-time"></span><font size="4"> {{this.form.submission}}</font> </h5>
   
      <br><br>        
      <img src="https://images.freeimages.com/images/large-previews/9a4/large-pumpkin-1387927.jpg" class="img-fluid" alt="Responsive image">       
      
      
      
           </font>
                            </div>
                            
                           
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        name: '',
        title: '',
        food: null,
        checked: [],
        submission: '',
        file: null
      },
      foods: [
        { text: 'Select One', value: null },
        'Gamer', 'Team', 'Manager', 'Fan'
      ],
      show: true
    }
  },
  name: 'MainContent',
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
      this.form.title= '';
      this.form.food = null;
      this.form.checked = [];
      this.form.submission = '';
  
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}

</script>


