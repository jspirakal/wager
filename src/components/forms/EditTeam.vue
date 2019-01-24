<template>
  <div>
    <b-form @submit.prevent="submit($event)">
      <b-form-group id="exampleInputGroup1"
                    label="Name:"
                    label-for="name">
        <b-form-input id="name"
                      type="text"
                      v-model="form.name"
                      placeholder="Enter name"
                      required>
        </b-form-input>
      </b-form-group>
      <!-- Styled -->
      <b-form-file ref="fileinput" :required="team === false ? true : false" v-model="file" :state="Boolean(file)" placeholder="Choose avatar"></b-form-file>
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
  name: "edit-team",
  props: ['data', 'team', 'type', 'request'],
  data() {
    return {
      load: false,
      file: null,
      form: {
        name: ''
      }
    }
  },
  methods: {
    ...mapGetters({
        getUserId: "getUserId"
      }),
    async submit(evt) {
      console.log("submitting");
      let that = this;
      that.load = true;

      if(this.file)
      {
        let formData = new FormData();
        formData.append("file", this.file);
        this.profilePic = await api.postMultipart("/api/file/upload", formData );
        this.$refs.fileinput.reset();
      }

      let payload = {
        name: this.form.name,
        imgPath: this.profilePic ? this.profilePic.data.url : (this.team !== false ? this.data[this.team].imgPath : '')
      };

      if(this.team !== false)
        this.data[this.team] = payload;
      else this.data.push(payload);

      payload = {};
      payload.userId = this.getUserId();
      payload[this.type] = this.data;

      if(this.request == 'post')
        api.post("/api/users/add-detail", payload)
        .then(res => {that.load = false; that.$emit("submit", res.data)})
        .catch(err => console.log(err))
      else {
        api.put("/api/users/update-detail", payload).
        then(res => {that.load = false; that.$emit("submit", res.data)})
        .catch(err => console.log(err))
      }
      
      this.form.name = null;
    }
  },
  watch: {
    data(){
      this.form = this.data || {};
    },
    team(){
      if(this.team !== false)
      {
        this.form.name = this.data[this.team].name;
      }
    }
  }
}
</script>
