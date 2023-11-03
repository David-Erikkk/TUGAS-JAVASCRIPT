class manusia {
    constructor(nama, umur, jenisKelamin, status) {
        this.nama = nama;
        this.umur = umur;
        this.jenisKelamin = jenisKelamin;
        this.status = status;
    }

    dataDiri() {
        return `Halo!, perkenalkan nama saya ${this.nama}.
        Saya merupakan seorang${this.jenisKelamin} 
        berusia ${this.umur} tahun.
        Saat ini saya ada seorang ${this.status}`;
    }
}

let manusia1 = new manusia("David", 17, "Laki-laki", "Pelajar");

console.log(manusia1.dataDiri());