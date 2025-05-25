const vehiculos = [
    {
        codigo: "aB3c7D2f", 
        nombre: "Chevrolet Spark", 
        marca: "Chevrolet", 
        img: "../img/spark.jpg", 
        categoria: "Baja", 
        capacidad: "4",
        precioXDia: 150000
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

//VISTA REGISTRO
const img = [
    {
        src: "../img/488.jpeg",
        alt: "Ferrari 488"
    },
    {
        src: "../img/911.jpg",
        alt: "Porsche 911"
    },
    {
        src: "../img/cx90.jpg",
        alt: "Mazda CX-90"
    },
    {
        src: "../img/eqs.jpg",
        alt: "Mercedes Benz EQS"
    },
    {
        src: "../img/models.jpg",
        alt: "Tesla Model S"
    },
    {
        src: "../img/onix.jpeg",
        alt: "Chevrolet Onix"
    },
    {
        src: "../img/tecnica.jpg",
        alt: "Lamborghini Tecnica"
    },
    {
        src: "../img/sanderors.jpeg",
        alt: "Renault Sandero RS"
    },
    {
        src: "../img/typer.jpg",
        alt: "Honda Civic Type R"
    },
    {
        src: "../img/challenger.jpg",
        alt: "Dodge Challenger"
    }
];
const imagen = document.getElementById("imagen");
if (imagen) {
    const imgPreview = document.getElementById("img");
    imagen.addEventListener("change", function () {
        const seleccionado = imagen.value;
        let imgData = null;
        for (let i = 0; i < img.length; i++) {
            if (img[i].alt === seleccionado) {
                imgData = img[i];
                break;
            }
        }
        if (imgData && imgPreview) {
            imgPreview.innerHTML = "<img src='" + imgData.src + "' alt='" + imgData.alt + "' class='imgSeleccionada' />";
        } else if (imgPreview) {
            imgPreview.innerHTML = "";
        }
    });
};
function verificar() {
    const nombre = document.getElementById("nombre");
    const categoria = document.getElementById("categoria");
    const imagen = document.getElementById("imagen");
    const capacidad = document.getElementById("capacidad");
    const marca = document.getElementById("marca");
    const codigo = document.getElementById("codigo");
    const precio = document.getElementById("precio");

    if (nombre.value === "" || categoria.value === "" || imagen.value === "" || capacidad.value === "" || marca.value === "" || codigo.value === "" || precio.value === "") {
        window.location.href = "./indicaciones.html";
        alert("Faltan datos");
        console.log("Faltan datos");
        return true;
    } else if(nombre.value.length > 20) {
        window.location.href = "./indicaciones.html";
        alert("El nombre no puede ser mayor a 20 caracteres");
        console.log("El nombre no es muy largo");
        return true;
    } else if (existeCodigoEnLocalStorage(codigo.value)) {
        window.location.href = "./indicaciones.html";
        alert("El codigo ya existe");
        console.log("El codigo ya existe");
        return true;
    } else if (codigo.value.length < 8) {
        window.location.href = "./indicaciones.html";
        alert("El codigo no es correcto por la longitud");
        console.log("El codigo no es correcto por la longitud");
        return true;
    } else if (!/[0-9].*[0-9]/.test(codigo.value)) {
        window.location.href = "./indicaciones.html";
        alert("El codigo no es correcto por los numeros");
        console.log("El codigo no es correcto por los numeros");
        return true;
    } else if (!/[a-z]/.test(codigo.value)) {
        window.location.href = "./indicaciones.html";
        alert("El codigo no es correcto por las letras minusculas");
        console.log("El codigo no es correcto por las letras minusculas");
        return true;
    } else if (!/[A-Z]/.test(codigo.value)) {
        window.location.href = "./indicaciones.html";
        alert("El codigo no es correcto por las letras mayusculas");
        console.log("El codigo no es correcto por las letras mayusculas");
        return true;
    } else if (precio.value < 10000 || precio.value > 30000000) {
        window.location.href = "./indicaciones.html";
        alert("El precio no es correcto");
        console.log("El precio no es correcto");
        return true;
    } else if (existeCodigo(codigo.value)) {
        window.location.href = "./indicaciones.html";
        alert("El codigo ya existe");
        console.log("El codigo ya existe");
        return true;
    } 
};
function existeCodigo(codigo) {
    for (let i = 0; i < vehiculos.length; i++) {
        if (vehiculos[i].codigo === codigo) {
            return true;
        }
    }
    return false;
};
function existeCodigoEnLocalStorage(codigo) {
    const vehiculosRegistrados = JSON.parse(localStorage.getItem("vehiculoN")) || [];
    for (let i = 0; i < vehiculosRegistrados.length; i++) {
        if (vehiculosRegistrados[i].codigo === codigo) {
            return true;
        }
    }
    return false;
};

const KEY_LOCAL_STORAGE = "vehiculoN";
function guardarDatos(key, data) {
    const dataSring = JSON.stringify(data);
    localStorage.setItem(key, dataSring);
};

let vehiculoN = JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE)) || [];
const registrar = (event) => {
    event.preventDefault();

    if (verificar()) {
        return;
    } else{
        let rutaImagen = "";
        for (let i = 0; i < img.length; i++) {
            if (img[i].alt === imagen.value) {
                rutaImagen = img[i].src;
                break;
            }
        }
        const nuevoVehiculo = {
            codigo: codigo.value,
            nombre: nombre.value,
            marca: marca.value,
            img: rutaImagen,
            categoria: categoria.value,
            capacidad: capacidad.value,
            precioXDia: precio.value
        };
        vehiculoN.push(nuevoVehiculo);
            guardarDatos(KEY_LOCAL_STORAGE, vehiculoN);
            window.location.href = "./productos.html";
            console.log("Datos completos");
    }
};

const vehiculosRegistrados = JSON.parse(localStorage.getItem("vehiculoN"));
console.log(vehiculosRegistrados);
const limpiar = () => {
    nombre.innerHTML = "";
    categoria.innerHTML = "";
    imagen.innerHTML = "";
    capacidad.innerHTML = "";
    marca.innerHTML = "";
    codigo.innerHTML = "";
    precio.innerHTML = "";
    vehiculoN.length = 0;
    localStorage.removeItem("vehiculoN");
};


//VISTA INDICACIONES
function volverR() {
    window.location.href = "./registro.html";
};


//VISTA PRODUCTOS
let paginaActual = 1;
const productosPorPagina = 15;
const productos = document.getElementById("productos");

function mostrarVehiculosPaginados() {
    if (!productos) return;
    productos.innerHTML = "";
    const vehiculosRegistrados = JSON.parse(localStorage.getItem("vehiculoN"));
    const todos = vehiculos.concat(vehiculosRegistrados);
    console.log(todos);

    const inicio = (paginaActual - 1) * productosPorPagina;
    const fin = inicio + productosPorPagina;
    const totalPaginas = Math.ceil(todos.length / productosPorPagina);

    for (let i = inicio; i < fin && i < todos.length; i++) {
        const vehiculo = todos[i];
        const precioFormateado = Number(vehiculo.precioXDia || vehiculo.precio).toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
        productos.innerHTML += "<div class='card'><div class='face front'><img src='" + vehiculo.img + "' alt='" + vehiculo.nombre + "' /><h3>" + vehiculo.nombre + "</h3></div><div class='face back'><p>Nombre: " + vehiculo.nombre + "</p><p>Categoria: " + vehiculo.categoria + "</p><p>Codigo: " + vehiculo.codigo + "</p><p>Capacidad: " + vehiculo.capacidad + "</p><p>Marca: " + vehiculo.marca + "</p><p>Precio por dia: " + precioFormateado + "</p></div></div>";
    }
    document.querySelector('button[onclick="paginaAnterior()"]').disabled = paginaActual === 1;
    document.querySelector('button[onclick="siguientePagina()"]').disabled = paginaActual === totalPaginas;
    const paginaActualSpan = document.getElementById("paginaActual");
    if (paginaActualSpan) {
        paginaActualSpan.textContent = "Pagina " + paginaActual + " de " + totalPaginas;
    }
};
function paginaAnterior() {
    if (paginaActual > 1) {
        paginaActual--;
        mostrarVehiculosPaginados();
    }
}
function siguientePagina() {
    const totalPaginas = Math.ceil(vehiculos.length / productosPorPagina);
    if (paginaActual < totalPaginas) {
        paginaActual++;
        mostrarVehiculosPaginados();
    }
}
if (productos) {
    mostrarVehiculosPaginados();
};
function buscar(){
    window.location.href = "./buscar.html";
}


//VISTA BUSCAR
const precios = document.getElementById("precios");
const capacidades = document.getElementById("capacidades");
const categorias = document.getElementById("categorias");
const vehiculosFiltrados = [];
const KEY_VEHICULOS_FILTRADOS = "vehiculosFiltradosData";

const retraso = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (precios.value === "" && capacidades.value === "" && categorias.value === "") {
                reject(alert("No se han seleccionado filtros"));
            } else {
                filtrar();
                resolve();
            }
        }, 2000);
    });
};
/*const filtrar = () => {
    vehiculosFiltrados.length = 0;
    const todos = vehiculos.concat(vehiculosRegistrados);
    if(precios.value === "primerOP"){
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].precioXDia < 200000) {
                vehiculosFiltrados.push(todos[i]);
            }
        }
    }
    if(precios.value === "segundoOP"){
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].precioXDia <= 500000 && todos[i].precioXDia >= 200000) {
                vehiculosFiltrados.push(todos[i]);
            }
        }
    }
    if(precios.value === "tercerOP"){
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].precioXDia <= 1000000 && todos[i].precioXDia >= 500000) {
                vehiculosFiltrados.push(todos[i]);
            }
        }
    }
    if(precios.value === "cuartoOP"){
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].precioXDia >= 1000000) {
                vehiculosFiltrados.push(todos[i]);
            }
        }
    }
    if(capacidades.value === "dos"){
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].capacidad == 2) {
                vehiculosFiltrados.push(todos[i]);
            }
        }
    }
    if(capacidades.value === "cuatro"){
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].capacidad == 4) {
                vehiculosFiltrados.push(todos[i]);
            }
        }
    }
    if(categorias.value === "baja"){
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].categoria == "Baja") {
                vehiculosFiltrados.push(todos[i]);
            }
        }
    }
    if(categorias.value === "media"){
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].categoria == "Media") {
                vehiculosFiltrados.push(todos[i]);
            }
        }
    }
    if(categorias.value === "media-alta"){
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].categoria == "Media-Alta") {
                vehiculosFiltrados.push(todos[i]);
            }
        }
    }
    if(categorias.value === "alta"){
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].categoria == "Alta") {
                vehiculosFiltrados.push(todos[i]);
            }
        }
    }
    if(categorias.value === "luxury"){
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].categoria == "Luxury") {
                vehiculosFiltrados.push(todos[i]);
            }
        }
    }
}*/
const filtrar = () => {
    let resultadoTemporal = vehiculos.concat(vehiculosRegistrados);

    if (precios.value === "primerOP") {
        resultadoTemporal = resultadoTemporal.filter(vehiculo => vehiculo.precioXDia < 200000);
    } else if (precios.value === "segundaOP") {
        resultadoTemporal = resultadoTemporal.filter(vehiculo => vehiculo.precioXDia >= 200000 && vehiculo.precioXDia <= 500000);
    } else if (precios.value === "terceraOP") {
        resultadoTemporal = resultadoTemporal.filter(vehiculo => vehiculo.precioXDia >= 500000 && vehiculo.precioXDia <= 1000000);
    } else if (precios.value === "cuartaOP") {
        resultadoTemporal = resultadoTemporal.filter(vehiculo => vehiculo.precioXDia >= 1000000);
    }

    if (capacidades.value === "dos") {
        resultadoTemporal = resultadoTemporal.filter(vehiculo => vehiculo.capacidad == 2);
    } else if (capacidades.value === "cuatro") {
        resultadoTemporal = resultadoTemporal.filter(vehiculo => vehiculo.capacidad == 4);
    }

    if (categorias.value === "baja") {
        resultadoTemporal = resultadoTemporal.filter(vehiculo => vehiculo.categoria === "Baja");
    } else if (categorias.value === "media") {
        resultadoTemporal = resultadoTemporal.filter(vehiculo => vehiculo.categoria === "Media");
    } else if (categorias.value === "media-alta") {
        resultadoTemporal = resultadoTemporal.filter(vehiculo => vehiculo.categoria === "Media-Alta");
    } else if (categorias.value === "alta") {
        resultadoTemporal = resultadoTemporal.filter(vehiculo => vehiculo.categoria === "Alta");
    } else if (categorias.value === "luxury") {
        resultadoTemporal = resultadoTemporal.filter(vehiculo => vehiculo.categoria === "Luxury");
    }

    vehiculosFiltrados.length = 0;
    for (let i = 0; i < resultadoTemporal.length; i++) {
        vehiculosFiltrados.push(resultadoTemporal[i]);
    }
};
const buscarF = () => {
    retraso()
        .then(() => {
            guardarDatos(KEY_VEHICULOS_FILTRADOS, vehiculosFiltrados);
            console.log(vehiculosFiltrados);
            window.location.href = "./lista.html";
        })
        .catch(error => {
            console.error(error);
        });
}
const limpiarF = () => {
    precios.value = "";
    capacidades.value = "";
    categorias.value = "";
    localStorage.removeItem(KEY_VEHICULOS_FILTRADOS);
}
const volverB = () => {
    window.location.href = "./productos.html";
}


//VISTA LISTA
const resultados = document.getElementById("resultados");
const paginacion = document.getElementById("paginacion");
let paginaActualLista = 1;
const elementosPorPagina = 10;

function mostrarVehiculosFiltrados(pagina = 1) {
    const vehiculosFiltrados = JSON.parse(localStorage.getItem("vehiculosFiltradosData")) || [];
    resultados.innerHTML = "";

    if (vehiculosFiltrados.length === 0) {
        resultados.innerHTML = "<p>No se encontraron vehiculos con esos filtros.</p>";
        if (paginacion) paginacion.innerHTML = "";
        return;
    }

    const totalPaginas = Math.ceil(vehiculosFiltrados.length / elementosPorPagina);
    const inicio = (pagina - 1) * elementosPorPagina;
    const fin = Math.min(inicio + elementosPorPagina, vehiculosFiltrados.length);

    let tabla = "<table class='tabla-lista'><thead><tr><th>Imagen</th><th>Nombre</th><th>Categoria</th><th>Codigo</th><th>Capacidad</th><th>Marca</th><th>Precio por dia</th></tr></thead><tbody>";

    for (let i = inicio; i < fin; i++) {
        const vehiculo = vehiculosFiltrados[i];
        const precioFormateado = Number(vehiculo.precioXDia || vehiculo.precio).toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
        tabla += "<tr><td><img src='" + vehiculo.img + "' alt='" + vehiculo.nombre + "' class='imgTa'></td><td>" + vehiculo.nombre + "</td><td>" + vehiculo.categoria + "</td><td>" + vehiculo.codigo + "</td><td>" + vehiculo.capacidad + "</td><td>" + vehiculo.marca + "</td><td>" + precioFormateado + "</td></tr>";
    }
    tabla += "</tbody></table>";
    resultados.innerHTML = tabla;

    if (paginacion) {
        paginacion.innerHTML = "";
        if (totalPaginas > 1) {
            if (pagina > 1) {
                paginacion.innerHTML += "<button onclick='mostrarVehiculosFiltrados(" + (pagina - 1) + ")' class='btnL' ><</button>";
            }
            paginacion.innerHTML += "  Página " + pagina + " de " + totalPaginas + "  ";
            if (pagina < totalPaginas) {
                paginacion.innerHTML += "<button onclick='mostrarVehiculosFiltrados(" + (pagina + 1) + ")' class='btnL'>></button>";
            }
        }
    }
}
if (resultados) {
    mostrarVehiculosFiltrados();
}
const limpiarB = () => {
    if (precios || capacidades || categorias) {
        precios.value = "";
        capacidades.value = "";
        categorias.value = "";
        vehiculosFiltrados.length = 0;
        localStorage.removeItem(KEY_VEHICULOS_FILTRADOS);
    }
    window.location.href = "./buscar.html";
}
function volverResul () {
    window.location.href = "./productos.html";
}