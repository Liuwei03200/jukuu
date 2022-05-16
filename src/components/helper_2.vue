<template>
    <div class="helper">
         <div class="title">使用帮助-搜索页面</div>
        <p>例句搜索的目的是辅助您翻译出更地道的句子，帮助您随心所欲的写出流利的句子。 您可以在输入框中输入中文短句：<a href="http://www.jukuu.com/search.php?q=%E5%90%9B%E5%AD%90%E4%B9%8B%E4%BA%A4%E6%B7%A1%E5%A6%82%E6%B0%B4"> 君子之交淡如水 </a>、 <a href="http://www.jukuu.com/search.php?q=%E5%A4%9A%E5%A4%9A%E5%85%B3%E7%85%A7"> 多多关照 </a>，系统便可找到与您输入的短句最相近的中-英双语例句。 您只需少量的改动，即可以得到满意的英语翻译句子。如果检索结果中没有令您满意的句子，请您缩短查询的句子或短语，再次进行查询。</p>
        <img src="../assets/search_help.gif" alt="" srcset="">
        <p class="weight">
        A. 输入框
        </p>
        <p>
        输入搜索词，点击搜索按钮或按回车键。
        </p>
        <p class="weight">
        B. 常见例句
        </p>
        <p>
        常用的例句，包括英文例句、中文例句、例句来源
        </p>
        <p class="weight">
        C. 地道搭配
        </p>
        <p>
        单词的常见搭配，该单词前后经常出现的单词，单词越靠前说明两者搭配的使用频率越高，常见搭配涵盖了美国人经常采用的习惯说法,比如：<a href="http://www.jukuu.com/show-handsome+salary-0.html"> handsome salary</a>
        </p>

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