import { useState } from 'react'
import { BlockCard } from './components/BlockCard'
import { Legend } from './components/Legend'
import { SongPanel } from './components/SongPanel'
import { Vocab } from './components/Vocab'
import { azhdahakBlocks, azhdahakMeta } from './data/azhdahak'

type Tab = 'azhdahak' | 'ebi' | 'vocab' | 'plan'

export default function App() {
  const [tab, setTab] = useState<Tab>('azhdahak')

  const tabs: { id: Tab; label: string }[] = [
    { id: 'azhdahak', label: 'اژدهاک' },
    { id: 'ebi', label: 'شب مرد تنها' },
    { id: 'vocab', label: 'تلفظ' },
    { id: 'plan', label: 'پلان کلاس' },
  ]

  return (
    <div className="mx-auto min-h-screen max-w-5xl px-4 py-6 md:px-6 md:py-10">
      <header className="mb-6 md:mb-8">
        <p className="text-sm font-medium tracking-wide text-[var(--accent)]">
          آماده‌سازی کلاس امروز
        </p>
        <h1 className="mt-2 text-3xl font-extrabold leading-tight text-[var(--ink)] md:text-4xl">
          برخوانی و ترانه
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--ink-soft)] md:text-base">
          پنج صفحهٔ اول «{azhdahakMeta.title}» از {azhdahakMeta.author} با
          نشانه‌گذاری اوج، کشش و مکث؛ به‌همراه متن کامل «شب مرد تنها»ی ابی برای
          خوانش کلاسی.
        </p>
      </header>

      <nav className="mb-5 flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
              tab === t.id
                ? 'border-[var(--ink)] bg-[var(--ink)] text-[var(--paper)]'
                : 'border-[var(--line)] bg-white/50 text-[var(--ink-soft)] hover:border-[var(--ink-soft)]'
            }`}
          >
            {t.label}
          </button>
        ))}
      </nav>

      <Legend />

      <main className="mt-5 space-y-5">
        {tab === 'azhdahak' && (
          <>
            <div className="rounded-2xl border border-[var(--line)] bg-[var(--stage)] p-5 text-center">
              <h2 className="literary text-3xl font-bold md:text-4xl">
                {azhdahakMeta.title}
              </h2>
              <p className="mt-2 text-sm text-[var(--ink-soft)]">
                {azhdahakMeta.subtitle}
              </p>
              <p className="mt-1 text-sm text-[var(--pause)]">{azhdahakMeta.author}</p>
            </div>
            {azhdahakBlocks.map((block) => (
              <BlockCard key={block.id} block={block} />
            ))}
          </>
        )}

        {tab === 'ebi' && <SongPanel />}

        {tab === 'vocab' && <Vocab />}

        {tab === 'plan' && (
          <section className="space-y-4">
            <div className="rounded-2xl border border-[var(--line)] bg-white/55 p-5 md:p-6">
              <h2 className="text-xl font-extrabold">پلان سریع قبل از کلاس</h2>
              <ol className="mt-4 list-decimal space-y-3 pr-5 text-sm leading-7 text-[var(--ink-soft)]">
                <li>
                  واژه‌نامه را یک‌دور بلند بخوان؛ مخصوصاً غریو، رشک، آذرخش، تازیانه،
                  گودنا، نهیب.
                </li>
                <li>
                  بند یکم را فقط تا «آذرخش» تمرین کن؛ این اولین اوج توست.
                </li>
                <li>
                  بند سوم را روی تکرار «پس تازیانه بود و تن» ریتم بگیر؛ مثل ورد.
                </li>
                <li>
                  پایان بند سوم «این مارِ کینه بود» را جدا تمرین کن؛ باید واضح و
                  تلخ بنشیند.
                </li>
                <li>
                  ترانه: ترجیع «نه مرد قلندر…» و خط «شبِ بی‌تو مردن» را دو بار با
                  اوج و دو بار آهسته بخوان.
                </li>
              </ol>
            </div>

            <div className="rounded-2xl border border-[var(--line)] bg-white/55 p-5 md:p-6">
              <h2 className="text-xl font-extrabold">قانون طلایی برخوانی</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--ink-soft)]">
                <li>
                  خط‌تیره در متن بیضایی = مکث نمایشی. عجله نکن.
                </li>
                <li>
                  جمله‌های کوتاه پشت‌سرهم را جدا جدا بزن؛ مثل ضرب طبل.
                </li>
                <li>
                  هر اوج را با فرود جبران کن؛ وگرنه گوش مخاطب خسته می‌شود.
                </li>
                <li>
                  در اژدهاک تو «اژدهاک» هستی؛ در ترانه تو عاشقِ شب‌زنده‌داری. دو
                  شخصیت، دو لحن.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-[var(--line)] bg-[var(--stage)] p-5 md:p-6">
              <h2 className="text-xl font-extrabold">اگر وقت کم بود</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">
                فقط این سه نقطه را کامل مسلط شو: ۱) شروع بند یکم تا دماوند ۲)
                صحنهٔ تازیانه و «خون!» ۳) «این مارِ کینه بود» + ترجیع ترانهٔ ابی.
                همین سه قله برای کلاس امروز کافی‌اند.
              </p>
            </div>
          </section>
        )}
      </main>

      <footer className="mt-10 border-t border-[var(--line)] pt-4 text-center text-xs text-[var(--pause)]">
        متن اژدهاک از پنج صفحهٔ اول فایل کلاس · نشانه‌گذاری برای تمرین شخصی خوانش
      </footer>
    </div>
  )
}
