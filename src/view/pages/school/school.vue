<template>
    <div class="school">
        <p class="schoolTop">
            <span @click="goBack()">＜</span>学校简介
        </p>
        <scroll>
            <div class="wrap" v-if="school">
                <div class="schoolWhere">
                    <p><span>蔷薇艺术学校</span>是一所具有现代理念的专业艺术培训机构，目前下设三个校区</p>
                    <p v-for="(item,index) in school.schoolAddress" :key="index">{{item}}</p>
                </div>
                <div class="bigImg">
                    <img src="@/../static/img/4_03.png" alt="">
                </div>
                <div class="schoolInfo">
                    <p v-for="(item,index) in school.study" :key="index"><span>{{item.name}}</span>{{item.content}}</p>
                </div>
                <div class="imgBox">
                    <ul class="row">
                        <img src="@/../static/img/4_06.png" alt="">
                        <img src="@/../static/img/4_04.png" alt="">
                    </ul>
                    <ul class="col">
                        <img src="@/../static/img/4_10.png" alt="">
                        <img src="@/../static/img/4_19.png" alt="">
                    </ul>
                    <ul class="col2">
                        <img src="@/../static/img/4_13.png" alt="">
                        <img src="@/../static/img/4_16.png" alt="">
                    </ul>
                </div>
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
    data(){
        return {
            school:null
        }
    },
    components:{
        scroll
    },
    methods: {
        goBack(){
            this.$router.go(-1)
        }
    },
    created () {
        this.$axios.post("http://localhost:8800/school").then(res=>{
            console.log(res)
            this.school=res.data.school
        })
    }
}
</script>
<style lang="stylus" scoped>
    .school
        width 100%
        .schoolTop
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
            height 1130px
            .wrap
                width 100%
                box-sizing border-box
                padding 0 22px
                .schoolWhere
                    width 100%
                    p
                        width 100%
                        font-size 27px
                        line-height 50px
                        span
                            font-size 30px
                            font-weight bold
                .bigImg
                    width 100%
                    height 530px
                    img
                        width 100%
                        height 100%
                .schoolInfo
                    width 100%
                    p
                        width 100%
                        font-size 27px
                        line-height 50px
                        span
                            font-size 30px
                            font-weight bold
                .imgBox
                    width 100%
                    display flex
                    flex-wrap wrap
                    .row
                        display flex
                        img:nth-child(1)
                            width 440px
                        img 
                            margin 10px
                    .col
                        display flex
                        flex-direction column
                        width 45%
                        img:nth-child(2)
                            width 200px
                            margin-left 110px
                        img 
                            margin 10px
                    .col2
                        display flex
                        flex-direction column
                        width 55%
                        img:nth-child(1)
                            width 340px
                        img 
                            margin 10px
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