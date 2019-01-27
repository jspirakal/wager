<template>
	<div v-if="newData">
		<!--====================================START-RAW _1================================-->
		<div	 class="raw1" style="position: relative">
			<div class="nav">
				<span style="background:#5a5859 ">Home</span>
				<span>Lol</span>
				<span>PUBG</span>
				<span>CS : GO</span>
			</div>
			<div v-if="data" class="col_1" style="height: 320px">
				<div v-if="data.selectedPlayers.length" class="block">
					<p>Selected Players</p>
					<div style="padding-left: 10px" v-for="(player, i) in data.selectedPlayers" :key="i" class="box">
						<!--box-->
						<center>
							<img src="img/p1.jpg" />
							<span>{{player	}}</span>
						</center>
					</div>
					<!--end-box-->
				</div>
				<div v-else style="padding: 10px	">no players added in team yet</div>
			</div>
			<!--end-col_1-->

			<div class="col_2">
				<i class="fa fa-pencil" @click="$root.$emit('openDialog', 'TeamUpcomingEvents')"></i>
				<flickity ref="flickity">
					<div class="carousel-cell gallery-cell" v-for="(item, i) in data.upcomingEvents" :key="i">
						<div class="img" :style="{'background':'url('+item.eventImage+')'}"></div>
						<div class="txt">
							<p>1st
								<br> {{item.eventName}}
								<br>{{item.eventDate}}</p>
						</div>
					</div>
				</flickity>
			</div>
			<!--end-col_2.-->
			<!--end-RAW_1-->
			<!--====================================END-RAW_1================================-->

			<!--====================================START-RAW_2================================-->
			<div class="raw_2">
				<div class="title" style="position: relative">
					<p>Achievements
						<i class="fa fa-pencil" @click="$root.$emit('openDialog', 'TeamAchievement')"></i>
					</p>
				</div>
				<div class="content">
					<flickity class="gallery" v-if="data.achievements.length > 0">
						<div class="carousel-cell gallery-cell" v-for="(item, i) in data.achievements" :key="i">
							<div class="img">
								<center>
									<img :src="item.imgPath">
								</center>
							</div>
							<div class="txt">
								<p>
									<span style="color:red">{{item.achievementName}} </span>
									<br> {{item.dateOfAchievement}}
									<br> {{item.tournamentName}}
									<br> {{item.venueOfAchievement}}</p>
							</div>
						</div>
						<!--end-gallery cell-->
					</flickity>
					<!--end-gallery-->
				</div>
			</div>
			<!--====================================END-RAW_2================================-->

			<!--====================================START-RAW_3 (MATCHES)================================-->
			<div class="raw_3" style="position: relative">
				<h3>MATCHES 
					<i class="fa fa-pencil" style="font-size: 16px" @click="$root.$emit('openDialog', 'TeamMatch')"></i>
				</h3>
				<div class="col1">
					<div>
						<a href="#">Recent</a>
						<a href="#" style="background:#222222">Upcoming</a>
					</div>
					<h2>( GMT + 2 )</h2>
					<a href="#" style="width:80%;float:left;text-align:center;margin:20px 10%;border-radius:10px;">Buy Event Tickets
					</a>
				</div>
				<div class="col2" v-if="data.matches.length > 0">
					<div class="team" v-for="(item, i) in data.matches" :key="i">
						<div class="col">
							<img :src="item.gamePic" />
							<p>{{item.gameName}}
								<br>{{item.date}}</p>
							<a :href="item.link">Watch </a>
						</div>
						<div style="margin-top:50px">
							<div class="col">
								<center>
									<img :src="item.team1Logo" />
								</center>
							</div>
							<div class="col">
								<center>
									<p>VS</p>
								</center>
							</div>
							<div class="col">
								<center>
									<img :src="item.team2Logo" />
								</center>
							</div>
						</div>
					</div>
					<!--end-team-->
				</div>
				<!--end-col-2-->
			</div>
			<!--====================================END-RAW_3================================-->

			<!--====================================START-RAW_4================================-->
			<div class="raw_4">
				<h4>Badges</h4>
				<div class="badges">
					<div class="raw_2">
						<div class="content">
							<flickity class="gallery" style="background:#050511">
								<div class="carousel-cell gallery-cell">
									<div class="img">
										<center>
											<img src="img/aw1.png">
										</center>
									</div>
								</div>
								<!--end-gallery cell-->
								<div class="carousel-cell gallery-cell">
									<div class="img">
										<center>
											<img src="img/aw4.png">
										</center>
									</div>
								</div>
								<!--end-gallery cell-->
								<div class="carousel-cell gallery-cell">
									<div class="img">
										<center>
											<img src="img/aw3.png">
										</center>
									</div>
								</div>
								<!--end-gallery cell-->
								<div class="carousel-cell gallery-cell">
									<div class="img">
										<center>
											<img src="img/aw4.png">
										</center>
									</div>
								</div>
								<!--end-gallery cell-->
								<div class="carousel-cell gallery-cell">
									<div class="img">
										<center>
											<img src="img/aw5.png">
										</center>
									</div>
								</div>
								<!--end-gallery cell-->
								<div class="carousel-cell gallery-cell">
									<div class="img">
										<center>
											<img src="img/aw2.png">
										</center>
									</div>
								</div>
								<!--end-gallery cell-->
							</flickity>
							<!--end-gallery-->
						</div>
					</div>
				</div>
				<!--end-raw2-->
			</div>
			<!--====================================END-RAW_4================================-->

			<!--====================================START-RAW_4_TXT================================-->
			<div class="raw_4_txt">
				<div class="col">
					<p style="margin-top:30px">
						<b>Funds raised for :</b>
					</p>
				</div>
				<div class="col">
					<p>
						<b>Tournaments </b>
						<br> 200,000WGT</p>
					<div class="wrapper-inner-tab-backgrounds-second">
						<div class="sim-button button17">
							<span>Contribute</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col">
			<!-- <div style="z-index: -1">
				<b>Tournaments </b>
				<br> 200,000WGT
			</div> -->
			<div class="wrapper-inner-tab-backgrounds-second">
				<div class="sim-button button17">
					<span>Contribute</span>
				</div>
			</div>
		</div>
		<div class="col">
			<!-- <p style="margin-top:20px">Profile share
				<br>10%</p> -->
		</div>
		<!--====================================END-RAW_4_TXT================================-->


		<!--====================================START-SHOP================================-->
		<div class="shop" style="position: relative">
			<h4>SHOP
			<i class="fa fa-pencil" style="font-size: 16px" @click="$root.$emit('openDialog', 'TeamProduct')"></i>
			</h4>
			<flickity v-if="data.products.length > 0">
				<div class="carousel-cell" v-for="(item, i) in data.products" :key="i">
					<center>
						<p>{{item.productName}}</p>
						<br>
						<p><img :src="item.image" /></p>
						<br>
						<br>
						<p>{{item.price}} WGT </p>
						<div class="sim-button button17">
							<a :href="item.link"><span>Buy Now</span></a>
						</div>
						<div class="wrapper-inner-tab-backgrounds-second">
							<div class="sim-button button17">
								<a :href="item.link"><span>Buy Now</span></a>
							</div>
						</div>
				</center>
				</div>
			</flickity>
			<!-- <div class="col">
				<center>
					<p>Blacer T Shirt </p>
					<br>
					<img src="img/shirt.png" />
					<br>
					<br>
					<p>20 WGT </p>
					<div class="wrapper-inner-tab-backgrounds-second">
						<div class="sim-button button17">
							<span>Buy Now</span>
						</div>
					</div>
				</center>
			</div> -->
			<!--end-col-->
		</div>
		<!--====================================END-SHOP================================-->
	</div>
</template>

<script>
import Flickity from 'vue-flickity';
import {mapGetters, mapActions, mapState} from 'vuex';
import { setTimeout } from 'timers';

export default {
	name: "Raw",
	data() {
		return {
			newData: true
		}
	},
  computed: {
    ...mapGetters({
      data: 'team/activeTeam'
		})
  },
	components: {
		Flickity
	},
	watch: {
		data() {
			this.newData = false;
			setTimeout(() => this.newData = true, 500)
		}
	}
};
</script>

<style>
	.carousel-cell {
		padding: 20px 10px !important;
		min-width: 143px;
	}
	.carousel-cell p {
		max-height: 80px;
		white-space: nowrap;
	}
</style>
