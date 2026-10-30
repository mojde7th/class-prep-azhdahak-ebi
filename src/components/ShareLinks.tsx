const PAGE_URL = 'https://mojde7th.github.io/class-prep-azhdahak-ebi/'
const REPO_URL = 'https://github.com/mojde7th/class-prep-azhdahak-ebi'

export function ShareLinks() {
  const qrBase = `${import.meta.env.BASE_URL}qr`

  return (
    <section className="rounded-2xl border border-[var(--line)] bg-white/55 p-4 md:p-6">
      <h2 className="text-lg font-extrabold">لینک و کیوآر صفحه</h2>
      <p className="mt-2 text-sm leading-7 text-[var(--ink-soft)]">
        با موبایل اسکن کن تا همان صفحهٔ کلاس باز شود.
      </p>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-[var(--line)] bg-[var(--stage)] p-4 text-center">
          <img
            src={`${qrBase}/page.png`}
            alt="کیوآر صفحهٔ کلاس"
            className="mx-auto h-44 w-44 rounded-lg bg-white object-contain p-2"
          />
          <p className="mt-3 text-sm font-bold">صفحهٔ آمادهٔ کلاس</p>
          <a
            href={PAGE_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-2 block break-all text-xs leading-6 text-[var(--loud)] underline"
            dir="ltr"
          >
            {PAGE_URL}
          </a>
        </div>

        <div className="rounded-xl border border-[var(--line)] bg-[var(--stage)] p-4 text-center">
          <img
            src={`${qrBase}/repo.png`}
            alt="کیوآر ریپوی گیت‌هاب"
            className="mx-auto h-44 w-44 rounded-lg bg-white object-contain p-2"
          />
          <p className="mt-3 text-sm font-bold">ریپوی گیت‌هاب</p>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-2 block break-all text-xs leading-6 text-[var(--loud)] underline"
            dir="ltr"
          >
            {REPO_URL}
          </a>
        </div>
      </div>
    </section>
  )
}
