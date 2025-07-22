import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter();
  const { locale } = router;

  const t = {
    zh: {
      title: '欢迎来到 UinAI',
      description: '一个面向 AI 极客与创作者的协作社区',
    },
    en: {
      title: 'Welcome to UinAI',
      description: 'A collaborative community for AI geeks and creators',
    },
  };

  const changeLanguage = () => {
    const newLocale = locale === 'zh' ? 'en' : 'zh';
    router.push('/', '/', { locale: newLocale });
  };

  return (
    <div className="min-h-screen bg-black text-white font-mono p-8">
      <Head>
        <title>UinAI</title>
      </Head>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl mb-4">{t[locale].title}</h1>
        <p className="text-lg mb-8">{t[locale].description}</p>
        <button onClick={changeLanguage} className="border px-4 py-2 rounded hover:bg-white hover:text-black transition">
          {locale === 'zh' ? 'Switch to English' : '切换到中文'}
        </button>
      </div>
    </div>
  )
}