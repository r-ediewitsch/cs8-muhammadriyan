export default function RightArticles({ id, title, articles, bgColor }) {
    return (
      <section id={id} className={`py-8 ${bgColor}`}>
        <div className="w-full px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
          <ul className="space-y-3 px-4">
            {articles.map((article, index) => (
              <li key={index} className="border-b pb-2">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-md font-semibold text-gray-800 hover:text-blue-600 transition-colors"
                >
                  {article.title}
                </a>
                <p className="text-sm text-gray-500">
                  {article.category}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }