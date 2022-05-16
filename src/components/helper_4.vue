<template>
    <div class="helper">
         <div class="title">使用帮助-单词与搭配</div>
         <img src="../assets/word_help.gif" alt="" srcset="">
         <p class="weight">A. 音标</p>
         <p>查询词的音标、发音。</p>
         <p class="weight">B. 解释</p>
         <p>查询词的词性、中文翻译。</p>
         <p class="weight">C. 词形变化</p>
        <p>查询词的词形词性变化。</p>
        <p class="weight">D. 常见搭配</p>
        <p>查询词的前后常见的搭配词，词语越靠前，说明用的人越多，越地道。</p>
        <p class="weight">E. 例句提交</p>
        <p>抢注属于你自己的例句，您提交的例句，句酷会索引到库中，供大家来查询。例句的来源就是您自己，可以链接到您自己的网站、博客等。例句的质量越高，说明您的翻译水平越高。</p>
    </div>
</template>
<script setup>

</script>
<style lang="less">
.helper {
        .title{
            // background-color: #ccc;
            height: 50px;
            line-height: 50px;
            font-size: 18px;
        }
        p {
            font-size: 16px;
            line-height: 150%;
            text-indent: 15px;
        }
        .weight{
            font-weight: 800;
        }
    }
</style>