<template>
    <div class="advisor">
        <div class="title">句酷顾问</div>
        <el-card class="box-card" :body-style="{padding:'20px'}" style="margin:0 15px 15px">
           <div class="card">
               <div>
                   <img src="../assets/Eduard.jpeg" alt="" srcset="">
               </div>
               <div class="headtext">
                   <p>Eduard Hovy </p>
                   <p>美国南加州大学教授</p>
                   <p>南加州大学信息科学学院自然语言组主任</p>
                   <p>美国数字政府研究中心主任</p>
                   <p>主要研究方向：自然语言处理、计算语言学、人类语言技术</p>
               </div>
           </div>
        </el-card>
        <el-card class="box-card" :body-style="{padding:'20px'}" style="margin:0 15px 15px">
           <div class="card">
               <div>
                   <img src="../assets/dujiabin.jpeg" alt="" srcset="">
               </div>
               <div class="headtext">
                   <p>杜家滨 </p>
                   <p>前微软中国区总裁</p>
                   <p>前思科亚太区总裁</p>
                   <p>毕业于台湾国立交通大学，曾就职于台湾工业技术研究院，微软(中国)有限公司首任</p>
                   <p>总裁，现任思科系统(中国)网络技术有限公司总裁</p>
               </div>
           </div>
        </el-card>
        <el-card class="box-card" :body-style="{padding:'20px'}" style="margin:0 15px 15px">
           <div class="card">
               <div>
                   <img src="../assets/renfuji.jpeg" alt="" srcset="">
               </div>
               <div class="headtext">
                   <p>任福继  </p>
                   <p>日本德岛大学教授</p>
                   <p>北京邮电大学长江学者</p>
                   <p>北京邮电大学电信工程学院教授，博导，受聘为国家教育部第七批“长江学者奖励计划讲座教授”(中国)有限公司首任</p>
               </div>
           </div>
        </el-card>
        <el-card class="box-card" :body-style="{padding:'20px'}" style="margin:0 15px 15px">
           <div class="card">
               <div>
                   <img src="../assets/zhangwen.jpeg" alt="" srcset="">
               </div>
               <div class="headtext">
                   <p>张文 </p>
                   <p>二外翻译学院院长</p>
                   <p>国际饭店、餐馆及机构膳宿组织教育理事会（I-CHRIE）亚太分会秘书长，泰国国家研究基金、</p>
                   <p>洛克菲勒基金项目中国旅游问题研究负责人。1994年评为“北京市青年骨干教师”。2003年</p>
                   <p>被选举为北京市朝阳区第十三届人大代表。</p>
               </div>
           </div>
        </el-card>
    </div>
</template>
<script setup>

</script>
<style lang="less">
    .advisor {
        .title{
            // background-color: #ccc;
            height: 50px;
            line-height: 50px;
            font-size: 18px;
        }
        .card{
            display: flex;
            p{
                margin: 0px;
            }
            .headtext{
                padding: 0 20px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
            }

        }
    }
</style>