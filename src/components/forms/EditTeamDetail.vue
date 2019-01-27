<template>
  <div>
    <b-form @submit.prevent="submit">
      <b-form-group id="exampleInputGroup1"
                    label="Team Name:"
                    label-for="name">
        <b-form-input id="name"
                      type="text"
                      v-model="form.teamName"
                      placeholder="Enter name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="founder"
                    label="Founder"
                    label-for="founder">
        <b-form-input id="founder"
                      type="text"
                      v-model="form.founder"
                      placeholder="founder name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="owner"
                    label="Owner"
                    label-for="owner">
        <b-form-input id="owner"
                      type="text"
                      v-model="form.ownerName"
                      placeholder="owner name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="location"
                    label="Location"
                    label-for="location">
        <b-form-textarea id="location"
                      v-model="form.location"
                     :rows="3">
        </b-form-textarea>
      </b-form-group>
      <!-- Styled -->
      <b-form-file v-model="cover" :state="Boolean(cover)" placeholder="Choose cover photo"></b-form-file>
      <div v-if="cover" class="mt-3">Selected file: {{cover && cover.name}}</div>
      <b-form-file v-model="profile" :state="Boolean(profile)" placeholder="Choose profile photo"></b-form-file>
      <div v-if="profile" class="mt-3">Selected file: {{profile && profile.name}}</div>

      <div style="margin-top: 20px; text-align: right">
        <div v-if="load" class="lds-ring"><div></div><div></div><div></div><div></div></div>
        <b-button type="submit" variant="primary">Update</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import api from "@/services/RestService"
import { mapGetters, mapActions } from "vuex";

export default {
  name: "edit-team-detail",
  props: ['data'],
  data() {
    return {
      load: false,
      cover: null,
      profile: null,
      cover: null,
      form: {
        teamName: '',
        ownerName: '',
        location: '',
        founder: '',
        coverImg: '',
        profileImg: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      team: 'team/activeTeam'
    }),
  },
  mounted() {
    this.form = {...this.team};
  },
  methods: {  
    ...mapActions({
      updateTeam: 'team/updateTeam'
    }),
    async submit() {
      console.log("submitting");
      let that = this;
      that.load = true;
      var upload = null;

      if(this.cover) {
        let formData = new FormData();
        formData.append("file", this.cover);
        upload = await api.postMultipart("/api/file/upload", formData );
        if(upload.data.url)
          this.form.coverImg = upload.data.url;
      }
      if(this.profile) {
        let formData = new FormData();
        formData.append("file", this.profile);
        upload = await api.postMultipart("/api/file/upload", formData );
        if(upload.data.url)
          this.form.profileImg = upload.data.url;
      }

      this.updateTeam(this.form)
        .then(res => this.$emit('finish'))
        .catch(err => this.$emit('finish'));
    }
  }
}
</script>

