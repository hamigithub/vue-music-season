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
      <router-link class="text-black" to="/bio/smith#smith">
        <div class="row">
          <div id="bioSmith" class="bioWrap clearfix">
            <div class="col-md-3 col-xs-12">
              <div class="committeeFacultyWrap padding-20">
                <img src="../../assets/img/Smith.jpg" alt />
              </div>
            </div>
            <div class="col-md-8 col-xs-12">
              <div class="margin-l-top40">
                <h2>{{$t('committeeBioSmith.row1')}}</h2>
                <p class="lineHeight">
                  <br />
                  * {{$t('committeeBioSmith.row2')}}
                  <br />
                  * {{$t('committeeBioSmith.row3')}}
                  <br />
                  &nbsp&nbsp{{$t('committeeBioSmith.row4')}}
                  <br />
                  * {{$t('committeeBioSmith.row5')}}
                  <br />
                  * {{$t('committeeBioSmith.row6')}}
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </router-link>

      <router-link class="text-black" to="/bio/cong#cong">
        <div class="row">
          <div id="bioCong" class="bioWrap clearfix">
            <div class="col-md-3 col-xs-12">
              <div class="committeeFacultyWrap padding-20">
                <img src="../../assets/img/Cong.jpg" alt />
              </div>
            </div>
            <div class="col-md-8 col-xs-12">
              <div class="margin-l-top40">
                <h2>{{$t('committeeBioCong.row1')}}</h2>
                <p class="lineHeight">
                  <br />
                  * {{$t('committeeBioCong.row2')}}
                  <br />
                  * {{$t('committeeBioCong.row3')}}
                  <br />
                  * {{$t('committeeBioCong.row4')}}
                  <br />
                  * {{$t('committeeBioCong.row5')}}
                  <br />
                  {{$t('committeeBioCong.row6')}}
                </p>
              </div>
            </div>
          </div>
        </div>
      </router-link>

      <router-link class="text-black" to="/bio/asaf#asaf">
        <div class="row">
          <div id="bioAsaf" class="bioWrap clearfix">
            <div class="col-md-3 col-xs-12">
              <div class="committeeFacultyWrap padding-20">
                <img src="../../assets/img/Asaf.jpg" alt />
              </div>
            </div>
            <div class="col-md-8 col-xs-12">
              <div class="margin-l-top40">
                <h2>{{$t('committeeBioAsaf.row1')}}</h2>
                <p class="lineHeight">
                  <br />
                  * {{$t('committeeBioAsaf.row2')}}
                  <br />
                  * {{$t('committeeBioAsaf.row3')}}
                </p>
              </div>
            </div>
          </div>
        </div>
      </router-link>

      <router-link class="text-black" to="/bio/cristiano#cristiano">
        <div class="row">
          <div id="bioCristiano" class="bioWrap clearfix">
            <div class="col-md-3 col-xs-12">
              <div class="committeeFacultyWrap padding-20">
                <img src="../../assets/img/Cristiano.jpg" alt />
              </div>
            </div>
            <div class="col-md-8 col-xs-12">
              <div class="margin-l-top40">
                <h2>{{$t('committeeBioCristiano.row1')}}</h2>
                <p class="lineHeight">
                  <br />
                  * {{$t('committeeBioCristiano.row2')}}
                  <br />
                  * {{$t('committeeBioCristiano.row3')}}
                  <br />
                  * {{$t('committeeBioCristiano.row4')}}
                  <br />
                  * {{$t('committeeBioCristiano.row5')}}
                  <br />
                  * {{$t('committeeBioCristiano.row6')}}
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </router-link>

      <router-link class="text-black" to="/bio/enrico#enrico">
        <div class="row">
          <div id="bioEnrico" class="bioWrap clearfix">
            <div class="col-md-3 col-xs-12">
              <div class="committeeFacultyWrap padding-20">
                <img src="../../assets/img/Enrico.jpg" alt />
              </div>
            </div>
            <div class="col-md-8 col-xs-12">
              <div class="margin-l-top40">
                <h2>Distinguished Guest Artist - Enrico Elisi</h2>
                <p class="lineHeight">
                  <br />* Steinway artist
                  <br />* Associate Professor of Piano at University of Toronto, Faculty of Music
                  <br />* Concert pianist
                </p>
              </div>
            </div>
          </div>
        </div>
      </router-link>

      <router-link class="text-black" to="/bio/lorenzo#lorenzo">
        <div class="row">
          <div id="bioLorenzo" class="bioWrap clearfix">
            <div class="col-md-3 col-xs-12">
              <div class="committeeFacultyWrap padding-20">
                <img src="../../assets/img/Lorenzo.jpg" alt />
              </div>
            </div>
            <div class="col-md-8 col-xs-12">
              <div class="margin-l-top40">
                <h2>Guest Artist: Lorenzo Di Bella</h2>
                <p class="lineHeight">
                  <br />* 1st Prize and Gold Medal "Horowitz" Int. Piano Competition - Kiev
                  <br />* Piano Professor "Braga" Conservatory - Teramo
                  <br />* Artistic Director "Mugellini Festival"
                  <br />* Artistic Director "Civitanova Classica Piano Festival"
                  <br />* Artistic Director "La Palma d'Oro" Int. Piano Competition
                </p>
              </div>
            </div>
          </div>
        </div>
      </router-link>

      <router-link class="text-black" to="/bio/ferrati#ferrati">
        <div class="row">
          <div id="bioFerrati" class="bioWrap clearfix">
            <div class="col-md-3 col-xs-12">
              <div class="committeeFacultyWrap padding-20">
                <img src="../../assets/img/Ferrati.jpg" alt />
              </div>
            </div>
            <div class="col-md-8 col-xs-12">
              <div class="margin-l-top40">
                <h2>{{$t('committeeBioFerrati.row1')}}</h2>
                <p class="lineHeight">
                  <br />
                  * {{$t('committeeBioFerrati.row2')}}
                  <br />
                  * {{$t('committeeBioFerrati.row3')}}
                  <br />
                  * {{$t('committeeBioFerrati.row4')}}
                  <br />
                  * {{$t('committeeBioFerrati.row5')}}
                  <br />
                  * {{$t('committeeBioFerrati.row6')}}
                  <br />
                  * {{$t('committeeBioFerrati.row7')}}
                </p>
              </div>
            </div>
          </div>
        </div>
      </router-link>

      <router-link class="text-black" to="/bio/tamara#tamara">
        <div class="row">
          <div id="bioTamara" class="bioWrap clearfix">
            <div class="col-md-3 col-xs-12">
              <div class="committeeFacultyWrap padding-20">
                <img src="../../assets/img/Tamara.jpg" alt />
              </div>
            </div>
            <div class="col-md-8 col-xs-12">
              <div class="margin-l-top40">
                <h2>{{$t('committeeBioTamara.row1')}}</h2>
                <p class="lineHeight">
                  <br />
                  * {{$t('committeeBioTamara.row2')}}
                  <br />
                  * {{$t('committeeBioTamara.row3')}}
                  <br />
                  * {{$t('committeeBioTamara.row4')}}
                  <br />
                  {{$t('committeeBioTamara.row5')}}
                </p>
              </div>
            </div>
          </div>
        </div>
      </router-link>

      <router-link class="text-black" to="/bio/zhaoxiaohong#zhaoxiaohong">
        <div class="row">
          <div id="bioZhaoxiaohong" class="text-black pointer-hand bioWrap clearfix">
            <div class="col-md-3 col-xs-12">
              <div class="committeeFacultyWrap padding-20">
                <img src="../../assets/img/Zhaoxiaohong.jpg" alt />
              </div>
            </div>
            <div class="col-md-8 col-xs-12">
              <div class="margin-l-top40">
                <h2>{{$t('committeeBioZhaoxiaohong.row1')}}</h2>
                <p class="lineHeight">
                  <br />
                  * {{$t('committeeBioZhaoxiaohong.row2')}}
                  <br />
                  * {{$t('committeeBioZhaoxiaohong.row3')}}
                  <br />
                  * {{$t('committeeBioZhaoxiaohong.row4')}}
                  <br />
                  * {{$t('committeeBioZhaoxiaohong.row5')}}
                  <br />
                  * {{$t('committeeBioZhaoxiaohong.row6')}}
                  <br />
                  * {{$t('committeeBioZhaoxiaohong.row7')}}
                </p>
              </div>
            </div>
          </div>
        </div>
      </router-link>

      <div class="row">
        <div id="bioYangyandi" class="text-black pointer-hand bioWrap clearfix">
          <div class="col-md-3 col-xs-12">
            <div class="committeeFacultyWrap padding-20">
              <img src="../../assets/img/Yangyandi.jpg" alt />
            </div>
          </div>
          <div class="col-md-8 col-xs-12">
            <div class="margin-l-top40">
              <h2>{{$t('committeeBioYangyandi.row1')}}</h2>
              <p class="lineHeight">
                <br />
                * {{$t('committeeBioYangyandi.row2')}}
                <br />
                * {{$t('committeeBioYangyandi.row3')}}
              </p>
            </div>
          </div>
        </div>
      </div>

      <router-link class="text-black" to="/bio/ivy#ivy">
        <div class="row">
          <div id="bioIvy" class="bioWrap clearfix">
            <div class="col-md-3 col-xs-12">
              <div class="committeeFacultyWrap padding-20">
                <img src="../../assets/img/Ivy.jpg" alt />
              </div>
            </div>
            <div class="col-md-8 col-xs-12">
              <div class="margin-l-top40">
                <h2>{{$t('committeeBioIvy.row1')}}</h2>
                <p class="lineHeight">
                  <br />
                  * {{$t('committeeBioIvy.row2')}}
                  <br />
                  * {{$t('committeeBioIvy.row3')}}
                  <br />
                  * {{$t('committeeBioIvy.row4')}}
                  <br />
                  * {{$t('committeeBioIvy.row5')}}
                  <br />
                  {{$t('committeeBioIvy.row6')}}
                </p>
              </div>
            </div>
          </div>
        </div>
      </router-link>

      <div class="row">
        <div id="bioMark" class="text-black pointer-hand bioWrap clearfix">
          <div class="col-md-3 col-xs-12">
            <div class="committeeFacultyWrap padding-20">
              <img src="../../assets/img/Mark.jpg" alt />
            </div>
          </div>
          <div class="col-md-8 col-xs-12">
            <div class="margin-l-top40">
              <h2>{{$t('committeeBioMark.row1')}}</h2>
              <p class="lineHeight">
                <br />
                * {{$t('committeeBioMark.row2')}}
                <br />
                * {{$t('committeeBioMark.row3')}}
              </p>
            </div>
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

@media screen and (max-width: 996px) {
  .committeeFacultyWrap {
    text-align: center;
  }
}
</style>
