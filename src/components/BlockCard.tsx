import type { Block } from '../data/types'

function markClass(mark?: string) {
  if (mark === 'loud') return 'mark-loud'
  if (mark === 'stretch') return 'mark-stretch'
  if (mark === 'soft') return 'mark-soft'
  return ''
}

export function BlockCard({ block }: { block: Block }) {
  return (
    <article className="rounded-2xl border border-[var(--line)] bg-white/55 p-4 shadow-none md:p-6">
      <header className="mb-4 border-b border-[var(--line)] pb-3">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-lg font-extrabold text-[var(--ink)] md:text-xl">
            {block.title}
          </h3>
          <span className="text-xs font-medium text-[var(--pause)] md:text-sm">
            {block.pageHint}
          </span>
        </div>
        <p className="mt-1 text-sm text-[var(--loud)]">{block.mood}</p>
        <p className="mt-2 text-sm leading-7 text-[var(--ink-soft)]">{block.tip}</p>
      </header>

      <div className="literary">
        {block.segments.map((seg, i) => (
          <div key={`${block.id}-${i}`} className="mb-1">
            <p>
              <span className={markClass(seg.mark)}>{seg.text}</span>
              {seg.pause === 'short' && <span className="mark-pause"> ｜ </span>}
              {seg.pause === 'long' && <span className="mark-pause"> ｜｜ </span>}
            </p>
            {(seg.note || seg.phon) && (
              <div className="seg-note">
                {seg.phon && (
                  <div className="phon mb-1" dir="ltr">
                    {seg.phon}
                  </div>
                )}
                {seg.note && <div>{seg.note}</div>}
              </div>
            )}
          </div>
        ))}
      </div>
    </article>
  )
}
