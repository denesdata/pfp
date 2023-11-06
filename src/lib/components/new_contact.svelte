<script>
  import { query_selector_all } from 'svelte/internal'
  import Select from 'svelte-select'

  let collection = [
    { value: 'cow', label: 'Cow manure' },
    { value: 'food', label: 'Food waste' },
    { value: 'bottle', label: 'PW plastic' },
    { value: 'technology', label: 'Technology' }
  ]

  let selected
</script>

<div class="flex-col flex items-center gap-10 h-fit mt-20 px-5 sm:px-0">
  <style>
    form input {
      border: none;
      outline: none;
    }
  </style>
  <div class="flex-col w-full flex items-start gap-[60px] sm:max-w-[1060px] rounded-[20px]">
    <div
      class="w-full flex-col flex justify-center items-center gap-2.5 text-4xl leading-[46px] font-bold text-center text-[#2e3855] font-Poppins">
      <div>Contact us</div>
    </div>
    <div class="w-full flex-col flex items-start gap-5">
      <div class="bg-white w-full flex-col flex items-center gap-[50px] p-5 sm:px-[50px] py-10 rounded-[20px]">
        <div class="text-2xl leading-[33px] font-bold text-center text-[#2e3855] font-Poppins">
          Contact us and turn your green energy vision into reality
        </div>
        <div class="w-full flex-col gap-5 flex items-center">
          <div class="bg-[#e7f5f5] w-full pt-[0px] flex-col flex justify-center items-center rounded-[20px] align-top">
            <button onclick="toggleElement('calendar')">
              <div class="w-full flex items-center gap-[50px] pr-0 sm:pr-[50px]">
                <div
                  id="calendar-heading"
                  class="bg-pfp-green bg-none duration-100 hidden sm:flex justify-center items-center gap-2.5 px-[50px] py-8 rounded-l-[20px]">
                  <img
                    src="/assets/new/calendar-days.svg"
                    alt="calendar-days"
                    class="h-10 w-10 grayscale contrast-200 invert" />
                </div>
                <div
                  class="text-2xl leading-[33px] font-bold text-center text-[#2e3855] font-Poppins w-full sm:w-[596px] p-4 sm:p-0">
                  Schedule a conversation with us
                </div>
                <div class="hidden sm:flex items-center gap-2.5 pl-[50px]">
                  <img
                    id="calendar-chevron"
                    src="/assets/new/chevron-down.svg"
                    alt="chevron-down"
                    class="h-6 w-6 rotate-180 duration-180" />
                </div>
              </div>
            </button>
            <div id="calendar" class="bg-none overflow-hidden duration-300 h-[0px] w-full">
              <iframe
                style="background:none; filter: contrast(1.07); margin-bottom:-100px;"
                height="1100"
                width="100%"
                frameborder="0"
                allowfullscreen=""
                src="https://calendly.com/contact-9g8/introductory-call?hide_landing_page_details=1&hide_gdpr_banner=1&text_color=394e6a&primary_color=3f9378&back=1"
                title="book" />
            </div>
          </div>
          <div class="bg-[#e7f5f5] w-full pt-[0px] flex-col flex justify-center items-center rounded-[20px] align-top">
            <button onclick="toggleElement2('contactform')">
              <div class="w-full flex items-center gap-[50px] pr-0 sm:pr-[50px]">
                <div
                  id="contactform-heading"
                  class="bg-pfp-green bg-none duration-100 hidden sm:flex justify-center items-center gap-2.5 px-[50px] py-8 rounded-l-[20px]">
                  <img src="/assets/new/mail.svg" alt="mail" class="h-10 w-10 grayscale contrast-200 invert" />
                </div>
                <div
                  class="text-2xl leading-[33px] font-bold text-center text-[#2e3855] font-Poppins w-full sm:w-[596px] p-4 sm:p-0">
                  Message us through our contact form
                </div>
                <div class="hidden sm:flex items-center gap-2.5 pl-[50px]">
                  <img
                    id="contactform-chevron"
                    src="/assets/new/chevron-down.svg"
                    alt="chevron-down"
                    class="h-6 w-6 rotate-180 duration-180" />
                </div>
              </div>
            </button>
            <form
              id="contactform"
              class="bg-none overflow-hidden duration-300 w-full h-[0px]"
              action="https://api.staticforms.xyz/submit"
              method="post">
              <div class="overflow-hidden flex-col flex justify-center items-center gap-[30px] pb-10 rounded-[20px] z-[2]">
                <div
                  class="w-[600px] flex flex-col sm:flex-row justify-center items-center gap-[30px] leading-[26px] text-[#2e3855] font-PublicSans">
                  <div class="flex-1 flex-col flex items-start gap-2">
                    <div class="text-sm font-bold">Name*</div>
                    <div
                      class="bg-white w-full flex items-center gap-2.5 px-[18px] py-2.5 rounded-[6px] border border-[#2e3855] text-base font-medium">
                      <input class="w-[269px] sm:w-[299px]" type="text" name="name" placeholder="Your Name" required />
                    </div>
                  </div>
                  <div class="flex-1 flex-col flex items-start gap-2">
                    <div class="text-sm font-bold">Email*</div>
                    <div
                      class="bg-white w-full flex items-center gap-2.5 px-[18px] py-2.5 rounded-[6px] border border-[#2e3855] text-base font-medium">
                      <input class="w-[269px] sm:w-[299px]" type="email" name="email" placeholder="Your email" required />
                    </div>
                  </div>
                </div>
                <div class="w-[700px] flex flex-col sm:flex-row justify-center items-center gap-[30px]">
                  <div class="flex-1 flex-col flex items-start gap-2 leading-[26px] text-[#2e3855] font-PublicSans">
                    <div class="text-sm font-bold">Organization/Company name (optional)</div>
                    <div
                      class="bg-white w-full flex items-center gap-2.5 px-[18px] py-2.5 rounded-[6px] border border-[#2e3855] text-base font-medium">
                      <input class="w-[269px] sm:w-[299px]" type="text" name="company" placeholder="Your company" />
                    </div>
                  </div>
                  <div class="flex-1 flex-col flex items-start gap-2">
                    <div class="text-sm leading-[26px] font-bold text-[#2e3855] font-PublicSans">Type of query/contact*</div>
                    <div
                      class="bg-white w-full flex items-center gap-2.5 px-0 py-0 rounded-[6px] border border-[#2e3855]">
                      <div class="text-base leading-[26px] font-medium text-[#909090] font-PublicSans w-full">
                        <style>
                          input {
                            border: none !important;
                          }
                        </style>
                        <div class="w-[299px] pt-0">
                          <Select
                            items={collection}
                            class="w-full"
                            bind:value={selected}
                            on:change={() => toggleElement(selected.value)} />
                        </div>
                        <!-- <button aria-label="search" class="hidden btn btn-square btn-ghost ml-[-45px]">
                          <span class="i-heroicons-outline-search" />
                        </button> -->
                      </div>
                      <!-- <img src="/assets/new/chevron-down.svg" alt="chevron-down" class="h-6 w-6" /> -->
                    </div>
                  </div>
                </div>
                <div
                  class="w-[300px] sm:w-[600px] h-5/12 flex justify-center items-center gap-[30px] leading-[26px] font-PublicSans">
                  <div class="h-full flex-1 flex-col flex items-start gap-2">
                    <div class="text-sm font-bold text-[#2e3855]">Your message*</div>
                    <div
                      class="bg-white min-h-[150px] w-full flex-1 flex items-start gap-2.5 rounded-[6px] p-4 border border-[#2e3855] text-base font-medium text-[#909090]">
                      <textarea class="w-[264px] sm:w-[664px] min-h-[150px]" name="message" required />
                    </div>
                  </div>
                </div>
                <input type="text" name="honeypot" style="display:none" />
                <input type="hidden" name="accessKey" value="b3ab5267-ffe0-4a59-be25-07b9a27e4335" />
                <input type="hidden" name="subject" value="PFP Contact us form submission" />
                <input type="hidden" name="replyTo" value="@" />
                <input type="hidden" name="redirectTo" id="redirect" />
                <button type="submit">
                  <div
                    class="bg-[#3f9378] h-11 flex justify-center items-center gap-2.5 px-5 py-2 rounded-[6px] text-base leading-[20px] font-normal tracking-wider text-white">
                    <img
                      src="/assets/new/arrow-right-circle.svg"
                      alt="arrow-right-circle-31-CTA-31-Frame24-31-Frame24-31-Frame24-31-Frame18-31-Gridindependence-31-blockrow1-31-wrapper-31-03Greenenergy"
                      class="h-5 w-5" />
                    Send message
                  </div>
                </button>
              </div>
            </form>
          </div>
          <script>
            function toggleElement(k) {
              var element = document.querySelector('#' + k)
              element.classList.toggle('h-[600px]')
              element.classList.toggle('sm:h-[1000px]')
              toggleElementX(k)
            }

            function toggleElement2(k) {
              var element = document.querySelector('#' + k)
              element.classList.toggle('h-[750px]')
              element.classList.toggle('sm:h-[540px]')
              toggleElementX(k)
            }

            function toggleElementX(k) {
              document.querySelector('#' + k + '-chevron').classList.toggle('rotate-180')
              document.querySelector('#' + k + '-heading').classList.toggle('bg-pfp-green')
              document.querySelector('#' + k + '-heading').classList.toggle('grayscale')
              document.querySelector('#' + k + '-heading').classList.toggle('contrast-200')
              document.querySelector('#' + k + '-heading').classList.toggle('invert')
            }

            setTimeout(() => {
              document.querySelector('#redirect').value = window.location.href
            }, 1000)
          </script>
        </div>
      </div>
      <div class="bg-white w-full flex-col flex items-center gap-[50px] px-[50px] py-10 rounded-[20px]">
        <div class="flex-col flex items-center gap-2 text-2xl leading-[33px] font-bold text-center text-[#2e3855] font-Poppins">
          <div>Find us</div>
        </div>
        <div class="w-full flex-col flex items-center gap-5">
          <div class="w-full flex flex-col sm:flex-row items-start gap-5">
            <div class="w-full h-full bg-[#e7f5f5] flex-1 flex-col flex items-center gap-6 p-10 rounded-[20px]">
              <div class="w-full flex-col flex justify-center items-center gap-6">
                <div class="bg-[#2e3855] flex justify-center items-center gap-2.5 p-5 rounded-[40px]">
                  <img src="/assets/new/map-pin.svg" alt="map-pin" class="h-10 w-10" />
                </div>
                <div class="w-full flex-col flex items-start gap-2 font-bold text-center text-[#2e3855]">
                  <div class="w-full flex-col flex items-center">
                    <div class="text-xl leading-[34px] font-Poppins w-full">Power for Planet</div>
                    <div class="text-sm leading-[26px] font-PublicSans w-full">
                      78 Pall Mall SW1Y 5ES London, United Kingdom
                    </div>
                    <a
                      href="https://www.google.com/maps/place/78+Pall+Mall,+St.+James's,+London+SW1Y+5ES/@51.5057924,-0.1362653,19z/data=!4m6!3m5!1s0x487604d7477ba0bb:0x5ecb442822d2e0e!8m2!3d51.5056999!4d-0.1359853!16s%2Fg%2F1tj90_zr?entry=ttu"
                      target="_blank">
                      <img src="/assets/new/map.svg" class="mt-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-[#e7f5f5] w-full h-full flex-1 flex-col flex items-center gap-6 p-10 pb-20 rounded-[20px]">
              <div class="w-full flex-1 flex-col flex items-center gap-6">
                <div class="bg-[#2e3855] flex justify-center items-center gap-2.5 p-5 rounded-[40px]">
                  <img src="/assets/new/message-circle.svg" alt="message-circle" class="h-10 w-10" />
                </div>
                <div class="w-full flex-col flex items-start gap-2 font-bold text-center text-[#2e3855]">
                  <div class="w-full flex-col h-full flex items-start">
                    <div class="text-xl leading-[34px] font-Poppins w-full">Contact us</div>
                    <div class="text-sm leading-[26px] font-PublicSans h-[52px] w-full">
                      +44 7796 302 102 dermot@powerforplanet.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full flex items-start gap-5">
            <div class="bg-[#e7f5f5] flex-1 flex-col flex items-center gap-6 p-10 rounded-[20px]">
              <div class="w-full flex flex-col sm:flex-row justify-center items-center gap-10">
                <div class="text-xl leading-[34px] font-bold text-center text-[#2e3855] font-Poppins">
                  Follow us on social media
                </div>
                <div class="flex justify-center items-center gap-4">
                  <img src="/assets/new/mdi_linkedin.svg" alt="mdi:linkedin" class="h-10 w-10" />
                  <img src="/assets/new/mdi_twitter.svg" alt="mdi:twitter" class="h-10 w-10" />
                  <img src="/assets/new/mdi_spotify.svg" alt="mdi:spotify" class="h-10 w-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full sm:w-[1060px] flex justify-between items-center pt-[30px] pb-[50px] ml-3 sm:ml-0">
      <div class="text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans w-[130px] sm:w-[530px]">
        Copyright © 2023 Power for Planet
      </div>
      <div class="flex-1 flex justify-end items-center gap-10 pr-10 sm:p-0">
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
            src="/assets/new/mdi_spotify.svg"
            alt="CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy"
            class="h-6 w-6" />
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  form input {
    border: none;
    outline: none;
  }
</style>
