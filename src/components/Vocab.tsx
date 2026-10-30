import { vocab } from '../data/azhdahak'

export function Vocab() {
  return (
    <section className="rounded-2xl border border-[var(--line)] bg-white/55 p-4 md:p-6">
      <h2 className="mb-1 text-lg font-extrabold">واژه‌نامهٔ تلفظ</h2>
      <p className="mb-4 text-sm leading-7 text-[var(--ink-soft)]">
        قبل از کلاس این‌ها را یک‌بار بلند بخوان تا گیر نکنی.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[28rem] border-collapse text-sm">
          <thead>
            <tr className="border-b border-[var(--line)] text-right text-[var(--ink-soft)]">
              <th className="px-2 py-2 font-semibold">واژه</th>
              <th className="px-2 py-2 font-semibold">تلفظ</th>
              <th className="px-2 py-2 font-semibold">معنی</th>
            </tr>
          </thead>
          <tbody>
            {vocab.map((v) => (
              <tr key={v.word} className="border-b border-[var(--line)]/70">
                <td className="px-2 py-2.5 font-bold">{v.word}</td>
                <td className="phon px-2 py-2.5" dir="ltr">
                  {v.phon}
                </td>
                <td className="px-2 py-2.5 text-[var(--ink-soft)]">{v.mean}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
