export default function ListArticleCard({ article, color }) {
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
        className="block bg-white rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300 group flex md:flex-row-reverse border border-gray-100"
      >
        <div className="md:w-1/3 h-full relative overflow-hidden">
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
        </div>
  
        <div className="md:w-2/3 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center mb-2">
              <span className={`text-xs font-medium text-white px-2 py-1 rounded ${getBgColorClass()}`}>
                {article.category || 'Blog'}
              </span>
            </div>
            
            <h3 className={`text-2xl font-bold text-gray-800 mb-3 transition-colors duration-300 ${getHoverTextColorClass()}`}>
              {article.title}
            </h3>
            
            <p className="text-gray-600 text-sm">
              {article.description}
            </p>
          </div>
        </div>
      </a>
    );
  }