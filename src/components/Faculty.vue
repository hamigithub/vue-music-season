<template>
  <div id="faculty">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="componentTitle committeeTitle">
            <div>
              {{$t('committeeTitle.title')}}
              <div class="titleBtn">
                <span class="titleBtnInside">{{$t('appPublic.row1')}}</span>
              </div>
            </div>
            <div>
              <p class="title_p">{{$t('appPublic.row2')}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <h2>2020科雷诺国际钢琴比赛 评审团</h2>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <div class="flexBox">
            <div class="box-child text-center">
              <div id="bioSmith" class="imgWrap">
                <router-link class="text-black" to="/bio/smith#smith">
                  <img class="judgeImg pointer-hand" src="../assets/img/Smith.jpg" alt />
                </router-link>
                <div class="titleWrap">
                  <p class="font-bold">{{$t('committeeBioSmith.row1')}}</p>
                  <p class="padding-top5">{{$t('committeeBioSmith.row2')}}</p>
                  <p>{{$t('committeeBioSmith.row3')}}</p>
                  <p>{{$t('committeeBioSmith.row4')}}</p>
                  <p>{{$t('committeeBioSmith.row5')}}</p>
                  <p>{{$t('committeeBioSmith.row6')}}</p>
                  <p>{{$t('committeeBioSmith.row7')}}</p>
                </div>
              </div>
            </div>

            <div class="box-child text-center">
              <div id="bioEnrico" class="imgWrap">
                <router-link class="text-black" to="/bio/enrico#enrico">
                  <img class="judgeImg pointer-hand" src="../assets/img/Enrico.jpg" alt />
                </router-link>
                <div class="titleWrap">
                  <p class="font-bold">{{$t('committeeBioEnrico.row1')}}</p>
                  <p class="padding-top5">{{$t('committeeBioEnrico.row2')}}</p>
                  <p>{{$t('committeeBioEnrico.row3')}}</p>
                  <p>{{$t('committeeBioEnrico.row4')}}</p>
                </div>
              </div>
            </div>

            <div class="box-child text-center">
              <div id="bioBlaha" class="imgWrap">
                <router-link class="text-black" to="/bio/blaha#blaha">
                  <img class="judgeImg pointer-hand" src="../assets/img/Blaha.jpg" alt />
                </router-link>
                <div class="titleWrap">
                  <p class="font-bold">{{$t('committeeBioBlaha.row1')}}</p>
                  <p class="padding-top5">{{$t('committeeBioBlaha.row2')}}</p>
                  <p>{{$t('committeeBioBlaha.row3')}}</p>
                  <p>{{$t('committeeBioBlaha.row4')}}</p>
                  <p>{{$t('committeeBioBlaha.row5')}}</p>
                </div>
              </div>
            </div>

            <div class="box-child text-center">
              <div id="bioJianing" class="imgWrap">
                <router-link class="text-black" to="/bio/jianing#jianing">
                  <img class="judgeImg pointer-hand" src="../assets/img/Jianing.jpg" alt />
                </router-link>
                <div class="titleWrap">
                  <p class="font-bold">{{$t('committeeBioJianing.row1')}}</p>
                  <p class="padding-top5">{{$t('committeeBioJianing.row2')}}</p>
                  <p>{{$t('committeeBioJianing.row3')}}</p>
                  <p>{{$t('committeeBioJianing.row4')}}</p>
                  <p>{{$t('committeeBioJianing.row5')}}</p>
                  <p>{{$t('committeeBioJianing.row6')}}</p>
                </div>
              </div>
            </div>

            <div class="box-child text-center">
              <div id="bioLorenzo" class="imgWrap">
                <router-link class="text-black" to="/bio/lorenzo#lorenzo">
                  <img class="judgeImg pointer-hand" src="../assets/img/Lorenzo.jpg" alt />
                </router-link>
                <div class="titleWrap">
                  <p class="font-bold">{{$t('committeeBioLorenzo.row1')}}</p>
                  <p class="padding-top5">{{$t('committeeBioLorenzo.row2')}}</p>
                  <p>{{$t('committeeBioLorenzo.row3')}}</p>
                  <p>{{$t('committeeBioLorenzo.row4')}}</p>
                  <p>{{$t('committeeBioLorenzo.row5')}}</p>
                  <p>{{$t('committeeBioLorenzo.row6')}}</p>
                </div>
              </div>
            </div>

            <div class="box-child text-center">
              <div id="bioVladimir" class="imgWrap">
                <router-link class="text-black" to="/bio/vladimir#vladimir">
                  <img class="judgeImg pointer-hand" src="../assets/img/Vladimir.jpg" alt />
                </router-link>
                <div class="titleWrap">
                  <p class="font-bold">{{$t('committeeBioVladimir.row1')}}</p>
                  <p class="padding-top5">{{$t('committeeBioVladimir.row2')}}</p>
                  <p>{{$t('committeeBioVladimir.row3')}}</p>
                  <p>{{$t('committeeBioVladimir.row4')}}</p>
                </div>
              </div>
            </div>

            <div class="box-child text-center">
              <div id="bioJack" class="imgWrap">
                <router-link class="text-black" to="/bio/jack#jack">
                  <img class="judgeImg pointer-hand" src="../assets/img/Jack.jpg" alt />
                </router-link>
                <div class="titleWrap">
                  <p class="font-bold">{{$t('committeeBioJack.row1')}}</p>
                  <p class="padding-top5">{{$t('committeeBioJack.row2')}}</p>
                  <p>{{$t('committeeBioJack.row3')}}</p>
                  <p>{{$t('committeeBioJack.row4')}}</p>
                </div>
              </div>
            </div>

            <div class="box-child text-center">
              <div id="bioFerrati" class="imgWrap">
                <router-link class="text-black" to="/bio/ferrati#ferrati">
                  <img class="judgeImg pointer-hand" src="../assets/img/Ferrati.jpg" alt />
                </router-link>
                <div class="titleWrap">
                  <p class="font-bold">{{$t('committeeBioFerrati.row1')}}</p>
                  <p class="padding-top5">{{$t('committeeBioFerrati.row2')}}</p>
                  <p>{{$t('committeeBioFerrati.row3')}}</p>
                  <p>{{$t('committeeBioFerrati.row4')}}</p>
                  <p>{{$t('committeeBioFerrati.row5')}}</p>
                  <p>{{$t('committeeBioFerrati.row6')}}</p>
                  <p>{{$t('committeeBioFerrati.row7')}}</p>
                </div>
              </div>
            </div>

            <div class="box-child text-center">
              <div id="bioYangyandi" class="imgWrap">
                <div class="text-black">
                  <img class="judgeImg pointer-hand" src="../assets/img/Yangyandi.jpg" alt />
                </div>
                <div class="titleWrap">
                  <p class="font-bold">{{$t('committeeBioYangyandi.row1')}}</p>
                  <p class="padding-top5">{{$t('committeeBioYangyandi.row2')}}</p>
                  <p>{{$t('committeeBioYangyandi.row3')}}</p>
                </div>
              </div>
            </div>

            <div class="box-child text-center">
              <div id="bioZhaoxiaohong" class="imgWrap">
                <router-link class="text-black" to="/bio/zhaoxiaohong#zhaoxiaohong">
                  <img class="judgeImg pointer-hand" src="../assets/img/Zhaoxiaohong.jpg" alt />
                </router-link>
                <div class="titleWrap">
                  <p class="font-bold">{{$t('committeeBioZhaoxiaohong.row1')}}</p>
                  <p class="padding-top5">{{$t('committeeBioZhaoxiaohong.row2')}}</p>
                  <p>{{$t('committeeBioZhaoxiaohong.row3')}}</p>
                  <p>{{$t('committeeBioZhaoxiaohong.row4')}}</p>
                  <p>{{$t('committeeBioZhaoxiaohong.row5')}}</p>
                  <p>{{$t('committeeBioZhaoxiaohong.row6')}}</p>
                  <p>{{$t('committeeBioZhaoxiaohong.row7')}}</p>
                </div>
              </div>
            </div>

            <div class="box-child text-center">
              <div id="bioIannone" class="imgWrap">
                <router-link class="text-black" to="/bio/iannone#iannone">
                  <img class="judgeImg pointer-hand" src="../assets/img/Iannone.jpg" alt />
                </router-link>
                <div class="titleWrap">
                  <p class="font-bold">{{$t('committeeBioIannone.row1')}}</p>
                  <p class="padding-top5">{{$t('committeeBioIannone.row2')}}</p>
                  <p>{{$t('committeeBioIannone.row3')}}</p>
                  <p>{{$t('committeeBioIannone.row4')}}</p>
                  <p>{{$t('committeeBioIannone.row5')}}</p>
                </div>
              </div>
            </div>

            <div class="box-child text-center">
              <div id="bioCong" class="imgWrap">
                <router-link class="text-black" to="/bio/cong#cong">
                  <img class="judgeImg pointer-hand" src="../assets/img/Cong.jpg" alt />
                </router-link>
                <div class="titleWrap">
                  <p class="font-bold">{{$t('committeeBioCong.row1')}}</p>
                  <p class="padding-top5">{{$t('committeeBioCong.row2')}}</p>
                  <p>{{$t('committeeBioCong.row3')}}</p>
                  <p>{{$t('committeeBioCong.row4')}}</p>
                  <p>{{$t('committeeBioCong.row5')}}</p>
                  <p>{{$t('committeeBioCong.row6')}}</p>
                </div>
              </div>
            </div>

            <div class="box-child text-center">
              <div id="bioIvy" class="imgWrap">
                <router-link class="text-black" to="/bio/ivy#ivy">
                  <img class="judgeImg pointer-hand" src="../assets/img/Ivy.jpg" alt />
                </router-link>
                <div class="titleWrap">
                  <p class="font-bold">{{$t('committeeBioIvy.row1')}}</p>
                  <p class="padding-top5">{{$t('committeeBioIvy.row2')}}</p>
                  <p>{{$t('committeeBioIvy.row3')}}</p>
                  <p>{{$t('committeeBioIvy.row4')}}</p>
                  <p>{{$t('committeeBioIvy.row5')}}</p>
                  <p>{{$t('committeeBioIvy.row6')}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="passActivity padding-top50">
            <h3>Past Activity:</h3>
            <router-link to="/faculty/2019">
              <h5 class="padding-top20 padding-bottom10">2019</h5>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Faculty",
  created: function() {}
};
</script>

<style scoped>
.titleBtn {
  background-image: linear-gradient(90deg, #9d2cb6, #3383b6);
}

.committeeTitle {
  text-align: right;
}

.committeeMain p {
  font-size: 14px;
}

.committeeMain {
  margin: 20px 0;
}

.committeeFacultyWrap {
  cursor: pointer;
}

.bioWrap {
  background-color: #fff;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.bioWrap:hover {
  background-color: #f5f5f5;
}

.passActivity {
  float: right;
  border-bottom: 1px solid #ccc;
}

.topLine {
  border-top: 1px solid #ccc;
}

@media screen and (max-width: 996px) {
  .committeeFacultyWrap {
    text-align: center;
  }
}

.imgWrap {
  margin-top: 10px;
}

.titleWrap {
  padding: 10px 20px;
}

.titleWrap p {
  font-size: 12px;
  text-align: left;
}

.judgeImg {
  width: 250px;
  border-radius: 5%;
}

.flexBox {
  display: -webkit-flex; /* Safari */
  display: flex;
  flex-wrap: wrap;
}

.box-child {
  display: inline-block;
  width: 25%;
}

@media (max-width: 992px) {
  .judgeImg {
    width: 150px;
  }

  .box-child {
    width: 50%;
  }
}
</style>
