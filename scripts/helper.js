const calcolaPosizioneConCoordinata = (colonna, riga, larghezza_immagine) => {
    const posizione = riga * (larghezza_immagine * 4) + colonna * 4;
    return posizione;
};

const prendiPixelAllaCoordinata = (colonna, riga, pixel_vecchi, larghezza_immagine) => {
    const posizione = calcolaPosizioneConCoordinata(colonna, riga, larghezza_immagine);

    return [pixel_vecchi[posizione], pixel_vecchi[posizione + 1], pixel_vecchi[posizione + 2], pixel_vecchi[posizione + 3]];
};

const salvaPixelAllaCoordinata = (pixel, colonna, riga, nuovi_pixel, larghezza_immagine) => {
    const posizione = calcolaPosizioneConCoordinata(colonna, riga, larghezza_immagine);

    nuovi_pixel[posizione] = pixel[0]
    nuovi_pixel[posizione + 1] = pixel[1]
    nuovi_pixel[posizione + 2] = pixel[2]
    nuovi_pixel[posizione + 3] = pixel[3]
};