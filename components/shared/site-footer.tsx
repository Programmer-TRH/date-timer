import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-[#1E1E1E] text-gray-300">
      <div className="wrapper py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <div className="flex items-center gap-0 mb-4 cursor-pointer">
              <span className="text-2xl font-bold text-[#e91e63]">SET</span>
              <span className="text-2xl font-bold text-white">MySpace</span>
            </div>
            <div className="text-xs text-gray-400 space-y-1">
              <p>A Unit Of UrbanBarrow Pvt. Ltd.</p>
              <p>Whitefield, Bangalore</p>
              <p>Karnataka, India 560066</p>
            </div>
          </div>

          <div className="flex-1 flex flex-col items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm font-medium">
              <Link href="#" className="hover:text-[#e91e63] transition-colors">
                Help & Support
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="#" className="hover:text-[#e91e63] transition-colors">
                Signup As Partner
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="#" className="hover:text-[#e91e63] transition-colors">
                Terms & Conditions
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="#" className="hover:text-[#e91e63] transition-colors">
                Privacy Policy
              </Link>
            </div>

            <div className="text-center text-[10px] text-gray-500">
              <p>All Rights reserved 2022 setmyspace</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
