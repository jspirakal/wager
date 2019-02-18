<template>
  <div class="col-md-2 p-0" id="sidebar">
    <div class="sidebar-left pl-0 collapse d-flex">
      <ul class="nav flex-column flex-nowrap">
        <li v-if="!loggedIn" class="nav-item">
          <a class="nav-link collapsed" href="#submenu1" data-toggle="collapse" data-target="#submenu1">Join/login      </a>
    
          <div class="collapse" id="submenu1" aria-expanded="false">
            <ul class="flex-column pl-4 nav">
              <li class="nav-item">
                <router-link to="/login" class="nav-link collapsed py-1">Login</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/register" class="nav-link collapsed py-1">Register</router-link>
                      
              </li>
            </ul>
          </div>
          <hr>
        </li>
        <li v-if="loggedIn" class="nav-item">
          <a class="nav-link collapsed" href="#submenu1" data-toggle="collapse" data-target="#submenu1">Logout</a>
          <div class="collapse" id="submenu1" aria-expanded="false">
            <ul class="flex-column pl-4 nav">
              <li class="nav-item">
                <router-link to="/logout" class="nav-link collapsed py-1">Logout</router-link>
                <hr>
              </li>
            </ul>
          </div>
          <hr>
        </li>

        <li class="nav-item">
          <a class="nav-link collapsed" href="#submenu2" data-toggle="collapse" data-target="#submenu2">Play Games </a>
             <hr>
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
          </div>
        
        </li>
        <li class="nav-item" v-if="team">
          <a class="nav-link collapsed" href="#teams" data-toggle="collapse" data-target="#teams">My Teams</a>
           <hr>
          <div class="collapse" id="teams" aria-expanded="false">
            <ul class="flex-column pl-4 nav">
              <li class="nav-item">
                <router-link :to="`/team/${team._id}`" class="nav-link collapsed py-1">{{team.teamName}}</router-link>
              </li>
 <hr>
            </ul>
          </div>
          <hr>
        </li>
        <li class="nav-item">
          <a class="nav-link collapsed" href="#submenu3" data-toggle="collapse" data-target="#submenu3">Create</a>
                    <hr>
          <div class="collapse" id="submenu3" aria-expanded="false">
            <ul class="flex-column pl-4 nav">
              <li class="nav-item">
                <router-link to="/portfolio" class="nav-link collapsed py-1">Portfolio</router-link>
              </li>
              <li class="nav-item">
                <a @click="$emit('createTeam')" class="nav-link collapsed py-1">Team</a>
              </li>
              <hr>
            </ul>
          </div>
          
        </li>
          <li class="nav-item">
          <a class="nav-link collapsed" href="#submenu10" data-toggle="collapse" data-target="#submenu10">Streaming</a>

          <div class="collapse" id="submenu10" aria-expanded="false">
            <ul class="flex-column pl-4 nav">
              <li class="nav-item">
                <div class="active" id="line1">
                  <li>
                    <a href="#/streams" style="text-decoration: none;">Watch streams</a>
                  </li>
                </div>


              </li>
            </ul>
          </div>
          <hr>
        </li>
        <li class="nav-item">
          <a class="nav-link collapsed" href="#submenu4" data-toggle="collapse" data-target="#submenu4">Sponsor</a> 
          <div class="collapse" id="submenu4" aria-expanded="false">
            <ul class="flex-column pl-4 nav">
              <li class="nav-item">
              <li>
              <a href="#/sponsors" style="text-decoration: none;">Sponsors Page </a>
              </li>
          <hr>
              </ul>
              </div>
 <hr style="    clear: both;
    visibility: hidden;"> 
              </li>

              
             <li class="nav-item"> <hr>
          <a class="nav-link collapsed" href="#submenu5" data-toggle="collapse" data-target="#submenu5">Hire</a>
 <div class="collapse" id="submenu5" aria-expanded="false">  </div>
          <div class="collapse" id="submenu5" aria-expanded="false">
           <ul class="flex-column pl-4 nav">
              <li class="nav-item">
                <div class="active" id="line1">
                  <li>
                    <a id="a" style="text-decoration: none;">Teams</a>
                    <a id="b" style="text-decoration: none;">Coming Soon</a>
                  </li>
                </div>
                <div class="active" id="line2">
                  <li>
                    <a id="a" style="text-decoration: none;">Players</a>
                    <a id="b" style="text-decoration: none;">Coming Soon</a>
                  </li>
                </div>

              </li>
            </ul>
          </div>
          <hr>
        </li>
     
        <li class="nav-item">
          <a class="nav-link collapsed" href="#submenu6" data-toggle="collapse" data-target="#submenu6">Advertise</a>
          <div class="collapse" id="submenu6" aria-expanded="false">
           <ul class="flex-column pl-4 nav">
              <li class="nav-item">
                <div class="active" id="line1">
                  <li>
                    <a id="a" style="text-decoration: none;">Teams</a>
                    <a id="b" style="text-decoration: none;">Coming Soon</a>
                  </li>
                </div>
                <div class="active" id="line2">
                  <li>
                    <a id="a" style="text-decoration: none;">Players</a>
                    <a id="b" style="text-decoration: none;">Coming Soon</a>
                  </li>
                </div>

              </li>
            </ul>
          </div>
          <hr>
        </li>
        <li class="nav-item">
          <a class="nav-link collapsed" href="#submenu7" data-toggle="collapse" data-target="#submenu7">Fundraise</a>

          <div class="collapse" id="submenu7" aria-expanded="false">
            <ul class="flex-column pl-4 nav">
              <li class="nav-item">
                     <div class="active" id="line1">
                  <li>
                    <a id="a" style="text-decoration: none;">Teams</a>
                    <a id="b" style="text-decoration: none;">Coming Soon</a>
                  </li>
                </div>
                <div class="active" id="line2">
                  <li>
                    <a id="a" style="text-decoration: none;">Players</a>
                    <a id="b" style="text-decoration: none;">Coming Soon</a>
                  </li>
                </div>

              </li>
            </ul>
          </div>
          <hr>
        </li>
        <li class="nav-item">
          <a class="nav-link collapsed" href="#submenu8" data-toggle="collapse" data-target="#submenu8">Leaderboard</a>

          <div class="collapse" id="submenu8" aria-expanded="false">
            <ul class="flex-column pl-4 nav">
              <li class="nav-item">
                <div class="active" id="line1">
                  <li>
                    <a id="a" style="text-decoration: none;">Teams</a>
                    <a id="b" style="text-decoration: none;">Coming Soon</a>
                  </li>
                </div>
                <div class="active" id="line2">
                  <li>
                    <a id="a" style="text-decoration: none;">Players</a>
                    <a href="#" id="b" style="text-decoration: none;">Coming Soon</a>
                  </li>
                </div>

              </li>
            </ul>
          </div>
          <hr>
        </li>
        <li class="nav-item">
          <a class="nav-link collapsed" href="#submenu9" data-toggle="collapse" data-target="#submenu9">Events</a>

          <div class="collapse" id="submenu9" aria-expanded="false">
            <ul class="flex-column pl-4 nav">
              <li class="nav-item">
                <div class="active" id="line1">
                  <li>
                    <a id="a" style="text-decoration: none;">Create an event</a>
                    <a id="b" style="text-decoration: none;">Coming Soon</a>
                  </li>
                </div>
                <div class="active" id="line2">
                  <li>
                    <a id="a" style="text-decoration: none;">Buy tickets</a>
                    <a id="b" style="text-decoration: none;">Coming Soon</a>
                  </li>
                </div>

              </li>
            </ul>
          </div>
          <hr>
        </li>
        <li class="nav-item">
          <a class="nav-link collapsed" href="#submenu11" data-toggle="collapse" data-target="#submenu11">Results</a>

          <div class="collapse" id="submenu11" aria-expanded="false">
            <ul class="flex-column pl-4 nav">
              <li class="nav-item">
                <div class="active" id="line1">
                  <li>
                    <a id="a" style="text-decoration: none;">Teams</a>
                    <a id="b" style="text-decoration: none;">Coming Soon</a>
                  </li>
                </div>
                <div class="active" id="line2">
                  <li>
                    <a id="a" style="text-decoration: none;">Players</a>
                    <a id="b" style="text-decoration: none;">Coming Soon</a>
                  </li>
                </div>

              </li>
            </ul>
          </div>
          <hr>
        </li>
        <li class="nav-item">
          <a class="nav-link collapsed" href="#submenu12" data-toggle="collapse" data-target="#submenu12">Forum</a>
          <div class="collapse" id="submenu12" aria-expanded="false">
            <ul class="flex-column pl-4 nav">
              <li class="nav-item">
                <a href="http://wagergames.freeforums.net/" class="nav-link collapsed py-1">Enter forum</a>
              </li>
            </ul>
          </div>
          <hr>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import {
  mapGetters
} from 'vuex';

export default {
  name: 'SidebarLeft',
  computed: {
    ...mapGetters({
      team: "team/activeTeam"
    }),
    loggedIn() {
      if (this.$store.getters.loggedIn) {
        this.$store.dispatch("getProfile");
        return true;
      }

      return false;
    }
  }
}
</script>

<style>
.a {
  display: inline;
}
ul#line1:hover a#a {
  display: none;
}
ul#line1 a#b {
  display: none;
}
ul#line1:hover a#b {
  display: inline;
  color: yellow
}

ul#line1 c#c {
  display: inline;
}
ul#line2:hover c#c {
  display: none;
}
ul#line2 c#d {
  display: none;
}
ul#line2:hover c#d {
  display: inline;
  color: yellow
}
</style>

