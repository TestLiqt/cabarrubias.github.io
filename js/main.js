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

var row_1_data = {}; var row_2_data = {}; var row_3_data = {};
row_1_data['char_icon'] = document.getElementById("row-1-char_icon"); row_1_data['char_name'] = document.getElementById("row-1-char_name"); row_1_data['char_rarity'] = document.getElementById("row-1-char_rarity");
row_2_data['char_icon'] = document.getElementById("row-2-char_icon"); row_2_data['char_name'] = document.getElementById("row-2-char_name"); row_2_data['char_rarity'] = document.getElementById("row-2-char_rarity");
row_3_data['char_icon'] = document.getElementById("row-3-char_icon"); row_3_data['char_name'] = document.getElementById("row-3-char_name"); row_3_data['char_rarity'] = document.getElementById("row-3-char_rarity");

var item_description_data = {};
item_description_data['title'] = document.getElementById("item_title_name"); item_description_data['d1'] = document.getElementById("item_description_1"); item_description_data['d2'] = document.getElementById("item_description_2");

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

//vars 
let juyeun_chili_title = "Juyeun Chili";
let juyeun_chili_desc_1 = "A spicy plant native to Liyue. Merely smelling it makes one hot and thirsty. Despite 'Jueyun' being a part of its name, it does not usually grow in Jueyun Karst. The name seems to originate from its spiciness, which makes people want to run to the highest peaks of Jueyun and cool their mouths with chilly air.";
let juyeun_chili_desc_2 = "Jueyun Chili can be found exclusively within the Liyue Region. Wanmin Restaurant carries 5 Jueyun Chili in stock, refreshing at daily reset every 2 days. There is a quest-exclusive variant of this ingredient, Fresh Jueyun Chili. Following one of Manie's dialogue branches for the first time gives 5 Jueyun Chilis.";

let cor_lapis_title = "Cor Lapis";
let cor_lapis_desc_1 = "Cor Lapis is found within the Liyue region, inside caves, mines, and near mountainous terrain. A precious crystal of condensed pure Geo element that usually grows along with other minerals. It's also commonly called 'Cor Petrae.'";
let cor_lapis_desc_2 = "Cor Lapis is also sold by Changshun. The Commission quest Diamond in the Rough... has a chance of rewarding either a Cor Lapis or a Noctilucous Jade for picking a winner. Cor Lapis is abundant all across Liyue, especially at the base of its mountains and cliffs. Pinpoint its exact locations in the interactive Genshin Impact map!";

function change_item(what_item) {
    if (what_item == 'juyeun_chili') {
        item_description_data['title'].innerHTML = juyeun_chili_title;
        item_description_data['d1'].innerHTML = juyeun_chili_desc_1;
        item_description_data['d2'].innerHTML = juyeun_chili_desc_2;
    } if (what_item == 'cor_lapis') {
        item_description_data['title'].innerHTML = cor_lapis_title;
        item_description_data['d1'].innerHTML = cor_lapis_desc_1;
        item_description_data['d2'].innerHTML = cor_lapis_desc_2;
    }
}

