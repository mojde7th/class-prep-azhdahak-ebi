const items = [
  {
    cls: 'mark-loud',
    label: 'با اوج / بلند',
    desc: 'صدا را بالا ببر؛ کلمات هویت، فریاد، خون، دماوند، مارِ کینه',
  },
  {
    cls: 'mark-stretch',
    label: 'کشش',
    desc: 'صدا را روی واژه بکش؛ خط‌تیره‌ها و تصاویر بزرگ',
  },
  {
    cls: 'mark-soft',
    label: 'نرم / نجوا',
    desc: 'آرام‌تر، درونی، خاطره یا فرود بعد از اوج',
  },
  {
    cls: '',
    label: '｜ مکث کوتاه',
    desc: 'نیم‌نفس؛ معمولاً بعد از ویرگول یا خط‌تیره',
  },
  {
    cls: '',
    label: '｜｜ مکث بلند',
    desc: 'نفس کامل؛ بعد از نقطه، علامت تعجب، یا پایان تصویر',
  },
]

export function Legend() {
  return (
    <section className="rounded-2xl border border-[var(--line)] bg-white/50 p-4 md:p-5">
      <h2 className="mb-3 text-base font-bold text-[var(--ink)] md:text-lg">
        راهنمای نشانه‌ها
      </h2>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li
            key={item.label}
            className="rounded-xl border border-[var(--line)] bg-[var(--stage)] px-3 py-2.5"
          >
            <div className={`literary text-[1.05rem] leading-none ${item.cls}`}>
              {item.label}
            </div>
            <p className="mt-1.5 text-sm leading-6 text-[var(--ink-soft)]">
              {item.desc}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
