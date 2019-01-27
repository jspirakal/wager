<template>
  <div>
    <b-form @submit.prevent="submit">
      <b-form-group id="name"
                    label="Team Name:"
                    label-for="name">
        <b-form-input id="name"
                      type="text"
                      v-model="form.teamName"
                      placeholder="Enter team name">
        </b-form-input>
      </b-form-group>

      <div style="margin-top: 20px; text-align: right">
        <div v-if="load" class="lds-ring"><div></div><div></div><div></div><div></div></div>
        <b-button type="submit" variant="primary">Submit</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Notification from "@/mixins/Notification";

export default {
  name: "create-team",
  props: ['modalProps'],
  mixins: [Notification],
  data() {
    return {
      form: {},
      load: false
    }
  },
  mounted() {
  },
  methods: {
    ...mapActions({
      createTeam: "team/createTeam"
    }),
    submit() {
      this.createTeam(this.form)
        .then(res => {this.showToast(res), this.$emit('finish')})
        .catch(err => {this.showToast(err, "error"), this.$emit('finish')});
    }
  }
}
</script>

