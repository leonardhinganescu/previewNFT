const nftCardTemplate = document.querySelector("[data-nft-template]");
const nftContainer = document.querySelector("[data-nft-container]");
const attDIV = document.querySelector("[data-aatributes]");
const NFT_NUMBER = 2000;

fetch("collection/collection.json")
  .then((res) => res.json())
  .then((attData) => {
    console.log(attData);
    const atr1 = document.querySelector("[data-attributes-accesorii]");
    createP(atr1, "Ballon", attData.Accesorii.Ballon);
    createP(atr1, "Empty", attData.Accesorii.Empty);
    createP(atr1, "Mask", attData.Accesorii.Mask);

    const atr2 = document.querySelector("[data-attributes-background]");
    createP(atr2, "c1", attData.Background.c1);
    createP(atr2, "c2", attData.Background.c2);
    createP(atr2, "c3", attData.Background.c3);
    createP(atr2, "c4", attData.Background.c4);
    createP(atr2, "c5", attData.Background.c5);
    createP(atr2, "c6", attData.Background.c6);
    createP(atr2, "c7", attData.Background.c7);
    createP(atr2, "c8", attData.Background.c8);
    createP(atr2, "c9", attData.Background.c9);
    createP(atr2, "c10", attData.Background.c10);
    createP(atr2, "c11", attData.Background.c11);
    createP(atr2, "c12", attData.Background.c12);

    const atr3 = document.querySelector("[data-attributes-pupitru]");
    createP(atr3, "pupitru1", attData.Foreground.pupitru1);
    createP(atr3, "pupitru2", attData.Foreground.pupitru2);
    createP(atr3, "pupitru3", attData.Foreground.pupitru3);
    createP(atr3, "pupitru4", attData.Foreground.pupitru4);
    createP(atr3, "microphones5", attData.Foreground.microphones5);
    createP(atr3, "Empty", attData.Foreground.Empty);

    const atr4 = document.querySelector("[data-attributes-glasses]");
    createP(atr4, "ochelar1", attData.Glasses.ochelar1);
    createP(atr4, "ochelar2", attData.Glasses.ochelar2);
    createP(atr4, "ochelar3", attData.Glasses.ochelar3);
    createP(atr4, "Eye_Patch", attData.Glasses.Eye_Patch);
    createP(atr4, "Empty", attData.Glasses.Empty);

    const atr5 = document.querySelector("[data-attributes-hats]");
    createP(atr5, "Black", attData.Hats.Black);
    createP(atr5, "Blue", attData.Hats.Blue);
    createP(atr5, "Boat", attData.Hats.Boat);
    createP(atr5, "Cowboy", attData.Hats.Cowboy);
    createP(atr5, "Empty", attData.Hats.Empty);
    createP(atr5, "PDL", attData.Hats.PDL);
    createP(atr5, "PMP", attData.Hats.PMP);
    createP(atr5, "Sailor", attData.Hats.Sailor);
    createP(atr5, "Suvita", attData.Hats.Suvita);
    createP(atr5, "Suvita_Big", attData.Hats.Suvita_Big);
    createP(atr5, "Traditional", attData.Hats.Traditional);

    const atr6 = document.querySelector("[data-attributes-insigne]");
    createP(atr6, "Elrond", attData.Insigne.Elrond);
    createP(atr6, "Empty", attData.Insigne.Empty);
    createP(atr6, "Europe", attData.Insigne.Europe);
    createP(atr6, "Nato", attData.Insigne.Nato);
    createP(atr6, "Politikos", attData.Insigne.Politikos);
    createP(atr6, "Romania", attData.Insigne.Romania);
    createP(atr6, "Romania2", attData.Insigne.Romania2);

    const atr7 = document.querySelector("[data-attributes-gun]");
    createP(atr7, "Machine Gun", attData.Machine_Gun.Machine_Gun);

    const atr8 = document.querySelector("[data-attributes-uniforms]");
    createP(atr8, "Blue_Polo", attData.Uniforms.Blue_Polo);
    createP(atr8, "Blue_Suit", attData.Uniforms.Blue_Suit);
    createP(atr8, "Blue_Sweater", attData.Uniforms.Blue_Sweater);
    createP(atr8, "Drinking", attData.Uniforms.Drinking);
    createP(atr8, "Green_Polo", attData.Uniforms.Green_Polo);
    createP(atr8, "Hello_Sailor", attData.Uniforms.Hello_Sailor);
    createP(atr8, "Orange_Polo", attData.Uniforms.Orange_Polo);
    createP(atr8, "Purple_Suit", attData.Uniforms.Purple_Suit);
    createP(atr8, "Red_Polo", attData.Uniforms.Red_Polo);
    createP(atr8, "Red_Suit", attData.Uniforms.Red_Suit);
    createP(atr8, "Sailor", attData.Uniforms.Sailor);
    createP(atr8, "Smoking", attData.Uniforms.Smoking);
    createP(atr8, "Steaua", attData.Uniforms.Steaua);
    createP(atr8, "Traditional_Romanesc", attData.Uniforms.Traditional_Romanesc);
    createP(atr8, "Tricolor_Suit", attData.Uniforms.Tricolor_Suit);
  });

function createP(parent, subatr, data) {
  const p = document.createElement("p");
  p.textContent = text(subatr, data);
  parent.append(p);
}

function text(subatr, data) {
  return subatr + ": " + data.attributeOccurrence.toString() + " (" + (data.attributeOccurrence / 20).toString() + "%)";
}

async function fetchJSON() {
  let files = [];
  for (let index = 0; index < NFT_NUMBER; index++) {
    const path = "collection/" + (index + 1).toString() + ".json";
    const response = await fetch(path);
    files[index] = await response.json();
    files[index].index = index + 1;
  }

  return files;
}
fetchJSON().then((jsonData) => {
  jsonData.sort(compare);
  jsonData.forEach((nft) => {
    const card = nftCardTemplate.content.cloneNode(true).children[0];
    const nftNumber = card.querySelector("[data-title-number]");
    const nftRarity = card.querySelector("[data-title-rarity]");
    const nftImg = card.querySelector("[data-image]");
    nftNumber.textContent = "Politikos #" + nft.index.toString();
    nftRarity.textContent = nft.rarity.rarityScoreNormed.toString();
    nftImg.src = "collection/" + nft.index.toString() + ".png";
    nftContainer.append(card);
  });
});

function compare(a, b) {
  return b.rarity.rarityScoreNormed - a.rarity.rarityScoreNormed;
}
