<div class="flex-col flex items-center gap-10 h-fit mt-20">
  <div class="flex-col w-full flex items-start gap-[60px] max-w-[1060px] rounded-[20px]">
    <div
      class="w-full flex-col flex justify-center items-center gap-2.5 text-4xl leading-[46px] font-bold text-center text-[#2e3855] font-Poppins">
      <div>Contact us</div>
    </div>
    <div class="w-full flex-col flex items-start gap-5">
      <div class="bg-white w-full flex-col flex items-center gap-[50px] px-[50px] py-10 rounded-[20px]">
        <div class="text-2xl leading-[33px] font-bold text-center text-[#2e3855] font-Poppins">
          Contact us and turn your green energy vision into reality
        </div>
        <div class="w-full flex-col gap-5 flex items-center">
          <div class="bg-[#e7f5f5] w-full pt-[0px] flex-col flex justify-center items-center rounded-[20px] align-top">
            <button onclick="toggleElement('calendar')">
              <div class="w-full flex items-center gap-[50px] pr-[50px]">
                <div
                  id="calendar-heading"
                  class="bg-pfp-green bg-none duration-100 flex justify-center items-center gap-2.5 px-[50px] py-8 rounded-l-[20px]">
                  <img
                    src="/assets/new/calendar-days.svg"
                    alt="calendar-days"
                    class="h-10 w-10 grayscale contrast-200 invert" />
                </div>
                <div class="text-2xl leading-[33px] font-bold text-center text-[#2e3855] font-Poppins w-[596px]">
                  Schedule a conversation with us
                </div>
                <div class="flex items-center gap-2.5 pl-[50px]">
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
                src="https://calendly.com/csaladenes-6ee/30min?hide_landing_page_details=1&hide_gdpr_banner=1&text_color=394e6a&primary_color=3f9378&back=1&month=2023-07"
                title="book" />
            </div>
          </div>
          <div class="bg-[#e7f5f5] w-full pt-[0px] flex-col flex justify-center items-center rounded-[20px] align-top">
            <button onclick="toggleElement2('contactform')">
              <div class="w-full flex items-center gap-[50px] pr-[50px]">
                <div
                  id="contactform-heading"
                  class="bg-pfp-green bg-none duration-100 flex justify-center items-center gap-2.5 px-[50px] py-8 rounded-l-[20px]">
                  <img src="/assets/new/mail.svg" alt="mail" class="h-10 w-10 grayscale contrast-200 invert" />
                </div>
                <div class="text-2xl leading-[33px] font-bold text-center text-[#2e3855] font-Poppins w-[596px]">
                  Message us through our contact form
                </div>
                <div class="flex items-center gap-2.5 pl-[50px]">
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
              class="bg-none overflow-hidden duration-300 h-[0px] w-full"
              action="https://formspree.io/f/xnqkvgvn"
              method="POST">
              <div class="overflow-hidden flex-col flex justify-center items-center gap-[30px] pb-10 rounded-[20px] z-[2]">
                <div
                  class="w-[600px] flex justify-center items-center gap-[30px] leading-[26px] text-[#2e3855] font-PublicSans">
                  <div class="flex-1 flex-col flex items-start gap-2">
                    <div class="text-sm font-bold">Name*</div>
                    <div
                      class="bg-white w-full flex items-center gap-2.5 px-[18px] py-2.5 rounded-[6px] border border-[#2e3855] text-base font-medium">
                      <label>
                        <input class="w-[299px]" type="text" name="name" />
                      </label>
                    </div>
                  </div>
                  <div class="flex-1 flex-col flex items-start gap-2">
                    <div class="text-sm font-bold">Email*</div>
                    <div
                      class="bg-white w-full flex items-center gap-2.5 px-[18px] py-2.5 rounded-[6px] border border-[#2e3855] text-base font-medium">
                      <label>
                        <input class="w-[299px]" type="email" name="email" />
                      </label>
                    </div>
                  </div>
                </div>
                <div class="w-[700px] flex justify-center items-center gap-[30px]">
                  <div class="flex-1 flex-col flex items-start gap-2 leading-[26px] text-[#2e3855] font-PublicSans">
                    <div class="text-sm font-bold">Organization/Company name (optional)</div>
                    <div
                      class="bg-white w-full flex items-center gap-2.5 px-[18px] py-2.5 rounded-[6px] border border-[#2e3855] text-base font-medium">
                      <label>
                        <input class="w-[299px]" type="text" name="company" />
                      </label>
                    </div>
                  </div>
                  <div class="flex-1 flex-col flex items-start gap-2">
                    <div class="text-sm leading-[26px] font-bold text-[#2e3855] font-PublicSans">Type of query/contact*</div>
                    <div
                      class="bg-white w-full flex items-center gap-2.5 px-[18px] py-2.5 rounded-[6px] border border-[#2e3855]">
                      <div class="text-base leading-[26px] font-medium text-[#909090] font-PublicSans w-[265px]">Select...</div>
                      <img src="/assets/new/chevron-down.svg" alt="chevron-down" class="h-6 w-6" />
                    </div>
                  </div>
                </div>
                <div class="w-[600px] h-5/12 flex justify-center items-center gap-[30px] leading-[26px] font-PublicSans">
                  <div class="h-full flex-1 flex-col flex items-start gap-2">
                    <div class="text-sm font-bold text-[#2e3855]">Your message*</div>
                    <div
                      class="bg-white min-h-[150px] w-full flex-1 flex items-start gap-2.5 px-[18px] py-2.5 rounded-[6px] border border-[#2e3855] text-base font-medium text-[#909090]">
                      <label>
                        <textarea class="w-[664px]" type="text" name="message" />
                      </label>
                    </div>
                  </div>
                </div>
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
              element.classList.toggle('h-[1000px]')
              toggleElementX(k)
            }

            function toggleElement2(k) {
              var element = document.querySelector('#' + k)
              element.classList.toggle('h-[500px]')
              toggleElementX(k)
            }

            function toggleElementX(k) {
              document.querySelector('#' + k + '-chevron').classList.toggle('rotate-180')
              document.querySelector('#' + k + '-heading').classList.toggle('bg-pfp-green')
              document.querySelector('#' + k + '-heading').classList.toggle('grayscale')
              document.querySelector('#' + k + '-heading').classList.toggle('contrast-200')
              document.querySelector('#' + k + '-heading').classList.toggle('invert')
            }
          </script>
        </div>
      </div>
      <div class="bg-white w-full flex-col flex items-center gap-[50px] px-[50px] py-10 rounded-[20px]">
        <div class="flex-col flex items-center gap-2 text-2xl leading-[33px] font-bold text-center text-[#2e3855] font-Poppins">
          <div>Find us</div>
        </div>
        <div class="w-full flex-col flex items-center gap-5">
          <div class="w-full flex items-start gap-5">
            <div class=" h-full bg-[#e7f5f5] flex-1 flex-col flex items-center gap-6 p-10 rounded-[20px]">
              <div class="w-full flex-col flex justify-center items-center gap-6">
                <div class="bg-[#2e3855] flex justify-center items-center gap-2.5 p-5 rounded-[40px]">
                  <img src="/assets/new/map-pin.svg" alt="map-pin" class="h-10 w-10" />
                </div>
                <div class="w-full flex-col flex items-start gap-2 font-bold text-center text-[#2e3855]">
                  <div class="w-full flex-col flex items-center">
                    <div class="text-xl leading-[34px] font-Poppins w-[390px]">Power for Planet</div>
                    <div class="text-sm leading-[26px] font-PublicSans w-[390px]">
                      78 Pall Mall SW1Y 5ES London, United Kingdom
                    </div>
                    <a
                      href="https://www.google.com/maps/place/78+Pall+Mall,+St.+James's,+London+SW1Y+5ES/@51.5057924,-0.1362653,19z/data=!4m6!3m5!1s0x487604d7477ba0bb:0x5ecb442822d2e0e!8m2!3d51.5056999!4d-0.1359853!16s%2Fg%2F1tj90_zr?entry=ttu"
                      target="_blank">
                      <img src="/assets/new/map.png" class="mt-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-[#e7f5f5] h-full flex-1 flex-col flex items-center gap-6 p-10 pb-20 rounded-[20px]">
              <div class="w-full flex-1 flex-col flex items-center gap-6">
                <div class="bg-[#2e3855] flex justify-center items-center gap-2.5 p-5 rounded-[40px]">
                  <img src="/assets/new/message-circle.svg" alt="message-circle" class="h-10 w-10" />
                </div>
                <div class="w-full flex-col flex items-start gap-2 font-bold text-center text-[#2e3855]">
                  <div class="w-full flex-col h-full flex items-start">
                    <div class="text-xl leading-[34px] font-Poppins w-[390px]">Contact us</div>
                    <div class="text-sm leading-[26px] font-PublicSans h-[52px] w-[390px]">
                      +44 7796 302 102 dermot@powerforplanet.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full flex items-start gap-5">
            <div class="bg-[#e7f5f5] flex-1 flex-col flex items-center gap-6 p-10 rounded-[20px]">
              <div class="w-full flex justify-center items-center gap-10">
                <div class="text-xl leading-[34px] font-bold text-center text-[#2e3855] font-Poppins">
                  Follow us on social media
                </div>
                <div class="flex justify-center items-center gap-4">
                  <img src="/assets/new/mdi_linkedin.svg" alt="mdi:linkedin" class="h-10 w-10" />
                  <img src="/assets/new/mdi_twitter.svg" alt="mdi:twitter" class="h-10 w-10" />
                  <img src="/assets/new/mdi_instagram.svg" alt="mdi:instagram" class="h-10 w-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-[1060px] flex justify-between items-center pt-[30px] pb-[50px]">
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
</div>
