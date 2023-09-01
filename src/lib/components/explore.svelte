<script lang="ts">
  import { fly } from 'svelte/transition'
  import { onMount } from 'svelte'
  import tippy from 'tippy.js'
  import 'tippy.js/dist/tippy.css'
  import 'tippy.js/themes/light.css'

  onMount(() => {
    tippy('.map-gcv', {
      theme: 'tomato',
      allowHTML: true,
      content:
        "This is the amount of heat energy that could be released if a certain amount of waste is completely burnt. It's like a measure of the <i>energy potential</i> of waste. A higher GCV means the waste can produce more energy."
    })
    tippy('.map-case-study', {
      theme: 'tomato',
      content: 'Project Reference Biogas Plant: Guichen, France | HoSt'
    })
    tippy('.calc-gcv', {
      theme: 'tomato',
      allowHTML: true,
      content:
        "Energy content is the total amount of energy stored in waste. But instead of just heat energy, it also includes the energy that can be converted into electricity or other forms. It's the total <i>energy resource</i> the waste could provide."
    })
    tippy('.calc-heat-produced', {
      theme: 'tomato',
      content:
        'This is the actual amount of heat energy generated when the waste is processed, like when you burn wood in a fireplace. This heat can be used directly (like to warm buildings) or can be converted into other forms of energy, like electricity.'
    })
    tippy('.calc-heat-savings', {
      theme: 'tomato',
      content:
        "This indicates how much heat energy a company can save by using the heat produced from waste processing, instead of getting it from conventional sources. This is assuming you're currently paying 0.7p/kWh"
    })
    tippy('.calc-electricity-produced', {
      theme: 'tomato',
      allowHTML: true,
      content:
        "This is the amount of electrical energy generated from processing the waste. This could be through burning the waste to generate steam, which drives a turbine to produce electricity, or through other methods. It's like the <i>power output</i> from the waste."
    })
    tippy('.calc-electrical-savings', {
      theme: 'tomato',
      content:
        'This shows how much a company can save on electricity costs by using the electricity produced from waste processing, instead of purchasing it from the grid. This is based off the assumption you are paying 0.35p/kWh'
    })
    tippy('.calc-char', {
      theme: 'tomato',
      content:
        "Char is the solid material that's left over after some waste processing methods, like pyrolysis and gasification. It can sometimes be used as a fuel or soil conditioner. This value shows how much char would be produced from the waste."
    })
  })
</script>

<div style="display:none;">
  <div class="relative">
    <div id="expandElement" class="fixed inset-0 bg-blue-500 text-white flex items-center justify-center">
      <!-- Content goes here -->
    </div>
  </div>

  <button id="expandButton" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Expand</button>

  <style>
    #expandElement {
      display: none;
    }

    .after\:border-solid::after {
      transform: scale(2) translate(-2px, 2px);
    }

    .glow {
      animation: glowing 2s infinite;
    }

    @keyframes glowing {
      0% {
        box-shadow: 0 0 5px #fff;
      }
      50% {
        box-shadow: 0 0 50px #ec8b5a;
      }
      100% {
        box-shadow: 0 0 5px #fff;
      }
    }

    .info-pop {
      cursor: pointer;
    }

    .tippy-box[data-theme~='tomato'] {
      background-color: #e7f5f5;
      color: #2e3855;
      font-size: 1.2rem;
      padding: 5px;
      box-shadow: 8px 0 8px -6px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      font-family: 'Poppins', sans-serif;
    }

    .tippy-box[data-theme~='tomato'][data-placement^='top'] > .tippy-arrow::before {
      border-top-color: #e7f5f5;
    }
    .tippy-box[data-theme~='tomato'][data-placement^='bottom'] > .tippy-arrow::before {
      border-bottom-color: #e7f5f5;
    }
    .tippy-box[data-theme~='tomato'][data-placement^='left'] > .tippy-arrow::before {
      border-left-color: #e7f5f5;
    }
    .tippy-box[data-theme~='tomato'][data-placement^='right'] > .tippy-arrow::before {
      border-right-color: #e7f5f5;
    }
  </style>

  <script>
    const expandElement = document.getElementById('expandElement')
    const expandButton = document.getElementById('expandButton')

    expandButton.addEventListener('click', () => {
      expandElement.style.display = 'block'
      setTimeout(() => {
        expandElement.classList.add('opacity-100')
      }, 0)
    })

    expandElement.addEventListener('click', e => {
      if (e.target === expandElement) {
        expandElement.classList.remove('opacity-100')
        setTimeout(() => {
          expandElement.style.display = 'none'
        }, 300)
      }
    })
  </script>
  <!-- <img src="/assets/field.png" alt="" style="height:100%; position:fixed; top:10px;" /> -->
</div>
<div class="mt-[-2000px] pt-[2000px]" id="map2" />
<div class="mt-[-840px] pt-[840px]" id="calculator2" />
<div class="mt-[-5000px] pt-[5000px]" id="map3" />
<div class="mt-[-3900px] pt-[3900px]" id="calculator3" />
<div class="flex flex-col flex-nowrap justify-center xl:flex-row xl:flex-wrap mt-8">
  <style>
    p {
      font-size: 1.2rem;
    }
  </style>
  <div class="h-full max-w-[1260px]">
    <!-- ===================after landing page =================== -->
    <section class="w-full">
      <div class="flex rounded-2xl overflow-hidden mt-12">
        <div class="w-3/5 p-10 pr-12 bg-white">
          <h2 class="uppercase pb-5 text-pfp-green font-bold">Exploration station</h2>
          <h2 class="text-3xl leading-[33px] font-bold text-[#2e3855] font-Poppins">Green power from non-recycled waste</h2>
          <p class="pt-6">
            Power-from-waste technology can convert non-recycled waste into a myriad of different outputs, including
            electricity, heating, cooling, and biochar, among others
          </p>
          <a
            class="mt-10 w-fit p-4 hover:bg-pfp-green bg-pfp-orange rounded-lg flex justify-center items-center text-white tracking-wider"
            href="/explore/#map">
            <img class="mr-3" src="/assets/arrow-right-circle.png" alt="" />
            <span>Explore the possibilites</span>
          </a>
        </div>
        <div class="w-2/5 p-4 bg-light-green" id="topRightCluster">
          <style>
            #topRightCluster {
              background-image: url('/assets/Group 14.png');
              background-repeat: no-repeat;
              background-position: center;
              background-size: contain;
              padding: 50px;
              background-origin: content-box;
            }
            #topRightCluster img {
              visibility: hidden;
            }
          </style>
          <img
            in:fly={{ x: 100, duration: 300, delay: 500 }}
            out:fly={{ x: -100, duration: 300 }}
            class="absolute top-[30%] h-36 left-[72%] z-0"
            src="/assets/cow 1.png"
            alt="" />
          <img
            in:fly={{ x: -100, duration: 300, delay: 500 }}
            out:fly={{ x: 100, duration: 300 }}
            class="absolute top-[35%] h-40 left-[68%] z-10"
            src="/assets/manure 1.png"
            alt="" />
          <img
            in:fly={{ x: -100, y: -100, duration: 300, delay: 500 }}
            out:fly={{ x: 100, duration: 300 }}
            class="absolute top-[35%] h-28 left-[75%] z-30"
            src="/assets/apple 1.png"
            alt="" />
          <img
            in:fly={{ y: -100, duration: 300, delay: 500 }}
            out:fly={{ x: 100, duration: 300 }}
            class="absolute top-60 h-20 left-200 ml-10 z-0"
            src="/assets/leaf2 1.png"
            alt="" />
          <img
            in:fly={{ x: -100, duration: 300, delay: 500 }}
            out:fly={{ x: 100, duration: 300 }}
            class="absolute top-[35%] h-48 left-[65%] z-30"
            src="/assets/pet bottle 1.png"
            alt="" />
          <img
            in:fly={{ x: 50, duration: 300, delay: 500 }}
            out:fly={{ x: -100, duration: 300 }}
            class="absolute top-[35%] h-48 left-[65%] z-20"
            src="/assets/woodchips 1.png"
            alt="" />
          <img
            in:fly={{ x: -70, duration: 300, delay: 500 }}
            out:fly={{ y: 100, duration: 300 }}
            class="absolute top-96 h-30 left-200 ml-80 z-0"
            src="/assets/leaf1 1.png"
            alt="" />
          <img
            in:fly={{ y: -100, duration: 300, delay: 500 }}
            out:fly={{ x: 100, duration: 300 }}
            class="absolute top-50 h-30 left-200 ml-80 z-0"
            src="/assets/fish 1.png"
            alt="" />
        </div>
      </div>
    </section>
    <section class="mb-10 bg-white mt-8 container mx-auto p-10 rounded-2xl" style="font-family: 'Poppins', sans-serif;">
      <style>
        #thegrid div {
          padding: 10px 0px 10px 10px;
        }
        #thegrid div.flex {
          padding: 20px 10px 20px 10px;
        }
        #thegrid2 div {
          padding: 15px 40px 15px 40px;
          line-height: 1.5;
          vertical-align: middle;
        }
      </style>
      <h2 class="text-3xl font-bold text-[#2e3855] font-Poppins text-center justify-center mb-10">How it works</h2>
      <div class=" grid gap-6 md:grid-cols-5 grid-cols-2 w-full" id="thegrid">
        <div
          class="p-3 relative bg-[#DDF3EA] rounded-2xl leading-6 text-[#2E3855] mb-0 text-start font-bold text-xl tracking-wider after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent">
          <div class="flex justify-center h-32"><img src="/assets/pet bottle 1.png" alt="" /></div>
          <div class="w-2/4">Plastic waste</div>
        </div>
        <div
          class="p-3 relative bg-[#DDF3EA] rounded-2xl leading-6 text-[#2E3855] mb-0 text-start font-bold text-xl tracking-wider after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent">
          <div class="flex justify-center h-40"><img src="/assets/Group 7 (2).png" alt="" /></div>
          <div class="w-2/4">Food waste</div>
        </div>
        <div
          class="p-3 relative bg-[#DDF3EA] rounded-2xl leading-6 text-[#2E3855] mb-0 text-start font-bold text-xl tracking-wider after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent">
          <div class="flex justify-center h-40"><img src="/assets/Group 7 (3).png" alt="" /></div>
          <div class="w-2/4">Animal waste</div>
        </div>
        <div
          class="p-3 relative bg-[#DDF3EA] rounded-2xl leading-6 text-[#2E3855] mb-0 text-start font-bold text-xl tracking-wider after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent">
          <div class="flex justify-center h-40"><img src="/assets/Group 7.png" alt="" /></div>
          <div class="w-2/4">Agricultural waste</div>
        </div>
        <div
          class="p-3 relative bg-[#DDF3EA] rounded-2xl leading-6 text-[#2E3855] mb-0 text-start font-bold text-xl tracking-wider after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent">
          <div class="flex justify-center h-40"><img src="/assets/Group 7 (1).png" alt="" /></div>
          <div class="w-2/4">Wood waste</div>
        </div>
      </div>
      <div class="relative z-10 w-full text-white mb-[-90px] mt-16 text-center font-semibold text-xl tracking-wider uppercase">
        Power from waste technology
      </div>
      <div class="flex w-full mt-10 pt-4 rounded-2xl mb-10 bg-[#2E3855]" style="height:70px;">
        <div
          class="arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-center after:absolute after:-bottom-5 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent" />
        <div
          class="arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-end after:absolute after:-bottom-5 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent font-semibold text-xl tracking-wider uppercase">
          &nbsp;
        </div>
        <div
          class="arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-center after:absolute after:-bottom-5 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent font-semibold text-xl tracking-wider uppercase">
          &nbsp;
        </div>
        <div
          class="arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-center after:absolute after:-bottom-5 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent font-semibold text-xl pl-1 tracking-wider uppercase">
          &nbsp;
        </div>
        <div
          class="arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-start after:absolute after:-bottom-5 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent font-semibold text-xl pl-1 tracking-wider uppercase">
          &nbsp;
        </div>
        <div
          class="arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-center after:absolute after:-bottom-5 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent" />
      </div>
      <div class=" grid gap-6 grid-cols-6 w-full" id="thegrid2">
        <div
          class="flex items-center justify-center arrow arrow-bottom relative bg-[#DDF3EA] leading-10 text-[#2E3855] text-center rounded-2xl font-bold text-xl">
          Liquid fertiliser
        </div>
        <div
          class="flex items-center justify-center arrow arrow-bottom relative bg-[#DDF3EA] leading-10 text-[#2E3855] text-center rounded-2xl font-bold text-xl">
          Solid digestate
        </div>
        <div
          class="flex items-center justify-center arrow arrow-bottom relative bg-[#DDF3EA] leading-10 text-[#2E3855] mb-0 text-center rounded-2xl font-bold text-xl after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent">
          Biogas
        </div>
        <div
          class="flex items-center justify-center arrow arrow-bottom relative bg-[#DDF3EA] leading-10 text-[#2E3855] mb-0 text-center rounded-2xl font-bold text-xl after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent">
          Syngas
        </div>
        <div
          class="flex items-center justify-center arrow arrow-bottom relative bg-[#DDF3EA] leading-10 text-[#2E3855] text-center rounded-2xl font-bold text-xl">
          Bio-oil
        </div>
        <div
          class="flex items-center justify-center arrow arrow-bottom relative bg-[#DDF3EA] leading-10 text-[#2E3855] text-center rounded-2xl font-bold text-xl">
          Biochar
        </div>
      </div>
      <div class="flex justify-center mt-6 p-6">
        <div
          class="p-3 text-white arrow arrow-bottom relative w-1/3 bg-gradient-to-r from-[#FF5252] to-[#59AFFF] rounded-2xl font-bold text-xl leading-10 text-[#2E3855] mb-0 text-center after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-[#AD85AC] after:border-r-transparent after:border-l-transparent">
          Heat / Cool
        </div>
      </div>
      <div class="flex justify-center mt-[-10px] p-6 mb-[-20px]">
        <div class="p-3 relative w-1/3 bg-[#D0E6F2] leading-10 text-[#2E3855] mb-0 rounded-2xl font-bold text-xl text-center">
          Electricity
        </div>
      </div>
    </section>

    <!-- <img class="transition-shadow z-10 w-full h-full" src="/assets/field.png" alt="" /> -->

    <h1 id="map" class="pt-10">
      <div class="container mx-auto rounded-2xl">
        <div class="flex md:flex-row flex-col items-center rounded-2xl bg-white w-full">
          <div class="bg-[#E7F5F5] md:w-2/5 w-full flex justify-center rounded-l-2xl">
            <img class="h-80 p-6" src="/assets/Frame 19 (1).png" alt="" />
          </div>

          <div class=" md:w-3/5 w-full p-14 pt-8 pb-6">
            <style>
              p {
                font-size: 1.2rem;
              }
            </style>
            <h2 style="font-family: 'Poppins', sans-serif;" class="uppercase pb-0 text-pfp-green font-bold">
              Exploration station
            </h2>
            <div style="font-family: 'Poppins', sans-serif;" class="text-3xl font-bold text-[#2e3855] font-Poppins mt-5">
              Interact with our exploration <br />
              station to learn more
            </div>
            <p style=" font-family: 'Public Sans', sans-serif;" class="text-[#2E3855] tracking-wider mt-5">
              Whether you’re a business owner, facility manager, community leader or just interested in sustainable energy
              solutions, our exploration station has something for you
            </p>
          </div>
        </div>
      </div>
      <div
        class="items-center rounded-2xl"
        id="cow-panel"
        style="z-index:30;position:relative;top:0px;left:0px;width:700px; height:0px;">
        <style>
          .cow-element {
            /* overflow: visible !important; */
            box-shadow: 8px 0 8px -6px rgba(0, 0, 0, 0.3);
          }
        </style>
        <div
          class="cow-element pt-0 opacity-0 -translate-x-full h-[663px] absolute top-0 bg-white w-4/5 flex flex-col duration-300 transform rounded-l-2xl mt-10"
          id="cow">
          <div class="relative left-[98%] rounded-r-2xl">
            <script>
              function toggleElement(k) {
                var element = document.querySelector('#' + k)
                // element.classList.toggle('hidden')
                element.classList.toggle('-translate-x-full')
                element.classList.toggle('opacity-0')
              }
            </script>
            <button
              type="button"
              onclick="toggleElementOff('cow')"
              style=" font-family: 'Public Sans', sans-serif; box-shadow: 8px 8px 8px -6px rgba(0, 0, 0, 0.3);"
              class="flex items-center justify-center text-[#2E3855] bg-white font-semibold rounded-lg rounded-t-none text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mb-2">
              <img class="mr-2" src="/assets/x-circle.png" alt="" />
            </button>
          </div>
          <div class="p-6">
            <div class="flex justify-between items-center w-full mt-[-50px]">
              <div class="w-2/5 bg-[#E7F5F5] rounded-2xl">
                <img style="height:70%;padding:20px;margin-left:5%;" src="/assets/cow 1.png" alt="" />
              </div>
              <div class="w-1/2">
                <h1 style="font-family: 'Poppins', sans-serif;" class="mt-0 mb-4 font-bold text-3xl leading-10 text-[#2E3855]">
                  Cow manure
                </h1>
                <p style=" font-family: 'Public Sans', sans-serif;" class="flex items-center text-[#2E3855] text-lg">
                  <span class="font-bold text-xl">GCV:</span>
                  15 MJ/kg
                  <img class="ml-5 map-gcv info-pop" src="/assets/Frame 15.png" alt="" />
                </p>
                <p style=" font-family: 'Public Sans', sans-serif;" class=" text-[#2E3855] text-lg">
                  <span class="font-bold text-xl">Energy content:</span>
                  Low
                </p>
              </div>
            </div>

            <div class="flex">
              <button
                type="button"
                style=" font-family: 'Public Sans', sans-serif;"
                class="flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4">
                <img class="mr-3" src="/assets/bar-chart.png" alt="" />
                High organic content
              </button>
              <button
                type="button"
                style=" font-family: 'Public Sans', sans-serif;"
                class="flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4">
                <img class="mr-3" src="/assets/bar-chart.png" alt="" />
                High nutrient content
              </button>
            </div>
            <div class="flex justify-start">
              <button
                type="button"
                style=" font-family: 'Public Sans', sans-serif;"
                class="flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4">
                <img class="mr-3" src="/assets/bar-chart.png" alt="" />
                High nitrogen content
              </button>
              <button
                type="button"
                style=" font-family: 'Public Sans', sans-serif;"
                class="flex items-center justify-center mt-5 text-[#2E3855] bg-[#D9F5E4] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4">
                <img class="mr-3" src="/assets/bar-chart (1).png" alt="" />
                Low pH levels
              </button>
            </div>
            <div class="flex justify-start items-center mt-8 pl-2">
              <img class="mr-3" src="/assets/book-open.png" alt="" />
              <h1 style="font-family: 'Poppins', sans-serif;" class="mt-0 font-bold text-xl leading-10 text-[#2E3855]">
                <a href="https://www.host.nl/en/case/guichen-france/" target="_blank">Case study</a>
              </h1>
              <img class="ml-5 map-case-study info-pop" src="/assets/Frame 15.png" alt="" />
            </div>

            <div style=" font-family: 'Public Sans', sans-serif;" class="mt-3 pl-2">
              <h2 class="mb-2 text-lg font-light text-[#2E3855]">600 dairy cows or 3500 tonnes of cow manure per year</h2>
              <ul class="max-w-md space-y-1 text-lg font-semibold text-[#2E3855] list-disc list-inside">
                <li>Produces 656m³ biogas every day</li>
                <li>Ability to power 187 UK households every day</li>
              </ul>
            </div>
          </div>
          <div class="bg-[#2E3855] rounded-b-2xl rounded-r-none h-[180px] absolute bottom-0 left-0 mb-0 w-full pl-2">
            <div class="flex flex-col p-5">
              <div class="flex">
                <div class="mt-2">
                  <img src="/assets/medres/anaerobic-digestion.jpg" class="rounded-full w-16 h-16" alt="" />
                </div>
                <div class="ml-5">
                  <h1 style="font-family: 'Poppins', sans-serif;" class="mt-0 font-bold text-lg leading-10 text-white">
                    Most appropriate technology
                  </h1>
                  <p style=" font-family: 'Public Sans', sans-serif;" class="text-white text-xl mt-1 tracking-wider">
                    Anaerobic Digestion
                  </p>
                </div>
              </div>

              <div class="flex w-full">
                <a href="#calculator">
                  <button
                    type="button"
                    onclick="toggleAlOff();"
                    style=" font-family: 'Public Sans', sans-serif;"
                    class="w-60 flex justify-center items-center mt-5 text-white bg-[#EC8B5A] font-semibold rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-10 mb-2">
                    <img class="mr-3" src="/assets/arrow-right-circle.png" alt="" />
                    Start your project
                  </button>
                </a>
                <a href="/green-energy/">
                  <button
                    type="button"
                    style=" font-family: 'Public Sans', sans-serif;"
                    class="w-52 h-[45px] flex justify-center items-center mt-5 text-white bg-[#2E3855] border border-1 border-white font-semibold rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-10 mb-2">
                    <img class="mr-3" src="/assets/arrow-right-circle.png" alt="" />
                    Learn more
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          class="cow-element pt-0 opacity-0 -translate-x-full h-[663px] absolute top-0 bg-white w-4/5 flex flex-col duration-300 transform rounded-l-2xl mt-10"
          id="food">
          <div class="relative left-[98%] rounded-r-2xl">
            <script>
              function toggleElement(k) {
                var element = document.querySelector('#' + k)
                // element.classList.toggle('hidden')
                element.classList.toggle('-translate-x-full')
                element.classList.toggle('opacity-0')
              }
            </script>
            <button
              type="button"
              onclick="toggleElementOff('food')"
              style=" font-family: 'Public Sans', sans-serif; box-shadow: 8px 8px 8px -6px rgba(0, 0, 0, 0.3);"
              class="flex items-center justify-center text-[#2E3855] bg-white font-semibold rounded-lg rounded-t-none text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mb-2">
              <img class="mr-2" src="/assets/x-circle.png" alt="" />
            </button>
          </div>
          <div class="p-6">
            <div class="flex justify-between items-center w-full mt-[-50px]">
              <div class="w-2/5 bg-[#E7F5F5] rounded-2xl">
                <img style="height:130px;padding:20px;margin-left:17%;" src="/assets/Group 7 (2).png" alt="" />
              </div>
              <div class="w-1/2">
                <h1 style="font-family: 'Poppins', sans-serif;" class="mt-0 mb-4 font-bold text-3xl leading-10 text-[#2E3855]">
                  Food waste
                </h1>
                <p style=" font-family: 'Public Sans', sans-serif;" class="flex items-center text-[#2E3855] text-lg">
                  <span class="font-bold text-xl">GCV:</span>
                  17 MJ/kg
                  <img class="ml-5 map-gcv info-pop" src="/assets/Frame 15.png" alt="" />
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
                class="flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4">
                <img class="mr-3" src="/assets/bar-chart.png" alt="" />
                High organic content
              </button>
              <button
                type="button"
                style=" font-family: 'Public Sans', sans-serif;"
                class="flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4">
                <img class="mr-3" src="/assets/bar-chart.png" alt="" />
                High nutrient content
              </button>
            </div>
            <div class="flex justify-start">
              <button
                type="button"
                style=" font-family: 'Public Sans', sans-serif;"
                class="flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4">
                <img class="mr-3" src="/assets/bar-chart.png" alt="" />
                Medium nitrogen content
              </button>
              <button
                type="button"
                style=" font-family: 'Public Sans', sans-serif;"
                class="flex items-center justify-center mt-5 text-[#2E3855] bg-[#D9F5E4] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4">
                <img class="mr-3" src="/assets/bar-chart (1).png" alt="" />
                Low pH levels
              </button>
            </div>
            <div class="flex justify-start items-center mt-8 pl-2">
              <img class="mr-3" src="/assets/book-open.png" alt="" />
              <h1 style="font-family: 'Poppins', sans-serif;" class="mt-0 font-bold text-xl leading-10 text-[#2E3855]">
                <a href="https://www.host.nl/en/case/guichen-france/" target="_blank">Case study</a>
              </h1>
              <img class="ml-5 map-case-study info-pop" src="/assets/Frame 15.png" alt="" />
            </div>

            <div style=" font-family: 'Public Sans', sans-serif;" class="mt-3 pl-2">
              <h2 class="mb-2 text-lg font-light text-[#2E3855]">100 people or 250 tonnes of food waste per year</h2>
              <ul class="max-w-md space-y-1 text-lg font-semibold text-[#2E3855] list-disc list-inside">
                <li>Produces 156m³ biogas every day</li>
                <li>Ability to power 19 UK households every day</li>
              </ul>
            </div>
          </div>
          <div class="bg-[#2E3855] rounded-b-2xl rounded-r-none h-[180px] absolute bottom-0 left-0 mb-0 w-full pl-2">
            <div class="flex flex-col p-5">
              <div class="flex">
                <div class="mt-2">
                  <img src="/assets/medres/anaerobic-digestion.jpg" class="rounded-full w-16 h-16" alt="" />
                </div>
                <div class="ml-5">
                  <h1 style="font-family: 'Poppins', sans-serif;" class="mt-0 font-bold text-lg leading-10 text-white">
                    Most appropriate technology
                  </h1>
                  <p style=" font-family: 'Public Sans', sans-serif;" class="text-white text-xl mt-1 tracking-wider">
                    Anaerobic Digestion
                  </p>
                </div>
              </div>

              <div class="flex w-full">
                <a href="#calculator">
                  <button
                    type="button"
                    onclick="toggleAlOff();"
                    style=" font-family: 'Public Sans', sans-serif;"
                    class="w-60 flex justify-center items-center mt-5 text-white bg-[#EC8B5A] font-semibold rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-10 mb-2">
                    <img class="mr-3" src="/assets/arrow-right-circle.png" alt="" />
                    Start your project
                  </button>
                </a>
                <a href="/green-energy/">
                  <button
                    type="button"
                    style=" font-family: 'Public Sans', sans-serif;"
                    class="w-52 h-[45px] flex justify-center items-center mt-5 text-white bg-[#2E3855] border border-1 border-white font-semibold rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-10 mb-2">
                    <img class="mr-3" src="/assets/arrow-right-circle.png" alt="" />
                    Learn more
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          class="cow-element pt-0 opacity-0 -translate-x-full h-[663px] absolute top-0 bg-white w-4/5 flex flex-col duration-300 transform rounded-l-2xl mt-10"
          id="bottle">
          <div class="relative left-[98%] rounded-r-2xl">
            <script>
              function toggleElement(k) {
                var element = document.querySelector('#' + k)
                // element.classList.toggle('hidden')
                element.classList.toggle('-translate-x-full')
                element.classList.toggle('opacity-0')
              }
            </script>
            <button
              type="button"
              onclick="toggleElementOff('bottle')"
              style=" font-family: 'Public Sans', sans-serif; box-shadow: 8px 8px 8px -6px rgba(0, 0, 0, 0.3);"
              class="flex items-center justify-center text-[#2E3855] bg-white font-semibold rounded-lg rounded-t-none text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mb-2">
              <img class="mr-2" src="/assets/x-circle.png" alt="" />
            </button>
          </div>
          <div class="p-6">
            <div class="flex justify-between items-center w-full mt-[-50px]">
              <div class="w-2/5 bg-[#E7F5F5] rounded-2xl">
                <img style="height:130px;padding:20px;margin-left:30%;" src="/assets/pet bottle 1.png" alt="" />
              </div>
              <div class="w-1/2">
                <h1 style="font-family: 'Poppins', sans-serif;" class="mt-0 mb-4 font-bold text-3xl leading-10 text-[#2E3855]">
                  PE plastic
                </h1>
                <p style=" font-family: 'Public Sans', sans-serif;" class="flex items-center text-[#2E3855] text-lg">
                  <span class="font-bold text-xl">GCV:</span>
                  46 MJ/kg
                  <img class="ml-5 map-gcv info-pop" src="/assets/Frame 15.png" alt="" />
                </p>
                <p style=" font-family: 'Public Sans', sans-serif;" class=" text-[#2E3855] text-lg">
                  <span class="font-bold text-xl">Energy content:</span>
                  Very high
                </p>
              </div>
            </div>

            <div class="flex">
              <button
                type="button"
                style=" font-family: 'Public Sans', sans-serif;"
                class="flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4">
                <img class="mr-3" src="/assets/bar-chart.png" alt="" />
                Very low organic content
              </button>
              <button
                type="button"
                style=" font-family: 'Public Sans', sans-serif;"
                class="flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4">
                <img class="mr-3" src="/assets/bar-chart.png" alt="" />
                Very low nutrient content
              </button>
            </div>
            <div class="flex justify-start">
              <button
                type="button"
                style=" font-family: 'Public Sans', sans-serif;"
                class="flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4">
                <img class="mr-3" src="/assets/bar-chart.png" alt="" />
                Very low nitrogen content
              </button>
              <button
                type="button"
                style=" font-family: 'Public Sans', sans-serif;"
                class="flex items-center justify-center mt-5 text-[#2E3855] bg-[#D9F5E4] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4">
                <img class="mr-3" src="/assets/bar-chart (1).png" alt="" />
                PET bottles
              </button>
            </div>
            <div class="flex justify-start items-center mt-8 pl-2">
              <img class="mr-3" src="/assets/book-open.png" alt="" />
              <h1 style="font-family: 'Poppins', sans-serif;" class="mt-0 font-bold text-xl leading-10 text-[#2E3855]">
                <a href="https://www.host.nl/en/case/guichen-france/" target="_blank">Case study</a>
              </h1>
              <img class="ml-5 map-case-study info-pop" src="/assets/Frame 15.png" alt="" />
            </div>

            <div style=" font-family: 'Public Sans', sans-serif;" class="mt-3 pl-2">
              <h2 class="mb-2 text-lg font-light text-[#2E3855]">10000 PET bottles or 100 tonnes of plastic per year</h2>
              <ul class="max-w-md space-y-1 text-lg font-semibold text-[#2E3855] list-disc list-inside">
                <li>Produces 75kWh every day</li>
                <li>Ability to power 63 UK households every day</li>
              </ul>
            </div>
          </div>
          <div class="bg-[#2E3855] rounded-b-2xl rounded-r-none h-[180px] absolute bottom-0 left-0 mb-0 w-full pl-2">
            <div class="flex flex-col p-5">
              <div class="flex">
                <div class="mt-2 w-16"><img src="/assets/medres/pyrolysis.jpg" class="rounded-full w-16 h-16" alt="" /></div>
                <div class="ml-5">
                  <h1 style="font-family: 'Poppins', sans-serif;" class="mt-0 font-bold text-lg leading-10 text-white">
                    Most appropriate technology
                  </h1>
                  <p style=" font-family: 'Public Sans', sans-serif;" class="text-white text-xl mt-1 tracking-wider">
                    Pyrolysis
                  </p>
                </div>
              </div>

              <div class="flex w-full">
                <a href="#calculator">
                  <button
                    type="button"
                    onclick="toggleAlOff();"
                    style=" font-family: 'Public Sans', sans-serif;"
                    class="w-60 flex justify-center items-center mt-5 text-white bg-[#EC8B5A] font-semibold rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-10 mb-2">
                    <img class="mr-3" src="/assets/arrow-right-circle.png" alt="" />
                    Start your project
                  </button>
                </a>
                <a href="/green-energy/">
                  <button
                    type="button"
                    style=" font-family: 'Public Sans', sans-serif;"
                    class="w-52 h-[45px] flex justify-center items-center mt-5 text-white bg-[#2E3855] border border-1 border-white font-semibold rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-10 mb-2">
                    <img class="mr-3" src="/assets/arrow-right-circle.png" alt="" />
                    Learn more
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          class="cow-element pt-0 opacity-0 -translate-x-full h-[663px] absolute top-0 bg-white w-4/5 flex flex-col duration-300 transform rounded-l-2xl mt-10"
          id="technology">
          <div class="relative left-[98%] rounded-r-2xl">
            <script>
              function toggleElement(k) {
                var element = document.querySelector('#' + k)
                // element.classList.toggle('hidden')
                element.classList.toggle('-translate-x-full')
                element.classList.toggle('opacity-0')
              }
            </script>
            <button
              type="button"
              onclick="toggleElementOff('technology')"
              style=" font-family: 'Public Sans', sans-serif; box-shadow: 8px 8px 8px -6px rgba(0, 0, 0, 0.3);"
              class="flex items-center justify-center text-[#2E3855] bg-white font-semibold rounded-lg rounded-t-none text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mb-2">
              <img class="mr-2" src="/assets/x-circle.png" alt="" />
            </button>
          </div>
          <div class="p-6">
            <div class="flex justify-between items-center w-full mt-[-50px]">
              <div class="w-2/5 bg-[#E7F5F5] rounded-2xl">
                <img style="height:130px;padding:20px;margin-left:10%;" src="/assets/Group14.png" alt="" />
              </div>
              <div class="w-1/2">
                <h1 style="font-family: 'Poppins', sans-serif;" class="mt-0 mb-4 font-bold text-3xl leading-10 text-[#2E3855]">
                  Technology
                </h1>
                <p style=" font-family: 'Public Sans', sans-serif;" class="flex items-center text-[#2E3855] text-lg">
                  <span class="font-bold text-xl">GCV:</span>
                  N/A MJ/kg
                  <img class="ml-5 map-gcv info-pop" src="/assets/Frame 15.png" alt="" />
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
                class="flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4">
                <img class="mr-3" src="/assets/bar-chart.png" alt="" />
                High organic content
              </button>
              <button
                type="button"
                style=" font-family: 'Public Sans', sans-serif;"
                class="flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4">
                <img class="mr-3" src="/assets/bar-chart.png" alt="" />
                High nutrient content
              </button>
            </div>
            <div class="flex justify-start">
              <button
                type="button"
                style=" font-family: 'Public Sans', sans-serif;"
                class="flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4">
                <img class="mr-3" src="/assets/bar-chart.png" alt="" />
                High nitrogen content
              </button>
              <button
                type="button"
                style=" font-family: 'Public Sans', sans-serif;"
                class="flex items-center justify-center mt-5 text-[#2E3855] bg-[#D9F5E4] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4">
                <img class="mr-3" src="/assets/bar-chart (1).png" alt="" />
                Latest technology
              </button>
            </div>
            <div class="flex justify-start items-center mt-8 pl-2">
              <img class="mr-3" src="/assets/book-open.png" alt="" />
              <h1 style="font-family: 'Poppins', sans-serif;" class="mt-0 font-bold text-xl leading-10 text-[#2E3855]">
                <a href="https://www.host.nl/en/case/guichen-france/" target="_blank">Case study</a>
              </h1>
              <img class="ml-5 map-case-study info-pop" src="/assets/Frame 15.png" alt="" />
            </div>

            <div style=" font-family: 'Public Sans', sans-serif;" class="mt-3 pl-2">
              <h2 class="mb-2 text-lg font-light text-[#2E3855]">600 dairy cows or 3500 tonnes of cow manure per year</h2>
              <ul class="max-w-md space-y-1 text-lg font-semibold text-[#2E3855] list-disc list-inside">
                <li>Produces 656m³ biogas every day</li>
                <li>Ability to power 187 UK households every day</li>
              </ul>
            </div>
          </div>
          <div class="bg-[#2E3855] rounded-b-2xl rounded-r-none h-[180px] absolute bottom-0 left-0 mb-0 w-full pl-2">
            <div class="flex flex-col p-5">
              <div class="flex">
                <div class="mt-2 w-16"><img src="/assets/medres/pyrolysis.jpg" class="rounded-full w-16 h-16" alt="" /></div>
                <div class="ml-5">
                  <h1 style="font-family: 'Poppins', sans-serif;" class="mt-0 font-bold text-lg leading-10 text-white">
                    Most appropriate technology
                  </h1>
                  <p style=" font-family: 'Public Sans', sans-serif;" class="text-white text-xl mt-1 tracking-wider">
                    New Technology
                  </p>
                </div>
              </div>

              <div class="flex w-full">
                <a href="#calculator">
                  <button
                    type="button"
                    onclick="toggleAlOff();"
                    style=" font-family: 'Public Sans', sans-serif;"
                    class="w-60 flex justify-center items-center mt-5 text-white bg-[#EC8B5A] font-semibold rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-10 mb-2">
                    <img class="mr-3" src="/assets/arrow-right-circle.png" alt="" />
                    Start your project
                  </button>
                </a>
                <a href="/green-energy/">
                  <button
                    type="button"
                    style=" font-family: 'Public Sans', sans-serif;"
                    class="w-52 h-[45px] flex justify-center items-center mt-5 text-white bg-[#2E3855] border border-1 border-white font-semibold rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-10 mb-2">
                    <img class="mr-3" src="/assets/arrow-right-circle.png" alt="" />
                    Learn more
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="cow-shadow"
        class="bg-base-100"
        style="width:1000px; height:750px; position: relative; left: -1000px; top: 0px; margin-bottom:-750px; z-index:99" />
    </h1>

    <!-- ===================after landing page =================== -->
    <section class="pt-10 rounded-2xl mb-10">
      <div
        class="container duration-300 transform mx-auto w-full bg-cover bg-center bg-no-repeat bg-[url(/assets/field.png)] rounded-2xl"
        style="padding-top:520px;z-index:29;"
        id="field"
        onclick="toggleAlOff();">
        <div>
          <div id="buttons" style="z-index:99">
            <button
              type="button"
              onclick="toggleElement('food')"
              style=" font-family: 'Public Sans', sans-serif; left:520px; top:-430px;"
              class="techbuttons techbutton w-28 h-20 flex items-center justify-center text-[#2E3855] bg-[#ffffffdd] font-semibold rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mb-2">
              <img class="mr-3" src="/assets/Group 7 (2).png" alt="" />
            </button>
            <button
              type="button"
              onclick="toggleElement('cow')"
              style=" font-family: 'Public Sans', sans-serif; left:780px; top:-200px;"
              class="techbuttons techbutton w-28 h-20 flex items-center justify-center text-[#2E3855] bg-[#ffffffdd] font-semibold rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mb-2">
              <img class="mr-3" src="/assets/manure 1.png" alt="" />
            </button>
            <button
              type="button"
              onclick="toggleElement('bottle')"
              style=" font-family: 'Public Sans', sans-serif; left:120px; top:-70px;"
              class="techbuttons techbutton w-28 h-20 flex items-center justify-center text-[#2E3855] bg-[#ffffffdd] font-semibold rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-2 mb-2">
              <img class="mr-3" src="/assets/pet bottle 1.png" alt="" />
            </button>
            <button
              type="button"
              onclick="toggleElement('technology')"
              style=" font-family: 'Public Sans', sans-serif; background:#2e3855;  left:560px; top:-530px;"
              class="techbuttons techbutton-dark w-40 h-12 flex items-center justify-center text-[#2E3855] bg-[#ffffffdd] font-base rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mb-2 uppercase">
              <div style="color:#ffffff;font-size:18px;margin:-5px 0px -5px -5px;">Technology</div>
            </button>
            <style>
              @keyframes bounce {
                0%,
                100% {
                  transform: translateY(0);
                }
                50% {
                  transform: translateY(-10px);
                }
              }

              @keyframes scale {
                0% {
                  transform: scale(1);
                }
                100% {
                  transform: scale(1.1);
                }
              }

              .techbutton img {
                /* width: 50px; */
                height: 66px;
                margin: -10px 0px -5px -5px;
              }
              .techbuttons {
                /* transform: scale(0.6); */
                position: relative;
                animation: bounce 1s infinite;
              }

              .techbuttons:hover {
                animation: scale 1s infinite alternate;
              }

              .techbutton::after {
                content: '';
                position: absolute;
                bottom: -20px;
                left: 45px;
                /* transform: translateX(-10px) translateY(50px); */
                border-width: 10px;
                border-style: solid;
                border-color: #ffffffdd transparent transparent transparent;
              }
              .techbutton-dark::after {
                content: '';
                position: absolute;
                bottom: -20px;
                left: 70px;
                /* transform: translateX(-10px) translateY(50px); */
                border-width: 10px;
                border-style: solid;
                border-color: #2e3855dd transparent transparent transparent;
              }
              .techbuttons {
                box-shadow: 0 0 10px 5px #d8e6f2ff;
              }
              .fullw {
                animation: growAnimation 1s;
                max-width: 100%;
                min-height: 100%;
                padding-left: 250px;
                padding-top: 650px !important;
              }
              @keyframes growAnimation {
                100% {
                  min-height: 100%;
                }
              }
              .fullb {
                top: calc(100% - 65px) !important;
                left: calc(100% - 300px) !important;
                position: fixed !important;
              }
              .fullc {
                top: 100px !important;
                left: 0px !important;
                position: fixed !important;
              }
              .fulld {
                margin-top: 100px !important;
              }
            </style>
            <script>
              const animatedElements = document.querySelectorAll('.techbuttons')

              animatedElements.forEach(element => {
                const randomDelay = Math.floor(Math.random() * 1000) // Generate a random delay between 0 and 1000 milliseconds
                element.style.animationDelay = `${randomDelay}ms`
                element.style.animationDuration = `${1000 + randomDelay}ms`
              })
            </script>
          </div>
          <style>
            .growbutton:hover {
              box-shadow: 0 0 5px 1px white;
            }
            .growbutton img {
              max-width: 190%;
            }
          </style>
          <div
            class="growbuttons inline-flex"
            id="full-screen-buttons"
            style="width:200px; position:relative; top: -10px; left: calc(100% - 300px);">
            <div class="inline-flex items-center justify-center">
              <input
                type="text"
                placeholder="Search up waste..."
                class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300" />
              <button aria-label="search" class="btn btn-square btn-ghost ml-[-45px]">
                <span class="i-heroicons-outline-search" />
              </button>
            </div>
            <button
              type="button"
              onclick="grow()"
              style=" font-family: 'Public Sans', sans-serif;"
              class="growbutton ml-[10px] w-10
               h-10 inline-flex items-center justify-center text-[#2E3855] bg-[#ffffffdd] font-semibold rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mt-1">
              <img class="w-20 mr-3" src="/assets/Frame 19.svg" alt="" style="width:50px;height:50px;" />
            </button>
          </div>
        </div>
      </div>
    </section>

    <h1 class="rounded-2xl pt-10" id="calculator">
      <div class="container mx-auto rounded-2xl">
        <div class="flex md:flex-row flex-col items-center rounded-2xl bg-white w-full">
          <div class="bg-[#E7F5F5] md:w-2/5 w-full flex justify-center rounded-l-2xl">
            <img class="h-80 p-6" src="/assets/tech.png" alt="" />
          </div>

          <div class=" md:w-3/5 w-full p-14 pt-8 pb-6">
            <style>
              p {
                font-size: 1.2rem;
              }
            </style>
            <h2 style="font-family: 'Poppins', sans-serif;" class="uppercase pb-0 text-pfp-green font-bold">
              The PFP Calculator
            </h2>
            <div style="font-family: 'Poppins', sans-serif;" class="text-3xl font-bold text-[#2e3855] font-Poppins mt-5">
              Find the right technology
              <br />
              for your needs
            </div>
            <p style=" font-family: 'Public Sans', sans-serif;" class="text-[#2E3855] tracking-wider mt-5">
              We will assist you every step of the way to ensure a smooth and successful implementation of your power-from-waste
              project
            </p>
          </div>
        </div>
      </div>
      <div
        id="calc-shadow-l"
        class="bg-base-100"
        style="width:1000px; height:750px; position: relative; left: -1000px; top: 0px; margin-bottom:-750px; z-index:9" />
      <div
        id="calc-shadow-r"
        class="bg-base-100"
        style="width:1000px; height:750px; position: relative; right: -100%; top: 0px; margin-bottom:-750px; z-index:9" />
    </h1>

    <!-- ===================after landing page =================== -->
    <section class="duration-300 transition opacity-0 container mb-[-630px] bg-white p-16 pb-6 rounded-b-2xl" id="results">
      <div class="flex flex-row gap-8 items-center p-5 pt-1 mt-[-20px]">
        <div class="w-1/3 flex-col justify-center" style="font-family: 'Poppins', sans-serif;">
          <div class="bg-[#E7F5F5] rounded-2xl text-center p-6 mb-10 text-[#2E3855]">
            <p class="uppercase text-xl m-5">Waste type</p>
            <h2 class="text-2xl font-bold leading-10">
              <span id="waste-type1">PE Plastic</span>
              <br />
              <span id="waste-type2">10,000 tonnes</span>
            </h2>
          </div>
          <div class="bg-[#2E3855] rounded-2xl flex flex-col justify-center p-6 py-12 mb-6">
            <div class="mx-auto">
              <img src="/assets/medres/pyrolysis.jpg" class="rounded-full w-24 h-24" id="matched-img" alt="" />
            </div>
            <div class="text-center text-white">
              <h3 class="uppercase text-xl m-5 mt-6">Most appropriate technology</h3>
              <h2 class="text-2xl font-bold leading-6" id="matched-tech">Pyrolysis</h2>
            </div>
          </div>
        </div>
        <div class="w-2/3 flex-col justify-center mx-auto pl-10 mt-0">
          <div class="flex justify-center">
            <div
              style="font-family: 'Poppins', sans-serif;"
              class="pr-8 flex justify-end items-center p-4 relative w-1/2 bg-[#2E3855] rounded-l-2xl text-xl leading-10 text-white mb-5 text-center after:absolute after:-right-3 after:top-[35%] after:content[''] after:block after:border-solid after:border-l-8 after:border-b-8 after:border-t-8 after:border-t-transparent after:border-b-transparent after:border-l-[#2E3855] z-20
                            tracking-wider text-[#2E3855]">
              Energy content <img class="ml-5 calc-gcv info-pop" src="/assets/info.png" alt="" />
            </div>
            <div
              class="absolute p-4 relative w-1/2 rounded-r-lg tracking-wider bg-[#E7F5F5] text-xl leading-10 text-[#2E3855] mb-5 text-center">
              <span id="energycontent">18</span>
              MJ/kg
            </div>
          </div>
          <div class="flex justify-center mb-2">
            <div
              style="font-family: 'Poppins', sans-serif;"
              class="pr-8 flex justify-end items-center p-4 relative w-1/2 bg-[#2E3855] rounded-l-2xl text-xl leading-10 text-white mb-5 text-center after:absolute after:-right-3 after:top-[35%] after:content[''] after:block after:border-solid after:border-l-8 after:border-b-8 after:border-t-8 after:border-t-transparent after:border-b-transparent after:border-l-[#2E3855] z-20
                            tracking-wider text-[#2E3855]">
              Heat produced <img class="ml-5 calc-heat-produced info-pop" src="/assets/info.png" alt="" />
            </div>
            <div
              class="absolute p-4 relative w-1/2 rounded-r-lg tracking-wider bg-[#E7F5F5] text-xl leading-10 text-[#2E3855] mb-5 text-center">
              <span id="heatproduced">11,200</span>
              kWh per year
            </div>
          </div>
          <div class="flex justify-center mb-6">
            <div
              style="font-family: 'Poppins', sans-serif;"
              class="pr-8 flex justify-end items-center p-4 relative w-1/2 bg-[#2E3855] rounded-l-2xl text-xl leading-10 text-white text-center after:absolute after:-right-3 after:top-[35%] after:content[''] after:block after:border-solid after:border-l-8 after:border-b-8 after:border-t-8 after:border-t-transparent after:border-b-transparent after:border-l-[#2E3855] z-20
                            tracking-wider text-[#2E3855]">
              Heat savings <img class="ml-5 calc-heat-savings info-pop" src="/assets/info.png" alt="" />
            </div>
            <div
              class="absolute p-4 relative w-1/2 rounded-r-lg tracking-wider bg-[#E7F5F5] text-xl leading-10 text-[#2E3855] text-center">
              £
              <span id="heatsavingspa">48,000</span>
              per year
            </div>
          </div>
          <div class="flex justify-center mb-2">
            <div
              style="font-family: 'Poppins', sans-serif;"
              class="pr-8 flex justify-end items-center p-4 relative w-1/2 bg-[#2E3855] rounded-l-2xl text-xl leading-10 text-white mb-5 text-center after:absolute after:-right-3 after:top-[35%] after:content[''] after:block after:border-solid after:border-l-8 after:border-b-8 after:border-t-8 after:border-t-transparent after:border-b-transparent after:border-l-[#2E3855] z-20
                            tracking-wider text-[#2E3855]">
              Electricity produced <img class="ml-5 calc-electricity-produced info-pop" src="/assets/info.png" alt="" />
            </div>
            <div
              class="absolute p-4 relative w-1/2 rounded-r-lg tracking-wider bg-[#E7F5F5] text-xl leading-10 text-[#2E3855] mb-5 text-center">
              <span id="electricityproduced">4,800</span>
              kWh per year
            </div>
          </div>
          <div class="flex justify-center mb-6">
            <div
              style="font-family: 'Poppins', sans-serif;"
              class="pr-8 flex justify-end items-center p-4 relative w-1/2 bg-[#2E3855] rounded-l-2xl text-xl leading-10 text-white text-center after:absolute after:-right-3 after:top-[35%] after:content[''] after:block after:border-solid after:border-l-8 after:border-b-8 after:border-t-8 after:border-t-transparent after:border-b-transparent after:border-l-[#2E3855] z-20
                            tracking-wider text-[#2E3855]">
              Electrical savings <img class="ml-5 calc-electrical-savings info-pop" src="/assets/info.png" alt="" />
            </div>
            <div
              class="absolute p-4 relative w-1/2 rounded-r-lg tracking-wider bg-[#E7F5F5] text-xl leading-10 text-[#2E3855] text-center">
              £
              <span id="electricitysavingspa">70,000</span>
              per year
            </div>
          </div>
          <div class="flex justify-center mb-6">
            <div
              style="font-family: 'Poppins', sans-serif;"
              class="pr-8 flex justify-end items-center p-4 relative w-1/2 bg-[#2E3855] rounded-l-2xl text-xl leading-10 text-white text-center after:absolute after:-right-3 after:top-[35%] after:content[''] after:block after:border-solid after:border-l-8 after:border-b-8 after:border-t-8 after:border-t-transparent after:border-b-transparent after:border-l-[#2E3855] z-20
                            tracking-wider text-[#2E3855]">
              Char produced <img class="ml-5 calc-char info-pop" src="/assets/info.png" alt="" />
            </div>
            <div
              class="absolute p-4 relative w-1/2 rounded-r-lg tracking-wider bg-[#E7F5F5] text-xl leading-10 text-[#2E3855] text-center">
              <span id="fertiliser">500</span>
              tonnes
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="calculate">
      <div class="container rounded-2xl bg-white p-20 pt-12 pb-16 z-23" id="growcalc">
        <div class="text-center pb-10">
          <h1
            style="font-family: 'Poppins', sans-serif;"
            class="card text-3xl font-bold text-[#2e3855] font-Poppins text-center">
            The PFP Calculator
          </h1>
          <p style=" font-family: 'Public Sans', sans-serif;" class="text-[#2E3855] tracking-wider mt-5 pl-24 pr-24">
            Our user-friendly calculator is designed to evaluate your project's
            <br />
            feasibility, relevant technology and energy output
          </p>
        </div>
        <div
          style="font-family: 'Poppins', sans-serif;"
          class="flex md:flex-row flex-col items-center rounded-lg bg-white w-full mt-5">
          <div class="bg-[#E7F5F5] w-1/3 flex justify-center rounded-2xl mr-8">
            <img class="h-60" id="calc-img" src="/assets/cow 1 (1).png" alt="" />
          </div>
          <div class="w-2/3 pl-12 pr-0 md:mt-0 mt-5 duration-300 transform" id="calc-selectors">
            <div class="inline-flex rounded-xl shadow-sm w-full" role="group">
              <button type="button" class="text-xl w-1/2 h-16 text-white bg-[#2E3855] rounded-l-xl">Waste type</button>
              <div
                class="button dropdown w-1/2 flex justify-between z-10 inline-flex items-center py-2.5 px-4 text-xl font-semibold text-center text-[#2E3855] bg-[#E7F5F5] rounded-r-xl hover:bg-gray-200 border-0">
                <select id="colorselector" class="w-full bg-transparent text-center border-0">
                  <option class="bg-[#E7F5F5]" value="Cheese production (37% milk)">Cheese production (37% milk)</option>
                  <option class="bg-[#E7F5F5]" value="Butter production (29% milk)">Butter production (29% milk)</option>
                  <option class="bg-[#E7F5F5]" value="Ice cream (13% milk)">Ice cream (13% milk)</option>
                  <option class="bg-[#E7F5F5]" value="Beer production">Beer production</option>
                  <option class="bg-[#E7F5F5]" value="Wine production">Wine production</option>
                  <option class="bg-[#E7F5F5]" value="Spirits production">Spirits production</option>
                  <option class="bg-[#E7F5F5]" value="Ethanol production">Ethanol production</option>
                  <option class="bg-[#E7F5F5]" value="Pulp production">Pulp production</option>
                  <option class="bg-[#E7F5F5]" value="Juice production">Juice production</option>
                  <option class="bg-[#E7F5F5]" value="Tomato ketchup">Tomato ketchup</option>
                  <option class="bg-[#E7F5F5]" value="Bovine meat">Bovine meat</option>
                  <option class="bg-[#E7F5F5]" value="Pig meat">Pig meat</option>
                  <option class="bg-[#E7F5F5]" value="Sheep meat">Sheep meat</option>
                  <option class="bg-[#E7F5F5]" value="Frozen potatoes">Frozen potatoes</option>
                  <option class="bg-[#E7F5F5]" value="Prepared potatoes (crisps)">Prepared potatoes (crisps)</option>
                  <option class="bg-[#E7F5F5]" value="Potato starch">Potato starch</option>
                  <option class="bg-[#E7F5F5]" value="Dried potatoes">Dried potatoes</option>
                  <option class="bg-[#E7F5F5]" value="Sugar production">Sugar production</option>
                  <option class="bg-[#E7F5F5]" value="Yeast production">Yeast production</option>
                  <option class="bg-[#E7F5F5]" value="Vegetable oils production">Vegetable oils production</option>
                  <option class="bg-[#E7F5F5]" value="Biodiesel production">Biodiesel production</option>
                  <option class="bg-[#E7F5F5]" value="Pig manure">Pig manure</option>
                  <option class="bg-[#E7F5F5]" value="Dairy Cattle">Dairy Cattle</option>
                  <option class="bg-[#E7F5F5]" value="Non diary cattle">Non diary cattle</option>
                  <option class="bg-[#E7F5F5]" value="Buffalo">Buffalo</option>
                  <option class="bg-[#E7F5F5]" value="Chicken layer manure">Chicken layer manure</option>
                  <option class="bg-[#E7F5F5]" value="Chicken broiler manure">Chicken broiler manure</option>
                  <option class="bg-[#E7F5F5]" value="Sheep">Sheep</option>
                  <option class="bg-[#E7F5F5]" value="Food waste">Food waste</option>
                  <option class="bg-[#E7F5F5]" value="Fish waste">Fish waste</option>
                  <option class="bg-[#E7F5F5]" value="Coffee grounds">Coffee grounds</option>
                  <option class="bg-[#E7F5F5]" value="Crop residues">Crop residues</option>
                  <option class="bg-[#E7F5F5]" value="Maize silage">Maize silage</option>
                  <option class="bg-[#E7F5F5]" value="Cereal">Cereal</option>
                  <option class="bg-[#E7F5F5]" value="Grass silage">Grass silage</option>
                  <option class="bg-[#E7F5F5]" value="Pulp & Paper Waste">Pulp & Paper Waste</option>
                  <option class="bg-[#E7F5F5]" value="Textile Waste">Textile Waste</option>
                  <option class="bg-[#E7F5F5]" value="PE Plastic">PE Plastic</option>
                  <option class="bg-[#E7F5F5]" value="SRF">SRF</option>
                  <option class="bg-[#E7F5F5]" value="RDF">RDF</option>
                  <option class="bg-[#E7F5F5]" value="PP Plastic">PP Plastic</option>
                  <option class="bg-[#E7F5F5]" value="PS Plastic">PS Plastic</option>
                  <option class="bg-[#E7F5F5]" value="PVC Plastic">PVC Plastic</option>
                  <option class="bg-[#E7F5F5]" value="PET Plastic">PET Plastic</option>
                  <option class="bg-[#E7F5F5]" value="Rubber">Rubber</option>
                  <option class="bg-[#E7F5F5]" value="Wood waste">Wood waste</option>
                  <option class="bg-[#E7F5F5]" value="Municipal Solid Waste (MSW)">Municipal Solid Waste (MSW)</option>
                  <option class="bg-[#E7F5F5]" value="Medical Waste">Medical Waste</option>

                  <option class="bg-[#E7F5F5]" value="Ceramics">Ceramics</option>
                  <option class="bg-[#E7F5F5]" value="Sand">Sand</option>
                  <option class="bg-[#E7F5F5]" value="Dust">Dust</option>
                  <option class="bg-[#E7F5F5]" value="Glass">Glass</option>
                  <option class="bg-[#E7F5F5]" value="Metals">Metals</option>
                </select>
              </div>
            </div>
            <div class="inline-flex rounded-xl shadow-sm w-full mt-5" role="group">
              <button type="button" class="text-xl w-1/2 h-16 text-white bg-[#2E3855] rounded-l-xl">Kilograms per day</button>

              <div
                class="button dropdown w-1/2 flex justify-between flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-xl font-semibold text-center text-[#2E3855] bg-[#E7F5F5] rounded-r-xl hover:bg-gray-200 border-0">
                <select
                  id="colorselector2"
                  class="w-full bg-transparent text-center focus-0 after:border-0 before:border-0 after:border-[#E7F5F5]">
                  <option class="bg-[#E7F5F5]" value="10">10 kg</option>
                  <option class="bg-[#E7F5F5]" value="100">100 kg</option>
                  <option class="bg-[#E7F5F5]" value="1000">1000 kg</option>
                  <option class="bg-[#E7F5F5]" value="10000">10,000 kg</option>
                  <option class="bg-[#E7F5F5]" value="20000">20,000 kg</option>
                  <option class="bg-[#E7F5F5]" value="40000">40,000 kg</option>
                  <option class="bg-[#E7F5F5]" value="60000">&gt; 40,000 kg</option>
                </select>
              </div>
            </div>
            <div class="inline-flex rounded-xl shadow-sm w-full mt-5" role="group">
              <button type="button" class="text-xl w-1/2 h-16 text-white bg-[#2E3855] rounded-l-xl">Client needs</button>

              <div
                class="button dropdown w-1/2 flex justify-between flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-xl font-semibold text-center text-[#2E3855] bg-[#E7F5F5] rounded-r-xl hover:bg-gray-200 border-0">
                <select id="colorselector3" class="w-full bg-transparent text-center">
                  <option class="bg-[#E7F5F5]" value="electricity">Electricity</option>
                  <option class="bg-[#E7F5F5]" value="heating-cooling">Heating / Cooling</option>
                  <option class="bg-[#E7F5F5]" value="carbon-credits">Carbon credits</option>
                  <option class="bg-[#E7F5F5]" value="fertiliser">Fertiliser</option>
                </select>
              </div>
            </div>
            <div />
          </div>
        </div>
        <div
          class="w-[784px] ml-80 pl-16 h-60 p-10 pt-16 md:mt-0 mt-5 duration-300 transform absolute -translate-x-full opacity-0 -translate-y-full bg-[#E7F5F5] rounded-2xl"
          id="calc-message">
          <div class="text-4xl font-bold" id="feasible">Your project is feasible</div>
          <p style=" font-family: 'Public Sans', sans-serif;" class="text-[#2E3855] tracking-wider mt-5">
            Review your results to explore the different possibilities and
            <br />
            book a slot with us for personalised guidance on next steps
          </p>
        </div>
        <div class="flex justify gap-16 w-full">
          <a
            id="call-button"
            class="duration-300 transform -translate-x-full opacity-0 font-bold mt-16 w-[375px] p-4 hover:bg-pfp-green bg-pfp-orange rounded-xl flex justify-center items-center text-white tracking-wider font-semibold text-2xl"
            href="/contact">
            <img class="mr-3" src="/assets/arrow-right-circle.png" alt="" />
            <span>Book a call with us</span>
          </a>
          <a
            id="call-button2"
            class="duration-300 transform -translate-x-full opacity-0 font-bold mt-16 ml-1 w-[350px] p-4 hover:bg-pfp-green bg-pfp-navy rounded-xl flex justify-center items-center text-white tracking-wider font-semibold text-2xl"
            href="/green-energy/">
            <img class="mr-3" src="/assets/arrow-right-circle.png" alt="" />
            <span>Learn more</span>
          </a>
          <button
            id="calc-button"
            class="duration-300 transform -translate-x-[338px] font-bold mt-16 w-1/3 p-4 hover:bg-pfp-green bg-pfp-orange rounded-xl flex justify-center items-center text-white tracking-wider font-semibold text-2xl"
            href="/explore/#calculate"
            onclick="calculate();">
            <img class="mr-4 h-6" src="/assets/calculator.png" alt="" />
            <span>Calculate</span>
          </button>
        </div>
      </div>
      <div
        id="calc-spacer"
        class="bg-base-100"
        style="width:1000px; height:750px; position: relative; right: -100%; top: 0px; margin-bottom:-750px; z-index:9" />
    </section>
    <script>
      function calculate() {
        const data = {
          Ceramics: {
            feasibility: 'N'
          },
          Sand: { feasibility: 'N' },
          Dust: { feasibility: 'N' },
          Glass: { feasibility: 'N' },
          Metals: { feasibility: 'N' },
          'Cheese production (37% milk)': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 50.0,
            electricityproduced: 39410.3275,
            heatproduced: 36257.5013,
            electricitysavingspa: 13793.614625,
            heatsavingspa: 2538.025091,
            fertiliser: 28835
          },
          'Butter production (29% milk)': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 50.0,
            electricityproduced: 39410.3275,
            heatproduced: 36257.5013,
            electricitysavingspa: 13793.614625,
            heatsavingspa: 2538.025091,
            fertiliser: 28835
          },
          'Ice cream (13% milk)': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 50.0,
            electricityproduced: 39410.3275,
            heatproduced: 36257.5013,
            electricitysavingspa: 13793.614625,
            heatsavingspa: 2538.025091,
            fertiliser: 28835
          },
          'Beer production': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 50.0,
            electricityproduced: 39410.3275,
            heatproduced: 36257.5013,
            electricitysavingspa: 13793.614625,
            heatsavingspa: 2538.025091,
            fertiliser: 28835
          },
          'Wine production': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 50.0,
            electricityproduced: 39410.3275,
            heatproduced: 36257.5013,
            electricitysavingspa: 13793.614625,
            heatsavingspa: 2538.025091,
            fertiliser: 28835
          },
          'Spirits production': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 50.0,
            electricityproduced: 39410.3275,
            heatproduced: 36257.5013,
            electricitysavingspa: 13793.614625,
            heatsavingspa: 2538.025091,
            fertiliser: 28835
          },
          'Ethanol production': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 50.0,
            electricityproduced: 39410.3275,
            heatproduced: 36257.5013,
            electricitysavingspa: 13793.614625,
            heatsavingspa: 2538.025091,
            fertiliser: 28835
          },
          'Pulp production': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 50.0,
            electricityproduced: 39410.3275,
            heatproduced: 36257.5013,
            electricitysavingspa: 13793.614625,
            heatsavingspa: 2538.025091,
            fertiliser: 28835
          },
          'Juice production': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 45.0,
            electricityproduced: 35469.29475,
            heatproduced: 32631.75117,
            electricitysavingspa: 12414.2531625,
            heatsavingspa: 2284.2225819,
            fertiliser: 28835
          },
          'Tomato ketchup': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 45.0,
            electricityproduced: 35469.29475,
            heatproduced: 32631.75117,
            electricitysavingspa: 12414.2531625,
            heatsavingspa: 2284.2225819,
            fertiliser: 28835
          },
          'Bovine meat': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 50.0,
            electricityproduced: 39410.3275,
            heatproduced: 36257.5013,
            electricitysavingspa: 13793.614625,
            heatsavingspa: 2538.025091,
            fertiliser: 28835
          },
          'Pig meat': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 50.0,
            electricityproduced: 39410.3275,
            heatproduced: 36257.5013,
            electricitysavingspa: 13793.614625,
            heatsavingspa: 2538.025091,
            fertiliser: 28835
          },
          'Sheep meat': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 50.0,
            electricityproduced: 39410.3275,
            heatproduced: 36257.5013,
            electricitysavingspa: 13793.614625,
            heatsavingspa: 2538.025091,
            fertiliser: 28835
          },
          'Frozen potatoes': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 50.0,
            electricityproduced: 39410.3275,
            heatproduced: 36257.5013,
            electricitysavingspa: 13793.614625,
            heatsavingspa: 2538.025091,
            fertiliser: 28835
          },
          'Prepared potatoes (crisps)': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 50.0,
            electricityproduced: 39410.3275,
            heatproduced: 36257.5013,
            electricitysavingspa: 13793.614625,
            heatsavingspa: 2538.025091,
            fertiliser: 28835
          },
          'Potato starch': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 50.0,
            electricityproduced: 39410.3275,
            heatproduced: 36257.5013,
            electricitysavingspa: 13793.614625,
            heatsavingspa: 2538.025091,
            fertiliser: 28835
          },
          'Dried potatoes': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 50.0,
            electricityproduced: 39410.3275,
            heatproduced: 36257.5013,
            electricitysavingspa: 13793.614625,
            heatsavingspa: 2538.025091,
            fertiliser: 28835
          },
          'Sugar production': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 50.0,
            electricityproduced: 39410.3275,
            heatproduced: 36257.5013,
            electricitysavingspa: 13793.614625,
            heatsavingspa: 2538.025091,
            fertiliser: 28835
          },
          'Yeast production': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 35.0,
            electricityproduced: 27587.22925,
            heatproduced: 25380.25091,
            electricitysavingspa: 9655.5302375,
            heatsavingspa: 1776.6175637,
            fertiliser: 28835
          },
          'Vegetable oils production': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 40.0,
            electricityproduced: 31528.262,
            heatproduced: 29006.00104,
            electricitysavingspa: 11034.8917,
            heatsavingspa: 2030.4200728,
            fertiliser: 28835
          },
          'Biodiesel production': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 50.0,
            electricityproduced: 39410.3275,
            heatproduced: 36257.5013,
            electricitysavingspa: 13793.614625,
            heatsavingspa: 2538.025091,
            fertiliser: 28835
          },
          'Pig manure': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 45.0,
            electricityproduced: 35469.29475,
            heatproduced: 32631.75117,
            electricitysavingspa: 12414.2531625,
            heatsavingspa: 2284.2225819,
            fertiliser: 28835
          },
          'Dairy Cattle': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 24.0,
            electricityproduced: 18916.9572,
            heatproduced: 17403.600624,
            electricitysavingspa: 6620.93502,
            heatsavingspa: 1218.25204368,
            fertiliser: 28835
          },
          'Non diary cattle': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 18.0,
            electricityproduced: 14187.7179,
            heatproduced: 13052.700468,
            electricitysavingspa: 4965.701265,
            heatsavingspa: 913.68903276,
            fertiliser: 28835
          },
          Buffalo: {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 10.0,
            electricityproduced: 7882.0655,
            heatproduced: 7251.50026,
            electricitysavingspa: 2758.722925,
            heatsavingspa: 507.6050182,
            fertiliser: 28835
          },
          'Chicken layer manure': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 39.0,
            electricityproduced: 30740.05545,
            heatproduced: 28280.851014,
            electricitysavingspa: 10759.0194075,
            heatsavingspa: 1979.65957098,
            fertiliser: 28835
          },
          'Chicken broiler manure': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 36.0,
            electricityproduced: 28375.4358,
            heatproduced: 26105.400936,
            electricitysavingspa: 9931.40253,
            heatsavingspa: 1827.37806552,
            fertiliser: 28835
          },
          Sheep: {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 19.0,
            electricityproduced: 14975.92445,
            heatproduced: 13777.850494,
            electricitysavingspa: 5241.5735575,
            heatsavingspa: 964.44953458,
            fertiliser: 28835
          },
          'Food waste': {
            feasibility: 'Y',
            limit: 5,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 45.0,
            electricityproduced: 35469.29,
            heatproduced: 32631.75,
            electricitysavingspa: 12414.25,
            heatsavingspa: 2284.22,
            fertiliser: 28835
          },
          'Fish waste': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 59.0,
            electricityproduced: 46504.18645,
            heatproduced: 42783.851534,
            electricitysavingspa: 16276.4652575,
            heatsavingspa: 2994.86960738,
            fertiliser: 28835
          },
          'Coffee grounds': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 59.0,
            electricityproduced: 46504.18645,
            heatproduced: 42783.851534,
            electricitysavingspa: 16276.4652575,
            heatsavingspa: 2994.86960738,
            fertiliser: 28835
          },
          'Crop residues': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 59.0,
            electricityproduced: 46504.18645,
            heatproduced: 42783.851534,
            electricitysavingspa: 16276.4652575,
            heatsavingspa: 2994.86960738,
            fertiliser: 28835
          },
          'Maize silage': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 59.0,
            electricityproduced: 46504.18645,
            heatproduced: 42783.851534,
            electricitysavingspa: 16276.4652575,
            heatsavingspa: 2994.86960738,
            fertiliser: 28835
          },
          Cereal: {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 59.0,
            electricityproduced: 46504.18645,
            heatproduced: 42783.851534,
            electricitysavingspa: 16276.4652575,
            heatsavingspa: 2994.86960738,
            fertiliser: 28835
          },
          'Grass silage': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 59.0,
            electricityproduced: 46504.18645,
            heatproduced: 42783.851534,
            electricitysavingspa: 16276.4652575,
            heatsavingspa: 2994.86960738,
            fertiliser: 28835
          },
          'Pulp & Paper Waste': {
            feasibility: 'Y',
            limit: 4000,
            technology: 'Pyrolysis',
            kgperday: 1000,
            energycontent: 13.5,
            electricityproduced: 410953.5,
            heatproduced: 684922.5,
            electricitysavingspa: 143833.725,
            heatsavingspa: 47944.575,
            fertiliser: 91250
          },
          'Textile Waste': {
            feasibility: 'Y',
            limit: 4000,
            technology: 'Pyrolysis',
            kgperday: 1000,
            energycontent: 17.0,
            electricityproduced: 517497.0,
            heatproduced: 862495.0,
            electricitysavingspa: 181123.95,
            heatsavingspa: 60374.65,
            fertiliser: 91250
          },
          'PE Plastic': {
            feasibility: 'Y',
            limit: 4000,
            technology: 'Pyrolysis',
            kgperday: 1000,
            energycontent: 46.0,
            electricityproduced: 1400286.0,
            heatproduced: 2333810.0,
            electricitysavingspa: 490100.1,
            heatsavingspa: 163366.7,
            fertiliser: 91250
          },
          SRF: {
            feasibility: 'Y',
            limit: 4000,
            technology: 'Pyrolysis',
            kgperday: 1000,
            energycontent: 22.0,
            electricityproduced: 669702.0,
            heatproduced: 1116170.0,
            electricitysavingspa: 234395.7,
            heatsavingspa: 78131.9,
            fertiliser: 91250
          },
          RDF: {
            feasibility: 'Y',
            limit: 4000,
            technology: 'Pyrolysis',
            kgperday: 1000,
            energycontent: 18.0,
            electricityproduced: 547938.0,
            heatproduced: 913230.0000000001,
            electricitysavingspa: 191778.3,
            heatsavingspa: 63926.1,
            fertiliser: 91250
          },
          'PP Plastic': {
            feasibility: 'Y',
            limit: 4000,
            technology: 'Pyrolysis',
            kgperday: 1000,
            energycontent: 46.0,
            electricityproduced: 1400286.0,
            heatproduced: 2333810.0,
            electricitysavingspa: 490100.1,
            heatsavingspa: 163366.7,
            fertiliser: 91250
          },
          'PS Plastic': {
            feasibility: 'Y',
            limit: 4000,
            technology: 'Pyrolysis',
            kgperday: 1000,
            energycontent: 46.0,
            electricityproduced: 1400286.0,
            heatproduced: 2333810.0,
            electricitysavingspa: 490100.1,
            heatsavingspa: 163366.7,
            fertiliser: 91250
          },
          'PVC Plastic': {
            feasibility: 'Y',
            limit: 4000,
            technology: 'Pyrolysis',
            kgperday: 1000,
            energycontent: 25.0,
            electricityproduced: 761025.0,
            heatproduced: 1268375.0,
            electricitysavingspa: 266358.75,
            heatsavingspa: 88786.25,
            fertiliser: 91250
          },
          'PET Plastic': {
            feasibility: 'Y',
            limit: 4000,
            technology: 'Pyrolysis',
            kgperday: 1000,
            energycontent: 18.0,
            electricityproduced: 547938.0,
            heatproduced: 913230.0000000001,
            electricitysavingspa: 191778.3,
            heatsavingspa: 63926.1,
            fertiliser: 91250
          },
          Rubber: {
            feasibility: 'Y',
            limit: 4000,
            technology: 'Pyrolysis',
            kgperday: 1000,
            energycontent: 17.0,
            electricityproduced: 517497.0,
            heatproduced: 862495.0,
            electricitysavingspa: 181123.95,
            heatsavingspa: 60374.65,
            fertiliser: 91250
          },
          'Wood waste': {
            feasibility: 'Y',
            limit: 4000,
            technology: 'Pyrolysis',
            kgperday: 1000,
            energycontent: 14.0,
            electricityproduced: 426174.0,
            heatproduced: 710290.0,
            electricitysavingspa: 149160.9,
            heatsavingspa: 49720.3,
            fertiliser: 91250
          },
          'Municipal Solid Waste (MSW)': {
            feasibility: 'Y',
            limit: 4000,
            technology: 'Pyrolysis',
            kgperday: 1000,
            energycontent: 2.0,
            electricityproduced: 60882.0,
            heatproduced: 101470.0,
            electricitysavingspa: 21308.7,
            heatsavingspa: 7102.9,
            fertiliser: 91250
          },
          'Medical Waste': {
            feasibility: 'Y',
            limit: 4000,
            technology: 'Pyrolysis',
            kgperday: 1000,
            energycontent: 18.0,
            electricityproduced: 547938.0,
            heatproduced: 913230.0000000001,
            electricitysavingspa: 191778.3,
            heatsavingspa: 63926.1,
            fertiliser: 91250
          }
        }

        var d = data[document.querySelector('#colorselector').value]
        var feasible = d['feasibility'] == 'Y'
        var wt1 = document.querySelector('#colorselector')
        document.querySelector('#waste-type1').innerHTML = wt1.options[wt1.selectedIndex].text

        var wt2 = document.querySelector('#colorselector2')
        document.querySelector('#waste-type2').innerHTML = wt2.options[wt2.selectedIndex].text

        var minlimit = d['limit'] <= wt2.options[wt2.selectedIndex].value

        document.querySelector('#feasible').innerHTML = feasible
          ? (minlimit)?'Your project is feasible':'This feedstock amount is <u style="color:#ec8b5a;">too small</u>'
          : 'This feedstock is <u style="color:#ec8b5a;">not</u> feasible'

        if (feasible & minlimit) {
          var calcimg = document.querySelector('#calc-img')
          if (calcimg.src.includes('Group14.png')) {
            calcimg.src = '/assets/cow 1 (1).png'
          } else {
            setTimeout(() => {
              calcimg.src = '/assets/Group14.png'
            }, 150)
          }

          var results = document.querySelector('#results')
          if (results.classList.contains('opacity-0')) {
            setTimeout(() => {
              document.getElementById('calculate').scrollIntoView({ behavior: 'smooth' })
            }, 500)
            results.classList.toggle('translate-y-full')
            setTimeout(() => {
              results.classList.toggle('opacity-0')
            }, 100)
          } else {
            results.classList.toggle('opacity-0')
            setTimeout(() => {
              results.classList.toggle('translate-y-full')
            }, 100)
            setTimeout(() => {
              document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' })
            }, 20)
          }

          const techs = { 'Anaerobic Digestion': 'Anaerobic Digestion', Pyrolysis: 'Pyrolysis' }
          document.querySelector('#matched-tech').innerHTML = techs[d['technology']]
          document.querySelector('#matched-img').src = '/assets/medres/' + d['technology'] + '.jpg'

          for (var key in d) {
            if (key != 'feasibility') {
              var el = document.querySelector('#' + key)
              if (el) {
                el.innerHTML = Math.round(d[key] * wt2.value / d['kgperday'], 0).toLocaleString()
              }
            }
          }
        }

        var calcselectors = document.querySelector('#calc-selectors')
        calcselectors.classList.toggle('translate-x-full')
        calcselectors.classList.toggle('opacity-0')

        var calcmessage = document.querySelector('#calc-message')
        calcmessage.classList.toggle('-translate-x-full')
        calcmessage.classList.toggle('opacity-0')

        var calcbutton = document.querySelector('#calc-button')
        // calcbutton.classList.toggle('-translate-x-full')
        calcbutton.classList.toggle('-translate-x-[338px]')
        var calctext = document.querySelector('#calc-button span').innerHTML
        if (calctext == 'Calculate') {
          document.querySelector('#calc-button span').innerHTML = 'Start over'
        } else {
          document.querySelector('#calc-button span').innerHTML = 'Calculate'
        }
        calcbutton.classList.toggle('w-1/4')
        calcbutton.classList.toggle('w-1/3')

        var callbutton = document.querySelector('#call-button')
        callbutton.classList.toggle('-translate-x-full')
        callbutton.classList.toggle('opacity-0')
        setTimeout(() => {
          callbutton.classList.toggle('glow')
        }, 3000)

        var callbutton2 = document.querySelector('#call-button2')
        callbutton2.classList.toggle('-translate-x-full')
        callbutton2.classList.toggle('opacity-0')
      }
    </script>
    <div class="w-[1260px] flex justify-between items-center pt-[30px] pb-[50px]">
      <div class="text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans w-[530px]">
        Copyright © 2023 Power for Planet
      </div>
      <div class="flex-1 flex justify-end items-center gap-10">
        <div class="text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans underline">Privacy Policy</div>
        <div class="flex items-center gap-5">
          <img
            src="/assets/new/mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy.svg"
            alt="mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy"
            class="h-6 w-6" />
          <img
            src="/assets/new/mditwitter-31-social-31-right-31-footer-31-03Greenenergy.svg"
            alt="mditwitter-31-social-31-right-31-footer-31-03Greenenergy"
            class="h-6 w-6" />
          <img
            src="/assets/new/CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy.svg"
            alt="CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy"
            class="h-6 w-6" />
        </div>
      </div>
    </div>
  </div>
  <script>
    function toggleElement(k) {
      var element = document.querySelector('#' + k)
      toggleAlOff()
      // element.classList.contains('opacity-0')
      setTimeout(() => {
        element.classList.toggle('-translate-x-full')
        element.classList.toggle('opacity-0')
      }, 10)
    }

    function toggleElementOff(k) {
      var element = document.querySelector('#' + k)
      // element.classList.toggle('hidden')
      element.classList.add('-translate-x-full')
      element.classList.add('opacity-0')
    }

    function toggleAlOff() {
      toggleElementOff('food')
      toggleElementOff('cow')
      toggleElementOff('bottle')
      toggleElementOff('technology')
    }

    function toggleAll() {
      toggleElement('food')
      toggleElement('cow')
      toggleElement('bottle')
      toggleElement('technology')
    }

    function grow() {
      var element = document.querySelector('#field')
      element.classList.toggle('fixed')
      element.classList.toggle('top-0')
      element.classList.toggle('left-0')
      element.classList.toggle('fullw')

      var growbuttons = document.querySelector('.growbuttons')
      growbuttons.classList.toggle('fullb')

      var cowpanel = document.querySelector('#cow-panel')
      cowpanel.classList.toggle('fullc')

      var techbuttons = document.querySelector('.techbuttons')
      techbuttons.classList.toggle('fulld')

      document.querySelector('#cow-shadow').classList.toggle('hidden')
    }

    setTimeout(() => {
      toggleAll()
      toggleAll()
    }, 100)
  </script>
</div>
