<template>
  <div class="dashboard-container">
    <div class="container_content">
      <div class="jianjie">
        <div class="contentbody">
          <div class="wrapper">
            <div class="header wow" >
              <p class="title">集团简介</p>
            </div>
            <div class="description wow">
              <p>全球昌运国际物流集团是一家总部设在中国，为区域和全球客户提供全方位物流解决方案的优秀物流服务供应商，深得客户信赖。</p>
              <p>作为一家面向全球市场，并扎根于中国的物流公司，全球昌运有别于其他的竞争对手，已在全球地区拥有45家自营分支机构、</p>
              <p>于北美城市设有办公室。</p>
              <p>我们更与超过300多家海外代理商建立紧密的合作关系，使我们的服务遍布全球。</p>
              <p>我们的目标是成为世界级的物流服务供应商，成为客户首选的合作伙伴。</p>
            </div>
          </div>

        </div>
        <div class="mediabody wow">
          <img src="https://debfc14.webp.li/2025/01/b670f7e8a338d766438e9ba711b41c5d.jpg" alt="">
        </div>
      </div>
      <div class="zhxfw jianjie">
        <div class="left contentbody">
          <p class="title">综合性服务 General Service</p>
          <p> ● 国际海运 International ocean freight</p>
          <p> ● 国际空运 International air freight</p>
          <p> ● 铁路运输 Railway transportatio</p>
          <p> ● 跨境卡车运输 Cross border road freight</p>
          <p> ● 跨境电商物流 Cross border E-commerce logistics</p>
          <p> ● 综合仓储与配送 Integrated logistic services</p>
          <p> ● 报关报检 Customs entry</p>
          <p> ● 货物保险 Cargo insurance</p>
        </div>
        <div class="right">
          <div>
            <img src="https://debfc14.webp.li/2025/01/0273263158835671baaa9a96d217a3ef.png" alt="">
            <img style="margin-left: 10px;" src="https://debfc14.webp.li/2025/01/5c6cb34977819f6c368c39db9dd0c0ee.png" alt="">
          </div>
          <div style="margin-top: 10px;">
            <img src="https://debfc14.webp.li/2025/01/02be4e1d59e35b3973ff7f60f58d7274.png" alt="">
            <img style="margin-left: 10px;" src="https://debfc14.webp.li/2025/01/f6ef9520d6ed5da4675244695510d294.png" alt="">
          </div>
        </div>
      </div>
      <div class="zhxfw jianjie zhizhi">
        <div class="left contentbody">
          <p class="title">证照与资质 License and Accreditation</p>
          <p> ● Business license</p>
          <p> ● CAAC certificate</p>
          <p> ● Chamber Of Commerce membership</p>
          <p> ● IATA and CASS membership</p>
          <p> ● NVOCC certificate</p>
          <p> ● WCA membership</p>
          <p> ● Certified DG cargo operation</p>
          <p> ● TT Club</p>
          <p> ● AEO certificate</p>
          <p> ● ISO certificate</p>
          <p> ● C-TPAT certificate</p>
          <p> ● Secure Trade Partnership</p>
        </div>
        <div class="right">
          <div>
            <img src="https://debfc14.webp.li/2025/01/16c0707485267f4054088101fa421445.png" alt="">
            <img style="margin-left: 10px;" src="https://debfc14.webp.li/2025/01/5e6fa544e98d878d049700189c2c408c.png" alt="">
          </div>
          <div style="margin-top: 10px;">
            <img src="https://debfc14.webp.li/2025/01/ded59ec5c82bb10e9ce7d83d8b3dfbfb.png" alt="">
            <img style="margin-left: 10px;" src="https://debfc14.webp.li/2025/01/74ec70d948e3ea3a14c86b4646062ba6.png" alt="">
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="img"><img src="https://debfc14.webp.li/2025/01/940b2b00ad8b71d654337db82185ceab.png" alt=""></div>
        <div class="img"><img src="https://debfc14.webp.li/2025/01/490af4f2b3851fcd5a164ff0824c9ac3.png" alt=""></div>
        <div class="img"><img src="https://debfc14.webp.li/2025/01/9f67ff036235ecb849dbffeb8d21fc0a.png" alt=""></div>
        <div class="img"><img src="https://debfc14.webp.li/2025/01/8c212dccccb0e9be50d624264190efa6.png" alt=""></div>
        <div class="img"><img src="https://debfc14.webp.li/2025/01/89ed30a1633e9cf9715d585be7b49a84.png" alt=""></div>
        <div class="img"><img src="https://debfc14.webp.li/2025/01/9b2983cb66cf0fee79d70f392f3ed1e0.png" alt=""></div>
        <div class="img"><img src="https://debfc14.webp.li/2025/01/b22607bfda0e90c79712d3990197ef65.png" alt=""></div>
        <div class="img"><img src="https://debfc14.webp.li/2025/01/f6cf026da21e582f5923d1c1e61550b5.png" alt=""></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard-container {
  
  font-size: 13px;
  color: #999;
  .title {
    font-size: 24px;
    color: #555;
  }
  .zhxfw {
    margin-top: 15px;  
    .left {
      p {
        margin-top: 28px;
      }
    }
    .right {
      img {
        width: 300px;
        height: 160px;
      }
    }
  }
  .zhizhi {
    .left {
      p {
        margin-top: 20px;
      }
    }
  }
  .bottom {
    padding: 0 50px;
    width: 200%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transform: scale(0.5);
    transform-origin: left center;
  }
}
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}

.jianjie {
    display: flex;
    padding: 0 50px;
    align-items: center;
    justify-content: space-between;

    .contentbody {
      padding-right: 100px;
      flex: 1;
    }
    .mediabody {
      width: 400px;
      height: 260px;
    }
  }
</style>
