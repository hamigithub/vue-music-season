<template>
  <div id="ivy">
    <div class="container">
      <div class="row bioMain">
        <div class="col-md-3 col-xs-12 text-center">
          <div class="bioImg">
            <img src="../assets/img/Ivy.jpg" alt="">
          </div>
        </div>
        <div class="col-md-8 col-xs-12">
          <h3 class="padding-10">{{$t('ivyInfo.title')}}</h3>
          <p class="text-gray padding-top15">{{$t('ivyInfo.row1')}}</p>
          <p class="text-gray padding-top15">{{$t('ivyInfo.row2')}}</p>
          <p class="text-gray padding-top15">{{$t('ivyInfo.row3')}}</p>
          <p class="text-gray padding-top15">{{$t('ivyInfo.row4')}}</p>
          <p class="text-gray padding-top15">{{$t('ivyInfo.row5')}}</p>
          <p class="text-gray padding-top15">{{$t('ivyInfo.row6')}}</p>
          <p class="text-gray padding-top15">{{$t('ivyInfo.row7')}}</p>
          <p class="text-gray padding-top15">{{$t('ivyInfo.row8')}}</p>
          <p class="text-gray padding-top15">{{$t('ivyInfo.row9')}}</p>
          <p class="text-gray padding-top15">{{$t('ivyInfo.row10')}}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <router-link to="/faculty#bioIvy">
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
    name: "Ivy"
  }
</script>

<style scoped>

</style>
