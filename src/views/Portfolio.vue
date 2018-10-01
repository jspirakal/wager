<template>
     <div>
    <div class="container">
        <main-header></main-header>
        <user-profile></user-profile>
        <section>
            <div class="row">
                <sidebar-left></sidebar-left>
                <main-content></main-content>
                <sidebar-right></sidebar-right>
            </div>   
            <sponsors></sponsors> 
            <brands></brands>
        </section>
    </div>
    <footer-social></footer-social>
    <main-footer></main-footer>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import FooterSocial from '@/components/FooterSocial.vue';
import MainFooter from '@/components/MainFooter.vue';
import UserProfile from '@/components/Portfolio/UserProfile.vue';
import SidebarLeft from '@/components/Portfolio/SidebarLeft.vue';
import MainContent from "@/components/Portfolio/MainContent.vue";
import SidebarRight from '@/components/Portfolio/SidebarRight';
import Sponsors from '@/components/Portfolio/Sponsors.vue';
import Brands from '@/components/Portfolio/Brands.vue';
export default {
    name: 'Portfolio',
    components: {
    MainHeader,
    UserProfile,
    FooterSocial,
    MainFooter,
    SidebarLeft,
    MainContent,
    SidebarRight,
    Sponsors,
    Brands
  },
   mounted() {
    let SliderScript = document.createElement('script')
    SliderScript.setAttribute('src', 'js/main.js')
    document.head.appendChild(SliderScript)
  },
}
</script>

<style>

</style>
