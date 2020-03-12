<template>
  <div id="divisionUsa">
    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <div class="text-center">
            <h1>
              2020 Conero International Piano Competition
              Kansas City, US
            </h1>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12 col-md-6">
          <p>
            <span class="font-bold">Location:</span> Performance Center, Schmitt Music.
          </p>
        </div>
        <div class="col-xs-12 col-md-6">
          <p>
            <span class="font-bold">Dates:</span> March 27th-29th
          </p>
        </div>
        <div class="col-xs-12 col-md-6">
          <p>7315 W 119th St, Overland Park, KS 66213</p>
        </div>
      </div>
      <div class="row padding-top50">
        <div class="col-xs-12 col-md-6">
          <p>
            <span class="font-bold">Hosted by:</span> International Piano Professionals Association
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-md-6">
          <p>
            <span class="font-bold">Supported by:</span> Schmitt Music and the Kansas City Chinese Association
          </p>
        </div>
      </div>
      <div class="row padding-top50">
        <div class="col-xs-12">
          <p
            class="font-bold"
          >The Conero International Piano Competition is an international competition whose final round will be held in Recanati, Italy on August 1st -2nd. Associated competitions will be held in many locations all over the world, including Thailand, China, Australia, and the United States. Selected winners of these competitions will qualify for the final competition, held in Recanti, Italy. The competition is hosted by the International Piano Professionals Association (U.S.), in cooperation with the Civica Scuola di Musica Beniamino Gigli (Recanati, Italy), and is a member of the Alink-Argerich Foundation.</p>
        </div>
      </div>
      <div class="row padding-top50">
        <div class="col-xs-12">
          <p>
            Information about competition rules and eligibility will be available at the festival website as well as in the informational brochure below. Applications for the Kansas City, US competition are due by March 10th, 2020 and must be submitted with a $30 non-refundable application fee. Please follow the link for the Kansas City, US competition here:
            <a
              href="http://www.coneromusicfestival.com/competition"
            >http://www.coneromusicfestival.com/competition</a>
          </p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-6 text-center">
              <router-link to="/division/usa/apply">
                <div class="btn btnBgm">{{$t('applyTitle.title3')}}</div>
              </router-link>
            </div>
            <div class="col-xs-12 col-md-6">
              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="CL448JFGF8SKJ" />
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
              <p class="padding-20">{{$t('applyFee.ps')}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <h2>Categories</h2>
          <h3 class="padding-top20">Piano Teachers Group: Age above 22 years old.</h3>
          <p>One Baroque piece and one Romantic piece. No more than 15 mins</p>
          <h3>Amateur Adult Division: Age above 18 years old.</h3>
          <p>1-2 free choices not exceeding the max duration of 10mins.</p>
          <h3>Professional Adult Division: Ages 18-30</h3>
          <p>Free choices from three different periods; one of them must be Classical period. No more than 25 mins</p>
          <h3>Senior Division 1 (Classical): Ages 15–17</h3>
          <p>1 or 2 free choice not exceeding the max duration of 10 mins.</p>
          <h3>Senior Division 1 (Jazz): Ages 15–17</h3>
          <p>1 or 2 free choice of jazz style pieces not exceeding the max duration of 10 mins.</p>
          <h3>Senior Division 2 (Classical): Ages 12–14</h3>
          <p>1 or 2 free choice not exceeding the max duration of 8 mins.</p>
          <h3>Senior Division 2 (Jazz): Age 12-14</h3>
          <p>1 or 2 free choice of jazz style pieces not exceeding the max duration of 8 mins.</p>
          <h3>Senior Division 2 (Pop): Age 12-14</h3>
          <p>1 or 2 free choice of pop music style pieces not exceeding the max duration of 8 mins.</p>
          <h3>Junior Division 1 (Classical): Age 9-11</h3>
          <p>1 or 2 free choice not exceeding the max duration of 6 mins.</p>
          <h3>Junior Division 1 (Jazz): Age 9-11</h3>
          <p>1 or 2 free choice of jazz style pieces not exceeding the max duration of 6 mins.</p>
          <h3>Junior Division 1 (Pop): Age 9-11</h3>
          <p>1 or 2 free choice of pop music style pieces not exceeding the max duration of 6 mins.</p>
          <h3>Junior Division 2 (Classical): Age 6-8</h3>
          <p>1 or 2 free choice not exceeding the max duration of 5 mins.</p>
          <h3>Junior Division 2 (Jazz): Age 6-8</h3>
          <p>1 or 2 free choice of jazz style pieces not exceeding the max duration of 5 mins.</p>
          <h3>Junior Division 2 (Pop): Age 6-8</h3>
          <p>1 or 2 free choice of pop music style pieces not exceeding the max duration of 5 mins.</p>
          <p
            class="padding-top20"
          >Participants will receive written feedback about their performance from judges (including where they can improve, best parts of the performance, etc).</p>
          <p
            class="padding-top20 font-bold"
          >All contestants must meet the age requirements at the time of the competition. If their birthday will place them in another age category, that birthday must take place after March 29th, 2020.</p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <h2>Awards</h2>
          <h3
            class="padding-top20"
          >The top six winners of each division will advance to the final round in Italy. They will also be eligible for scholarships to participate in the Conero International Piano Festival and Competition.</h3>
          <p class="padding-top20 textIndent">
            <span class="font-bold">• Professional Adult Division:</span> Maximum
            <span class="font-bold">2000 Euros scholarship</span>
          </p>
          <p class="textIndent">
            <span class="font-bold">• Piano Teachers Division:</span> Maximum
            <span class="font-bold">1000 Euros scholarship</span>; also, will have priority to be selected to give a pedagogy lecture in the festival.
          </p>
          <p class="textIndent">
            <span class="font-bold">• Senior and Junior Division:</span> Maximum
            <span class="font-bold">500 Euros scholarship</span>
          </p>
          <p class="textIndent">
            <span class="font-bold">• Amateur Adult Division:</span> Maximum
            <span class="font-bold">200 Euros scholarship</span>
          </p>
          <p
            class="padding-top20 font-bold"
          >The scholarships will not be received as cash; they will apply to the festival tuition.</p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <h2>Rules</h2>
          <p class="padding-top20">1) All the pieces should be performed from memory.</p>
          <p>2) Changes will not be allowed once the repertoires have been submitted.</p>
          <p>3) Piano concertos, original compositions, and transcriptions done by the participant are not accepted.</p>
          <p>4) Repeats are not required except the place marked with D.C.</p>
          <p>5) Judges have the right to interrupt competitors’ performance and ask them to perform certain sections, which will not influence competitors’ scores.</p>
          <p>6) Judges reserve the right of final decision.</p>
          <p>7) The national final will be open to the public.</p>
          <p>8) The Competition committee has the copyright of performance’s videos, audios and pictures of the competition and the award ceremony. The organizing committee has the legal right of using these materials.</p>
          <p>9) The Organizing committee reserves all the right for the final interpretation.</p>
          <p>10) During the competition, competitors are responsible for their own health, injuries, accidents and any theft, loss, and/or damage to their persons or property.</p>
          <p>11) Shall get their visa by themselves if they go to Italy for the final. If competitors need an invitation letter for the visa, please contact the organizing committee.</p>
          <p class="padding-top20 font-bold">
            For the Final Competition Rules and Regulation, please visit
            <a
              href="http://www.coneromusicfestival.com"
            >www.coneromusicfestival.com</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DivisionUsa"
};
</script>

<style scoped>
.titleBtn {
  background-image: linear-gradient(90deg, #b219b6, #b6a60b);
}

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
</style>
