
import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogType?: string;
  canonical?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  keywords = "AFWIA, International Agency, Fashion Week Production, Brand Overseas, Structural Consultation, Hong Kong Agency, Global Launch",
  ogType = "website",
  canonical = "https://afwia.com"
}) => {
  const fullTitle = `${title} | AFWIA - Structure & Infrastructure`;

  useEffect(() => {
    document.title = fullTitle;
    
    const updateMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    updateMeta('description', description);
    updateMeta('keywords', keywords);
    
    // Open Graph
    updateMeta('og:title', fullTitle, 'property');
    updateMeta('og:description', description, 'property');
    updateMeta('og:type', ogType, 'property');
    updateMeta('og:url', window.location.href, 'property');
    updateMeta('og:site_name', 'AFWIA');
    
    // Twitter
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', fullTitle);
    updateMeta('twitter:description', description);

    // Schema.org JSON-LD
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "AFWIA",
      "alternateName": "AFW International Agency",
      "url": "https://afwia.com",
      "logo": "https://afwia.com/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "",
        "contactType": "customer service",
        "areaServed": ["HK", "US", "FR", "GB", "TH"],
        "availableLanguage": ["English", "Chinese"]
      },
      "sameAs": [
        "https://www.instagram.com/afwia_agency",
        "https://www.tiktok.com/@afwia.com"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Hong Kong",
        "addressRegion": "SAR",
        "addressCountry": "CN"
      }
    };

    const scriptId = 'json-ld-schema';
    let script = document.getElementById(scriptId) as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(schemaData);

  }, [fullTitle, description, keywords, ogType]);

  return null;
};

export default SEO;
