<template>
  <div>
    <b-form @submit.prevent="submit">
      <b-form-group id="exampleInputGroup1"
                    label="Event Name:"
                    label-for="name">
        <b-form-input id="name"
                      type="text"
                      v-model="form.eventName"
                      placeholder="Enter name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="date"
                    label="Date of Event"
                    label-for="date">
        <b-form-input id="date"
                      type="date"
                      v-model="form.eventDate"
                      placeholder="dd/mm/yyyy">
        </b-form-input>
      </b-form-group>
      <b-form-group id="link"
                    label="Event Website"
                    label-for="link">
        <b-form-input id="link"
                      type="text"
                      v-model="form.eventLink"
                      placeholder="url of event">
        </b-form-input>
      </b-form-group>
      <!-- Styled -->
      <b-form-file v-model="file" :state="Boolean(file)" placeholder="Choose event photo"></b-form-file>
      <div v-if="file" class="mt-3">Selected file: {{file && file.name}}</div>

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
      file: null,
      form: {
        eventName: '',
        eventImage: '',
        eventDate: '',
        eventLink: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      team: 'team/activeTeam'
    })
  },
  methods: {
    ...mapActions({
      updateTeam : 'team/updateTeam'
    }),
    async submit() {
      console.log("submitting");
      let that = this;
      that.load = true;

      var upload = '';

      if(this.file)
      {
        let formData = new FormData();
        formData.append("file", this.file);
        upload = await api.postMultipart("/api/file/upload", formData );
        this.form.eventImage = upload.data.url;
      }

      this.team.upcomingEvents.push(this.form);

      this.updateTeam({upcomingEvents: this.team.upcomingEvents})
        .then(res => this.$emit('finish'))
        .catch(err => this.$emit('finish'));
    }
  }
}
</script>

