import type { Block } from './types'

export const ebiMeta = {
  title: 'شب مرد تنها',
  subtitle: 'ترانه برای خوانش کلاسی · لحن محزون',
  artist: 'ابی',
  lyricist: 'لیلا کسری (هدیه)',
  composer: 'فریدون خشنود',
  note: 'شروع با «خیال تو» و همخون شدن دل؛ همان حسی که گفتی شبیه دلِ ابی است.',
}

/** همان قالب بندبه‌بند اژدهاک؛ برای نمایش با BlockCard */
export const ebiBlocks: Block[] = [
  {
    id: 'ebi-band1',
    title: 'بند اول · خیال و ویرانی',
    pageHint: 'مطلع ترانه',
    mood: 'نرم · محزون · روایی',
    tip: 'مثل نجوای شب شروع کن. مصراع اول گرم، مصراع دوم تلخ. بین دو خط یک مکث کوتاه.',
    segments: [
      {
        text: 'شبی با خیالِ تو همخونه شد دل',
        mark: 'soft',
        pause: 'short',
        phon: 'šabi bā xiāl-e to hamxune šod del',
        note: 'کشش روی «شبی» و «همخونه». حس نزدیکی خیالی، نه فریاد.',
      },
      {
        text: 'نبودی ندیدی چه ویرونه شد دل',
        mark: 'stretch',
        pause: 'long',
        phon: 'nabudi nadidi če virune šod del',
        note: 'پاسخ تلخ. روی «ویرونه» بکش و سنگین کن.',
      },
      {
        text: 'نبودی ندیدی پریشونیامو',
        mark: 'soft',
        pause: 'short',
        phon: 'parishuniāmo',
        note: 'ادامه شکایت؛ صدا شکسته و نزدیک.',
      },
      {
        text: 'فقط باد و بارون شنیدن صدامو',
        mark: 'plain',
        pause: 'long',
        phon: 'faghat bād o bārun šenidan sedāmo',
        note: 'تصویر تنهایی. «باد و بارون» را با حس طبیعت بگو.',
      },
      {
        text: 'غمت سرد و وحشی به ویرونه می‌زد',
        mark: 'loud',
        pause: 'short',
        phon: 'ġamet sard o vahši be virune mizad',
        note: 'اولین اوج بند. «سرد و وحشی» را جدا و محکم.',
      },
      {
        text: 'دلم با تو خوش بود و پیمونه می‌زد',
        mark: 'stretch',
        pause: 'short',
        phon: 'delam bā to xoš bud o peymune mizad',
        note: 'پیمونه = پیمانهٔ شراب. گرم‌تر از مصراع قبل؛ خاطرهٔ مستی.',
      },
      {
        text: 'دلم با تو خوش بود و پیمونه می‌زد',
        mark: 'soft',
        pause: 'long',
        note: 'تکرار؛ نرم‌تر و کشیده‌تر. مکث بلند قبل از ترجیع.',
      },
    ],
  },
  {
    id: 'ebi-chorus1',
    title: 'ترجیع‌بند · قلندر و خیال',
    pageHint: 'اوج هویتی ترانه',
    mood: 'باز · بلند · سینه‌باز',
    tip: 'اینجا از نجوا بیرون بیا. سینه باز، صدا پهن. دو خط اول هویتی، دو خط بعد دعا.',
    segments: [
      {
        text: 'نه مرد قلندر نه آتش‌پرستم',
        mark: 'loud',
        pause: 'short',
        phon: 'na mard-e ġalandar na ātaš-parastam',
        note: 'قلندر با غین. بیان هویت؛ محکم و واضح.',
      },
      {
        text: 'فقط با خیالت شب‌ها مستِ مستم',
        mark: 'stretch',
        pause: 'long',
        phon: 'faghat bā xiālet šabhā mast-e mastam',
        note: 'اوج احساسی. «مستِ مستم» را دوباره‌گونه بکش.',
      },
      {
        text: 'الهی سحر پشت کوها بمیره',
        mark: 'loud',
        pause: 'short',
        phon: 'elāhi sahar pošt-e kuhā bemire',
        note: 'دعا با التماس. «الهی» را بلند و ملتمسانه.',
      },
      {
        text: 'خدا این شب‌ها رو از عاشق نگیره',
        mark: 'stretch',
        pause: 'long',
        phon: 'xodā in šabhā ro az āšeg nagire',
        note: 'فرود التماس. شب‌ها را نگه دار؛ پایان ترجیع را کامل ادا کن.',
      },
    ],
  },
  {
    id: 'ebi-band2',
    title: 'بند دوم · شب مرد تنها',
    pageHint: 'قلب معنایی ترانه',
    mood: 'سنگین · غربت · بی‌قراری',
    tip: 'قبل از «شبِ مردِ تنها، شبِ بی‌تو مردن» نیم‌ثانیه مکث نمایشی. این خط را مثل تیتر بگو.',
    segments: [
      {
        text: 'نه یک شب که هر شب دلم بی‌قراره',
        mark: 'plain',
        pause: 'short',
        phon: 'na yek šab ke har šab delam biġarāre',
        note: 'بی‌قراری را در ریتم نشان بده؛ کمی شتاب خسته.',
      },
      {
        text: 'می‌خواد مثلِ بارون بباره، بباره',
        mark: 'stretch',
        pause: 'long',
        phon: 'mixād mesl-e bārun bebāre bebāre',
        note: 'تکرار «بباره» مثل ریزش باران؛ بکش.',
      },
      {
        text: 'شبِ مردِ تنها پُر از یادِ یاره',
        mark: 'loud',
        pause: 'short',
        phon: 'šab-e mard-e tanhā por az yād-e yāre',
        note: 'عنوان ترانه در متن. محکم و واضح؛ این خط را بلد باش.',
      },
      {
        text: 'پُر از گریه تلخ بی‌اختیاره',
        mark: 'soft',
        pause: 'long',
        phon: 'por az gerye-ye talk bi-extiyāre',
        note: 'فرود غم. تلخ را با طعم تلخی در صدا.',
      },
      {
        text: 'شبِ مردِ تنها، شبِ بی‌تو مردن',
        mark: 'loud',
        pause: 'short',
        phon: 'šab-e mard-e tanhā, šab-e bi-to mordan',
        note: 'سنگین‌ترین خط. مکث کوتاه بعد از ویرگول؛ بعد «بی‌تو مردن» را بکوب.',
      },
      {
        text: 'شبِ غربت و دل به مستی سپردن',
        mark: 'stretch',
        pause: 'long',
        phon: 'šab-e ġorbat o del be masti sepordan',
        note: 'غربت با غین. حس تبعید و تسلیم.',
      },
      {
        text: 'شب‌های جوونی چه بی‌اعتباره',
        mark: 'soft',
        pause: 'short',
        phon: 'šabhā-ye javuni če bi-eʿtebāre',
        note: 'حسرت جوانی؛ نرم و آهی.',
      },
      {
        text: 'همه‌اش بی‌قراری، همه‌اش انتظاره',
        mark: 'stretch',
        pause: 'short',
        phon: 'hamaš biġarāri hamaš entezāre',
        note: 'توازن دو نیمه. تکرار بعدی را حتی کشیده‌تر.',
      },
      {
        text: 'همه‌اش بی‌قراری، همه‌اش انتظاره',
        mark: 'soft',
        pause: 'long',
        note: 'تکرار پایانی؛ صدا را کم کن و بکش. بعد ترجیع دوم.',
      },
    ],
  },
  {
    id: 'ebi-chorus2',
    title: 'ترجیع پایانی · بازگشت خیال',
    pageHint: 'جمع‌بندی خوانش',
    mood: 'اوج نهایی · بعد فرود گرم',
    tip: 'ترجیع را دوباره با اوج بخوان؛ اگر کلاس اجازه داد، مصراع «پیمونه می‌زد» را دو سه بار نرم تکرار کن و تمام.',
    segments: [
      {
        text: 'نه مرد قلندر نه آتش‌پرستم',
        mark: 'loud',
        pause: 'short',
        phon: 'na mard-e ġalandar na ātaš-parastam',
        note: 'بازگشت ترجیع؛ کمی پخته‌تر از بار اول.',
      },
      {
        text: 'فقط با خیالت شب‌ها مستِ مستم',
        mark: 'stretch',
        pause: 'short',
        phon: 'faghat bā xiālet šabhā mast-e mastam',
        note: 'کشش کامل روی مستِ مستم.',
      },
      {
        text: 'الهی سحر پشت کوها بمیره',
        mark: 'loud',
        pause: 'short',
        phon: 'elāhi sahar pošt-e kuhā bemire',
        note: 'دعا را این بار کمی خسته‌تر و حقیقی‌تر بگو.',
      },
      {
        text: 'خدا این شب‌ها رو از عاشق نگیره',
        mark: 'stretch',
        pause: 'long',
        phon: 'xodā in šabhā ro az āšeg nagire',
        note: 'پایان التماس. مکث نهایی؛ نگه دار.',
      },
      {
        text: 'دلم با تو خوش بود و پیمونه می‌زد',
        mark: 'soft',
        pause: 'short',
        phon: 'delam bā to xoš bud o peymune mizad',
        note: 'فرود پایانی اجرا؛ گرم و خاطره.',
      },
      {
        text: 'دلم با تو خوش بود و پیمونه می‌زد',
        mark: 'soft',
        pause: 'long',
        note: 'آخرین تکرار؛ آهسته‌ترین و کشیده‌ترین. تمام.',
      },
    ],
  },
]

export const ebiFormTips = [
  {
    title: 'ساختار لحن',
    body: 'بند اول محزون و روایی است. ترجیع‌بند باید بازتر و بلندتر باشد. بند «شب مرد تنها» اوج معنایی است.',
  },
  {
    title: 'نفس‌گیری',
    body: 'بعد از هر جفت مصراع نفس کوتاه. قبل از ترجیع نفس کامل. قبل از «شبِ بی‌تو مردن» مکث نمایشی.',
  },
  {
    title: 'ارتباط با اژدهاک',
    body: 'هر دو شب و تنهایی دارند. اژدهاک فریاد حماسی است؛ ابی فریاد عاشقانه و شکسته. از حماسی نرم فرود بیا.',
  },
  {
    title: 'تمرین سریع',
    body: 'یک بار فقط ترجیع با اوج. یک بار فقط «شبِ بی‌تو مردن» آهسته. بعد یک‌بار کامل از اول تا ترجیع دوم.',
  },
]

export const ebiVocab = [
  { word: 'همخونه', phon: 'hamxune', mean: 'هم‌خانه؛ نزدیک و آشنا' },
  { word: 'ویرونه', phon: 'virune', mean: 'ویرانه‌شده؛ خراب' },
  { word: 'پریشونیامو', phon: 'parishuniāmo', mean: 'پریشانی‌هایم را' },
  { word: 'پیمونه', phon: 'peymune', mean: 'پیمانهٔ شراب' },
  { word: 'قلندر', phon: 'ġalandar', mean: 'درویش آزاد / رند' },
  { word: 'آتش‌پرست', phon: 'ātaš-parast', mean: 'پرستندهٔ آتش؛ استعارهٔ شور' },
  { word: 'بی‌قراره', phon: 'biġarāre', mean: 'آرام ندارد' },
  { word: 'غربت', phon: 'ġorbat', mean: 'دوری از خانه / تبعید' },
  { word: 'بی‌اختیاره', phon: 'bi-extiyāre', mean: 'بدون اراده؛ ناگزیر' },
  { word: 'بی‌اعتباره', phon: 'bi-eʿtebāre', mean: 'بی‌ارزش / ناپایدار' },
]
