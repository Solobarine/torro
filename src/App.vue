<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue'
</script>

<template>
  <section id="container">
    <Header/>
    <RouterView />
    <Footer/>
  </section>
</template>

<style>
  #container {
    padding-top: 64px;
    display: grid;
    min-height: 100vh;
    grid-template-rows: auto 2fr auto;
    overflow: hidden;
  }

  #container > section > section:nth-child(2) {
    padding-left: 80px;
  }

  .menu_icon {
        fill: var(--primary);
        stroke-width: 1px;
    }
    
  .submit {
    background-color: var(--primary);
    width: 100%;
    color: var(--text);
    padding: 15px;
    font-size: 1rem;
    border-radius: 10px;
    border: 1px solid var(--gray);
    cursor: pointer;
  }

  .submit:hover {
    color: var(--black)
  }

  .st0 {
    fill: none;
    stroke: var(--primary);
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-miterlimit: 10;
    }
</style>