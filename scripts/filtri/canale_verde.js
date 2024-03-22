function canale_verde (vecchi_pixels, nuovi_pixels, larghezza_immagine, altezza_immagine) {
    for (let riga = 0; riga < altezza_immagine; riga++) {
        for (let colonna = 0; colonna < larghezza_immagine; colonna++) {
          pixel = prendiPixelAllaCoordinata(colonna, riga, vecchi_pixels, larghezza_immagine)
    
          verde = pixel[1]
    
          nuovo_pixel = [0, verde, 0, 255]
    
          salvaPixelAllaCoordinata(nuovo_pixel, colonna, riga, nuovi_pixels, larghezza_immagine)
        }
    }
}