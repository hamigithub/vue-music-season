<template>
  <div id="additional">
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
      <div class="row padding-top20">
        <div class="col-xs-12">
          <h3>Technical recommendations for online participants</h3>
          <h4>(minimum requirements)</h4>

          <p class="padding-top20">
            . Performers should use the latest phone or tablet possible during
            the Zoom meeting.
          </p>
          <p>
            . The piano should be located close to the Wifi router to ensure an
            optimal connection during the live performance.
          </p>
          <p>
            . The location of the streaming device should be at an angle that
            would allow for an optimal vision of the keyboard and hands, as well
            as include the use of the pedal during the performance.
          </p>
          <p>
            . The use of a phone or tablet stand or tripod is highly recommended
            to assure the camera's stability and optimal focus during the
            performance. An example of such can be found at:
            <a
              target="_blank"
              href="https://www.amazon.com/Acuvar-Aluminum-Universal-Smartphone-Smartphones/dp/B00SHJPMEU/ref=sr_1_12_sspa?dchild=1&keywords=phone+tripod&qid=1617331500&sr=8-12-spons&psc=1&smid=A7H9LIHN2YW5O&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExTjBLQkJQVUpOVkVEJmVuY3J5cHRlZElkPUEwOTQ0NTc3UU5TS1c5R0VBTlJHJmVuY3J5cHRlZEFkSWQ9QTA2NTY1MTczUkdGMzNORkJDUkFBJndpZGdldE5hbWU9c3BfbXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ=="
              >https://www.amazon.com/Acuvar-Aluminum-Universal-Smartphone-Smartphones</a
            >
          </p>
          <p>
            . If using a laptop for the performance, it is recommended to
            acquire a USB microphone and position it close to the piano strings
            to optimize the performance's sound quality. An example of such a
            device can be found at:
            <a
              target="_blank"
              href="https://www.amazon.com/Microphone-Condenser-Recording-Streaming-669B/dp/B06XCKGLTP/ref=sr_1_2_sspa?dchild=1&keywords=USB+microphone&qid=1617211973&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFGOUtNQzVYOTI1UFUmZW5jcnlwdGVkSWQ9QTAzMzgwOTIyN1k3U0pPVk9JTVkzJmVuY3J5cHRlZEFkSWQ9QTA3MDU1NzUyV0hYM0E0MlZCMTdVJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ=="
              >https://www.amazon.com/Microphone-Condenser-Recording-Streaming-669B</a
            >
          </p>
          <p>
            . We highly encourage all participants to test their performance
            quality through a Zoom video conference with family and/or friends
            before the competition to ensure that all devices are working
            correctly and that the sound quality is the highest possible. If the
            sound quality is poor enough to affect judging, it can potentially
            influence the score.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Additional",
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
