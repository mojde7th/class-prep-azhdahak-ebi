import type { SongLine } from './types'

export const ebiMeta = {
  title: 'شب مرد تنها',
  artist: 'ابی',
  lyricist: 'لیلا کسری (هدیه)',
  composer: 'فریدون خشنود',
  note: 'ترانه‌ای که با تصویر «خیال تو» و شبِ تنهایی شروع می‌شود؛ همان خطی که گفتی شبیه همخونِ دلِ ابی است.',
}

export const ebiLines: SongLine[] = [
  {
    text: 'شبی با خیالِ تو همخونه شد دل',
    mark: 'soft',
    stretchWords: ['شبی', 'خیالِ تو', 'همخونه'],
    phon: 'šabi bā xiāl-e to hamxune šod del',
    note: 'شروع نرم و محزون. «همخونه» را کمی بکش؛ حس نزدیکی خیالی.',
  },
  {
    text: 'نبودی ندیدی چه ویرونه شد دل',
    mark: 'stretch',
    stretchWords: ['ویرونه'],
    phon: 'nabudi nadidi če virune šod del',
    note: 'پاسخ تلخ مصراع اول. روی «ویرونه» اوج غم بگیر.',
  },
  {
    text: 'نبودی ندیدی پریشونیامو',
    mark: 'soft',
    stretchWords: ['پریشونیامو'],
    phon: 'parishuniāmo',
    note: 'ادامه شکایت نرم؛ صدای شکسته، نه بلند.',
  },
  {
    text: 'فقط باد و بارون شنیدن صدامو',
    mark: 'plain',
    stretchWords: ['باد و بارون'],
    phon: 'faghat bād o bārun šenidan sedāmo',
    note: 'تصویر تنهایی. «باد و بارون» را با حس طبیعت بگو.',
  },
  {
    text: 'غمت سرد و وحشی به ویرونه می‌زد',
    mark: 'loud',
    stretchWords: ['سرد و وحشی', 'ویرونه'],
    phon: 'ġamet sard o vahši be virune mizad',
    note: 'اولین اوج بند. «سرد و وحشی» را محکم و جدا جدا.',
  },
  {
    text: 'دلم با تو خوش بود و پیمونه می‌زد',
    mark: 'stretch',
    stretchWords: ['خوش بود', 'پیمونه'],
    phon: 'delam bā to xoš bud o peymune mizad',
    note: 'پیمونه = پیمانهٔ شراب. حس مستیِ خاطره؛ گرم‌تر از مصراع قبل.',
  },
  {
    text: 'دلم با تو خوش بود و پیمونه می‌زد',
    mark: 'soft',
    note: 'تکرار؛ کمی نرم‌تر و کشیده‌تر از بار اول.',
  },
  {
    text: 'نه مرد قلندر نه آتش‌پرستم',
    mark: 'loud',
    stretchWords: ['قلندر', 'آتش‌پرستم'],
    phon: 'na mard-e ġalandar na ātaš-parastam',
    note: 'ورود به ترجیع‌بند. سینه باز، بیان هویتی. قلندر با غین.',
  },
  {
    text: 'فقط با خیالت شب‌ها مستِ مستم',
    mark: 'stretch',
    stretchWords: ['خیالت', 'مستِ مستم'],
    phon: 'faghat bā xiālet šabhā mast-e mastam',
    note: 'اوج احساسی ترجیع. «مستِ مستم» را دوباره‌گونه و کشیده.',
  },
  {
    text: 'الهی سحر پشت کوها بمیره',
    mark: 'loud',
    stretchWords: ['الهی', 'بمیره'],
    phon: 'elāhi sahar pošt-e kuhā bemire',
    note: 'دعا با التماس. «الهی» را بلند و ملتمسانه.',
  },
  {
    text: 'خدا این شب‌ها رو از عاشق نگیره',
    mark: 'stretch',
    stretchWords: ['شب‌ها', 'نگیره'],
    phon: 'xodā in šabhā ro az āšeg nagire',
    note: 'فرود التماس. شب‌ها را نگه دار؛ پایان ترجیع را کامل ادا کن.',
  },
  {
    text: 'نه یک شب که هر شب دلم بی‌قراره',
    mark: 'plain',
    stretchWords: ['هر شب', 'بی‌قراره'],
    phon: 'biġarāre',
    note: 'بند میانی؛ بی‌قراری را در ریتم نشان بده.',
  },
  {
    text: 'می‌خواد مثلِ بارون بباره، بباره',
    mark: 'stretch',
    stretchWords: ['بباره', 'بباره'],
    phon: 'mixād mesl-e bārun bebāre bebāre',
    note: 'تکرار «بباره» را مثل ریزش باران بکش.',
  },
  {
    text: 'شبِ مردِ تنها پُر از یادِ یاره',
    mark: 'loud',
    stretchWords: ['شبِ مردِ تنها', 'یادِ یاره'],
    phon: 'šab-e mard-e tanhā por az yād-e yāre',
    note: 'عنوان ترانه در متن. محکم و واضح؛ این خط را بلد باش.',
  },
  {
    text: 'پُر از گریه تلخ بی‌اختیاره',
    mark: 'soft',
    stretchWords: ['گریه تلخ'],
    phon: 'por az gerye-ye talk bi-extiyāre',
    note: 'فرود غم. تلخ را با طعم تلخی در صدا.',
  },
  {
    text: 'شبِ مردِ تنها، شبِ بی‌تو مردن',
    mark: 'loud',
    stretchWords: ['بی‌تو مردن'],
    phon: 'šab-e bi-to mordan',
    note: 'سنگین‌ترین خط معنایی. مکث کوتاه بعد از ویرگول.',
  },
  {
    text: 'شبِ غربت و دل به مستی سپردن',
    mark: 'stretch',
    stretchWords: ['غربت', 'مستی سپردن'],
    phon: 'šab-e ġorbat o del be masti sepordan',
    note: 'غربت با غین. حس تبعید و تسلیم.',
  },
  {
    text: 'شب‌های جوونی چه بی‌اعتباره',
    mark: 'soft',
    stretchWords: ['جوونی', 'بی‌اعتباره'],
    phon: 'šabhā-ye javuni če bi-eʿtebāre',
    note: 'حسرت جوانی؛ نرم و آهی.',
  },
  {
    text: 'همه‌اش بی‌قراری، همه‌اش انتظاره',
    mark: 'stretch',
    stretchWords: ['بی‌قراری', 'انتظاره'],
    phon: 'hamaš biġarāri hamaš entezāre',
    note: 'توازن دو نیمه. تکرار بعدی را حتی کشیده‌تر کن.',
  },
  {
    text: 'همه‌اش بی‌قراری، همه‌اش انتظاره',
    mark: 'soft',
    note: 'تکرار پایانی بند؛ صدا را کم کن و بکش.',
  },
]

export const ebiFormTips = [
  {
    title: 'ساختار لحن',
    body: 'بند اول محزون و روایی است. ترجیع‌بند «نه مرد قلندر…» باید بازتر، بلندتر و با سینه‌ی باز خوانده شود. بند «شب مرد تنها» اوج معنایی است.',
  },
  {
    title: 'نفس‌گیری',
    body: 'بعد از هر جفت مصراع یک نفس کوتاه. قبل از ترجیع‌بند نفس کامل. قبل از «شبِ مردِ تنها، شبِ بی‌تو مردن» مکث نمایشی نیم‌ثانیه‌ای.',
  },
  {
    title: 'ارتباط با اژدهاک',
    body: 'هر دو متن شب، تنهایی، درد و فریاد درونی دارند. در اژدهاک فریاد حماسی است؛ در ابی فریاد عاشقانه و شکسته. در کلاس اگر پشت سر هم می‌خوانی، از حماسی به محزون نرم فرود بیا.',
  },
  {
    title: 'تمرین سریع قبل کلاس',
    body: 'یک بار فقط ترجیع‌بند را با اوج بخوان. یک بار فقط بند «شب مرد تنها… بی‌تو مردن» را آهسته و سنگین. بعد یک‌بار کامل از اول تا ترجیع دوم.',
  },
]
