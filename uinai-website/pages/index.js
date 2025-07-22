import Head from 'next/head'
import { useRouter } from 'next/router'

const translations = {
  zh: {
    title: '欢迎来到 UinAI',
    description: '一个面向 AI 极客与创作者的协作社区',
    switchText: '切换到 English',
  },
  en: {
    title: 'Welcome to UinAI',
    description: 'A collaborative community for AI geeks and creators',
    switchText: 'Switch to 中文',
  },
};

export default function Home() {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;

  const t = translations[locale] || translations.en;

  const changeLanguage = () => {
    const newLocale = locale === 'zh' ? 'en' : 'zh';
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <div className="min-h-screen bg-black text-white font-mono p-8">
      <Head>
        <title>UinAI</title>
        <meta name="description" content={t.description} />
      </Head>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl mb-4">{t.title}</h1>
        <p className="text-lg mb-8">{t.description}</p>
        <button
          onClick={changeLanguage}
          className="border px-4 py-2 rounded hover:bg-white hover:text-black transition"
        >
          {t.switchText}
        </button>
      </div>
    </div>
  );
}
