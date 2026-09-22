const wordBank = {

  "Animals 🐾": [
    "dog","cat","elephant","tiger","lion","bear","wolf","fox","deer","rabbit",
    "horse","cow","sheep","goat","pig","duck","chicken","bird","eagle","owl",
    "snake","frog","fish","shark","whale","dolphin","monkey","gorilla","panda","koala",
    "kangaroo","giraffe","zebra","rhino","hippo","crocodile","turtle","penguin","seal","otter",
    "squirrel","mouse","rat","bat","bee","ant","butterfly","spider","crab","octopus",
    "leopard","cheetah","jaguar","cougar","lynx","bobcat","hyena","jackal","coyote","dingo",
    "camel","llama","alpaca","donkey","mule","bison","buffalo","moose","elk","antelope",
    "gazelle","impala","wildebeest","meerkat","mongoose","badger","weasel","ferret","skunk","raccoon",
    "possum","hedgehog","porcupine","armadillo","sloth","lemur","chimpanzee","orangutan","baboon","macaque",
    "gibbon","tapir","warthog","boar","yak","reindeer","caribou","walrus","manatee","narwhal"
  ],

  "Fruits 🍎": [
    "apple","banana","orange","mango","watermelon","strawberry","grape","pineapple","peach","pear",
    "cherry","lemon","lime","coconut","papaya","kiwi","blueberry","raspberry","blackberry","pomegranate",
    "avocado","melon","plum","apricot","fig","guava","lychee","durian","dragonfruit","passionfruit",
    "grapefruit","tangerine","mandarin","nectarine","cranberry","cantaloupe","persimmon","date","raisin","olive",
    "clementine","pomelo","starfruit","jackfruit","longan","rambutan","mangosteen","soursop","custard apple","mulberry",
    "gooseberry","elderberry","boysenberry","blackcurrant","redcurrant","quince","kumquat","tamarind","breadfruit","plantain",
    "salak","sapodilla","cherimoya","prickly pear","honeydew","rockmelon","cloudberry","bilberry","feijoa","loquat",
    "mamey","physalis","sugar apple","white peach","yellow watermelon","pink grapefruit","golden kiwi","red banana","rose apple","wax apple",
    "water apple","Java plum","blood orange","finger lime","cactus pear","miracle fruit","ice apple","horned melon","pawpaw","medlar",
    "jabuticaba","mangaba","pepino","dewberry","serviceberry","satsuma","yuzu","bergamot","damson","salmonberry"
  ],

  "Vegetables 🥦": [
    "carrot","potato","tomato","cucumber","broccoli","cabbage","spinach","lettuce","onion","garlic",
    "pumpkin","corn","mushroom","eggplant","celery","peas","bean","radish","asparagus","cauliflower",
    "sweet potato","cabbage","kale","bok choy","spring onion","leek","turnip","beetroot","zucchini","bell pepper",
    "chili","ginger","okra","artichoke","avocado","yam","cassava","taro","watercress","rocket",
    "arugula","mustard greens","collard greens","brussels sprouts","snow peas","green beans","broad beans","kidney beans","chickpeas","lentils",
    "soybean","edamame","bamboo shoots","bean sprouts","lotus root","bitter melon","chayote","jicama","parsnip","fennel",
    "shallot","scallion","water chestnut","sweetcorn","butternut squash","acorn squash","spaghetti squash","turnip greens","swiss chard","endive",
    "radicchio","cress","dandelion greens","seaweed","nori","kombu","wakame","moringa","okra","daikon",
    "burdock","sunchoke","rutabaga","kohlrabi","plantain","poblano pepper","jalapeno","serrano pepper","habanero","cress"
  ],

  "Food 🍔": [
    "pizza","burger","sandwich","noodles","pasta","rice","sushi","curry","soup","steak",
    "sausage","pancake","waffle","toast","salad","dumpling","fried chicken","hotdog","lasagna","burrito",
    "taco","nachos","fries","meatball","omelette","scrambled eggs","fried rice","ramen","spring roll","fish and chips",
    "chicken rice","fried noodles","macaroni","spaghetti","risotto","gnocchi","paella","kimchi","hummus","falafel",
    "tempura","quesadilla","focaccia","croissant","pretzel","bruschetta","bibimbap","satay","laksa","ceviche",
    "fondue","kebab","shawarma","dim sum","roast chicken","barbecue","hotpot","porridge","cereal","bacon",
    "ham","cheese","yogurt","bread","butter","egg","tofu","beans","corn","mashed potato",
    "baked potato","chicken wings","fishball","meatloaf","crab cake","clam chowder","garlic bread","coleslaw","stuffing","quiche",
    "tortilla","bolognese","carbonara","teriyaki","yakitori","sashimi","udon","soba","takoyaki","churros"
  ],

  "Desserts 🍰": [
    "cake","cookie","donut","brownie","ice cream","pudding","cheesecake","cupcake","pie","tart",
    "chocolate","candy","jelly","muffin","macaron","churros","waffle","mochi","tiramisu","popsicle",
    "sundae","milkshake","fudge","caramel","marshmallow","custard","gelato","sorbet","parfait","pancake",
    "crepe","profiterole","eclair","cannoli","baklava","panna cotta","creme brulee","trifle","shortcake","fruitcake",
    "red velvet cake","carrot cake","cheesecake","banana bread","apple pie","pumpkin pie","lemon tart","egg tart","chocolate cake","lava cake",
    "ice cream sandwich","frozen yogurt","cotton candy","rock candy","gummy bear","jelly bean","licorice","toffee","nougat","marzipan",
    "praline","truffle","macaroon","madeleine","financier","donut hole","cinnamon roll","sticky bun","bread pudding","rice pudding",
    "mango pudding","grass jelly","bean curd dessert","tangyuan","sesame ball","egg waffle","pineapple tart","kueh","ondeh ondeh","cendol",
    "ice kacang","bingsu","dango","dorayaki","taiyaki","castella","mont blanc","pavlova","meringue","flan",
    "tres leches","chocolate mousse","fruit tart","caramel pudding","vanilla pudding","banana split","peach cobbler","bread pudding","baklava","halva"
  ],

  "Drinks 🥤": [
    "water","milk","coffee","tea","juice","lemonade","soda","smoothie","milkshake","hot chocolate",
    "bubble tea","cocoa","espresso","latte","cappuccino","cola","syrup","coconut water","green tea","iced tea",
    "black tea","herbal tea","oolong tea","matcha","chai","mocha","americano","macchiato","frappe","root beer",
    "ginger ale","sparkling water","mineral water","orange juice","apple juice","grape juice","mango juice","pineapple juice","tomato juice","cranberry juice",
    "lime juice","grapefruit juice","soy milk","almond milk","oat milk","chocolate milk","yogurt drink","sports drink","energy drink","fruit punch",
    "hot tea","iced coffee","cold brew","bubble tea","milk tea","thai tea","hong kong milk tea","teh tarik","kopi","kopi o",
    "kopi c","matcha latte","chai latte","caramel latte","vanilla latte","strawberry smoothie","banana smoothie","mango smoothie","protein shake","slushie",
    "slush","mocktail","fruit punch","tonic water","ginger beer","kombucha","kefir","lassi","horchata","agua fresca",
    "sarsaparilla","lemon tea","peach tea","jasmine tea","earl grey","peppermint tea","chamomile tea","rose tea","barley tea","genmaicha",
    "taro milk tea","brown sugar milk tea","passionfruit tea","honey lemon","yakult","grass jelly drink","sugarcane juice","bandung","soy latte","sparkling lemonade"
  ],

  "Countries 🌎": [
    "Singapore","Malaysia","Thailand","Vietnam","Indonesia","Philippines","Japan","China","Korea","India",
    "Australia","Canada","America","Mexico","Brazil","France","Germany","Italy","Spain","Switzerland",
    "United Kingdom","Ireland","Portugal","Netherlands","Belgium","Austria","Greece","Turkey","Russia","Ukraine",
    "Poland","Norway","Sweden","Finland","Denmark","Iceland","New Zealand","South Africa","Egypt","Morocco",
    "Nigeria","Kenya","Ghana","Ethiopia","Saudi Arabia","United Arab Emirates","Qatar","Israel","Jordan","Iran",
    "Iraq","Pakistan","Bangladesh","Nepal","Sri Lanka","Myanmar","Cambodia","Laos","Brunei","Mongolia",
    "Taiwan","North Korea","Kazakhstan","Uzbekistan","Afghanistan","Bhutan","Maldives","Fiji","Samoa","Tonga",
    "Chile","Argentina","Peru","Colombia","Venezuela","Ecuador","Bolivia","Uruguay","Paraguay","Cuba",
    "Jamaica","Bahamas","Haiti","Panama","Costa Rica","Guatemala","Honduras","Nicaragua","Belize","Dominican Republic",
    "Czech Republic","Hungary","Romania","Bulgaria","Croatia","Serbia","Slovakia","Slovenia","Estonia","Lithuania"
  ],

  "Cities 🏙️": [
    "Singapore","Tokyo","Seoul","Bangkok","London","Paris","Rome","Sydney","Melbourne","New York",
    "Los Angeles","Beijing","Shanghai","Hong Kong","Taipei","Dubai","Mumbai","Hanoi","Jakarta","Amsterdam",
    "Barcelona","Madrid","Berlin","Munich","Vienna","Zurich","Geneva","Milan","Venice","Prague",
    "Budapest","Athens","Istanbul","Moscow","Toronto","Vancouver","Chicago","Boston","Washington","San Francisco",
    "Las Vegas","Miami","Mexico City","Rio de Janeiro","São Paulo","Buenos Aires","Lima","Santiago","Cairo","Nairobi",
    "Cape Town","Johannesburg","Sydney","Brisbane","Perth","Auckland","Wellington","Manila","Cebu","Kuala Lumpur",
    "Penang","Ho Chi Minh City","Da Nang","Phnom Penh","Vientiane","Yangon","New Delhi","Bangalore","Chennai","Kolkata",
    "Osaka","Kyoto","Hiroshima","Busan","Jeju City","Shanghai","Guangzhou","Shenzhen","Chengdu","Chongqing",
    "Xi'an","Hangzhou","Nanjing","Suzhou","Wuhan","Taipei","Kaohsiung","Macau","Doha","Abu Dhabi",
    "Riyadh","Marrakesh","Lisbon","Brussels","Copenhagen","Stockholm","Oslo","Helsinki","Reykjavik","Warsaw"
  ],

  "Sports ⚽": [
    "football","basketball","tennis","badminton","swimming","running","cycling","volleyball","baseball","hockey",
    "golf","boxing","skating","skiing","surfing","gymnastics","archery","fencing","rowing","bowling",
    "cricket","rugby","table tennis","diving","wrestling","karate","taekwondo","judo","climbing","shooting",
    "marathon","triathlon","sailing","canoeing","kayaking","snowboarding","figure skating","ice hockey","horse racing","motorsport",
    "formula one","softball","handball","netball","water polo","weightlifting","powerlifting","pole vault","high jump","long jump",
    "shot put","discus","javelin","hurdles","sprinting","relay","skateboarding","roller skating","billiards","snooker",
    "darts","chess","polo","lacrosse","squash","racquetball","pickleball","windsurfing","kitesurfing","mountain biking",
    "rock climbing","parkour","futsal","beach volleyball","wushu","muay thai","kickboxing","sumo","curling","biathlon",
    "pentathlon","decathlon","luge","bobsleigh","skeleton","water skiing","wakeboarding","fishing","bowls","disc golf",
    "orienteering","dragon boat","floorball","ultimate frisbee","cheerleading","dance sport","modern pentathlon","motocross","drifting","paddleboarding"
  ],

  "School 🏫": [
    "teacher","student","classroom","homework","textbook","notebook","pencil","ruler","calculator","examination",
    "lesson","timetable","library","canteen","uniform","project","presentation","whiteboard","backpack","desk",
    "chair","blackboard","eraser","sharpener","pen","marker","highlighter","worksheet","assignment","test",
    "quiz","exam","subject","class","principal","vice principal","school bus","school hall","computer lab","science lab",
    "art room","music room","sports hall","playground","field","canteen","locker","notice board","school bag","water bottle",
    "calculator","dictionary","globe","map","printer","projector","computer","tablet","keyboard","mouse",
    "group work","discussion","research","revision","study","reading","writing","experiment","competition","club",
    "CCA","assembly","recess","graduation","school trip","field trip","home economics","laboratory","corridor","staircase",
    "class monitor","prefect","school captain","principal","counsellor","librarian","coach","coach","teammate","classmate",
    "school event","sports day","open house","school concert","graduation ceremony","report card","school rules","attendance","school holiday","school calendar"
  ],

  "School Subjects 📚": [
    "English","mathematics","science","physics","chemistry","biology","history","geography","literature","computing",
    "art","music","drama","economics","Chinese","social studies","design","robotics","coding","physical education",
    "algebra","geometry","statistics","calculus","trigonometry","mechanics","electricity","magnetism","optics","astronomy",
    "environmental science","computer science","programming","information technology","business studies","accounting","psychology","sociology","philosophy","political science",
    "creative writing","poetry","grammar","linguistics","world history","ancient history","modern history","human geography","physical geography","economics",
    "microeconomics","macroeconomics","art history","visual arts","theatre studies","film studies","media studies","music theory","music composition","photography",
    "design technology","engineering","robotics","data science","artificial intelligence","cybersecurity","web design","digital media","food studies","home economics",
    "physical education","health education","sports science","environmental studies","marine science","earth science","astronomy","forensic science","medical science","food science",
    "Chinese literature","Chinese language","English literature","English language","public speaking","debate","drama","dance","choir","orchestra",
    "entrepreneurship","financial literacy","civics","religious studies","moral education","career studies","research methods","communication studies","computer applications","media literacy"
  ],

  "Household Objects 🏠": [
    "chair","table","sofa","bed","pillow","blanket","lamp","mirror","clock","television",
    "fan","refrigerator","microwave","cupboard","drawer","carpet","curtain","broom","bucket","vacuum",
    "mop","dustpan","shelf","bookshelf","wardrobe","desk","cabinet","drawer","hanger","basket",
    "trash bin","laundry basket","iron","ironing board","washing machine","dryer","air conditioner","heater","light bulb","switch",
    "remote control","clock","calendar","picture frame","vase","plant pot","cushion","rug","door","window",
    "doormat","umbrella","coat rack","shoe rack","toolbox","hammer","screwdriver","nail","tape measure","scissors",
    "glue","stapler","notebook","pen","phone charger","extension cord","power strip","battery","flashlight","candle",
    "lighter","thermos","water bottle","tissue box","toilet paper","soap","toothbrush","toothpaste","towel","hairdryer",
    "comb","hairbrush","shower curtain","laundry detergent","dish soap","sponge","plate","bowl","cup","mug",
    "fork","spoon","knife","chopping board","kettle","toaster","blender","rice cooker","coffee maker","pan"
  ],

  "Technology 💻": [
    "phone","laptop","computer","tablet","keyboard","mouse","monitor","camera","speaker","headphones",
    "charger","printer","television","smartwatch","console","robot","drone","microphone","projector","battery",
    "internet","website","software","hardware","application","password","wifi","bluetooth","browser","server",
    "database","program","code","algorithm","artificial intelligence","robotics","virtual reality","augmented reality","cybersecurity","smartphone",
    "processor","memory","storage","hard drive","flash drive","USB","screen","touchscreen","webcam","router",
    "modem","satellite","GPS","calculator","scanner","remote control","game controller","mousepad","power bank","smart speaker",
    "smart TV","e-reader","fitness tracker","digital camera","3D printer","electric car","self-driving car","facial recognition","voice assistant","cloud storage",
    "search engine","social media","video call","email","messaging app","online game","streaming","firewall","encryption","download",
    "upload","notification","username","QR code","barcode","chip","sensor","smart glasses","smart home","virtual assistant",
    "coding","programming","machine learning","data analysis","cloud computing","network","website","app","operating system","cyber attack"
  ],

  "Jobs 👷": [
    "teacher","doctor","nurse","police officer","firefighter","chef","pilot","engineer","lawyer","farmer",
    "artist","musician","actor","photographer","journalist","scientist","programmer","dentist","architect","designer",
    "accountant","banker","businessperson","manager","entrepreneur","mechanic","electrician","plumber","carpenter","builder",
    "driver","taxi driver","bus driver","train driver","flight attendant","air traffic controller","sailor","fisherman","veterinarian","pharmacist",
    "surgeon","paramedic","psychologist","counsellor","librarian","journalist","writer","author","editor","translator",
    "interpreter","lawyer","judge","politician","diplomat","soldier","detective","security guard","coach","athlete",
    "referee","designer","fashion designer","graphic designer","web designer","software developer","data scientist","researcher","chemist","biologist",
    "physicist","astronomer","geologist","architect","interior designer","photographer","filmmaker","director","producer","singer",
    "dancer","musician","composer","artist","sculptor","painter","florist","baker","barber","hairdresser",
    "waiter","cashier","shopkeeper","real estate agent","tour guide","travel agent","receptionist","secretary","social worker","park ranger"
  ],

  "Vehicles 🚗": [
    "car","bus","train","taxi","bicycle","motorcycle","scooter","truck","van","airplane",
    "helicopter","boat","ship","yacht","submarine","ambulance","fire engine","tractor","skateboard","roller skates",
    "motorbike","minibus","coach","tram","subway","monorail","high-speed train","bullet train","cruise ship","ferry",
    "speedboat","canoe","kayak","sailboat","jet ski","rocket","spaceship","hot air balloon","glider","seaplane",
    "private jet","cargo ship","container ship","tanker","fishing boat","lifeboat","hovercraft","trolley","wheelchair","golf cart",
    "forklift","dump truck","cement mixer","tow truck","garbage truck","police car","fire truck","school bus","delivery van","limousine",
    "convertible","sports car","race car","electric car","hybrid car","SUV","pickup truck","jeep","van","minivan",
    "rickshaw","tuk-tuk","gondola","cable car","ski lift","chairlift","snowmobile","ATV","dirt bike","go-kart",
    "unicycle","tricycle","bicycle","e-bike","electric scooter","segway","rollerblade","wagon","carriage","horse cart",
    "rocket","space shuttle","drone","UFO","satellite","tank","armored vehicle","tractor","harvester","bulldozer"
  ],

  "Nature 🌳": [
    "tree","flower","grass","river","lake","ocean","mountain","hill","forest","waterfall",
    "island","desert","volcano","cloud","rain","snow","rainbow","lightning","thunder","sunset",
    "sunrise","moon","stars","sky","wind","storm","fog","mist","ice","glacier",
    "cave","cliff","valley","canyon","meadow","field","jungle","swamp","marsh","pond",
    "stream","waterfall","beach","sand","rock","stone","pebble","shell","coral","reef",
    "island","coast","shore","bay","harbour","spring","autumn","winter","summer","sunlight",
    "moonlight","shadow","rainforest","savanna","tundra","wetland","mangrove","oasis","geyser","hot spring",
    "lava","ash","soil","mud","sandstone","crystal","mineral","fossil","moss","mushroom",
    "bamboo","vine","leaf","branch","root","seed","fruit","pollen","thorn","fern",
    "cactus","palm tree","pine tree","oak tree","maple tree","cherry blossom","wildflower","water lily","lotus","sunflower"
  ],

  "Weather ☀️": [
    "sunny","rainy","cloudy","windy","stormy","snowy","humid","hot","cold","warm",
    "cool","thunderstorm","lightning","rainbow","fog","breeze","drought","hurricane","tornado","drizzle",
    "hail","frost","ice","heatwave","blizzard","monsoon","typhoon","cyclone","thunder","snowstorm",
    "rainstorm","sandstorm","dust storm","mist","sleet","freezing","sunshine","overcast","clear","dry",
    "wet","muggy","chilly","freezing","boiling","temperature","forecast","climate","season","wind",
    "windy","gust","gale","breeze","rainfall","snowfall","cloud","cumulus","cirrus","foggy",
    "smog","humidity","pressure","air pressure","heat","cold front","warm front","weather warning","storm warning","rain shower",
    "thundercloud","ice storm","tropical storm","tornado warning","flood","flooding","landslide","light rain","heavy rain","heavy snow",
    "sunrise","sunset","rainy season","dry season","winter","summer","spring","autumn","monsoon season","typhoon season",
    "weather radar","weather station","weather report","temperature","wind speed","wind direction","air quality","forecast","climate change","global warming"
  ],

  "Colours 🎨": [
    "red","blue","green","yellow","orange","purple","pink","brown","black","white",
    "grey","gold","silver","navy","turquoise","violet","beige","maroon","crimson","teal",
    "cyan","magenta","indigo","lavender","lilac","mint","olive","lime","coral","peach",
    "salmon","burgundy","scarlet","ruby","emerald","jade","aqua","azure","navy blue","sky blue",
    "baby blue","royal blue","dark blue","light blue","forest green","mint green","lime green","olive green","dark green","light green",
    "lemon yellow","mustard","golden","amber","orange-red","burnt orange","peach","rose","hot pink","baby pink",
    "dusty pink","magenta","plum","violet","lavender","purple","eggplant","chocolate brown","tan","cream",
    "ivory","off-white","charcoal","silver","bronze","copper","rose gold","pearl","neon green","neon pink",
    "neon yellow","neon orange","pastel blue","pastel pink","pastel purple","pastel green","pastel yellow","rainbow","transparent","multicolour",
    "gradient","dark red","light red","dark purple","light purple","dark grey","light grey","dark brown","light brown","khaki"
  ],

  "Musical Instruments 🎵": [
    "piano","guitar","violin","drum","flute","trumpet","saxophone","cello","keyboard","ukulele",
    "harmonica","clarinet","trombone","harp","cymbal","tambourine","accordion","recorder","xylophone","triangle",
    "bass guitar","electric guitar","acoustic guitar","double bass","viola","oboe","bassoon","french horn","tuba","cornet",
    "piccolo","marimba","glockenspiel","bongo","conga","djembe","snare drum","bass drum","tambourine","castanets",
    "banjo","mandolin","sitar","erhu","pipa","guzheng","shamisen","koto","ocarina","bagpipes",
    "organ","synthesizer","harmonium","melodica","kazoo","pan flute","didgeridoo","steel drum","kalimba","mbira",
    "lyre","lute","harpsichord","clavichord","celesta","accordion","concertina","bugle","euphonium","flugelhorn",
    "cornet","vibraphone","timpani","woodblock","cowbell","triangle","maracas","claves","cabasa","guiro",
    "tambura","balalaika","bouzouki","oud","rebab","santur","shakuhachi","taiko","koto","duduk",
    "harmonium","mouth organ","ocarina","slide whistle","jaw harp","glass harmonica","waterphone","theremin","drum machine","sampler"
  ],

  "Hobbies 🎮": [
    "reading","drawing","painting","singing","dancing","gaming","cooking","swimming","photography","gardening",
    "cycling","fishing","hiking","writing","collecting","baking","skating","knitting","coding","playing music",
    "watching movies","watching TV","listening to music","playing football","playing basketball","playing tennis","playing badminton","running","jogging","camping",
    "travelling","travelling","shopping","fashion","makeup","crafting","origami","scrapbooking","journaling","blogging",
    "vlogging","podcasting","woodworking","pottery","sewing","crocheting","embroidery","calligraphy","painting","sculpting",
    "birdwatching","stargazing","bird feeding","collecting stamps","collecting coins","collecting cards","collecting comics","collecting toys","collecting rocks","collecting shells",
    "playing chess","playing cards","solving puzzles","doing magic tricks","learning languages","playing instruments","writing stories","writing poetry","making videos","editing videos",
    "volunteering","debating","public speaking","theatre","acting","cosplay","model building","lego","robotics","3D printing",
    "meditation","yoga","martial arts","rock climbing","surfing","skateboarding","roller skating","horse riding","archery","bowling",
    "karaoke","dance","drama","choir","band","podcasting","researching","DIY projects","nature walks","geocaching"
  ],

  "Bedroom 🛏️": [
    "bed","pillow","blanket","wardrobe","mirror","lamp","desk","chair","bookshelf","alarm clock",
    "fan","curtains","carpet","clothes","shoes","backpack","laptop","phone","charger","teddy bear",
    "drawer","cabinet","hanger","mattress","bedsheet","duvet","quilt","nightstand","bedside table","desk lamp",
    "study table","desk chair","computer","keyboard","mouse","monitor","headphones","speaker","television","remote",
    "clock","calendar","poster","picture frame","plant","flower","vase","rug","cushion","bean bag",
    "storage box","basket","laundry basket","trash bin","tissue box","water bottle","notebook","textbook","pencil","pen",
    "eraser","ruler","calculator","school uniform","jacket","hoodie","pajamas","socks","slippers","cap",
    "hairbrush","comb","hairdryer","perfume","skincare","toothbrush","toothpaste","hand cream","wallet","watch",
    "jewelry box","phone case","power bank","extension cord","fan","air conditioner","humidifier","air purifier","night light","alarm",
    "curtain","window","door","doorknob","wall","ceiling","floor","shelf","mirror","wardrobe"
  ],

  "Kitchen 🍳": [
    "plate","bowl","spoon","fork","knife","cup","mug","pan","pot","oven",
    "fridge","freezer","microwave","kettle","toaster","blender","sink","chopping board","spatula","ladle",
    "rice cooker","air fryer","coffee maker","dishwasher","frying pan","saucepan","wok","steamer","colander","strainer",
    "measuring cup","measuring spoon","mixing bowl","rolling pin","whisk","tongs","peeler","grater","can opener","bottle opener",
    "kitchen scissors","oven mitt","apron","dish towel","sponge","dish soap","trash bin","food container","lunch box","water bottle",
    "glass","wine glass","thermos","jug","pitcher","tray","cutlery","chopsticks","wooden spoon","serving spoon",
    "salt","pepper","sugar","flour","rice","oil","vinegar","soy sauce","ketchup","mustard",
    "mayonnaise","honey","jam","bread","eggs","milk","cheese","butter","vegetables","fruit",
    "meat","fish","chicken","noodles","pasta","cereal","snacks","chocolate","cookies","spices",
    "cinnamon","nutmeg","paprika","chili powder","garlic","ginger","onion","potato","carrot","tomato"
  ],

  "Beach 🏖️": [
    "sand","sea","wave","shell","towel","umbrella","sunscreen","swimsuit","sunglasses","sandcastle",
    "bucket","shovel","ball","surfboard","boat","lifeguard","coconut","seashell","beach chair","float",
    "flip-flops","beach bag","sun hat","cooler","picnic","snorkel","goggles","flippers","life jacket","surfboard",
    "paddleboard","kayak","canoe","jet ski","watermelon","ice cream","drinks","sandals","camera","phone",
    "towel","blanket","mat","tent","beach ball","frisbee","kite","fishing rod","fishing net","fishing boat",
    "crab","fish","seagull","dolphin","whale","jellyfish","starfish","coral","seaweed","rock",
    "cliff","island","sunrise","sunset","sunshine","cloud","wind","breeze","wave","tide",
    "ocean","shore","coast","seawater","sand dune","lifeguard tower","pier","boardwalk","harbour","marina",
    "resort","coconut tree","palm tree","beach hut","cabana","changing room","shower","footprints","shell necklace","beach game",
    "volleyball","surfing","swimming","snorkelling","diving","fishing","boating","sunbathing","picnic","camping"
  ],

  "Airport ✈️": [
    "airplane","airport","passport","luggage","suitcase","ticket","boarding pass","gate","runway","pilot",
    "flight attendant","security","terminal","baggage","departure","arrival","trolley","customs","immigration","check-in",
    "security check","passport control","departure hall","arrival hall","baggage claim","boarding gate","waiting area","information desk","duty free","restaurant",
    "cafe","toilet","escalator","elevator","stairs","moving walkway","airport bus","taxi","car park","parking",
    "airline","flight","seat","window seat","aisle seat","economy class","business class","first class","cockpit","cabin",
    "wing","engine","jet","helicopter","cargo","cargo plane","runway","taxiway","control tower","air traffic controller",
    "luggage tag","carry-on","backpack","hand luggage","passport","visa","travel document","boarding ticket","flight number","departure time",
    "arrival time","delay","cancelled flight","connecting flight","layover","destination","departure","arrival","terminal","gate number",
    "security officer","immigration officer","customs officer","pilot","co-pilot","crew","passenger","traveller","tourist","airport lounge",
    "currency exchange","ATM","charging station","wifi","flight information screen","announcement","baggage carousel","lost luggage","travel adapter","neck pillow"
  ],

  "Supermarket 🛒": [
    "basket","trolley","cashier","receipt","shelf","freezer","fruit","vegetables","bread","milk",
    "cereal","chocolate","snacks","drinks","meat","fish","eggs","noodles","detergent","toothpaste",
    "toothbrush","shampoo","soap","tissue","toilet paper","paper towel","rice","flour","sugar","salt",
    "pepper","oil","sauce","ketchup","mayonnaise","mustard","cheese","butter","yogurt","ice cream",
    "frozen food","canned food","instant noodles","biscuits","cookies","chips","crackers","candy","juice","water",
    "coffee","tea","milk powder","baby food","pet food","dog food","cat food","cleaning products","laundry detergent","dish soap",
    "sponge","trash bags","plastic bags","reusable bag","shopping bag","price tag","barcode","scanner","checkout","self-checkout",
    "cash","coins","credit card","debit card","membership card","discount","sale","coupon","receipt","customer service",
    "bakery","butcher","seafood section","dairy section","frozen section","produce section","snack aisle","drink aisle","toiletries","household items",
    "pharmacy","florist","convenience store","shopping list","special offer","promotion","queue","aisle","shopping cart","cash register"
  ],

  "Uncommon Animals 🦎": [
    "flamingo","peacock","meerkat","otter","raccoon","hedgehog","platypus","sloth","chameleon","iguana",
    "seahorse","jellyfish","stingray","narwhal","walrus","mongoose","armadillo","capybara","alpaca","lemur",
    "axolotl","pangolin","quokka","wombat","echidna","cassowary","kiwi","kiwi bird","toucan","macaw",
    "cockatoo","hummingbird","kingfisher","pelican","albatross","puffin","shoebill","emu","ostrich","cassowary",
    "komodo dragon","gecko","iguana","anaconda","python","boa","cobra","viper","mamba","chameleon",
    "tree frog","poison dart frog","salamander","newt","tadpole","axolotl","tortoise","alligator","caiman","gavial",
    "manta ray","swordfish","pufferfish","anglerfish","clownfish","lionfish","seahorse","starfish","sea cucumber","horseshoe crab",
    "blue crab","king crab","coconut crab","hermit crab","lobster","shrimp","krill","squid","cuttlefish","nautilus",
    "tarantula","scorpion","praying mantis","stick insect","leaf insect","firefly","dragonfly","cicada","beetle","beetle",
    "weevil","moth","silkworm","centipede","millipede","slug","snail","earthworm","leech","star-nosed mole"
  ],

  "Uncommon Objects 🔍": [
    "hourglass","compass","telescope","binoculars","magnifying glass","typewriter","abacus","metronome","kaleidoscope","lantern",
    "tripod","thermos","stapler","hole puncher","whistle","hammock","toolbox","sextant","periscope","barometer",
    "thermometer","microscope","stethoscope","stopwatch","protractor","compass","sundial","gramophone","phonograph","record player",
    "typewriter","film camera","projector","slide projector","film reel","vinyl record","cassette","walkie-talkie","megaphone","bullhorn",
    "telescope","microscope","binoculars","tuning fork","metronome","music box","wind-up toy","snow globe","hourglass","compass",
    "sewing machine","spinning wheel","loom","pottery wheel","chisel","anvil","blacksmith hammer","horseshoe","lantern","oil lamp",
    "fountain pen","quill","inkwell","sealing wax","wax seal","scroll","parchment","abacus","slide rule","ruler",
    "plumb line","level","caliper","micrometer","magnifying glass","telescope","periscope","gyroscope","pendulum","barometer",
    "weather vane","wind chime","sundial","weathervane","thermometer","hourglass","compass","lockpick","padlock","key",
    "luggage tag","nameplate","badge","medal","trophy","plaque","ornament","figurine","marionette","puppet"
  ],

  "Things That Are Round ⚪": [
    "ball","coin","wheel","orange","clock","plate","button","globe","donut","marble",
    "bubble","balloon","moon","ring","tire","pancake","pizza","cookie","grape","watermelon",
    "apple","cherry","lemon","lime","orange","tomato","potato","onion","cabbage","pumpkin",
    "basketball","football","baseball","golf ball","tennis ball","ping pong ball","bowling ball","beach ball","crystal ball","snowball",
    "soap bubble","bubble gum","button","badge","medal","plate","bowl","cup","wheelchair wheel","steering wheel",
    "clock face","watch face","compass","magnifying glass","lens","mirror","drum","cymbal","speaker","camera lens",
    "vinyl record","CD","DVD","coin","token","medallion","ring","bracelet","necklace","earring",
    "sun","moon","planet","star","earth","globe","bubble","raindrop","snowflake","pearl",
    "marble","bead","beehive","egg","dumpling","meatball","fishball","mooncake","macaron","truffle",
    "doughnut","waffle","pancake","tortilla","pie","tart","cake","cookie","sandwich","hamburger"
  ],

  "Things That Fly 🪽": [
    "airplane","bird","helicopter","butterfly","bee","drone","kite","eagle","mosquito","bat",
    "balloon","rocket","frisbee","paper plane","parrot","owl","hawk","falcon","pigeon","sparrow",
    "crow","seagull","penguin","duck","goose","swan","flamingo","peacock","parachute","hang glider",
    "hot air balloon","spaceship","satellite","helicopter","jet","fighter jet","glider","airship","blimp","UFO",
    "dragonfly","firefly","moth","wasp","hornet","fly","grasshopper","ladybug","beetle","cicada",
    "locust","hummingbird","woodpecker","kingfisher","pelican","albatross","puffin","toucan","macaw","cockatoo",
    "feather","leaf","paper","plastic bag","dust","smoke","cloud","ash","snow","raindrop",
    "rocket","firework","confetti","balloon","bubble","soap bubble","seed","dandelion seed","kite","frisbee",
    "boomerang","parachute","paraglider","hang glider","model airplane","toy drone","paper helicopter","paper airplane","flying squirrel","flying fish"
  ],

  "Things That Are Cold ❄️": [
    "ice","snow","ice cream","freezer","snowman","popsicle","smoothie","Antarctica","winter","refrigerator",
    "hail","glacier","milkshake","ice cube","cold water","frozen food","frozen yogurt","sorbet","slushie","snowball",
    "iceberg","frost","frostbite","snowflake","icicle","cold drink","iced tea","iced coffee","lemonade","cold milk",
    "ice pack","cooler","air conditioner","fan","winter coat","scarf","gloves","beanie","jacket","blanket",
    "penguin","polar bear","seal","walrus","arctic fox","reindeer","snowy mountain","mountain snow","ice rink","skating rink",
    "snowstorm","blizzard","freezing rain","sleet","hailstone","frozen lake","frozen river","ice cave","ice sculpture","ice castle",
    "snow globe","ice tray","ice bucket","cold storage","freezer box","refrigerated truck","cold room","cold front","winter air","night air",
    "mint","peppermint","cucumber","watermelon","grape","orange","popsicle","ice lolly","gelato","frozen dessert",
    "bingsu","ice kacang","ice jelly","jelly ice","cold soup","gazpacho","yogurt","cold noodles","cold pasta","chilled fruit",
    "frozen peas","frozen vegetables","frozen pizza","frozen chicken","frozen fish","ice cream cake","ice cream sandwich","snow cone","shaved ice","ice cube"
  ],

  "Things That Are Hot 🔥": [
    "fire","soup","coffee","tea","oven","sunlight","curry","chili","sauna","barbecue",
    "volcano","steam","pan","stove","noodles","pizza","hot chocolate","hotpot","fried chicken","toast",
    "hot dog","soup","ramen","rice","fried rice","pasta","steak","burger","pancake","waffle",
    "tea","coffee","espresso","latte","cocoa","milk","water","boiling water","boiling soup","hot milk",
    "sun","desert","summer","heatwave","sunshine","sand","asphalt","radiator","heater","fireplace",
    "campfire","bonfire","grill","barbecue","oven","microwave","toaster","frying pan","wok","kettle",
    "iron","hairdryer","steam","lava","volcano","boiling oil","hot sauce","pepper","chili","ginger",
    "cinnamon","curry","mustard","wasabi","spicy noodles","hot wings","fried food","roast chicken","baked potato","roast beef",
    "sunburn","fever","hot air","hot spring","sauna","steam room","desert","tropical weather","summer weather","heat",
    "flame","ember","coal","charcoal","ash","firework","rocket","engine","exhaust","light bulb"
  ],

  "Things With Wheels 🛞": [
    "car","bicycle","bus","truck","train","motorcycle","scooter","skateboard","wheelchair","trolley",
    "suitcase","roller skates","tractor","ambulance","taxi","van","fire truck","police car","shopping cart","stroller",
    "wheelbarrow","wagon","cart","golf cart","forklift","dump truck","garbage truck","cement mixer","tow truck","delivery van",
    "school bus","minibus","coach","tram","subway","train","high-speed train","bullet train","monorail","rollerblade",
    "unicycle","tricycle","bicycle","e-bike","electric scooter","segway","go-kart","race car","sports car","convertible",
    "SUV","pickup truck","jeep","minivan","limousine","rickshaw","tuk-tuk","carriage","horse cart","wagon",
    "wheelchair","office chair","shopping trolley","luggage cart","hand truck","dolly","skateboard","longboard","roller skates","rollerblades",
    "wheelbarrow","lawn mower","harvester","bulldozer","excavator","crane","road roller","tank","armored vehicle","fire engine",
    "airplane","helicopter","boat trailer","trailer","caravan","camper van","mobile home","food truck","ice cream truck","garbage cart",
    "toy car","toy truck","toy train","model car","bicycle trailer","baby stroller","wheelchair","office chair","gaming chair","wagon"
  ],

  "Things Found In The Sky ☁️": [
    "sun","moon","stars","clouds","airplane","bird","rainbow","lightning","helicopter","kite",
    "satellite","rocket","balloon","comet","meteor","sky","sunlight","moonlight","sunset","sunrise",
    "rain","snow","hail","fog","mist","thundercloud","storm","thunderstorm","rainbow","aurora",
    "constellation","planet","Mars","Jupiter","Venus","Saturn","Mercury","Neptune","Uranus","Earth",
    "space station","spaceship","spacecraft","asteroid","meteorite","galaxy","Milky Way","nebula","black hole","shooting star",
    "eagle","owl","hawk","falcon","pigeon","sparrow","crow","seagull","parrot","butterfly",
    "bee","dragonfly","bat","kite","paraglider","hang glider","parachute","hot air balloon","blimp","drone",
    "firework","smoke","ash","dust","cloud","rain cloud","snow cloud","storm cloud","cumulus","cirrus",
    "contrail","airplane trail","sun dog","halo","moon halo","star","planet","satellite","space debris","rocket"
  ],

  "Things Found Underground ⛏️": [
    "subway","tunnel","roots","worms","rocks","minerals","fossils","coal","diamonds","treasure",
    "pipes","cables","mushrooms","caves","insects","soil","sand","clay","mud","water",
    "groundwater","oil","natural gas","gold","silver","copper","iron","tin","zinc","quartz",
    "crystals","gemstones","emerald","ruby","sapphire","amethyst","granite","limestone","marble","sandstone",
    "basalt","slate","gravel","pebbles","roots","tree roots","plant roots","worms","ants","beetles",
    "moles","snakes","rabbits","burrows","nests","fungi","mushrooms","bacteria","microbes","fossils",
    "bones","skeletons","archaeological remains","ancient ruins","underground river","underground lake","underground cave","mine","mineshaft","tunnel",
    "subway station","sewer","drain","water pipe","gas pipe","electric cable","fiber optic cable","foundation","basement","cellar",
    "underground parking","bunker","shelter","buried box","buried treasure","time capsule","septic tank","well","aquifer","geothermal heat",
    "lava","magma","volcanic rock","underground garden","underground mushroom","underground passage","underground railway","underground city","underground bunker","underground laboratory"
  ],

  "Things People Collect 🧸": [
    "stamps","coins","cards","toys","books","shells","rocks","stickers","magnets","keychains",
    "figures","comics","photographs","sneakers","watches","postcards","newspapers","magazines","vinyl records","CDs",
    "DVDs","coins","banknotes","medals","trophies","badges","pins","patches","buttons","bottles",
    "marbles","action figures","dolls","lego","model cars","model trains","model airplanes","trading cards","baseball cards","pokemon cards",
    "sports cards","comic books","manga","novels","poetry books","autographs","signatures","movie posters","concert tickets","event tickets",
    "souvenirs","snow globes","tea cups","mugs","plates","spoons","posters","artwork","paintings","drawings",
    "photographs","camera equipment","vinyl records","cassette tapes","music boxes","watches","clocks","jewelry","gemstones","crystals",
    "perfume bottles","toy cars","toy soldiers","action figures","stuffed animals","teddy bears","dolls","figurines","ornaments","Christmas decorations",
    "shells","feathers","leaves","pressed flowers","insects","fossils","stones","coins","stamps","keychains",
    "magnets","postcards","bookmarks","pens","pencils","erasers","notebooks","stickers","washi tape","stationery"
  ],

  "Things That Make Noise 🔊": [
    "alarm","phone","speaker","drum","guitar","piano","bell","whistle","siren","engine",
    "vacuum","blender","microwave","television","doorbell","car horn","train","airplane","motorcycle","bus",
    "truck","fire alarm","smoke alarm","clock","watch","radio","computer","keyboard","mouse","printer",
    "washing machine","dryer","dishwasher","fan","air conditioner","hairdryer","toaster","kettle","coffee machine","fridge",
    "dog","cat","bird","cow","horse","sheep","goat","pig","chicken","duck",
    "lion","tiger","elephant","monkey","frog","snake","bee","mosquito","cricket","cicada",
    "rain","thunder","wind","waves","waterfall","river","ocean","fire","explosion","firework",
    "clapping","laughter","crying","talking","singing","shouting","whispering","footsteps","knocking","banging",
    "door","window","chair","table","glass","plate","cutlery","pot","pan","bell",
    "church bell","school bell","alarm clock","timer","metronome","tambourine","cymbal","trumpet","flute","saxophone"
  ],

  "Things You Can Wear 👕": [
    "shirt","pants","shoes","socks","hat","jacket","scarf","gloves","belt","watch",
    "glasses","uniform","dress","skirt","hoodie","sandals","shorts","sweater","coat","boots",
    "sneakers","slippers","flip-flops","jeans","T-shirt","blouse","suit","tie","bow tie","vest",
    "cardigan","tracksuit","pajamas","swimsuit","sportswear","jersey","windbreaker","overalls","leggings","stockings",
    "heels","loafers","rain boots","winter coat","trench coat","blazer","turtleneck","tank top","polo shirt","cargo pants",
    "mini skirt","long skirt","maxi dress","sun hat","bucket hat","beanie","headband","hairband","suspenders","mittens",
    "shawl","poncho","kimono","hanbok","qipao","cheongsam","sarong","apron","bathrobe","nightgown",
    "onesie","costume","mask","helmet","wetsuit","life jacket","rain jacket","fleece","thermal wear","necklace",
    "bracelet","ring","earrings","anklet","brooch","tie clip","cufflinks","hair clip","hair tie","watch",
    "smartwatch","backpack","handbag","purse","wallet","crossbody bag","shoulder bag","sunglasses","safety goggles","face mask"
  ],

  "Things You Can Read 📖": [
    "book","newspaper","magazine","comic","novel","textbook","dictionary","menu","map","letter",
    "email","poster","sign","recipe","instructions","website","blog","article","essay","report",
    "story","poem","diary","journal","notebook","worksheet","exam","question","answer","label",
    "caption","subtitle","headline","advertisement","brochure","leaflet","flyer","catalogue","manual","guidebook",
    "passport","ticket","boarding pass","receipt","bill","contract","form","application","certificate","report card",
    "calendar","schedule","timetable","notice","announcement","message","text","chat","comment","review",
    "novel","short story","fairy tale","myth","legend","biography","autobiography","encyclopedia","atlas","comic book",
    "manga","graphic novel","poetry collection","play","script","screenplay","lyrics","signboard","road sign","traffic sign",
    "warning label","food label","price tag","name tag","business card","postcard","invitation","letter","email","text message"
  ],

  "Things In A Park 🌳": [
    "tree","grass","bench","playground","swing","slide","pond","fountain","flower","bicycle",
    "dog","bird","path","rubbish bin","picnic table","statue","lamp post","bridge","lake","duck",
    "squirrel","butterfly","bee","fish","turtle","grass","leaves","flowers","bush","hedge",
    "garden","fountain","waterfall","pond","stream","bench","table","chair","picnic blanket","basket",
    "playground","sandbox","seesaw","monkey bars","climbing frame","slide","swing","merry-go-round","skateboard","bicycle",
    "jogger","runner","walker","family","children","dog walker","photographer","gardener","security guard","park ranger",
    "path","walking trail","jogging trail","cycling path","bridge","footbridge","pond","lake","river","water",
    "tree","flower","rose","sunflower","cherry blossom","palm tree","bamboo","mushroom","grass","moss",
    "fountain","statue","sculpture","monument","sign","map","bin","recycling bin","toilet","cafe",
    "food stall","ice cream cart","water fountain","car park","entrance","exit","gate","fence","lamp","bench"
  ],

  "Singapore 🇸🇬": [
    "Merlion","hawker centre","MRT","kopitiam","kaya toast","chicken rice","chilli crab","Gardens by the Bay","Sentosa","durian",
    "orchid","shophouse","HDB","Singapore Flyer","Marina Bay Sands","Universal Studios","Singapore Zoo","Night Safari","Bird Paradise","Chinatown",
    "Little India","Kampong Glam","Orchard Road","Clarke Quay","Boat Quay","East Coast Park","Changi Airport","National Gallery","National Museum","Fort Canning",
    "Lau Pa Sat","Haji Lane","Singapore Botanic Gardens","Esplanade","ArtScience Museum","Jewel Changi","Pulau Ubin","Sungei Buloh","MacRitchie Reservoir","Marina Barrage",
    "Singapore River","Sentosa Island","Mount Faber","Haw Par Villa","East Coast","Jurong","Tiong Bahru","Bugis","Woodlands","Tampines",
    "Sengkang","Punggol","Hougang","Ang Mo Kio","Toa Payoh","Bedok","Pasir Ris","Yishun","Bukit Timah","Bukit Panjang",
    "Nasi lemak","laksa","satay","roti prata","char kway teow","bak kut teh","mee siam","mee rebus","rojak","fishball noodles",
    "prawn noodles","wonton noodles","kaya","kopi","teh tarik","Tiger beer","Singapore Sling","Merlion","lion","orchid",
    "Singapore flag","National Day","MRT station","EZ-Link card","SimplyGo","HDB flat","void deck","hawker centre","food court","wet market"
  ],

  "Japan 🇯🇵": [
    "sushi","ramen","anime","manga","kimono","Mount Fuji","Tokyo","samurai","ninja","shrine",
    "sakura","matcha","karaoke","bullet train","origami","sumo","kimchi","teriyaki","tempura","udon",
    "soba","takoyaki","okonomiyaki","yakitori","sashimi","miso soup","onigiri","mochi","dango","dorayaki",
    "taiyaki","wagashi","green tea","Japanese tea ceremony","cherry blossoms","Fuji Five Lakes","Kyoto","Osaka","Hokkaido","Okinawa",
    "Hiroshima","Nara","Nagoya","Yokohama","Sapporo","Shibuya","Shinjuku","Akihabara","Harajuku","Tokyo Tower",
    "Tokyo Skytree","Shibuya Crossing","Imperial Palace","Fushimi Inari Shrine","Kinkakuji","Arashiyama","Nara Park","Osaka Castle","Himeji Castle","Itsukushima Shrine",
    "Japanese garden","zen","Buddhism","Shinto","torii gate","tatami","futon","geta","yukata","hanami",
    "Japanese flag","Mount Fuji","bullet train","Shinkansen","JR train","convenience store","vending machine","capsule toy","Pikachu","Hello Kitty",
    "Nintendo","PlayStation","Pokemon","Studio Ghibli","Godzilla","Dragon Ball","One Piece","Naruto","Doraemon","Detective Conan"
  ],

  "Korea 🇰🇷": [
    "kimchi","K-pop","Seoul","hanbok","ramen","bibimbap","taekwondo","drama","BTS","palace",
    "soju","tteokbokki","chopsticks","Jeju","bulgogi","kimbap","samgyeopsal","japchae","mandu","naengmyeon",
    "kimchi jjigae","sundubu jjigae","galbi","fried chicken","Korean barbecue","hotteok","bingsu","gimbap","rice cake","fish cake",
    "Seoul Tower","Gyeongbokgung Palace","Bukchon Hanok Village","Namsan Tower","Han River","Myeongdong","Gangnam","Hongdae","Busan","Incheon",
    "Jeju Island","Daegu","Daejeon","Gwangju","Suwon","DMZ","N Seoul Tower","Changdeokgung Palace","Hanok","traditional market",
    "Korean flag","Korean language","Hangul","Korean alphabet","Korean culture","Korean music","Korean drama","Korean cinema","Korean skincare","Korean fashion",
    "K-pop idol","boy group","girl group","music video","fan meeting","concert","karaoke","PC bang","webtoon","manhwa",
    "Samsung","Hyundai","LG","Kia","Nintendo","Seoul subway","Korean barbecue","street food","convenience store","ramyeon",
    "soju","makgeolli","barley tea","green tea","yuja tea","omija tea","sweet rice drink","banana milk","milk","coffee"
  ],

  "Random Challenge 🎲": [
    "umbrella","dinosaur","astronaut","volcano","castle","pirate","treasure","telescope","mermaid","robot",
    "magician","dragon","rainbow","submarine","spaceship","lighthouse","detective","crown","compass","rocket",
    "unicorn","wizard","princess","knight","dragon","fairy","giant","monster","alien","ghost",
    "vampire","werewolf","zombie","superhero","villain","time machine","spaceship","flying car","robot dog","magic wand",
    "invisible cloak","treasure map","pirate ship","desert island","haunted house","secret tunnel","hidden door","mystery box","golden key","ancient book",
    "crystal ball","magic mirror","talking cat","giant spider","tiny elephant","flying fish","ice castle","underwater city","lost city","secret laboratory",
    "moon base","space station","alien planet","meteor","black hole","comet","asteroid","solar eclipse","rainbow","thunderstorm",
    "jungle","desert","volcano","waterfall","cave","mountain","island","ocean","forest","castle",
    "museum","library","school","hospital","airport","train station","amusement park","zoo","aquarium","stadium",
    "camera","microphone","guitar","piano","drum","book","pencil","clock","key","lock"
  ],

  "Chinese Traditional Culture 🏮": [
    "春节","元宵节","清明节","端午节","七夕节","中秋节","重阳节","舞龙舞狮","剪纸艺术","中国书法",
    "水墨画","京剧脸谱","茶文化","古典音乐","传统节日","十二生肖","中国结","传统婚礼","传统服饰","民间传说",
    "传统手工艺","皮影戏","中国武术","太极拳","功夫","围棋","中国象棋","古筝","二胡","琵琶",
    "笛子","京剧","昆曲","越剧","黄梅戏","相声","评书","木偶戏","杂技","舞狮",
    "春联","年画","福字","灯笼","鞭炮","红包","压岁钱","年夜饭","拜年","赏花灯",
    "猜灯谜","赛龙舟","吃粽子","赏月","嫦娥奔月","牛郎织女","孔明灯","祭祖","扫墓","赏菊",
    "汉服","唐装","旗袍","刺绣","陶瓷","青花瓷","玉器","景泰蓝","中国园林","四合院",
    "长城","故宫","天坛","颐和园","兵马俑","丝绸之路","中国茶道","传统中医","针灸","中药",
    "汉字文化","甲骨文","篆刻艺术","毛笔字","宣纸","砚台","墨汁","文房四宝","传统建筑","民间艺术",
    "传统节气","二十四节气","春节习俗","中秋习俗","端午习俗","婚礼习俗","传统礼仪","家族文化","孝道文化","中国民俗"
  ],

  "Singapore Food 🇸🇬": [
    "海南鸡饭","辣椒螃蟹","肉骨茶","沙嗲","炒粿条","福建炒面","云吞面","鱼丸面","叻沙","椰浆饭",
    "罗惹","菜头粿","咖喱鸡","虾面","酿豆腐","豆浆油条","kaya吐司","冰淇淋面包","炒萝卜糕","田鸡粥",
    "肉脞面","鱼片米粉","猪肉粥","粥","烧腊","烧鸭","烧鹅","叉烧","海南咖喱饭","咖喱鱼头",
    "黑胡椒螃蟹","麦片虾","咸蛋黄鸡","咸蛋黄虾","脆皮鸡","盐焗鸡","卤面","马来卤面","马来炒饭","马来糕点",
    "马来煎饼","印度煎饼","印度拉茶","roti prata","murtabak","mee rebus","mee siam","nasi lemak","mee goreng","sambal",
    "炸香蕉","炸春卷","炸豆腐","炸鸡翅","鱼丸","鱼饼","豆腐","豆花","冰豆花","珍珠奶茶",
    "仙草","红豆冰","冰沙","冰淇淋","雪糕","榴莲","猫山王","榴莲泡芙","榴莲蛋糕","榴莲冰淇淋",
    "班兰蛋糕","班兰戚风蛋糕","椰子糕","椰浆饭","椰丝糯米","娘惹糕点","九层糕","安邦豆腐","摩摩喳喳","薏米水",
    "罗汉果茶","甘蔗汁","酸柑水","薏米水","豆浆","美禄","kopi","teh","teh tarik","kopi o",
    "kopi c","咖椰吐司","半熟蛋","软煮蛋","海南面包","传统咖啡","南洋咖啡","新加坡司令","Tiger啤酒","沙嗲米粉"
  ],

  "Singapore Places 🇸🇬": [
    "滨海湾金沙","鱼尾狮公园","圣淘沙岛","环球影城","新加坡动物园","滨海湾花园","鸟天堂","牛车水","小印度","甘榜格南",
    "乌节路","克拉码头","东海岸公园","樟宜机场","国家美术馆","新加坡国家博物馆","福康宁公园","老巴刹","哈芝巷","新加坡植物园",
    "滨海艺术中心","艺术科学博物馆","星耀樟宜","环球影城","水上探险乐园","夜间野生动物园","河川生态园","裕廊飞禽公园","巴拉湾海滩","西乐索海滩",
    "东海岸公园","麦里芝蓄水池","双溪布洛湿地保护区","乌敏岛","花柏山","圣淘沙名胜世界","鱼尾狮","滨海湾","滨海堤坝","新加坡河",
    "驳船码头","罗伯逊码头","牛车水街市","牛车水佛牙寺","马里安曼兴都庙","苏丹清真寺","哈芝巷","甘榜格南","小印度拱廊","维拉玛卡里雅曼兴都庙",
    "乌节路","义安城","ION Orchard","滨海广场","新达城","莱佛士城","武吉士","武吉士街","荷兰村","丹戎巴葛",
    "中峇鲁","大巴窑","宏茂桥","淡滨尼","榜鹅","盛港","后港","义顺","兀兰","勿洛",
    "巴西立","裕廊东","裕廊西","金文泰","武吉班让","武吉知马","蔡厝港","三巴旺","巴耶利峇","加东",
    "樟宜村","东海岸公园","滨海湾花园","新加坡植物园","福康宁公园","圣淘沙岛","乌敏岛","国家体育场","新加坡室内体育馆","国家美术馆"
  ],

  "Chinese Cities 🇨🇳": [
    "北京","上海","广州","深圳","成都","重庆","西安","杭州","南京","苏州",
    "武汉","长沙","厦门","青岛","天津","大连","昆明","桂林","哈尔滨","乌鲁木齐",
    "郑州","济南","沈阳","长春","福州","南昌","合肥","太原","石家庄","兰州",
    "贵阳","南宁","海口","三亚","珠海","佛山","东莞","惠州","无锡","常州",
    "宁波","温州","绍兴","嘉兴","湖州","金华","徐州","扬州","镇江","泰州",
    "洛阳","开封","安阳","平顶山","襄阳","宜昌","岳阳","株洲","衡阳","郴州",
    "绵阳","乐山","德阳","宜宾","泸州","南充","拉萨","银川","西宁","呼和浩特",
    "包头","大同","秦皇岛","唐山","保定","烟台","威海","临沂","洛阳","汕头",
    "湛江","茂名","柳州","桂林","北海","海口","三亚","喀什","大理","丽江",
    "张家界","九江","景德镇","泉州","莆田","漳州","潮州","揭阳","香港","澳门"
  ],

  "Chinese Attractions 🏯": [
    "长城","故宫","天安门广场","兵马俑","外滩","西湖","黄山","张家界","九寨沟","丽江古城",
    "颐和园","天坛","乐山大佛","布达拉宫","东方明珠塔","秦始皇陵","黄果树瀑布","桂林山水","鼓浪屿","都江堰",
    "三峡","长江","黄河","泰山","华山","衡山","嵩山","峨眉山","武夷山","庐山",
    "张家界国家森林公园","天门山","凤凰古城","平遥古城","乌镇","周庄","同里古镇","西塘古镇","拙政园","留园",
    "狮子林","寒山寺","灵隐寺","少林寺","龙门石窟","莫高窟","云冈石窟","大雁塔","小雁塔","华清宫",
    "三星堆","都江堰","青城山","峨眉山","稻城亚丁","喀纳斯","天山天池","敦煌","鸣沙山","月牙泉",
    "鼓浪屿","厦门大学","珠海渔女","广州塔","深圳湾","香港迪士尼","维多利亚港","澳门大三巴","澳门威尼斯人","东方明珠",
    "上海迪士尼","上海博物馆","南京夫子庙","中山陵","苏州园林","杭州西湖","雷峰塔","灵隐寺","千岛湖","乌镇",
    "丽江古城","大理古城","洱海","玉龙雪山","西双版纳","布达拉宫","纳木错","青海湖","茶卡盐湖","敦煌莫高窟",
    "兵马俑博物馆","中国国家博物馆","故宫博物院","国家大剧院","鸟巢","水立方","环球影城北京","八达岭长城","慕田峪长城","颐和园"
  ],

  "Chinese School Life 🏫": [
    "课本","作业","考试","课堂","老师","同学","校长","班主任","黑板","白板",
    "课表","校服","书包","文具盒","图书馆","食堂","体育课","小组讨论","班级活动","学校旅行",
    "铅笔","钢笔","圆珠笔","橡皮擦","尺子","剪刀","胶水","订书机","文件夹","笔记本",
    "作业本","练习册","试卷","考卷","答案","题目","课题","项目","报告","演讲",
    "电脑","平板电脑","投影仪","计算器","打印机","实验室","科学实验","电脑室","美术室","音乐室",
    "体育馆","操场","篮球场","足球场","跑道","游泳池","礼堂","走廊","楼梯","教室",
    "课间休息","午休","早餐时间","午餐时间","早会","升旗仪式","校庆","运动会","文化节","毕业典礼",
    "社团活动","课外活动","兴趣小组","学生会","班委会","值日生","班长","副班长","学习委员","纪律委员",
    "考试周","复习","预习","阅读","写作","讨论","研究","实验","演讲比赛","作文比赛",
    "数学竞赛","运动比赛","校园生活","学校规则","学生证","校牌","成绩单","家长会","老师办公室","校长室"
  ],

  "Chinese Historical Figures 👑": [
    "孔子","秦始皇","汉武帝","李白","杜甫","白居易","诸葛亮","曹操","孙悟空","岳飞",
    "成吉思汗","郑和","司马迁","王羲之","屈原","司马光","李清照","苏轼","唐太宗","包拯",
    "孟子","老子","庄子","墨子","韩非子","孙武","项羽","刘邦","刘备","关羽",
    "张飞","周瑜","司马懿","曹丕","司马昭","武则天","杨贵妃","玄奘","鉴真","王安石",
    "欧阳修","苏轼","苏洵","苏辙","辛弃疾","陆游","文天祥","朱熹","陆九渊","王阳明",
    "李时珍","华佗","张仲景","扁鹊","蔡伦","张衡","祖冲之","沈括","郭守敬","徐霞客",
    "郑成功","康熙帝","雍正帝","乾隆帝","慈禧太后","林则徐","曾国藩","李鸿章","康有为","梁启超",
    "孙中山","鲁迅","胡适","蔡元培","徐志摩","钱钟书","老舍","巴金","冰心","张爱玲",
    "曹雪芹","吴承恩","施耐庵","罗贯中","蒲松龄","司马光","班固","司马相如","陶渊明","王维",
    "孟浩然","白居易","柳宗元","韩愈","杜牧","李商隐","范仲淹","黄庭坚","柳永","关汉卿"
  ],

  "Chinese Literature 📖": [
    "西游记","三国演义","红楼梦","水浒传","论语","史记","唐诗","宋词","元曲","木兰诗",
    "桃花源记","岳阳楼记","赤壁赋","孔雀东南飞","聊斋志异","儒林外史","西厢记","骆驼祥子","朝花夕拾","朱自清散文",
    "诗经","楚辞","左传","战国策","庄子","孟子","大学","中庸","礼记","孙子兵法",
    "三国志","汉书","后汉书","资治通鉴","世说新语","搜神记","唐传奇","宋话本","元杂剧","明清小说",
    "牡丹亭","桃花扇","长生殿","儒林外史","官场现形记","老残游记","二十年目睹之怪现状","孽海花","围城","家",
    "春","秋","子夜","边城","四世同堂","茶馆","雷雨","日出","北京人","荷花淀",
    "背影","荷塘月色","春","匆匆","济南的冬天","故乡","祝福","阿Q正传","狂人日记","孔乙己",
    "藤野先生","从百草园到三味书屋","社戏","少年中国说","岳阳楼记","醉翁亭记","出师表","陈情表","兰亭集序","滕王阁序",
    "陋室铭","爱莲说","马说","师说","劝学","逍遥游","廉颇蔺相如列传","鸿门宴","赤壁之战","孔雀东南飞",
    "木兰辞","长恨歌","琵琶行","将进酒","静夜思","登鹳雀楼","春望","江雪","水调歌头","念奴娇"
  ],

  "Four Character Idioms 🀄": [
    "一心一意","三心二意","自言自语","五颜六色","千军万马","七上八下","十全十美","大惊小怪","画蛇添足","守株待兔",
    "亡羊补牢","掩耳盗铃","井底之蛙","狐假虎威","刻舟求剑","对牛弹琴","走马观花","半途而废","津津有味","兴高采烈",
    "自相矛盾","拔苗助长","杯弓蛇影","滥竽充数","叶公好龙","闻鸡起舞","卧冰求鲤","精卫填海","愚公移山","夸父逐日",
    "女娲补天","嫦娥奔月","后羿射日","开天辟地","天花乱坠","风和日丽","山清水秀","鸟语花香","花红柳绿","青山绿水",
    "欢天喜地","欢声笑语","神采奕奕","精神抖擞","心平气和","心满意足","心惊胆战","心慌意乱","心花怒放","心旷神怡",
    "目瞪口呆","目不转睛","耳聪目明","耳濡目染","口若悬河","滔滔不绝","津津乐道","侃侃而谈","能说会道","妙语连珠",
    "专心致志","全神贯注","聚精会神","废寝忘食","夜以继日","争分夺秒","勤学苦练","孜孜不倦","锲而不舍","持之以恒",
    "坚持不懈","百折不挠","勇往直前","奋勇向前","迎难而上","知难而进","临危不惧","舍生忘死","无所畏惧","大义凛然",
    "光明磊落","正大光明","诚实守信","助人为乐","乐于助人","团结合作","互相帮助","尊老爱幼","勤俭节约","艰苦奋斗",
    "繁花似锦","春暖花开","秋高气爽","白雪皑皑","冰天雪地","烈日炎炎","骄阳似火","电闪雷鸣","狂风暴雨","倾盆大雨"
  ],

  "Chinese Adjectives 📝": [
    "漂亮","可爱","聪明","勇敢","善良","热情","安静","活泼","努力","认真",
    "仔细","粗心","害羞","开朗","乐观","悲伤","紧张","兴奋","好奇","坚强",
    "温柔","友善","诚实","谦虚","自信","勇敢","勤劳","懒惰","聪明","机灵",
    "幽默","风趣","大方","小气","慷慨","耐心","急躁","细心","粗心","认真",
    "负责","可靠","积极","消极","乐观","悲观","冷静","激动","紧张","放松",
    "开心","快乐","幸福","难过","伤心","失望","满意","惊讶","害怕","担心",
    "生气","愤怒","温暖","寒冷","炎热","凉爽","潮湿","干燥","明亮","黑暗",
    "安静","吵闹","整洁","凌乱","干净","肮脏","漂亮","丑陋","巨大","微小",
    "高大","矮小","宽阔","狭窄","柔软","坚硬","光滑","粗糙","甜美","苦涩",
    "酸","辣","咸","新鲜","美味","香甜","温柔","坚强","勇敢","独立"
  ],

  "Chinese Actions 🏃": [
    "跑步","跳舞","唱歌","阅读","写作","画画","游泳","做饭","打扫","学习",
    "思考","讨论","观察","旅行","拍照","购物","爬山","骑自行车","弹钢琴","踢足球",
    "打篮球","打羽毛球","打网球","打乒乓球","踢足球","游泳","跑步","跳绳","滑冰","滑雪",
    "唱歌","跳舞","表演","演讲","朗读","写作","画画","涂色","剪纸","折纸",
    "做实验","做作业","复习功课","预习课文","背诵课文","查资料","上网","看电视","看电影","听音乐",
    "聊天","谈话","提问","回答","解释","介绍","分享","帮助","合作","比赛",
    "旅行","参观","探索","发现","寻找","购买","出售","制作","修理","安装",
    "打开","关闭","拿起","放下","走路","奔跑","跳跃","爬行","飞行","驾驶",
    "骑马","划船","钓鱼","露营","摄影","录像","直播","阅读","写日记","做手工",
    "种花","种树","浇水","扫地","洗衣服","洗碗","整理房间","照顾宠物","喂动物","帮助别人"
  ],

  "Chinese Nature 🌸": [
    "高山","大海","河流","湖泊","森林","草原","沙漠","瀑布","火山","岛屿",
    "彩虹","阳光","月亮","星星","云朵","雷电","暴风雨","春风","秋叶","樱花",
    "桃花","荷花","梅花","菊花","牡丹","竹子","松树","柳树","枫树","椰子树",
    "大熊猫","蝴蝶","蜜蜂","鸟类","鱼儿","海豚","鲸鱼","海龟","螃蟹","贝壳",
    "珊瑚","海浪","海滩","沙滩","礁石","悬崖","山谷","峡谷","洞穴","草地",
    "田野","农田","湿地","沼泽","红树林","热带雨林","温带森林","高原","冰川","雪山",
    "冰雹","雪花","雨滴","露水","雾气","霜","冰块","泥土","沙子","石头",
    "鹅卵石","水晶","矿物","化石","蘑菇","苔藓","藤蔓","树叶","树枝","树根",
    "种子","花粉","果实","荆棘","仙人掌","竹林","荷塘","湖心岛","海岸线","海湾",
    "泉水","温泉","瀑布群","溪流","小河","地下河","自然保护区","国家公园","森林公园","生态环境"
  ],

  "Chinese Transport 🚆": [
    "公共汽车","地铁","高铁","火车站","飞机场","出租车","自行车","摩托车","电动车","渡轮",
    "轮船","飞机","直升机","交通灯","人行道","十字路口","高速公路","停车场","车站","地下通道",
    "公交车","校车","旅游巴士","长途汽车","出租车","网约车","共享单车","共享电动车","摩托车","电动滑板车",
    "自行车道","人行天桥","地下通道","交通枢纽","汽车站","火车站","地铁站","机场","码头","港口",
    "高速铁路","磁悬浮列车","动车组","城际列车","货运列车","客运列车","蒸汽火车","有轨电车","轻轨","单轨列车",
    "缆车","索道","观光车","三轮车","人力车","马车","牛车","拖拉机","卡车","货车",
    "救护车","消防车","警车","垃圾车","工程车","起重机","挖掘机","推土机","压路机","拖车",
    "船","帆船","游艇","渔船","货船","集装箱船","邮轮","潜水艇","快艇","独木舟",
    "皮划艇","冲浪板","热气球","滑翔机","私人飞机","客机","货机","火箭","宇宙飞船","无人机",
    "驾驶","乘车","乘船","乘飞机","骑自行车","骑摩托车","过马路","等公交车","搭地铁","换乘"
  ],

  "Chinese Family 👨‍👩‍👧": [
    "爸爸","妈妈","哥哥","姐姐","弟弟","妹妹","爷爷","奶奶","外公","外婆",
    "表哥","表姐","表弟","表妹","叔叔","阿姨","舅舅","舅妈","家庭成员","亲戚",
    "伯伯","伯母","姑姑","姑父","姨妈","姨父","堂哥","堂姐","堂弟","堂妹",
    "侄子","侄女","外甥","外甥女","孙子","孙女","曾祖父","曾祖母","曾外祖父","曾外祖母",
    "爸爸妈妈","兄弟姐妹","爷爷奶奶","外公外婆","大家庭","小家庭","核心家庭","家庭成员","亲人","家人",
    "父母","子女","孩子","婴儿","长辈","晚辈","成年人","儿童","青少年","老人",
    "夫妻","丈夫","妻子","父亲","母亲","儿子","女儿","哥哥姐姐","弟弟妹妹","兄弟",
    "姐妹","双胞胎","独生子女","继父","继母","继兄弟","继姐妹","养父","养母","养子",
    "养女","亲戚关系","家庭关系","家庭聚会","家庭旅行","家庭活动","家庭晚餐","家庭照片","家庭传统","家庭故事",
    "家庭责任","家庭成员之间的互相帮助","尊重长辈","照顾弟弟妹妹","陪伴家人","家庭生活","家庭文化","家庭教育","家庭价值观","亲情"
  ],

  "Chinese Festivals 🎉": [
    "春节","元宵节","清明节","端午节","七夕节","中秋节","重阳节","国庆节","圣诞节","万圣节",
    "新年","除夕","母亲节","父亲节","儿童节","教师节","劳动节","感恩节","情人节","泼水节",
    "春节联欢晚会","年夜饭","拜年","红包","压岁钱","春联","福字","年画","灯笼","鞭炮",
    "舞龙","舞狮","赏花灯","猜灯谜","元宵","汤圆","清明扫墓","祭祖","踏青","端午粽子",
    "赛龙舟","香囊","艾草","雄黄酒","七夕乞巧","牛郎织女","中秋赏月","月饼","嫦娥奔月","玉兔",
    "重阳登高","赏菊","敬老","国庆阅兵","国庆烟花","国庆假期","圣诞树","圣诞老人","圣诞礼物","圣诞卡片",
    "万圣节南瓜灯","万圣节服装","不给糖就捣蛋","新年倒数","新年愿望","新年烟花","生日派对","生日蛋糕","生日礼物","生日卡片",
    "母亲节礼物","父亲节礼物","教师节卡片","儿童节活动","劳动节假期","春节习俗","中秋习俗","端午习俗","传统节日","现代节日",
    "家庭聚会","节日庆祝","节日装饰","节日美食","节日礼物","节日活动","节日假期","节日气氛","传统习俗","民间节庆",
    "灯会","庙会","花灯","烟花","舞龙舞狮表演","传统节庆活动","节日祝福","节日问候","节日文化","节日传统"
  ],

  "Chinese Jobs 👨‍⚕️": [
    "医生","护士","老师","警察","消防员","厨师","飞行员","工程师","律师","科学家",
    "程序员","摄影师","记者","建筑师","设计师","演员","歌手","运动员","农民","企业家",
    "会计师","银行职员","经理","商人","企业家","机械师","电工","水管工","木匠","建筑工人",
    "司机","出租车司机","公交车司机","火车司机","空乘人员","空中交通管制员","船员","渔夫","兽医","药剂师",
    "外科医生","牙医","心理咨询师","辅导员","图书管理员","记者","作家","作者","编辑","翻译",
    "口译员","法官","检察官","外交官","士兵","侦探","保安","教练","裁判","运动员",
    "服装设计师","平面设计师","网页设计师","软件开发员","数据科学家","研究员","化学家","生物学家","物理学家","天文学家",
    "地质学家","室内设计师","电影导演","电影制片人","摄影师","音乐家","作曲家","舞蹈家","编舞","主持人",
    "花艺师","面包师","理发师","发型师","服务员","收银员","店员","房地产经纪人","导游","旅行顾问",
    "前台接待员","秘书","社会工作者","公园管理员","图书馆员","校长","班主任","校医","校工","研究员"
  ],

  "Chinese Technology 💻": [
    "人工智能","机器人","电脑程序","手机应用","网络安全","社交媒体","虚拟现实","无人机","自动驾驶","电子支付",
    "人脸识别","搜索引擎","电子游戏","智能手表","平板电脑","数据分析","云端储存","语音助手","数字货币","网络直播",
    "智能手机","笔记本电脑","台式电脑","电脑显示器","键盘","鼠标","打印机","扫描仪","投影仪","摄像机",
    "数码相机","耳机","扬声器","麦克风","充电器","移动电源","电池","路由器","调制解调器","服务器",
    "数据库","操作系统","应用程序","软件","硬件","网页","网站","浏览器","密码","用户名",
    "二维码","条形码","芯片","传感器","处理器","内存","硬盘","闪存","USB接口","蓝牙",
    "无线网络","卫星定位","全球定位系统","云计算","大数据","机器学习","深度学习","自动化","机器人技术","网络工程",
    "网络攻击","防火墙","数据加密","网络诈骗","个人资料保护","信息安全","数字隐私","网络平台","视频会议","即时通讯",
    "电子邮件","社交媒体平台","短视频","网络购物","网上银行","电子钱包","二维码支付","人脸支付","智能家居","智能音箱",
    "智能电视","智能眼镜","虚拟助手","3D打印","无人驾驶汽车","电动汽车","可穿戴设备","数字学习","在线课程","远程办公"
  ],

  "Chinese Descriptions 📝": [
    "美丽","漂亮","可爱","聪明","勇敢","善良","热情","安静","活泼","努力",
    "认真","仔细","粗心","害羞","开朗","乐观","悲伤","紧张","兴奋","好奇",
    "坚强","温柔","友善","诚实","谦虚","自信","勤劳","懒惰","机灵","幽默",
    "风趣","大方","小气","慷慨","耐心","急躁","负责","可靠","积极","消极",
    "冷静","激动","放松","开心","快乐","幸福","难过","伤心","失望","满意",
    "惊讶","害怕","担心","生气","愤怒","温暖","寒冷","炎热","凉爽","潮湿",
    "干燥","明亮","黑暗","安静","吵闹","整洁","凌乱","干净","肮脏","巨大",
    "微小","高大","矮小","宽阔","狭窄","柔软","坚硬","光滑","粗糙","甜美",
    "苦涩","酸","辣","咸","新鲜","美味","香甜","清爽","丰富","简单",
    "复杂","困难","容易","有趣","无聊","特别","普通","奇怪","神奇","独特"
  ]

};

window.TOPICS = TOPICS;
