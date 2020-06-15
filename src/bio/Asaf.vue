<template>
  <div id="asaf">
    <div class="container">
      <div class="row bioMain">
        <div class="col-md-3 col-xs-12 text-center">
          <div class="bioImg">
            <img src="../assets/img/Asaf.jpg" alt="">
          </div>
        </div>
        <div class="col-md-8 col-xs-12">
          <h3 class="padding-10">{{$t('asafInfo.title')}}</h3>
          <p class="text-gray padding-top15">{{$t('asafInfo.row1')}}</p>
          <p class="text-gray padding-top15">{{$t('asafInfo.row2')}}</p>
          <p class="text-gray padding-top15">{{$t('asafInfo.row3')}}</p>
          <p class="text-gray padding-top15">{{$t('asafInfo.row4')}}</p>
          <p class="text-gray padding-top15">{{$t('asafInfo.row5')}}</p>
          <p class="text-gray padding-top15">{{$t('asafInfo.row6')}}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <router-link to="/faculty#bioAsaf">
            <div class="bioClick">
              {{$t('appPublic.row3')}}
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Asaf"
  }
</script>

<style scoped>

</style>
