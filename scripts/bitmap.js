const larghezza = 2
const altezza = 5

const valori_pixels = new Uint8ClampedArray(larghezza * altezza * 4)

// Primo Pixel
valori_pixels[0] = 255 // Rosso
valori_pixels[1] = 0 // Verde
valori_pixels[2] = 0 // Blu
valori_pixels[3] = 255 // Alpha

// Secondo Pixel
valori_pixels[4] = 0
valori_pixels[5] = 0
valori_pixels[6] = 0
valori_pixels[7] = 255

valori_pixels[8] = 0
valori_pixels[9] = 0
valori_pixels[10] = 0
valori_pixels[11] = 255

valori_pixels[12] = 0
valori_pixels[13] = 0
valori_pixels[14] = 0
valori_pixels[15] = 255

valori_pixels[16] = 0
valori_pixels[17] = 0
valori_pixels[18] = 0
valori_pixels[19] = 255

valori_pixels[20] = 0
valori_pixels[21] = 0
valori_pixels[22] = 0
valori_pixels[23] = 255

valori_pixels[24] = 0
valori_pixels[25] = 0
valori_pixels[26] = 0
valori_pixels[27] = 255

valori_pixels[28] = 0
valori_pixels[29] = 0
valori_pixels[30] = 0
valori_pixels[31] = 255

valori_pixels[32] = 0
valori_pixels[33] = 0
valori_pixels[34] = 0
valori_pixels[35] = 255

valori_pixels[36] = 0
valori_pixels[37] = 0
valori_pixels[38] = 0
valori_pixels[39] = 255

/*********
 *  Non toccare il codice qui sotto
 */

const canvas = document.querySelector('#canvasBitmap')
const ctx = canvas.getContext('2d');

canvas.width = larghezza;
canvas.height = altezza;

const pixels = ctx.createImageData(larghezza, altezza);

pixels.data.set(valori_pixels);

ctx.putImageData(pixels, 0, 0);