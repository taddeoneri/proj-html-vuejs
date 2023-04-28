<template>
    <footer>
        <section class="footer-top">
            <div class="container">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="info">
                        <img src="../assets/image/svg-7.svg" alt="Logo Footer">
                        <p class="m-0 py-4">A Functional HTML Template for Corporate & Business.</p>
                        <div class="pb-2 d-flex align-items-center" v-for="(card, index) in store.info">
                            <div class="box-item d-flex align-items-center justify-content-center">
                                <i :class="card.item"></i>
                            </div>
                            <p class="m-0">{{card.text}}</p>
                        </div>
                        <button class="text-uppercase btn">Get in touch</button>
                    </div>
                    <div v-for="(item, index) in store.footer" class="my-card">
                        <h3>{{item.title}}</h3>
                        <ul class="p-0 m-0">
                            <div v-for="(listItem, index) in item.list" class="d-flex list align-items-center">
                                <i class="fas fa-angle-right"></i>
                                <li>{{listItem}}</li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section class="footer-bottom">
            <div class="container d-flex justify-content-between align-items-center">
                <p>Enjoy the low price. We are tracking any intention of piracy</p>
                <p>2020 NEXGEN is PRoudly Powered by <span>Codings</span></p>
            </div>
        </section>
        
    </footer>
</template>

<script>
import { store } from '../storage/store';
export default {
    name: 'FooterComponent',
    data(){
        return {
            store
        }
    }

}
</script>

<style lang="scss" scoped>
    p, li, i{
        color: #879197;
        list-style: none;
    }
    i{
        padding-right: 10px;
    }
    button:hover{
        opacity: .5;
    }
    .btn:hover{
        border: 2px solid #058283;
        opacity: .8;
    }
    .list{
        padding-bottom: 6px;
    }
    .footer-top{
        padding: 100px 0px;
        background-color: #111117;
        .my-card, .info{
            width: calc((100% / 4) - 30px);
            img{
                width: 140px;
            }
        }
        .my-card{
            background-color: #19191f;
            border-radius: 8px;
            padding: 40px;
            ul .list:first-child{
                padding-top: 13px;
            }
        }
        h3{
            color: #fff;
            margin-bottom: 5px;
        }
        button{
            background-color: #058283;
            color: #fff;
            border-radius: 5px;
            padding: 8px 18px;
            font-size: 15px;
            border: none;
            margin-top: 15px;
        }
        .btn{
            background-color: #111117;
            color: #fff;
            border: 2px solid #058283;
        }
    }
    .footer-bottom{
        background-color: #0d0d11;
        p{
            margin: 0;
            padding: 30px 0px;
        }
        span{
            color: #058283;
        }
    }
</style>