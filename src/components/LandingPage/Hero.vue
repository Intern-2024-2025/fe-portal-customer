<script setup>
import mainPhoto from "../../assets/images/hero.svg";
import { themeColor } from "../../data/items";

const heroHeading = "Anthena";
const buttonSeeFeature = "See Features";
const buttonPricing = "Pricing";
</script>

<template>
  <div class="untree_co-hero" id="home-section">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12">
          <!-- <div class="dots"></div> -->
          <div class="row align-items-center">
            <div
              class="col-lg-7 ml-auto order-lg-2"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <img :src="mainPhoto" alt="Image" class="img-fluid" />
            </div>
            <div class="col-lg-5">
              <h1 class="heading" data-aos="fade-up" data-aos-delay="0">
                {{ heroHeading }}
                <h2>Key Management System</h2>
              </h1>
              <div class="excerpt" data-aos="fade-up" data-aos-delay="100">
                <p>
                  Flexible and user friendly software-based key management
                  system with hardware-based root of trust and protection. Run
                  on a wide range of Intel based servers with enabled Intel®
                  Software Guard Extensions (Intel SGX). Designed to support
                  high-performance real time applications. Implement
                  state-of-the-art international standard cryptographic
                  algorithms. Separation of concerns between Cryptographic
                  Services, Key Management Service and Audit Log Service,either
                  logically or physically. Business applications get
                  cryptographic services by using SDK or REST API
                </p>
              </div>
              <p data-aos="fade-up" data-aos-delay="200">
                <a
                  href="#features-section"
                  class="btn btn-primary smoothscroll"
                  style="margin-right: 5px"
                  :style="[
                    { background: themeColor },
                    { borderColor: themeColor },
                  ]"
                  >{{ buttonSeeFeature }}</a
                >
                <a
                  href="#pricing-section"
                  class="btn btn-outline-primary smoothscroll pricing"
                  :style="[{ color: themeColor }, { borderColor: themeColor }]"
                  >{{ buttonPricing }}</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pricing:hover {
  color: #fff !important;
}
</style>
