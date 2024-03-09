import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
export const Projects = () => {
    const projects = [
        {
          title: 'TheMoviesHub - TMH',
          description: 'Embark on an unforgettable cinematic odyssey with TheMoviesHub-TMH, a dynamic streaming platform meticulously crafted with ReactJS, JavaScript, and Redux. Enhanced by Tailwind CSS, utilizing Firebase authentication, enjoy a secure and personalized viewing experience. Hosting an extensive collection of movies, TV shows, and web series sourced from TMDB, immerse yourself in a world of entertainment. Explore diverse genres, discover trending titles, and curate your ultimate watchlist effortlessly. Experience the future of streaming with TMH, where every click transports you to new realms of storytelling excellence. Welcome to the ultimate destination for film enthusiasts.',
          skill1 : "React",
          skill2 : "Redux",
          skill3 : "Firebase",
          skill4 : "Tailwind",
          image: 'https://wallpaperset.com/w/full/6/d/3/366121.jpg',
          liveLink: 'https://github.com/JainamKarania/the-movies-hub.git'
        },
        {
          title: 'Wonders of India',
          description: 'User-friendly features facilitate easy trip bookings, with responsive design, our website adapts flawlessly to various devices, enhancing accessibility.Crafted an Travel Agency Website and designed cutting-edge web development tools, the platform offers seamless navigation and a visually captivating experience. Discover an array of travel destinations, exquisite accommodations, and exciting itineraries showcased through stunning images and engaging content. User-friendly features facilitate easy trip bookings, with responsive design, our website adapts flawlessly to various devices, enhancing accessibility.',
          skill1 : "React",
          skill2 : "Tailwind",
          skill3 : "Javascript",
          skill4 : "",
          image : 'https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true',
          liveLink: 'https://wonders-of-india.vercel.app/'
        },
        {
          title: 'ZebraLearn',
          description: "Dive into an immersive digital experience with our single-page website, meticulously crafted on the Webflow platform. Seamlessly designed and optimized, every scroll and click guides you through a captivating journey. Utilizing Webflow's intuitive tools, we've brought dynamic animations to life, ensuring an engaging user interaction. From vibrant visuals to fluid transitions, each element is thoughtfully placed to enhance your browsing delight. With Webflow's robust features, we've created a website that not only captivates but also inspires action, inviting you to explore and engage with unparalleled ease.",
          skill1 : "Webflow",
          skill2 : "Javascript",
          skill3 : "",
          skill4 : "",
          image : 'https://media.licdn.com/dms/image/sync/D4D27AQGPwfmvbXf8wA/articleshare-shrink_480/0/1709324383642?e=1710248400&v=beta&t=vr6PpPvSAKlnQSfZ20oFjDW0ceY_0_-LoAq8pmvJHWM',
          liveLink: 'https://jainams-fabulous-site-66c1f3.webflow.io/'
        },
      ];    
      const swiperParams = {
        breakpoints: {
          377 :{slidesPerView : 1},
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
          1280: { slidesPerView: 1 },
        },
      };
    
  return (
    <div>
        <section className="py-20" id='projects'>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center justify-center mb-6">
      <h2 className="text-5xl font-bold mb-6">Projects</h2>
      </div>
      <div className="flex flex-wrap -mx-4">
      <Swiper {...swiperParams}
       slidesPerView={1}
       spaceBetween={16}
       pagination={{
         clickable: true,
       }}
       modules={[Pagination]}
       className="mySwiper"   
       >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row bg-neutral-950 rounded-lg shadow-md gap-4 p-4 mb-8">
              <div className="flex w-full p-4">
              <img src={project.image} alt={project.title} className="w-full h-[55vh] object-cover object-center" />
              </div>              
              <div className="flex flex-col items-start w-full p-4">
                <h3 className="text-3xl color-orange font-semibold mb-2">{project.title}</h3>
                <p className="text-white text-lg mb-4">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                <p className="text-yellow-300 mb-4">{project.skill1}</p>
                <p className="text-yellow-300 mb-4">{project.skill2}</p>
                <p className="text-yellow-300 mb-4">{project.skill3}</p>
                <p className="text-yellow-300 mb-4">{project.skill4}</p>
                </div>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white py-2 px-4 rounded-md inline-block hover:bg-blue-600">View Live Project</a>
              </div>
            </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
</section>
    </div>
  );
};
