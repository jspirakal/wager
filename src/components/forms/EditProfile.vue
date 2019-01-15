<template>
  <div>
    <b-form @submit.prevent="submit">
      <b-form-group id="exampleInputGroup1"
                    label="Name:"
                    label-for="name">
        <b-form-input id="name"
                      type="text"
                      v-model="form.name"
                      placeholder="Enter name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="age"
                    label="Age"
                    label-for="exampleInput2">
        <b-form-input id="age"
                      type="number"
                      v-model="form.age"
                      placeholder="Enter age">
        </b-form-input>
      </b-form-group>
      <b-form-group id="role"
                    label="Favorite Role"
                    label-for="role">
        <b-form-input id="role"
                      type="text"
                      v-model="form.favRole"
                      placeholder="Favorite role">
        </b-form-input>
      </b-form-group>
      <b-form-group id="description"
                    label="Description"
                    label-for="description">
        <b-form-textarea id="description"
                      v-model="form.UserFulldescription"
                     :rows="3">
        </b-form-textarea>
      </b-form-group>
      <!-- Styled -->
      <b-form-file v-model="file" :state="Boolean(file)" placeholder="Choose avatar"></b-form-file>
      <div v-if="file" class="mt-3">Selected file: {{file && file.name}}</div>

      <div style="margin-top: 20px; text-align: right">
        <div v-if="load" class="lds-ring"><div></div><div></div><div></div><div></div></div>
        <b-button type="submit" variant="primary">Submit</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import api from "@/services/RestService"
import { mapGetters, mapActions } from "vuex";

export default {
  name: "edit-profile",
  props: ['data'],
  data() {
    return {
      load: false,
      file: null,
      form: {
        name: '',
        age: '',
        profilePic: '',
        favRole: '',
        description:'',
      },
      request: 'put',
    }
  },
  mounted() {
  },
  methods: {
    ...mapGetters({
        getUserId: "getUserId"
      }),
    async submit() {
      console.log("submitting");
      let that = this;
      that.load = true;

      if(this.file)
      {
        let formData = new FormData();
        formData.append("file", this.file);
        this.profilePic = await api.postMultipart("http://localhost:3000/api/file/upload", formData );
        console.log(this.profilePic.data.url);
      }

      if(this.request == 'post')
        api.post("http://localhost:3000/api/users/add-detail", {
          name: this.form.name,
          userId: this.getUserId(),
          profilePic: this.profilePic ? this.profilePic.data.url : this.data.profilePic,
          age: this.form.age,
          favRole: this.form.favRole,
          UserFulldescription: this.form.UserFulldescription,
        }).then(res => {that.load = false; that.$emit("submit", res.data)})
        .catch(err => console.log(err))
      else {
        api.put("http://localhost:3000/api/users/update-detail", {
          name: this.form.name,
          userId: this.getUserId(),
          profilePic: this.profilePic ? this.profilePic.data.url : this.data.profilePic,
          age: this.form.age,
          favRole: this.form.favRole,
          UserFulldescription: this.form.UserFulldescription,
        }).then(res => {that.load = false; that.$emit("submit", res.data)})
        .catch(err => console.log(err))
      }
    }
  },
  watch: {
    data(){
      this.form = this.data;
      if(Object.keys(this.data).length == 0) this.request = "post";
      else this.request = "put";
    }
  }
}
</script>

