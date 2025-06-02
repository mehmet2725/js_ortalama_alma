let sayilar = [];
let sayiSayisi = [];
function sayiAdetAl(){
    let sayiAdet = Number(prompt(`Kaç adet sayı girmek istediğinizi sadece sayı olarak yazınız.`));
    sayiSayisi.push(sayiAdet);
}
function sayiAl(){
    for(let i = 0; i < sayiSayisi[0]; i++){
        let sayi = Number(prompt(`${i + 1}. Sayıyı Giriniz.`));
        sayilar.push(sayi);
    }
}
function ortalamasınıYap(){
    let toplam = 0;
    for(let i = 0; i < sayilar.length; i++){
        toplam = toplam + sayilar[i];
    }
    let ortalama = toplam / sayilar.length;
    alert(`Girdiğiniz Sayıların Ortalaması: ${ortalama}`);
}

sayiAdetAl();
sayiAl();
ortalamasınıYap();