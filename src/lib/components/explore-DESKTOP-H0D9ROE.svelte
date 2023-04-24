<script lang="ts">
  import { site } from '$lib/config/site'
  import Landing from '$lib/components/landing.svelte'
</script>

<div class="flex flex-col flex-nowrap justify-center xl:flex-row xl:flex-wrap">
  <Landing />
  <div class="h-full">
    <!--<section class="">
      <div class="container mx-auto pt-10">
        <div class="flex md:flex-row flex-col items-center rounded-lg bg-white w-full">
          <div class=" md:w-3/5 w-full p-14 pt-5 pr-14">
            <a
              href="/"
              style="font-family: 'Poppins', sans-serif;"
              class="text-start text-sm font-semibold tracking-wider text-[#3F9378] leading-6 uppercase">
              Exploration station
            </a>
            <h1 style="font-family: 'Poppins', sans-serif;" class="font-bold text-4xl leading-10 text-[#2E3855] mt-5">
              Green power from
              <br />
              non-recyclable waste
            </h1>
            <p
              style=" font-family: 'Public Sans', sans-serif;"
              class="text-[#2E3855] text-start text-sm font-normal tracking-wider leading-6 mt-5">
              Power-from-waste technology can convert non-recyclable waste into a myriad of different outputs, including
              electricity, heating, cooling, and biochar, among others
            </p>

            <button
              type="button"
              style=" font-family: 'Public Sans', sans-serif;"
              class="flex justify-center items-center mt-5 text-white bg-[#EC8B5A] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-semibold rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
              <img class="mr-3" src="/assets/arrow-right-circle.png" alt="" />
              Explore the possibilities
            </button>
          </div>
          <div class="bg-[#E7F5F5] md:w-2/5 w-full flex justify-center">
            <img class="w-full" src="/assets/Frame 19.png" alt="" />
          </div>
        </div>
      </div>
    </section>-->

    <!-- ===================after landing page =================== -->
    <section class="bg-white mt-5 container mx-auto p-10" style="font-family: 'Poppins', sans-serif;">
      <div class=" grid gap-4 md:grid-cols-5 grid-cols-2 w-full">
        <div
          class="p-3 relative bg-[#DDF3EA] rounded-lg leading-6 text-[#2E3855] mb-0 text-start font-bold text-xl tracking-wider after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent">
          <div class="flex justify-center h-32"><img src="/assets/pet bottle 1.png" alt="" /></div>
          <div class="w-2/4">Plastic waste</div>
        </div>
        <div
          class="p-3 relative bg-[#DDF3EA] rounded-lg leading-6 text-[#2E3855] mb-0 text-start font-bold text-xl tracking-wider after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent">
          <div class="flex justify-center h-32"><img src="/assets/Group 7 (2).png" alt="" /></div>
          <div class="w-2/4">Food waste</div>
        </div>
        <div
          class="p-3 relative bg-[#DDF3EA] rounded-lg leading-6 text-[#2E3855] mb-0 text-start font-bold text-xl tracking-wider after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent">
          <div class="flex justify-center h-32"><img src="/assets/Group 7 (3).png" alt="" /></div>
          <div class="w-2/4">Animal waste</div>
        </div>
        <div
          class="p-3 relative bg-[#DDF3EA] rounded-lg leading-6 text-[#2E3855] mb-0 text-start font-bold text-xl tracking-wider after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent">
          <div class="flex justify-center h-32"><img src="/assets/Group 7.png" alt="" /></div>
          <div class="w-2/4">Agricultural waste</div>
        </div>
        <div
          class="p-3 relative bg-[#DDF3EA] rounded-lg leading-6 text-[#2E3855] mb-0 text-start font-bold text-xl tracking-wider after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent">
          <div class="flex justify-center h-32"><img src="/assets/Group 7 (1).png" alt="" /></div>
          <div class="w-2/4">Wood waste</div>
        </div>
      </div>
      <div class="flex w-full pt-5">
        <div
          class="arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-center after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent" />
        <div
          class="arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-center after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent" />
        <div
          class="arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-end after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent font-semibold text-base tracking-wider uppercase">
          Power from
        </div>
        <div
          class="arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-start after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent font-semibold text-base pl-1 tracking-wider uppercase">
          waste technology
        </div>
        <div
          class="arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-center after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent" />
        <div
          class="arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-center after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent" />
      </div>
      <div class=" grid gap-4 grid-cols-6 w-full">
        <div
          class="arrow arrow-bottom relative bg-[#DDF3EA] leading-10 text-[#2E3855] text-center rounded-lg font-bold text-xl">
          Liquid fertiliser
        </div>
        <div
          class="arrow arrow-bottom relative bg-[#DDF3EA] leading-10 text-[#2E3855] text-center rounded-lg rounded-lg font-bold text-xl">
          Solid digestate
        </div>
        <div
          class="arrow arrow-bottom relative bg-[#DDF3EA] rounded-lg leading-10 text-[#2E3855] mb-0 text-center rounded-lg font-bold text-xl after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent">
          Biogas
        </div>
        <div
          class="arrow arrow-bottom relative bg-[#DDF3EA] rounded-lg leading-10 text-[#2E3855] mb-0 text-center rounded-lg font-bold text-xl after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent">
          Syngas
        </div>
        <div
          class="arrow arrow-bottom relative bg-[#DDF3EA] rounded-lg leading-10 text-[#2E3855] text-center rounded-lg font-bold text-xl">
          Bio-oil
        </div>
        <div
          class="arrow arrow-bottom relative bg-[#DDF3EA] rounded-lg leading-10 text-[#2E3855] text-center rounded-lg font-bold text-xl">
          Biochar
        </div>
      </div>
      <div class="flex justify-center mt-10">
        <div
          class="arrow arrow-bottom relative w-1/3 bg-gradient-to-r from-[#FF5252] to-[#59AFFF] rounded-lg rounded-lg font-bold text-xl leading-10 text-[#2E3855] mb-0 text-center after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[gradient-to-r from-[#FF5252] to-[#59AFFF]] after:border-r-transparent after:border-l-transparent">
          Heat / Cool
        </div>
      </div>
      <div class="flex justify-center mt-10">
        <div
          class="arrow arrow-bottom relative w-1/3 bg-[#D0E6F2] rounded-lg leading-10 text-[#2E3855] mb-0 rounded-lg font-bold text-xl text-center">
          Electricity
        </div>
      </div>
    </section>

    <img class="transition-shadow z-10 w-full h-full" src="/assets/field.png" alt="" />

    <section class="">
      <div class="container mx-auto pt-10">
        <div class="flex md:flex-row flex-col items-center rounded-lg bg-white w-full">
          <div class="bg-[#E7F5F5] md:w-2/5 w-full flex justify-center">
            <img class="w-full" src="/assets/Frame 19 (1).png" alt="" />
          </div>

          <div class=" md:w-3/5 w-full p-14 pt-5 pr-14">
            <a
              href="/"
              style="font-family: 'Poppins', sans-serif;"
              class="text-start text-sm font-semibold tracking-wider text-[#3F9378] leading-6 uppercase">
              Exploration station
            </a>
            <h1 style="font-family: 'Poppins', sans-serif;" class="font-bold text-4xl leading-10 text-[#2E3855] mt-5">
              Interact with our exploration <br />
              station to learn more
            </h1>
            <p
              style=" font-family: 'Public Sans', sans-serif;"
              class="text-[#2E3855] text-start text-base font-normal tracking-wider leading-6 mt-5">
              Whether you’re a business owner, facility manager, community leader or just interested in sustainable energy
              solutions, our exploration station has something for you
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================after landing page =================== -->

    <section class="">
      <div class="container mx-auto pt-10">
        <div class="flex md:flex-row flex-col items-center rounded-lg bg-white w-full">
          <div class="bg-white md:w-2/5 w-full flex flex-col">
            <div class="absolute left-[40%]">
              <button
                type="button"
                style=" font-family: 'Public Sans', sans-serif;"
                class="flex items-center justify-center mt-5 text-[#2E3855] bg-white font-semibold rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 mb-2">
                <img class="mr-3" src="/assets/x-circle.png" alt="" />
              </button>
            </div>
            <div class="p-5">
              <div class="flex justify-between items-center w-full">
                <div class="w-2/5"><img class="w-full" src="/assets/Frame 21 (1).png" alt="" /></div>
                <div class="w-1/2">
                  <h1 style="font-family: 'Poppins', sans-serif;" class="mt-0 font-bold text-3xl leading-10 text-[#2E3855]">
                    Cow manure
                  </h1>
                  <p style=" font-family: 'Public Sans', sans-serif;" class="flex items-center text-[#2E3855] text-lg">
                    <span class="font-bold text-xl">GCV:</span>
                    17.57 MJ/kg
                    <img class="ml-5" src="/assets/Frame 15.png" alt="" />
                  </p>
                  <p style=" font-family: 'Public Sans', sans-serif;" class=" text-[#2E3855] text-lg">
                    <span class="font-bold text-xl">Energy content:</span>
                    High
                  </p>
                </div>
              </div>

              <div class="flex">
                <button
                  type="button"
                  style=" font-family: 'Public Sans', sans-serif;"
                  class="flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2">
                  <img class="mr-3" src="/assets/bar-chart.png" alt="" />
                  High organic content
                </button>
                <button
                  type="button"
                  style=" font-family: 'Public Sans', sans-serif;"
                  class="flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2">
                  <img class="mr-3" src="/assets/bar-chart.png" alt="" />
                  High nutrient content
                </button>
              </div>
              <div class="flex justify-start">
                <button
                  type="button"
                  style=" font-family: 'Public Sans', sans-serif;"
                  class="flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2">
                  <img class="mr-3" src="/assets/bar-chart.png" alt="" />
                  High nitrogen content
                </button>
                <button
                  type="button"
                  style=" font-family: 'Public Sans', sans-serif;"
                  class="flex items-center justify-center mt-5 text-[#2E3855] bg-[#D9F5E4] font-semibold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2">
                  <img class="mr-3" src="/assets/bar-chart (1).png" alt="" />
                  Low pH levels
                </button>
              </div>
              <div class="flex justify-start items-center mt-5">
                <img class="mr-3" src="/assets/book-open.png" alt="" />
                <h1 style="font-family: 'Poppins', sans-serif;" class="mt-0 font-bold text-xl leading-10 text-[#2E3855]">
                  Case study
                </h1>
                <img class="ml-5" src="/assets/Frame 15.png" alt="" />
              </div>

              <div style=" font-family: 'Public Sans', sans-serif;" class="mt-5">
                <h2 class="mb-2 text-lg font-light text-[#2E3855]">600 dairy cows or 3500 tonnes of cow manure per year</h2>
                <ul class="max-w-md space-y-1 text-lg font-semibold text-[#2E3855] list-disc list-inside">
                  <li>Produces 656m³ biogas every day</li>
                  <li>Ability to power 187 UK households every day</li>
                </ul>
              </div>
            </div>
            <div class="bg-[#2E3855]">
              <div class="flex flex-col p-5">
                <div class="flex">
                  <div><img src="/assets/Ellipse 3.png" alt="" /></div>
                  <div class="ml-5">
                    <h1 style="font-family: 'Poppins', sans-serif;" class="mt-0 font-bold text-lg leading-10 text-white">
                      Most appropriate technology
                    </h1>
                    <p style=" font-family: 'Public Sans', sans-serif;" class="text-white text-base mt-1 tracking-wider">
                      Anaerobic Digestion
                    </p>
                  </div>
                </div>

                <div class="flex">
                  <button
                    type="button"
                    style=" font-family: 'Public Sans', sans-serif;"
                    class="flex justify-center items-center mt-5 text-white bg-[#EC8B5A] font-semibold rounded-lg text-base px-10 py-2.5 text-center inline-flex items-center mr-2 mb-2">
                    <img class="mr-3" src="/assets/arrow-right-circle.png" alt="" />
                    Start your project
                  </button>
                  <button
                    type="button"
                    style=" font-family: 'Public Sans', sans-serif;"
                    class="flex justify-center items-center mt-5 text-white bg-[#2E3855] border border-1 border-white font-semibold rounded-lg text-base px-8 py-2.5 text-center inline-flex items-center mr-2 mb-2">
                    <img class="mr-3" src="/assets/arrow-right-circle.png" alt="" />
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class=" p-0 md:w-3/5 w-full h-screen bg-cover bg-center bg-no-repeat bg-[url(./frame13.png)] bg-fixed">
            <div class="w-full" />
            <!-- <img class="w-full" src="/assets/Frame 13.png" alt=""> -->
          </div>
        </div>
      </div>
    </section>

    <section class="">
      <div class="container mx-auto pt-10">
        <div class="flex md:flex-row flex-col items-center rounded-lg bg-white w-full">
          <div class="bg-[#E7F5F5] md:w-2/5 w-full flex justify-center">
            <img class="w-full" src="/assets/cow 1.png" alt="" />
          </div>

          <div class=" md:w-3/5 w-full p-14 pt-5 pr-14">
            <a
              href="/"
              style="font-family: 'Poppins', sans-serif;"
              class="text-start text-sm font-semibold tracking-wider text-[#3F9378] leading-6 uppercase">
              the PFP calculator
            </a>
            <h1
              style="font-family: 'Poppins', sans-serif;"
              class="font-bold tracking-wider text-4xl leading-10 text-[#2E3855] mt-5">
              Find the right technology <br />
              for your needs
            </h1>
            <p
              style=" font-family: 'Public Sans', sans-serif;"
              class="text-[#2E3855] text-start text-base font-normal tracking-wider leading-6 mt-5">
              We will assist you every step of the way to ensure a smooth and successful implementation of your power-from-waste
              project
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================after landing page =================== -->
    <section>
      <div class="container mx-auto mt-5 rounded-xl bg-white p-10">
        <div class="text-center">
          <h1
            style="font-family: 'Poppins', sans-serif;"
            class="font-bold tracking-wider text-4xl leading-10 text-[#2E3855] mt-5">
            The PFP Calculator
          </h1>
          <p
            style=" font-family: 'Public Sans', sans-serif;"
            class="text-[#2E3855] md:w-1/2 w-full mx-auto text-base font-normal tracking-wider leading-6 mt-5">
            Our user-friendly calculator is designed to evaluate your project's feasibility, relevant technology and energy
            output
          </p>
        </div>
        <div
          style="font-family: 'Poppins', sans-serif;"
          class="flex md:flex-row flex-col items-center rounded-lg bg-white w-full mt-5">
          <div class="bg-[#E7F5F5] md:w-1/3 w-full flex justify-center rounded-xl">
            <img class="w-full" src="/assets/cow 1 (1).png" alt="" />
          </div>

          <div class=" md:w-2/3 w-full pl-14 pr-14 md:mt-0 mt-5">
            <div class="inline-flex rounded-xl shadow-sm w-full" role="group">
              <button
                type="button"
                class="w-1/2 inline-flex items-center px-4 py-2 text-base font-bold text-white bg-[#2E3855] border border-gray-900 rounded-l-xl hover:bg-gray-900 hover:text-white">
                Waste type
              </button>
              <div
                class="button dropdown w-1/2 flex justify-between flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-base font-semibold text-center text-[#2E3855] bg-[#E7F5F5] rounded-r-xl hover:bg-gray-200 border-0">
                <select id="colorselector" class="w-full bg-transparent text-center border-0">
                  <option class="bg-[#E7F5F5]" value="red">PE Plastic</option>
                  <option class="bg-[#E7F5F5]" value="yellow">Yellow</option>
                  <option class="bg-[#E7F5F5]" value="blue">Blue</option>
                </select>
              </div>
            </div>
            <div class="inline-flex rounded-xl shadow-sm w-full mt-5" role="group">
              <button
                type="button"
                class="w-1/2 inline-flex items-center px-4 py-2 text-base font-bold text-white bg-[#2E3855] border border-gray-900 rounded-l-xl hover:bg-gray-900 hover:text-white">
                Tonnes per year
              </button>

              <div
                class="button dropdown w-1/2 flex justify-between flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-base font-semibold text-center text-[#2E3855] bg-[#E7F5F5] rounded-r-xl hover:bg-gray-200 border-0">
                <select class="w-full bg-transparent text-center focus-0 after:border-0 before:border-0 after:border-[#E7F5F5]">
                  <option class="bg-[#E7F5F5]" value="red">10,000 tonnes</option>
                  <option class="bg-[#E7F5F5]" value="yellow">Yellow</option>
                  <option class="bg-[#E7F5F5]" value="blue">Blue</option>
                </select>
              </div>
            </div>
            <div class="inline-flex rounded-xl shadow-sm w-full mt-5" role="group">
              <button
                type="button"
                class="w-1/2 inline-flex items-center px-4 py-2 text-base font-bold text-white bg-[#2E3855] border border-gray-900 rounded-l-xl hover:bg-gray-900 hover:text-white">
                Client needs
              </button>

              <div
                class="button dropdown w-1/2 flex justify-between flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-base font-semibold text-center text-[#2E3855] bg-[#E7F5F5] rounded-r-xl hover:bg-gray-200 border-0">
                <select id="colorselector" class="w-full bg-transparent text-center">
                  <option class="bg-[#E7F5F5]" value="Electricity">Electricity</option>
                  <option class="bg-[#E7F5F5]" value="yellow">Heating / Cooling</option>
                  <option class="bg-[#E7F5F5]" value="blue">Carbon credits</option>
                  <option class="bg-[#E7F5F5]" value="blue">Fertiliser</option>
                </select>
              </div>
            </div>
            <div />
          </div>
        </div>
        <div class="flex md:justify-end md:w-3/4 justify-center w-full">
          <button
            type="button"
            style=" font-family: 'Public Sans', sans-serif;"
            class=" mt-5 text-white bg-[#EC8B5A] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-semibold rounded-lg text-base px-12 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
            <i class="fas fa-calculator mr-5" />
            Calculate
          </button>
        </div>
      </div>
    </section>

    <section class="mt-5">
      <div class="container mx-auto bg-white p-5 rounded-lg">
        <div>
          <h1
            style="font-family: 'Poppins', sans-serif;"
            class="font-bold text-center tracking-wider text-4xl leading-10 text-[#2E3855] mt-5">
            The PFP Calculator
          </h1>
        </div>
        <div class="flex md:flex-row flex-col items-center bg-[#E7F5F5] rounded-xl py-5 mt-10">
          <div class="md:w-2/5 w-full flex justify-center mx-auto">
            <img class="md:w-3/5 w-full" src="/assets/Group14.png" alt="" />
          </div>

          <div class="md:w-3/5 w-full flex flex-col text-start px-20">
            <h1
              style="font-family: 'Poppins', sans-serif;"
              class="font-bold tracking-wider text-4xl text-start leading-10 text-[#2E3855] mt-5">
              Your project is feasible
            </h1>

            <p
              style=" font-family: 'Public Sans', sans-serif;"
              class="text-[#2E3855] text-start text-base font-normal tracking-wider leading-6 mt-5">
              Review your results to explore the different possibilities and book a slot with us for personalised guidance on
              next steps
            </p>
            <div>
              <button
                type="button"
                style=" font-family: 'Public Sans', sans-serif;"
                class="flex justify-center items-center mt-5 text-white bg-[#EC8B5A] font-semibold rounded-lg text-base px-10 py-2.5 text-center inline-flex items-center mr-2 mb-2">
                <img class="mr-3" src="/assets/arrow-right-circle.png" alt="" />
                Book a call with us
              </button>
              <button
                type="button"
                style=" font-family: 'Public Sans', sans-serif;"
                class="flex justify-center items-center mt-5 text-[#2E3855] bg-white border border-1 border-[#2E3855] font-semibold rounded-lg text-base px-8 py-2.5 text-center inline-flex items-center mr-2 mb-2">
                <img class="mr-3" src="/assets/arrow-right-circle (1).png" alt="" />
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class=" container mx-auto bg-white pb-10">
      <div class="flex md:flex-row flex-col items-center p-5">
        <div class="md:w-1/5 w-full flex-col justify-center mx-auto" style="font-family: 'Poppins', sans-serif;">
          <div class="bg-[#E7F5F5] rounded-lg text-center py-5 p-10 text-[#2E3855]">
            <p class="uppercase text-sm font-semibold">Waste type</p>
            <h2 class="text-lg font-bold">PE Plastic 10,000 tonnes</h2>
          </div>
          <div class="bg-[#2E3855] rounded-lg flex flex-col justify-center mt-5 py-5 p-10">
            <div class="mx-auto">
              <img src="/assets/Frame 21.png" alt="" />
            </div>
            <div class="text-center text-white">
              <h3 class="font-semibold text-sm uppercase mt-3">Most appropriate technology</h3>
              <h2 class="font-bold text-lg">Pyrolysis</h2>
            </div>
          </div>
        </div>
        <div class="md:w-4/5 w-full flex-col justify-center mx-auto md:pl-10 pl-0 md:mt-0 mt-5">
          <div class="flex justify-center">
            <div
              style="font-family: 'Poppins', sans-serif;"
              class="flex justify-center items-center p-4 relative w-1/2 bg-[#2E3855] rounded-l-lg font-bold text-xl leading-10 text-white mb-5 text-center after:absolute after:-right-2 after:top-[40%] after:content[''] after:block after:border-solid after:border-l-8 after:border-b-8 after:border-t-8 after:border-t-transparent after:border-b-transparent after:border-l-[#2E3855] z-20
                            tracking-wider text-[#2E3855]">
              Energy content <img class="ml-5" src="/assets/info.png" alt="" />
            </div>
            <div
              class="absolute p-4 relative w-1/2 rounded-r-lg tracking-wider bg-[#E7F5F5] font-bold text-xl leading-10 text-[#2E3855] mb-5 text-center">
              18-25MJ/kg
            </div>
          </div>
          <div class="flex justify-center">
            <div
              style="font-family: 'Poppins', sans-serif;"
              class="flex justify-center items-center p-4 relative w-1/2 bg-[#2E3855] rounded-l-lg font-bold text-xl leading-10 text-white mb-5 text-center after:absolute after:-right-2 after:top-[40%] after:content[''] after:block after:border-solid after:border-l-8 after:border-b-8 after:border-t-8 after:border-t-transparent after:border-b-transparent after:border-l-[#2E3855] z-20
                            tracking-wider text-[#2E3855]">
              Energy content <img class="ml-5" src="/assets/info.png" alt="" />
            </div>
            <div
              class="absolute p-4 relative w-1/2 rounded-r-lg tracking-wider bg-[#E7F5F5] font-bold text-xl leading-10 text-[#2E3855] mb-5 text-center">
              18-25MJ/kg
            </div>
          </div>
          <div class="flex justify-center">
            <div
              style="font-family: 'Poppins', sans-serif;"
              class="flex justify-center items-center p-4 relative w-1/2 bg-[#2E3855] rounded-l-lg font-bold text-xl leading-10 text-white mb-5 text-center after:absolute after:-right-2 after:top-[40%] after:content[''] after:block after:border-solid after:border-l-8 after:border-b-8 after:border-t-8 after:border-t-transparent after:border-b-transparent after:border-l-[#2E3855] z-20
                            tracking-wider text-[#2E3855]">
              Energy content <img class="ml-5" src="/assets/info.png" alt="" />
            </div>
            <div
              class="absolute p-4 relative w-1/2 rounded-r-lg tracking-wider bg-[#E7F5F5] font-bold text-xl leading-10 text-[#2E3855] mb-5 text-center">
              18-25MJ/kg
            </div>
          </div>
          <div class="flex justify-center">
            <div
              style="font-family: 'Poppins', sans-serif;"
              class="flex justify-center items-center p-4 relative w-1/2 bg-[#2E3855] rounded-l-lg font-bold text-xl leading-10 text-white text-center after:absolute after:-right-2 after:top-[40%] after:content[''] after:block after:border-solid after:border-l-8 after:border-b-8 after:border-t-8 after:border-t-transparent after:border-b-transparent after:border-l-[#2E3855] z-20
                            tracking-wider text-[#2E3855]">
              Energy content <img class="ml-5" src="/assets/info.png" alt="" />
            </div>
            <div
              class="absolute p-4 relative w-1/2 rounded-r-lg tracking-wider bg-[#E7F5F5] font-bold text-xl leading-10 text-[#2E3855] text-center">
              18-25MJ/kg
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <!-- <br /> -->
</div>
