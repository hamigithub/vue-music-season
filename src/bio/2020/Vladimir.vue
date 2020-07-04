<template>
  <div id="vladimir">
    <div class="container">
      <div class="row bioMain">
        <div class="col-md-3 col-xs-12 text-center">
          <div class="bioImg">
            <img src="../../assets/img/Vladimir.jpg" alt />
          </div>
        </div>
        <div class="col-md-8 col-xs-12">
          <h3 class="padding-10">{{$t('vladimirInfo.title')}}</h3>
          <p class="text-gray padding-top15">{{$t('vladimirInfo.row1')}}</p>
          <p class="text-gray padding-top15">{{$t('vladimirInfo.row2')}}</p>
          <p class="text-gray padding-top15">{{$t('vladimirInfo.row3')}}</p>
          <p class="text-gray padding-top15">{{$t('vladimirInfo.row4')}}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <router-link to="/faculty#bioVladimir">
            <div class="bioClick">{{$t('appPublic.row3')}}</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Vladimir"
};
</script>

<style scoped>
</style>
