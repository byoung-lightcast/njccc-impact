import React from 'react';
import { TrendingUp, Users, Building, GraduationCap, Landmark, Heart, ChevronDown } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      
      {/* Navigation */}
      <nav className="bg-njBlue text-white p-4 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="font-bold text-xl tracking-wide">NJCCC Impact</div>
          <div className="hidden md:flex space-x-6">
            <a href="#overview" className="hover:text-njGold transition">Overview</a>
            <a href="#impact" className="hover:text-njGold transition">Economic Impact</a>
            <a href="#investment" className="hover:text-njGold transition">Investment Analysis</a>
            <a href="#methodology" className="hover:text-njGold transition">Methodology</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-gradient-to-br from-njBlue to-blue-900 text-white py-32 px-4 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            The Economic Value of New Jersey's Community Colleges[cite: 1]
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-blue-100 font-light">
            Fueling growth, supporting jobs, and creating a brighter future for the Garden State (FY 2023-24)[cite: 1].
          </p>
          <a href="#impact" className="inline-flex items-center bg-njGold text-njBlue font-bold py-4 px-8 rounded-full hover:bg-yellow-400 transition transform hover:scale-105 shadow-lg">
            Explore the Impact
            <ChevronDown className="ml-2 w-5 h-5" />
          </a>
        </div>
        {/* Abstract Background Element */}
        <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-96 h-96 bg-njGreen rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </header>

      {/* High-Level Overview Stats */}
      <section id="overview" className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-njBlue">A Catalyst for the New Jersey Economy[cite: 1]</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              New Jersey's 18 Community Colleges serve over 228,000 students, equipping them with in-demand skills and empowering adult learners to further their careers and better their lives[cite: 1].
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-slate-50 rounded-2xl shadow-sm border border-slate-100 transform hover:-translate-y-1 transition duration-300">
              <TrendingUp className="w-12 h-12 text-njGreen mx-auto mb-4" />
              <div className="text-4xl font-extrabold text-gray-900">$12.8 Billion[cite: 1]</div>
              <div className="mt-2 text-sm font-semibold text-gray-500 uppercase tracking-wide">Total Added Income[cite: 1]</div>
              <p className="mt-2 text-sm text-gray-600">Equal to approximately 1.6% of New Jersey's total gross state product (GSP)[cite: 1].</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl shadow-sm border border-slate-100 transform hover:-translate-y-1 transition duration-300">
              <Users className="w-12 h-12 text-njBlue mx-auto mb-4" />
              <div className="text-4xl font-extrabold text-gray-900">135,492[cite: 1]</div>
              <div className="mt-2 text-sm font-semibold text-gray-500 uppercase tracking-wide">Jobs Supported[cite: 1]</div>
              <p className="mt-2 text-sm text-gray-600">The activities of the colleges and their students support massive employment[cite: 1].</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl shadow-sm border border-slate-100 transform hover:-translate-y-1 transition duration-300">
              <Heart className="w-12 h-12 text-njGold mx-auto mb-4" />
              <div className="text-4xl font-extrabold text-gray-900">1 in 46[cite: 1]</div>
              <div className="mt-2 text-sm font-semibold text-gray-500 uppercase tracking-wide">NJ Jobs[cite: 1]</div>
              <p className="mt-2 text-sm text-gray-600">One out of every 46 jobs in New Jersey is supported by NJ's Community Colleges[cite: 1].</p>
            </div>
          </div>
        </div>
      </section>

      {/* Economic Impact Analysis */}
      <section id="impact" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-njBlue">Economic Impact Analysis[cite: 1]</h2>
            <p className="mt-4 text-xl text-gray-600">How the $12.8 Billion is Generated[cite: 1]</p>
          </div>

          <div className="space-y-12">
            {/* Alumni Impact (Highlighted as Most Important) */}
            <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 border-t-8 border-njGold flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex justify-center">
                <div className="bg-yellow-50 rounded-full p-8">
                  <GraduationCap className="w-24 h-24 text-njGold" />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Alumni Impact: $11.7 Billion[cite: 1]</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The greatest economic impact of NJ's Community Colleges stems from the added human capital—the knowledge, creativity, imagination, and entrepreneurship—found in their alumni[cite: 1]. Hundreds of thousands of former students are currently employed in the New Jersey workforce, translating to an accumulated impact of $11.7 billion in added income and supporting 117,569 jobs[cite: 1].
                </p>
              </div>
            </div>

            {/* Other Impacts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow p-8 hover:shadow-md transition">
                <Building className="w-10 h-10 text-njBlue mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">Operations Spending[cite: 1]</h4>
                <div className="text-2xl font-extrabold text-njGreen mb-3">$833.3 Million[cite: 1]</div>
                <p className="text-gray-600 text-sm">
                  Payroll and benefits for 14,807 employees, alongside day-to-day operations spending, generate a powerful multiplier effect across state businesses[cite: 1].
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow p-8 hover:shadow-md transition">
                <Users className="w-10 h-10 text-njBlue mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">Student Spending[cite: 1]</h4>
                <div className="text-2xl font-extrabold text-njGreen mb-3">$206.9 Million[cite: 1]</div>
                <p className="text-gray-600 text-sm">
                  Monies spent by out-of-state students relocating to NJ, as well as retained NJ residents who would have otherwise left the state, on daily living expenses[cite: 1].
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow p-8 hover:shadow-md transition">
                <Building className="w-10 h-10 text-njBlue mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">Construction Spending[cite: 1]</h4>
                <div className="text-2xl font-extrabold text-njGreen mb-3">$35.1 Million[cite: 1]</div>
                <p className="text-gray-600 text-sm">
                  Quick infusions of income and jobs resulting from capital projects designed to maintain facilities and meet growing educational demands[cite: 1].
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Analysis (ROI) */}
      <section id="investment" className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-njBlue">Investment Analysis[cite: 1]</h2>
            <p className="mt-4 text-xl text-gray-600">A Profitable Venture for All Stakeholders[cite: 1]</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Student ROI */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <GraduationCap className="w-10 h-10 text-njBlue" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Student Perspective[cite: 1]</h3>
              <p className="text-4xl font-extrabold text-njGreen mb-2">$4.30[cite: 1]</p>
              <p className="font-semibold text-gray-700 mb-4">Returned for every $1 invested[cite: 1]</p>
              <p className="text-gray-600 mb-4 text-sm">
                In return for their investment of time and money, students receive a present value of $3.9 billion in increased earnings over their working lives[cite: 1].
              </p>
              <div className="inline-block bg-gray-100 rounded-full px-4 py-2 font-bold text-njBlue">
                14.9% Annual Return[cite: 1]
              </div>
            </div>

            {/* Taxpayer ROI */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <Landmark className="w-10 h-10 text-njBlue" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Taxpayer Perspective[cite: 1]</h3>
              <p className="text-4xl font-extrabold text-njGreen mb-2">$2.60[cite: 1]</p>
              <p className="font-semibold text-gray-700 mb-4">Returned for every $1 invested[cite: 1]</p>
              <p className="text-gray-600 mb-4 text-sm">
                Taxpayers receive an estimated present value of $1.3 billion in added tax revenue, recovering taxpayer costs while growing the NJ tax base[cite: 1].
              </p>
              <div className="inline-block bg-gray-100 rounded-full px-4 py-2 font-bold text-njBlue">
                6.7% Annual Return[cite: 1]
              </div>
            </div>

            {/* Society ROI */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <Users className="w-10 h-10 text-njBlue" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Social Perspective[cite: 1]</h3>
              <p className="text-4xl font-extrabold text-njGreen mb-2">$8.00[cite: 1]</p>
              <p className="font-semibold text-gray-700 mb-4">Returned for every $1 invested[cite: 1]</p>
              <p className="text-gray-600 mb-4 text-sm">
                Society benefits from $15.2 billion in added state revenue and $548.0 million in social savings from improved health, reduced crime, and lower income assistance needs[cite: 1].
              </p>
              <div className="inline-block bg-gray-100 rounded-full px-4 py-2 font-bold text-njBlue">
                $548M in Social Savings[cite: 1]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Engagement Vignette */}
      <section className="py-16 bg-njBlue text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <Heart className="w-12 h-12 text-njGold mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">More Than Just Numbers[cite: 1]</h2>
          <p className="text-xl font-light leading-relaxed mb-8">
            Beyond academics, the colleges enhance the lives of community members through connection, engagement, and service, improving the quality of life in New Jersey through a variety of services. They strengthen the state economy by partnering with local small businesses, offering counseling and customized training to empower entrepreneurs[cite: 1].
          </p>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer id="methodology" className="bg-gray-900 text-gray-300 py-12 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-white mb-6">Review the Full Methodology[cite: 1]</h3>
          <p className="mb-8">
            Want to see the comprehensive data and economic modeling tools used to determine these impacts? The full analysis is available to the public.
          </p>
          <a 
            href="https://www.njcommunitycolleges.org/wp-content/uploads/2026/02/Economic-Impact-Study-Main-Report.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-transparent border-2 border-njGold text-njGold font-bold py-3 px-8 rounded-full hover:bg-njGold hover:text-gray-900 transition"
          >
            Read Economic-Impact-Study-Main-Report.pdf[cite: 1]
          </a>
          <div className="mt-12 text-sm text-gray-500 border-t border-gray-700 pt-8">
            <p>Data reflects FY 2023-24[cite: 1]. Analysis provided by Lightcast[cite: 1].</p>
            <p className="mt-2">&copy; {new Date().getFullYear()} New Jersey Council of County Colleges.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
