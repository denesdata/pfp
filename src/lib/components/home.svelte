<script lang="ts">
  import { site } from '$lib/config/site'
</script>

<div class="w-7/8 flex flex-col flex-nowrap justify-center xl:flex-row xl:flex-wrap">
  <style>
    div > img {
      /* width: 40%; */
      height: 200px;
      margin: 40px 40px 40px 100px;
      object-fit: contain;
    }
    p {
      font-size: 1.2rem;
    }
    #titlevideo1 {
      display: flex;
      height: 400px;
      padding: 30px 50px 50px 50px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      align-self: stretch;
      z-index: 3;
    }
    #titlevideo2 {
      background: linear-gradient(0deg, rgba(46, 56, 85, 0.4) 0%, rgba(46, 56, 85, 0.4) 100%);
      height: 400px;
      display: flex;
      height: 400px;
      padding: 30px 50px 50px 50px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      align-self: stretch;
      z-index: 40;
    }
    #titlevideo1 video {
      height: 200%;
      z-index: 4;
    }
    #titlevideo2 h2 {
      color: var(--white, #fff);
      text-align: center;

      /* Desktop/title XL */
      font-family: Poppins;
      font-size: 44px;
      font-style: normal;
      font-weight: 700;
      line-height: 46px; /* 104.545% */
      letter-spacing: 1.76px;
      z-index: 6;
    }
  </style>
  <div class="w-4/6 mt-20">
    <div class="rounded-3xl overflow-hidden mt-20">
      <div class="w-full p-10 pr-36 bg-white justify-between" id="titlevideo1">
        <video autoplay loop muted>
          <source src="/assets/bg.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="w-full mt-[-400px] p-10 pr-36 bg-white justify-between" id="titlevideo2">
        <h2 class="card-title text-4xl">Non-recycled waste is fuel.</h2>
      </div>
    </div>
  </div>

  <div class="w-4/6 pt-10">
    <div class="flex rounded-3xl overflow-hidden mt-20">
      <div class="w-4/6 p-10 pr-36 bg-white flex flex-col justify-between">
        <h2 class="card-title text-3xl">
          Non-recycled waste is fuel. By using it as such, you can take control of your energy and waste costs, energy supply
          and sustainability credentials
        </h2>
        <p class="pt-10">Start your journey to grid independence and a sustainable future with us today</p>
        <div class="flex">
          <a
            class="mt-10 w-60 p-4 hover:bg-pfp-green bg-pfp-orange rounded-lg flex justify-center items-center text-white tracking-wider"
            href="/explore">
            <img class="mr-3" src="/assets/arrow-right-circle.png" alt="" />
            <span>Get started</span>
          </a>
          <a
            class="ml-10 mt-10 w-60 p-4 hover:bg-pfp-green bg-pfp-navy rounded-lg flex justify-center items-center text-white tracking-wider"
            href="/green-energy/new-renewable/">
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
        <p class="pt-10">This platform</p>
        <h2 class="text-3xl card-title justify-center">
          <br />
          A one stop shop for your power from non-recycled waste journey. Here, you can ...
        </h2>
      </div>
    </div>
  </div>

  <div class="w-4/6">
    <div class="flex rounded-3xl overflow-hidden mt-20">
      <div class="w-4/6 p-10 pr-36 bg-white flex flex-col justify-between">
        <h2 class="card-title text-3xl">
          Achieve grid independence - with the best suited technology from our global database of suppliers
        </h2>
        <p class="pt-10">
          Using our extensive database of technologies, we can match you with the most suitable option for your specific needs
          and requirements
        </p>
        <a
          class="mt-10 w-60 p-4 hover:bg-pfp-green bg-pfp-orange rounded-lg flex justify-center items-center text-white tracking-wider"
          href="/explore">
          <img class="mr-3" src="/assets/arrow-right-circle.png" alt="" />
          <span>Act now</span>
        </a>
      </div>
      <div class="w-2/6 p-16 pr-30 pb-8 bg-white">
        <img src="/assets/Calque_2.png" alt="" class="h-44" />
      </div>
    </div>
  </div>

  <div class="w-4/6">
    <div class="flex rounded-3xl overflow-hidden mt-20">
      <div class="w-1/2 rounded-3xl p-10 mr-0 bg-white flex flex-col justify-between">
        <h2 class="card-title text-3xl">Control supply</h2>
        <div class="flex flex-row">
          <div class="container flex flex-col justify-between">
            <p class="content pt-10">
              By harnessing the power of non-recycled waste, our platform provides a secure and reliable energy source, giving
              you peace of mind knowing that you'll never run out of power.
            </p>
            <div class="button-container">
              <div class="bottom-0 flex flex-row justify-between">
                <a
                  class="mt-52 mr-20 w-60 h-14 p-4 hover:bg-pfp-green bg-pfp-orange rounded-lg flex justify-center items-center text-white tracking-wider"
                  href="/explore">
                  <img class="mr-3" src="/assets/arrow-right-circle.png" alt="" />
                  <span>Take control</span>
                </a>
                <img
                  src="/assets/Calque_1.png"
                  alt=""
                  style="margin-bottom:0px; margin-top:80px; margin-left: 0px; margin-right: 20px;"
                  class="h-48" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-1/2 rounded-3xl p-10 ml-20 bg-white flex flex-col justify-between">
        <h2 class="card-title text-3xl">Save costs on your energy bills and waste management</h2>
        <div class="flex flex-row">
          <div class="container flex flex-col justify-between">
            <p class="content pt-10">
              Our tool can automatically assess the potential of your non-recycled waste stream and match it to a specific
              technology
            </p>
            <div class="button-container">
              <div class="bottom-0 flex flex-row justify-between">
                <a
                  class="mt-52 mr-20 w-60 h-14 p-4 hover:bg-pfp-green bg-pfp-orange rounded-lg flex justify-center items-center text-white tracking-wider"
                  href="/explore">
                  <img class="mr-3" src="/assets/arrow-right-circle.png" alt="" />
                  <span>Save money now</span>
                </a>
                <img
                  src="/assets/Calque_3.png"
                  alt=""
                  style="margin-bottom:0px; margin-top:80px; margin-left: 0px; margin-right: 30px;"
                  class="h-48" />
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
        <h2 class="card-title text-3xl">Control your environmental footprint</h2>
        <p class="pt-10">
          Power from waste technology is not only clean and renewable, but also helps reduce waste in landfills and reduces
          greenhouse gas emissions. We help create circular, on site sustainable solutions and supply chains
        </p>
        <a
          class="mt-10 w-60 p-4 hover:bg-pfp-green bg-pfp-orange rounded-lg flex justify-center items-center text-white tracking-wider"
          href="/explore">
          <img class="mr-3" src="/assets/arrow-right-circle.png" alt="" />
          <span>Go green</span>
        </a>
      </div>
      <div class="w-2/6 p-12 pr-30 bg-white">
        <img src="/assets/Calque_4.png" alt="" class="h-64" />
      </div>
    </div>
  </div>

  <div class="w-4/6">
    <div class="flex-row rounded-3xl overflow-hidden mt-20">
      <div class="w-full pr-28 bg-transparent justify-center text-center mb-5">
        <h2
          class="text-3xl card-title justify-center"
          style="color: var(--green, #3F9378);
text-align: center;

/* Desktop/subtitle */
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 1.12px;
text-transform: uppercase;">
          start your journey with us
        </h2>
        <!-- <p class="pt-10">Select the right technology and start your project with just a few taps</p> -->
      </div>

      <div class="w-full pr-30 bg-transparent justify-center text-center">
        <h2
          class="text-3xl card-title justify-center"
          style="color: var(--pfp-navy, #2E3855);
text-align: right;

/* Desktop/title L */
font-family: Poppins;
font-size: 34px;
font-style: normal;
font-weight: 700;
line-height: 46px; /* 135.294% */
letter-spacing: 0.68px;width: 700px;">
          Don't settle for second best, find your technology right here on this platform
        </h2>
        <!-- <p class="pt-10">Select the right technology and start your project with just a few taps</p> -->
      </div>
    </div>
  </div>

  <div class="w-4/6">
    <div class="flex rounded-3xl overflow-hidden mt-20">
      <div class="w-4/6 p-10 pr-36 text-white bg-[#3F9378] flex flex-col justify-between">
        <h2 class="card-title text-3xl">
          Our cutting-edge technology matching service on this website helps you find the perfect solution
        </h2>
        <p class="pt-10">Discover how your business can tap into the potential of power-from-waste technology</p>
        <a
          class="mt-10 w-60 p-4 hover:bg-pfp-green bg-pfp-navy rounded-lg flex justify-center items-center text-white tracking-wider"
          href="/explore">
          <img class="mr-3" src="/assets/arrow-right-circle.png" alt="" />
          <span>Explore our tools</span>
        </a>
      </div>
      <div class="w-2/6 p-12 pr-30 bg-[#3F9378]">
        <img src="/assets/Calque_5.png" alt="" class="h-52" />
      </div>
    </div>
  </div>
</div>
