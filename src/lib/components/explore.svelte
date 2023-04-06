<script lang="ts">
  import { site } from '$lib/config/site'
</script>

<div class="w-full h-full">
  <div class=" bg-gray-100 w-full h-full">
    <section class="">
      <div class="container mx-auto pt-10">
        <div class="flex md:flex-row flex-col items-center rounded-lg bg-white w-full">
          <div class=" md:w-3/5 w-full p-14 pt-5 pr-14">
            <a
              href=""
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
    </section>

    <!-- ===================after landing page =================== -->
    <section class="bg-white mt-5 container mx-auto p-10" style="font-family: 'Poppins', sans-serif;">
      <div class=" grid gap-4 md:grid-cols-5 grid-cols-2 w-full">
        <div
          href="#"
          class="p-3 relative bg-[#DDF3EA] rounded-lg leading-6 text-[#2E3855] mb-0 text-start font-bold text-xl tracking-wider after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent">
          <div class="flex justify-center h-32"><img src="/assets/pet bottle 1.png" alt="" /></div>
          <div class="w-2/4">Plastic waste</div>
        </div>
        <div
          href="#"
          class="p-3 relative bg-[#DDF3EA] rounded-lg leading-6 text-[#2E3855] mb-0 text-start font-bold text-xl tracking-wider after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent">
          <div class="flex justify-center h-32"><img src="/assets/Group 7 (2).png" alt="" /></div>
          <div class="w-2/4">Food waste</div>
        </div>
        <div
          href="#"
          class="p-3 relative bg-[#DDF3EA] rounded-lg leading-6 text-[#2E3855] mb-0 text-start font-bold text-xl tracking-wider after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent">
          <div class="flex justify-center h-32"><img src="/assets/Group 7 (3).png" alt="" /></div>
          <div class="w-2/4">Animal waste</div>
        </div>
        <div
          href="#"
          class="p-3 relative bg-[#DDF3EA] rounded-lg leading-6 text-[#2E3855] mb-0 text-start font-bold text-xl tracking-wider after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent">
          <div class="flex justify-center h-32"><img src="/assets/Group 7.png" alt="" /></div>
          <div class="w-2/4">Agricultural waste</div>
        </div>
        <div
          href="#"
          class="p-3 relative bg-[#DDF3EA] rounded-lg leading-6 text-[#2E3855] mb-0 text-start font-bold text-xl tracking-wider after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent">
          <div class="flex justify-center h-32"><img src="/assets/Group 7 (1).png" alt="" /></div>
          <div class="w-2/4">Wood waste</div>
        </div>
      </div>

      <!-- <div class="flex justify-center">
        <h2>How it works</h2>
      </div>
      <div class="flex w-full container mx-auto">
        <div class="w-1/5 bg-[#E7F5F5] rounded-3xl space-x-1">
          <div class=" mx-auto">
            <img src="/assets/pet bottle 1.png" alt="" />
          </div>
          <div>
            <p>Plastic waste</p>
          </div>
        </div>
        <div class="w-1/5 bg-[#E7F5F5] rounded-3xl">
          <div>
            <img class="w-full" src="/assets/Group 7 (2).png" alt="" />
          </div>
          <div>
            <p>Food waste</p>
          </div>
        </div>
        <div class="w-1/5 bg-[#E7F5F5] rounded-3xl">
          <div>
            <img class="w-full" src="/assets/Group 7 (3).png" alt="" />
          </div>
        </div>
        <div class="w-1/5 bg-[#E7F5F5] rounded-3xl">
          <div>
            <img class="w-full" src="/assets/Group 7.png" alt="" />
          </div>
        </div>
        <div class="w-1/5 bg-[#E7F5F5] rounded-3xl">
          <div><img class="w-full" src="/assets/Group 7 (1).png" alt="" /></div>
        </div>
      </div> -->
      <div class="flex w-full pt-5">
        <div
          href="#"
          class="arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-center after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent" />
        <div
          href="#"
          class="arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-center after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent" />
        <div
          href="#"
          class="arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-end after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent font-semibold text-base tracking-wider uppercase">
          Power from
        </div>
        <div
          href="#"
          class="arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-start after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent font-semibold text-base pl-1 tracking-wider uppercase">
          waste technology
        </div>
        <div
          href="#"
          class="arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-center after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent" />
        <div
          href="#"
          class="arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-center after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent" />
      </div>
      <div class=" grid gap-4 grid-cols-6 w-full">
        <div
          href="#"
          class="arrow arrow-bottom relative bg-[#DDF3EA] leading-10 text-[#2E3855] text-center rounded-lg font-bold text-xl">
          Liquid fertiliser
        </div>
        <div
          href="#"
          class="arrow arrow-bottom relative bg-[#DDF3EA] leading-10 text-[#2E3855] text-center rounded-lg rounded-lg font-bold text-xl">
          Solid digestate
        </div>
        <div
          href="#"
          class="arrow arrow-bottom relative bg-[#DDF3EA] rounded-lg leading-10 text-[#2E3855] mb-0 text-center rounded-lg font-bold text-xl after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent">
          Biogas
        </div>
        <div
          href="#"
          class="arrow arrow-bottom relative bg-[#DDF3EA] rounded-lg leading-10 text-[#2E3855] mb-0 text-center rounded-lg font-bold text-xl after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent">
          Syngas
        </div>
        <div
          href="#"
          class="arrow arrow-bottom relative bg-[#DDF3EA] rounded-lg leading-10 text-[#2E3855] text-center rounded-lg font-bold text-xl">
          Bio-oil
        </div>
        <div
          href="#"
          class="arrow arrow-bottom relative bg-[#DDF3EA] rounded-lg leading-10 text-[#2E3855] text-center rounded-lg font-bold text-xl">
          Biochar
        </div>
      </div>
      <div class="flex justify-center mt-10">
        <div
          href="#"
          class="arrow arrow-bottom relative w-1/3 bg-gradient-to-r from-[#FF5252] to-[#59AFFF] rounded-lg rounded-lg font-bold text-xl leading-10 text-[#2E3855] mb-0 text-center after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[gradient-to-r from-[#FF5252] to-[#59AFFF]] after:border-r-transparent after:border-l-transparent">
          Heat / Cool
        </div>
      </div>
      <div class="flex justify-center mt-10">
        <div
          href="#"
          class="arrow arrow-bottom relative w-1/3 bg-[#D0E6F2] rounded-lg leading-10 text-[#2E3855] mb-0 rounded-lg font-bold text-xl text-center">
          Electricity
        </div>
      </div>
    </section>
  </div>
  <!-- <br /> -->
  <img class="transition-shadow z-10 w-full h-full" src="/assets/field.png" alt="" />
</div>
