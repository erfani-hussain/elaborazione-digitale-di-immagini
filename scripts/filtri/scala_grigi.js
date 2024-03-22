function scala_grigi (vecchi_pixels, nuovi_pixels, larghezza_immagine, altezza_immagine) {
    for (let riga = 0; riga < altezza_immagine; riga++) {
        for (let colonna = 0; colonna < larghezza_immagine; colonna++) {
          pixel = prendiPixelAllaCoordinata(colonna, riga, vecchi_pixels, larghezza_immagine)
    
          rosso = pixel[0]
          verde = pixel[1]
          blu = pixel[2]
          alpha = pixel[3]
    
          media = (rosso + verde + blu) / 3
    
          nuovo_pixel = [media, media, media, alpha]
    
          salvaPixelAllaCoordinata(nuovo_pixel, colonna, riga, nuovi_pixels, larghezza_immagine)
        }
    }
}