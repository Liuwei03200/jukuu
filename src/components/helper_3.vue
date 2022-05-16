<template>
    <div class="helper">
         <div class="title">使用帮助-例句与用法</div>
         <img src="../assets/sent_help.gif" alt="" srcset="">
         <p class="weight">A. 查询词例句</p>
         <p>查询词的例句。第一行为英文。</p>
         <p class="weight">B. 例句的翻译</p>
         <p>与查询词例句对应的翻译。</p>
         <p class="weight">C. 例句来源</p>
        <p>每一对例句下方都会注明来源。许多为用户直接提交，点击可以了解该用户的详细信息。</p>
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