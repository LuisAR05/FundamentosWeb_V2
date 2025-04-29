const vehiculos = [
    {
        codigo: "aB3c7D2f", 
        nombre: "Chevrolet Spark", 
        marca: "Chevrolet", 
        img: "../img/spark.jpg", 
        categoria: "Baja", 
        capacidad: "4", precioXDia: 150000
    },
    {
        codigo: "kL9m1N0p", 
        nombre: "Chevrolet Spark gt", 
        marca: "Chevrolet", 
        img: "../img/sparkGt.jpg", 
        categoria: "Baja", 
        capacidad: "4", 
        precioXDia: 150000
    },
    {
        codigo: "Qw4e5R6t", 
        nombre: "Chevrolet Sail", 
        marca: "Chevrolet", 
        img: "../img/sail.jpg", 
        categoria: "Baja", 
        capacidad: "4", 
        precioXDia: 160000
    },
    {
        codigo: "zX8y2V3b", 
        nombre: "Renault Logan", 
        marca: "Renault", 
        img: "../img/logan.jpg", 
        categoria: "Baja", 
        capacidad: "4", 
        precioXDia: 160000
    },
    {
        codigo: "pG7h1J4k", 
        nombre: "Renault Sandero", 
        marca: "Renault", 
        img: "../img/sandero.jpg", 
        categoria: "Baja", 
        capacidad: "4", 
        precioXDia: 155000
    },
    {
        codigo: "Mn0b5C9v", 
        nombre: "Renault Kwid", 
        marca: "Renault", 
        img: "../img/kwid.jpg", 
        categoria: "Baja", 
        capacidad: "4", 
        precioXDia: 140000
    },
    {
        codigo: "dF2g6H8j", 
        nombre: "Renault Duster", 
        marca: "Renault", 
        img: "../img/duster.jpg", 
        categoria: "Baja", 
        capacidad: "4", 
        precioXDia: 180000
    },
    {
        codigo: "rT4y9U1i", 
        nombre: "Chevrolet Captiva", 
        marca: "Chevrolet", 
        img: "../img/captiva.jpg", 
        categoria: "Baja", 
        capacidad: "4", 
        precioXDia: 190000
    },
    {
        codigo: "sK3l7P0m", 
        nombre: "Volkswagen Polo", 
        marca: "Volkswagen", 
        img: "../img/polo.jpg", 
        categoria: "Baja", 
        capacidad: "4", 
        precioXDia: 160000
    },
    {
        codigo: "Wq5e8R2n", 
        nombre: "Suzuki Swift", 
        marca: "Suzuki", 
        img: "../img/swift.jpg", 
        categoria: "Baja", 
        capacidad: "4", 
        precioXDia: 160000
    },
    {
        codigo: "vB1n6M4z", 
        nombre: "Mazda 2", 
        marca: "Mazda", 
        img: "../img/mazda2.jpg", 
        categoria: "Media", 
        capacidad: "4", 
        precioXDia: 180000
    },
    {
        codigo: "oL8i3A9c", 
        nombre: "Mazda 3", 
        marca: "Mazda", 
        img: "../img/mazda3.jpg", 
        categoria: "Media", 
        capacidad: "4", 
        precioXDia: 200000
    },
    {
        codigo: "eD7w2F5x", 
        nombre: "Mazda CX-30", 
        marca: "Mazda", 
        img: "../img/cx30.jpg", 
        categoria: "Media", 
        capacidad: "4", 
        precioXDia: 200000
    },
    {
        codigo: "uY4t6H0j", 
        nombre: "Mazda CX-5", 
        marca: "Mazda", 
        img: "../img/cx5.jpg", 
        categoria: "Media", 
        capacidad: "4", 
        precioXDia: 220000
    },
    {
        codigo: "Pg3k9L2m", 
        nombre: "Ford Scape", 
        marca: "Ford", 
        img: "../img/scape.jpg", 
        categoria: "Media", 
        capacidad: "4", 
        precioXDia: 220000
    },
    {
        codigo: "jH5r1N8b", 
        nombre: "Ford Bronco", 
        marca: "Ford", 
        img: "../img/bronco.jpg", 
        categoria: "Media", 
        capacidad: "4", 
        precioXDia: 250000
    },
    {
        codigo: "xZ6v0C3d", 
        nombre: "Ford Explorer", 
        marca: "Ford", 
        img: "../img/explorer.jpeg", 
        categoria: "Media", 
        capacidad: "4", 
        precioXDia: 250000
    },
    {
        codigo: "fE4s7U2h", 
        nombre: "Ford Ranger", 
        marca: "Ford", 
        img: "../img/ranger.jpg", 
        categoria: "Media", 
        capacidad: "4", 
        precioXDia: 250000
    },
    {
        codigo: "tR9g1K5l", 
        nombre: "Toyota Corolla", 
        marca: "Toyota", 
        img: "../img/corolla.jpg", 
        categoria: "Media", 
        capacidad: "4", 
        precioXDia: 220000
    },
    {
        codigo: "bN2m8V4p", 
        nombre: "Volvo Xc60", 
        marca: "Volvo", 
        img: "../img/cx60.jpg", 
        categoria: "Media", 
        capacidad: "4", 
        precioXDia: 220000
    },
    {
        codigo: "cA7h0J3q", 
        nombre: "Toyota 4runner", 
        marca: "Toyota", 
        img: "../img/4runner.jpg", 
        categoria: "Media-Alta", 
        capacidad: "4", 
        precioXDia: 450000
    },
    {
        codigo: "iW5o9D1r", 
        nombre: "Toyota Prado Tx-l", 
        marca: "Toyota", 
        img: "../img/txl.jpg", 
        categoria: "Media-Alta", 
        capacidad: "4", 
        precioXDia: 450000
    },
    {
        codigo: "yS6u2F4k", 
        nombre: "Ford Explorer ST", 
        marca: "Ford", 
        img: "../img/explrerST.jpg", 
        categoria: "Media-Alta", 
        capacidad: "4", 
        precioXDia: 500000
    },
    {
        codigo: "hP8j3L6m", 
        nombre: "Chevrolet Tahoe", 
        marca: "Chevrolet", 
        img: "../img/tahoe.jpg", 
        categoria: "Media-Alta", 
        capacidad: "4", 
        precioXDia: 650000
    },
    {
        codigo: "qO1v4E7n", 
        nombre: "Ford Raptor", 
        marca: "Ford", 
        img: "../img/raptor.jpg", 
        categoria: "Media-Alta", 
        capacidad: "4", 
        precioXDia: 600000
    },
    {
        codigo: "aK9d2G5t", 
        nombre: "Chevrolet Silverado", 
        marca: "Chevrolet", 
        img: "../img/silverado.jpg", 
        categoria: "Media-Alta", 
        capacidad: "4", 
        precioXDia: 500000
    },
    {
        codigo: "zX3c6B8v", 
        nombre: "Audi Q5", 
        marca: "Audi", 
        img: "../img/q5.jpg", 
        categoria: "Media-Alta", 
        capacidad: "4", 
        precioXDia: 600000
    },
    {
        codigo: "mY7p1Q0l", 
        nombre: "Audi Q2", 
        marca: "Audi", 
        img: "../img/q2.jpg", 
        categoria: "Media-Alta", 
        capacidad: "4", 
        precioXDia: 450000
    },
    {
        codigo: "nL4i8T2j", 
        nombre: "Audi Q3", 
        marca: "Audi", 
        img: "../img/q3.jpg", 
        categoria: "Media-Alta", 
        capacidad: "4", 
        precioXDia: 500000
    },
    {
        codigo: "gU5r9H3f", 
        nombre: "Audi Q7", 
        marca: "Audi", 
        img: "../img/q7.webp", 
        categoria: "Media-Alta", 
        capacidad: "4", 
        precioXDia: 800000
    },
    {
        codigo: "dC2w6A4s", 
        nombre: "Mercedes Benz GLC 300", 
        marca: "Mercedes", 
        img: "../img/glc.jpg", 
        categoria: "Alta", 
        capacidad: "4", 
        precioXDia: 900000
    },
    {
        codigo: "eR1t5V9k", 
        nombre: "Mercedes Benz G63", 
        marca: "Mercedes", 
        img: "../img/g63.jpg", 
        categoria: "Alta", 
        capacidad: "4", 
        precioXDia: 1600000
    },
    {
        codigo: "bF7u3N0m", 
        nombre: "Mercedes Benz A45", 
        marca: "Mercedes", 
        img: "../img/a45.jpg", 
        categoria: "Alta", 
        capacidad: "4", 
        precioXDia: 1000000
    },
    {
        codigo: "kI4o8P2z", 
        nombre: "Audi Q8", 
        marca: "Audi", 
        img: "../img/q8.jpg", 
        categoria: "Alta", 
        capacidad: "4", 
        precioXDia: 1500000
    },
    {
        codigo: "vJ9h1L6x", 
        nombre: "Porsche Cayenne", 
        marca: "Porsche", 
        img: "../img/cayenne.jpg", 
        categoria: "Alta", 
        capacidad: "4", 
        precioXDia: 1500000
    },
    {
        codigo: "sQ3e7D5y", 
        nombre: "Porsche Turbo S", 
        marca: "Porsche", 
        img: "../img/turboS.jpg", 
        categoria: "Alta", 
        capacidad: "2", 
        precioXDia: 2000000
    },
    {
        codigo: "wM2n4K8c", 
        nombre: "Porsche GT3", 
        marca: "Porsche", 
        img: "../img/gt3.jpg", 
        categoria: "Alta", 
        capacidad: "2", 
        precioXDia: 2000000
    },
    {
        codigo: "oA6g9B1h", 
        nombre: "Audi R8", 
        marca: "Audi", 
        img: "../img/r8.jpg", 
        categoria: "Alta", 
        capacidad: "2", 
        precioXDia: 2000000
    },
    {
        codigo: "pT5r0U3j", 
        nombre: "Ferrari F8", 
        marca: "Ferrari", 
        img: "../img/f8.jpg", 
        categoria: "Alta", 
        capacidad: "2", 
        precioXDia: 2000000
    },
    {
        codigo: "lY8i2S4f", 
        nombre: "Mercedes Benz AMG GTR", 
        marca: "Mercedes", 
        img: "../img/gtr.jpg", 
        categoria: "Alta", 
        capacidad: "2", 
        precioXDia: 2000000
    },
    {
        codigo: "rE7v1G6m", 
        nombre: "Tesla Cybertruck", 
        marca: "Tesla", 
        img: "../img/cybertruck.jpeg", 
        categoria: "Luxury", 
        capacidad: "4", 
        precioXDia: 4000000
    },
    {
        codigo: "hZ3k5C0n", 
        nombre: "Ferrari sf90", 
        marca: "Ferrari", 
        img: "../img/sf90.jpg", 
        categoria: "Luxury", 
        capacidad: "2", 
        precioXDia: 4000000
    },
    {
        codigo: "jD4w9X2b", 
        nombre: "Porsche 918 spyder", 
        marca: "Porsche", 
        img: "../img/918.jpg", 
        categoria: "Luxury", 
        capacidad: "2", 
        precioXDia: 4000000
    },
    {
        codigo: "uO6m1T7p", 
        nombre: "McLarean senna", 
        marca: "McLaren", 
        img: "../img/senna.jpg", 
        categoria: "Luxury", 
        capacidad: "2", 
        precioXDia: 4000000
    },
    {
        codigo: "qN8s3F0l", 
        nombre: "McLaren 720s spyder", 
        marca: "McLaren", 
        img: "../img/720s.jpg", 
        categoria: "Luxury", 
        capacidad: "2", 
        precioXDia: 4000000
    },
    {
        codigo: "aW2e5H9d", 
        nombre: "Lamborghini sian", 
        marca: "Lamborghini", 
        img: "../img/sian.jpg", 
        categoria: "Luxury", 
        capacidad: "2", 
        precioXDia: 4000000
    },
    {
        codigo: "xI7y4V1k", 
        nombre: "Lamborghini urus", 
        marca: "Lamborghini", 
        img: "../img/urus.jpg", 
        categoria: "Luxury", 
        capacidad: "4", 
        precioXDia: 4000000
    },
    {
        codigo: "fB9j6L3g", 
        nombre: "Lamborghini aventador svj", 
        marca: "Lamborghini", 
        img: "../img/aventador.jpg", 
        categoria: "Luxury", 
        capacidad: "2", 
        precioXDia: 4000000
    },
    {
        codigo: "cS1u8P2m", 
        nombre: "Ferrari purosangue", 
        marca: "Ferrari", 
        img: "../img/purosangue.jpg", 
        categoria: "Luxury", 
        capacidad: "4", 
        precioXDia: 4000000
    },
    {
        codigo: "zK0o3R6n", 
        nombre: "Koenigsegg jesko", 
        marca: "Koenigsegg", 
        img: "../img/jesko.jpg", 
        categoria: "Luxury", 
        capacidad: "2", 
        precioXDia: 4000000
    },
];