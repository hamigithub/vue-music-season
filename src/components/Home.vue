<template>
  <div id="home" class="home">
    <div class="homeBanner">
      <div id="bannerWrap" class="bannerWrap">
        <img class="homeBannerImg" src="../assets/img/trip-1.jpg" alt />
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="homeMain">
            <div class="componentTitle">
              <div class="homeTitleWrap">
                <p class="title_p">
                  <img class="homeLogo" src="../assets/img/logo.png" alt />
                  {{$t('appPublic.row2')}}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-12 padding-bottom20">
          <h3 class="lineHeight">{{$t('home.homeTitle.row1')}}</h3>
          <p>{{$t('home.homeTitle.row1-2')}}</p>
          <p class="padding-top20">{{$t('home.homeTitle.row2')}}</p>
          <p>{{$t('home.homeTitle.row3')}}</p>
          <p>{{$t('home.homeTitle.row4')}}</p>
          <p>{{$t('home.homeTitle.row5')}}</p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="text-center padding-top50">
            <iframe
              class="mainVideo"
              src="//player.bilibili.com/player.html?aid=79452026&cid=135964771&page=1"
              scrolling="no"
              border="0"
              frameborder="no"
              framespacing="0"
              allowfullscreen="true"
            ></iframe>
            <p
              class="text-center padding-top15 text-gray"
            >The highlights of 2019 Conero Music Festival</p>
          </div>
        </div>
        <div class="col-xs-12 padding-top20">
          <div class="homeSubject padding-bottom20">
            <p class="lineHeight">{{$t('home.homeText.row1')}}</p>
            <p class="lineHeight">{{$t('home.homeText.row2')}}</p>
            <p class="lineHeight">{{$t('home.homeText.row3')}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
@media screen and (min-width: 720px) {
  .mainVideo {
    width: 98%;
    height: 600px;
  }
}

.homeTitleLogo {
  margin-right: 20px;
  width: 80px;
}

@media screen and (max-width: 996px) {
  .homeTitleLogo {
    width: 60px;
  }
}

.cmuInfo {
  text-align: center;
  padding: 10px 0;
}

.cmuInfo img {
  width: 50%;
}

.hotelInfoTitle {
  text-align: right;
}

.hotelInfoBtn {
  background-image: linear-gradient(90deg, #3c98b6, #9963b6);
}

.hotelInfo,
.localInfo {
  padding: 10px 0;
  text-align: center;
}

.hotelInfo img,
.localInfo img {
  cursor: pointer;
  width: 338px;
  height: 226px;
}

.hotelInfoLocation,
.hotelInfoLink,
.hotelInfoTextTitle,
.hotelInfoText {
  padding: 10px 0;
}

.hotelInfoLink a:hover,
.localInfoLink a:hover {
  text-decoration: underline;
}

.localInfoBtn {
  background-image: linear-gradient(90deg, #13b67f, #1751b6);
}

.homeSubject p {
  text-indent: 50px;
}

.homeTitleWrap {
  position: relative;
}

.spanCity {
  font-size: 1.2rem;
  position: absolute;
  right: 0;
  font-style: italic;
  font-weight: bold;
}

/*banner图*/
.bannerWrap {
  position: relative;
}

.homeBanner {
  text-align: center;
}

.homeBannerImg {
  width: 100%;
}

.tripWrap {
  border: #ffffff solid 10px;
  border-radius: 5px;
  position: relative;
  cursor: pointer;
}
</style>
