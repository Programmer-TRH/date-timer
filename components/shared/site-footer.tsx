import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="wrapper py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-[#e91e63]">SET</span>
              <span className="text-2xl font-bold text-[#9c27b0]">MySpace</span>
            </div>
            <p className="text-sm">
              We set up your space to celebrate your special moments with
              beautiful decorations and professional services.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-[#e91e63] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#e91e63] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#e91e63] transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#e91e63] transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-[#e91e63] transition-colors">
                  Birthday Parties
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#e91e63] transition-colors">
                  Anniversary Decorations
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#e91e63] transition-colors">
                  Baby Showers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#e91e63] transition-colors">
                  Corporate Events
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: info@setmyspace.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Address: 123 Celebration Street</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} SETMySpace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
