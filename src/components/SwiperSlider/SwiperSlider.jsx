import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import {Autoplay, Pagination} from "swiper/modules";
const SwiperSlider = () => {
  return (
    <>
      <section className="hidden lg:block " data-aos="fade-up">
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          speed={1500}
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper h-[20rem]"
        >
          <SwiperSlide>
            <div className="w-[36rem] h-64 rounded-2xl bg-black bg-opacity-50 p-10 flex flex-col justify-center items-center text-center text-slate-300">
              <img
                src="https://i.pravatar.cc/150?u=sarah"
                alt="photo"
                className="rounded-full w-20 h-20 object-cover object-center mb-2"
              />
              <h1 className="font-bold text-xl mb-2 text-opacity-80 text-slate-300">
                Sarah Miller
              </h1>
              <p className="text-[0.65rem] text-white text-opacity-60 mb-5">
                Music Enthusiast
              </p>
              <p className="text-gray-400">
                MelodyFest&#39;s events are nothing short of magical! I was
                completely immersed in the music and atmosphere. Truly an
                unforgettable experience.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[36rem] h-64 rounded-2xl bg-black bg-opacity-50 p-10 flex flex-col justify-center items-center text-center text-slate-300">
              <img
                src="https://i.pravatar.cc/150?u=david"
                alt="photo"
                className="rounded-full w-20 h-20 object-cover object-center mb-2"
              />
              <h1 className="font-bold text-xl mb-2 text-opacity-80 text-slate-300">
                David Lee
              </h1>
              <p className="text-[0.65rem] text-white text-opacity-60 mb-5">
                Festival Fanatic
              </p>
              <p className="text-gray-400">
                I&#39;ve attended many festivals, but MelodyFest stands out. The
                attention to detail, from stage setup to artist selection,
                creates an unparalleled musical journey.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[36rem] h-64 rounded-2xl bg-black bg-opacity-50 p-10 flex flex-col justify-center items-center text-center text-slate-300">
              <img
                src="https://i.pravatar.cc/150?u=emily"
                alt="photo"
                className="rounded-full w-20 h-20 object-cover object-center mb-2"
              />
              <h1 className="font-bold text-xl mb-2 text-opacity-80 text-slate-300">
                Emily Carter
              </h1>
              <p className="text-[0.65rem] text-white text-opacity-60 mb-5">
                Event Professional
              </p>
              <p className="text-gray-400">
                MelodyFest&#39;s VIP experiences are exceptional. I enjoyed
                backstage access and met my favorite artist. It felt like a
                dream!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[36rem] h-64 rounded-2xl bg-black bg-opacity-50 p-10 flex flex-col justify-center items-center text-center text-slate-300">
              <img
                src="https://i.pravatar.cc/150?u=alex"
                alt="photo"
                className="rounded-full w-20 h-20 object-cover object-center mb-2"
              />
              <h1 className="font-bold text-xl mb-2 text-opacity-80 text-slate-300">
                Alex Johnson
              </h1>
              <p className="text-[0.65rem] text-white text-opacity-60 mb-5">
                Music Blogger
              </p>
              <p className="text-gray-400">
                As a blogger, I&#39;ve covered various music events.
                MelodyFest&#39;s festivals are unmatched. The thematic decor
                creates a unique ambiance.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[36rem] h-64 rounded-2xl bg-black bg-opacity-50 p-10 flex flex-col justify-center items-center text-center text-slate-300">
              <img
                src="https://i.pravatar.cc/150?u=michael"
                alt="photo"
                className="rounded-full w-20 h-20 object-cover object-center mb-2"
              />
              <h1 className="font-bold text-xl mb-2 text-opacity-80 text-slate-300">
                Michael Clark
              </h1>
              <p className="text-[0.65rem] text-white text-opacity-60 mb-5">
                Concert Enthusiast
              </p>
              <p className="text-gray-400">
                MelodyFest&#39;s concert planning is impeccable. The sound
                quality and artist lineup exceeded my expectations. I&#39;ll
                definitely be back!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[36rem] h-64 rounded-2xl bg-black bg-opacity-50 p-10 flex flex-col justify-center items-center text-center text-slate-300">
              <img
                src="https://i.pravatar.cc/150?u=olivia"
                alt="photo"
                className="rounded-full w-20 h-20 object-cover object-center mb-2"
              />
              <h1 className="font-bold text-xl mb-2 text-opacity-80 text-slate-300">
                Olivia Davis
              </h1>
              <p className="text-[0.65rem] text-white text-opacity-60 mb-5">
                Happy Customer
              </p>
              <p className="text-gray-400">
                Attending MelodyFest&#39;s meet-and-greet session was a dream
                come true. The artists were friendly, and the experience was
                unforgettable.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[36rem] h-64 rounded-2xl bg-black bg-opacity-50 p-10 flex flex-col justify-center items-center text-center text-slate-300">
              <img
                src="https://i.pravatar.cc/150?u=ethan"
                alt="photo"
                className="rounded-full w-20 h-20 object-cover object-center mb-2"
              />
              <h1 className="font-bold text-xl mb-2 text-opacity-80 text-slate-300">
                Ethan Wilson
              </h1>
              <p className="text-[0.65rem] text-white text-opacity-60 mb-5">
                Music Lover
              </p>
              <p className="text-gray-400">
                MelodyFest&#39;s sound equipment rentals elevated our event. The
                professional-grade systems delivered exceptional audio quality.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[36rem] h-64 rounded-2xl bg-black bg-opacity-50 p-10 flex flex-col justify-center items-center text-center text-slate-300">
              <img
                src="https://i.pravatar.cc/150?u=ava"
                alt="photo"
                className="rounded-full w-20 h-20 object-cover object-center mb-2"
              />
              <h1 className="font-bold text-xl mb-2 text-opacity-80 text-slate-300">
                Ava Thompson
              </h1>
              <p className="text-[0.65rem] text-white text-opacity-60 mb-5">
                Thrilled Attendee
              </p>
              <p className="text-gray-400">
                I attended MelodyFest&#39;s themed decor event. The creativity
                and attention to detail transformed the venue into a magical
                space.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[36rem] h-64 rounded-2xl bg-black bg-opacity-50 p-10 flex flex-col justify-center items-center text-center text-slate-300">
              <img
                src="https://i.pravatar.cc/150?u=benjamin"
                alt="photo"
                className="rounded-full w-20 h-20 object-cover object-center mb-2"
              />
              <h1 className="font-bold text-xl mb-2 text-opacity-80 text-slate-300">
                Benjamin Garcia
              </h1>
              <p className="text-[0.65rem] text-white text-opacity-60 mb-5">
                Event Planner
              </p>
              <p className="text-gray-400">
                MelodyFest&#39;s festival organization service is top-notch.
                From ticketing to interactive activities, they create seamless
                and vibrant festivals.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="block lg:hidden ">
        <Swiper
          spaceBetween={10}
          speed={1500}
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper h-[21rem]"
        >
          <SwiperSlide>
            <div className="h-72 w-fit rounded-2xl bg-black bg-opacity-50 p-5 flex flex-col justify-center items-center text-center text-slate-300">
              <img
                src="https://i.pravatar.cc/150?u=sarah"
                alt="photo"
                className="rounded-full w-20 h-20 object-cover object-center mb-2"
              />
              <h1 className="font-bold text-xl mb-2 text-opacity-80 text-slate-300">
                Sarah Miller
              </h1>
              <p className="text-[0.65rem] text-white text-opacity-60 mb-5">
                Music Enthusiast
              </p>
              <p className="text-gray-400 text-sm">
                MelodyFest&#39;s events are nothing short of magical! I was
                completely immersed in the music and atmosphere. Truly an
                unforgettable experience.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" h-72 w-fit rounded-2xl bg-black bg-opacity-50 p-10 flex flex-col justify-center items-center text-center text-slate-300">
              <img
                src="https://i.pravatar.cc/150?u=david"
                alt="photo"
                className="rounded-full w-20 h-20 object-cover object-center mb-2"
              />
              <h1 className="font-bold text-xl mb-2 text-opacity-80 text-slate-300">
                David Lee
              </h1>
              <p className="text-[0.65rem] text-white text-opacity-60 mb-5">
                Festival Fanatic
              </p>
              <p className="text-gray-400 text-sm">
                I&#39;ve attended many festivals, but MelodyFest stands out. The
                attention to detail, from stage setup to artist selection,
                creates an unparalleled musical journey.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" h-72 w-fit rounded-2xl bg-black bg-opacity-50 p-10 flex flex-col justify-center items-center text-center text-slate-300">
              <img
                src="https://i.pravatar.cc/150?u=emily"
                alt="photo"
                className="rounded-full w-20 h-20 object-cover object-center mb-2"
              />
              <h1 className="font-bold text-xl mb-2 text-opacity-80 text-slate-300">
                Emily Carter
              </h1>
              <p className="text-[0.65rem] text-white text-opacity-60 mb-5">
                Event Professional
              </p>
              <p className="text-gray-400 text-sm">
                MelodyFest&#39;s VIP experiences are exceptional. I enjoyed
                backstage access and met my favorite artist. It felt like a
                dream!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" h-72 w-fit rounded-2xl bg-black bg-opacity-50 p-10 flex flex-col justify-center items-center text-center text-slate-300">
              <img
                src="https://i.pravatar.cc/150?u=alex"
                alt="photo"
                className="rounded-full w-20 h-20 object-cover object-center mb-2"
              />
              <h1 className="font-bold text-xl mb-2 text-opacity-80 text-slate-300">
                Alex Johnson
              </h1>
              <p className="text-[0.65rem] text-white text-opacity-60 mb-5">
                Music Blogger
              </p>
              <p className="text-gray-400 text-sm">
                As a blogger, I&#39;ve covered various music events.
                MelodyFest&#39;s festivals are unmatched. The thematic decor
                creates a unique ambiance.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" h-72 w-fit rounded-2xl bg-black bg-opacity-50 p-10 flex flex-col justify-center items-center text-center text-slate-300">
              <img
                src="https://i.pravatar.cc/150?u=michael"
                alt="photo"
                className="rounded-full w-20 h-20 object-cover object-center mb-2"
              />
              <h1 className="font-bold text-xl mb-2 text-opacity-80 text-slate-300">
                Michael Clark
              </h1>
              <p className="text-[0.65rem] text-white text-opacity-60 mb-5">
                Concert Enthusiast
              </p>
              <p className="text-gray-400 text-sm">
                MelodyFest&#39;s concert planning is impeccable. The sound
                quality and artist lineup exceeded my expectations. I&#39;ll
                definitely be back!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" h-72 w-fit rounded-2xl bg-black bg-opacity-50 p-10 flex flex-col justify-center items-center text-center text-slate-300">
              <img
                src="https://i.pravatar.cc/150?u=olivia"
                alt="photo"
                className="rounded-full w-20 h-20 object-cover object-center mb-2"
              />
              <h1 className="font-bold text-xl mb-2 text-opacity-80 text-slate-300">
                Olivia Davis
              </h1>
              <p className="text-[0.65rem] text-white text-opacity-60 mb-5">
                Happy Customer
              </p>
              <p className="text-gray-400 text-sm">
                Attending MelodyFest&#39;s meet-and-greet session was a dream
                come true. The artists were friendly, and the experience was
                unforgettable.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" h-72 w-fit rounded-2xl bg-black bg-opacity-50 p-10 flex flex-col justify-center items-center text-center text-slate-300">
              <img
                src="https://i.pravatar.cc/150?u=ethan"
                alt="photo"
                className="rounded-full w-20 h-20 object-cover object-center mb-2"
              />
              <h1 className="font-bold text-xl mb-2 text-opacity-80 text-slate-300">
                Ethan Wilson
              </h1>
              <p className="text-[0.65rem] text-white text-opacity-60 mb-5">
                Music Lover
              </p>
              <p className="text-gray-400 text-sm">
                MelodyFest&#39;s sound equipment rentals elevated our event. The
                professional-grade systems delivered exceptional audio quality.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" h-72 w-fit rounded-2xl bg-black bg-opacity-50 p-10 flex flex-col justify-center items-center text-center text-slate-300">
              <img
                src="https://i.pravatar.cc/150?u=ava"
                alt="photo"
                className="rounded-full w-20 h-20 object-cover object-center mb-2"
              />
              <h1 className="font-bold text-xl mb-2 text-opacity-80 text-slate-300">
                Ava Thompson
              </h1>
              <p className="text-[0.65rem] text-white text-opacity-60 mb-5">
                Thrilled Attendee
              </p>
              <p className="text-gray-400 text-sm">
                I attended MelodyFest&#39;s themed decor event. The creativity
                and attention to detail transformed the venue into a magical
                space.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" h-72 w-fit rounded-2xl bg-black bg-opacity-50 p-10 flex flex-col justify-center items-center text-center text-slate-300">
              <img
                src="https://i.pravatar.cc/150?u=benjamin"
                alt="photo"
                className="rounded-full w-20 h-20 object-cover object-center mb-2"
              />
              <h1 className="font-bold text-xl mb-2 text-opacity-80 text-slate-300">
                Benjamin Garcia
              </h1>
              <p className="text-[0.65rem] text-white text-opacity-60 mb-5">
                Event Planner
              </p>
              <p className="text-gray-400 text-sm">
                MelodyFest&#39;s festival organization service is top-notch.
                From ticketing to interactive activities, they create seamless
                and vibrant festivals.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default SwiperSlider;
