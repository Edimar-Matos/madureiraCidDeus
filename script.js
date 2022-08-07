function acao() {

    var map = L.map('map').setView([-3.018813, -59.953766], 14);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([-3.01874, -59.94550],).addTo(map)
        .bindPopup("<img src=./img/carcompra.PNG>").openPopup();

    L.marker([-3.018855, -59.949989],).addTo(map)
        .bindPopup("<h1>Cidade de Deus </h1><p><h2>Igrejas do Minustério de Madureira</2></p>").openPopup();




    //Abaixo icone criado com dimensores de ancora
    var edimar = L.icon({
        iconUrl: './img/casa2.png',
        iconSize: [50, 50],
        iconAnchor: [5, 74],
        popupAnchor: [-3, -76],
    });
    var central = L.icon({
        iconUrl: './img/logomadureira.PNG',
        iconSize: [40],
        iconAnchor: [15, 44],
        popupAnchor: [-3, -76],

    });
    var igreja3 = L.icon({
        iconUrl: './img/logomadureira.PNG',
        iconSize: [40],
        iconAnchor: [10, 34],
        popupAnchor: [-3, -76],
    });
    var igreja6 = L.icon({
        iconUrl: './img/logomadureira.PNG',
        iconSize: [40],
        iconAnchor: [10, 34],
        popupAnchor: [-3, -76],
    });

    var setor101 = L.icon({
        iconUrl: './img/logomadureira.PNG',
        iconSize: [40],
        iconAnchor: [10, 34],
        popupAnchor: [-3, -76],
    });

    var setor109 = L.icon({
        iconUrl: './img/logomadureira.PNG',
        iconSize: [40],
        iconAnchor: [10, 34],
        popupAnchor: [-3, -76],
    });
    var setor110 = L.icon({
        iconUrl: './img/logomadureira.PNG',
        iconSize: [40],
        iconAnchor: [10, 34],
        popupAnchor: [-3, -76],
    });

    var mersjorge = L.icon({
        iconUrl: './img/carcompra.PNG',
        iconSize: [40],
        iconAnchor: [10, 34],
        popupAnchor: [-3, -76],
    });


    L.marker([-3.020969, -59.945979], { icon: edimar }).addTo(map).bindPopup('<h2>casa Matos</h2>');
    L.marker([-3.0184, -59.946336], { icon: central }).addTo(map).bindPopup('<h1>Igreja Central</h1>');
    L.marker([-3.01528, -59.94243], { icon: igreja3 }).addTo(map).bindPopup('<h1>Setor 113</h1>');
    L.marker([-3.01643, -59.94699], { icon: igreja6 }).addTo(map).bindPopup('<h1>Setor 111</h1>');
    L.marker([-3.01134, -59.94572], { icon: setor101 }).addTo(map).bindPopup('<h1>Setor 101</h1>');
    L.marker([-3.02211, -59.94379], { icon: setor109 }).addTo(map).bindPopup('<h1>Setor 109</h1>');
    L.marker([-3.02717, -59.94139], { icon: setor110 }).addTo(map).bindPopup('<h1>Setor 110</h1>');

    L.marker([-3.01874, -59.94550], { icon: mersjorge }).addTo(map).bindPopup('<h1>Mercadinho S. Jorge</h1>');



    var central = L.circle([-3.0184, -59.946336], {
        color: 'red',
        fillColor: 'green',
        fillOpacity: 0.3,
        radius: 100, //tamanho do  circulo em metros
        popupAnchor: [-5, 80],
        


    }).addTo(map).bindPopup('Raio de Ação 100mt');

    

    var igreja3 = L.circle([-3.01528, -59.94243], {
        color: 'red',
        fillColor: 'green',
        fillOpacity: 0.3,
        radius: 100, //tamanho do  circulo em metros
        popupAnchor: [-5, 80],

    }).addTo(map).bindPopup('<h2> Raio de 100mt</h2>');
    

    var igreja6 = L.circle([-3.01643, -59.94699], {
        color: 'red',
        fillColor: 'green',
        fillOpacity: 0.3,
        radius: 100, //tamanho do  circulo em metros
        popupAnchor: [-5, 80],

    }).addTo(map).bindPopup('<h2> Raio de 100mt</h2>');

    var setor101 = L.circle([-3.01134, -59.94572], {
        color: 'red',
        fillColor: 'green',
        fillOpacity: 0.3,
        radius: 100, //tamanho do  circulo em metros
        popupAnchor: [-5, 80],

    }).addTo(map).bindPopup('<h2> Raio de 100mt</h2>');

    var setor109 = L.circle([-3.02211, -59.94379], {
        color: 'red',
        fillColor: 'green',
        fillOpacity: 0.3,
        radius: 100, //tamanho do  circulo em metros
        popupAnchor: [-5, 80],

    }).addTo(map).bindPopup('<h2> Raio de 100mt</h2>');

    var setor110 = L.circle([-3.02717, -59.94139], {
        color: 'red',
        fillColor: 'green',
        fillOpacity: 0.3,
        radius: 100, //tamanho do  circulo em metros
        popupAnchor: [-5, 80],

    }).addTo(map).bindPopup('<h2> Raio de 100mt</h2>');

    var mersjorge = L.circle([-3.01874, -59.94550], {
        color: 'red',
        fillColor: 'blue',
        fillOpacity: 0.3,
        radius: 30, //tamanho do  circulo em metros
        popupAnchor: [-5, 80],

    }).addTo(map).bindPopup("<img src=./img/carcompra.PNG>");

    /*var polygon = L.polygon([
        [-3.016713, -59.945558],//ponto do poligno pata marcão
        [-3.018448, -59.947715],
        [-3.018384, -59.945526]],{ 
        color:'black',
        fillColor:'purple'    
    
    }).addTo(map); //area da central
    
    var bairro = L.polygon([
        [-3.018424, -59.94550],
        [-3.018408, -59.946401],
        [-3.018855, -59.946897]],{ 
        color:'blue',
        fillColor:'purple'    
    
    }).addTo(map).bindPopup('Raio de Ação');*/

    var bairro = L.polygon([
        // [-3.023827, -59.938166],
        [-3.019541, -59.938123],
        [-3.007906, -59.939926],
        [-3.01097, -59.96134],
        [-3.011886, -59.962853],
        [-3.016991, -59.959195],
        [-3.018384, -59.956942],
        [-3.026634, -59.957199],
        [-3.027127, -59.959795],
        [-3.032441, -59.950891],
        [-3.036426, -59.940591],
        [-3.025005, -59.934068],

    ], {
        color: 'blue',
        fillColor: 'none',
       
        fillOpacity: 0.05,
        

    }).addTo(map).bindPopup('Cidade de Deus');

    var braga_mendes = L.polygon([

        [-3.027491, -59.935334],
        [-3.027255, -59.942758],
        [-3.028755, -59.942694],
        [-3.032291, -59.93793],
    ], {
        color: 'green',
        fillColor: 'yellow'

    }).addTo(map).bindPopup('Braga Mendes');

    var alfredo = L.polygon([
        [-3.016241, -59.95928],
        [-3.01487, -59.959216],
        [-3.014634, -59.956276],
        [-3.013498, -59.956448],
        [-3.013563, -59.957827],
        [-3.010702, -59.958073],
        [-3.009084, -59.946964],
        [-3.011677, -59.946985],
        [-3.012834, -59.946728],       
        [-3.016605, -59.946921],      
        [-3.016605, -59.94777],
        [-3.019755, -59.947822],
        [-3.019327, -59.953337],
              
    ], {
        color: 'green',
        fillColor: 'yellow'

    }).addTo(map).bindPopup('Alfredo Nascimento');

    var s_fatima = L.polygon([
        [-3.026527, -59.956276],
        [-3.029248, -59.956298],
        [-3.030641, -59.953895],
        [-3.033383, -59.948595],
        [-3.030234, -59.949796],
        [-3.029891, -59.95074],
        [-3.027812, -59.950504],
        [-3.026805, -59.948959],
        [-3.024512, -59.948852],
        [-3.025284, -59.952929],
        [-3.025734, -59.954903]       
              
    ], {
        color: 'green',
        fillColor: 'yellow'

    }).addTo(map).bindPopup('Nsa. de Fátima');
}


/**/

