<template>
     <div class="col-md-8 main-content">
        <div class="row">
                <div class="col-md-6">
                        <h5 class="heading">Current Teams</h5>
                        <i @click="showTeamModal" class="fa fa-pencil fa-1x"></i>  
                        <div class="current-team">
                            <div v-for="(item, key) of data.currentTeam" :key="key" @click="showTeamModal(true, key)">
                                    <img :src="item.imgPath" alt="Team 1">
                                    <h5>{{item.name}}</h5>
                            </div>
                        </div>
                </div>
                <div class="col-md-6">
                        <h5 class="heading">Past Teams</h5>
                        <i @click="showTeamModal(false)" class="fa fa-pencil fa-1x"></i>
                        <div class="current-team">
                            <div v-for="(item, key) of data.pastTeam" :key="key" @click="showTeamModal(false, key)">
                                    <img :src="item.imgPath" alt="Team 1">
                                    <h5>{{item.name}}</h5>
                            </div>
                            
                        </div>
                </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                    <h5 class="heading">Badges</h5> 
                    <div class="badges">
                            <div>
                                    <img src="img/badges1.png" alt="">
                            </div>
                            <div>
                                    <img src="img/badges2.png" alt="">
                            </div>
                            <div>
                                    <img src="img/badges3.png" alt="">
                            </div>
                            <div>
                                    <img src="img/badges4.png" alt="">
                            </div>
                            <div>
                                    <img src="img/badges1.png" alt="">
                            </div>
                            <div>
                                    <img src="img/badges2.png" alt="">
                            </div>
                            <div>
                                    <img src="img/badges3.png" alt="">
                            </div>
                            <div>
                                    <img src="img/badges4.png" alt="">
                            </div>
                    </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                    <h5 class="heading">Achivements</h5> 
                    <i @click="showAchievementModal()" class="fa fa-pencil fa-1x"></i>
                    <div class="achivements">
                            <div @click="showAchievementModal(index)" v-for="(item, index) of data.acheivements" :key="index">
                                    <img :src="item.imgPath" alt="">
                                    <h5 class="rank">{{item.acheivementName}}</h5>
                                    <h5>{{(item.dateOfAcheivement.split('T'))[0]}}</h5>
                                    <h5>{{item.venueOfAcheivemnet}}</h5>
                            </div>
                    </div>
            </div>
    </div>
    <div class="row">
                    <div class="col-md-6">
                            <h5 class="heading">Raised</h5>
                            <div class="row t m-0">
                                    <div class="col-6 p-0">
                                            <h5>H2H</h5>
                                            <h5>783,450 WGT</h5>
                                            <h5 class="percentage">(30%)</h5>
                                            <a class="btn fund" href="#">Fund</a>
                                    </div>
                                    <div class="col-6 p-0">
                                            <h5>Tornaments</h5>
                                            <h5>1,000,000 WGT</h5>
                                            <h5 class="percentage">(25%)</h5>
                                            <a class="btn fund" href="#">Fund</a>
                                    </div>
                            </div>
                            <div class="row m-0">
                                    <div class="col-12 next-match">
                                            <h5>Next Match  CS :  GO     18 / 08 / 18 <a class="btn btn-sm btn-more" href="#">More</a> </h5>
                            </div>
                            </div>
                    </div>
                    <div class="col-md-6">
                            <h5 class="heading">Vote</h5>
                            <div class="vote">
                                    <ol>
                                            <li>
                                                    <span>Summer Hit 5 Millon Prze Pool</span>
                                                    <p class="like float-right"><i class="fa fa-thumbs-up"></i> 7k</p>
                                            </li> <hr>
                                            <li>
                                                    <span>Tour De france 2 Millon Prze Pool</span>
                                                    <p class="like float-right"><i class="fa fa-thumbs-up"></i> 5.1k</p>
                                            </li> <hr>
                                            <li>
                                                    <span>Euro Cup CS : GO 1 Millon Prze Pool</span>
                                                    <p style="padding-top: 5px" class="like float-right"><i class="fa fa-thumbs-up"></i> 4.1k</p>
                                            </li>
                                    </ol>
                            </div>
                    </div>
            </div>
            <!-- Modal Component -->
        <b-modal ref="teamModal" id="modal1" title="Edit Team" hide-footer>
            <EditTeam :request="(Object.keys(this.data).length == 0) ? 'post' : 'put'" @submit="closeTeamModal" :type="teamToEdit.type" :data="teamToEdit.data" :team="editTeamItem" />
        </b-modal>
        <b-modal ref="achievementModal" id="modal2" title="Edit Achievement" hide-footer>
            <EditAchievement 
            :request="(Object.keys(this.data).length == 0) ? 'post' : 'put'" 
            @submit="closeAchievementModal" 
            :index="editAchievementItem" 
            :data="data.acheivements ? data.acheivements : []"  />
        </b-modal>
        </div>
        
</template>

<script>
import EditTeam from '@/components/forms/EditTeam';
import EditAchievement from '@/components/forms/EditAchievement';
import UserService from '@/services/UserService';
import { mapGetters, mapActions } from "vuex";

export default {
    name: 'MainContent',
    components: {
        EditTeam,
        EditAchievement
    },
    props: ["data"],
    data() {
        return  {
                teamToEdit: "",
                editTeamItem: false,
                editAchievementItem: false,
                modalComponent: EditTeam
        }
    },
    computed: {
        fields() {
            return this.newData || this.data;
        }
    },
    methods: {
            showTeamModal(current = true, edit = false)
            {
                this.teamToEdit = current ? {data:this.data.currentTeam, type: 'currentTeam'} : {data:this.data.pastTeam, type: 'pastTeam'};
                this.editTeamItem = edit;
                this.$refs.teamModal.show();
            },
            closeTeamModal(res)
            {
                if(this.editTeamItem !== false)
                        this.$emit("refresh");
                this.$refs.teamModal.hide();
            },
            showAchievementModal(edit = false)
            {
                this.editAchievementItem = edit;
                this.$refs.achievementModal.show();
            },
            closeAchievementModal()
            {
                if(this.editAchievementItem !== false)
                        this.$emit("refresh");
                this.$refs.achievementModal.hide();
            }
    }
}
</script>

<style>

</style>
