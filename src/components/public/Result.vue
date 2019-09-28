<template>
  <div id="result">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="componentTitle committeeTitle">
            <div class="titleBtn"><span class="titleBtnInside">{{$t('result.title')}}</span></div>
            <div><p class="title_p">{{$t('appPublic.row2')}}</p></div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <h2 class="padding-bottom10">Pedagogy :</h2>
          <table border="1" class="font-bold">
            <tr>
              <td>Liang Chen</td>
              <td>Lin Luo</td>
              <td>Ruofei Wu</td>
              <td>Qingfeng Li</td>
            </tr>
            <tr>
              <td>Sijia Zheng</td>
              <td>Shenyu Wang</td>
              <td>Weiwei Chen</td>
              <td>Yun Hu</td>
            </tr>
          </table>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12">
          <h2 class="padding-bottom10 padding-top50">Young Piano Professional :</h2>
          <table border="1" class="font-bold">
            <tr>
              <td>Lin Cong</td>
              <td>Guiseppe Maria Nola</td>
              <td>Sophia Gong</td>

            </tr>
            <tr>
              <td colspan="3">Marta Papoian</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <h2 class="padding-bottom10 padding-top50">Adult Piano Professional :</h2>
          <table border="1" class="font-bold">
            <tr>
              <td>He Wang</td>
              <td>Tiziano Rossetti</td>
              <td>Lam Sze Hin</td>
            </tr>
            <tr>
              <td>Lorena Gaccione</td>
              <td>Malcolm Guobi Liu</td>
              <td>Mingpeng Zhang</td>
            </tr>
            <tr>
              <td>Qinglan Jiang</td>
              <td>Roberta Palmisano</td>
              <td>Tianran Gao</td>
            </tr>
            <tr>
              <td>Wen Chen</td>
              <td>Wubin Yan</td>
              <td>Yijing Fu</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <h2 class="padding-bottom10 padding-top50">Amateur Piano groups :</h2>
          <table border="1" class="font-bold">
            <tr>
              <td>Chenghan Wang</td>
              <td>Haoxuan Huang</td>
              <td>Jiayu Zheng</td>
            </tr>
            <tr>
              <td>Jin Zhong</td>
              <td>Jin Han</td>
              <td>Jing Zhou</td>
            </tr>
            <tr>
              <td>Qianyun Huang</td>
              <td>Shengbo Qi</td>
              <td>Weicheng Chen</td>
            </tr>
            <tr>
              <td>Xiangshuran Chang</td>
              <td>Xiaoqiang Zhao</td>
              <td>Xiaohe Hu</td>
            </tr>
            <tr>
              <td>Ziheng Liang</td>
              <td>Zijie Liao</td>
              <td>Zerui Cheng</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Result"
  }
</script>

<style scoped>
  .titleBtn {
    background-image: linear-gradient(90deg, #ff5a17, #ff1a62);
  }
</style>
