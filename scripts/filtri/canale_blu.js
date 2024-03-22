function canale_blu (vecchi_pixels, nuovi_pixels, larghezza_immagine, altezza_immagine) {
    for (let riga = 0; riga < altezza_immagine; riga++) {
        for (let colonna = 0; colonna < larghezza_immagine; colonna++) {
          pixel = prendiPixelAllaCoordinata(colonna, riga, vecchi_pixels, larghezza_immagine)
    
          blu = pixel[2]
    
          nuovo_pixel = [0, 0, blu, 255]
    
          salvaPixelAllaCoordinata(nuovo_pixel, colonna, riga, nuovi_pixels, larghezza_immagine)
        }
    }
}