
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ShieldAlert, Users, Layers, AlertTriangle } from 'lucide-react';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col bg-white">
      <SEO 
        title="国际代理机构 | 品牌出海与架构咨询" 
        description="AFWIA (AFW International Agency) 为高净值客户提供国际结构会谈、全球时装周制作及品牌出海系统解决方案。总部位于香港，连接纽约、伦敦、巴黎与曼谷。"
        keywords="AFWIA, 国际架构, 品牌出海, 时装周制作, 香港代理机构, 国际身份规划, 高净值客户服务"
      />
      
      {/* Module 1: Hero - Problem Focused */}
      <section className="min-h-screen flex flex-col justify-center bg-black text-white px-6 md:px-12 relative overflow-hidden pt-32 lg:pt-40">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1),_transparent)]" />
        </div>
        
        <div className="max-w-[1400px] mx-auto w-full z-10">
          <div className="mb-12 inline-flex items-center gap-4 px-5 py-2.5 bg-black border border-white/20 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.5)]">
            <AlertTriangle size={14} className="text-yellow-500 fill-yellow-500/10" />
            <span className="text-[10px] font-black uppercase tracking-[0.35em] text-white relative">
              <span className="relative z-10">Warning: Global Structural Lag</span>
              <span className="absolute inset-0 text-red-500 translate-x-[0.5px] opacity-30 select-none">Warning: Global Structural Lag</span>
              <span className="absolute inset-0 text-cyan-400 -translate-x-[0.5px] opacity-30 select-none">Warning: Global Structural Lag</span>
            </span>
          </div>
          
          <h1 className="text-[9vw] lg:text-[7vw] font-black leading-[0.9] tracking-tighter uppercase mb-16 max-w-5xl">
            大多数企业主的问题，<br />
            <span className="text-transparent font-light" style={{ WebkitTextStroke: '1px white' }}>不是出不出海，</span><br />
            而是结构落后未来 5 年。
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
               <p className="text-xl md:text-2xl font-light text-white/60 leading-relaxed max-w-2xl">
                 The challenge isn't global expansion—it's the fragility of your underlying international structure. AFWIA exists to filter noise and engineer resilience.
               </p>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-6">
              <Link to="/consultation" className="group flex items-center justify-between gap-4 px-10 py-8 bg-white text-black font-black uppercase tracking-widest text-xs hover:bg-gray-200 transition-all">
                <span>申请国际结构会谈 / Apply for Consultation</span>
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
              <p className="text-[10px] uppercase tracking-widest text-white/30 text-center font-bold">
                只筛选百万级以上潜在客户 / RESERVED FOR HNW INQUIRIES
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Module 2: Risk Visibility */}
      <section className="py-32 px-6 md:px-12 bg-gray-50 border-y border-black/5">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col mb-24">
            <span className="text-xs font-bold uppercase tracking-[0.4em] mb-4 text-black/40">Risk Manifestation / 风险透视</span>
            <h2 className="text-5xl font-black uppercase tracking-tighter">不可逆的国际窗口期</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: ShieldAlert,
                title: "身份单点风险",
                en: "Identity Single Point Failure",
                desc: "依赖单一法域的资产与身份结构，在未来不确定性中极度脆弱。"
              },
              {
                icon: Layers,
                title: "家庭路径割裂",
                en: "Fragmented Family Path",
                desc: "企业、子女教育与长远身份安排互不衔接，导致巨大的合规与税务成本。"
              },
              {
                icon: ShieldAlert,
                title: "合规不可逆窗口",
                en: "Irreversible Compliance Window",
                desc: "国际反洗钱与穿透式监管趋严，结构优化的黄金窗口正在关闭。"
              }
            ].map((risk, i) => (
              <div key={i} className="p-12 bg-white border border-black/5 flex flex-col hover:border-black transition-colors">
                <risk.icon size={32} className="mb-8" />
                <h3 className="text-2xl font-black mb-2 uppercase">{risk.title}</h3>
                <span className="text-[10px] font-bold text-black/30 uppercase tracking-widest mb-6">{risk.en}</span>
                <p className="text-gray-500 leading-relaxed text-sm">{risk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Module 3: We Are */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative aspect-[4/5] bg-gray-200 grayscale overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" 
              alt="AFWIA Strategic HQ Hong Kong"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
            <div className="absolute bottom-12 left-12 right-12 text-white">
               <span className="text-[10px] font-bold uppercase tracking-widest mb-4 block">Strategic Core</span>
               <h3 className="text-4xl font-black leading-tight">国际身份 × 出海结构</h3>
               <p className="text-sm opacity-60 mt-4">服务对象：创始家族 / Million-Level Assets</p>
            </div>
          </div>
          
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-5xl font-black uppercase tracking-tighter">我们是谁 & <br /><span className="italic">为什么被选择</span></h2>
              <p className="text-xl text-gray-500 leading-relaxed font-light">
                AFWIA 不提供通用的“出海服务”，我们是跨国架构的工程师。总部位于香港，整合顶级资源，仅为 1% 的高净值决策者建立心理与实操的过滤器。
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="p-8 border-l-2 border-black">
                  <h5 className="font-bold mb-2">深度决策逻辑</h5>
                  <p className="text-xs text-gray-400">不讲细枝末节，只攻克核心权衡。确保每一笔投入都符合未来 10 年的合规逻辑。</p>
               </div>
               <div className="p-8 border-l-2 border-black">
                  <h5 className="font-bold mb-2">国际背书集群</h5>
                  <p className="text-xs text-gray-400">从世界四大时装周生产系统到多国身份资源，提供闭环的基础设施支持。</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Module 4: Screening Statement */}
      <section className="py-32 px-6 md:px-12 bg-black text-white">
        <div className="max-w-[1200px] mx-auto text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/30 mb-12 block">Mandatory Disclaimer / 筛选声明</span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12">
            只筛选百万级以上潜在客户
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              "资产规模低于百万美金者",
              "只关心单一国家政策者",
              "追求短期投机获利者"
            ].map((item, i) => (
              <div key={i} className="py-12 border border-white/10 hover:border-white/40 transition-colors">
                <span className="text-xl font-bold italic opacity-80">{item}</span>
              </div>
            ))}
          </div>
          
          <p className="text-white/40 max-w-2xl mx-auto mb-16 text-sm leading-relaxed">
            AFWIA 的资源与精力仅服务于资产规模百万美金以上、对国际趋势有长远预判、重视架构安全与家族传承的专业人士。
          </p>
          
          <Link to="/consultation" className="inline-block px-16 py-8 bg-white text-black font-black uppercase tracking-[0.3em] text-xs hover:bg-gray-200 transition-all">
            我符合条件，申请结构会谈
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
