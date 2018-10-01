<template>
    <div class="col-md-2 p-0">
                    <div class="sidebar-right">
                        <div class="card">
                                <div class="card-body">
                                        <input  class="search" type="text" name="search" id="search" placeholder="Search the site">
                                            <button class="btn-search float-right"><i class="fa fa-search"></i></button>
                                        <div class="side-nav-right">
                                                <ul>
                                                        <li class="active"><a href="#">Sep - 18</a> <hr></li>
                                                        <li><a href="#">Top 10 Teams</a><hr></li>
                                                        <li><a href="#">Top 10 Clubs</a><hr></li>
                                                        <li><a href="#">Top 10 Players</a><hr></li>
                                                        <li><a href="#">Top 10 Price Pools</a></li>
                                                </ul>
                                        </div>
                                </div>
                        </div>
                        <div class="card">
                                        <div class="card-body p-0">
                                                <div class="cs-go">
                                                        <h4>CS:GO</h4>
                                                        <h5>Player</h5>
                                                        <h5><button>Wanted</button></h5>
                                                </div>
                                        </div>
                                </div>
                                <div class="card">
                                        <div class="card-body p-0">
                                                <div class="ab_club">
                                                        <h4>AB</h4>
                                                        <h5>CLUB</h5>                                                                        
                                                        <h5><button>Apply</button></h5>
                                                        <h5>Manager Wanted</h5>
                                                </div>
                                        </div>
                                </div>
                                <div class="team-blacer">
                                        <h5 class="team-blacer-t">Team Blacer</h5>
                                        <img src="img/team_blacer.png" alt="">
                                        <p>Raising </p>
                                        <img class="icon-bar" src="img/team_blacer_k.png" alt="">
                                        <h5 class="pb-2">500.000 WGT</h5>
                                </div>
                                <div class="join"> 
                                        <div class="join-bg">
                                                <h5><button>Join</button></h5>
                                                <h5>21 M WGT</h5>
                                                <p>Prize Pool</p>
                                                <hr>
                                                <p class="m-0">2572<span>joined</span></p>
                                        </div>
                                        <div class="sponsors-wanted">
                                                <h5><button>Sponsors Wanted</button></h5>
                                                <h5 class="m-0">LoL Champions Team</h5>
                                        </div>
                                        <div class="buy_ticket">        
                                                <h5><button>Buy Ticket</button></h5>
                                                <h5>Euorpean Championship</h5>
                                                <h5><span class="big">21</span> Tickets Available </h5>
                                        </div>
                                </div>
                    </div>
            </div>
    
</template>
<script>
export default {
    name: 'SidebarRight'
}
</script>