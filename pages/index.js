import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
const { NewsData } = require('../lib/data');

export default function HomePage({ articles }) {
  const featured = articles[0];
  const gridArticles = articles.slice(1, 5);
  const latestArticles = articles.slice(0, 4);

  return (
    <>
      <Head>
        <title>The Digital Diplomat | US Immigration News & Visa Updates</title>
        <meta name="description" content="Your trusted source for US immigration news, visa updates, green card processing times, and expert guides." />
        <meta property="og:title" content="The Digital Diplomat | US Immigration News" />
        <meta property="og:type" content="website" />
      </Head>

      <Header />

      <main className="mt-4 px-4 md:px-0">
        <div className="max-w-[1100px] mx-auto">
          <div className="w-full space-y-8">

            {/* Breaking News / Live Updates Banner */}
            <Link href="/category/visa-news" className="flex items-center gap-4 bg-white p-2 border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
              <span className="bg-red-600 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-white inline-block" style={{ animation: 'livePulse 1.5s ease-in-out infinite' }}></span>
                Live
              </span>
              <p className="text-sm font-medium truncate group-hover:text-primary transition-colors">
                H-1B Visa Reform Act 2025: Live Congressional Updates — Follow the latest developments
              </p>
              <span className="material-symbols-outlined text-primary ml-auto mr-2">arrow_forward</span>
            </Link>

            {/* Hero Section: 50/50 Balance */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-4">
              {/* Left: Featured Story */}
              {featured && (
                <Link href={`/article/${featured.id}`} className="group cursor-pointer block relative">
                  <div className="relative aspect-[16/10] overflow-hidden mb-4">
                    <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={featured.image} alt={featured.title} />
                  </div>
                  <div className="space-y-3">
                    <span className="text-primary text-[10px] font-bold uppercase tracking-widest">{featured.tag}</span>
                    <h1 className="text-on-surface text-3xl font-extrabold headline-font leading-tight group-hover:text-primary transition-colors">
                      {featured.title}
                    </h1>
                    <p className="text-on-surface-variant text-base leading-relaxed line-clamp-3">
                      The Department of Homeland Security proposes significant structural changes to the specialty occupation visa program to enhance integrity and flexibility for tech employers.
                    </p>
                  </div>
                </Link>
              )}

              {/* Right: 2x2 Grid */}
              <div className="grid grid-cols-2 gap-6">
                {gridArticles.map((article) => (
                  <Link key={article.id} href={`/article/${article.id}`} className="space-y-2 group cursor-pointer block relative">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={article.image} alt={article.title} />
                    </div>
                    <span className="text-primary text-[10px] font-bold uppercase tracking-widest mt-1 block">{article.tag}</span>
                    <h3 className="font-bold headline-font text-sm leading-tight group-hover:text-primary transition-colors line-clamp-3">
                      {article.title}
                    </h3>
                    <p className="text-[10px] text-slate-400 font-medium">{article.date}</p>
                  </Link>
                ))}
              </div>
            </section>

            {/* Browse by Category */}
            <section className="py-4">
              <h2 className="text-xl font-extrabold headline-font border-l-4 border-primary pl-4 uppercase tracking-tight mb-6">Browse by Category</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { label: 'F1 Student', icon: 'school', color: 'blue', href: '/category/visa-news/f1-opt-cpt' },
                  { label: 'H1B Work', icon: 'work', color: 'indigo', href: '/category/visa-news/h1b-visa' },
                  { label: 'Green Card', icon: 'style', color: 'emerald', href: '/category/visa-news/green-card' },
                  { label: 'Family Base', icon: 'family_restroom', color: 'rose', href: '/category/visa-news' },
                  { label: 'Asylum', icon: 'gavel', color: 'amber', href: '/category/visa-news' },
                  { label: 'B1/B2 Visitor', icon: 'flight', color: 'slate', href: '/category/visa-news/b1-b2' },
                ].map((cat, idx) => (
                  <Link key={idx} href={cat.href} className={`bg-${cat.color}-50/50 hover:bg-${cat.color}-100 transition-colors p-6 flex flex-col items-center justify-center text-center group cursor-pointer border border-${cat.color}-100/50`}>
                    <span className={`material-symbols-outlined text-${cat.color}-600 text-3xl mb-3`}>{cat.icon}</span>
                    <span className="font-bold headline-font text-[11px] uppercase tracking-widest">{cat.label}</span>
                  </Link>
                ))}
              </div>
            </section>

            {/* Latest Updates Section */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 py-4 border-t border-slate-100">
              <div className="lg:col-span-2 space-y-6">
                <h2 className="text-xl font-extrabold headline-font border-l-4 border-primary pl-4 uppercase tracking-tight">Latest Updates</h2>
                {articles.map((article) => (
                  <article key={article.id} className="group pb-6 border-b border-slate-100 flex gap-6 cursor-pointer relative">
                    <Link href={`/article/${article.id}`} className="absolute inset-0 z-10"><span className="sr-only">Read Article</span></Link>
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{article.tag}</span>
                        <span className="w-1 h-1 bg-slate-300"></span>
                        <span className="text-[10px] text-slate-400 font-medium uppercase">{article.date}</span>
                      </div>
                      <h3 className="text-lg font-bold headline-font group-hover:text-primary transition-colors mb-2">{article.title}</h3>
                    </div>
                    <div className="w-32 h-20 overflow-hidden flex-shrink-0">
                      <img className="w-full h-full object-cover" src={article.image} alt="" />
                    </div>
                  </article>
                ))}
              </div>

              {/* Sidebar */}
              <aside className="space-y-12">
                {/* Latest News Sidebar */}
                <div className="bg-slate-50 border border-slate-200 p-6">
                  <h3 className="font-bold text-sm tracking-widest uppercase text-primary mb-6 font-['Plus_Jakarta_Sans']">Latest News</h3>
                  <div className="space-y-6">
                    {latestArticles.map((a) => (
                      <Link key={a.id} href={`/article/${a.id}`} className="group block">
                        <div className="text-[10px] font-bold text-slate-500 mb-1">{a.date}</div>
                        <h4 className="text-sm font-bold text-slate-900 leading-tight group-hover:text-primary transition-colors">{a.title}</h4>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Newsletter Box */}
                <div className="bg-primary p-8 text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <span className="material-symbols-outlined mb-4">mail</span>
                    <h3 className="font-extrabold text-xl mb-2 font-['Plus_Jakarta_Sans']">Editorial Digest</h3>
                    <p className="text-sm text-white/80 leading-relaxed mb-6">Stay updated with critical immigration law changes delivered to your inbox weekly.</p>
                    <div className="space-y-3">
                      <input className="w-full bg-white/10 border-white/20 px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none" placeholder="Email address" type="email" />
                      <button className="w-full bg-white text-primary font-bold py-3 px-4 text-[11px] uppercase tracking-widest hover:bg-slate-50 transition-colors">Subscribe Now</button>
                    </div>
                  </div>
                </div>
              </aside>
            </section>

            {/* Trust Section */}
            <section className="py-4 mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 bg-white border border-slate-200 shadow-sm overflow-hidden">
                <div className="h-80 md:h-auto overflow-hidden">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASonc9WpqKi-3nfgA3ebTOLNbJlRDpAIqoh1a-_yXaeT0M1xhZzoRd3gpfmgAhIBUU3yyNJcllKd6DukftB1jGL_dxu9IajiEhZ6bGhOXApVsMYEmb9XParMiJKGskIw5ZGrbMDewjmgtuS_5eI0UueALMnEWoWUB8-ykXY2QkFyArsCW4Y6yQIyC4bUXu4luUUJBMMCc-ErJvabBvdaPi3HpyWSxoPoZamN_NUe5sACEAVODfePeXdmpUEnRNed06NcxtKzsfpEo" alt="Trusted Authority" />
                </div>
                <div className="p-10 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 bg-primary text-white px-3 py-1 self-start mb-6 text-[10px] font-bold uppercase tracking-widest">
                    <span className="material-symbols-outlined text-sm">verified</span> Verified Accuracy
                  </div>
                  <h2 className="text-3xl font-extrabold headline-font mb-4 leading-tight">Your Trusted Authority on US Immigration</h2>
                  <p className="text-slate-600 mb-8 leading-relaxed">For over a decade, we&apos;ve provided millions of readers with fact-checked, up-to-the-minute analysis of shifting immigration policies and procedural changes.</p>
                  <div className="flex items-center gap-8">
                    <div>
                      <p className="text-2xl font-extrabold text-primary headline-font">12M+</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Annual Readers</p>
                    </div>
                    <div className="w-px h-10 bg-slate-200"></div>
                    <div>
                      <p className="text-2xl font-extrabold text-primary headline-font">24/7</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Policy Tracking</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  // Strip content to reduce page payload
  const articles = NewsData.map(({ content, ...rest }) => rest);

  context.res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=59');

  return { props: { articles } };
}
