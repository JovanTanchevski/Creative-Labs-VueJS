<script setup>
import './assets/main.css';
import Navbar from './components/Navbar/Navbar.vue';
import HeroSection from './components/HeroSection/HeroSection.vue';
import OfferSection from './components/OfferSection/OfferSection.vue';
import ContactUsSection from './components/ContactUsSection/ContactUsSection.vue';
import JoinOurTeamSection from './components/JoinOurTeamSection/JoinOurTeamSection.vue';
import ContactSection from './components/ContactSection/ContactSection.vue';
import Footer from './components/Footer/Footer.vue';
</script>

<template>
  <fragment>
    <Navbar />
    <main class="flex flex-col gap-6">
      <HeroSection />
      <OfferSection />
      <ContactUsSection />
      <JoinOurTeamSection />
      <ContactSection />
    </main>
    <Footer />
  </fragment>
</template>

<style scoped></style>
