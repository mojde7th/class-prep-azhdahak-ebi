import { ebiBlocks, ebiFormTips, ebiMeta } from '../data/ebi'
import { BlockCard } from './BlockCard'

export function SongPanel() {
  return (
    <div className="space-y-5">
      <div className="rounded-2xl border border-[var(--line)] bg-[var(--stage)] p-5 text-center">
        <p className="text-sm font-medium text-[var(--accent)]">{ebiMeta.artist}</p>
        <h2 className="literary mt-1 text-3xl font-bold md:text-4xl">
          {ebiMeta.title}
        </h2>
        <p className="mt-2 text-sm text-[var(--ink-soft)]">{ebiMeta.subtitle}</p>
        <p className="mt-2 text-sm leading-7 text-[var(--pause)]">
          ترانه‌سرا: {ebiMeta.lyricist} · آهنگساز: {ebiMeta.composer}
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[var(--ink-soft)]">
          {ebiMeta.note}
        </p>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {ebiFormTips.map((tip) => (
          <div
            key={tip.title}
            className="rounded-2xl border border-[var(--line)] bg-white/55 p-4"
          >
            <h3 className="font-bold text-[var(--ink)]">{tip.title}</h3>
            <p className="mt-2 text-sm leading-7 text-[var(--ink-soft)]">{tip.body}</p>
          </div>
        ))}
      </div>

      {ebiBlocks.map((block) => (
        <BlockCard key={block.id} block={block} />
      ))}
    </div>
  )
}
