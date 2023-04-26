<template>
    <section class="main-service">
        <div class="container">
            <h4 class="text-uppercase">Out business areas</h4>
            <h2>Excellence in <span>Services</span></h2>
            <div class="d-flex justify-content-between align-items-center">
                <p>We are leaders in providing consultancy services with a set of cutting-edge technologies and a team of experienced and renowned professionals. These are some options that you can hire.</p>
                <button class="btn text-uppercase">See all</button>
            </div>
            <div class="d-flex justify-content-between flex-wrap">
                <div class="my-card" v-for="(card, index) in store.cards">
                    <div class="d-flex justify-content-between">
                        <img src="../assets/image/svg-1.svg" alt="">
                        <i class="fas fa-arrow-right"></i>
                    </div>
                    <h3>{{store.cards[index].name}}</h3>
                    <p>{{store.cards[index].par}}</p>
                </div>
            </div>
        </div>
    </section>
    <section class="company">
        <div class="d-flex align-items-center container">
            <div class="box-left">
                <h4 class="text-uppercase">About the network</h4>
                <h2><span>The</span> Company</h2>
                <p>For 12 years we have been providing audit and warranty, financial advice, eisk advice, taxes and related services to select clients.</p>
                <div class="d-flex justify-content-between flex-wrap">
                    <div class="my-card" v-for="(item, index) in store.company">
                        <h3>{{store.company[index].title}}</h3>
                        <p>{{store.company[index].par}}</p>
                    </div>
                </div>
            </div>
            <div class="box-right">
                <img src="../assets/image/about-4.jpg" alt="Company">
            </div>
        </div>
    </section>
    
</template>

<script>
import { store } from '../storage/store';
export default {
    name: 'MainComponent',
    data(){
        return{
            store
        }
    }
}
</script>

<style lang="scss" scoped>
    .main-service{
        background-color: #eef4ed;
        padding: 100px 0px;
        .my-card{
            padding: 50px;
            width: 32%;
            background-color: #fff;
            border-radius: 10px;
            margin-top: 30px;
        }
        p{
            margin: 0;
        }
        img{
            width: 50px;
        }
        h2{
            padding: 50px 0px 30px 0px;
        }
        h3{
            padding: 15px 0px;
        }
    }
    .box-left, .box-right{
        width: 50%;
    }
    .company{
        color: #fff;
        background-color: #111117;
        .my-card{
            width: 48%;
        }
        .box-left{
            padding-right: 50px;
        }
    }
    
</style>