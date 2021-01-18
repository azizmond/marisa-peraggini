const properties = [
    {
        imageProperty: 'sea-horse.jpg',
        address: 'Avellaneda 678',
        location: 'Ramos Mejía',
        status: 'Venta',
        bedQuant: 2,
        bathQuant: 3,
        propType: 'Semipiso',
        description: 'Exclusivo departamento de 3 ambientes con balcón al frente en planta baja de 100m2 - Doble cochera u opcional cochera/ baulera - Diseño minimalista y gran funcionalidad',
        value: 'U$S 320.000'
    },
    {
        imageProperty: 'P3290001-300x167.jpg',
        address: 'Chubut 400',
        location: 'Ramos Mejía',
        status: 'Venta',
        bedQuant: 4,
        bathQuant: 2,
        propType: 'Casa',
        description: '5 metros de ancho por 30 mts de fondo , con las comodidades de un lote propio, 4 dormitorios, excelente diseño.',
        value: 'U$S 245.000'
    },
    {
        imageProperty: 'IMG_20171125_131048623_HDR-300x167.jpg',
        address: 'Villegas 2706',
        location: 'San Justo',
        status: 'Alquiler',
        bedQuant: 1,
        bathQuant: 1,
        propType: 'Departamento',
        description: 'Hermoso departamento de 2 amb. luminoso con vista abierta, living comedor, cocina, baño completo con bañera, dormitorio con placard.',
        value: '$15.000'
    },
    {
        imageProperty: 'P1010964-300x167.jpg',
        address: 'Castelli 600',
        location: 'Ramos Mejía',
        status: 'Venta',
        bedQuant: 2,
        bathQuant: 1,
        propType: 'Casa',
        description: 'Tipo Chalet en 2 plantas, en excelente estado.Aire acondicionado, Alarma, Parrilla, Servicios',
        value: 'U$S 295.000'
    },
    {
        imageProperty: 'P8020004-300x167.jpg',
        address: 'Pola 1200',
        location: 'Morón',
        status: 'Venta',
        bedQuant: 3,
        bathQuant: 1,
        propType: 'Casa',
        description: 'Hermosa casa desarrollada sobre lote propio de 10x25. PB: Living en desnivel con hogar, Comedor, Cocina-Comedor diario con muebles bajomesada',
        value: 'U$S 255.000'
    },
    {
        imageProperty: 'DSC_0155-300x167.jpg',
        address: 'Paloma 0',
        location: 'Villa Ventana',
        status: 'Alquiler',
        bedQuant: 5,
        bathQuant: 5,
        propType: 'Quinta',
        description: 'Complejo de cabañas equipadas. Casa principal de 4 amb. Quincho 40 m2 cocina, baño y parrilla. Piscina de 5x8 m.',
        value: 'Precio a Consultar'
    },
    {
        imageProperty: '1563595105-300x167.jpg',
        address: 'Tucuman 2200',
        location: 'Castelar',
        status: 'Venta',
        bedQuant: 2,
        bathQuant: 1,
        propType: 'Casa',
        description: '2 dormitorios y posibilidad de 3º dormitorio y ampliar en planta alta. Muy buen estado. Garage pasante y jardín. Parrilla.',
        value: 'U$S 190.000'
    },
    {
        imageProperty: 'IMG_20170211_122011927_HDR-300x167.jpg',
        address: 'Espora 100',
        location: 'Ramos Mejía',
        status: 'Venta',
        bedQuant: 2,
        bathQuant: 1,
        propType: 'Departamento',
        description: 'Departamento 3 ambientes con lavadero y Balcón al frente – Venta Condicionada – APTO CRÉDITO. Calefacción, dos dormitorios.',
        value: 'U$S 138.000'
    },
    {
        imageProperty: 'maestraLascano300.jpg',
        address: 'Maestra Lascano 300',
        location: 'Ramos Mejía',
        status: 'Venta',
        bedQuant: 1,
        bathQuant: 1,
        propType: 'Departamento',
        description: 'Hermoso departamento de 2 ambienters con doble balcón al frente y lateral. Cochera cubierta.',
        value: 'U$S 138.000'
    },
    {
        imageProperty: 'espora44.jpg',
        address: 'Espora 44',
        location: 'Ramos Mejía',
        status: 'Alquiler',
        bedQuant: 3,
        bathQuant: 1,
        propType: 'Departamento',
        description: 'Cómodo departamento al frente de 4 ambientes. Dormitorio principal en suite. Baño con hidromasajes. Escritorio.',
        value: '$17.000'
    },
    {
        imageProperty: 'cabral400.jpg',
        address: 'Sgto Cabral 400',
        location: 'Ramos Mejía',
        status: 'Venta',
        bedQuant: 3,
        bathQuant: 3,
        propType: 'Casa',
        description: 'Excelente casa. Ideal destino vivienda o comercial. Local 25 m2 con baño. Entrada de auto. 3 dormitorios, uno en planta baja. Escritorio. Patio y terraza.',
        value: 'U$S 345.000'
    },
    {
        imageProperty: 'saavedra3970_ciudadela.jpg',
        address: 'Saavedra 3970',
        location: 'Ciudadela',
        status: 'Venta',
        bedQuant: 1,
        bathQuant: 1,
        propType: 'Departamento',
        description: 'Departamento al contrafrente de 2 ambientes a 3 cuadras de la estación de Ciudadela Norte. Edificio con ascensor.',
        value: 'U$S 49.000'
    },
    {
        imageProperty: 'alvarado29.jpg',
        address: 'Alvarado 29',
        location: 'Ramos Mejía',
        status: 'Venta',
        bedQuant: 3,
        bathQuant: 2,
        propType: 'Casa',
        description: 'Amplia y cómoda casa de 4 ambientes. Living comedor con hogar. Comedor, cocina garage baño. Dependencia con baño. 3 dormitorios.',
        value: 'U$S 190.000'
    },
    {
        imageProperty: 'rosales4300Ciudadela.jpg',
        address: 'Rosales 4300',
        location: 'Ciudadela',
        status: 'Venta',
        bedQuant: 2,
        bathQuant: 1,
        propType: 'Galpón',
        description: 'Amplio galpón. PB. Local al frente con cortina metálica y puerta de acceso lateral independiente con pequeña. 2 oficinas, baño. Patio. Pileta de lavado en el bajo escalera. PA. Amplio ambiente entero, balcón al frente y terraza.',
        value: 'U$S 140.000'
    },
    {
        imageProperty: '1695054611.jpg',
        address: 'Alberdi 128',
        location: 'Ramos Mejía',
        status: 'Venta',
        bedQuant: 3,
        bathQuant: 2,
        propType: 'Piso',
        description: 'Excelente piso de categoría en el centro de Ramos Mejía. Dormitorio principal en suite con vestidor y dos dormitorios. Balcón al frente. 2 cocheras y 2 bauleras. Edificio con SUM, parrilla y barra, piscina y gym.',
        value: 'U$S 640.000'
    },
];

const search = () => {
    const operation = document.getElementById('status').value;
    const location = document.getElementById('location').value;
    const beds = document.getElementById('beds').value;

    const propsFounded = properties
        .filter(prop => prop.status === operation) // Filtra por la operacion y retorna un nuevo array
        .filter(prop => prop.location === location) // A ese nuevo array lo vuelve a filtrar por la ubicacion y retorna otro array
        .filter(prop => prop.bedQuant === Number(beds))// vuelve a filtrar el array por dormitorios y devuelve un array con las coincidencias

    //Borro el row actual
    // Esto es para mostrar los resultados de ese array
    /* const row = document.createElement('div');
    row.className = "row"; */
    const row = document.querySelector('#rowResult')
    row.innerHTML = '';
    if (propsFounded.length) {
        propsFounded.forEach(prop => {
            const card = document.createElement('div')
            card.className = 'col-lg-3 col-md-6 col-12 mt-3'

            const cardProp = `
                    <div class="card text-center">
                        <img class="card img-top p-2 imageProperty" src="img/propiedades/${prop.imageProperty}" height="167px" alt="">
                        <div class="card-body bckgr-card">
                            <h6 class="card-title address">${prop.address} - <span class="location">${prop.location}</span></h6>
                            <span class="status">${prop.status}</span>
                            <span class="color-bed bedQuant"><i class="fas fa-bed"></i> ${prop.bedQuant}</span>
                            <span class="color-bed bathQuant"><i class="fas fa-bath"></i> ${prop.bathQuant}</span>
                            <hr>
                            <span class="propType">Casa</span>
                            <p class="card-paragraph description">${prop.description}</p>
                            <h4>${prop.value}</h4>
                        </div>
                    </div>`
            card.innerHTML = cardProp
            row.appendChild(card);
        });
    } else {
        const noResults = document.createElement('p')
        noResults.innerHTML = 'No se encontraron resultados para la búsqueda.'
        row.appendChild(noResults);
    }

    document.getElementById('results').appendChild(row)


};