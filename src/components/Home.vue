<template>
  <div id="home" class="home">
    <div class="homeBanner">
      <div id="bannerWrap" class="bannerWrap">
        <img class="homeBannerImg" src="../assets/img/trip-1.jpg" alt />
        <div id="tripLink">
          <div class="tripLinkText">
            <router-link class="font-white" :to="{name:'tripInfo'}">Learn more about Recanati ></router-link>
          </div>
          <div class="tripLink"></div>
        </div>
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
                <span class="spanCity">—— City of Recanati</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-12">
          <p class="thxfor">
            This festival is being hosted with the cooperation of
            Civica Scuola di Musica Beniamino Gigli， special thanks for their hospitality
          </p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="text-center">
            <iframe
              class="mainVideo"
              src="//player.bilibili.com/player.html?aid=79452026&cid=135964771&page=1"
              scrolling="no"
              border="0"
              frameborder="no"
              framespacing="0"
              allowfullscreen="true"
            ></iframe>
            <p class="text-center padding-top15 text-gray">Take a look of the beautiful city.</p>
          </div>
        </div>
        <div class="col-xs-12 padding-top20">
          <div class="homeSubject padding-bottom20">
            <p class="lineHeight">{{$t('homeSubject.row1')}}</p>
            <p class="lineHeight">{{$t('homeSubject.row2')}}</p>
            <p class="lineHeight">{{$t('homeSubject.row3')}}</p>
            <p class="lineHeight">{{$t('homeSubject.row4')}}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <!-- <div class="col-xs-12 col-md-6">
          <table class="padding-bottom20" border="0" cellpadding="10">
            <tr>
              <td>{{$t('homeText.row1')}}</td>
            </tr>
            <tr>
              <td>{{$t('homeText.row2')}}</td>
            </tr>
            <tr>
              <td>{{$t('homeText.row3')}}</td>
            </tr>
            <tr>
              <td>{{$t('homeText.row4')}}</td>
            </tr>
            <tr>
              <td>{{$t('homeText.row5')}}</td>
            </tr>
            <tr>
              <td>{{$t('homeText.row6')}}</td>
            </tr>
            <tr>
              <td>{{$t('homeText.row7')}}</td>
            </tr>
            <tr>
              <td>{{$t('homeText.row8')}}</td>
            </tr>
            <tr>
              <td>{{$t('homeText.row9')}}</td>
            </tr>
          </table>
        </div>-->
        <div class="col-xs-12 col-md-6">
          <table border="0" cellpadding="10">
            <tr>
              <td class="font-bold">{{$t('homeHosted.row2')}}</td>
            </tr>
            <tr>
              <td>{{$t('homeHosted.row3')}}</td>
              <td>{{$t('homeHosted.row3-1')}}</td>
            </tr>
            <tr>
              <td>{{$t('homeHosted.row4')}}</td>
              <td>{{$t('homeHosted.row4-1')}}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <!-- <div class="container">
      <div class="row">
        <div class="col-xs-12 text-center">
          <router-link :to="{name:'tripInfo'}">
            <div class="tripWrap">
              <img width="100%" src="../assets/img/conero-1.jpg" alt="conero" />
              <div class="tripLink">
                <p class="tripLinkText">Learn More ></p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>-->
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {
    onmovein() {
      // let bannerWrap = document.getElementById('bannerWrap');
      let tripLink = document.getElementById("tripLink");

      /*function addClass(obj, cn) {
            if (!hasClass(obj, cn)) {
              obj.className += " " + cn;
            }
          }

          function hasClass(obj, cn) {
            var reg = new RegExp("\\b" + cn + "\\b");
            return reg.test(obj.className);
          }

          function removeClass(obj, cn) {
            var reg = new RegExp("\\b" + cn + "\\b");
            obj.className = obj.className.replace(reg, "");
          }

          function toggleClass(obj, cn) {
            if (hasClass(obj, cn)) {
              removeClass(obj, cn);
            } else {
              //没有，则添加
              addClass(obj, cn);
            }
          }

          toggleClass(tripLink, `tripLink-hover`);*/
    }
  }
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

.thxfor {
  padding: 20px 50% 20px 0;
  font-style: italic;
  color: red;
  font-size: 18px;
}

@media screen and (max-width: 996px) {
  .homeTitleLogo {
    width: 60px;
  }

  .thxfor {
    padding: 20px 50% 20px 0;
    font-style: italic;
    color: red;
    font-size: 14px;
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

.tripLink {
  text-align: center;
  color: #ffffff;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: transparent;
  -webkit-transition: all 1.5s;
  -moz-transition: all 1.5s;
  -o-transition: all 1.5s;
  transition: all 1.5s;
}

.tripLinkText {
  font-size: 4rem;
  color: #ffffff;
  z-index: 1;
  position: absolute;
  bottom: 50px;
  right: 50px;
  cursor: pointer;
  -webkit-transition: color 0.5s;
  -moz-transition: color 0.5s;
  -o-transition: color 0.5s;
  transition: color 0.5s;
}

.tripLinkText:hover {
  opacity: 0.8;
  color: #ffc000;
}

.tripLinkText:hover + .tripLink {
  opacity: 0.5;
  background-color: #000000;
}

@media all and (max-width: 996px) {
  .homeLogo {
    width: 50px;
  }

  .tripLinkText {
    color: #ffc000;
    font-size: 1.2rem;
    bottom: 20px;
    right: 20px;
  }

  .tripLinkText:hover {
    opacity: 1;
    color: red;
  }
}
</style>
