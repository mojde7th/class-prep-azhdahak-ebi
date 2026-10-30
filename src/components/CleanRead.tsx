import { cleanAzhdahak, cleanEbi } from '../data/cleanTexts'

type Work = 'azhdahak' | 'ebi'

export function CleanRead({ work }: { work: Work }) {
  if (work === 'ebi') {
    return (
      <article className="clean-sheet rounded-2xl border border-[var(--line)] bg-[var(--stage)] px-4 py-8 md:px-10 md:py-12">
        <header className="mb-10 text-center">
          <h2 className="clean-title">{cleanEbi.title}</h2>
          <p className="clean-sub mt-3">{cleanEbi.subtitle}</p>
          <p className="clean-meta mt-2">{cleanEbi.author}</p>
        </header>

        <div className="mx-auto max-w-3xl space-y-10">
          {cleanEbi.verses.map((verse, i) => (
            <div key={i} className="space-y-3 text-center">
              {verse.map((line, j) => (
                <p key={j} className="clean-line">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </article>
    )
  }

  return (
    <article className="clean-sheet rounded-2xl border border-[var(--line)] bg-[var(--stage)] px-4 py-8 md:px-10 md:py-12">
      <header className="mb-10 text-center">
        <h2 className="clean-title">{cleanAzhdahak.title}</h2>
        <p className="clean-sub mt-3">{cleanAzhdahak.subtitle}</p>
        <p className="clean-meta mt-2">{cleanAzhdahak.author}</p>
      </header>

      <div className="mx-auto max-w-3xl space-y-10">
        {cleanAzhdahak.sections.map((section, i) => (
          <section key={i}>
            {section.heading && (
              <h3 className="clean-heading mb-5 text-center">{section.heading}</h3>
            )}
            <div className="space-y-6">
              {section.paragraphs.map((p, j) => (
                <p key={j} className="clean-body whitespace-pre-line">
                  {p}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  )
}
