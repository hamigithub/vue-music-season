<template>
  <div id="divisionCanada">
    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <div class="text-center">
            <h1>
              2021 Conero International Piano Comeptition, Canada Division
            </h1>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <table>
            <tr>
              <td>Preliminary Round Deadline: </td>
              <td>July 3rd, 2021</td>
            </tr>
            <tr>
              <td>Registration fee for Preliminary Round:</td>
              <td>$60 for Amateur/Young Artist Division</td>
            </tr>

            <tr>
              <td></td>
              <td>$80 for Professional /Chamber/ Piano Teachers’ Division</td>
            </tr>
          </table>
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
              <td>Tom Lee Music</td>
            </tr>
          </table>
        </div>
        <div class="col-xs-12">
          <p class="padding-50">
            Preliminary round rules:  Video link submissions due with
            application. Video must be recorded within the past 6 months. No
            editing allowed. Each repertoire must be presented in one continuous
            take. (For more details please refer to Video Recording Requirements
            and Guidelines) 
          </p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12 col-md-6 text-center">
          <router-link to="/division/canada/apply">
            <div class="btn btnBgm">Apply Canada Division --></div>
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
                value="9A9A9XP7UFWPN"
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
                        Professional $80.00 CAD
                      </option>
                      <option value="Chamber Music">
                        Chamber Music $80.00 CAD
                      </option>
                      <option value="Piano Teachers">
                        Piano Teachers $80.00 CAD
                      </option>
                      <option value="Young Artist">
                        Young Artist $60.00 CAD
                      </option>
                      <option value="Adult Amateur">
                        Adult Amateur $60.00 CAD
                      </option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="hidden"
                      name="on1"
                      value="Participant name:"
                    />Participant name:
                  </td>
                </tr>
                <tr>
                  <td><input type="text" name="os1" maxlength="200" /></td>
                </tr>
              </table>
              <input type="hidden" name="currency_code" value="CAD" />
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
            <img
              src="../../../assets/img/division_canada_bg_01.jpg"
              alt="cd_bg_2"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <h2>Categories</h2>
          <h3 class="padding-top20">Young Artist Division</h3>
          <h4>Age 6 to 8</h4>
          <p>1 or 2 free choices not exceeding the max duration of 5 mins.</p>
          <h4>Age 9 to 11</h4>
          <p>1 or 2 free choices not exceeding the max duration of 6 mins.</p>
          <h4>Age 12 to 14</h4>
          <p>1 or 2 free choices not exceeding the max duration of 8 mins.</p>
          <h4>Age 15 to 17</h4>
          <p>1 or 2 free choices not exceeding the max duration of 10 mins.</p>
          <p class="padding-top20">
            *Repertoire selections can be repeated in the final round.
          </p>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <h3>Professional Adult Division: Age 18 to 32</h3>
          <p>
            Free choices from three different periods; one of them must be from
            the Classical period. A single movement from a Sonata is acceptable.
            No more than 30 mins. Only one (1) repertoire selection from the
            Preliminary Round can be repeated in the Final Round.
          </p>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <h3>Professional Young Artist Division:  Age 13-17</h3>
          <p>
            Free choices from two different periods; one of them must be from
            the Classical period. No more than 20 mins. A single movement from a
            Sonata is acceptable. Only one (1) repertoire selection from the
            Preliminary Round can be repeated in the Final Round.
          </p>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <h3>Piano Teachers Division:  Age 22 & above</h3>
          <p>
            One Baroque piece and one Romantic piece. No more than 15 mins. Only
            one (1) repertoire selection from the Preliminary Round can be
            repeated in the Final Round.
          </p>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <h3>Amateur Adult Division:  Age 18 years & above</h3>
          <p>1-2 free choices not exceeding the max duration of 10mins.</p>
        </div>
      </div>

      <div class="row padding-top20">
        <div class="col-xs-12">
          <h3>Chamber Music Division:</h3>
          <h4>Adult Piano Duet / Four Hands: Age 18 & above</h4>
          <p>
            Free choice from three different periods; one of them must be from
            the Classical period. No more than 25 mins. Memorization not
            required. 
          </p>
          <h4>Youth Piano Duet / Four Hands:</h4>
          <h4>8-10 years old</h4>
          <p>
            1-2 free choices not exceeding the max duration of 8 mins.
            Memorization not required. 
          </p>
          <h4>11-14 years old</h4>
          <p>
            1-2 free choices not exceeding the max duration of 10 mins.
            Memorization not required. 
          </p>
          <h4>15-18 years old</h4>
          <p>
            1-2 free choices not exceeding the max duration of 12 mins.
            Memorization not required. 
          </p>
        </div>
      </div>

      <div class="row padding-top20">
        <div class="col-xs-12">
          <h3>
            Adult Chamber Group: (Piano with string or woodwind)  Age 18 & above
          </h3>
          <p>
            Free choices from three different periods. No more than 30 mins.
            Memorization not required. 
          </p>
        </div>
      </div>

      <div class="row padding-top20">
        <div class="col-xs-12">
          <h3>
            Youth Chamber Group: (Piano with string or woodwind) Age 18 & under
          </h3>
          <p>
            1-2 free choices not exceeding the max duration of 15mins.
            Memorization not required. 
          </p>
        </div>
      </div>

      <div class="row padding-top20">
        <div class="col-xs-12">
          <h3>
            All contestants must meet the age requirements at the time of the
            competition. If their birthday will place them in another age
            category, that birthday must take place after July 3th, 2021.
          </h3>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <h2>Awards</h2>
          <p class="padding-top20">
            1. Each participant will be given a certificate of award
          </p>
          <p class="padding-top20">
            2. Participants will receive written feedback about their
            performance from judges (including where they can improve, best
            parts of the performance, etc).
          </p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <h2>Competition Regulations</h2>
          <p class="padding-top20">
            1. The 2021 Conero International Piano Competition has two rounds:
            Preliminary Round and Final Round.
          </p>
          <p>
            2. The Preliminary round of 2021 Conero International Piano
            Competition has China Division, United States Division, Canada
            Division, Australia Division and Online Division (For all other
            countries). Please double-check the dates and rules in your
            division. 
          </p>
          <p>
            3. The final round will apply the common rules and regulations for
            all finalists. Final round dates: August 2nd -3rd, 2021
          </p>
          <p>
            4. The final round is voluntarily; eligible candidates should
            complete the application and submit the fee before July 20th. 
          </p>
          <p>
            5. If applying for more than one division in the competition,
            applicants must complete separate applications and pay the required
            fees for each individual division.
          </p>
          <p>
            6. Young Artist Divisions, Piano Teachers Group, Amateur Adult
            Division, Professional Adult Division should be performed from
            memory.
          </p>
          <p>
            7. Piano concertos, self-composed pieces, or transcriptions done by
            the performer are not accepted.
          </p>
          <p>8. Repeats are not required except the place marked with D.C.</p>
          <p>9. Judges’ decisions are final.</p>
          <p>
            10. The Conero International Piano Festival retains copyright of
            performance video, audio and pictures of the competition and the
            award ceremony. The festival has the legal right to use these
            materials.
          </p>
          <p>
            11. The organizing competition committee reserves all the right for
            the final interpretation of the regulations.
          </p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <h2>Video Recording Requirements and Guidelines</h2>
          <p class="padding-top20">
            Performers should use the latest phone or tablet possible for
            recording.
          </p>
          <p>
            Please submit your video link in your application form. Do NOT send
            the video directly to us.
          </p>
          <p>
            The recording device should be placed at an angle that would allow
            for an optimal vision of the keyboard and hands, as well as the
            pedal. (See pictures below) 
          </p>
          <div class="imgWrap text-center">
            <img src="../../../assets/img/division_canada_bg_02.jpg" alt="" />
          </div>

          <p>
            The use of a phone or tablet stand or tripod is highly recommended
            to assure stability and optimal focus of the camera during the
            performance. An example of such can be found at: 
          </p>
          <p>
            <a
              href="https://www.amazon.ca/dp/B073RKRS3M/ref=cm_sw_r_cp_apa_glt_i_80V7SJ3SVRT3TVMCAC4V"
              target="_blank"
              >https://www.amazon.ca/dp/B073RKRS3M/ref=cm_sw_r_cp_apa_glt_i_80V7SJ3SVRT3TVMCAC4V</a
            >
          </p>
          <p>
            If using a laptop for the performance, it is recommended to acquire
            an USB microphone to be located close to the piano strings to
            optimize the sound quality during the performance. A sample of such
            devices can be found at: 
          </p>
          <p>
            <a
              href="https://www.amazon.ca/dp/B08TW12C9V/ref=cm_sw_r_cp_apa_glt_i_JFZATEP7Z3M8N18ATAY5?_encoding=UTF8&psc=1"
              target="_blank"
              >https://www.amazon.ca/dp/B08TW12C9V/ref=cm_sw_r_cp_apa_glt_i_JFZATEP7Z3M8N18ATAY5?_encoding=UTF8&psc=1</a
            >
          </p>
          <p>
            We highly encourage all participants to test their performance
            quality with family and/or friends prior to the competition, to
            assure that all devices are working properly, and that the sound
            quality is the highest possible. If the sound quality is poor enough
            to affect judging, it can potentially influence the score.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DivisionCanada",
  data() {
    return {};
  },
};
</script>

<style scoped>
/* 主页 */
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

.bg-wrap img {
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
