<template>
  <div id="divisionChina">
    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <div class="text-center">
            <h1>科雷诺国际钢琴比赛中国赛区</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <div class="homeBanner">
            <div id="bannerWrap" class="bannerWrap">
              <img
                class="homeBannerImg"
                src="../../../assets/img/cd_bg_1.jpg"
                alt
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top20">
        <div class="col-xs-12">
          <router-link :to="{ name: 'chinaFinalists' }">
            <div class="text-center pointer-hand division-all division1">
              中国赛区 - 2021 决赛名单
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="col-md-6 col-xs-12">
          <h2>赛事简介丨Competition Information</h2>
          <p>
            科雷诺国际钢琴比赛是由国际钢琴专业协会IPPA（
            美国），与意大利B.Gigli音乐学院，Recanati城市文化局联合主办的高规格专业赛事。
          </p>
          <p>
            科雷诺国际钢琴比赛（Conero International Piano
            Competition）因其专业性、国际性，已被AAF国际赛事基金会（Alink-Argerich
            Foundation)准予，正式成为AAF国际赛事基金会成员之一。
          </p>
          <div class="font-red">
            <p class="padding-top20">
              中国国内不设分赛区，线上线下同步进行面试。晋级者将与来自澳洲、加拿大、美国、欧洲各国的选手在线上角逐全球决赛。
            </p>
            <p class="padding-top20">日期：2021年6月</p>
            <p>
              地点：面试点将设于北京、上海、广州、武汉及厦门；无法前往现场面试的参赛者也可通过指定连线方式，参与线上面试。
            </p>
            <p>报名费用：</p>
            <p>各专业组别及高师组880人民币</p>
            <p>业余组别680人民币</p>
            <p>四手联弹与室内乐组别 每位选手380人民币</p>
          </div>
        </div>
        <div class="col-md-6 col-xs-12">
          <div class="imgWrap text-center">
            <img src="../../../assets/img/cd_bg_2.jpg" alt="cd_bg_2" />
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <h2>中国赛区评审团 | Jury Of China Division</h2>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <div class="flexBox">
            <div class="box-child text-center">
              <div class="imgWrap">
                <img
                  class="judgeImg pointer-hand"
                  src="../../../assets/img/cnJudge/cnJudge_1.jpg"
                  alt
                />
                <div class="titleWrap">
                  <p class="font-bold">林晓燕</p>
                  <p class="padding-top5">钢琴家、教育家</p>
                  <p>厦门市音乐学校钢琴学科主任</p>
                </div>
              </div>
            </div>
            <div class="box-child text-center">
              <div class="imgWrap">
                <img
                  class="judgeImg pointer-hand"
                  src="../../../assets/img/cnJudge/cnJudge_2.jpg"
                  alt
                />
                <div class="titleWrap">
                  <p class="font-bold">刘云天</p>
                  <p class="padding-top5">著名旅美青年钢琴家</p>
                  <p>华夏琴英全球华人钢琴家</p>
                  <p>星海音乐学院钢琴系教师</p>
                  <p>广东省音乐家协会会员</p>
                </div>
              </div>
            </div>
            <div class="box-child text-center">
              <div class="imgWrap">
                <img
                  class="judgeImg pointer-hand"
                  src="../../../assets/img/cnJudge/cnJudge_3.jpg"
                  alt
                />
                <div class="titleWrap">
                  <p class="font-bold">沈璐</p>
                  <p class="padding-top5">著名旅美青年钢琴家</p>
                  <p>华夏琴英全球华人钢琴家</p>
                  <p>星海音乐学院钢琴系教师</p>
                </div>
              </div>
            </div>
            <div class="box-child text-center">
              <div class="imgWrap">
                <img
                  class="judgeImg pointer-hand"
                  src="../../../assets/img/cnJudge/cnJudge_4.jpg"
                  alt
                />
                <div class="titleWrap">
                  <p class="font-bold">王海波</p>
                  <p class="padding-top5">北京师范大学音乐系钢琴教授</p>
                  <p>博士生导师</p>
                  <p>中国音乐家钢琴协会理事</p>
                  <p>国家艺术基金评审专家</p>
                </div>
              </div>
            </div>
            <div class="box-child text-center">
              <div class="imgWrap">
                <img
                  class="judgeImg pointer-hand"
                  src="../../../assets/img/cnJudge/cnJudge_5.jpg"
                  alt
                />
                <div class="titleWrap">
                  <p class="font-bold">王健</p>
                  <p class="padding-top5">武汉音乐学院钢琴系教授</p>
                  <p>武汉音乐学院学术委员、硕士生导师</p>
                  <p>中国音协钢琴学会理事</p>
                  <p>湖北省音乐家协会理事</p>
                  <p>湖北省音乐家协会钢琴学会会长</p>
                </div>
              </div>
            </div>
            <div class="box-child text-center">
              <div class="imgWrap">
                <img
                  class="judgeImg pointer-hand"
                  src="../../../assets/img/cnJudge/cnJudge_6.jpg"
                  alt
                />
                <div class="titleWrap">
                  <p class="font-bold">王遒</p>
                  <p class="padding-top5">中国音乐学院钢琴系副教授</p>
                  <p>硕士研究生导师</p>
                </div>
              </div>
            </div>
            <div class="box-child text-center">
              <div class="imgWrap">
                <img
                  class="judgeImg pointer-hand"
                  src="../../../assets/img/cnJudge/cnJudge_7.jpg"
                  alt
                />
                <div class="titleWrap">
                  <p class="font-bold">解静娴</p>
                  <p class="padding-top5">旅德钢琴家 钢琴博士</p>
                  <p>上海音乐学院钢琴系副教授 硕士生导师</p>
                  <p>上海市“晨光学者”</p>
                  <p>上海市“文化新人”</p>
                </div>
              </div>
            </div>
            <div class="box-child text-center">
              <div class="imgWrap">
                <img
                  class="judgeImg pointer-hand"
                  src="../../../assets/img/cnJudge/cnJudge_8.jpg"
                  alt
                />
                <div class="titleWrap">
                  <p class="font-bold">杨成刚</p>
                  <p class="padding-top5">四川音乐学院钢琴系副系主任</p>
                  <p>四川音乐学院钢琴系教授</p>
                  <p>硕士生导师</p>
                  <p>四川省学术带头人后备人选</p>
                  <p>四川钢琴学会副会长</p>
                </div>
              </div>
            </div>
            <div class="box-child text-center">
              <div class="imgWrap">
                <img
                  class="judgeImg pointer-hand"
                  src="../../../assets/img/cnJudge/cnJudge_9.jpg"
                  alt
                />
                <div class="titleWrap">
                  <p class="font-bold">尤洋</p>
                  <p class="padding-top5">留法硕士</p>
                  <p>中央音乐学院钢琴专业讲师</p>
                  <p>中央音乐学院校外音乐水平考级评委</p>
                  <p>中央音乐学院全国青少年艺术展演专家委员会委员</p>
                  <p>福建省音协钢琴艺术专业委员会副会长</p>
                  <p>厦门市音协副主席</p>
                </div>
              </div>
            </div>
            <div class="box-child text-center">
              <div class="imgWrap">
                <img
                  class="judgeImg pointer-hand"
                  src="../../../assets/img/cnJudge/cnJudge_10.jpg"
                  alt
                />
                <div class="titleWrap">
                  <p class="font-bold">郑晓峰</p>
                  <p class="padding-top5">钢琴家 教育家</p>
                  <p>武汉音乐学院资深专业导师</p>
                </div>
              </div>
            </div>
            <div class="box-child text-center">
              <div class="imgWrap">
                <img
                  class="judgeImg pointer-hand"
                  src="../../../assets/img/cnJudge/cnJudge_11.jpg"
                  alt
                />
                <div class="titleWrap">
                  <p class="font-bold">周笑扬</p>
                  <p class="padding-top5">旅美钢琴演奏家，博士</p>
                  <p>“橄榄古典音乐 钢琴课堂”特约撰稿人</p>
                  <p>上海人民广播电台“经典947”频道特约撰稿人</p>
                  <p>著名乐评人</p>
                  <p>音乐家推荐人</p>
                  <p>音乐艺术活动策划人</p>
                </div>
              </div>
            </div>
            <div class="box-child text-center">
              <div class="imgWrap">
                <img
                  class="judgeImg pointer-hand"
                  src="../../../assets/img/cnJudge/cnJudge_12.jpg"
                  alt
                />
                <div class="titleWrap">
                  <p class="font-bold">柴聪聪</p>
                  <p class="padding-top5">旅美钢琴家、音乐艺术博士（D.M.A)</p>
                  <p>IBLA国际音乐比赛中国区执行人</p>
                  <p>海南大学客座教授</p>
                  <p>武汉音乐学院钢琴系讲师</p>
                  <p>科雷诺艺术节暨比赛创办人</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <h2 class="">参赛组别丨Groups</h2>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <p>
            <span class="font-red">高师组</span> Piano Teachers Group： ages
            above 22
          </p>
          <P>一首巴洛克或古典时期作品</P>
          <P>一首自选作品</P>
          <P>总时长不超过15分钟</P>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <p>
            <span class="font-red">专业青年组</span> Professional Adult
            Division: Ages 18-32
          </p>
          <P>三首或以上有风格对比的自选曲目</P>
          <P>总时长不超过30分钟</P>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <p>
            <span class="font-red">专业高校组</span> (限师范或音教专业在读学生)
            无年龄限制
          </p>
          <P>三首或以上有风格对比的自选曲目</P>
          <P>总时长不超过20分钟</P>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <p>
            <span class="font-red">专业少年一组</span> Professional Young Artist
            1 : Ages 15–17 (must not have attended college yet)
          </p>
          <P>自选两首或以上不同风格作品</P>
          <P>总时长不超过20分钟</P>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <p>
            <span class="font-red">专业少年2组</span> Professional Young Artist
            2: Ages 11–14
          </p>
          <P>自选两首不同风格作品</P>
          <P>总时长不超过15分钟</P>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <p>
            <span class="font-red">业余青年组</span> Amateur Adult Division:
            Ages 18-35
          </p>
          <P>自选 1-2 首曲目</P>
          <P>总时长不超过15分钟</P>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <p>
            <span class="font-red">业余少年一组</span> Senior Amateur Division 1
            : Ages 15–17 (must not have attended college yet)
          </p>
          <P>自选 1-2 首曲目</P>
          <P>总时长不超过10分钟</P>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <p>
            <span class="font-red">业余少年二组</span> Senior Amateur Division
            2: Ages 11–14
          </p>
          <P>自选 1-2 首曲目</P>
          <P>总时长不超过8分钟</P>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <p><span class="font-red">儿童1组</span> Junior Division 1: 9-11岁</p>
          <P>自选 1-2 首曲目</P>
          <P>总时长不超过6分钟</P>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <p><span class="font-red">儿童2组</span> Junior Division 2: 6-8岁</p>
          <P>自选 1-2 首曲目</P>
          <P>总时长不超过5分钟</P>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <p><span class="font-red">四手联弹初级组</span> 平均年龄12岁以下</p>
          <P>自选曲目</P>
          <P>总时长不能超过10分钟</P>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <p><span class="font-red">四手联弹中级组</span> 平均年龄12至18岁</p>
          <P>自选曲目</P>
          <P>总时长不能超过10分钟</P>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <p><span class="font-red">四手联弹高级组</span> 平均年龄18岁以上</p>
          <P>自选曲目</P>
          <P>总时长不能超过15分钟</P>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <p><span class="font-red">室内乐组A组</span> 平均年龄18岁以上</p>
          <P>自选钢琴与弦乐或木管室内乐作品一或多首</P>
          <P>总时长不超过15分钟</P>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <p><span class="font-red">室内乐组B组</span> 平均年龄18岁以下</p>
          <P>自选钢琴与弦乐或木管室内乐作品一或多首</P>
          <P>总时长不超过15分钟</P>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <h2>规则丨Regulations</h2>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <p>1 独奏组别所有阶段的比赛必须全程背谱演奏</p>
          <p>2一旦报名提交参赛曲目，原则上不可再更改。</p>
          <p>
            3
            除四手联弹及室内乐组别外，不接受钢琴协奏曲，个人原创作品以及改编版的作品。
          </p>
          <p>4 除结构性反复(标有D.C记号)外，不要求反复。</p>
          <p>
            5
            现场面试中，评委有权利打断选手的演奏，或要求选手演奏指定段落，但不影响选手成绩。
          </p>
          <p>6 评委的评审为不可更改的最终决定。</p>
          <p>7 选手的演奏对公众开放。</p>
          <p>
            8组委会拥有比赛期间及获奖后演奏会的演奏之所有视频、音讯、图片的版权以及在合法范围内使用该视频、音讯、图片的权利。
          </p>
          <p>
            9
            在参加本大赛期间，参赛者自身健康、伤害、事故，以及所带行李发生盗难、遗失、损坏等事故，需参赛者本人自行承担责任。
          </p>
          <p>10 比赛组委会有权利对此章程作最终解释。</p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <h2>中国区奖项丨Awards</h2>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <p>
            1.
            所有组别各面试点设一二三等奖及优秀奖，面试评委有权利决定是否出现并列或空缺的情况。
          </p>
          <p>2. 原则上，所有组别前三名将晋级国际总决赛。</p>
          <p>
            3.
            各面试点专业青年组、少年组，各组第一名将获得全额奖学金，以前往参加科雷诺国际音乐节暨比赛
          </p>
          <p>
            4.
            高师组第一名将获得高额奖学金并直接获得在科雷诺国际音乐节教学法论坛演讲资格
          </p>
          <p>5. 业余各组奖项获得者将获得奖学金以参加科雷诺国际音乐节暨比赛</p>
        </div>
      </div>
    </div>

    <!-- <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <h2>全球总决赛奖项丨Awards for Final</h2>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <p class="font-red">1.奖金</p>
          <p class="font-red">专业青年组</p>
          <p>第一名获得奖金 2000美金，以及获奖证书</p>
          <p>第二名获得奖金 500 美金，以及获奖证书</p>
          <p>第三名获得奖金 300 美金，以及获奖证书</p>
          <p class="font-red">专业少年组</p>
          <p>第一名获得奖金 600 美金，以及获奖证书</p>
          <p>第二名获得奖金 400 美金，以及获奖证书</p>
          <p>第三名获得奖金 200 美金，以及获奖证书</p>
          <p class="font-red">高师组</p>
          <p>第一名获得奖金 600 美金，以及获奖证书</p>
          <p>第二名获得奖金 400 美金，以及获奖证书</p>
          <p>第三名获得奖金 200 美金，以及获奖证书</p>
          <p class="font-red">室内乐组</p>
          <p>第一名获得奖金 300 美金，以及获奖证书</p>
          <p class="font-red">业余青年组</p>
          <p>第一名获得奖金 300 美金，以及获奖证书</p>
          <p class="font-red">业余少年组</p>
          <p>第一名获得奖金 300 美金，以及获奖证书</p>
          <p class="font-red">业余儿童组</p>
          <p>第一名获得奖金 200 美金，以及获奖证书</p>
          <p class="font-red">四手联弹组</p>
          <p>第一名获得奖金 200 美金，以及获奖证书</p>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <p class="font-red">2.音乐会合约</p>
          <p>
            专业少年组或专业青年组的第一名，经评委会讨论，将获得与艺术节组委会及中国区合作公司签约3-5场中国独奏音乐会，1-2场意大利独奏音乐会，1场亚太国家地区独奏音乐会。共计约5-8场独奏音乐会。评委会保留最终决定权及解释权。
          </p>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <p class="font-red">3.其他国际比赛直接晋级</p>
          <p>专业少年组和青年组第一名获奖者将直接晋级以下比赛的决赛：</p>
          <p>第29届IBLA国际音乐比赛（西西里岛，意大利，2022）</p>
          <p>第三届MTNA－CHINA钢琴比赛（广州，中国，2022）</p>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <p class="font-red">4. 高额奖学金</p>
          <p>意大利第四届科雷诺国际音乐节 （Recanati, 意大利，2022）</p>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <p class="font-red">5. 推荐信</p>
          <p>
            获奖学生将得到由评委会教授出具的未来参加国际钢琴比赛或申请国内外大学的推荐信
          </p>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <p class="font-red">6. 职业规划会议</p>
          <p>
            获奖学生将安排与一场与评委会主席及教授成员对未来职业规划的会议。
          </p>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "DivisionChina",
};
</script>

<style scoped>
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
/*banner图*/
.bannerWrap {
  position: relative;
}

.homeBanner {
  text-align: center;
}

.homeBannerImg {
  width: 100%;
}

.applyFeeTitle {
  padding: 5px 10px;
}

.imgWrap img {
  width: 70%;
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

.payTable {
  margin: 0 auto;
}

.payImg img {
  width: 50%;
}

.feeTable {
  margin: 0 auto;
}

.imgWrap {
  margin-top: 10px;
}

.titleWrap {
  padding: 10px 20px;
}

.titleWrap p {
  font-size: 12px;
  text-align: left;
}

.judgeImg {
  width: 250px;
  border-radius: 5%;
}

.flexBox {
  display: -webkit-flex; /* Safari */
  display: flex;
  flex-wrap: wrap;
}

.box-child {
  display: inline-block;
  width: 25%;
}

.listsWrap {
  background: rgb(255, 39, 39);
  width: 333px;
  margin: 0 auto;
  border-radius: 3px;
  padding: 15px;
  font-size: 30px;
  color: #ffed4f;
}

@media (max-width: 992px) {
  .judgeImg {
    width: 150px;
  }

  .box-child {
    width: 50%;
  }
}
</style>
