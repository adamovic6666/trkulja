export type Locale = "en" | "sr";
export type CategorySlug = "knives" | "axes" | "other-products";

export type Product = {
  id: number;
  category: CategorySlug;
  image: string;
  sr: {
    name: string;
    length: string;
    handle: string;
    steel: string;
    sheath: string;
  };
  en: {
    name: string;
    length: string;
    handle: string;
    steel: string;
    sheath: string;
  };
};

export const site = {
  phoneDisplay: "+381 65 267 2932",
  phoneHref: "tel:+381652672932",
  email: "trkulja.dalibor@gmail.com",
  address: {
    en: "Krajiska 4, 22320 Indjija, Serbia",
    sr: "Krajiška 4, 22320 Inđija, Srbija",
  },
  socials: {
    facebook: "https://facebook.com/dalibor.trkulja",
    instagram: "https://instagram.com/dalibor_trkulja",
    tiktok: "https://www.tiktok.com/",
    youtube: "https://www.youtube.com/",
    whatsapp: "https://wa.me/381652672932",
    viber: "viber://chat?number=%2B381652672932",
  },
};

export const meta = {
  en: {
    home: {
      title: "Dalibor Trkulja | Unique Handmade Knives and Axes",
      description:
        "Bladesmith workshop Dalibor Trkulja Indjija. Handmade unique blades and axes forged from Damascus steel in a traditional way in a blacksmith fire.",
    },
    products: {
      title: "Unique Damascus Steel Blades and Axes | Dalibor Trkulja",
      description:
        "View the selection of unique forged Damascus blades and axes. Each product is handmade from premium materials according to the customer's idea and wish.",
    },
    knives: {
      title: "Unique Forged Damascus Knives | Dalibor Trkulja",
      description:
        "Hand-forged Damascus steel knives with unique patterns. Liturgical spears. Premium blade crafting according to the customer's idea and wish.",
    },
    axes: {
      title: "Hand Forged Axes and Tomahawks | Dalibor Trkulja",
      description:
        "Unique forged axes made of Damascus steel, Yule log axes, Damascus axes with engraved handles. Everything according to your idea and wish.",
    },
    "other-products": {
      title: "Unique Forged Custom Items | Dalibor Trkulja",
      description:
        "Hand-forged belt buckles, bottle openers, Damascus crosses, unique leather sheaths and other unique items made to order and client's design.",
    },
    contact: {
      title: "Contact | Bladesmith Workshop Dalibor Trkulja Indjija Serbia",
      description:
        "Order your unique forged Damascus knife, axe or something else. Send a price inquiry. Write to us, we are here for all your questions.",
    },
    privacy: {
      title: "Privacy Policy | Bladesmith Workshop Dalibor Trkulja",
      description:
        "Rules on privacy protection and security of your data on the official website of the bladesmith workshop Dalibor Trkulja.",
    },
  },
  sr: {
    home: {
      title: "Dalibor Trkulja | Unikatni ručno rađeni noževi i sekire",
      description:
        "Kovačka radionica Dalibor Trkulja Inđija. Ručna izrada unikatnih sečiva i sekira od damaskus čelika na tradicionalan način u kovačkoj vatri.",
    },
    products: {
      title: "Unikatna sečiva i sekire od damaskus čelika | Dalibor Trkulja",
      description:
        "Pogledajte ponudu unikatnih kovanih sečiva i sekira od damaskusa. Svaki proizvod je ručni rad izrađen od vrhunskih materijala prema ideji i želji kupca.",
    },
    knives: {
      title: "Unikatni kovani noževi od damaskusa | Dalibor Trkulja",
      description:
        "Ručno kovani noževi od damaskus čelika sa unikatnim šarama. Liturgijska koplja. Vrhunska izrada sečiva prema ideji i želji kupca.",
    },
    axes: {
      title: "Ručno kovane sekire i tomahavci | Dalibor Trkulja",
      description:
        "Unikatne kovane sekire od \"damask\" čelika, badnjak sekire, damaskus sekire sa graviranim drškama. Sve po vašoj ideji i želji.",
    },
    "other-products": {
      title: "Unikatni kovani predmeti po želji | Dalibor Trkulja",
      description:
        "Ručno kovane kopče za kaiševe, otvarači za flaše, damaskus krstići, kožne unikatne futrole i drugi unikatni predmeti rađeni po narudžbini i dizajnu klijenta.",
    },
    contact: {
      title: "Kontakt | Kovačka radionica Dalibor Trkulja Inđija",
      description:
        "Poručite svoj unikatni kovani damaskus nož, sekiru ili pak nešto drugo. Pošaljite upit za cenu. Pišite, tu smo za sva vaša pitanja.",
    },
    privacy: {
      title: "Politika privatnosti | Kovačka radionica Dalibor Trkulja",
      description:
        "Pravila o zaštiti privatnosti i bezbednosti vaših podataka na zvaničnoj internet stranici kovačke radionice Dalibor Trkulja.",
    },
  },
};

export const copy = {
  en: {
    nav: { story: "my story", work: "my work", contact: "contact" },
    homeTitle: "my story",
    workTitle: "my work",
    heroSignature: "forging fire",
    ctaTitle: "custom handmade knives, axes & more",
    callNow: "call now",
    videoTitle: "check out my latest work",
    youtube: "YouTube",
    productsTitle: "my work",
    productsIntro:
      "Every product is unique and handmade, manufactured according to your wishes and instructions. The price is determined by the size, details, type of steel and type of the other materials. My clients are always involved in the entire production process, from blade forging to the final product. So let's make something special for you too!",
    categoryIntro: {
      knives:
        "Each hand-forged Damascus steel knife features a unique pattern and is crafted according to the client's idea and wish. We also offer specific liturgical spears. The price depends on the complexity of the blade, details, and the choice of premium materials for handles and leather sheaths. The displayed images are for informational purposes only.",
      axes:
        "Unique forged axes made of Damascus steel, Yule log axes, and tomahawks are handmade, with the option of hand-engraved handles and custom leather sheaths upon request. The price is based on dimensions, forging details, and the type of materials used. The displayed images are for informational purposes only.",
      "other-products":
        "Bottle openers, Damascus crosses, and anything else you can imagine. The price depends on the complexity of craftsmanship, the type of steel, and accompanying details. The displayed images are for informational purposes only.",
    },
    contactTitle: "contact",
    contactPageTitle: "strike while the iron is hot",
    contactIntro:
      "Do you have an idea for a unique knife, axe, or gift? Don't wait - send a price inquiry, and let's forge a plan for your next unique piece. We are here for all your questions.",
    follow: "Follow me",
    privacy: "Privacy policy",
    labels: { length: "Blade length", handle: "Handle", steel: "Steel", sheath: "Sheath" },
    talk: "let's talk",
    categories: {
      knives: "knives",
      axes: "axes",
      "other-products": "& more",
    },
  },
  sr: {
    nav: { story: "o meni", work: "proizvodi", contact: "kontakt" },
    homeTitle: "moja priča",
    workTitle: "moji proizvodi",
    heroSignature: "kovanje",
    ctaTitle: "unikatna ručna izrada sečiva",
    callNow: "pozovite",
    videoTitle: "pogledajte najnovije video snimke",
    youtube: "YouTube",
    productsTitle: "proizvodi",
    productsIntro:
      "Svaki naš proizvod predstavlja unikatni ručni rad i proizvodi se po ideji i želji klijenta. Cena se određuje prema veličini, detaljima, vrsti čelika i vrsti ostalih materijala. Moji klijenti su uvek uključeni u čitav proces proizvodnje, od kovanja sečiva do finalnog proizvoda. Javite se da napravimo nešto posebno i za Vas!",
    categoryIntro: {
      knives:
        "Svaki ručno kovani nož od damaskus čelika poseduje unikatnu šaru i izrađuje se prema ideji i želji klijenta. U ponudi su i specifična liturgijska koplja. Cena zavisi od složenosti sečiva, detalja i izbora vrhunskih materijala za drške i kožne futrole. Prikazane slike su informativnog karaktera.",
      axes:
        "Unikatne kovane sekire od damaskus čelika, badnjak sekire i tomahavci izrađuju se ručno, uz mogućnost ručnog graviranja drški i izrade namenskih kožnih futrola po želji. Cena se formira na osnovu dimenzija, detalja kovanja i vrste upotrebljenih materijala. Prikazane slike su informativnog karaktera.",
      "other-products":
        "Otvarači za flaše, damaskus krstići i bilo šta što zamislite. Cena zavisi od kompleksnosti izrade, vrste čelika i pratećih detalja. Prikazane slike su informativnog karaktera.",
    },
    contactTitle: "kontakt",
    contactPageTitle: "gvožđe se kuje dok je vruće",
    contactIntro:
      "Imate ideju za unikatan nož, sekiru ili poklon? Ne čekajte - pošaljite upit za cenu i hajde da iskujemo plan za vaš sledeći unikat. Tu smo za sva vaša pitanja.",
    follow: "Pratite me",
    privacy: "Politika privatnosti",
    labels: { length: "Dužina", handle: "Drška", steel: "Čelik", sheath: "Futrola" },
    talk: "pozovi",
    categories: {
      knives: "noževi",
      axes: "sekire",
      "other-products": "ostali proizvodi",
    },
  },
};

export const story = {
  sr: [
    "Ja sam Dalibor Trkulja, rođen 1984. godine, živim i radim u Inđiji. Kovanjem i izradom sečiva počeo sam da se bavim iz hobija, 2014. godine. Danas je moj hobi prerastao u potpuno opremljenu kovačku radionicu koja može da zadovolji sve zahteve klijenata.",
    "Bavim se unikatnom ručnom izradom sečiva na stari, tradicionalni način - kovanjem u kovačkoj vatri. Sečiva uglavnom izrađujem od damaskus čelika, materijala koji nastaje spajanjem dve vrste čelika kovačkim varenjem, pri čemu se stvaraju jedinstvene, vidljive šare. Za izradu koristim isključivo nove ugljenične i nerđajuće čelike.",
    "Za damaskus čelik koristim kombinaciju čelika C75 i 15N20, dok za nerđajuća sečiva upotrebljavam Bohler N690. Drške pravim od raznih vrsta lokalnog i egzotičnog drveta, jelenskih rogova, kao i drugih materijala po želji. Uz svako sečivo dolaze i unikatne, ručno rađene futrole od najkvalitetnije kože. Pored noževa, proizvodim i manje sekire, kopče za kaiševe, otvarače za flaše, damskus krstiće, kao i sve ostale predmete po Vašoj želji i zahtevu.",
  ],
  en: [
    "My name is Dalibor Trkulja. I was born in 1984, and I work and live in Indjija, Serbia. I started forging and manufacturing blades as a hobby in 2014. Today, my hobby has grown into a fully equipped blacksmith shop, able to meet all customer requirements.",
    "My workshop produces unique handmade blades in the old traditional way, by forging in a blacksmith's fire. Blades are mostly made from Damascus steel, a material produced by joining two types of steel through forging and forge welding, creating visible patterns on the finished product.",
    "I use only new stainless and carbon steels for blades. For Damascus steel, a combination of 1084 and 15N20 steel is used, while stainless blades are made from Bohler N690 steel. Handles are made from various types of locally available wood, exotic wood, deer antlers, as well as other materials requested by the client. For my products, I also make sheaths from the highest quality leather.",
    "I also make hatchets, belt buckles, bottle openers, as well as all other items requested by clients.",
  ],
};

export const categories: Array<{
  slug: CategorySlug;
  folder: "Nozevi" | "Sekire" | "Ostalo";
  href: Record<Locale, string>;
  thumb: string;
}> = [
  {
    slug: "knives",
    folder: "Nozevi",
    href: { en: "/products/knives/", sr: "/sr/proizvodi/nozevi/" },
    thumb: "/assets/thumbs/Trkulja Dalibor Nozevi.webp",
  },
  {
    slug: "axes",
    folder: "Sekire",
    href: { en: "/products/axes/", sr: "/sr/proizvodi/sekire/" },
    thumb: "/assets/thumbs/Trkulja Dalibor Sekire.webp",
  },
  {
    slug: "other-products",
    folder: "Ostalo",
    href: { en: "/products/other-products/", sr: "/sr/proizvodi/ostali-proizvodi/" },
    thumb: "/assets/thumbs/Trkulja Dalibor Ostali Proizvodi.webp",
  },
];

const image = (folder: string, name: string) => `/assets/products/${folder}/${name}.webp`;

export const products: Product[] = [
  { id: 1, category: "knives", image: image("Nozevi", "lovacki noz damask trkulja dalibor"), sr: { name: "nož za lov i boravak u prirodi", length: "15 cm", handle: "fosilizovani hrast i jelenski rog", steel: "N690", sheath: "Vegetabil koža 3 mm" }, en: { name: "hunting and bushcraft knife", length: "15 cm", handle: "bog oak and deer antler", steel: "N690", sheath: "Veg-tan leather 3 mm" } },
  { id: 2, category: "knives", image: image("Nozevi", "Dalibor Trkulja kuhinjski noz damask"), sr: { name: "kuhinjski nož", length: "21 cm", handle: "paduk", steel: "C75 i 15N20", sheath: "/" }, en: { name: "kitchen knife", length: "21 cm", handle: "padauk", steel: "C75 and 15N20", sheath: "/" } },
  { id: 3, category: "axes", image: image("Sekire", "Badnjak sekira dalibor trkulja"), sr: { name: "badnjak sekira sa ručno graviranim motivima", length: "15 cm", handle: "orah", steel: "C75 i 15N20", sheath: "Vegetabil koža 3 mm" }, en: { name: "yule log axe with hand-engraved motifs", length: "15 cm", handle: "walnut", steel: "C75 and 15N20", sheath: "Veg-tan leather 3 mm" } },
  { id: 4, category: "knives", image: image("Nozevi", "noz za sunku trkulja dalibor"), sr: { name: "nož za šunku", length: "28 cm", handle: "fosilizovani hrast", steel: "C75 i 15N20", sheath: "Vegetabil koža 3 mm" }, en: { name: "ham slicer knife", length: "28 cm", handle: "bog oak", steel: "C75 and 15N20", sheath: "Veg-tan leather 3 mm" } },
  { id: 5, category: "knives", image: image("Nozevi", "liturgijsko koplje dalibor trkulja"), sr: { name: "liturgijsko koplje", length: "/", handle: "fosilizovani brest", steel: "N690", sheath: "Vegetabil koža 3 mm" }, en: { name: "liturgical spear", length: "/", handle: "bog elm", steel: "N690", sheath: "Veg-tan leather 3 mm" } },
  { id: 6, category: "other-products", image: image("Ostalo", "damaskus privezak dalibor trkulja"), sr: { name: "damaskus privezak", length: "5 cm", handle: "/", steel: "C75 i 15N20", sheath: "/" }, en: { name: "damascus pendant", length: "5 cm", handle: "/", steel: "C75 and 15N20", sheath: "/" } },
  { id: 7, category: "knives", image: image("Nozevi", "kuvarski noz damaskus dalibor trkulja"), sr: { name: "kuvarski nož", length: "19 cm", handle: "orah i jelenski rog", steel: "C75 i 15N20", sheath: "Vegetabil koža 3 mm" }, en: { name: "chef's knife", length: "19 cm", handle: "walnut and deer antler", steel: "C75 and 15N20", sheath: "Veg-tan leather 3 mm" } },
  { id: 8, category: "knives", image: image("Nozevi", "kuvarski noz damaskus celik dalibor trkulja"), sr: { name: "kuvarski nož", length: "19 cm", handle: "zlatni zebrano", steel: "C75 i 15N20", sheath: "Vegetabil koža 3 mm" }, en: { name: "chef's knife", length: "19 cm", handle: "golden zebrano", steel: "C75 and 15N20", sheath: "Veg-tan leather 3 mm" } },
  { id: 9, category: "knives", image: image("Nozevi", "bushcraft noz dalibor trkulja"), sr: { name: "nož za boravak u prirodi", length: "11 cm", handle: "rog i abonos", steel: "C75 i 15N20", sheath: "Vegetabil koža 3 mm" }, en: { name: "bushcraft knife", length: "11 cm", handle: "deer antler and ebony", steel: "C75 and 15N20", sheath: "Veg-tan leather 3 mm" } },
  { id: 10, category: "axes", image: image("Sekire", "sekira sa staroslovenskim motivima dalibor trkulja"), sr: { name: "sekira sa staroslovenskim motivima", length: "/", handle: "fosilizovani brest", steel: "O2", sheath: "Vegetabil koža 3 mm" }, en: { name: "axe with early slavic motifs", length: "/", handle: "bog elm", steel: "O2", sheath: "Veg-tan leather 3 mm" } },
  { id: 11, category: "knives", image: image("Nozevi", "noz za kampovanje dalibor trkulja"), sr: { name: "nož za kampovanje", length: "18 cm", handle: "jelenski rog", steel: "C75 i 15N20", sheath: "Vegetabil koža 3 mm" }, en: { name: "camping knife", length: "18 cm", handle: "deer horn", steel: "C75 and 15N20", sheath: "Veg-tan leather 3 mm" } },
  { id: 12, category: "knives", image: image("Nozevi", "edc noz dalibor trkulja"), sr: { name: "edc nož (za svaki dan)", length: "10 cm", handle: "orah i fosilizovani hrast", steel: "C75 i 15N20", sheath: "Vegetabil koža 3 mm" }, en: { name: "edc knife (everyday carry)", length: "10 cm", handle: "walnut and bog oak", steel: "C75 and 15N20", sheath: "Veg-tan leather 3 mm" } },
  { id: 13, category: "knives", image: image("Nozevi", "Dalibor Trkulja lovacki noz damask"), sr: { name: "lovački nož", length: "14 cm", handle: "jelenski rog i slagana koža", steel: "C75 i 15N20", sheath: "Vegetabil koža 3 mm" }, en: { name: "hunting knife", length: "14 cm", handle: "deer antler and stacked leather", steel: "C75 and 15N20", sheath: "Veg-tan leather 3 mm" } },
  { id: 14, category: "knives", image: image("Nozevi", "damaskus lovacki noz trkulja dalibor"), sr: { name: "lovački nož", length: "12 cm", handle: "abonos, padauk i jelenski rog", steel: "C75, 15N20 i bakar", sheath: "Vegetabil koža 3 mm" }, en: { name: "hunting knife", length: "12 cm", handle: "bog oak, padauk, deer antler", steel: "C75, 15N20 and copper", sheath: "Veg-tan leather 3 mm" } },
  { id: 15, category: "axes", image: image("Sekire", "sekira sa drvenom kutijom dalibor trkulja"), sr: { name: "sekira sa drvenom kutijom", length: "17 cm", handle: "fosilizovani hrast", steel: "C75 i 15N20", sheath: "Vegetabil koža 3 mm" }, en: { name: "axe with wooden box", length: "17 cm", handle: "bog oak", steel: "C75 and 15N20", sheath: "Veg-tan leather 3 mm" } },
  { id: 16, category: "knives", image: image("Nozevi", "dalibor trkulja damaskus kuhinjski noz"), sr: { name: "kuhinjski nož", length: "20 cm", handle: "maslina", steel: "C75 i 15N20", sheath: "/" }, en: { name: "kitchen knife", length: "20 cm", handle: "olive wood", steel: "C75 and 15N20", sheath: "/" } },
  { id: 17, category: "axes", image: image("Sekire", "sekira o2 celik dalibor trkulja"), sr: { name: "sekira", length: "11 cm", handle: "paljeni brest", steel: "O2", sheath: "Vegetabil koža 3 mm" }, en: { name: "hatchet", length: "11 cm", handle: "charred elm", steel: "O2", sheath: "Veg-tan leather 3 mm" } },
  { id: 18, category: "knives", image: image("Nozevi", "trkulja dalibor liturgijsko koplje"), sr: { name: "liturgijsko koplje", length: "12 cm", handle: "fosilizovani hrast i maslina", steel: "N690", sheath: "Vegetabil koža 3 mm" }, en: { name: "liturgical spear", length: "12 cm", handle: "bog oak and olive wood", steel: "N690", sheath: "Veg-tan leather 3 mm" } },
  { id: 19, category: "axes", image: image("Sekire", "trkulja dalibor sekira rucni rad"), sr: { name: "sekira", length: "/", handle: "fosilizovani hrast", steel: "O2", sheath: "Vegetabil koža 3 mm" }, en: { name: "hatchet", length: "/", handle: "bog oak", steel: "O2", sheath: "Veg-tan leather 3 mm" } },
  { id: 20, category: "axes", image: image("Sekire", "sekire za banjak rucni rad trkulja dalibor"), sr: { name: "sekire za badnjak", length: "11 cm", handle: "paljeni brest", steel: "C75 i 15N20", sheath: "/" }, en: { name: "yule log axes", length: "11 cm", handle: "charred elm", steel: "C75 and 15N20", sheath: "/" } },
  { id: 21, category: "axes", image: image("Sekire", "damaskus sekira rucni rad trkulja dalibor"), sr: { name: "sekira", length: "12 cm", handle: "fosilizovani hrast", steel: "C75 i 15N20", sheath: "Vegetabil koža 3 mm" }, en: { name: "hatchet", length: "12 cm", handle: "bog oak", steel: "C75 and 15N20", sheath: "Veg-tan leather 3 mm" } },
  { id: 22, category: "other-products", image: image("Ostalo", "Unikatni otvarac za flase dalibor trkulja"), sr: { name: "otvarač za flaše", length: "10 cm", handle: "/", steel: "Inoks", sheath: "Vegetabil koža 3 mm" }, en: { name: "bottle opener", length: "10 cm", handle: "/", steel: "Inox", sheath: "Veg-tan leather 3 mm" } },
  { id: 23, category: "other-products", image: image("Ostalo", "Damask otvarac za flase trkulja dalibor"), sr: { name: "damaskus otvarač za flaše", length: "10 cm", handle: "/", steel: "C75 i 15N20", sheath: "Vegetabil koža 3 mm" }, en: { name: "damascus bottle opener", length: "10 cm", handle: "/", steel: "C75 and 15N20", sheath: "Veg-tan leather 3 mm" } },
  { id: 24, category: "other-products", image: image("Ostalo", "Otvarac za flase rucni rad dalibor trkulja"), sr: { name: "otvarac za flaše", length: "10 cm", handle: "/", steel: "Inoks", sheath: "Vegetabil koža 3 mm" }, en: { name: "bottle opener", length: "10 cm", handle: "/", steel: "Inox", sheath: "Veg-tan leather 3 mm" } },
  { id: 26, category: "other-products", image: image("Ostalo", "Damaskus privesci dalibor trkulja"), sr: { name: "damaskus privesci", length: "/", handle: "/", steel: "C75 i 15N20", sheath: "/" }, en: { name: "damascus keychains", length: "/", handle: "/", steel: "C75 and 15N20", sheath: "/" } },
  { id: 27, category: "axes", image: image("Sekire", "Sekira rucni rad dalibor tkulja"), sr: { name: "sekira", length: "/", handle: "fosilizovani brest", steel: "O2", sheath: "Vegetabil koža 3 mm" }, en: { name: "hatchet", length: "/", handle: "bog elm", steel: "O2", sheath: "Veg-tan leather 3 mm" } },
  { id: 28, category: "axes", image: image("Sekire", "Tomahavk lula dalibor trkulja"), sr: { name: "tomahavk sa lulom", length: "/", handle: "fosilizovani brest", steel: "C75 i 15N20", sheath: "Vegetabil koža 3 mm" }, en: { name: "tomahawk with pipe", length: "/", handle: "bog elm", steel: "C75 and 15N20", sheath: "Veg-tan leather 3 mm" } },
  { id: 29, category: "axes", image: image("Sekire", "rucni rad sekira dalibor tkulja kovac"), sr: { name: "sekira", length: "/", handle: "fosilizovani hrast", steel: "C75 i 15N20", sheath: "Vegetabil koža 3 mm" }, en: { name: "hatchet", length: "/", handle: "bog oak", steel: "C75 and 15N20", sheath: "Veg-tan leather 3 mm" } },
  { id: 30, category: "knives", image: image("Nozevi", "lovacki noz dalibor trkulja"), sr: { name: "lovački nož", length: "13 cm", handle: "jelenski rog i abonos", steel: "N690", sheath: "Vegetabil koža 3 mm" }, en: { name: "hunting knife", length: "13 cm", handle: "deer antler and ebony", steel: "N690", sheath: "Veg-tan leather 3 mm" } },
  { id: 31, category: "knives", image: image("Nozevi", "dalibor trkulja lovački nož"), sr: { name: "lovački nož", length: "22 cm", handle: "ruža jelenskog roga, abonos i paduk", steel: "C75 i 15N20", sheath: "Vegetabil koža 3 mm" }, en: { name: "hunting knife", length: "22 cm", handle: "deer antler crown, ebony and padauk", steel: "C75 and 15N20", sheath: "Veg-tan leather 3 mm" } },
  { id: 32, category: "knives", image: image("Nozevi", "kuvarski noz damaskus trkulja dalibor"), sr: { name: "kuvarski nož", length: "20 cm", handle: "paduk i abonos", steel: "C75 i 15N20", sheath: "/" }, en: { name: "chef's knife", length: "20 cm", handle: "padauk and ebony", steel: "C75 and 15N20", sheath: "/" } },
  { id: 33, category: "knives", image: image("Nozevi", "kuvarski noz dalibor trkulja"), sr: { name: "kuvarski nož", length: "21 cm", handle: "kruška", steel: "N690", sheath: "/" }, en: { name: "chef's knife", length: "21 cm", handle: "pear", steel: "N690", sheath: "/" } },
  { id: 34, category: "knives", image: image("Nozevi", "Satara damaskus rucni rad dalibor trkulja"), sr: { name: "satara", length: "20 cm", handle: "fosilizovani jasen", steel: "C75 i 15N20", sheath: "Vegetabil koža 3 mm" }, en: { name: "cleaver", length: "20 cm", handle: "bog ash", steel: "C75 and 15N20", sheath: "Veg-tan leather 3 mm" } },
  { id: 35, category: "knives", image: image("Nozevi", "unikatni nož za kuvare trkulja dalibor"), sr: { name: "kuvarski nož", length: "20 cm", handle: "abonos", steel: "N690", sheath: "/" }, en: { name: "chef's knife", length: "20 cm", handle: "ebony", steel: "N690", sheath: "/" } },
  { id: 36, category: "knives", image: image("Nozevi", "unikatni kamperski noz trkulja dalibor"), sr: { name: "nož za kampovanje", length: "18 cm", handle: "jelenski rog i abonos", steel: "C75 i 15N20", sheath: "Vegetabil koža 3 mm" }, en: { name: "camping knife", length: "18 cm", handle: "deer antler and ebony", steel: "C75 and 15N20", sheath: "Veg-tan leather 3 mm" } },
  { id: 37, category: "knives", image: image("Nozevi", "unikatni lovacki noz dalibor trkulja"), sr: { name: "lovački nož", length: "14 cm", handle: "jelenski rog", steel: "C75 i 15N20", sheath: "Vegetabil koža 3 mm" }, en: { name: "hunting knife", length: "14 cm", handle: "deer antler", steel: "C75 and 15N20", sheath: "Veg-tan leather 3 mm" } },
  { id: 38, category: "knives", image: image("Nozevi", "damask lovacki noz dalibor trkulja kovacnica"), sr: { name: "lovački nož", length: "16 cm", handle: "jelenski rog i fosilizovani hrast", steel: "C75 i 15N20", sheath: "Vegetabil koža 3 mm" }, en: { name: "hunting knife", length: "16 cm", handle: "deer antler and bog oak", steel: "C75 and 15N20", sheath: "Veg-tan leather 3 mm" } },
];

export function getCategoryByLocaleSlug(locale: Locale, slug: string) {
  const srMap: Record<string, CategorySlug> = {
    nozevi: "knives",
    sekire: "axes",
    "ostali-proizvodi": "other-products",
  };

  return locale === "sr" ? srMap[slug] : (slug as CategorySlug);
}

export function productsFor(category: CategorySlug) {
  return products.filter((product) => product.category === category);
}
