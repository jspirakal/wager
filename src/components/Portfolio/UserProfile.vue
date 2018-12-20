<template>
    <div class="row profile">
        <div class="col-md-2 person">
                <img width="150" :src="fields.profilePic ? fields.profilePic : 'img/person.png'" alt="Hero">
        </div>

        <div class="col-md-10">
            <div class="row">
                <div class="col-md-6">
                    <h5>{{fields.name}}</h5>
                    <h5>Age: <span class="sky-blue">{{fields.age ? fields.age : "-"}}</span></h5>
                    <h5>Favourite Role :<span class="sky-blue">{{fields.favRole ? fields.favRole : "-"}}</span></h5>
                    <h5>Alternative ID :<span class="sky-blue">CAT / TOKO</span></h5>
                </div>
                <div class="col-md-6">
                    <h5>World Ranking:<span class="sky-blue"> 177 </span></h5>
                    <h5>WG Rank:<span class="sky-blue">18</span></h5>
                    <h5>Game Experience:<span class="sky-blue"> 6 years</span></h5>
                    <h5>Status:<span class="sky-blue">   6 years</span></h5>
                        <!-- <b-button :pressed.sync="myToggle" variant="primary">Toggle Me</b-button> -->
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <p class="bio"><span>Bio :</span>{{fields.UserFulldescription ? fields.UserFulldescription : "not available"}}</p>
                    <div class="float-right">
                            <a href="#">Read More>></a>
                    </div>
                </div>
            </div>
            <i @click="showModal" class="fa fa-pencil fa-1x"></i>
        </div>
        <div>

        <!-- Modal Component -->
        <b-modal ref="modal1" id="modal1" title="Edit Profile" hide-footer>
            <EditProfile @submit="closeModal" :data="Object.keys(data).length == 0? {} : data" />
        </b-modal>
        </div>
    </div>
</template>

<script>
import EditProfile from '@/components/forms/EditProfile';
import UserService from '@/services/UserService';
import { mapGetters, mapActions } from "vuex";

export default {
    name: 'UserProfile',
    components: {
        EditProfile
    },
    props: ["data"],
    computed: {
        fields() {
            return this.newData || this.data;
        }
    },
    data()  {
        return {
            showLoading: true,
            newData: ''
        }
    },
    methods: {
        showModal() {
            this.$refs.modal1.show();
        },
        async closeModal(obj) {
            this.newData = {...(obj.response || obj)};
            this.$refs.modal1.hide();
            this.$emit("refresh");
        }
    }
}
</script>

<style>
    .profile {
        background-image: url('~@/assets/cover.jpg');
    }
    #modal1 {
        color: black;
    }
    header {
        margin-top: 0px;
    }
</style>
