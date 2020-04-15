<template>
  <div id="divisionChina">
    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <div class="text-center">
            <h1>{{$t('divisionChina.title-1')}}</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-4 text-center padding-bottom20">
              <router-link to="/division/china/apply">
                <div class="btn btnBgm">{{$t('applyTitle.title2')}}</div>
              </router-link>
            </div>
            <div class="col-xs-12 col-md-4">
              <div class="text-center">
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                  <input type="hidden" name="cmd" value="_s-xclick" />
                  <input type="hidden" name="hosted_button_id" value="LXVMMJ5HA8X5L" />
                  <table class="feeTable">
                    <tr>
                      <td>
                        <input type="hidden" name="on0" value="Participant name(s):" />Participant name(s):
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input type="text" name="os0" maxlength="200" />
                      </td>
                    </tr>
                  </table>
                  <input
                    type="image"
                    src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif"
                    border="0"
                    name="submit"
                    alt="PayPal - The safer, easier way to pay online!"
                  />
                  <img
                    alt
                    border="0"
                    src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
                    width="1"
                    height="1"
                  />
                </form>
              </div>
              <p class="padding-20 text-center">{{$t('applyFee.ps')}}</p>
            </div>
            <div class="col-xs-12 col-md-4 text-center padding-bottom20">
              <div class="payImg">
                <img src="../../../assets/img/chinaPay.jpg" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <h2>{{$t('divisionChina.category-title')}}</h2>
          <p class="padding-top20">{{$t('divisionChina.category1')}}</p>
          <p>{{$t('divisionChina.category2')}}</p>
        </div>

        <div class="col-xs-12">
          <p class="padding-top20">{{$t('divisionChina.category3')}}</p>
          <p>{{$t('divisionChina.category4')}}</p>
        </div>

        <div class="col-xs-12">
          <p class="padding-top20">{{$t('divisionChina.category5')}}</p>
          <p>{{$t('divisionChina.category6')}}</p>
        </div>

        <div class="col-xs-12">
          <p class="padding-top20">{{$t('divisionChina.category7')}}</p>
          <p>{{$t('divisionChina.category8')}}</p>
        </div>

        <div class="col-xs-12">
          <p class="padding-top20">{{$t('divisionChina.category9')}}</p>
          <p>{{$t('divisionChina.category10')}}</p>
        </div>

        <div class="col-xs-12">
          <p class="padding-top20">{{$t('divisionChina.category11')}}</p>
          <p>{{$t('divisionChina.category12')}}</p>
        </div>

        <div class="col-xs-12">
          <p class="padding-top20">{{$t('divisionChina.category13')}}</p>
          <p>{{$t('divisionChina.category14')}}</p>
        </div>

        <div class="col-xs-12">
          <p class="padding-top20">{{$t('divisionChina.category15')}}</p>
          <p>{{$t('divisionChina.category16')}}</p>
        </div>

        <div class="col-xs-12">
          <p class="padding-top20">{{$t('divisionChina.category17')}}</p>
          <p>{{$t('divisionChina.category18')}}</p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <h2>2020科雷诺国际钢琴比赛 中国赛区评审团</h2>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <div class="flexBox">
            <div class="box-child text-center">
              <div class="imgWrap">
                <img
                  class="judgeImg pointer-hand"
                  src="../../../assets/img/cnJudge/cnJudge_1.jpg"
                  alt
                />
                <div class="titleWrap">
                  <p class="font-bold">{{$t('divisionChina.cnJudge.ycg.name')}}</p>
                  <p class="padding-top5">{{$t('divisionChina.cnJudge.ycg.title1')}}</p>
                  <p>{{$t('divisionChina.cnJudge.ycg.title2')}}</p>
                  <p>{{$t('divisionChina.cnJudge.ycg.title3')}}</p>
                  <p>{{$t('divisionChina.cnJudge.ycg.title4')}}</p>
                  <p>{{$t('divisionChina.cnJudge.ycg.title5')}}</p>
                </div>
              </div>
            </div>
            <div class="box-child text-center">
              <div class="imgWrap">
                <img
                  class="judgeImg pointer-hand"
                  src="../../../assets/img/cnJudge/cnJudge_2.jpg"
                  alt
                />
                <div class="titleWrap">
                  <p class="font-bold">{{$t('divisionChina.cnJudge.xjx.name')}}</p>
                  <p class="padding-top5">{{$t('divisionChina.cnJudge.xjx.title1')}}</p>
                  <p>{{$t('divisionChina.cnJudge.xjx.title2')}}</p>
                  <p>{{$t('divisionChina.cnJudge.xjx.title3')}}</p>
                  <p>{{$t('divisionChina.cnJudge.xjx.title4')}}</p>
                </div>
              </div>
            </div>
            <div class="box-child text-center">
              <div class="imgWrap">
                <img
                  class="judgeImg pointer-hand"
                  src="../../../assets/img/cnJudge/cnJudge_3.jpg"
                  alt
                />
                <div class="titleWrap">
                  <p class="font-bold">{{$t('divisionChina.cnJudge.lyt.name')}}</p>
                  <p class="padding-top5">{{$t('divisionChina.cnJudge.lyt.title1')}}</p>
                  <p>{{$t('divisionChina.cnJudge.lyt.title2')}}</p>
                  <p>{{$t('divisionChina.cnJudge.lyt.title3')}}</p>
                  <p>{{$t('divisionChina.cnJudge.lyt.title4')}}</p>
                </div>
              </div>
            </div>
            <div class="box-child text-center">
              <div class="imgWrap">
                <img
                  class="judgeImg pointer-hand"
                  src="../../../assets/img/cnJudge/cnJudge_4.jpg"
                  alt
                />
                <div class="titleWrap">
                  <p class="font-bold">{{$t('divisionChina.cnJudge.zy.name')}}</p>
                  <p class="padding-top5">{{$t('divisionChina.cnJudge.zy.title1')}}</p>
                  <p>{{$t('divisionChina.cnJudge.zy.title2')}}</p>
                  <p>{{$t('divisionChina.cnJudge.zy.title3')}}</p>
                  <p>{{$t('divisionChina.cnJudge.zy.title4')}}</p>
                </div>
              </div>
            </div>
            <div class="box-child text-center">
              <div class="imgWrap">
                <img
                  class="judgeImg pointer-hand"
                  src="../../../assets/img/cnJudge/cnJudge_5.jpg"
                  alt
                />
                <div class="titleWrap">
                  <p class="font-bold">{{$t('divisionChina.cnJudge.wyq.name')}}</p>
                  <p class="padding-top5">{{$t('divisionChina.cnJudge.wyq.title1')}}</p>
                  <p>{{$t('divisionChina.cnJudge.wyq.title2')}}</p>
                  <p>{{$t('divisionChina.cnJudge.wyq.title3')}}</p>
                  <p>{{$t('divisionChina.cnJudge.wyq.title4')}}</p>
                </div>
              </div>
            </div>
            <div class="box-child text-center">
              <div class="imgWrap">
                <img
                  class="judgeImg pointer-hand"
                  src="../../../assets/img/cnJudge/cnJudge_6.jpg"
                  alt
                />
                <div class="titleWrap">
                  <p class="font-bold">{{$t('divisionChina.cnJudge.dy.name')}}</p>
                  <p class="padding-top5">{{$t('divisionChina.cnJudge.dy.title1')}}</p>
                  <p>{{$t('divisionChina.cnJudge.dy.title2')}}</p>
                  <p>{{$t('divisionChina.cnJudge.dy.title3')}}</p>
                  <p>{{$t('divisionChina.cnJudge.dy.title4')}}</p>
                </div>
              </div>
            </div>
            <div class="box-child text-center">
              <div class="imgWrap">
                <img
                  class="judgeImg pointer-hand"
                  src="../../../assets/img/cnJudge/cnJudge_7.jpg"
                  alt
                />
                <div class="titleWrap">
                  <p class="font-bold">{{$t('divisionChina.cnJudge.lj.name')}}</p>
                  <p class="padding-top5">{{$t('divisionChina.cnJudge.lj.title1')}}</p>
                  <p>{{$t('divisionChina.cnJudge.lj.title2')}}</p>
                  <p>{{$t('divisionChina.cnJudge.lj.title3')}}</p>
                  <p>{{$t('divisionChina.cnJudge.lj.title4')}}</p>
                  <p>{{$t('divisionChina.cnJudge.lj.title5')}}</p>
                </div>
              </div>
            </div>
            <div class="box-child text-center">
              <div class="imgWrap">
                <img
                  class="judgeImg pointer-hand"
                  src="../../../assets/img/cnJudge/cnJudge_8.jpg"
                  alt
                />
                <div class="titleWrap">
                  <p class="font-bold">{{$t('divisionChina.cnJudge.ccc.name')}}</p>
                  <p class="padding-top5">{{$t('divisionChina.cnJudge.ccc.title1')}}</p>
                  <p>{{$t('divisionChina.cnJudge.ccc.title2')}}</p>
                  <p>{{$t('divisionChina.cnJudge.ccc.title3')}}</p>
                  <p>{{$t('divisionChina.cnJudge.ccc.title4')}}</p>
                  <p>{{$t('divisionChina.cnJudge.ccc.title5')}}</p>
                  <p>{{$t('divisionChina.cnJudge.ccc.title6')}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <h2>{{$t('divisionChina.awards-title')}}</h2>
          <p class="padding-top20">{{$t('divisionChina.awards1')}}</p>
          <p class="padding-top20">{{$t('divisionChina.awards2')}}</p>
          <p class="padding-top20">{{$t('divisionChina.awards3')}}</p>
          <p class="padding-top20">{{$t('divisionChina.awards4')}}</p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <h2>{{$t('divisionChina.regulations-title')}}</h2>
          <p class="padding-top20">{{$t('divisionChina.regulations1')}}</p>
          <p class="padding-top20">{{$t('divisionChina.regulations2')}}</p>
          <p class="padding-top20">{{$t('divisionChina.regulations3')}}</p>
          <p class="padding-top20">{{$t('divisionChina.regulations4')}}</p>
          <p class="padding-top20">{{$t('divisionChina.regulations5')}}</p>
          <p class="padding-top20">{{$t('divisionChina.regulations6')}}</p>
          <p class="padding-top20">{{$t('divisionChina.regulations7')}}</p>
          <p class="padding-top20">{{$t('divisionChina.regulations8')}}</p>
          <p class="padding-top20">{{$t('divisionChina.regulations9')}}</p>
          <p class="padding-top20">{{$t('divisionChina.regulations10')}}</p>
          <p class="padding-top50 font-bold">{{$t('divisionChina.regulations-end1')}}</p>
          <p class="padding-top20 font-bold">{{$t('divisionChina.regulations-end2')}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DivisionChina"
};
</script>

<style scoped>
.applyFeeTitle {
  padding: 5px 10px;
}

.btn {
  display: inline-block;
  padding: 20px;
  font-size: 24px;
  color: #fff;
  border-radius: 3px;
}

.btnBgm {
  background: linear-gradient(90deg, #7939aa, #a8306e, #a8431d, #7939aa);
  background-size: 1400% 300%;
  animation: mymove 3.5s ease infinite;
  -webkit-animation: mymove 3.5s ease infinite;
  -moz-animation: mymove 3.5s ease infinite;
}

@keyframes mymove {
  0% {
    background-position: 0 25%;
  }
  25% {
    background-position: 25% 50%;
  }
  50% {
    background-position: 50% 75%;
  }
  75% {
    background-position: 75% 100%;
  }
  100% {
    background-position: 100% 0;
  }
}

.payImg img {
  width: 60%;
}

.feeTable {
  margin: 0 auto;
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
