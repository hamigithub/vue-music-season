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
                <img class="homeLogo" src="../assets/img/logo.png" alt />
                <p class="homeTitleP font-bold">
                  {{ $t("appPublic.row2") }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-12 padding-bottom20">
          <div class="padding-bottom20 font-grayBlue">
            <h2 class="text-center">
              {{ $t("home.homeTitle.row7") }}
            </h2>
            <router-link :to="{ name: 'constitution' }">
              <h3 class="text-center font-grayBlue">
                {{ $t("home.homeTitle.row8") }}
              </h3>
            </router-link>
            <h2 class="text-center">
              {{ $t("home.homeTitle.row9") }}
            </h2>
            <h2 class="text-center padding-bottom20">
              {{ $t("home.homeTitle.row10") }}
            </h2>
          </div>
          <h3 class="lineHeight">{{ $t("home.homeTitle.row1") }}</h3>
          <p>{{ $t("home.homeTitle.row1-2") }}</p>
          <p class="padding-top20">{{ $t("home.homeTitle.row2") }}</p>
          <p>{{ $t("home.homeTitle.row3") }}</p>
          <p>{{ $t("home.homeTitle.row4") }}</p>
          <p>{{ $t("home.homeTitle.row5") }}</p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="text-center padding-top50">
            <!-- <div>
              <iframe
                class="mainVideo"
                src="//player.bilibili.com/player.html?aid=669442709&cid=231759097&page=1"
                scrolling="no"
                border="0"
                frameborder="no"
                framespacing="0"
                allowfullscreen="true"
              ></iframe>
            </div> -->
            <div>
              <iframe
                class="mainVideo"
                src="https://www.youtube.com/embed/D3is2KXSvDs"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>

            <p class="text-center padding-top15 text-gray">
              2020 Online International Piano Pedagogy Symposium
            </p>
          </div>
        </div>
        <div class="col-xs-12 padding-top20">
          <div class="homeSubject padding-bottom20">
            <p class="lineHeight">{{ $t("home.homeText.row1") }}</p>
            <p class="lineHeight">{{ $t("home.homeText.row2") }}</p>
            <p class="lineHeight">{{ $t("home.homeText.row3") }}</p>
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
  methods: {},
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
  display: flex;
  align-items: center;
}

.homeTitleP {
  text-align: center;
  padding: 0 5px;
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

.arrows {
  width: 200px;
  height: 50px;
  background: #0366d6;
  text-align: center;
  font-size: 32px;
  color: #ffffff;
  margin: 0 auto;
  border-radius: 10px;
  cursor: pointer;
}
</style>
