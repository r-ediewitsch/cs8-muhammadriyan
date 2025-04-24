export default function ArticleCard({ article, color }) {
    const getBgColorClass = () => {
      if (color === 'customBlue') return 'bg-customBlue';
      if (color === 'customPurple') return 'bg-customPurple';
      if (color === 'customOrange') return 'bg-customOrange';
      if (color === 'customRed') return 'bg-customRed';
      if (color === 'customLightBlue') return 'bg-customLightBlue';
      return 'bg-gray-800';
    };
  
    const getHoverTextColorClass = () => {
      if (color === 'customBlue') return 'group-hover:text-customBlue';
      if (color === 'customPurple') return 'group-hover:text-customPurple';
      if (color === 'customOrange') return 'group-hover:text-customOrange';
      if (color === 'customRed') return 'group-hover:text-customRed';
      if (color === 'customLightBlue') return 'group-hover:text-customLightBlue';
      return 'group-hover:text-gray-800';
    };
  
    return (
      <a 
        href={article.url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
      >
        <div className="relative h-48 overflow-hidden">
          <div className={`absolute top-0 left-0 w-full h-1 ${getBgColorClass()}`} />
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-2 left-2">
            <span className={`text-xs font-medium text-white px-2 py-1 rounded ${getBgColorClass()}`}>
              {article.category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className={`text-xl font-bold mb-3 text-black transition-colors duration-300 ${getHoverTextColorClass()}`}>
            {article.title}
          </h3>
          <p className="text-gray-600 mb-4 text-sm">
            {article.description}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-gray-500 text-xs">{article.date}</span>
          </div>
        </div>
      </a>
    );
  }