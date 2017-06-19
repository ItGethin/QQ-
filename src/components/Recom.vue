<template>
    <div class='content'>
        <div class='slider'>
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for='src in data.slider'>
                    <img :src='src.picUrl' alt="" />
                </mt-swipe-item>
            </mt-swipe>
        </div>

        <div class='mod-list'>
            <h2>电台</h2>
            <ul class='list'>
                <li v-for='item in data.radioList'>
                    <img :src='item.picUrl'>
                    <h3>{{item.Ftitle}}</h3>
                    <span></span>
                </li>
            </ul>
        </div>

        <div class='mod-list list-special'>
            <h2>热门歌单</h2>
            <ul class='list'>
                <li v-for='item in data.songList'>
                    <img :src='item.picUrl'>
                    <span></span>
                    <em>
                        <i></i>
                        {{count(item.accessnum)}}万
                    </em>

                    <div class='list-info'>
                        <h4>{{item.songListDesc}}</h4>
                        <p>{{item.songListAuthor}}</p>
                    </div>   
                </li>
            </ul>
        </div>

        <p>去客户端发现更多好音乐 ></p>


        <div class='footer'>
            <div class='version-tab'><a href='javascript:void(0);'>查看电脑版网页</a></div>
            <div class='footer-logo'>QQ音乐</div>
            <p class='copyright'>Copyright © 1998 - 2016  Tencent. All Rights Reserved. </p>
            <p>联系电话：0755-86013388 QQ群：55209235 </p>
        </div>
    </div>                            
</template>

<script>

import '../css/reset.css'


export default {
    data() {
        return {
            msg:'推荐', 
            data:''
        }
    },
    methods:{
        getData() {
            // var url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';
            this.$http.get('../../src/static/data/music.json').then( (res) => {
                // console.log(res.body.data);
                this.data = res.body.data;
            }, (err) => {})
        },
        count(a) {
            return parseFloat(a/10000).toFixed(1);
        }
    },
    mounted() {
        this.getData();
    }
}
</script>

<style scope>
    @import '../css/Recom.css'
</style>

