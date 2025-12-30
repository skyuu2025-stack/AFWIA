
import React, { useState } from 'react';
import { Check, Clock, UserCheck, ShieldCheck, ArrowRight, AlertCircle } from 'lucide-react';
import SEO from '../components/SEO';

const Consultation: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    assetRange: '',
    familyStatus: '',
    timeWindow: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.assetRange === 'below-1m') {
      alert("抱歉，AFWIA 的结构会谈仅针对资产规模在百万美金以上的个人或家族。系统已为您引导至基础资讯页面。");
      window.location.href = '#/about';
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-white">
        <SEO title="申请成功 | 国际结构会谈" description="您的会谈申请已提交，我们将尽快审核。" />
        <div className="text-center max-w-lg">
          <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center mx-auto mb-8">
            <Check className="text-white" size={48} />
          </div>
          <h1 className="text-6xl font-black uppercase tracking-tighter mb-8">Pending Review</h1>
          <p className="text-lg text-gray-500 mb-12">
            申请已提交。我们的合伙人级别团队将进行初步评估，符合条件的百万级以上客户将在 72 小时内收到确认邮件。
          </p>
          <button onClick={() => window.location.href = '/'} className="px-12 py-4 border border-black font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-all">
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-32 bg-white">
      <SEO 
        title="申请国际结构会谈 | 跨境架构与身份规划" 
        description="预约 AFWIA 合伙人级别的 90 分钟深度结构会谈。针对资产规模百万美金以上的高净值个人，解决国际身份单点风险与跨境企业合规架构。"
        keywords="结构会谈, 国际身份规划, 跨境资产配置, 香港架构咨询, 家族办公室顾问"
      />
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <header className="py-24 border-b border-black">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
            <div className="max-w-4xl">
              <span className="text-xs font-bold uppercase tracking-[0.5em] text-red-500 mb-6 block flex items-center gap-2">
                <AlertCircle size={14} /> 只筛选百万级以上潜在客户 / RESERVED FOR HNW INQUIRIES
              </span>
              <h1 className="text-[10vw] lg:text-[7vw] font-black uppercase tracking-tighter leading-[0.85] mb-8">
                国际结构会谈<br />
                <span className="text-gray-300">Structural Consultation</span>
              </h1>
            </div>
            <div className="pb-8">
              <div className="text-right">
                <p className="text-3xl font-black">90 分钟 / 90 Minutes</p>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-2">核心战略攻克 / Strategy Engagement</p>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mt-24">
          <div className="lg:col-span-7 space-y-20">
            {/* What is it */}
            <section className="space-y-8">
              <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-gray-400">什么是结构会谈 / The Concept</h2>
              <p className="text-3xl font-light leading-snug">
                这是一次由 AFWIA 核心合伙人参与的高维度决策审计，仅对符合资产门槛的客户开放。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="p-8 bg-gray-50 border border-gray-100">
                  <h4 className="font-black mb-4 uppercase text-sm">我们会讨论什么</h4>
                  <ul className="text-sm text-gray-500 space-y-4">
                    <li className="flex gap-3"><Check size={14} className="shrink-0 mt-1" /> 现有身份结构的脆弱点分析</li>
                    <li className="flex gap-3"><Check size={14} className="shrink-0 mt-1" /> 企业全球化与家族路径的逻辑对齐</li>
                    <li className="flex gap-3"><Check size={14} className="shrink-0 mt-1" /> 未来 3-5 年合规性风险预判</li>
                  </ul>
                </div>
                <div className="p-8 bg-gray-50 border border-gray-100">
                  <h4 className="font-black mb-4 uppercase text-sm">谁不适合参加</h4>
                  <ul className="text-sm text-gray-500 space-y-4">
                    <li className="flex gap-3 text-red-400">× 资产规模低于 1,000,000 USD 的个人</li>
                    <li className="flex gap-3 text-red-400">× 寻找廉价中介代办服务的机构</li>
                    <li className="flex gap-3 text-red-400">× 无长远身份架构规划需求的团队</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Process */}
            <section className="space-y-12">
              <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-gray-400">会谈流程 / The Process</h2>
              <div className="space-y-6">
                {[
                  { title: "资格初审", desc: "提交表单后，我们的团队将对您的资产规模与需求画像进行合规预审。" },
                  { title: "逻辑预研", desc: "会谈前，我们会根据您提供的信息进行背景调研与政策匹配准备。" },
                  { title: "深度会谈 (90min)", desc: "1对1深度沟通，拆解核心痛点，建立跨国架构雏形。" },
                  { title: "决策逻辑书", desc: "会谈后 48 小时内提供《结构建议书》，聚焦决策逻辑。" }
                ].map((step, i) => (
                  <div key={i} className="flex gap-8 group">
                    <span className="text-2xl font-black opacity-10 group-hover:opacity-100 transition-opacity">0{i+1}</span>
                    <div className="pb-8 border-b border-gray-100 w-full">
                      <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">{step.title}</h4>
                      <p className="text-gray-400 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-40 bg-black text-white p-12 shadow-2xl">
              <h3 className="text-3xl font-black uppercase mb-8">申请预约<br /><span className="text-white/40 text-sm">RESERVED FOR HNW INQUIRIES</span></h3>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                   <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Full Name / 姓名</label>
                   <input required type="text" className="w-full bg-transparent border-b border-white/20 focus:border-white py-4 outline-none transition-all" placeholder="Enter name" />
                </div>
                
                <div className="space-y-2">
                   <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Asset Range / 资产区间 (Mandatory)</label>
                   <select required onChange={(e) => setForm({...form, assetRange: e.target.value})} className="w-full bg-transparent border-b border-white/20 focus:border-white py-4 outline-none transition-all appearance-none cursor-pointer">
                      <option value="" className="text-black">Select Asset Range</option>
                      <option value="below-1m" className="text-black text-red-500">Below 1,000,000 USD (Non-qualifying)</option>
                      <option value="1m-5m" className="text-black">1,000,000 - 5,000,000 USD</option>
                      <option value="5m-10m" className="text-black">5,000,000 - 10,000,000 USD</option>
                      <option value="10m-plus" className="text-black">Above 10,000,000 USD</option>
                   </select>
                </div>

                <div className="space-y-2">
                   <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Family Status / 家庭与子女教育情况</label>
                   <input required type="text" className="w-full bg-transparent border-b border-white/20 focus:border-white py-4 outline-none transition-all" placeholder="Family & Education status" />
                </div>

                <div className="space-y-2">
                   <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Time Window / 计划调整窗口期</label>
                   <select required className="w-full bg-transparent border-b border-white/20 focus:border-white py-4 outline-none transition-all appearance-none cursor-pointer">
                      <option value="immediate" className="text-black">Immediate (within 3 months)</option>
                      <option value="short" className="text-black">Short-term (3-12 months)</option>
                      <option value="long" className="text-black">Long-term (Planning only)</option>
                   </select>
                </div>

                <div className="space-y-2">
                   <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Core Objectives / 核心诉求描述</label>
                   <textarea rows={3} className="w-full bg-transparent border-b border-white/20 focus:border-white py-4 outline-none transition-all resize-none" placeholder="Primary concerns..."></textarea>
                </div>

                <button type="submit" className="w-full py-8 bg-white text-black font-black uppercase tracking-[0.3em] text-xs hover:bg-gray-200 transition-all flex items-center justify-center gap-4">
                   提交申请表单 <ArrowRight size={14} />
                </button>
                <p className="text-[9px] text-white/30 text-center uppercase tracking-widest">只筛选百万级以上潜在客户 / RESERVED FOR HNW INQUIRIES</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
