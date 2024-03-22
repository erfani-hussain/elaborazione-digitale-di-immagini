document.getElementById('inputImage').onchange = function(e) {
  const img = new Image();
  img.onload = drawCanvas;
  img.onerror = failed;
  img.src = URL.createObjectURL(this.files[0]);
}


function drawCanvas() {
  const canvas = document.getElementById('canvasImage');
  canvas.width = this.width;
  canvas.height = this.height;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(this, 0,0);

  const canvasFilter = document.getElementById('canvasFilter');
  canvasFilter.width = this.width;
  canvasFilter.height = this.height;
  const ctxFilter = canvasFilter.getContext('2d');
  ctxFilter.drawImage(this, 0,0);
}


function failed() {
  console.error("The provided file couldn't be loaded as an Image media");
}

function filtro(nome_filtro) {
  if (nome_filtro == "ripristina") {
    const canvas = document.querySelector('#canvasImage')
    const context = canvas.getContext("2d");
    const larghezza_immagine = canvas.width;
    const altezza_immagine =  canvas.height;
    
    const vecchi_dati = context.getImageData(0, 0, larghezza_immagine, altezza_immagine);

    const drawCanvas = document.querySelector('#canvasFilter')
    drawCanvas.width = larghezza_immagine
    drawCanvas.height = altezza_immagine
    const drawContext = drawCanvas.getContext("2d");
    drawContext.putImageData(vecchi_dati, 0, 0);

    return;
  }

  const canvas = document.querySelector('#canvasFilter')
  const context = canvas.getContext("2d");

  const larghezza_immagine = canvas.width;
  const altezza_immagine =  canvas.height;


  const vecchi_dati = context.getImageData(0, 0, larghezza_immagine, altezza_immagine);
  const vecchi_pixels = vecchi_dati.data

  const nuovi_dati = context.createImageData(larghezza_immagine, altezza_immagine);
  let nuovi_pixels = nuovi_dati.data

  switch(nome_filtro) {
    case "grayscale":
      scala_grigi(vecchi_pixels, nuovi_pixels, larghezza_immagine, altezza_immagine)
      break;
    case "canale_rosso":
      canale_rosso(vecchi_pixels, nuovi_pixels, larghezza_immagine, altezza_immagine)
      break;
    case "canale_verde":
      canale_verde(vecchi_pixels, nuovi_pixels, larghezza_immagine, altezza_immagine)
      break;
    case "canale_blu":
      canale_blu(vecchi_pixels, nuovi_pixels, larghezza_immagine, altezza_immagine)
      break;
    case "negativo":
      negativo(vecchi_pixels, nuovi_pixels, larghezza_immagine, altezza_immagine)
      break;
    case "contrasto":
      contrasto(vecchi_pixels, nuovi_pixels, larghezza_immagine, altezza_immagine)
      break;
    case "simmetria_orizzontale":
      simmetria_orizzontale(vecchi_pixels, nuovi_pixels, larghezza_immagine, altezza_immagine)
      break;
    case "simmetria_verticale":
      simmetria_verticale(vecchi_pixels, nuovi_pixels, larghezza_immagine, altezza_immagine)
      break;    
    case "simmetria_diagonale":
      simmetria_diagonale(vecchi_pixels, nuovi_pixels, larghezza_immagine, altezza_immagine)
      break;
    case "sharpen":
      sharpen(vecchi_pixels, nuovi_pixels, larghezza_immagine, altezza_immagine)
      break;
    case "blur":
      blur(vecchi_pixels, nuovi_pixels, larghezza_immagine, altezza_immagine)
      break;
    case "margini_orizzontali":
      margini_orizzontali(vecchi_pixels, nuovi_pixels, larghezza_immagine, altezza_immagine)
      break;
    case "margini_verticali":
      margini_verticali(vecchi_pixels, nuovi_pixels, larghezza_immagine, altezza_immagine)
      break;
    case "margini":
      margini(vecchi_pixels, nuovi_pixels, larghezza_immagine, altezza_immagine)
      break;
    case "mio_filtro_1":
      mio_filtro_1(vecchi_pixels, nuovi_pixels, larghezza_immagine, altezza_immagine)
      break;
    case "mio_filtro_2":
      mio_filtro_2(vecchi_pixels, nuovi_pixels, larghezza_immagine, altezza_immagine)
      break;
    case "mio_filtro_3":
      mio_filtro_3(vecchi_pixels, nuovi_pixels, larghezza_immagine, altezza_immagine)
      break;
    case "mio_filtro_4":
      mio_filtro_4(vecchi_pixels, nuovi_pixels, larghezza_immagine, altezza_immagine)
      break;
    default:
      break;
  }

  const drawCanvas = document.querySelector('#canvasFilter')
  drawCanvas.width = larghezza_immagine
  drawCanvas.height = altezza_immagine
  const drawContext = drawCanvas.getContext("2d");
  drawContext.putImageData(nuovi_dati, 0, 0);
}