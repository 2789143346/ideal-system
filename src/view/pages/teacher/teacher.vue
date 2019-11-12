<template>
    <div class="teacher">
        <p class="teacherTop">
            <span @click="goBack()">＜</span>师生风采
        </p>
        <scroll>
            <div class="wrap">
                <ul class="imglist">
                    <li>
                        <img src="@/../static/img/2_03.png" alt="">
                        <img src="@/../static/img/2_06.png" alt="">
                    </li>
                    <li class="smallBox">
                        <img src="@/../static/img/2_12.png" alt="">
                        <img src="@/../static/img/2_09.png" alt="">
                    </li>
                    <li>
                        <img src="@/../static/img/2_16.png" alt="">
                        <img src="@/../static/img/2_18.png" alt="">
                        <img src="@/../static/img/2_20.png" alt="">
                    </li>
                    <li class="between">
                        <img src="@/../static/img/2_22.png" alt="">
                        <img src="@/../static/img/2_26.png" alt="">
                    </li>
                    <li class="lastimg">
                        <img src="@/../static/img/2_28.png" alt="">
                    </li>
                </ul>
                <p class="scrollBottom">
                    <img src="@/../static/img/zzz.png" alt="">
                    蔷薇艺术学校
                </p>
            </div>
        </scroll>
    </div>
</template>
<script>
import scroll from "@/components/scroll/scroll"
export default {
    components:{
        scroll
    },
    methods: {
        goBack(){
            this.$router.go(-1)
        }
    }
}
</script>
<style lang="stylus" scoped>
    *
        margin 0
        padding 0
        list-style none
    .teacher
        width 100%
        .teacherTop
            color #fff
            width 100%
            font-size 32px
            line-height 100px
            height 100px
            background #434343
            box-sizing border-box
            padding-left 28px
            span 
                margin-right 32px
        .scroll
            width 100%
            height 1130px
            .imglist
                width 100%
                box-sizing border-box
                padding 0 22px
                li
                    img 
                        margin-top 12px
                .smallBox
                    display flex
                    align-items center
                    justify-content space-between
                .between
                    box-sizing border-box
                    padding 80px 0
                    img:nth-child(1)
                        float left
                    img:nth-child(2)
                        float right
                        margin-bottom 80px
            .scrollBottom
                height 100px
                width 100%
                display flex
                justify-content center
                align-items center
                font-size 32px
                margin-top 10px
                color #a3a3a3
                img 
                    width 50px
                    height 40px
</style>


