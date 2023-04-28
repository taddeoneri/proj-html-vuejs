<template>
    <header>
        <section class="header-top">
            <div class="container d-flex justify-content-between align-items-center py-3">
                <div class="d-flex justify-content-between align-items-center">
                    <i class="fas fa-clock"></i>
                    <p>Open Hours: Mon - Sat - 9:00 - 18:00</p>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex justify-content-between align-items-center">
                        <i class="fas fa-phone-alt"></i>
                        <p>+1 (305) 1234-5678</p>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                        <i class="fas fa-envelope"></i>
                        <p>hello@example.com</p>
                    </div>
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-linkedin-in"></i>
                </div>
            </div>
        </section>
        <section class="header-bottom">
            <div class="p-2 container d-flex justify-content-between align-items-center">
                <div class="box-image">
                    <img src="../assets/image/logo.PNG" alt="Logo">
                </div>
                <ul class="d-flex align-items-center m-0">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Results</a></li>
                    <li><button class="m-0 text-uppercase">Get in touch</button></li>
                </ul>
            </div>
            <div class="jumbo d-flex flex-column align-items-center justify-content-center">
                <img src="../assets/image/bg-parallax.png" alt="Jumbo">
                <div class="my-container">
                    <h2>Ready <span class="p-2">Team</span></h2>
                    <p>No matter what your company needs, we will be ready to assist you in the best possibile way.</p>
                    <div class="d-flex justify-content-center">
                        <button class="text-uppercase">Get in touch</button>
                        <button class="btn text-uppercase">Read more</button>
                    </div>
                </div> 
            </div>
        </section>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent'
}
</script>

<style lang="scss" scoped>
    button{
        background-color: #058283;
        color: #fff;
        border-radius: 5px;
        padding: 8px 18px;
        font-size: 15px;
        margin: 0px 12px;
        border: none;
    }
    .btn{
        background-color: #fff;
        color: #058283;
        border: 2px solid #058283;
    }
    .header-top{
        background-color: #21333e;
        color: #879197;
        p{
            padding: 0px 35px 0px 10px;
        }
        .fa-twitter, .fa-facebook-f{
            padding-right: 35px;
        }
    }
    p{
        margin: 0;
    }
    li{
        list-style: none;
        padding: 0px 20px;
    }
    a{
        text-decoration: none;
        color: #606d75;
        text-transform: uppercase;
    }
    .box-image{
        width: 140px;
        img{
            width: 100%;
        }
    }
    .header-bottom{
        h2{
            color: #21333e;
            font-weight: 700;
            font-size: 3.3rem;
        }
        span{
            background-color: #d5e7e8;
            color: #058283;
            padding: 6px 12px;
            border-radius: 5px;
        }
        .jumbo{
            width: 100%;
            height: 600px;
            text-align: center;
            position: relative;
            overflow: hidden;
            .my-container{
                width: 400px;
            }
            p{
                padding: 20px 0px 40px 0px;
            }
        img{
            width: 100%;
            position: absolute;
            transform: scale(1.5);
        }
        p{
            color: #c0c0c0;
        }
    }
    }
</style>