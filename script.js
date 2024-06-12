const reqOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '3d18fadb96mshfdcba924e6d39f5p136872jsn47e833abda1a',
    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
  }
}



document.addEventListener("DOMContentLoaded", async () => {
  const listMusics = document.getElementById('musicsList')

  const responseHome = await fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=homeEdwardSharpe', reqOptions);
  const auxHome = await responseHome.json();
  const home = auxHome.data

  const resDancingQueen = await fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=dancingqueen', reqOptions);
  const auxDancingqueen = await resDancingQueen.json();
  const dancingqueen = auxDancingqueen.data

  const responseManiac = await fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=maniacvivz', reqOptions);
  const auxmaniac = await responseManiac.json();
  const maniac = auxmaniac.data

  const responseInTheEnd = await fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=intheend', reqOptions);
  const auxInTheEnd = await responseInTheEnd.json();
  const inTheEnd = auxInTheEnd.data

  console.log(home);
  let aux = ''
  aux += `
  <div class="polaroid">
        <p>${home[0].title}</p>
        <audio src="${home[0].preview}" controls><p>seu navegador não suporta o elemento</p></audio>
        <p>Sempre penso em você quando essa ouço essa musica</p>
      </div>
  `
  aux += `
  <div class="polaroid">
        <p>${dancingqueen[0].title}</p>
        <audio src="${dancingqueen[0].preview}" controls><p>seu navegador não suporta o elemento</p></audio>
        <p>Você simplesmente fez eu me apaixonar por um musical</p>
      </div>
  `
  aux += `
  <div class="polaroid">
        <p>${maniac[0].title}</p>
        <audio src="${maniac[0].preview}" controls><p>seu navegador não suporta o elemento</p></audio>
        <p>UH UH UHHHH</p>
      </div>
  `
  aux += `
  <div class="polaroid">
        <p>${inTheEnd[0].title}</p>
        <audio src="${inTheEnd[0].preview}" controls><p>seu navegador não suporta o elemento</p></audio>
        <p>A gente sempre pra lá de bagda cantando essa</p>
      </div>
  `
  listMusics.innerHTML = aux

});
