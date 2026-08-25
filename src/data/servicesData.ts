export interface ServiceItem {
  id: string;
  title: string;
  category: 'Puja' | 'Homa' | 'Dosha Shanti' | 'Samskara' | 'Japa' | 'Kundali' | 'Special Ceremonies';
  shortDescription: string;
  fullDescription: string;
  traditionalPurpose: string;
  duration: string;
  significance: string;
  keyHighlights: string[];
  preparationInfo: string[];
  faqs: { question: string; answer: string }[];
  image: string;
  imagePosition?: string;
  priceNote?: string;
}

export const serviceCategories = [
  'All',
  'Puja',
  'Homa',
  'Dosha Shanti',
  'Samskara',
  'Japa',
  'Kundali',
  'Special Ceremonies',
] as const;

export const servicesData: ServiceItem[] = [
  {
    id: 'gruhapravesam',
    title: 'New Gruhapravesam',
    category: 'Puja',
    shortDescription: 'A traditional house-entry ceremony performed according to Vedic customs to invoke blessings, harmony and auspiciousness for a new home.',
    fullDescription: 'Gruhapravesam is a profound Vedic ritual performed before settling into a new residence. The ceremony cleanses negative energies, harmonizes Vastu purusha energies, and invites Goddess Lakshmi and Lord Kuber to bestow prosperity and good health upon the entire family.',
    traditionalPurpose: 'To sanctify the living space, balance the five cosmic elements (Pancha Bhootas), and seek divine protection before dwelling.',
    duration: '3.5 - 4.5 Hours',
    significance: 'Purifies the physical dwelling, balances spatial energy fields, and invokes perpetual prosperity for all family members.',
    keyHighlights: [
      'Dwara Puja & Threshold Consecration',
      'Go Puja (Cow worship guidance) & Milk boiling ritual',
      'Ganapati Puja & Navagraha Homa',
      'Vastu Shanti & Maha Mangala Aarti',
      'Satyanarayana Vrat Katha and Panchamrita distribution'
    ],
    preparationInfo: [
      'Perform house cleaning and draw auspicious rangoli at the main threshold.',
      'Ensure the main door entrance is adorned with fresh mango leaves (Torana) and marigold garlands.',
      'Keep raw milk, new earthen/steel pot, and traditional lamps ready.',
      'Purohit will provide a complete samagri checklist in advance.'
    ],
    faqs: [
      {
        question: 'When should Gruhapravesam be conducted?',
        answer: 'It is conducted during auspicious lunar months and Tithis (such as Shukla Paksha) calculated precisely according to the family head’s Janma Nakshatra.'
      },
      {
        question: 'Can this puja be performed for rental homes?',
        answer: 'Yes, a simplified and sacred Vastu Shanti and Gruhapravesam is traditionally performed for rented residences as well.'
      }
    ],
    image: '/services/gruhapravesam-ceremony.jpg',
    imagePosition: 'object-top',
    priceNote: 'Starting from ₹ 7,500'
  },
  {
    id: 'satyanarayan-puja',
    title: 'Satyanarayan Puja & Katha',
    category: 'Puja',
    shortDescription: 'A devotional ceremony dedicated to Lord Satyanarayana, traditionally performed to seek blessings, peace and prosperity.',
    fullDescription: 'Lord Satyanarayan is the compassionate embodiment of truth and cosmic preservation. This time-honored ceremony includes the recitation of the 5 sacred chapters of the Satyanarayana Katha, offering of sweet prasad (Sheera), and prayers for the collective welfare of the home.',
    traditionalPurpose: 'To express gratitude to the Divine, resolve family tensions, and cultivate truth, harmony, and righteousness.',
    duration: '2.5 - 3 Hours',
    significance: 'Bestows peace of mind, family unity, removes mental anxiety, and invites divine grace upon major life milestones.',
    keyHighlights: [
      'Kalash Sthapana & Navagraha Avahana',
      'Recitation of the 5 Sacred Katha Adhyayas',
      'Preparation of sacred Sapata Prasad (Sheera)',
      'Maha Mangala Aarti & Prasad distribution'
    ],
    preparationInfo: [
      'Arrange bananas, tulsi leaves, betel leaves, betel nuts, and fresh flowers.',
      'Prepare panchamrit (milk, curd, honey, ghee, sugar).',
      'Setup a raised wooden chowki (seat) covered with clean red or yellow cloth.'
    ],
    faqs: [
      {
        question: 'On which days is Satyanarayan Puja most auspicious?',
        answer: 'Purnima (Full Moon Day), Ekadashi, and special occasions like birthdays, housewarmings, or anniversaries.'
      }
    ],
    image: '/services/satyanarayan-puja-katha.jpg',
    imagePosition: 'object-top',
    priceNote: 'Starting from ₹ 3,500'
  },
  {
    id: 'ganapati-homa',
    title: 'Maha Ganapati Homa',
    category: 'Homa',
    shortDescription: 'An auspicious Vedic fire ritual dedicated to Lord Ganesha, performed to remove hindrances and ensure smooth beginnings for all endeavors.',
    fullDescription: 'Maha Ganapati Homa invokes Lord Vigneshwara, the remover of all obstacles. Performed with consecrated herbs, ghee, and modaks into the sacred Agni, this ritual dissolves seen and unseen impediments in ventures, education, and career.',
    traditionalPurpose: 'To invoke divine clarity and dissolve obstacles before initiating new businesses, studies, or construction.',
    duration: '2 - 2.5 Hours',
    significance: 'Awakens intellect (Buddhi), destroys negative karmic friction, and guarantees smooth completion of auspicious goals.',
    keyHighlights: [
      'Ganapati Atharvashirsha chant',
      '108 sacred Ahutis with pure cow ghee and modaks',
      'Ashtadravya Homa offerings',
      'Purnahuti & Raksha Bandhan'
    ],
    preparationInfo: [
      'Designate a well-ventilated open area or balcony for the Havan Kund setup.',
      'Arrange fresh durva grass, coconuts, flowers, and sweets.'
    ],
    faqs: [
      {
        question: 'Is Ganapati Homa necessary before other homas?',
        answer: 'In Vedic traditions, Ganapati invocation is the essential foundational first step for all sacred ceremonies.'
      }
    ],
    image: '/services/ganapati-homa.jpg',
    imagePosition: 'object-top',
    priceNote: 'Starting from ₹ 5,100'
  },
  {
    id: 'sudarshan-homa',
    title: 'Sudarshan Homa',
    category: 'Homa',
    shortDescription: 'A potent fire ritual invoking Lord Sudarshana to remove negative energies, evil eye, and restore spiritual vitality and health.',
    fullDescription: 'Lord Sudarshana wields the supreme cosmic discus of Lord Maha Vishnu. Sudarshan Homa creates an impenetrable spiritual protective shield around the family, neutralizing dristi dosha, lingering health complications, and malicious energies.',
    traditionalPurpose: 'To vanquish spiritual and energetic negativity, health ailments, and psychic disturbances.',
    duration: '2.5 - 3.5 Hours',
    significance: 'Dispels fear, bestows victory in legal and personal struggles, and revitalizes aura and physical strength.',
    keyHighlights: [
      'Sudarshana Chakra Yantra Avahana',
      'Chanting of Sri Sudarshana Shatkam & Gayatri',
      'Sacred Ghee and Botanical Herbal Ahutis',
      'Maha Sudarshana Raksha application'
    ],
    preparationInfo: [
      'Clean the homa area and prepare copper or iron Havan Kund.',
      'Keep red flowers, lotus seeds, and sesame oil lamps.'
    ],
    faqs: [
      {
        question: 'Who should perform Sudarshan Homa?',
        answer: 'Anyone facing continuous unexplainable hurdles, health concerns, or negative domestic ambiance.'
      }
    ],
    image: '/services/sudarshan-homa.jpg',
    imagePosition: 'object-top',
    priceNote: 'Starting from ₹ 6,500'
  },
  {
    id: 'chandi-homa',
    title: 'Maha Chandi Homa',
    category: 'Homa',
    shortDescription: 'A supreme Vedic yagya dedicated to Goddess Durga / Chandi to overcome grave obstacles, legal issues, and invoke divine grace.',
    fullDescription: 'Maha Chandi Homa is one of the most powerful and revered ceremonies in Sanatana Dharma. Through recitation of the 700 verses of Durga Saptashati (Devi Mahatmyam) and elaborate offerings, it confers immense spiritual courage, prosperity, and cosmic protection.',
    traditionalPurpose: 'To awaken supreme divine feminine power, eradicate past-life karma, and triumph over daunting challenges.',
    duration: '4 - 6 Hours',
    significance: 'Bestows total protection, wealth (Dhana), health (Arogya), victory (Vijaya), and liberation from chronic adversity.',
    keyHighlights: [
      'Durga Saptashati 13 Chapters Parayana',
      'Kumkumarchana & Suvasini Puja',
      'Navakshari Mantra Japa & Homa',
      'Grand Maha Purnahuti with silk saree and ghee'
    ],
    preparationInfo: [
      'Requires advance muhurat consultation and adequate open space.',
      'Arrange red flowers, dry fruits, saffron, and fresh fruit offerings.'
    ],
    faqs: [
      {
        question: 'Can Chandi Homa be performed at home?',
        answer: 'Yes, with proper safety precautions, proper ventilation, and under the expert guidance of Acharya Surya Prakash Purohit.'
      }
    ],
    image: '/services/chandi-homa.jpg',
    imagePosition: 'object-top',
    priceNote: 'Starting from ₹ 11,000'
  },
  {
    id: 'pratyangira-homa',
    title: 'Maha Pratyangira Devi Homa',
    category: 'Homa',
    shortDescription: 'A specialized protective fire ritual to neutralize intense planetary adversities, black magic, and severe negative influences.',
    fullDescription: 'Goddess Pratyangira represents the fierce aspect of Mother Adi Parashakti who calmed the ferocity of Lord Narasimha. This homa destroys the most stubborn energetic blocks, jealousy, and fear with the offering of dried red chillies and consecrated mustard seeds.',
    traditionalPurpose: 'To dismantle malevolent forces, psychic attacks, unexplainable fears, and prolonged misfortune.',
    duration: '3 - 4 Hours',
    significance: 'Restores absolute peace of mind, family harmony, and energetic equilibrium.',
    keyHighlights: [
      'Pratyangira Moola Mantra Japa (1008 repetitions)',
      'Special Red Chilli (Mirchi) Ahuti without pungent fumes through Vedic vidhi',
      'Shatru Nashana Sankalpam',
      'Raksha Tilak consecration'
    ],
    preparationInfo: [
      'Follow fasting or sattvic diet on the day of the homa.',
      'Ensure a quiet, serene space is set aside for the priest team.'
    ],
    faqs: [
      {
        question: 'Does the red chilli ahuti cause irritation?',
        answer: 'No, when performed with authentic Vedic chanting and precise proportions of cow ghee, the smoke remains sacred and non-irritating.'
      }
    ],
    image: '/services/pratyangira-homa.jpg',
    imagePosition: 'object-top',
    priceNote: 'Starting from ₹ 8,500'
  },
  {
    id: 'rudra-homa',
    title: 'Sri Rudra Homa & Abhishekam',
    category: 'Homa',
    shortDescription: 'A sacred ceremony dedicated to Lord Shiva, chanting Sri Rudram and Chamakam to bestow good health, peace, and spiritual elevation.',
    fullDescription: 'The Sri Rudram from the Krishna Yajurveda is an eternal hymn praising the omnipresent Lord Shiva. Chanting the 11 Anuvakas accompanied by pure Bilva leaf and ghee offerings dissolves sins, cures chronic ailments, and awakens deep inner serenity.',
    traditionalPurpose: 'To propitiate Lord Shiva, purge physical and mental impurities, and attain long life and enlightenment.',
    duration: '3 - 4 Hours',
    significance: 'Promotes physical healing, mental tranquility, universal well-being, and liberation from karmic debts.',
    keyHighlights: [
      'Laghu Rudra / Namaka Chamaka Parayana',
      'Shivalinga Panchamrita Abhishekam',
      'Bilva Patra Archana & Dhoop Seva',
      'Maha Mrityunjaya & Rudra Ahutis'
    ],
    preparationInfo: [
      'Procure fresh Bilva leaves, milk, curd, honey, sugarcane juice, and vibhuti.',
      'Wear traditional white or saffron dhoti/saree.'
    ],
    faqs: [
      {
        question: 'Which day is ideal for Rudra Homa?',
        answer: 'Mondays, Pradosham days, Masa Shivaratri, or birthdays for long-life blessings.'
      }
    ],
    image: '/services/rudra-homa.jpg',
    imagePosition: 'object-top',
    priceNote: 'Starting from ₹ 6,500'
  },
  {
    id: 'mrityunjaya-homa',
    title: 'Maha Mrityunjaya Homa',
    category: 'Homa',
    shortDescription: 'A potent life-protecting fire ritual to avert untimely demise (Apamrityu), overcome chronic health battles, and ensure longevity.',
    fullDescription: 'The Tryambakam Maha Mrityunjaya mantra is the nectar of immortality revealed by Sage Markandeya. This ritual generates deep rejuvenating vibrations that shield individuals from critical illnesses, fatal accidents, and mental despair.',
    traditionalPurpose: 'To extend life span, restore health to ailing elders, and safeguard the family from accidental perils.',
    duration: '2.5 - 3.5 Hours',
    significance: 'Invokes divine Amrita (nectar) for physical healing, vitality, and fearlessness in the face of physical decline.',
    keyHighlights: [
      '1008 Maha Mrityunjaya Mantra Ahutis',
      'Offering of Amrita Valli (Guduchi herb) & sesame seeds',
      'Ayushya Sukta recitation',
      'Consecrated water sprinkling for patient recovery'
    ],
    preparationInfo: [
      'Provide the Janma Nakshatra and Rashi of the person seeking health blessings.',
      'Keep sesame seeds, durva, and pure ghee ready.'
    ],
    faqs: [
      {
        question: 'Can this homa be performed for a hospitalized relative?',
        answer: 'Yes, the priest conducts the sankalpam using their Gotra and Nakshatra, and consecrated holy water (Teertha) is provided.'
      }
    ],
    image: '/services/gruhapravesam-ceremony.jpg',
    imagePosition: 'object-top',
    priceNote: 'Starting from ₹ 6,000'
  },
  {
    id: 'navgrah-shanti',
    title: 'Navgrah Dosha Nivaaran Puja',
    category: 'Dosha Shanti',
    shortDescription: 'A comprehensive planetary pacification ritual to balance all nine celestial grahas and mitigate adverse astrological periods.',
    fullDescription: 'Our lives are influenced by the 9 planetary energies (Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, Ketu). When planets reside in unfavorable houses or during Sade Sati, Dasha, or Antardasha, this ceremony brings harmony, professional progress, and domestic peace.',
    traditionalPurpose: 'To harmonize negative planetary transits and invoke benevolent planetary blessings for career, health, and progeny.',
    duration: '3 - 3.5 Hours',
    significance: 'Eliminates career blockages, reduces financial instability, and promotes cordial relationships.',
    keyHighlights: [
      'Navagraha Mandala invocation with 9 sacred cloths and grains (Navadhanya)',
      'Specific Moola Mantra Japa for troubled planets',
      'Navagraha Samidha (specific planetary wood) Ahutis',
      'Graha Shanti Yantra consecration'
    ],
    preparationInfo: [
      'Keep Janma Kundali / Birth details of family members accessible.',
      'Arrange 9 varieties of fruits and traditional lamps.'
    ],
    faqs: [
      {
        question: 'How often should Navagraha Shanti be performed?',
        answer: 'Traditionally once a year or whenever transitioning into a new astrological planetary period (Dasha/Antardasha).'
      }
    ],
    image: '/services/navgrah-dosha-puja.jpg',
    imagePosition: 'object-top',
    priceNote: 'Starting from ₹ 5,500'
  },
  {
    id: 'kuja-dosha',
    title: 'Kuja Dosha Shanti',
    category: 'Dosha Shanti',
    shortDescription: 'A specialized astrological remedial puja to neutralize Manglik Dosha impacts on marriage prospects, compatibility, and spousal longevity.',
    fullDescription: 'When Mars (Kuja/Angaraka) sits in the 1st, 2nd, 4th, 7th, 8th, or 12th house from Lagna or Moon, it can trigger temperamental conflicts or marriage delays. Kuja Dosha Shanti channels the fiery energy of Mars into auspicious vitality and mutual understanding.',
    traditionalPurpose: 'To remove obstacles in finding a suitable spouse and foster long-lasting matrimonial bliss.',
    duration: '2.5 - 3 Hours',
    significance: 'Pacifies intense Mars energy, smoothens marital relations, and speeds up marriage negotiations.',
    keyHighlights: [
      'Angaraka (Mars) Yantra Puja',
      'Red Coral (Pavazham) & Red flower Archana',
      'Kuja Gayatri & Stotra Japa',
      'Mangala Dosha Nivarana Homa'
    ],
    preparationInfo: [
      'Wear red or traditional colored attire.',
      'Procure red lentils (Masoor Dal), red cloth, and jaggery for daana.'
    ],
    faqs: [
      {
        question: 'Can this be performed before fixing a wedding date?',
        answer: 'Yes, it is highly recommended to perform Kuja Shanti prior to final matrimonial agreements.'
      }
    ],
    image: '/services/kuja-dosha-shanti.jpg',
    imagePosition: 'object-top',
    priceNote: 'Starting from ₹ 5,100'
  },
  {
    id: 'kaalsarp-shanti',
    title: 'Kaal Sarp Dosha Shanti',
    category: 'Dosha Shanti',
    shortDescription: 'A profound Vedic remedy to neutralize Kaal Sarp Yog where all planets are hemmed between Rahu and Ketu, causing persistent delays.',
    fullDescription: 'Kaal Sarp Dosha can create psychological distress, career instability, and recurring struggles despite sincere efforts. Conducted with silver Sarpa idols and Rahu-Ketu Shanti, this puja liberates the individual from karmic confinement.',
    traditionalPurpose: 'To liberate the soul from ancestral and past-life karmic limitations symbolized by the celestial serpent.',
    duration: '3.5 - 4.5 Hours',
    significance: 'Unlocks stalled business opportunities, brings mental tranquility, and clears path for foreign travel or career breakthroughs.',
    keyHighlights: [
      'Naga Devata Avahana with silver idol consecration',
      'Rahu-Ketu Japa (1008 counts) with black sesame and horsegram',
      'Sarpa Sukta & Maha Mrityunjaya Parayana',
      'Naga Bali / Shanti Ahutis & River/Purohit daana'
    ],
    preparationInfo: [
      'Maintain strict vegetarianism for 3 days prior.',
      'Purohit will provide consecrated silver snake idols or coordinate samagri.'
    ],
    faqs: [
      {
        question: 'Which Tithi is best for Kaal Sarp Shanti?',
        answer: 'Nag Panchami, Amavasya, or Shravana Mondays.'
      }
    ],
    image: '/services/kaalsarp-dosha-mandala.jpg',
    imagePosition: 'object-top',
    priceNote: 'Starting from ₹ 6,500'
  },
  {
    id: 'namakarana',
    title: 'Namakarana Ceremony',
    category: 'Samskara',
    shortDescription: 'The sacred 11th/12th day Vedic ritual of formally naming the newborn child according to Nakshatra and astrological calculations.',
    fullDescription: 'Namakarana is the fifth of the 16 sacred Vedic Samskaras. The priest determines the auspicious first letter based on the infant’s birth star (Janma Nakshatra), whispering the sacred name into the baby’s right ear amid chanting of blessings by elders.',
    traditionalPurpose: 'To bestow a divine vibration upon the child, ensure good health, intellect, and spiritual protection.',
    duration: '2 - 2.5 Hours',
    significance: 'Infuses positive cosmic frequencies into the child’s destiny and formally introduces them into the Gotra lineage.',
    keyHighlights: [
      'Punyahavachanam (Purification ceremony)',
      'Ayushya Homa for infant’s health & longevity',
      'Writing the sacred name in golden rice (Akshata)',
      'Whispering name (Karna Mantra) by parents and grandparents'
    ],
    preparationInfo: [
      'Provide exact date, time, and city of birth of the baby.',
      'Arrange raw rice spread in a bronze or silver plate, new cradle cloth, and honey/ghee mixture.'
    ],
    faqs: [
      {
        question: 'Can Namakarana be done after the 21st day?',
        answer: 'Yes, if the 11th or 21st day is missed, an auspicious date (Shubha Dinam) is selected by the priest.'
      }
    ],
    image: '/services/namakarana-ceremony.jpg',
    imagePosition: 'object-top',
    priceNote: 'Starting from ₹ 4,500'
  },
  {
    id: 'annaprasana',
    title: 'Annaprasana Puja',
    category: 'Samskara',
    shortDescription: 'The joyous ceremony of introducing solid, consecrated food (Payasam/Kheer) to the infant in the 6th or 7th month.',
    fullDescription: 'Annaprasana celebrates the baby’s transition to solid nourishment. With mantras invoking Goddess Annapurna and Lord Agni, sweet payasam is offered in a silver or gold spoon to ensure robust digestive fire, intelligence, and a long blessed life.',
    traditionalPurpose: 'To sanctify the digestive system, pray for good health, and discover innate talents through the traditional symbolic object test.',
    duration: '2 Hours',
    significance: 'Protects the child against digestive ailments and imparts prosperity and refined speech.',
    keyHighlights: [
      'Ganapati Puja & Annapurna Prarthana',
      'Consecration of the First Payasam Prasad',
      'Feeding by parents, maternal uncle, and grandparents',
      'Traditional symbolic test (Book, Pen, Gold, Food, Clay)'
    ],
    preparationInfo: [
      'Cook fresh rice kheer/payasam with cow milk, rice, and jaggery/sugar.',
      'Keep new clothes for the baby and a silver spoon ready.'
    ],
    faqs: [
      {
        question: 'At what age is Annaprasana performed?',
        answer: '6th month for baby boys, 7th month for baby girls on an even/odd month auspicious tithi.'
      }
    ],
    image: '/services/annaprasana-puja.jpg',
    imagePosition: 'object-top',
    priceNote: 'Starting from ₹ 4,000'
  },
  {
    id: 'akshara-abhyasa',
    title: 'Akshara Abhyasa',
    category: 'Samskara',
    shortDescription: 'The sacred initiation of a child into the realm of education, learning, and writing by invoking Goddess Saraswati and Lord Ganesha.',
    fullDescription: 'Akshara Abhyasa formally initiates the child into letters, phonetics, and divine wisdom. Holding the child’s hand, the priest and parents trace the sacred syllable "OM" or "Hari Sri Ganapataye Namah" in a plate of golden paddy grains or sand.',
    traditionalPurpose: 'To awaken speech clarity, memory retention (Dharana Shakti), and lifelong love for knowledge.',
    duration: '1.5 - 2 Hours',
    significance: 'Removes speech defects, inspires academic excellence, and aligns the child with Goddess Saraswati’s grace.',
    keyHighlights: [
      'Saraswati Puja with books and writing instruments',
      'Medha Sukta chanting for intellect and wisdom',
      'Tracing "OM" in raw rice plate (Akshata)',
      'Tongue writing with golden ring and holy honey'
    ],
    preparationInfo: [
      'Keep a slate, chalk/pen, new notebooks, and raw rice ready.',
      'Perform during Vijaya Dashami, Vasant Panchami, or auspicious Nakshatras like Rohini, Hasta, or Pushya.'
    ],
    faqs: [
      {
        question: 'What is the ideal age for Akshara Abhyasa?',
        answer: 'Usually at the age of 3 to 5 years before beginning formal preschool or schooling.'
      }
    ],
    image: '/services/akshara-abhyasa-ceremony.jpg',
    imagePosition: 'object-top',
    priceNote: 'Starting from ₹ 3,500'
  },
  {
    id: 'kadali-vivah',
    title: 'Kadali Vivah',
    category: 'Special Ceremonies',
    shortDescription: 'A traditional scriptural remedy for brides or grooms facing specific astrological planetary doshas causing severe marriage delays.',
    fullDescription: 'Kadali Vivah is an ancient Shastric parihara where a symbolic ceremony is conducted with a sanctified Kadali (Banana) tree, absorbing residual malefic planetary influences before the real matrimonial alliance takes place.',
    traditionalPurpose: 'To transfer severe planetary afflictions affecting spousal longevity or compatibility.',
    duration: '2.5 - 3 Hours',
    significance: 'Clears way for a peaceful, delay-free wedding and eliminates fear of early spousal discord.',
    keyHighlights: [
      'Sankalpam & Punyahavachanam',
      'Kadali Vriksha Consecration & Vivah Vidhi',
      'Mangalsutra binding to tree with Vedic mantras',
      'Tree immersion / daana & Vishnu blessing'
    ],
    preparationInfo: [
      'Priest will arrange fresh auspicious Kadali tree with root.',
      'Procure yellow saree/dhoti and sacred mangalsutra thread.'
    ],
    faqs: [
      {
        question: 'Is Kadali Vivah strictly confidential?',
        answer: 'Yes, it is performed privately with close family members with complete dignity and sanctity.'
      }
    ],
    image: '/services/kadali-vivah.jpg',
    imagePosition: 'object-top',
    priceNote: 'Starting from ₹ 6,000'
  },
  {
    id: 'kumbha-vivah',
    title: 'Kumbha Vivah Remedy',
    category: 'Special Ceremonies',
    shortDescription: 'An authentic Vedic remedial ritual involving a consecrated water pot (Kumbha) to dissolve severe Manglik or marital afflictions.',
    fullDescription: 'Kumbha Vivah is performed when there is intense Manglik dosha or Vaidhavya yoga in the birth chart. By symbolically marrying a consecrated earthen pot containing Lord Vishnu’s divine presence, the dosha is completely absorbed and nullified.',
    traditionalPurpose: 'To safeguard future married life from adverse planetary combinations and unexpected separations.',
    duration: '2.5 - 3 Hours',
    significance: 'Neutralizes negative marriage yogas and ensures long life, harmony, and prosperity with the future spouse.',
    keyHighlights: [
      'Kumbha Sthapana with holy water from 7 rivers',
      'Vishnu Sahasranama & Vivah Mantras',
      'Symbolic Kanyadaan to Lord Vishnu in the Kumbha',
      'Visarjan of Kumbha in flowing sacred water'
    ],
    preparationInfo: [
      'Consult horoscope in advance for auspicious Muhurat.',
      'Arrange new earthen pot, mango leaves, coconut, and yellow vastram.'
    ],
    faqs: [
      {
        question: 'Who needs Kumbha Vivah?',
        answer: 'Individuals whose horoscope indicates double Manglik Dosha or significant planetary afflictions in 7th/8th house.'
      }
    ],
    image: '/services/kumbha-vivah.jpg',
    imagePosition: 'object-top',
    priceNote: 'Starting from ₹ 6,000'
  },
  {
    id: 'arka-vivah',
    title: 'Arka Vivah Remedy',
    category: 'Special Ceremonies',
    shortDescription: 'A specific Shastric remedial ceremony conducted for men experiencing marriage hurdles, repeated broken engagements, or spousal doshas.',
    fullDescription: 'Arka Vivah involves a sacred ritual with the Arka (Calotropis gigantea / Erukku) plant, traditionally representing Sun energy. It mitigates afflictions regarding second marriage yogas or chronic delays for grooms.',
    traditionalPurpose: 'To neutralize male horoscope doshas that impede timely and happy matrimonial union.',
    duration: '2.5 Hours',
    significance: 'Dispels solar and marital doshas, leading to an auspicious and peaceful wedding.',
    keyHighlights: [
      'Arka Vriksha Puja with Surya Gayatri chants',
      'Vivah Samskara recitation with sacred thread',
      'Homa with Arka samidha and pure ghee',
      'Arka daana and Vishnu blessing'
    ],
    preparationInfo: [
      'Priest coordinates fresh sacred Arka plant.',
      'Wear traditional white dhoti and angavastram.'
    ],
    faqs: [
      {
        question: 'When should Arka Vivah be performed?',
        answer: 'On auspicious Sundays, Amavasya, or specific Nakshatras recommended after horoscope reading.'
      }
    ],
    image: '/services/arka-vivah.jpg',
    imagePosition: 'object-top',
    priceNote: 'Starting from ₹ 5,500'
  },
  {
    id: 'vehicle-puja',
    title: 'New Vehicle Pooja',
    category: 'Puja',
    shortDescription: 'A joyous and protective ritual performed on newly purchased cars, two-wheelers, or commercial fleets to avert accidents and ensure safe journeys.',
    fullDescription: 'A vehicle is considered a sacred chariot (Vahana) in Sanatana Dharma. Through Ayudha Puja, lemon crushing under tires, and Ganapati invoking mantras, the vehicle is consecrated for longevity, safety, and trouble-free travel.',
    traditionalPurpose: 'To invoke Lord Ganesha and Lord Hanuman to guard the vehicle from road accidents and mechanical breakdowns.',
    duration: '45 - 60 Minutes',
    significance: 'Protects the driver and passengers from unexpected hazards and blesses the journey with positive energy.',
    keyHighlights: [
      'Ganesha & Hanuman Puja on engine/steering',
      'Swastika drawing with turmeric and vermilion',
      'Camphor aarti around the vehicle (Drishti removal)',
      'Consecrated lime crushing under all wheels'
    ],
    preparationInfo: [
      'Clean and wash the vehicle thoroughly before the priest arrives.',
      'Keep 4 lemons, 1 coconut, garland, and camphor ready.'
    ],
    faqs: [
      {
        question: 'Can the puja be done at the showroom or home?',
        answer: 'Yes, Acharya ji can perform the puja directly at the car dealership upon delivery or at your home parking.'
      }
    ],
    image: '/services/vehicle-puja.jpg',
    imagePosition: 'object-center',
    priceNote: 'Starting from ₹ 1,500'
  },
  {
    id: 'office-puja',
    title: 'Office & Business Inauguration Puja',
    category: 'Puja',
    shortDescription: 'A comprehensive commercial sanctification ceremony performed to invoke Lord Ganesha and Goddess Lakshmi for continuous business profitability.',
    fullDescription: 'Starting a new venture, opening an office, clinic, or showroom requires cosmic alignment. This ceremony clears previous spatial residue, energizes the workspace, and invokes Kubera and Lakshmi for prosperous operations and reliable clients.',
    traditionalPurpose: 'To attract wealth, customer goodwill, smooth team collaboration, and financial stability.',
    duration: '2 - 3 Hours',
    significance: 'Instills confidence in founders, eliminates business competition negativity, and attracts lucrative opportunities.',
    keyHighlights: [
      'Vastu Shanti & Ganapati Puja',
      'Lakshmi Kubera Yantra Sthapana',
      'Account Book / Machinery / Laptop Consecration',
      'Maha Mangala Aarti and sweet prasad distribution'
    ],
    preparationInfo: [
      'Decorate entrance with mango leaves and marigold toran.',
      'Setup a table or altar area in the North-East (Ishanya) corner.'
    ],
    faqs: [
      {
        question: 'Can this be performed annually during Diwali?',
        answer: 'Yes, annual Lakshmi Puja and Bahi Khata (Chopda) Puja are also conducted for established enterprises.'
      }
    ],
    image: '/services/office-puja-mandala.jpg',
    imagePosition: 'object-top',
    priceNote: 'Starting from ₹ 5,500'
  },
  {
    id: 'japa',
    title: 'Vedic Mantra Japa & Anushthana',
    category: 'Japa',
    shortDescription: 'Dedicated repetitive chanting of powerful Vedic mantras (Gayatri, Mahamrityunjaya, Navarna, etc.) performed with strict sankalpa for specific goals.',
    fullDescription: 'Mantra Japa is the repetition of sacred seed sounds that transform consciousness and dissolve persistent karmic blocks. Acharya Surya Prakash Purohit and trained Vedic priests undertake specific count japas (10,000, 24,000, 1,25,000 counts) on behalf of devotees.',
    traditionalPurpose: 'To concentrate spiritual energy, clear mental anxiety, fulfill long-cherished sankalpas, and attain divine grace.',
    duration: '1 - 7 Days (Customizable)',
    significance: 'Generates an aura of immense spiritual radiance, protects from psychic vulnerability, and ensures success in endeavors.',
    keyHighlights: [
      'Customized Gotra and Nakshatra Sankalpam',
      'Japa performed on consecrated Rudraksha or Sphatika malas',
      'Daily dashamsha homa (10% fire offering of total japa count)',
      'Brahmana bhojanam and daana'
    ],
    preparationInfo: [
      'Provide your specific prayer intention (Sankalpa).',
      'Live video stream updates can be arranged for remote worldwide devotees.'
    ],
    faqs: [
      {
        question: 'Can Japa be done remotely on my family’s behalf?',
        answer: 'Yes, with your Name, Gotra, and Nakshatra, authentic Pratinidhi Japa is performed with daily sankalpam.'
      }
    ],
    image: '/services/vedic-japa-anushthana.jpg',
    imagePosition: 'object-top',
    priceNote: 'Customized on Request'
  },
  {
    id: 'jataka-kundali',
    title: 'Jathaka Kundali & Astrological Guidance',
    category: 'Kundali',
    shortDescription: 'Comprehensive Vedic horoscope reading, Janma Patrika preparation, marriage compatibility matching, and accurate Muhurat calculations.',
    fullDescription: 'Vedic Astrology (Jyotish) is the eye of the Vedas. Acharya Surya Prakash Purohit deeply examines birth charts, planetary strengths (Shadbala), Vimshottari Dashas, and transit impacts to provide clear, practical, and spiritually grounded life guidance.',
    traditionalPurpose: 'To understand one’s karmic blueprint, choose auspicious timings for crucial decisions, and apply effective Shastric remedies.',
    duration: '45 - 60 Minutes per Session',
    significance: 'Provides clarity on career direction, relationship harmony, health precautions, and ideal dates for life ceremonies.',
    keyHighlights: [
      'Detailed Birth Chart (Lagna & Navamsha) analysis',
      'Dasha analysis and timing of upcoming milestones',
      'Dosha identification and precise gemological/ritual remedies',
      'Auspicious Muhurat calculation for weddings, housewarmings, and investments'
    ],
    preparationInfo: [
      'Have your exact Date of Birth, Time of Birth (with AM/PM), and City of Birth ready.',
      'Prepare 2-3 specific life questions you wish to address.'
    ],
    faqs: [
      {
        question: 'Are consultations available via phone or video call?',
        answer: 'Yes, online consultations are conducted with devotees across India, the USA, UK, Canada, Australia, and worldwide.'
      }
    ],
    image: '/services/jathaka-kundali-guidance.jpg',
    imagePosition: 'object-top',
    priceNote: 'Starting from ₹ 1,100'
  }
];
