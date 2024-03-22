function negativo (vecchi_pixels, nuovi_pixels, larghezza_immagine, altezza_immagine) {
    for (let riga = 0; riga < altezza_immagine; riga++) {
        for (let colonna = 0; colonna < larghezza_immagine; colonna++) {
          pixel = prendiPixelAllaCoordinata(colonna, riga, vecchi_pixels, larghezza_immagine)
    
          rosso = 255 - pixel[0]
          verde = 255 - pixel[1]
          blu = 255 - pixel[2]
          alpha = pixel[3]
    
          nuovo_pixel = [rosso, verde, blu, alpha]
    
          salvaPixelAllaCoordinata(nuovo_pixel, colonna, riga, nuovi_pixels, larghezza_immagine)
        }
    }
}