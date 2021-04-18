<template>
  <div id="app">
    <div id="appWrap">
      <header class="page-header">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <div class="page-logo">
                <router-link to="/">
                  <img src="./assets/img/logo2.png" alt />
                </router-link>
              </div>

              <!--翻译功能按钮-->

              <span class="translateSpan" @click="changeLangToEn">English</span>
              <span class="translateSpan" @click="changeLangToZh">中文</span>

              <nav class="page-nav">
                <div class="page-nav__toggle" @click="navToggle">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <ul class="page-nav__list" v-if="navActive" @click="navToggle">
                  <li class="page-nav__item">
                    <router-link :to="{ name: 'home' }">
                      <span>{{ $t("appNavText.home") }}</span>
                    </router-link>
                  </li>
                  <li class="page-nav__item">
                    <router-link :to="{ name: 'faculty' }">
                      <span>{{ $t("appNavText.committee") }}</span>
                    </router-link>
                  </li>
                  <li class="page-nav__item">
                    <router-link :to="{ name: 'competition' }">
                      <span>{{ $t("appNavText.competition") }}</span>
                    </router-link>
                  </li>
                  <li class="page-nav__item">
                    <router-link :to="{ name: 'constitution' }">
                      <span>{{ $t("appNavText.constitution") }}</span>
                    </router-link>
                  </li>
                  <!-- <li class="page-nav__item">
                    <router-link :to="{name:'concerts'}">
                      <span>{{$t('appNavText.concerts')}}</span>
                    </router-link>
                  </li>-->
                  <li class="page-nav__item">
                    <router-link :to="{ name: 'application' }">
                      <span>{{ $t("appNavText.application") }}</span>
                    </router-link>
                  </li>
                  <li class="page-nav__item">
                    <router-link :to="{ name: 'gallery' }">
                      <span>{{ $t("appNavText.gallery") }}</span>
                    </router-link>
                  </li>
                  <li class="page-nav__item">
                    <router-link :to="{ name: 'tripInfo' }">
                      <span>{{ $t("appNavText.local") }}</span>
                    </router-link>
                  </li>
                  <li class="page-nav__item">
                    <router-link :to="{ name: 'about' }">
                      <span>{{ $t("appNavText.about") }}</span>
                    </router-link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <div class="clearfix"></div>

      <router-view></router-view>

      <footer>
        <div class="contact">
          <div class="container">
            <div class="row">
              <div class="col-xs-12">
                <h1>{{ $t("appContactText.contact") }}</h1>
              </div>
            </div>
            <div class="padding-10">
              <div class="row">
                <div class="col-xs-12 col-md-4">
                  <img src="./assets/img/logo.png" alt />
                </div>
                <div class="col-xs-12 col-md-4">
                  <p class="padding-10">{{ $t("appContactText.row1") }}</p>
                  <p class="padding-10">
                    E-mail : support@coneromusicfestival.com
                  </p>
                  <p class="padding-10">Tel : ＋1-785-551-0823</p>
                </div>
                <div class="col-xs-12 col-md-4">
                  <div class="shareIcon">
                    <a
                      @mouseenter="feedsEnter"
                      @mouseleave="feedsLeave"
                      class="feedsWrap"
                      href="javascript:;"
                    >
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-WechartPay" />
                      </svg>
                      <img
                        v-show="feedsIsShow"
                        class="feedsImg"
                        src="./assets/img/WCFeeds.jpg"
                        alt
                      />
                    </a>
                    <a
                      href="https://www.facebook.com/Conero-International-Music-Festival-2291960267721314/"
                      target="_blank"
                    >
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-facebook" />
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/coneromusic/"
                      target="_blank"
                    >
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-instagram" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div class="companyRights">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              This festival is being hosted with the cooperation of Civica
              Scuola di Musica Beniamino Gigli，special thanks for their
              hospitality
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12">
              <span
                >Copyright © www.coneromusicfestival.com. All Rights
                Reserved.</span
              >
            </div>
          </div>
        </div>
      </div>

      <v-goTop></v-goTop>
    </div>
  </div>
</template>

<script>
import goTop from "./components/public/goTop";
import "./assets/iconfont/iconfont";

export default {
  name: "App",
  data() {
    return {
      screenWidth: document.body.clientWidth,
      nowIndex: 0,
      navActive: true,
      dropdownActive: false,
      tabParams: ["Translations >"],
      feedsIsShow: false,
    };
  },
  components: {
    "v-goTop": goTop,
  },
  created: function () {
    if (this.screenWidth <= 996) {
      this.navActive = false;
    } else {
      this.navActive = true;
    }
  },
  methods: {
    navToggle: function () {
      if (this.screenWidth <= 996) {
        this.navActive = !this.navActive;
      }
    },
    dropdown: function (event) {
      if (event.target.getAttribute("class") === "dropdownBtn") {
        this.dropdownActive = !this.dropdownActive;
      }
    },
    tabToggle: function (index) {
      this.nowIndex = index;
      if (index === 0) {
        return;
      } else {
        this.dropdownActive = false;
      }
    },
    changeLangToZh: function () {
      this.$i18n.locale = "zh";
      this.dropdownActive = false;
    },
    changeLangToEn: function () {
      this.$i18n.locale = "en";
      this.dropdownActive = false;
    },
    feedsEnter() {
      this.feedsIsShow = true;
    },
    feedsLeave() {
      this.feedsIsShow = false;
    },
  },
};
</script>

<style>
/*iconfont全局样式*/
.icon {
  width: 1.5em;
  height: 1.5em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.shareIcon a {
  margin: 0 10px;
}

.shareIcon svg:hover {
  opacity: 0.5;
}

.feedsWrap {
  position: relative;
}

.feedsImg {
  position: absolute;
  top: -135px;
  left: -10px;
}

/*导航栏*/
.page-header {
  position: relative;
  /*height: 80px;*/
  background-color: #24292e;
  color: #fff;
  line-height: 78px;
}

.page-logo img {
  width: 80px;
}

.page-logo,
.page-nav,
.page-nav__list,
.page-nav__toggle,
.page-nav__item {
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
}

.page-nav {
  /*height: 78px;*/
  z-index: 9;
  float: right;
}

.page-nav__list {
  margin: 0;
  padding-left: 0;
  list-style: none;
}

.page-nav__item span {
  display: flex;
  flex-direction: ;
  font-size: 14px;
  padding: 0 8px;
  color: #fff;
  cursor: pointer;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.page-nav__item span:hover {
  background-color: #000;
}

.page-nav__toggle span {
  display: block;
  height: 3px;
  width: 30px;
  margin-bottom: 5px;
  background-color: #fff;
}

.page-nav__toggle {
  display: none;
}

.translateSpan {
  padding: 0 10px;
  cursor: pointer;
}

@media screen and (max-width: 996px) {
  .page-nav__toggle {
    position: absolute;
    top: -35px;
    right: 0;
    display: inline-block;
    float: right;
    height: 50px;
    padding-right: 13px;
  }

  .page-nav__item {
    /*max-height: 0;*/
    width: 100%;
    background-color: #323232;
    line-height: 40px;
    overflow: hidden;
    transition: max-height 0.25s ease-in-out;
  }

  .page-header {
    height: 50px;
    line-height: 50px;
  }

  .page-nav {
    position: absolute;
    width: 100%;
    top: 50px;
    left: 0;
  }

  .page-nav__list {
    width: 100%;
  }

  .page-nav__item span {
    width: 100%;
  }

  .page-logo {
    vertical-align: top;
  }

  .page-logo img {
    width: 40px;
  }
}

/*语言切换*/
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper > div {
  flex: 1;
  text-align: center;
  height: 36px;
  line-height: 36px;
}

.dropdownWrapper {
  z-index: 99;
  background: #24292e;
  border: 1px solid #2c3e50;
  font-size: 14px;
}

.dropdownWrapper li {
  display: block;
}

.dropdownWrapper li:hover {
  background: #000;
}

.nav-item.active {
  border-radius: 5px;
  background-image: linear-gradient(90deg, #b64816, #a62cb6);
}

.dropdownBtn {
  display: inline-block;
  padding: 0 10px;
  width: 100%;
  height: 100%;
}

.nav-item {
  cursor: pointer;
}

.navLangChoose {
  margin-left: 20px;
  display: inline-block;
  vertical-align: middle;
}

/*联系*/
.contact {
  margin-top: 80px;
  padding-top: 30px;
  border-top: 1px solid #e1e4e8;
  background: #fafbfc;
}

/*版权*/
.companyRights {
  text-align: center;
  color: #959595;
  font-size: 12px;
  margin: 5px 0;
}
</style>
