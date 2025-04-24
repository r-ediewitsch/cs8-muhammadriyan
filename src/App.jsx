import { useState } from 'react';
import Header from './components/Header';
import SpecialSection from './components/SpecialSection';
import CategorySection from './components/CategorySection';
import RightArticles from './components/RightArticles';
import Footer from './components/Footer';
import slides from './data/slides';
import categorizedContent from './data/categorizedContent';
import subContent from './data/subContent';
import detiklogo from './assets/toppng.com-detik-logo-1249x355.png';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen w-screen bg-gray-50">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} detiklogo={detiklogo} />

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative">
            <div className="overflow-hidden relative rounded-lg shadow-lg">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide) => (
                  <a
                    key={slide.id}
                    href={slide.url} // Redirect to the URL when the card is clicked
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-w-full group block"
                  >
                    <div className="relative overflow-hidden rounded-t-lg h-[256px] md:h-[512px]">
                      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-customLightBlue via-customBlue via-customPurple via-customRed to-customOrange z-10" />
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition duration-500 rounded-t-lg p-6 flex flex-col justify-end">
                        <span className="text-white text-sm md:text-base font-semibold px-2 py-1 md:px-4 md:py-1.5 rounded w-fit bg-gradient-to-r from-customBlue via-customPurple to-customOrange">
                          {slide.category}
                        </span>
                      </div>
                    </div>

                    <div className="bg-white p-6 pt-8 rounded-b-lg shadow-md -mt-2 text-center h-48 md:h-40 flex flex-col justify-center items-center">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800 group-hover:text-customBlue mb-2">
                        {slide.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base">
                        {slide.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <button
              className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white text-5xl hover:text-blue-300 transition-all duration-300 z-10 bg-transparent p-1 hidden md:block"
              onClick={prevSlide}
            >
              ‹
            </button>
            <button
              className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white text-5xl hover:text-blue-300 transition-all duration-300 z-10 bg-transparent p-1 hidden md:block"
              onClick={nextSlide}
            >
              ›
            </button>

            <div className="flex justify-center mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-6 h-1 rounded-full mx-1 transition-colors duration-300 ${
                    currentSlide === index ? 'bg-customBlue' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <SpecialSection 
        id="news"
        title="Latest News"
        subtitle="Stay updated with the latest news"
        color="customBlue"
        articles={categorizedContent.news}
        bgColor="bg-grey-50"
        redirect="https://news.detik.com"
      />

      <div className="container mx-auto px-4 md:px-8 lg:px-12 flex flex-col md:flex-row gap-8 py-2 bg-white">
        <div className="w-full md:w-3/4 flex flex-col gap-8">
          <CategorySection 
            id="finance"
            title="Finance" 
            subtitle="Business and economic insights"
            color="customLightBlue"
            articles={categorizedContent.finance}
          />

          <CategorySection 
            id="sport"
            title="Sport" 
            subtitle="Coverage of all major sporting events"
            color="customRed"
            articles={categorizedContent.sport}
          />

          <CategorySection 
            id="lifestyle"
            title="Lifestyle" 
            subtitle="Trends, wellness, and personal development"
            color="customPurple"
            articles={categorizedContent.lifestyle}
          />

          <CategorySection 
            id="celebrity"
            title="Celebrity" 
            subtitle="Entertainment and celebrity news"
            color="customOrange"
            articles={categorizedContent.celebrity}
          />
        </div>

        <div className="w-full md:w-1/4">
          <RightArticles
            id="popular"
            title="Most Commented"
            articles={subContent.popular}
            bgColor="bg-white"
          />
          <RightArticles
            id="comment"
            title="Reader's Voice"
            articles={subContent.comment}
            bgColor="bg-white"
          />
        </div>   
      </div>
      
      <Footer activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}