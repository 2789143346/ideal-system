<template>
    <div class="nine">
        <p class="nineTop">
            <span @click="goBack()">＜</span>
        </p>
        <scroll>
            <div class="wrap" v-if="nine">
                <p class="dramTitle">梦想值多少钱？9.9元圆宝宝一个明星梦</p>
                <p class="dramdata">蔷薇艺术中心&nbsp;&nbsp;&nbsp;2018-06-14</p>
                <div class="guanzhu">
                    <img class="leftImg" src="@/../static/img/zzz.png" alt="">
                    <div>
                        <p>蔷薇艺术学校</p>
                        <p>艺术改变生活</p>
                    </div>
                    <p :class="nine.status?'guanzhuBtn2':'guanzhuBtn'" @click="changestatus()">{{nine.status?'已关注':'关注'}}</p>
                </div>
                <p class="priceInfo">本次砍价的底价为9.9元，课程分为少儿模特和舞蹈，二选一，包含暑假课程，赠送暑假之前的课程</p>
                <div class="link">
                    <p class="linkTit">微砍价拼团</p>
                    <p>9.9元给孩子一个当明星的机会</p>
                    <img src="@/../static/img/3_03.png" alt="">
                    <p class="linksmall">小程序</p>
                </div>
                <div class="join">
                    <p>点击参与抢购</p>
                    <img src="@/../static/img/3_07.png" alt="">
                    <p>添加客服微信</p>
                </div>
                <div class="course" v-for="(item,index) in nine.studyList" :key="index">
                    <p class="courseInfo">{{item.studyTitle}}</p>
                    <ul class="imgList">
                        <li v-for="(subitem,subindex) in item.imgList" :key="subindex">
                            <img :src="subitem" alt="">
                        </li>
                    </ul>
                    <p class="smallInfo" v-if="item.studyInfo">
                        {{item.studyInfo}}
                    </p>
                    <p class="detailTit">课程简介</p>
                    <div class="courseDetail">
                        <p>{{item.introduce.text}}</p>
                        <img v-for="(subitem,subindex) in item.introduce.imgs" :key="subindex" :src="subitem" alt="">
                    </div>
                    <p class="detailTit">培训目的</p>
                    <ul class="purpose">
                        <li v-for="(subitem,subindex) in item.purpose" :key="subindex">{{subitem}}</li>
                    </ul>
                    <p class="detailTit">招生条件</p>
                    <div class="admissions">
                        <p class="object">招生对象：{{item.admissions.object}}</p>
                        <p class="content" v-if="item.admissions.content">{{item.admissions.content}}</p>
                        <ul class="conditions" v-if="item.admissions.conditions">
                            <li v-for="(subitem,subindex) in item.admissions.conditions" :key="subindex">{{subitem}}</li>
                        </ul>
                    </div>
                </div>
                <div class="school">
                    <p class="schoolTit">《蔷薇艺术学校简介》</p>
                    <p class="schoolInfo"><span>蔷薇艺术学校</span>是一所具有现代理念的专业艺术培训机构，学校位于山东省临沂市经济开发区路与沃尔沃路交汇东500米路北(长安小学对过)。</p>
                    <img src="@/../static/img/1_03.png" alt="">
                    <p class="schoolInfo"><span>教学理念：</span>倡导：“快乐，健康，科学”的教学理念，使孩子获得优美的体态，高雅的气质，提高自信心和表现力，在快乐的学习中真正做到孩子身心的全面培养</p>
                    <p class="schoolInfo"><span>开设课程：</span>舞蹈，少儿模特</p>
                    <p class="schoolInfo"><span>报名条件：</span>学习进步，品质优良，学习能力强的艺术爱好者均可报名</p>
                    <p class="schoolInfo"><span>微信电话：</span>18660914666</p>
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
                </div>
                <p class="orangeTit">招生条件</p>
                <ul class="timelist">
                    <li>周六</li>
                    <li>周日</li>
                    <li>暑假</li>
                </ul>
                <p class="whatTime">常年招生，随叫随学</p>
                <div></div>
            </div>
        </scroll>
    </div>
</template>
<script>
import scroll from "@/components/scroll/scroll"
export default {
    data(){
        return {
            nine:null
        }
    },
    methods: {
        changestatus(){
            this.nine.status=!this.nine.status
            console.log(JSON.parse(localStorage.getItem("status")))
            localStorage.setItem("status",JSON.stringify({"res":this.nine.status}))
        },
        goBack(){
            this.$router.go(-1)
        }
    },
    components:{
        scroll
    },
    created () {
        this.$axios.post("http://localhost:8800/nine").then(res=>{
            console.log(res)
            this.nine=res.data.nine
            this.nine.status=JSON.parse(localStorage.getItem("status")).res || false
        })
    }
}
</script>
<style lang="stylus" scoped>
    *
        margin 0
        padding 0
        list-style none
    .nine
        width 100%
        .nineTop
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
            .wrap  
                width 100%
                padding 0 30px
                padding-bottom 40px
                .dramTitle
                    font-size 40px
                    line-height 60px
                .dramdata
                    margin-top 42px
                    margin-bottom 90px
                    font-size 25px
                    color #aeaeae
                .guanzhu
                    width 624px
                    height 200px
                    margin 0 auto
                    border-radius 20px
                    box-shadow 0 0 10px #ccc
                    display flex
                    align-items center
                    justify-content space-around
                    .leftImg
                        width 120px
                    div
                        height 120px
                        p:nth-child(1)
                            font-size 30px
                        p:nth-child(2)
                            font-size 22px
                            color #7c7c7c
                    .guanzhuBtn
                        width 120px
                        height 60px
                        line-height 60px
                        color #fff
                        background #ade4a3
                        border 1px solid #6dbb41
                        font-size 32px
                        text-align center
                        border-radius 10px
                    .guanzhuBtn2
                        width 120px
                        height 60px
                        line-height 60px
                        color #fff
                        background #6dbb41
                        border 1px solid #ade4a3
                        font-size 32px
                        text-align center
                        border-radius 10px
                .priceInfo
                    font-size 34px
                    font-weight bold
                    line-height 50px
                    margin-top 20px
                .link
                    height 700px
                    width 100%
                    border 1px solid
                    .linkTit
                        height 70px
                        line-height 70px
                        font-size 23px
                        color #777777
                        margin-left 22px
                    p:nth-child(2)
                        font-size 27px
                        font-weight bold
                        margin-bottom 30px
                        margin-left 22px
                    img 
                        display block
                        width 640px
                        height 480px
                        margin 0 auto
                    .linksmall
                        border-top 1px solid
                        margin-top 24px
                        font-size 28px
                        line-height 56px
                        box-sizing border-box
                        padding-left 24px
                .join
                    text-align center
                    p
                        height 120px
                        line-height 120px
                        font-size 30px
                        font-weight bold
                    img
                        width 410px
                        height 410px
                .course
                    margin-top 20px
                    .courseInfo
                        width 66%
                        margin 0 auto
                        height 54px
                        line-height 54px
                        font-size 44px
                        background #f16600
                        color #fff
                        text-align center
                    .imgList
                        margin-top 24px
                        li
                            width 100%
                            img 
                                width 100%
                    .smallInfo
                        text-align center
                        line-height 60px
                        font-size 30px
                    .detailTit
                        width 132px
                        background #f16600
                        color #fff
                        font-size 30px
                        margin-top 10px
                        text-align center
                    .courseDetail
                        line-height 50px
                        font-size 28px
                        margin-top 26px
                        img
                            margin-top 20px
                            width 100%
                    .purpose
                        margin-bottom 30px
                        li
                            line-height 60px
                            font-size 30px
                    .admissions
                        margin-top 30px
                        .object
                            font-size 28px
                        .content
                            font-size 28px
                        .conditions
                            margin-top 30px
                            li
                                line-height 60px
                                font-size 28px
                .school
                    margin-top 30px
                    width 100%
                    .schoolTit
                        margin 0 auto 
                        width 500px
                        text-align center
                        height 54px
                        line-height 54px
                        font-size 44px
                        background #f16600
                        color #fff
                        margin-bottom 20px
                    .schoolInfo
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
                .orangeTit
                    width 132px
                    background #f16600
                    color #fff
                    font-size 30px
                    margin-top 40px
                    text-align center
                .timelist
                    li
                        line-height 60px
                        font-size 28px
                        color #f16600
                        font-weight bold
                .whatTime
                    margin-top 20px
                    height 44px
                    width 380px
                    text-align center
                    font-size 40px
                    line-height 44px
                    color #ffffff
                    background #f16600
</style>





