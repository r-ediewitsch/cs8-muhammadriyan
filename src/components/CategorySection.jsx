import ListArticleCard from './ListArticleCard';

export default function CategorySection({ id, title, subtitle, color, articles, bgColor = "bg-white" }) {
  const getTextColorClass = () => {
    if (color === 'customBlue') return 'text-customBlue';
    if (color === 'customPurple') return 'text-customPurple';
    if (color === 'customOrange') return 'text-customOrange';
    if (color === 'customRed') return 'text-customRed';
    if (color === 'customLightBlue') return 'text-customLightBlue';
    return 'text-gray-800';
  };

  return (
    <section id={id} className={`py-8 ${bgColor} rounded-lg`}>
      <div className="w-full">
        <div className="text-left mb-6 px-4 md:px-0">
          <h2 className={`text-3xl font-bold ${getTextColorClass()} mb-2`}>
            {title}
          </h2>
          <p className="text-gray-600">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {articles.map((article, index) => (
            <ListArticleCard key={index} article={article} color={color} />
          ))}
        </div>
      </div>
    </section>
  );
}