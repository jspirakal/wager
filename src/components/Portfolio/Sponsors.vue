<template>
      <div class="row">
            <div class="col-md-12 pl-0 pr-0">
                    <h5 class="heading">Sponsors<switches style="vertical-align: middle; float: right; margin-right: 20px" v-model="enabled" theme="bootstrap" color="success"></switches></h5>
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
                    </div>
            </div>
    </div>
</template>

<script>
import Switches from 'vue-switches';
export default {
    name: 'Sponsors',
    components: {
            Switches
    },
    data() {
            return {
                    enabled: true
            }
    }
}
</script>

<style>

</style>
