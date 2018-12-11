<template>
   <div class="col-md-2 p-0" id="sidebar">
        <div class="sidebar-left pl-0 collapse d-flex">
            <ul class="nav flex-column flex-nowrap">
                            <li v-if="!loggedIn" class="nav-item">
                                    <a class="nav-link collapsed" href="#submenu1" data-toggle="collapse" data-target="#submenu1">Join/login</a>
                                    <div class="collapse" id="submenu1" aria-expanded="false">
                                            <ul class="flex-column pl-4 nav">
                                                    <li class="nav-item">
                                                            <a href="/login" class="nav-link collapsed py-1">Login</a>
                                                    </li>
                                                    <li class="nav-item">
                                                            <a href="/register" class="nav-link collapsed py-1">Register</a>
                                                    </li>
                                            </ul>
                                    </div> <hr>
                            </li>
                            <li v-if="loggedIn" class="nav-item">
                                    <a class="nav-link collapsed" href="#submenu1" data-toggle="collapse" data-target="#submenu1">Logout</a>
                                    <div class="collapse" id="submenu1" aria-expanded="false">
                                            <ul class="flex-column pl-4 nav">
                                                    <li class="nav-item">
                                                            <a href="/logout" class="nav-link collapsed py-1">Logout</a>
                                                    </li>
                                            </ul>
                                    </div> <hr>
                            </li>
                            
                            <li class="nav-item">
                                    <a class="nav-link collapsed" href="#submenu2" data-toggle="collapse" data-target="#submenu2">Play Games</a>
                                    <div class="collapse" id="submenu2" aria-expanded="false">
                                            <ul class="flex-column pl-4 nav">
                                                    <li class="nav-item">
                                                            <a href="steam://run/730" class="nav-link collapsed py-1">CS:GO</a>
                                                    </li>
                                                    <li class="nav-item">
                                                            <a href="steam://run/570" class="nav-link collapsed py-1">DotA 2</a>
                                                    </li>
                                                               <li class="nav-item">
                                                            <a href="steam://run/578080" class="nav-link collapsed py-1">PUBG</a>
                                                    </li>
                                                                 <li class="nav-item">
                                                            <a href="steam://run/252950" class="nav-link collapsed py-1">Rocket League</a>
                                                    </li>
                                                    
                                            </ul>
                                    </div> <hr>
                            </li>
                            <li class="nav-item">
                                    <a class="nav-link collapsed" href="#submenu3" data-toggle="collapse" data-target="#submenu3">Create</a>
                                    <div class="collapse" id="submenu3" aria-expanded="false">
                                            <ul class="flex-column pl-4 nav">
                                                    <li class="nav-item">
                                                            <a href="/portfolio" class="nav-link collapsed py-1">Portfolio</a>
                                                    </li>
                                                    <li class="nav-item">
                                                            <a href="#" class="nav-link collapsed py-1">Team</a>
                                                    </li>
                                            </ul>
                                    </div> <hr>
                            </li>
                            <li class="nav-item">
                                    <a  class="nav-link collapsed" href="#submenu4" data-toggle="collapse" data-target="#submenu4">Sponsor</a>
                                    
                                    <div class="collapse" id="submenu4" aria-expanded="false">
                                            <ul class="flex-column pl-4 nav">
                                                    <li class="nav-item">
                                                        
                                                            <li class="nav-item" ><a id="b" href="#" class="nav-link collapsed py-1">Coming soon</a> </li>
                                
                                                        <li class="nav-item">     <a id="b" href="#" class="nav-link collapsed py-1">Coming soon</a></li>
                                            </ul>
                                    </div> <hr>
                            </li>
                            <li class="nav-item">
                                    <a class="nav-link collapsed" href="#submenu5" data-toggle="collapse" data-target="#submenu5">Hire</a>
                                    <div class="collapse" id="submenu5" aria-expanded="false">
                                            <ul class="flex-column pl-4 nav">
                                                    <li class="nav-item">
                                                            <a href="#" class="nav-link collapsed py-1">coming soon</a>
                                                    </li>
                                                    <li class="nav-item">
                                                            <a href="#" class="nav-link collapsed py-1">coming soon</a>
                                                    </li>
                                            </ul>
                                    </div> <hr>
                            </li>
                            <li class="nav-item">
                                    <a class="nav-link collapsed" href="#submenu6" data-toggle="collapse" data-target="#submenu6">Advertise</a>
                                    <div class="collapse" id="submenu6" aria-expanded="false">
                                            <ul class="flex-column pl-4 nav">
                                                    <li class="nav-item">
                                                            <a href="#" class="nav-link collapsed py-1">coming soon</a>
                                                    </li>
                                                    <li class="nav-item">
                                                            <a href="#" class="nav-link collapsed py-1">coming soon</a>
                                                    </li>
                                            </ul>
                                    </div> <hr>
                            </li>
                            <li class="nav-item">
                                    <a class="nav-link collapsed" href="#submenu7" data-toggle="collapse" data-target="#submenu7">Fundraise</a>
                                    <div class="collapse" id="submenu7" aria-expanded="false">
                                            <ul class="flex-column pl-4 nav">
                                                    <li class="nav-item">
                                                            <a href="#" class="nav-link collapsed py-1">Teams</a>
                                                    </li>
                                                    <li class="nav-item">
                                                            <a href="#" class="nav-link collapsed py-1">Clubs</a>
                                                    </li>
                                            </ul>
                                    </div> <hr>
                            </li>
                            <li class="nav-item">
                                    <a class="nav-link collapsed" href="#submenu8" data-toggle="collapse" data-target="#submenu8">Leader Board</a>
                                    <div class="collapse" id="submenu8" aria-expanded="false">
                                            <ul class="flex-column pl-4 nav">
                                                    <li class="nav-item">
                                                            <a href="#" class="nav-link collapsed py-1">coming soon</a>
                                                    </li>
                                                    <li class="nav-item">
                                                            <a href="#" class="nav-link collapsed py-1">coming soon</a>
                                                    </li>
                                            </ul>
                                    </div> <hr>
                            </li>
                            <li class="nav-item">
                                    <a class="nav-link collapsed" href="#submenu9" data-toggle="collapse" data-target="#submenu9">Events</a>
                                    <div class="collapse" id="submenu9" aria-expanded="false">
                                            <ul class="flex-column pl-4 nav">
                                                    <li class="nav-item">
                                                            <a href="#" class="nav-link collapsed py-1">coming soon</a>
                                                    </li>
                                                    <li class="nav-item">
                                                            <a href="#" class="nav-link collapsed py-1">coming soon</a>
                                                    </li>
                                            </ul>
                                    </div> <hr>
                            </li>
                            <li class="nav-item">
                                    <a class="nav-link collapsed" href="#submenu10" data-toggle="collapse" data-target="#submenu10">Streaming </a>
                                    <div class="collapse" id="submenu10" aria-expanded="false">
                                            <ul class="flex-column pl-4 nav">
                                                    <li class="nav-item">
                                                            <a href="#" class="nav-link collapsed py-1">coming soon</a>
                                                    </li>
                                                    <li class="nav-item">
                                                            <a href="#" class="nav-link collapsed py-1">coming soon</a>
                                                    </li>
                                            </ul>
                                    </div> <hr>
                            </li>
                            <li class="nav-item">
                                    <a class="nav-link collapsed" href="#submenu11" data-toggle="collapse" data-target="#submenu11">Results</a>
                                    <div class="collapse" id="submenu11" aria-expanded="false">
                                            <ul class="flex-column pl-4 nav">
                                                    <li class="nav-item">
                                                            <a href="#" class="nav-link collapsed py-1">coming soon</a>
                                                    </li>
                                                    <li class="nav-item">
                                                            <a href="#" class="nav-link collapsed py-1">coming soon</a>
                                                    </li>
                                            </ul>
                                    </div> <hr>
                            </li>
                            <li class="nav-item">
                                    <a class="nav-link collapsed" href="#submenu12" data-toggle="collapse" data-target="#submenu12">Forum</a>
                                    <div class="collapse" id="submenu12" aria-expanded="false">
                                            <ul class="flex-column pl-4 nav">
                                                    <li class="nav-item">
                                                            <a href="http://wagergames.freeforums.net/" class="nav-link collapsed py-1">Enter forum</a>
                                                    </li>
                                            </ul>
                                    </div> <hr>
                            </li>
                    </ul>
        </div>
                                
    </div>
</template>
<script>
export default {
    name: 'SidebarLeft',
    computed: {
        loggedIn() {
            return this.$store.getters.loggedIn;
        }
    }
}
</script>

<style>
ul#line2 a#a {
  display: inline;
}

ul#line2:hover a#a {
  display: none;
  
}

ul#line2 a#b {
  display: none;
}

ul#line2:hover a#b {
  display: inline;
    color: yellow
}

</style>

