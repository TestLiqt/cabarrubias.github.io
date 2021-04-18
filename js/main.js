// Main JS File //


// For each .hoverable class, add a click event listener to play the sound. //
document.querySelectorAll('.hoverable').forEach(item => {
    item.addEventListener('click', event => {
        switch_task_type();
    })
});
document.querySelectorAll('._sub').forEach(item => {
    item.addEventListener('click', event => {
        switch_task_type();
    })
})

// Some basic functions //
function close_wc_msg() { document.getElementById("welcome_message").style.display="none"; var audio = new Audio('assets/audio/alt_bg.mp3'); audio.play(); }
function open_sidebar() { document.getElementById("navbar-2").style.width="250px"; }
function close_sidebar() { document.getElementById("navbar-2").style.width="0"; }
function open_win() { var win_opened_audio = new Audio('assets/audio/fx/open_win.mp3'); win_opened_audio.play(); }
function close_win() { var win_closed_audio = new Audio('assets/audio/fx/close_win.mp3'); win_closed_audio.play(); }
function switch_win_type() { var type_audio = new Audio('assets/audio/fx/switch_type.mp3'); type_audio.play(); }
function switch_task_type() { var task_audio = new Audio('assets/audio/fx/switch_task.mp3'); task_audio.play(); }
function switch_image(img) { document.getElementById("img_display").style.backgroundImage = `url(${img})`; open_win(); }

var lazy_table = document.getElementById("lazy_table");
var ascension_table = document.getElementById("ascension_usage");

// Basic Dictionary for the row datas. As far as it seems, only 3 max characters have atleast the same ascension material. 
// To save space, we only use max 3 rows.
var row_1_data = {}; var row_2_data = {}; var row_3_data = {};
row_1_data['char_icon'] = document.getElementById("row-1-char_icon"); row_1_data['char_name'] = document.getElementById("row-1-char_name"); row_1_data['char_rarity'] = document.getElementById("row-1-char_rarity");
row_2_data['char_icon'] = document.getElementById("row-2-char_icon"); row_2_data['char_name'] = document.getElementById("row-2-char_name"); row_2_data['char_rarity'] = document.getElementById("row-2-char_rarity");
row_3_data['char_icon'] = document.getElementById("row-3-char_icon"); row_3_data['char_name'] = document.getElementById("row-3-char_name"); row_3_data['char_rarity'] = document.getElementById("row-3-char_rarity");

// Dictionary for the item_description class for easy editing.
var item_description_data = {};
item_description_data['title'] = document.getElementById("item_title_name"); item_description_data['d1'] = document.getElementById("item_description_1"); item_description_data['d2'] = document.getElementById("item_description_2");

// char_icon = character icon png
// char_name = character name
// char_rarity = rarity image (5 star or 4 star)
// char_level = basically row level
function add_character(char_icon, char_name, char_rarity, char_level) {
    if (char_level == 1) {
        row_1_data['char_icon'].setAttribute("src", char_icon);
        row_1_data['char_name'].innerHTML = char_name;
        row_1_data['char_rarity'].setAttribute("src", char_rarity);
    } else if (char_level == 2) {
        row_2_data['char_icon'].setAttribute("src", char_icon);
        row_2_data['char_name'].innerHTML = char_name;
        row_2_data['char_rarity'].setAttribute("src", char_rarity);
    } else if (char_level == 3) {
        row_3_data['char_icon'].setAttribute("src", char_icon);
        row_3_data['char_name'].innerHTML = char_name;
        row_3_data['char_rarity'].setAttribute("src", char_rarity);
    }
}

// Delete a character row
// char_level = row level
function remove_character(char_level) {
    if (char_level == 1) {
        row_1_data['char_icon'].setAttribute("src", '');
        row_1_data['char_name'].innerHTML = '';
        row_1_data['char_rarity'].setAttribute("src", '');
    } else if (char_level == 2) {
        row_2_data['char_icon'].setAttribute("src", '');
        row_2_data['char_name'].innerHTML = '';
        row_2_data['char_rarity'].setAttribute("src", '');
    } else if (char_level == 3) {
        row_3_data['char_icon'].setAttribute("src", '');
        row_3_data['char_name'].innerHTML = '';
        row_3_data['char_rarity'].setAttribute("src", '');
    }
}

// variables
let juyeun_chili_title = "Juyeun Chili";
let juyeun_chili_desc_1 = "A spicy plant native to Liyue. Merely smelling it makes one hot and thirsty. Despite 'Jueyun' being a part of its name, it does not usually grow in Jueyun Karst. The name seems to originate from its spiciness, which makes people want to run to the highest peaks of Jueyun and cool their mouths with chilly air.";
let juyeun_chili_desc_2 = "Jueyun Chili can be found exclusively within the Liyue Region. Wanmin Restaurant carries 5 Jueyun Chili in stock, refreshing at daily reset every 2 days. There is a quest-exclusive variant of this ingredient, Fresh Jueyun Chili. Following one of Manie's dialogue branches for the first time gives 5 Jueyun Chilis.";

let cor_lapis_title = "Cor Lapis";
let cor_lapis_desc_1 = "Cor Lapis is found within the Liyue region, inside caves, mines, and near mountainous terrain. A precious crystal of condensed pure Geo element that usually grows along with other minerals. It's also commonly called 'Cor Petrae.'";
let cor_lapis_desc_2 = "Cor Lapis is also sold by Changshun. The Commission quest Diamond in the Rough... has a chance of rewarding either a Cor Lapis or a Noctilucous Jade for picking a winner. Cor Lapis is abundant all across Liyue, especially at the base of its mountains and cliffs. Pinpoint its exact locations in the interactive Genshin Impact map!";

let glaze_lily_title = "Glaze Lily";
let glaze_lily_desc_1 = "An extremely ancient flower that was said to be commonly seen in Liyue. It transforms the memories of the land into its fragrance during florescence. Glaze Lilies can be found exclusively within the Liyue Region. Upon choosing a certain dialogue path, Madame Ping gives 5 Glaze Lillies once. Glaze Lilies (up to 3 every three days) can also be purchased from Ms. Bai in Qingce Village for an exorbitant amount of 50,000 Mora each. Respawn rate 48 hours based on user testing and research.";
let glaze_lily_desc_2 = "An extremely ancient flower, said to have once been a common sight in Liyue. It transforms the memories of the land into its fragrance during florescence. Legend has it that the flower will open at the sound of pure, beautiful music, and that there was once one who loved this flower more than any other. Now, however, the sight of a Glaze Lily in full bloom out in the wild is a rare one indeed.";

let jade_title = "Noctilucous Jade";
let jade_desc_1 = "A rare mineral that glimmers in the dark. It's said to be a mutated gemstone condensed from the flourishing elements of the world. Perhaps the easiest of the two methods is to simply purchase the Jade from Shitou in the Liyue Harbor. This NPC can be found in the same area as the restaurant and blacksmith, and indeed they have Noctilucous Jade for sale at a rate of 1,000 Mora per stone.";
let jade_desc_2 = "The Noctilucous Jade doesn't have a lot of locations where it is found. Pinpoint its exact locations in the interactive Genshin Impact map!";

let qingxin_title = "Qingxin";
let qingxin_desc_1 = "A translucent white flower that only grows on the highest stone peaks. It eschews the warmth and moisture of the plains to gaze out afar from the solitary mountaintops.";
let qingxin_desc_2 = "Qingxin (Chinese: 清心) can be found exclusively within the Liyue Region. Qingxin frequently spawn on elevated areas of Liyue, most notably on the top of mountains.";

let silk_flower_title = "Silk Flower";
let silk_flower_desc_1 = "A crimson flower that blooms like the rainbow clouds in Liyue. It can be made into silky-smooth fabric. Liyue's Feiyun Commerce Guild is a giant in silk and textile manufacturing. Legend has it that Feiyun Commerce Guild has a secret Silk Flower nursery somewhere in the mainland. Nobody in the industry can rival their yield and texture.";
let silk_flower_desc_2 = "Silk flowers are found within bright red bushes at Yujing Terrace within Liyue Harbor and also near the Wangshu Inn. Ms. Bai and Verr Goldet also sell silk flowers. Both have 5 in stock for 1,000 Mora each, refreshing every two days at 4:00 AM server time";

let starconch_title = "Starconch";
let starconch_desc_1 = "Empty seashells brought ashore by the tides. Hold it close to your ear, and hear the longing calls of the sea.";
let starconch_desc_2 = "Starconch can be found mostly on beaches of Liyue, from Yaoguang Shoal to Guyun Stone Forest beaches. They can also be found east of the Teleport Waypoint in the Sea of Clouds. Some Starconch can also be found on the frigid coastlines of Dragonspine closer to Liyue. As of version 1.4 it may also be bought from Bolai. Starconches are also sold by Bolai.";

let violetgrass_title = "Violetgrass";
let violetgrass_desc_1 = "A small flower with strong vitality. It was said its downward-blooming flower keeps its fragrance from dissipating.";
let violetgrass_desc_2 = "Violetgrass is found within the Liyue region, usually hanging from the sides of mountains. Verr Goldet at Wangshu Inn and Herbalist Gui at Bubu Pharmacy each carry 5 Violetgrass in stock, which refreshes every 2 days at 4:00 AM server time. It costs 1,000 Mora each at both locations.";

function change_item(what_item) {
    if (what_item == 'juyeun_chili') {
        item_description_data['title'].innerHTML = juyeun_chili_title;
        item_description_data['d1'].innerHTML = juyeun_chili_desc_1;
        item_description_data['d2'].innerHTML = juyeun_chili_desc_2;
    } else if (what_item == 'cor_lapis') {
        item_description_data['title'].innerHTML = cor_lapis_title;
        item_description_data['d1'].innerHTML = cor_lapis_desc_1;
        item_description_data['d2'].innerHTML = cor_lapis_desc_2;
    } else if (what_item == 'glaze_lily') {
        item_description_data['title'].innerHTML = glaze_lily_title;
        item_description_data['d1'].innerHTML = glaze_lily_desc_1;
        item_description_data['d2'].innerHTML = glaze_lily_desc_2;
    } else if (what_item == 'jade') {
        item_description_data['title'].innerHTML = jade_title;
        item_description_data['d1'].innerHTML = jade_desc_1;
        item_description_data['d2'].innerHTML = jade_desc_2; 
    } else if (what_item == 'qingxin') {
        item_description_data['title'].innerHTML = qingxin_title;
        item_description_data['d1'].innerHTML = qingxin_desc_1;
        item_description_data['d2'].innerHTML = qingxin_desc_2; 
    } else if (what_item == 'silk_flower') {
        item_description_data['title'].innerHTML = silk_flower_title;
        item_description_data['d1'].innerHTML = silk_flower_desc_1;
        item_description_data['d2'].innerHTML = silk_flower_desc_2; 
    } else if (what_item == 'starconch') {
        item_description_data['title'].innerHTML = starconch_title;
        item_description_data['d1'].innerHTML = starconch_desc_1;
        item_description_data['d2'].innerHTML = starconch_desc_2; 
    } else if (what_item == 'starconch') {
        item_description_data['title'].innerHTML = starconch_title;
        item_description_data['d1'].innerHTML = starconch_desc_1;
        item_description_data['d2'].innerHTML = starconch_desc_2; 
    } else if (what_item == 'violetgrass') {
        item_description_data['title'].innerHTML = violetgrass_title;
        item_description_data['d1'].innerHTML = violetgrass_desc_1;
        item_description_data['d2'].innerHTML = violetgrass_desc_2; 
    } else {
        console.log("error: parameter undefined.");
    }
}

