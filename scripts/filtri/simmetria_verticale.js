function simmetria_verticale (vecchi_pixels, nuovi_pixels, larghezza_immagine, altezza_immagine) {
    for (let riga = 0; riga < altezza_immagine; riga++) {
        for (let colonna = 0; colonna < larghezza_immagine; colonna++) {
          pixel = prendiPixelAllaCoordinata(colonna, altezza_immagine - riga, vecchi_pixels, larghezza_immagine)
    
          salvaPixelAllaCoordinata(pixel, colonna, riga, nuovi_pixels, larghezza_immagine)
        }
    }
}