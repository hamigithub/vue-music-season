<template>
  <div id="divisionUsa">
    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <div class="text-center">
            <h1>2021 Conero International Piano Comeptition, US Division</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <table>
            <tr>
              <td>Preliminary Round Date：</td>
              <td>May 22nd -23rd, 2021</td>
            </tr>
            <tr>
              <td>Preliminary Round Deadline:</td>
              <td>May 20th, 2021</td>
            </tr>

            <tr>
              <td>Registration fee for Preliminary Round:</td>
              <td>
                $30 for Young Artist Division; Rising Star Division and Amateur
                Adult Division
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                $35 for Professional Division, PianoTeachers’ Division and
                Chamber Division
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                (All the preliminary round fees are nonrefundable)
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top20">
        <div class="col-xs-12">
          <div class="bg-wrap text-center">
            <img src="../../../assets/img/us_bg_01.png" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <table>
            <tr>
              <th>Hosted by:</th>
              <td>International Piano Professionals Association</td>
            </tr>
            <tr>
              <th>Supported by:</th>
              <td>Kansas City Piano</td>
            </tr>
            <tr>
              <th></th>
              <td>Kansas City Chinese Association</td>
            </tr>

            <tr>
              <th>Preliminary round location:</th>
              <td>
                Kansas City Piano, 7316 W 119th St, Overland Park, KS 66213
              </td>
            </tr>
            <tr>
              <th></th>
              <td>Remote live performance available</td>
            </tr>
          </table>
        </div>
        <div class="col-xs-12">
          <p class="padding-50">
            For the U.S. preliminary round, performances must be live. Those who
            live nearby Kansas City are highly encouraged to play in-person at
            the Conero competition venue, but we will also accept a remote
            performance. If remote, recordings will not be accepted; a live
            performance is required (i.e. over Zoom – technical details will be
            provided later). For the final round, all U.S. finalists are
            required to play at the in-person competition.
          </p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12 col-md-6 text-center">
          <router-link to="/division/usa/apply">
            <div class="btn btnBgm">Apply US Division --></div>
          </router-link>
          <div class="text-center padding-top20">
            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_top"
            >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input
                type="hidden"
                name="hosted_button_id"
                value="CL448JFGF8SKJ"
              />
              <table class="payTable">
                <tr>
                  <td>
                    <input
                      type="hidden"
                      name="on0"
                      value="Divisions"
                    />Divisions
                  </td>
                </tr>
                <tr>
                  <td>
                    <select name="os0">
                      <option value="Professional">
                        Professional $35.00 USD
                      </option>
                      <option value="Chamber Music">
                        Chamber Music $35.00 USD
                      </option>
                      <option value="Piano Teachers">
                        Piano Teachers $35.00 USD
                      </option>
                      <option value="Young Artist">
                        Young Artist $30.00 USD
                      </option>
                      <option value="Rising Star">
                        Rising Star $30.00 USD
                      </option>
                      <option value="Adult Amateur">
                        Adult Amateur $30.00 USD
                      </option>
                    </select>
                  </td>
                </tr>
              </table>
              <input type="hidden" name="currency_code" value="USD" />
              <input
                type="image"
                src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif"
                border="0"
                name="submit"
                alt="PayPal - The safer, easier way to pay online!"
              />
              <img
                alt=""
                border="0"
                src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
                width="1"
                height="1"
              />
            </form>
          </div>
          <p class="padding-20">{{ $t("applyFee.ps") }}</p>
        </div>
        <div class="col-xs-12 col-md-6">
          <div class="imgWrap text-center">
            <img src="../../../assets/img/divisionUS_bg_1.png" alt="cd_bg_2" />
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <h2>Categories</h2>
          <h3 class="padding-top20">Young Artist Division</h3>
          <h4>Age 15 to 17</h4>
          <p>1 or 2 free choices not exceeding the max duration of 10 mins.</p>
          <h4>Age 12 to 14</h4>
          <p>1 or 2 free choices not exceeding the max duration of 8 mins.</p>
          <h4>Age 9 to 11</h4>
          <p>1 or 2 free choices not exceeding the max duration of 6 mins.</p>
          <h4>Age 6 to 8</h4>
          <p>1 or 2 free choices not exceeding the max duration of 5 mins.</p>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <h3>Rising Star Division</h3>
          <p class="font-grayBlue">
            Memorization not required in Rising Star Division.
          </p>
          <h4>Age 15 to 17</h4>
          <p>1 or 2 free choices not exceeding the max duration of 8 mins.</p>
          <h4>Age 12 to 14</h4>
          <p>1 or 2 free choices not exceeding the max duration of 7 mins.</p>
          <h4>Age 9 to 11</h4>
          <p>1 or 2 free choices not exceeding the max duration of 6 mins.</p>
          <h4>Age 6 to 8</h4>
          <p>1 or 2 free choices not exceeding the max duration of 5 mins.</p>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <h3>Professional Division:</h3>
          <p>
            Free choices from two different periods; one of them must be from
            the Classical period.
          </p>
          <h4>Age 18 to 32</h4>
          <p>No more than 30 mins.</p>
          <h4>Age 13 to 17</h4>
          <p>No more than 20 mins.</p>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <h3>Piano Teachers Division: Age above 22 years old.</h3>
          <p>One Baroque piece and one Romantic piece. No more than 15 mins.</p>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <h3>Amateur Adult Division: Age above 18 years old.</h3>
          <p>1-2 free choices not exceeding the max duration of 10mins.</p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <h2>Chamber Music Division:</h2>
          <p class="font-grayBlue">Memorization not required.</p>
          <h4 class="padding-top20">
            Adult Piano Duet / Four Hands: Average age above 18 years old.
          </h4>
          <p>
            Free choice from three different periods; one of them must be the
            Classical period. No more than 25 mins.
          </p>
          <h4 class="padding-top20">
            Youth Piano Duet / Four Hands: Average age no more than 18 years
            old.
          </h4>
          <p>1-2 free choices not exceeding the max duration of 12mins.</p>
          <h4 class="padding-top20">
            Adult Chamber Group: (Piano with string or woodwind) Average ages
            above 18 years old.
          </h4>
          <p>
            Free choices from three different periods. No more than 30 mins.
          </p>
          <h4 class="padding-top20">
            Youth Chamber Group: (Piano with string or woodwind) Average age no
            more than 18 years old.
          </h4>
          <p>1-2 free choices not exceeding the max duration of 15mins.</p>
        </div>
      </div>
      <div class="row padding-top50">
        <div class="col-xs-12">
          <h4>
            All contestants must meet the age requirements at the time of the
            competition. Their current age before May 15th, 2021, will determine
            the category they must compete in. For example, if the student turns
            19 on May 15th or after, he will compete in the adult category.
          </h4>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <h2>Awards</h2>
          <p class="padding-top20">
            1. Each participant will be given a certificate of award.
          </p>
          <p class="padding-top20">
            2. The first prize of the professional division and the young artist
            division (except age 6-8 group) will be awarded a full scholarship
            to participate in the 2021 Conero International Piano Festival. The
            1st prize of Piano Teachers’ Group will have priority to attend the
            pedagogy forum in the Conero International Piano Festival.
          </p>
          <p class="padding-top20">
            3. Participants will receive written feedback about their
            performance from judges (including where they can improve, best
            parts of the performance, etc.).
          </p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <h2>Competition Regulations</h2>
          <p class="padding-top20">
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
            6) Young Artist Divisions, Piano Teachers Group, Amateur Adult
            Division, Professional Adult Division should be performed from
            memory.
          </p>
          <p>
            7) Piano concertos, self-composed pieces, or transcriptions done by
            the performer are not accepted.
          </p>
          <p>8) Repeats are not required except the place marked with D.C.</p>
          <p>9) Judges’ decisions are final.</p>
          <p>
            10) The Conero International Piano Festival retains copyright of
            performance video, audio, and pictures of the competition and the
            award ceremony. The festival has the legal right to use these
            materials.
          </p>
          <p>
            11) The competition committee reserves all the right for the final
            interpretation of the regulations.
          </p>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <router-link to="/division/usa/additional">
            <h3>Technical recommendations for online participants</h3>
            <h4>(minimum requirements)</h4>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DivisionUsa",
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

.imgWrap img {
  width: 70%;
}

.bg-wrap img{
  width: 100%;
}

.listsWrap {
  background: rgb(255, 39, 39);
  width: 320px;
  margin: 0 auto;
  border-radius: 3px;
  padding: 15px;
  font-size: 30px;
  color: #ffed4f;
}

.payTable {
  margin: 0 auto;
}
</style>
