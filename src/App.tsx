import { useState } from 'react'
import { BlockCard } from './components/BlockCard'
import { Legend } from './components/Legend'
import { ShareLinks } from './components/ShareLinks'
import { SongPanel } from './components/SongPanel'
import { Vocab } from './components/Vocab'
import { azhdahakBlocks, azhdahakMeta } from './data/azhdahak'
import { ebiMeta } from './data/ebi'

type Tab = 'azhdahak' | 'ebi' | 'vocab' | 'plan' | 'share'

export default function App() {
  const [tab, setTab] = useState<Tab>('share')

  const tabs: { id: Tab; label: string }[] = [
    { id: 'share', label: 'لینک و کیوآر' },
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
          دو متن هم‌سطح برای کلاس: پنج صفحهٔ اول «{azhdahakMeta.title}» و متن
          کامل «{ebiMeta.title}»ی ابی؛ هر دو با اوج، کشش، مکث و تلفظ.
        </p>
      </header>

      <div className="mb-5 grid gap-3 md:grid-cols-2">
        <button
          type="button"
          onClick={() => setTab('azhdahak')}
          className={`rounded-2xl border p-4 text-right transition ${
            tab === 'azhdahak'
              ? 'border-[var(--ink)] bg-[var(--ink)] text-[var(--paper)]'
              : 'border-[var(--line)] bg-white/55 text-[var(--ink)] hover:border-[var(--ink-soft)]'
          }`}
        >
          <div className="text-xs opacity-80">{azhdahakMeta.author}</div>
          <div className="mt-1 literary text-2xl font-bold">{azhdahakMeta.title}</div>
          <div
            className={`mt-2 text-sm leading-6 ${
              tab === 'azhdahak' ? 'opacity-85' : 'text-[var(--ink-soft)]'
            }`}
          >
            {azhdahakMeta.subtitle} · بندبه‌بند با نشانه‌گذاری
          </div>
        </button>

        <button
          type="button"
          onClick={() => setTab('ebi')}
          className={`rounded-2xl border p-4 text-right transition ${
            tab === 'ebi'
              ? 'border-[var(--ink)] bg-[var(--ink)] text-[var(--paper)]'
              : 'border-[var(--line)] bg-white/55 text-[var(--ink)] hover:border-[var(--ink-soft)]'
          }`}
        >
          <div className="text-xs opacity-80">{ebiMeta.artist}</div>
          <div className="mt-1 literary text-2xl font-bold">{ebiMeta.title}</div>
          <div
            className={`mt-2 text-sm leading-6 ${
              tab === 'ebi' ? 'opacity-85' : 'text-[var(--ink-soft)]'
            }`}
          >
            {ebiMeta.subtitle} · همان قالب نشانه‌گذاری
          </div>
        </button>
      </div>

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

      {tab !== 'share' && <Legend />}

      <main className="mt-5 space-y-5">
        {tab === 'share' && <ShareLinks />}

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
                  واژه‌نامهٔ هر دو متن را یک‌دور بلند بخوان؛ مخصوصاً غریو، رشک،
                  آذرخش، قلندر، غربت، پیمونه.
                </li>
                <li>
                  اژدهاک: بند یکم را تا «آذرخش» تمرین کن؛ این اولین اوج توست.
                </li>
                <li>
                  اژدهاک: بند سوم را روی تکرار «پس تازیانه بود و تن» ریتم بگیر.
                </li>
                <li>
                  ابی: ترجیع «نه مرد قلندر…» را دو بار با اوج بخوان.
                </li>
                <li>
                  ابی: خط «شبِ مردِ تنها، شبِ بی‌تو مردن» را آهسته و سنگین جدا
                  تمرین کن.
                </li>
              </ol>
            </div>

            <div className="rounded-2xl border border-[var(--line)] bg-white/55 p-5 md:p-6">
              <h2 className="text-xl font-extrabold">قانون طلایی خوانش</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--ink-soft)]">
                <li>خط‌تیره در اژدهاک = مکث نمایشی. عجله نکن.</li>
                <li>جمله‌های کوتاه پشت‌سرهم را جدا جدا بزن؛ مثل ضرب طبل.</li>
                <li>هر اوج را با فرود جبران کن؛ وگرنه گوش مخاطب خسته می‌شود.</li>
                <li>
                  در اژدهاک تو «اژدهاک» هستی؛ در ترانه تو عاشقِ شب‌زنده‌داری. دو
                  شخصیت، دو لحن.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-[var(--line)] bg-[var(--stage)] p-5 md:p-6">
              <h2 className="text-xl font-extrabold">اگر وقت کم بود</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">
                چهار قله: ۱) شروع بند یکم تا دماوند ۲) صحنهٔ تازیانه و «خون!» ۳)
                «این مارِ کینه بود» ۴) ترجیع ابی + «شبِ بی‌تو مردن». همین برای
                کلاس امروز کافی است.
              </p>
            </div>
          </section>
        )}
      </main>

      <footer className="mt-10 border-t border-[var(--line)] pt-4 text-center text-xs text-[var(--pause)]">
        اژدهاک · شب مرد تنها · نشانه‌گذاری برای تمرین شخصی خوانش کلاسی
      </footer>
    </div>
  )
}
