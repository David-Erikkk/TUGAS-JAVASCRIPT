class book {
    constructor(judul,prnulis,tahunterbit){
        this.judul = judul;
        this.penulis = penulis;
        this.tahunterbit = tahunterbit; 
    }
      tampilkanInfo(){
console.log(`judul: ${this.judul}`);
console.log(`penulis: ${this.penulis}`);
console.log(`tahunterbit: ${this.tahunterbit}`);
      }
    }
    const buku1 = new book("harypotter and the sorcer's stone", "J.K Rowling", 1997);
    const buku2 = new book("To kill a mockingbrid",`herper lee`, 1960);
buku1.tampilkanInfo();
buku2.tampilkanInfo();