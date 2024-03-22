function margini (vecchi_pixels, nuovi_pixels, larghezza_immagine, altezza_immagine) {
    for (let riga = 0; riga < altezza_immagine; riga++) {
        for (let colonna = 0; colonna < larghezza_immagine; colonna++) {
            pixel_alto_sinistra = prendiPixelAllaCoordinata(colonna - 1, riga - 1, vecchi_pixels, larghezza_immagine)
            pixel_alto_centro = prendiPixelAllaCoordinata(colonna, riga - 1, vecchi_pixels, larghezza_immagine)
            pixel_alto_destra = prendiPixelAllaCoordinata(colonna + 1, riga - 1, vecchi_pixels, larghezza_immagine)

            pixel_centro_sinistra = prendiPixelAllaCoordinata(colonna - 1, riga, vecchi_pixels, larghezza_immagine)
            pixel_centro_centro = prendiPixelAllaCoordinata(colonna, riga, vecchi_pixels, larghezza_immagine)
            pixel_centro_destra = prendiPixelAllaCoordinata(colonna + 1, riga, vecchi_pixels, larghezza_immagine)

            pixel_basso_sinistra = prendiPixelAllaCoordinata(colonna - 1, riga + 1, vecchi_pixels, larghezza_immagine)
            pixel_basso_centro = prendiPixelAllaCoordinata(colonna, riga + 1, vecchi_pixels, larghezza_immagine)
            pixel_basso_destra = prendiPixelAllaCoordinata(colonna + 1, riga + 1, vecchi_pixels, larghezza_immagine)

            const orizzontale = pixel_alto_sinistra[0] + pixel_alto_centro[0]*2 + pixel_alto_destra[0] - pixel_basso_sinistra[0] - pixel_basso_centro[0]*2 - pixel_basso_destra[0]
            const verticale = pixel_alto_sinistra[0] + pixel_centro_sinistra[0]*2 + pixel_basso_sinistra[0] - pixel_alto_destra[0] - pixel_centro_destra[0]*2 - pixel_basso_destra[0]
        
            const colore = Math.sqrt(orizzontale * orizzontale + verticale * verticale)

            nuovo_pixel = [colore, colore, colore, 255]

            salvaPixelAllaCoordinata(nuovo_pixel, colonna, riga, nuovi_pixels, larghezza_immagine)
        }
    }
}