<template>
    <footer>
        <section class="footer-top">
            <div class="container">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="info">
                        <img src="../assets/image/logo.PNG" alt="Logo Footer">
                        <p>A Functional HTML Template for Corporate & Business.</p>
                        <div class="d-flex align-items-center" v-for="(card, index) in store.info">
                            <div class="box-item d-flex align-items-center justify-content-center">
                                <i :class="card.item"></i>
                            </div>
                            <p class="m-0">{{card.text}}</p>
                        </div>
                        <button class="text-uppercase">Get in touch</button>
                    </div>
                    <div v-for="(item, index) in store.footer" class="my-card">
                        <h3>{{item.title}}</h3>
                        <ul>
                            <li v-for="(listItem, index) in item.list">{{ listItem }}</li>
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
    .footer-top{
        padding: 100px 0px;
        background-color: #111117;
        .my-card, .info{
            width: calc((100% / 4) - 30px);
            border: 1px solid red;
        }
        .my-card{
            background-color: #19191f;
        }
    }
    .footer-bottom{
        background-color: #0d0d11;
        p{
            margin: 0;
            padding: 30px 0px;
        }
    }
</style>