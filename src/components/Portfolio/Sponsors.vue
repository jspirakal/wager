<template>
        <div class="row">
                <div class="col-md-12 pl-0 pr-0">
                        <h5 class="heading">Sponsors
                                <switches style="vertical-align: middle; float: right; margin-right: 60px" v-model="enabled"
                                        theme="bootstrap" color="success"></switches>
                                <i @click="showModal" class="fa fa-pencil fa-1x"></i>  
                        </h5>
                        <div class="sponsors">
                                <div>
                                        <img src="img/sponsor_nike.png" alt="">
                                </div>
                                <div>
                                        <img src="img/sponsor_red_bull.png" alt="">
                                </div>
                                <div>
                                        <img src="img/sponsor_pepsi.png" alt="">
                                </div>
                                <div>
                                        <img src="img/sponsor_ray_ban.png" alt="">
                                </div>
                                <div>
                                        <img src="img/sponsor_james.png" alt="">
                                </div>

                                <div>
                                        <img src="img/sponsor_nike.png" alt="">
                                </div>
                                <div>
                                        <img src="img/sponsor_red_bull.png" alt="">
                                </div>
                                <div>
                                        <img src="img/sponsor_pepsi.png" alt="">
                                </div>
                                <div>
                                        <img src="img/sponsor_ray_ban.png" alt="">
                                </div>
                                <div>
                                        <img src="img/sponsor_james.png" alt="">
                                </div>
                                <div class="disabled-overlay" v-if="enabled == false"></div>
                        </div>
                </div>
    <b-modal ref="sponsorModal" id="modal1" title="Edit Sponsor" hide-footer>
        <EditSponsor  />
    </b-modal>
        </div>
</template>

<script>
import Switches from 'vue-switches';
import EditSponsor from '@/components/forms/EditSponsor';
export default {
    name: 'Sponsors',
    components: {
            Switches,
            EditSponsor
    },
    data() {
            return {
                    enabled: true
            }
    },
        methods: {
                showModal() {
                        this.$refs.sponsorModal.show();
                }
        }
}
</script>

<style>
  .brands-list {
    position: relative;
  }
  .disabled-overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,0.5);
  }
</style>
