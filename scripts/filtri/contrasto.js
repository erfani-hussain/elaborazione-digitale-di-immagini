function contrasto (vecchi_pixels, nuovi_pixels, larghezza_immagine, altezza_immagine) {
    for (let riga = 0; riga < altezza_immagine; riga++) {
        for (let colonna = 0; colonna < larghezza_immagine; colonna++) {
          pixel = prendiPixelAllaCoordinata(colonna, riga, vecchi_pixels, larghezza_immagine)
    
          rosso = pixel[0] + 20
          verde = pixel[1] + 20
          blu = pixel[2] + 20
          alpha = pixel[3]
    
          nuovo_pixel = [rosso, verde, blu, alpha]
    
          salvaPixelAllaCoordinata(nuovo_pixel, colonna, riga, nuovi_pixels, larghezza_immagine)
        }
    }
}