import { ebiFormTips, ebiLines, ebiMeta } from '../data/ebi'

function markClass(mark?: string) {
  if (mark === 'loud') return 'mark-loud'
  if (mark === 'stretch') return 'mark-stretch'
  if (mark === 'soft') return 'mark-soft'
  return ''
}

export function SongPanel() {
  return (
    <div className="space-y-5">
      <header className="rounded-2xl border border-[var(--line)] bg-white/55 p-5 md:p-6">
        <p className="text-sm text-[var(--accent)]">{ebiMeta.artist}</p>
        <h2 className="mt-1 text-2xl font-extrabold md:text-3xl">{ebiMeta.title}</h2>
        <p className="mt-2 text-sm leading-7 text-[var(--ink-soft)]">
          ترانه‌سرا: {ebiMeta.lyricist} · آهنگساز: {ebiMeta.composer}
        </p>
        <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">{ebiMeta.note}</p>
      </header>

      <div className="grid gap-3 md:grid-cols-2">
        {ebiFormTips.map((tip) => (
          <div
            key={tip.title}
            className="rounded-2xl border border-[var(--line)] bg-[var(--stage)] p-4"
          >
            <h3 className="font-bold text-[var(--ink)]">{tip.title}</h3>
            <p className="mt-2 text-sm leading-7 text-[var(--ink-soft)]">{tip.body}</p>
          </div>
        ))}
      </div>

      <section className="rounded-2xl border border-[var(--line)] bg-white/55 p-4 md:p-6">
        <h3 className="mb-4 text-lg font-extrabold">متن با نشانه‌گذاری</h3>
        <div className="space-y-1">
          {ebiLines.map((line, i) => (
            <div key={i}>
              <p className="literary">
                <span className={markClass(line.mark)}>{line.text}</span>
              </p>
              {(line.note || line.phon) && (
                <div className="seg-note">
                  {line.phon && (
                    <div className="phon mb-1" dir="ltr">
                      {line.phon}
                    </div>
                  )}
                  {line.note && <div>{line.note}</div>}
                  {line.stretchWords && line.stretchWords.length > 0 && (
                    <div className="mt-1 text-xs text-[var(--stretch)]">
                      کشش روی: {line.stretchWords.join(' · ')}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
