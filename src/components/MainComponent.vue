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
                        <img :src="'/images/'+card.icon" alt="">
                        <i class="fas fa-arrow-right"></i>
                    </div>
                    <h3>{{card.name}}</h3>
                    <p>{{card.par}}</p>
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
                        <h3>{{item.title}}</h3>
                        <p>{{item.par}}</p>
                    </div>
                </div>
            </div>
            <div class="box-right">
                <img src="../assets/image/about-4.jpg" alt="Company">
            </div>
        </div>
    </section>
    <section class="projects">
        <div class="container">
            <h4 class="text-uppercase text-center">We do more for everyone</h4>
            <h2 class="text-center">Action & <span>Projects</span></h2>
            <ul class="text-uppercase d-flex justify-content-between">
                <li><a href="#">All</a></li>
                <li><a href="#">Institutional</a></li>
                <li><a href="#">Social</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Innovation</a></li>
                <li><a href="#">Enviroment</a></li>
                <li><a href="#">Technology</a></li>
            </ul>
            <div class="d-flex justify-content-between flex-wrap">
                <div class="my-card" v-for="(card, index) in store.projects">
                    <img :src="'/images/'+card.image" alt="">
                    <p>{{card.text}}</p>
                </div>
            </div>
        </div>
    </section>
    <section class="results">
        <div class="results-top">
            <div class="container">
                <h4 class="text-uppercase text-center">What are we doing</h4>
                <h2 class="text-center"><span>Results</span> in Numbers</h2>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="text-center">
                        <p>128</p>
                        <p>Certifications</p>
                    </div>
                    <div class="text-center">
                        <p>230</p>
                        <p>Employees</p>
                    </div>
                    <div class="text-center">
                        <p>517</p>
                        <p>Customers</p>
                    </div>
                    <div class="text-center">
                        <p>94</p>
                        <p>Countries Served</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="results-bottom">
            <div class="container d-flex justify-content-between align-items-center">
                <div class="box-image" v-for="(image, index) in store.resultsImage">
                    <img class="results-image" :src="'/images/'+image" alt="">
                </div>
            </div>
        </div>
    </section>
    <section class="form">
        <div class="container d-flex justify-content-between">
            <div class="box-left">
                <h4 class="text-uppercase">Send a message</h4>
                <h2>Get in <span>Touch</span></h2>
                <p>We will respond to your message as soon as possibile</p>
                <form>
                    <div class="d-flex justify-content-between">
                        <input type="text" placeholder="Name">
                        <input type="email" placeholder="Email">
                    </div>
                    <div class="d-flex justify-content-between">
                        <input type="number" placeholder="Name">
                        <input type="text" placeholder="More Info">
                    </div>
                    <input class="textarea" type="text" placeholder="Message">
                    <button type="submit" class="text-uppercase">Send</button>
                </form>
            </div>
            <div class="box-right">
                <h3>Example Inc.</h3>
                <p>Lorem ipsum solor sit amet consectetur adipiscing elit.</p>
                <p>Praesent diam lacus, dapibus sed imperdiet consectetur.</p>
                <div class="d-flex align-items-center" v-for="(card, index) in store.info">
                    <div class="box-item d-flex align-items-center justify-content-center">
                        <i :class="card.item"></i>
                    </div>
                    <p class="m-0">{{card.text}}</p>
                </div>
                <button class="text-uppercase">View map</button>
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
    li{
        list-style: none;
        a{
            text-decoration: none;
        }
    }
    .main-service{
        background-color: #eef4ed;
        padding: 100px 0px;
        .my-card{
            padding: 50px;
            width: 32%;
            background-color: #ffffff;
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
    .projects{
        .my-card{
            width: 31%;
            border-radius: 10px;
            position: relative;
            margin-top: 30px;
            overflow: hidden;
            img{
                width: 100%;
                opacity: .7;
            }
            p{
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                color: #fff;
                text-align: center;
                font-size: 1.6rem;
            }
        }
    }
    .results{
        margin: 100px 0px;
        color: #fff;
        .results-top{
            padding: 100px 0px;
            background-image: url('../assets/image/bg-7.jpg');
            h2{
                padding: 20px 0px 80px 0px;
            }
        }
        .results-bottom{
            padding: 100px 0px;
            .box-image{
                width: 100px;
                img{
                    width: 100%;
                    opacity: .4;
                }
            }
        }
    }
    .form{
        .box-left{
            width: 59%;
            input{
                width: 49%;
                padding: 16px;
                border-radius: 5px;
                margin-top: 20px;
                border: none;
                background-color: #ececec;
            }
            .textarea{
                width: 100%;
                padding-bottom: 100px;
            }
            button{
                margin-top: 20px;
            }
        }
        .box-right{
            width: 39%;
            .box-item{
                width: 45px;
                height: 45px;
                border-radius: 50%;
                background-color: #daeced;
            }
        }
    }
    
</style>