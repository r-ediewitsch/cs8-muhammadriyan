import Logo from './Logo';

export default function Footer({ activeTab, setActiveTab }) {
  const handleNavClick = (category, e) => {
    e.preventDefault();
    setActiveTab(category);

    const element = document.getElementById(category);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-6 md:mb-0">
            <Logo white />
            <p className="mt-4 max-w-xs text-gray-400">
              Your trusted source for news and entertainment since 1998
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-16">
            <div>
              <h3 className="font-semibold text-lg mb-4">Categories</h3>
              <ul className="space-y-2 text-gray-400">
                {['news', 'finance', 'sport', 'lifestyle', 'celebrity'].map((category) => (
                  <li key={category}>
                    <a
                      href={`#${category}`}
                      className="hover:text-white cursor-pointer"
                      onClick={(e) => handleNavClick(category, e)}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-400">
                {[
                  { name: 'Facebook', url: 'https://www.facebook.com' },
                  { name: 'Twitter', url: 'https://www.twitter.com' },
                  { name: 'Instagram', url: 'https://www.instagram.com' },
                  { name: 'YouTube', url: 'https://www.youtube.com' },
                ].map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white cursor-pointer"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-700 text-gray-400 text-center">
          <p>&copy; {new Date().getFullYear()} detikcom. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}