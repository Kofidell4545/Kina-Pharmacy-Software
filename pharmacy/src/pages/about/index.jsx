import React from "react";
import { Helmet } from "react-helmet";
import profile from "../../assets/KINA PHARMACY PROFILE IMG.webp";
import CEO from "../../assets/CEO IMG.jpeg";
import welcome from "../../assets/ABOUT IMG.jpg";

const About = () => {
  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <div className="relative flex flex-col sm:flex-row bg-purple-700">
        <img
          className="h-[300px] sm:h-[400px] w-full object-cover"
          src="https://globalnews.ca/wp-content/uploads/2022/12/pharmacy-canada-prescription-drugs.jpg?quality=85&strip=all&w=1200"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute w-[400px] bg-red-300 inset-0 flex flex-col items-center justify-center space-y-1 px-4 sm:px-0">
          <p className="text-2xl sm:text-5xl font-bold text-white">About Us</p>
          <p className="text-base sm:text-lg text-center text-white mx-4 sm:mx-80">
            Our mission is to provide you with a seamless and informative
            pharmacy experience. At Kina pharmacy, your health and satisfaction
            are our top priorities.
          </p>
        </div>
      </div>

      <section className="xl:mb-20 mb-10 xl:px-14 px-4 items-center content-center justify-center">
        <div className="w-full flex flex-col xl:flex-row-reverse items-center xl:mt-10 md:gap-8 py-12 xl:py-0">
          <div className="flex justify-center xl:w-[50%] w-full xl:h-[600px] h-auto xl:px-0 px-4">
            <img className="object-contain w-full h-full" src={welcome} />
          </div>
          <div className="w-full xl:w-[50%] flex flex-col items-center xl:items-start space-y-5 px-4 xl:px-0">
            <h2 className="w-full text-2xl xl:text-5xl font-bold xl:mt-0 mt-4">
              Highlight company impact by the numbers
            </h2>
            <div className="w-full space-y-4">
              <p className="text-base">
                Welcome to Kina Pharmacy, where your health and well-being are
                our top priorities. As CEO of Kina Pharmacy, I am proud to lead
                a team of dedicated professionals committed to providing
                exceptional pharmaceutical care and personalized.
              </p>
              <p className="text-base">
                At Kina Pharmacy, we believe in more than just dispensing
                medications; we are dedicated to fostering a holistic approach
                to health. Our experienced pharmacists are here to offer expert
                advice, answer your questions, and ensure that you receive the
                best possible care tailored to your unique needs.
              </p>
              <p className="text-base">
                Your trust and satisfaction are of utmost importance to us. We
                are here to support you on your health journey with compassion,
                professionalism, and a genuine commitment to your well-being.
              </p>
            </div>
            <div className="flex flex-row md:flex-col space-x-8 xl:space-x-0 xl:space-y-4">
              <div className="flex flex-wrap space-x-6 xl:space-x-40 ">
                <div className="flex flex-col space-y-3 mt-6 ">
                  <div className="text-2xl md:text-4xl font-bold">GHS300</div>
                  <div className="text-xs md:text-base">Customer savings</div>
                </div>
                <div className="flex flex-col space-y-3 mt-6">
                  <div className="text-2xl md:text-4xl font-bold">2m+</div>
                  <div className="text-xs md:text-base">Hours saved</div>
                </div>
              </div>
              <div className="flex flex-wrap space-x-6 xl:space-x-40 ">
                <div className="flex flex-col space-y-3 mt-6">
                  <div className="text-2xl md:text-4xl font-bold">200%</div>
                  <div className="text-xs md:text-base">
                    Year on year growth
                  </div>
                </div>
                <div className="flex flex-col space-y-3 mt-6">
                  <div className="text-2xl md:text-4xl font-bold">5k+</div>
                  <div className="text-xs md:text-base">Downloads</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="h-auto md:mt-30 mt-10 px-4 md:px-14 items-center justify-center w-full mb-[40px] sm:mb-20">
        <div className="items-center justify-center space-y-5 md:mx-80 px-4 md:px-0">
          <h1 className="text-2xl sm:text-5xl font-bold text-center">
            Our Values
          </h1>
          <p className="text-base text-center">
            Our pharmacy is guided by a set of core values that define our
            commitment to providing exceptional care and service to our
            community.
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row-reverse md:space-x-18 mt-12">
          <div className="flex justify-center md:w-[50%] w-full px-4 md:px-0">
            <img
              className="object-cover w-full md:w-full"
              src="https://www.shutterstock.com/image-photo/healthcare-pharmacist-woman-counter-medicine-600nw-2266047379.jpg"
            />
          </div>
          <div className="flex flex-row md:w-[50%] w-full md:space-x-10 md:pr-10 px-4 sm:px-0">
            <div className="flex flex-col w-[50%] pt-14 space-y-2">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios-filled/50/1A1A1A/portraits.png"
                alt="portraits"
              />
              <h1 className="font-bold">Customer Focus</h1>
              <p className="pb-8">
                We prioritize the needs and well-being of our customers above
                all else. By offering personalized care, attentive service, and
                tailored solutions, we strive to enhance the health and
                satisfaction of every individual we serve.
              </p>
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios-filled/50/1A1A1A/portraits.png"
                alt="portraits"
              />
              <h1 className="font-bold">Innovation and Excellence</h1>
              <p className="pb-14">
                We are committed to continuous improvement and innovation. By
                embracing new technologies, methods, and ideas, we strive to
                deliver the highest quality services and products. Our
                dedication to excellence ensures that we consistently exceed
                expectations and set new industry standards.
              </p>
            </div>
            <div className="flex flex-col w-[50%] pt-14 space-y-2">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios-filled/50/1A1A1A/portraits.png"
                alt="portraits"
              />
              <h1 className="font-bold">Integrity and Transparency</h1>
              <p className="pb-8">
                We believe in conducting our business with the utmost integrity
                and transparency. Our commitment to honesty, ethical practices,
                and clear communication builds trust with our customers,
                partners, and communities. We stand by our promises and are
                accountable for our actions.
              </p>
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios-filled/50/1A1A1A/portraits.png"
                alt="portraits"
              />
              <h1 className="font-bold">Teamwork and Collaboration</h1>
              <p className="pb-14">
                We recognize that our success is built on the strength of our
                team. By fostering a collaborative and supportive environment,
                we empower our employees to work together towards common goals.
                We value diverse perspectives and encourage open dialogue to
                create solutions that benefit everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sm:mt-30 sm:px-14 px-6 items-center justify-center w-full mb-[40px] sm:mb-20">
        <div className="items-center justify-center space-y-5 sm:mx-0">
          <h1 className="sm:text-5xl text-2xl font-bold">Introduce the team</h1>
          <p className="text-base">
            Our pharmacy is guided by a set of core values that define our
          </p>
        </div>

        <div className="w-[100%] flex flex-col mt-10">
          <div className="w-[100%] flex flex-col sm:flex-row-reverse gap-16 mb-16">
            <div className="sm:w-[50%] w-[100%] flex flex-row space-x-8 ">
              <div className="sm:h-[330px] h-auto w-[50%]">
                <img className="object-cover w-full h-full" src={CEO} />
              </div>
              <div className="flex flex-col w-[50%] space-y-2 ">
                <div className=" flex flex-col w-[100%] ">
                  <div className="space-y-4">
                    <h1 className="text-2xl font-bold">
                      Abdul Warith Abdul Rashid
                    </h1>
                    <h2>CEO</h2>
                    <p>
                      Abdul Warith Abdul Rashid is the visionary CEO of Kina
                      Pharmacy, a leading provider of quality healthcare
                      products and services, dedicated to enhancing community
                      well-being through innovation and personalized care.
                    </p>
                  </div>
                  <div className="flex flex-row space-x-3 mt-10">
                    <a href="https://www.linkedin.com/">
                      <img
                        width="30"
                        height="30"
                        src="https://img.icons8.com/ios-filled/50/1A1A1A/linkedin.png"
                        alt="linkedin"
                      />
                    </a>
                    <a href="https://twitter.com/">
                      <img
                        width="30"
                        height="30"
                        src="https://img.icons8.com/ios-filled/50/1A1A1A/twitter.png"
                        alt="twitter"
                      />
                    </a>
                    <a href="https://www.instagram.com/">
                      <img
                        width="30"
                        height="30"
                        src="https://img.icons8.com/ios-filled/50/1A1A1A/instagram.png"
                        alt="instagram"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:w-[50%] w-[100%] flex flex-row space-x-8 ">
              <div className="sm:h-[330px] h-auto w-[50%]">
                <img className="object-cover w-full h-full" src={profile} />
              </div>
              <div className="flex flex-col w-[50%] space-y-2 ">
                <div className=" flex flex-col w-[100%] ">
                  <div className="space-y-5">
                    <h1 className="text-2xl font-bold">
                      Dr. Junaid Abdul Rashid
                    </h1>
                    <h2>Pharmacist</h2>
                    <p>
                      Dr. Junaid Abdul Rashid is the dedicated pharmacist at
                      Kina Pharmacy, committed to delivering expert care and
                      personalized medication solutions to enhance the health
                      and well-being of the community
                    </p>
                  </div>
                  <div className="flex flex-row space-x-3 mt-10">
                    <a href="https://www.linkedin.com/">
                      <img
                        width="30"
                        height="30"
                        src="https://img.icons8.com/ios-filled/50/1A1A1A/linkedin.png"
                        alt="linkedin"
                      />
                    </a>
                    <a href="https://twitter.com/">
                      <img
                        width="30"
                        height="30"
                        src="https://img.icons8.com/ios-filled/50/1A1A1A/twitter.png"
                        alt="twitter"
                      />
                    </a>
                    <a href="https://www.instagram.com/">
                      <img
                        width="30"
                        height="30"
                        src="https://img.icons8.com/ios-filled/50/1A1A1A/instagram.png"
                        alt="instagram"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[100%] flex flex-col sm:flex-row-reverse gap-16 mb-16">
            <div className="sm:w-[50%] w-[100%] flex flex-row space-x-8">
              <div className="sm:h-[330px] h-auto w-[50%]">
                <img className="object-cover w-full h-full" src={profile} />
              </div>
              <div className="flex flex-col w-[50%] space-y-2 ">
                <div className=" flex flex-col w-[100%] ">
                  <div className="space-y-5">
                    <h1 className="text-2xl font-bold">
                      Nuru'ain Abdul Rashid
                    </h1>
                    <h2>Manager</h2>
                    <p>
                      Nuru'ain Abdul Rashid is the efficient and resourceful
                      manager of Kina Pharmacy, ensuring smooth operations and
                      exceptional customer service while driving the team
                      towards excellence in healthcare delivery
                    </p>
                  </div>
                  <div className="flex flex-row space-x-3 mt-10">
                    <a href="https://www.linkedin.com/">
                      <img
                        width="30"
                        height="30"
                        src="https://img.icons8.com/ios-filled/50/1A1A1A/linkedin.png"
                        alt="linkedin"
                      />
                    </a>
                    <a href="https://twitter.com/">
                      <img
                        width="30"
                        height="30"
                        src="https://img.icons8.com/ios-filled/50/1A1A1A/twitter.png"
                        alt="twitter"
                      />
                    </a>
                    <a href="https://www.instagram.com/">
                      <img
                        width="30"
                        height="30"
                        src="https://img.icons8.com/ios-filled/50/1A1A1A/instagram.png"
                        alt="instagram"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:w-[50%] w-[100%] flex flex-row space-x-8">
              <div className="sm:h-[330px] h-auto w-[50%]">
                <img className="object-cover w-full h-full" src={profile} />
              </div>
              <div className="flex flex-col w-[50%] space-y-2 ">
                <div className=" flex flex-col w-[100%] ">
                  <div className="space-y-5">
                    <h1 className="text-2xl font-bold">Khidr Abdul Rashid</h1>
                    <h2>MCA</h2>
                    <p>
                      Khidr Abdul Rashid is the attentive and knowledgeable
                      Medical Counter Assistant (MCA) at Kina Pharmacy, focused
                      on providing excellent customer support and ensuring
                      patients receive the right guidance for their healthcare
                      needs.
                    </p>
                  </div>
                  <div className="flex flex-row space-x-3 mt-10">
                    <a href="https://www.linkedin.com/">
                      <img
                        width="30"
                        height="30"
                        src="https://img.icons8.com/ios-filled/50/1A1A1A/linkedin.png"
                        alt="linkedin"
                      />
                    </a>
                    <a href="https://twitter.com/">
                      <img
                        width="30"
                        height="30"
                        src="https://img.icons8.com/ios-filled/50/1A1A1A/twitter.png"
                        alt="twitter"
                      />
                    </a>
                    <a href="https://www.instagram.com/">
                      <img
                        width="30"
                        height="30"
                        src="https://img.icons8.com/ios-filled/50/1A1A1A/instagram.png"
                        alt="instagram"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
