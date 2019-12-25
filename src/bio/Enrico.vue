<template>
  <div id="enrico">
    <div class="container">
      <div class="row bioMain">
        <div class="col-md-3 col-xs-12 text-center">
          <div class="bioImg">
            <img src="../assets/img/Enrico.jpg" alt />
          </div>
        </div>
        <div class="col-md-8 col-xs-12">
          <h3 class="padding-10">{{$t('enricoInfo.row1')}}</h3>
          <h5>University of Toronto</h5>
          <a href="http://www.enricoelisipiano.com" target="_blank">www.enricoelisipiano.com</a>
          <p class="text-gray padding-top15">{{$t('enricoInfo.row2')}}</p>
          <p class="text-gray padding-top15">{{$t('enricoInfo.row3')}}</p>
          <p class="text-gray padding-top15">{{$t('enricoInfo.row4')}}</p>
          <p class="text-gray padding-top15">{{$t('enricoInfo.row5')}}</p>
          <p class="text-gray padding-top15">{{$t('enricoInfo.row6')}}</p>
          <p class="text-gray padding-top15">{{$t('enricoInfo.row7')}}</p>
          <p class="text-gray padding-top15">{{$t('enricoInfo.row8')}}</p>
          <p class="text-gray padding-top15">{{$t('enricoInfo.row9')}}</p>
          <p class="text-gray padding-top15">{{$t('enricoInfo.row10')}}</p>
          <p class="text-gray padding-top15">{{$t('enricoInfo.row11')}}</p>
          <p class="text-gray padding-top15">{{$t('enricoInfo.row12')}}</p>
          <p class="text-gray padding-top15">{{$t('enricoInfo.row13')}}</p>
          <p class="text-gray padding-top15">
            {{$t('enricoInfo.row14')}}
            <a
              href="http://www.facebook.com/enricoelisipiano."
              target="_blank"
            >www.facebook.com/enricoelisipiano.</a>
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <router-link to="/faculty#bioEnrico">
            <div class="bioClick">< {{$t('appPublic.row3')}}</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Andrea"
};
</script>

<style scoped>
</style>
