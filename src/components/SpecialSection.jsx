import ArticleCard from './ArticleCard';

export default function SpecialSection({ id, title, subtitle, color, articles, bgColor = "bg-white", redirect }) {
  const getTextColorClass = () => {
    if (color === 'customBlue') return 'text-customBlue';
    if (color === 'customPurple') return 'text-customPurple';
    if (color === 'customOrange') return 'text-customOrange';
    if (color === 'customRed') return 'text-customRed';
    if (color === 'customLightBlue') return 'text-customLightBlue';
    return 'text-gray-800';
  };
  
  const getBgColorClass = () => {
    if (color === 'customBlue') return 'bg-customBlue';
    if (color === 'customPurple') return 'bg-customPurple';
    if (color === 'customOrange') return 'bg-customOrange';
    if (color === 'customRed') return 'bg-customRed';
    if (color === 'customLightBlue') return 'bg-customLightBlue';
    return 'bg-gray-800';
  };

  return (
    <section id={id} className={`py-16 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-left md:items-center mb-12 px-4 md:px-0">
          <div>
            <h2 className={`text-3xl font-bold mb-2 ${getTextColorClass()}`}>
              {title}
            </h2>
            <p className="text-gray-600">{subtitle}</p>
          </div>
          <a
            href={redirect}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-4 md:mt-0 font-medium text-white hover:text-white hover:underline px-4 py-2 rounded-md ${getBgColorClass()}`}
          >
            View All {title} Articles →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ArticleCard 
              key={index}
              article={article} 
              color={color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}