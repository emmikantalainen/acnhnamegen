var results = document.getElementById('gen');  
var comboNumber = document.getElementById('combos');
var prefix = ["Os", "By", "Al", "Wy", "Ol", "Win", "Wyn", "End", "Dun", "Sun", "Sky", "Sea", "Elm", "New", "Red", "Far", "Way", "Fae", "Bow", "Doe", "Dew", "Ivy", "Fen", "Fin", "Fir", "May", "Tea", "Ash", "Oak", "Yew", "Mor", "Fal", "Hay", "Fig", "Log", "Odd", "Ray", "Fog", "Gem", "Joy", "Rye", "Dry", "Hot", "Bee", "Oar", "Ore", "Sow", "Ply", "Gin", "Tin", "Chat", "Wim", "Mid", "Cob", "Sol", "Alp", "Air", "Airy", "Lune", "Luna", "Pine", "Bell", "Fall", "Star", "Moon", "Tree", "Wych", "Dove", "Swan", "Gold", "Blue", "Grey", "Cyan", "Azur", "Teal", "Clay", "Edge", "Flip", "Bark", "Birk", "Dark", "Grim", "Dawn", "Dusk", "Noon", "Deep", "Ruby", "Fawn", "Fern", "Toad", "Myrth", "Deer", "Colt", "Stag", "Fire", "Cold", "Malt", "Fair", "Fine", "Rich", "Idyl", "Song", "Hymn", "Snow", "Flag", "Over", "East", "West", "Ever", "Iris", "Rose", "Lily", "Moss", "Wisp", "Flor", "Bare", "Palm", "Sand", "Surf", "Dust", "Silk", "Lush", "Lazy", "Lull", "Calm", "Mild", "Park", "Lost", "Pond", "Plum", "Lark", "Fowl", "Wind", "Wend", "Rain", "Waft", "Leaf", "Vine", "Damp", "Morn", "Hook", "Cork", "York", "Wine", "Lace", "Moth", "Knot", "Quil", "Glow", "Sage", "Twin", "Char", "Kite", "Rook", "King", "Page", "Soot", "Drip", "Loam", "Seed", "Glad", "High", "Tall", "Long", "Gust", "Mint", "Milk", "Lyre", "Mirk", "Murk", "Muse", "Near", "Open", "True", "Twee", "Bent", "Rust", "Roam", "Water", "North", "Nord", "South", "Under", "Storm", "Green", "White", "Lilac", "Thorn", "Maple", "Daisy", "Night", "Light", "Glass", "Clear", "Cloud", "Dream", "Sugar", "Sweet", "Frost", "Swift", "Briar", "Holly", "Weed", "Wilt", "Free", "Crow", "Yule", "Clove", "Tilt", "Wing", "Brick", "Hedge", "Cliff", "Shell", "Stone", "Stony", "Berry", "Amble", "Fairy", "Faery", "Fable", "Petal", "Honey", "Ochre", "Knoll", "Elder", "Alder", "Hazel", "Resin", "Roset", "Tulip", "Sunny", "Grass", "Hilly", "Lofty", "Loft", "Leafy", "Leaf", "Apple", "Acorn", "Lemon", "Olive", "Thyme", "Lichen", "Sable", "Scull", "Nymph", "Dryad", "Siren", "Witch", "Relic", "Rhyme", "Brine", "Briny", "Spear", "Lance", "Torch", "Angel", "Mercy", "Merry", "Peace", "Quiet", "Calm", "Smoke", "Mochi", "Matcha", "Mocha", "Spice", "Straw", "Birch", "Cedar", "Finch", "Amber", "Umber", "Ember", "Ashen", "Oaken", "Aspen", "Olden", "Amity", "Bliss", "Faith", "Bloom", "Whim", "Whisk", "Fresh", "Sleek", "Blush", "Conch", "Coral", "Peach", "Coble", "Gable", "Plank", "Plant", "Poppy", "Porch", "Stray", "Middle", "Mid", "Home", "Hearth", "Skip", "Sheer", "Aw", "Awe", "Silent", "Dead", "Weasel", "Fox", "Chirp", "Tal", "Winter", "Spring", "Summer", "River", "Wits", "Saint", "Mount", "Odd", "Tri", "Wheat", "Gentle", "Small", "Smalls", "Peat", "Grand", "Wild", "Will", "Arl", "Scarlet", "Yore", "Solemn", "Serene", "Seren", "Satin", "Velour", "Velvet", "Chiffon", "Hale", "Seer", "Neat", "Crimson", "Chime", "Chant", "Sail", "Flow", "Sooth", "Aurora", "Aura", "Boreal", "Pelagi", "Pelago", "Barrow", "Tranquil", "Mil", "Sour", "Glee", "Mirth", "Drift", "Deer", "Bear", "Hare" ]; 
var suffix = ["forest", "woods", "meadow", "harbor", "garden", "bridge", "cester", "caster", "stream", "street", "hollow", "coombe", "bourne", "bourn", "boro", "coomb", "combe", "holm", "derby", "river", "berth", "marsh", "march", "berry", "glade", "shade", "haven", "brook", "stead", "hearth", "trail", "track", "trek", "cross", "ditch", "court", "castle", "tower", "fence", "perch", "roost", "lodge", "beach", "shine", "coast", "strand", "ferry", "arbor", "bloom", "cliff", "slope", "trod", "climb", "plain", "field", "henge", "hedge", "grove", "bough", "shore", "shire", "brush", "grave", "graves", "shard", "shrub", "swamp", "stock", "stoke", "press", "stow", "send", "thon", "ton", "forge", "gorge", "forth", "ford", "basin", "bound", "world", "realm", "dwell", "vista", "vast", "flood", "bluff", "mouth", "mound", "sound", "sounds", "fleet", "swell", "creek", "burst", "hurst", "wurst", "wyrst", "drift", "reach", "cover", "coven", "cove", "abbey", "worth", "spire", "crypt", "crest", "knoll", "ranch", "range", "ridge", "house", "guard", "polis", "burg", "berg", "burgh", "bourg", "ville", "villa", "vil", " City", "city", " Town", "town", "bury", "scot", "home", "hope", "hope", "wall", "well", "fell", "fall", "fells", "down", "lawn", "view", "look", "road", "lane", "drive", "wear", "loop", "vane", "gate", "pass", "park", "wood", "bark", "band", "pine", "leaf", "root", "roof", "keep", "peak", "hill", " Hill", "glen", "dale", "dell", "vale", "veil", "rift", "rise", "well", "hike", "tour", "hold", "mond", "york", "sham", "head", "bria", "gulf", "isle", "loch", "lock", "loth", "lake", "mere", "pour", "pond", "drop", "point", "gully", "wash", "bank", "cape", "crag", "knot", "nash", "rule", "gard", "garde", "grow", "acre", "cave", "mine", "ruin", "tomb", "rite", "pool", "tide", "flow", "bask", "turn", "vern", "vyrn", "path", "ford", "fort", "camp", "port", "fold", "weld", "folk", "nook", "nock", "wich", "wick", "nest", "mill", "moor", "more", "gain", "mont", "bend", "bent", "bach", "shaw", "shot", "sted", "star", "ling", "ring", "ing", "frit", "fret", "nell", "holt", "rock", "shed", "mark", "edge", "deep", "barn", "beam", "glow", "bell", "call", "wind", "with", "wyth", "pick", "loft", "lair", "post", "hive", "hide", "hyde", "shee", "weed", "ward", "bray", "brey", "tale", "tart", "over", "past", "hunt", "lade", "yate", "yale", "wort", "maid", "void", "pyre", "gast", "haze", "maze", "gaze", "mile", "fast", "side", "ride", "wide", "sail", "reef", "tune", "wisp", "wade", "walk", "trot", "yard", "ton", "don", "tin", "ten", "sea", "bay", "del", "inn", "row", "way", "top", "wyn", "wig", "lia", "ley", "lee", "ray", "set", "bel", "cup", "den", "dun", "fen", "fin", "not", "mor", "nor", "nord", "north", "west", "east", "end", "est", "ham", "min", "ken", "kin", "net", "hub", "saw", "son", "sey", "say", "yew", "hue", "web", "pit", "ash", "fir", "ark", "bed", "bow", "urn", "eye", "eve", "let", "ing", "ith", "thy", "fly", "try", "ney", "fax", "gem", "tor", "cot", "mow", "dal", "low", "lon", "sow", "sor", "ril", "rel", "by", "ry", "is", "on", "en", "sby", "scall", "song", "sflight", "flight", "ia", "stria", "estia", "stia", "ster", "ity", "brand", "oat", "er", "run", "rim", "vibe", "feel", "sburg", "sbury", "worth", "sworth", "square", "circle", "wald", "weald", "row", "muth", "aan", "bog", "arc", "arch", "ring", "seal", "sight", "see", "choir", "heir", "nie", "fie", "milie", "chime", "een", "en", "ly", "erly", "eau", "lith", "cent" ];

function generate() { var combine = prefix[Math.floor(Math.random() * prefix.length)] + suffix[Math.floor(Math.random() * suffix.length)];
                     var combineLength = combine.length;
results.innerHTML = combine;
if (combineLength > 10) {
generate(); }
}

comboNumber.innerHTML = "Need a little inspiration to find the island name for you? Fret not, our generator here draws from a pool of " + prefix.length * suffix.length + " possible names to help you find the perfect one. <br><br> Feel free to use it as much as you need!";

