/************
 * **********
 * BITMAP START
 * **********
 ************/

const bw_init = 10

const bw_w = document.querySelector("#bw_w")
const bw_h = document.querySelector("#bw_h")

const bw_bitmap = document.querySelector("#bw_bitmap")

bw_w.addEventListener("change", (e) => {
    initBitmap()
})

bw_h.addEventListener("change", (e) => {
    initBitmap()
})

bw_h.value = bw_init
bw_w.value = bw_init

function initBitmap() {
    const width = bw_w.value
    const height = bw_h.value

    const bitmap = document.createElement('div');
    let grid = ""

    for(let i = 0; i < height; i++) {
        grid += '<div class="bitmap_row">'

        for(let j = 0; j < width; j++) {
            grid += '<div class="bitmap_column"></div>'
        }

        grid += "</div>"
    }

    
    bw_bitmap.innerHTML = grid;

    document.querySelectorAll(".bitmap_column").forEach((el) => {
        el.addEventListener("click", (e) => {
            e.target.classList.toggle("black")
        })
    })

}

initBitmap()


/************
 * **********
 * Grayscale Picker
 * **********
 ************/

const grayscale_init = 0

const grayscale_picker = document.querySelector("#grayscale_picker")
const grayscale_color = document.querySelector("#grayscale_color")

grayscale_picker.addEventListener("change", (e) => {
    initGrayscalePicker()
})

grayscale_picker.value = grayscale_init
initGrayscalePicker()

function initGrayscalePicker() {
    const gray = grayscale_picker.value;
    grayscale_color.style.backgroundColor = `rgb(${gray},${gray},${gray})`
}


/************
 * **********
 * RGB Picker
 * **********
 ************/

const rgb_init = 0

const rgb_r_picker = document.querySelector("#rgb_r_picker")
const rgb_g_picker = document.querySelector("#rgb_g_picker")
const rgb_b_picker = document.querySelector("#rgb_b_picker")
const rgb_color = document.querySelector("#rgb_color")

rgb_r_picker.addEventListener("change", (e) => {
    initRGBPicker()
})

rgb_g_picker.addEventListener("change", (e) => {
    initRGBPicker()
})

rgb_b_picker.addEventListener("change", (e) => {
    initRGBPicker()
})

rgb_r_picker.value = rgb_init
rgb_g_picker.value = rgb_init
rgb_b_picker.value = rgb_init
initRGBPicker()

function initRGBPicker() {
    const red = rgb_r_picker.value;
    const green = rgb_g_picker.value;
    const blue = rgb_b_picker.value;
    rgb_color.style.backgroundColor = `rgb(${red},${green},${blue})`
}

/************
 * **********
 * RGBA Picker
 * **********
 ************/

const rgba_init = 0
const alpha_init = 1

const rgba_r_picker = document.querySelector("#rgba_r_picker")
const rgba_g_picker = document.querySelector("#rgba_g_picker")
const rgba_b_picker = document.querySelector("#rgba_b_picker")
const rgba_a_picker = document.querySelector("#rgba_a_picker")
const rgba_color = document.querySelector("#rgba_color")

rgba_r_picker.addEventListener("change", (e) => {
    initRGBAPicker()
})

rgba_g_picker.addEventListener("change", (e) => {
    initRGBAPicker()
})

rgba_b_picker.addEventListener("change", (e) => {
    initRGBAPicker()
})

rgba_a_picker.addEventListener("change", (e) => {
    initRGBAPicker()
})

rgba_r_picker.value = rgba_init
rgba_g_picker.value = rgba_init
rgba_b_picker.value = rgba_init
rgba_a_picker.value = alpha_init
initRGBAPicker()

function initRGBAPicker() {
    const red = rgba_r_picker.value;
    const green = rgba_g_picker.value;
    const blue = rgba_b_picker.value;
    const alpha = rgba_a_picker.value;
    rgba_color.style.backgroundColor = `rgba(${red},${green},${blue},${alpha})`
}