class kendaraan {
    constructor(model, merk, harga) {
        this.model = model;
        this.merk = merk;
        this.harga = harga;
    }
    maju(){
        return `kendaraan ${this.model} bergerak maju`;
    }
}

let mobil = new kendaraan("Fortuner", "Toyota", 1000000000);
let motor = new kendaraan("Ducati Superleggera V4", "Ducati", 1000000000);

console.log(mobil.maju());
console.log(motor);