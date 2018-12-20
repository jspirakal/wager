<template>
  <div>
    <b-form @submit.prevent="submit($event)">
      <b-form-group id="exampleInputGroup1"
                    label="Sponsor Name:"
                    label-for="name">
        <b-form-input id="name"
                      type="text"
                      v-model="form.name"
                      placeholder="Enter name"
                      required>
        </b-form-input>
      </b-form-group>
      <!-- Styled -->
      <b-form-file ref="fileinput" v-model="file" :state="Boolean(file)" placeholder="upload picture"></b-form-file>
      <div v-if="file" class="mt-3">Selected file: {{file && file.name}}</div>

      <div style="margin-top: 20px; text-align: right">
        <div v-if="load" class="lds-ring"><div></div><div></div><div></div><div></div></div>
        <b-button type="submit" variant="primary">Submit</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {},
      file: null,
      load: false
    }
  }
}
</script>

<style>

</style>
