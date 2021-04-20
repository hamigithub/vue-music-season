<template>
  <div id="competition">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="componentTitle text-center">
            <div class="titleBtn">
              <span class="titleBtnInside font-bold">{{
                $t("competitionTitle.title2")
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <p class="font-bold">{{ $t("competition2020text1.row1") }}</p>
          <p class="font-bold">{{ $t("competition2020text1.row2") }}</p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <h2 class="padding-bottom10 text-center">
            {{ $t("competition2020text2.row1") }}
          </h2>
          <table>
            <tr>
              <td>Preliminary Round:</td>
              <td>Please check the rules and deadlines in your division.</td>
            </tr>
            <tr>
              <td>Final Round:</td>
              <td>August 2nd -3rd</td>
            </tr>
            <tr>
              <td></td>
              <td>
                · Every finalist must play the final round in a live
                performance, if you are not from the listed country, please sign
                up “ The Other Countries” Division.”
              </td>
            </tr>
            <tr>
              <td>Registration fee:</td>
              <td>
                Preliminary round – Please check the fee in your division link.
              </td>
            </tr>
            <tr>
              <td></td>
              <td>Final round- Professional Groups/ Teachers’ Group: $100</td>
            </tr>
            <tr>
              <td></td>
              <td>All Amateur Groups: $80</td>
            </tr>
            <tr>
              <td>Location:</td>
              <td>United States- Kansas City</td>
            </tr>
            <tr>
              <td></td>
              <td>China- Hai Nan</td>
            </tr>
            <tr>
              <td></td>
              <td>Australia- Melbourne</td>
            </tr>
            <tr>
              <td></td>
              <td>Canada- Toronto</td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <div class="container padding-top50">
      <div class="row">
        <div class="col-xs-12">
          <h2 class="text-center padding-top20">
            2021 Preliminary Round Rules
          </h2>
          <div class="text-center">
            <router-link :to="{ name: 'divisionUsa' }">
              <div class="pointer-hand division-all division1">
                {{ $t("division.row1") }}
              </div>
            </router-link>
          </div>

          <div class="text-center">
            <router-link :to="{ name: 'divisionChina' }">
              <div class="pointer-hand division-all division1">
                {{ $t("division.row2") }}
              </div>
            </router-link>
          </div>

          <div class="text-center">
            <router-link :to="{ name: 'divisionAustralia' }">
              <div class="pointer-hand division-all division1">
                {{ $t("division.row3") }}
              </div>
            </router-link>
          </div>

          <div class="text-center">
            <router-link :to="{ name: 'divisionCanada' }">
              <div class="pointer-hand division-all division1">
                {{ $t("division.row4") }}
              </div>
            </router-link>
          </div>

          <div class="text-center">
            <router-link :to="{ name: 'divisionOnline' }">
              <div class="pointer-hand division-all division1">
                {{ $t("division.row5") }}
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="container padding-top20">
      <div class="row">
        <div class="col-xs-12">
          <router-link :to="{ name: 'resultGuide' }">
            <div class="text-center pointer-hand division-all division1">
              2020 Competition Result
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <div class="container padding-top50">
      <div class="row">
        <div class="col-xs-12">
          <h2 class="text-center">Final Round Category</h2>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <h3 class="text-center">· Professional Artist Division</h3>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <h3>Youth Group (age under 18)</h3>
          <P
            >A recital of 15 to 20 minutes which includes at least 2 works of
            different styles. Only one piece is allowed to be the same as
            previous round.</P
          >
          <h3>Adult Group (age 18 – 32)</h3>
          <p>
            A recital of 23-30 minutes which includes at least 3 works of
            different styles. Only one piece is allowed to be the same as
            previous round.
          </p>
        </div>
      </div>
    </div>

    <div class="container padding-top50">
      <div class="row">
        <div class="col-xs-12">
          <h2 class="text-center">Chamber Music Division</h2>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <h3>
            Adult Piano Duet / Four Hands: Average age above 18 years old.
          </h3>
          <p>
            Free choice from three different periods; one of them must be the
            Classical period. No more than 25 mins.
          </p>
          <h3>
            Youth Piano Duet / Four Hands: Average age no more than 18 years
            old.
          </h3>
          <p>1-2 free choices not exceeding the max duration of 12 mins.</p>
          <h3>
            Adult Chamber Group: (Piano with string or woodwind) Average ages
            above 18 years old.
          </h3>
          <p>
            Free choices from three different periods. No more than 30 mins.
          </p>
          <h3>
            Youth Chamber Group: (Piano with string or woodwind) Average age no
            more than 18 years old.
          </h3>
          <p>1-2 free choices not exceeding the max duration of 15mins.</p>
        </div>
      </div>
    </div>

    <div class="container padding-top50">
      <div class="row">
        <div class="col-xs-12">
          <h2 class="text-center">Piano Teachers’ Division (age above 22)</h2>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-6">
          <p class="font-bold">
            Competition of the Piano Teachers’ Group will have two parts：
          </p>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-6">
          <p class="font-bold">70% Performance</p>
        </div>
        <div class="col-xs-6">
          <p class="font-bold">30% Pedagogy</p>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-6">
          <p>
            Choose 2 of the following three (works for the final round can be
            the same as previous rounds). 12-18 minutes in total.
          </p>
        </div>
        <div class="col-xs-6">
          <p>
            Competitors will be given one piece of work and will need to explain
            its style, technique, musical expression and how we can apply this
            knowledge in teaching the piece.
          </p>
        </div>
      </div>
      <div class="row padding-top5">
        <div class="col-xs-6">
          <p>1 A Baroque work.</p>
        </div>
      </div>
      <div class="row padding-top5">
        <div class="col-xs-6">
          <p>2 A movement of a Classical period sonata.</p>
        </div>
      </div>
      <div class="row padding-top5">
        <div class="col-xs-6">
          <p>3 A substantial Romantic work.</p>
        </div>
      </div>
    </div>

    <div class="container padding-top50">
      <div class="row">
        <div class="col-xs-12">
          <h2 class="text-center">Amateur Division</h2>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <h3>Adult Group: Aged 18-32</h3>
          <p>
            Two or three works selected by contestants themselves. No more than
            12 minutes.
          </p>
          <h3>Juvenile Group: Aged 12-17</h3>
          <p>
            Two works selected by contestants themselves. No more than 10
            minutes.
          </p>
          <h3>Children Group: Aged 6-11</h3>
          <p>
            One or two works selected by contestants themselves. No more than 8
            minutes.
          </p>
          <p class="padding-top20">
            All contestants must meet the age requirements at the final round
            time of the competition. Their current age before August 1st, 2021,
            will determine the category they must compete in. For example, if
            the student turns 19 on August 1st or after, he will compete in the
            adult category.
          </p>
        </div>
      </div>
    </div>

    <div class="container padding-top50">
      <div class="row">
        <div class="col-xs-12">
          <h2 class="text-center">FINALS AWARDS</h2>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <p class="font-bold">1. Cash Prizes</p>
          <p class="font-bold">Professional Division-Adult Group</p>
          <p>
            The First Place Winner will get 1000 dollars and certificate of
            award.
          </p>
          <p>
            The Second Place Winner will get 500 dollars and certificate of
            award.
          </p>
          <p>
            The Third Place Winner will get 200 dollars and certificates of
            award.
          </p>
          <p class="font-bold padding-top5">
            Professional Division -Youth Group
          </p>
          <p>
            The First Place Winner will get 800 dollars and certificates of
            award.
          </p>
          <p>
            The Second Place Winner will get 300 dollars and certificates of
            award.
          </p>
          <p>
            The Third Place Winner will get 200 dollars and certificates of
            award.
          </p>
          <p class="font-bold padding-top5">Piano Teachers’ Division</p>
          <p>
            The First Place Winner will get 500 dollars and certificates of
            award.
          </p>
          <p>
            The Second Place Winner will get 200 dollars and certificates of
            award.
          </p>
          <p>
            The Third Place Winner will get 100 dollars and certificates of
            award.
          </p>
          <p class="font-bold padding-top5">Amateur Division</p>
          <p>
            The First Place Winner of each group will get 200 dollars and
            certificates of award.
          </p>
          <p>
            The Second Place Winner of each group will get 100 dollars and
            certificates of award.
          </p>
          <p>
            The Third Place Winner of each group will get 50 dollars and
            certificates of award.
          </p>
          <p class="font-bold padding-top5">Chamber Music Division</p>
          <p>
            The First Place Winner of each group will get 300 dollars and
            certificate of award.
          </p>
          <h3 class="padding-top5">
            All the finalist candidate will receive a detailed performance
            comments from the jury committee.
          </h3>
          <p class="text-center">
            Example from 2020 Conero Competition final round
          </p>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-md-6 col-xs-12">
          <div class="imgWrap">
            <img
              class="feedbackImg"
              src="../assets/img/competition/feedback_1.jpg"
              alt="feedback"
            />
          </div>
        </div>
        <div class="col-md-6 col-xs-12">
          <div class="imgWrap">
            <img
              class="feedbackImg"
              src="../assets/img/competition/feedback_1.jpg"
              alt="feedback"
            />
          </div>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <p class="font-bold">2. Concert Contract</p>
          <p>
            After discussing with the competition committee, the winners of the
            Professional Division (youth group and adult group) will be eligible
            to sign a contract as a Conero Artist, and engaged to perform
            recital tours in Italy, China, Australia, or the U.S. In addition,
            the engaged concert artist will have the opportunity to play a
            chamber concert with Conero String faculty Dr. Boris Vayner and Alla
            Aranovskaya in 2022. The Conero Music Festival Committee and the
            International Piano Professionals Association will be responsible
            for the advertisement and promotion of the Conero Engagement Artist.
          </p>
          <p class="padding-top20">
            2019 Conero Engagement Artist Concert: Malcolm Liu
          </p>
          <p>
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=X_OQZOfW5nY"
              >https://www.youtube.com/watch?v=X_OQZOfW5nY</a
            >
          </p>
          <p></p>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <p class="font-bold">
            3. Promotion to the final round of other significant international
            competitions
          </p>
          <p>
            The First Place Winner of Professional Division will be promoted to
            the final round of following competitions directly:
          </p>
          <p>
            The 31st IBLA International Music Competition (Sicily, Italy,2022)
          </p>
          <p>The 4th MTNA-CHINA piano competition (Guangzhou, China,2022)</p>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <p class="font-bold">4. Scholarship:</p>
          <p>The 3rd Conero International Festival (Recanati, Italy, 2022)</p>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <p class="font-bold">5. Recommendation letters</p>
          <p>
            The member of Jury Panel would provide recommendation letters for
            winners, for the purpose of competition application or graduate
            school application.
          </p>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <p class="font-bold">6. Career Development Meeting</p>
          <p>
            A video conference between the chairman of Jury Panel and First
            Prize Winner will be available with the goal of providing customized
            career development advice.
          </p>
        </div>
      </div>
    </div>

    <div class="container padding-50">
      <div class="row">
        <div class="col-xs-12">
          <h2 class="text-center">Competition Regulations</h2>
        </div>
      </div>
      <div class="row padding-20">
        <div class="col-xs-12">
          <p>
            1) The 2021 Conero International Piano Competition has two rounds:
            Preliminary Round and Final Round.
          </p>
          <p>
            2) The Preliminary round of the 2021 Conero International Piano
            Competition has China Division, United States Division, Canada
            Division, Australia Division, and Online Division (For all other
            countries). Please double-check the dates and rules in your
            division.
          </p>
          <p>
            3) The final round will apply the common rules and regulations for
            all finalists. Final round dates: August 2nd -3rd.
          </p>
          <p>
            4) The final round is voluntary; eligible candidates should complete
            the application and submit the fee before July 20th.
          </p>
          <p>
            5) If applying for more than one division in the competition,
            applicants must complete separate applications and pay the required
            fees for each division.
          </p>
          <p>
            6) All divisions in the final round should be performed from memory
            except Chamber Division.
          </p>
          <p>
            7) Piano concertos, self-composed pieces, or transcriptions done by
            the performer are not accepted.
          </p>
          <p>8) Repeats are not required except the place marked with D.C.</p>
          <p>9) Judges’ decisions are final.</p>
          <p>
            10) Changes would not be allowed once the repertoires are submitted.
          </p>
          <p>
            11) The Conero International Piano Festival retains copyright of
            performance video, audio, and pictures of the competition and the
            award ceremony. The festival has the legal right to use these
            materials.
          </p>
          <p>
            12) The competition committee reserves all the right for the final
            interpretation of the regulations.
          </p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="passActivity padding-top50">
            <h3>Past Activity:</h3>
            <router-link to="/competition/2019">
              <span class="font-bold padding-top20 padding-bottom10">2019</span>
            </router-link>
            <router-link to="/competition/2020">
              <span class="font-bold padding-top20 padding-bottom10">2020</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "competition",
};
</script>

<style scoped>
.titleBtn {
  background-image: linear-gradient(90deg, #b6a314, #b61d92);
}

.btn {
  display: inline-block;
  padding: 20px;
  font-size: 24px;
  color: #fff;
  border-radius: 3px;
}

.btnBgm {
  background: linear-gradient(45deg, #ff0036, #ff9c00);
  font-style: italic;
  /*background-size: 1400% 300%;*/
  /*animation: mymove 4.5s ease infinite;*/
  /*-webkit-animation: mymove 4.5s ease infinite;*/
  /*-moz-animation: mymove 4.5s ease infinite;*/
}

.btnBgm:hover {
  opacity: 8;
  color: #fff;
}

/*@keyframes mymove {*/
/*0% {*/
/*background-position: 0% 25%;*/
/*}*/
/*25% {*/
/*background-position: 25% 50%;*/
/*}*/
/*50% {*/
/*background-position: 50% 75%;*/
/*}*/
/*75% {*/
/*background-position: 75% 100%;*/
/*}*/
/*100% {*/
/*background-position: 100% 0%;*/
/*}*/
/*}*/

.passActivity {
  float: right;
  border-bottom: 1px solid #ccc;
}

.division-all {
  margin: 40px 40px;
  padding: 10px;
  color: #fff;
  border: 1px solid #cccccc;
  border-radius: 10px;
}

.division-all:hover {
  background: #e6d242;
  color: #000000;
  box-shadow: 1px 1px 1px #757575;
}

.division1 {
  background: #c2254c;
}

.imgWrap {
  text-align: center;
}

.feedbackImg {
  width: 80%;
}

@media (max-width: 992px) {
  .imgWrap img {
    width: 80%;
  }
}
</style>
