<script setup>
import { themeColor } from "../../data/items";
const heading = "Pricing";
const subHeading = "Pricing for everyone. Choose your plan now!";
const startButtonName = "Get Started";
const packages = [
  {
    name: "Free",
    price: "0",
  },
  {
    name: "Standard",
    price: "19.99",
  },
  {
    name: "Premium",
    price: "79.99",
  },
];
</script>

<template>
  <div class="untree_co-section bg-light" id="pricing-section">
    <div class="container">
      <div class="row pricing-title">
        <div class="col-12 text-center" data-aos="fade-up" data-aos-delay="0">
          <h2 class="heading">{{ heading }}</h2>
          <p>{{ subHeading }}</p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="row">
            <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div class="pricing">
                <div class="body">
                  <div class="price">
                    <span class="d-block plan">{{ packages[0].name }}</span>
                    <span class="price" :style="[{ color: themeColor }]"
                      ><sup>$</sup><span>{{ packages[0].price }}</span></span
                    >
                  </div>
                  <ul class="list-unstyled ul-check primary mb-5">
                    <li>There live the blind texts</li>
                    <li>Far far away behind the word</li>
                    <li>Far from the countries Vokalia and Consonantia</li>
                  </ul>
                  <p class="text-center mb-0">
                    <a
                      href="#"
                      class="btn btn-outline-primary"
                      :style="[
                        { color: themeColor },
                        { borderColor: themeColor },
                      ]"
                      >{{ startButtonName }}</a
                    >
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div class="pricing active">
                <div class="body">
                  <div class="price">
                    <span class="d-block plan">{{ packages[1].name }}</span>
                    <span class="price" :style="[{ color: themeColor }]"
                      ><sup>$</sup><span>{{ packages[1].price }}</span></span
                    >
                  </div>
                  <ul class="list-unstyled ul-check primary mb-5">
                    <li>There live the blind texts</li>
                    <li>Far far away behind the word</li>
                    <li>Far from the countries Vokalia and Consonantia</li>
                  </ul>
                  <p class="text-center mb-0">
                    <a
                      href="#"
                      class="btn btn-primary"
                      :style="[
                        { backgroundColor: themeColor },
                        { borderColor: themeColor },
                      ]"
                      >{{ startButtonName }}</a
                    >
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4" data-aos="fade-up" data-aos-delay="300">
              <div class="pricing">
                <div class="body">
                  <div class="price">
                    <span class="d-block plan">{{ packages[2].name }}</span>
                    <span class="price" :style="[{ color: themeColor }]"
                      ><sup>$</sup><span>{{ packages[2].price }}</span></span
                    >
                  </div>
                  <ul class="list-unstyled ul-check primary mb-5">
                    <li>There live the blind texts</li>
                    <li>Far far away behind the word</li>
                    <li>Far from the countries Vokalia and Consonantia</li>
                  </ul>
                  <p class="text-center mb-0">
                    <a
                      href="#"
                      class="btn btn-outline-primary"
                      :style="[
                        { color: themeColor },
                        { borderColor: themeColor },
                      ]"
                      >{{ startButtonName }}</a
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pricing {
  position: relative;
  padding: 20px;
  border: 2px solid #ffffff;
  border-radius: 10px;
  transition: all 0.3s ease; /* Animasi perubahan */
}

.pricing:hover {
  border-color: hsl(240, 100%, 50%); /* Warna border berubah saat hover */
  transform: translateY(-10px); /* Efek terangkat */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); /* Bayangan muncul saat hover */
}


.pricing .body {
  text-align: center;
}

.price {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.ul-check {
  margin-top: 1rem;
}

.btn {
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}

.btn-outline-primary:hover {
  background-color: hsl(240, 100%, 50%) !important;
  color: white !important;
  border-color: hsl(240, 100%, 50%) !important;
}

.btn-primary:hover {
  background-color: hsl(240, 80%, 40%) !important;
  color: white !;
  border-color: hsl(240, 80%, 40%);
}

</style>
