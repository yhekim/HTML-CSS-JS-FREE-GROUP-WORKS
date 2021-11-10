const info = [{
        id: 0,
        name: "Rüştü Reçber",
        country: "Turkey",
        img: "https://i2.milimaj.com/i/milliyet/75/0x0/5e7fc1fa55427e0f1091925f.jpg",
        text: "Rüştü Reçber, kaleci mevkiinde görev yapmış eski Türk millî futbolcudur. Türk ve dünya futbol tarihinin en iyi kalecileri arasında yer alır, 2003 yılında dünyanın en iyi 3. kalecisi olarak seçilmiştir."

    },
    {
        id: 1,
        name: "Okan Buruk",
        country: "Turkey",
        img: "https://cdnuploads.aa.com.tr/uploads/Contents/2020/07/19/thumbs_b_c_4c7bd8bb62e1356c19688be260eb70e5.jpg",
        text: "Okan Buruk, orta saha mevkiinde forma giymiş eski Türk millî futbolcu ve teknik direktördür."

    },
    {
        id: 2,
        name: "Bülent Korkmaz",
        country: "Turkey",
        img: "https://img.a.transfermarkt.technology/portrait/header/3380-1537453263.jpg?lm=1",
        text: "Bülent Korkmaz, Galatasaray ve millî takımda forma giymiş eski Türk futbolcu ve teknik direktör. Futbolculuk döneminde stoper mevkinde forma giymiştir"

    },
    {
        id: 3,
        name: "İlhan Mansız",
        country: "Turkey",
        img: "https://isbh.tmgrup.com.tr/sbh/2014/11/25/1416910777477.jpg",
        text: "İlhan Mansız, Türk aktör ve Santrfor mevkiinde görev almış eski millî futbolcudur. Aslen Kırım Tatarıdır. Millî buz patencisidir. 2002 FIFA Dünya Kupası'nda Senegal'e attığı altın gol, FIFA Dünya Kupası tarihinin son altın golüdür. 2017 yılında Survivor yarışmasına katılmıştır."

    },
    {
        id: 4,
        name: "Burak Yılmaz",
        country: "Turkey",
        img: "https://i.dha.com.tr/15648/imgs/230320211824334180054.jpg",
        text: "Burak Yılmaz, santrfor mevkisinde oynayan Türk millî futbolcudur. Ligue 1 takımlarından Lille'de forma giymektedir. Kariyeri boyunca beş ayrı takım formasıyla UEFA Şampiyonlar Ligi Grup Aşaması’nda oynama başarısı gösteren ilk Türk oyuncu olmuştur."

    }
]

// Get the Elements

const img = document.getElementById('person-img');
const footballer = document.getElementById("footballer")
const country = document.getElementById('country');
const text = document.getElementById('text');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');



let currentItem = 0;

window.onload = function() {
    const randomFotballer = randomNumber();
    console.log(randomFotballer);
    showFootballer(randomFotballer);


}
randomBtn.addEventListener("click", () => {
    const randomFotballer = randomNumber();
    console.log(randomFotballer);
    showFootballer(randomFotballer);
})
nextBtn.addEventListener("click", () => {
    currentItem++;
    if (currentItem > info.length - 1) {
        currentItem = info.length - 1

    }
    showFootballer(currentItem);
})
prevBtn.addEventListener("click", () => {
    currentItem--;
    if (currentItem < 0) {
        currentItem = 0

    }
    showFootballer(currentItem);
})

function randomNumber() {
    currentItem = Math.floor(Math.random() * info.length);

    return currentItem;
}

function showFootballer(people) {
    const item = info[people];
    img.src = item.img;
    footballer.textContent = item.name;
    country.textContent = item.country;
    text.textContent = item.text;
}