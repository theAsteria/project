<template>
    <div class="All">
      <div class="blurred-wrapper">
        <header class="main-header container">
          <a href="index.html" class="logo">SAO</a>
        </header>
        <section class="hero container">
          <div class="content-wrapper">
            <h5 class="tagline">Welcome to my website</h5>
            <h1 class="title">
              It's my childhood fantasy
            </h1>
            <p class="message">
              Though simple, I still want to show you my world
            </p>
            <router-link to="/Introduce" class="btn cta">Learn more</router-link>
          </div>
          <div class="box fade-in">
            And what`s world do you love?
          </div>
        </section>
      </div>
    </div>
</template>

<script>
export default {
name:'WebHome',
}
</script>

<style scoped>
.All{
  width: 100%;
  user-select: none;
}
.box{
  position: absolute;
  right: 5%;
  top: 35%;
  width: 1000px;
  height: 400px;
  line-height: 400px;
  border-radius:10px;
  box-shadow: rgba(0,0,0,0.3) 0px 10px 30px -10px;
  text-align: center;
  font-size: 20px;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
.fade-in{
  animation: fadeIn 2s ease-in-out;
}
@keyframes fadeIn {
  0%{
    opacity: 0;
    transform: translateY(50px);
  }
  100%{
    opacity: 1;
    transform: translateY(0);
  }
}

html {
  font-size: 62.5%;

}

body {
  font-size: 1.6rem;
  font-family: sans-serif;
  color: #fff;
}

a {
  text-decoration: none;
  display: inline-block;
}

.blurred-wrapper {
  height: 91.7vh;
  background: url(../assets/Ain.png) center/cover;
  position: relative;
  z-index: 1;
  overflow: hidden;
  animation: hue 10s infinite alternate;
}

.blurred-wrapper::after {
  content: "";
  width: 100%;
  height: 100%;
  background: inherit;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  filter: blur(2rem);
  transform: scale(1.15);
}

@keyframes hue {
  from {
    filter: hue-rotate(0);
  }
  to {
    filter: hue-rotate(360deg);
  }
}

.main-header {
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.container {
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.logo {
  color: #fff;
  text-transform: uppercase;
  font-size: 2.5rem;
  font-weight: bold;
  text-shadow: 0px 0px 1px rgba(255,255,255,.6),
  0px 4px 4px rgba(0,0,0,0.5);
  letter-spacing: .2rem;
  color: transparent;
  font-family: Georgia, 'Times New Roman', Times, serif;
  
}

.btn {
  padding: 1rem 2.5rem;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 2.5rem;
  color: #fff;
}

.hero {
  display: flex;
  align-items: center;
  height: calc(100vh - 12rem);
}

.content-wrapper {
  max-width: 40rem;
  transform: translateY(-4rem);
}

.tagline {
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 100;
  margin-bottom: 1rem;
  font-family: Georgia, 'Times New Roman', Times, serif;

}

.title {
  font-size: 3rem;
  margin-bottom: 2rem;
  font-family: Georgia, 'Times New Roman', Times, serif;

}

.message {
  font-size: 1.4rem;
  margin-bottom: 3rem;
  font-family: Georgia, 'Times New Roman', Times, serif;

}

.cta {
  background-color: #000;
  font-family: Georgia, 'Times New Roman', Times, serif;

}

@media screen and (min-width: 768px) {
  .btn {
    padding: 1.5rem 3rem;
  }
  .content-wrapper {
    max-width: 60rem;
  }
  .tagline {
    font-size: 1.6rem;
  }
  .title {
    font-size: 6rem;
  }
  .message {
    font-size: 2rem;
  }
}
</style>