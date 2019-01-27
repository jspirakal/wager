<template>
  <div>
    <b-form @submit.prevent="submit">
      <b-form-group id="exampleInputGroup1"
                    label="Product name:"
                    label-for="name">
        <b-form-input id="name"
                      type="text"
                      v-model="form.productName"
                      placeholder="Enter name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="date"
                    label="Product price"
                    label-for="date">
        <b-form-input id="date"
                      type="text"
                      v-model="form.price"
                      placeholder="product price">
        </b-form-input>
      </b-form-group>
      <b-form-group id="link"
                    label="Product Website"
                    label-for="link">
        <b-form-input id="link"
                      type="text"
                      v-model="form.buy"
                      placeholder="product website">
        </b-form-input>
      </b-form-group>
      <!-- Styled -->
      <b-form-file v-model="file" :state="Boolean(file)" placeholder="Product image"></b-form-file>
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
  name: "edit-team-product",
  props: ['data'],
  computed: {
    ...mapGetters({
      team: 'team/activeTeam'
    }),
  },
  data() {
    return {
      load: false,
      file: null,
      form: {}
    }
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

      if(this.file) {
        let formData = new FormData();
        formData.append("file", this.main);
        upload = await api.postMultipart("/api/file/upload", formData );
        if(upload.data.url)
          this.form.image = upload.data.url;
      }

      this.team.products.push(this.form);

      this.updateTeam({products: this.team.products})
        .then(res => this.$emit('finish'))
        .catch(err => this.$emit('finish'));
    }
  }
}
</script>

