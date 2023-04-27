<template>
    <header>
        <div class="container d-flex justify-content-between align-items-center py-3">
            <div>
                <p><i class="fas fa-clock"></i>Open Hours: Mon - Sat - 9:00 - 18:00</p>
            </div>
            <div class="d-flex justify-content-between align-items-center">
                <p><i class="fas fa-phone-alt"></i>+1 (305) 1234-5678</p>
                <p><i class="fas fa-envelope"></i>hello@example.com</p>
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-linkedin-in"></i>
            </div>
        </div>
    </header>
    <section>
        <div class="container d-flex justify-content-between align-items-center">
            <div class="box-image">
                <img src="../assets/image/logo.PNG" alt="Logo">
            </div>
            <ul class="d-flex m-0">
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Results</a></li>
            </ul>
        </div>
        <div class="jumbo d-flex flex-column align-items-center justify-content-center">
            <img src="../assets/image/bg-parallax.png" alt="Jumbo"> 
            <h2>Ready <span class="p-2">Team</span></h2>
            <p>No matter what your company needs, we will be ready to assist you in the best possibile way.</p>
            <div class="d-flex justify-content-center">
                <button class="btn text-uppercase">Get in touch</button>
                <button class="btn text-uppercase">Read more</button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'HeaderComponent'
}
</script>

<style lang="scss" scoped>
    header{
        background-color: #0d1b24;
        color: #fff;
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
        width: 200px;
        img{
            width: 100%;
        }
    }
    .jumbo{
        width: 100%;
        height: 600px;
        text-align: center;
        position: relative;
        img{
            width: 100%;
            height: 100%;
            position: absolute;
        }
        h2{
            color: #606d75;
            font-size: 2.3rem;
        }
        span{
            color: #00a6a6;
            background-color: #d9f2f2;
        }
        p{
            color: #c0c0c0;
        }
    }
</style>