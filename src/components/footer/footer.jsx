import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest, FaDribbble, FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* EstateAgency Column */}
        <div>
          <h2 className="text-2xl font-bold text-black mb-4">EstateAgency</h2>
          <p className="mb-4">Real estate in Nepal has been growing rapidly, especially in major cities like Kathmandu, Lalitpur, and Pokhara. With increasing urbanization and infrastructure development, demand for residential and commercial properties is rising. The market offers opportunities for investors, with land prices appreciating steadily. However, challenges such as legal complexities, zoning regulations, and fluctuating market conditions remain. Despite this, Nepal's real estate sector continues to expand, driven by economic growth and increasing foreign interest.</p>
          <p className="mb-2">Phone: <a href="mailto:contact@example.com" className="text-green-500">contact@example.com</a></p>
          <p>Email: <a href="tel:+54356945234" className="text-green-500">+1234567890</a></p>
        </div>

        {/* The Company Column */}
        <div>
          <h2 className="text-2xl font-bold text-black mb-4">The Company</h2>
          <ul className="space-y-2">
            {['Site Map', 'Legal', 'Agent Admin', 'Careers', 'Affiliate', 'Privacy Policy'].map((item) => (
              <li key={item} className="flex items-center">
                <span className="text-green-500 mr-2">›</span>{item}
              </li>
            ))}
          </ul>
        </div>

        {/* International Sites Column */}
        <div>
          <h2 className="text-2xl font-bold text-black mb-4">International sites</h2>
          <ul className="space-y-2">
            {['Venezuela', 'China', 'Hong Kong', 'Argentina', 'Singapore', 'Philippines'].map((site) => (
              <li key={site} className="flex items-center">
                <span className="text-green-500 mr-2">›</span>{site}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Navigation and Social Icons */}
      <div className="mt-10 border-t pt-6 text-center">
        <nav className="space-x-6">
          {['Home', 'About', 'Property', 'Blog', 'Contact'].map((link) => (
            <a key={link} href="#" className="hover:text-green-500">{link}</a>
          ))}
        </nav>

        <div className="flex justify-center space-x-4 mt-4">
          {[FaFacebookF, FaTwitter, FaInstagram, FaPinterest, FaDribbble].map((Icon, idx) => (
            <a key={idx} href="#" className="text-gray-600 hover:text-green-500">
              <Icon />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600">
        <FaArrowUp />
      </button>
    </footer>
  );
}
