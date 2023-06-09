<script lang="ts">
  import { site } from '$lib/config/site'
</script>

<div class="flex flex-col flex-nowrap justify-center xl:flex-row xl:flex-wrap">
  <style>
    div > img {
      /* width: 40%; */
      height: 300px;
      object-fit: contain;
    }
  </style>
  <div class="w-4/6 pt-10">
    <div class="flex rounded-3xl overflow-hidden mt-20">
      <div class="w-4/6 p-10 pr-36 bg-white flex flex-col justify-between">
        <h2 class="card-title text-3xl">Non-recycled waste; control your costs, power and & sustainability credentials</h2>
        <p class="pt-10">Start your journey towards grid independence and a sustainable future</p>
        <div class="flex">
          <a
            class="mt-10 w-60 p-4 hover:bg-pfp-green bg-pfp-orange rounded-lg flex justify-center items-center text-white tracking-wider"
            href="/explore">
            <img class="mr-3" src="/assets/arrow-right-circle.png" alt="" />
            <span>Get started</span>
          </a>
          <a
            class="ml-10 mt-10 w-60 p-4 hover:bg-pfp-green bg-pfp-navy rounded-lg flex justify-center items-center text-white tracking-wider"
            href="/explore">
            <img class="mr-3" src="/assets/arrow-right-circle.png" alt="" />
            <span>Learn more</span>
          </a>
        </div>
      </div>
      <div class="w-2/6 p-12 pr-30 bg-white">
        <img src="/assets/medres/Non-recyclable waste box.png" alt="" />
      </div>
    </div>
  </div>

  <div class="w-4/6">
    <div class="flex rounded-3xl overflow-hidden mt-20">
      <div class="w-full pr-30 bg-transparent justify-center text-center">
        <h2 class="text-3xl card-title justify-center">Business Essentials</h2>
        <p class="pt-10">A one-stop-site for all things power-from-waste</p>
      </div>
    </div>
  </div>

  <div class="w-4/6">
    <div class="flex rounded-3xl overflow-hidden mt-20">
      <div class="w-4/6 p-10 pr-36 bg-white flex flex-col justify-between">
        <h2 class="card-title text-3xl">Save costs on your energy bills and waste management - achieve grid independence</h2>

        <a
          class="mt-10 w-60 p-4 hover:bg-pfp-green bg-pfp-orange rounded-lg flex justify-center items-center text-white tracking-wider"
          href="/explore/#calculator">
          <img class="mr-3" src="/assets/arrow-right-circle.png" alt="" />
          <span>Save money now</span>
        </a>
      </div>
      <div class="w-2/6 p-16 pr-30 pb-8 bg-white">
        <img src="/assets/medres/Save costs box.png" alt="" />
      </div>
    </div>
  </div>

  <div class="w-4/6">
    <div class="flex rounded-3xl overflow-hidden mt-20">
      <div class="w-1/2 rounded-3xl p-10 mr-0 bg-white flex flex-col justify-between">
        <h2 class="card-title text-3xl">The best suited technology for you, right here</h2>
        <div class="flex flex-row">
          <div class="container flex flex-col justify-between">
            <div class="content pt-10">
              Our tool can automatically assess the potential of your waste stream and match it to a specific technology.
            </div>
            <div class="button-container">
              <div class="bottom-0 flex flex-row justify-between">
                <a
                  class="mt-52 mr-20 w-60 p-4 hover:bg-pfp-green bg-pfp-orange rounded-lg flex justify-center items-center text-white tracking-wider"
                  href="/explore/#calculator">
                  <img class="mr-3" src="/assets/arrow-right-circle.png" alt="" />
                  <span>Discover technology matching</span>
                </a>
                <img
                  src="/assets/medres/best suited technology box.png"
                  alt=""
                  style="margin-bottom:-40px; margin-top:80px;"
                  class="h-60" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-1/2 rounded-3xl p-10 ml-20 bg-white flex flex-col justify-between">
        <h2 class="card-title text-3xl">Minimise your environmental footprint/damage</h2>
        <div class="flex flex-row">
          <div class="container flex flex-col justify-between">
            <div class="content pt-10">&nbsp;</div>
            <div class="button-container">
              <div class="bottom-0 flex flex-row justify-between">
                <a
                  class="mt-52 mr-20 w-60 h-14 p-4 hover:bg-pfp-green bg-pfp-orange rounded-lg flex justify-center items-center text-white tracking-wider"
                  href="/explore/#map">
                  <img class="mr-3" src="/assets/arrow-right-circle.png" alt="" />
                  <span>Go green</span>
                </a>
                <img
                  src="/assets/medres/Minimise your environmental footprint.png"
                  alt=""
                  style="margin-bottom:-40px;"
                  class="h-72" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="w-4/6">
    <div class="flex rounded-3xl overflow-hidden mt-20">
      <div class="w-4/6 p-10 pr-36 bg-white flex flex-col justify-between">
        <h2 class="card-title text-3xl">Learn about Power-from-Waste as a renewable</h2>
        <p class="pt-10">Discover how your business s can help you tap into the potential of power-from-waste technology</p>
        <a
          class="mt-10 w-60 p-4 hover:bg-pfp-green bg-pfp-orange rounded-lg flex justify-center items-center text-white tracking-wider"
          href="/explore">
          <img class="mr-3" src="/assets/arrow-right-circle.png" alt="" />
          <span>Learn more</span>
        </a>
      </div>
      <div class="w-2/6 p-12 pr-30 bg-white">
        <img src="/assets/medres/Learn about Power-from-Waste as a renewable box.png" alt="" />
      </div>
    </div>
  </div>

  <div class="w-4/6">
    <div class="flex rounded-3xl overflow-hidden mt-20">
      <div class="w-full pr-30 bg-transparent justify-center text-center">
        <h2 class="text-3xl card-title justify-center">Payback returns from just 18 months</h2>
        <p class="pt-10">Select the right technology and start your project with just a few taps</p>
      </div>
    </div>
  </div>

  <div class="w-4/6">
    <div class="flex rounded-3xl overflow-hidden mt-20">
      <div class="w-4/6 p-10 pr-36 bg-white flex flex-col justify-between">
        <h2 class="card-title text-3xl">Discover how much energy you can produce</h2>
        <a
          class="mt-10 w-96 p-4 hover:bg-pfp-green bg-pfp-orange rounded-lg flex justify-center items-center text-white tracking-wider"
          href="/explore">
          <img class="mr-3" src="/assets/arrow-right-circle.png" alt="" />
          <span>Explore our interactive/dynamic tools</span>
        </a>
      </div>
      <div class="w-2/6 p-12 pr-30 bg-white">
        <img src="/assets/medres/Investing in green energy box.png" alt="" />
      </div>
    </div>
  </div>
</div>
