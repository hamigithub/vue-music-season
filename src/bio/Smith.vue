<template>
  <div id="smith">
    <div class="container">
      <div class="row bioMain">
        <div class="col-md-3 col-xs-12 text-center">
          <div class="bioImg">
            <img src="../assets/img/Smith.jpg" alt="">
          </div>
        </div>
        <div class="col-md-8 col-xs-12">
          <h3 class="padding-10">{{$t('smithInfo.title')}}</h3>
          <p class="text-gray padding-top15">{{$t('smithInfo.row1')}}</p>
          <p class="text-gray padding-top15">{{$t('smithInfo.row2')}}</p>
          <p class="text-gray padding-top15">{{$t('smithInfo.row3')}}</p>
          <p class="text-gray padding-top15">{{$t('smithInfo.row4')}}</p>
          <p class="text-gray padding-top15">{{$t('smithInfo.row5')}}</p>
          <p class="text-gray padding-top15">{{$t('smithInfo.row6')}}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <router-link to="/faculty#bioSmith">
            <div class="bioClick">
              < {{$t('appPublic.row3')}}
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Smith"
  }
</script>

<style scoped>

</style>
