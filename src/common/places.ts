export interface Place {
  'id': string;
  'name': string;
  'phone': string
  'phone2'?: string;
  'street': string;
  'number': string;
  'commune': string;
  'coordinate': string;
  'schedule'?: string;
  'website'?: string;
  'email'?: string;
}

const places: Place[] = [
  {
    'id': '1',
    'name': 'Enesport',
    'phone': '(56) 9 5021 1658',
    'street': 'Av J Manuel Guzmán R ',
    'number': '1302',
    'commune': 'Pudahuel',
    'coordinate': '-33.4312804,-70.7755772'
  },
  {
    'id': '2',
    'name': 'Mas Soccer',
    'phone': '(56-2) 22397609',
    'phone2': '(56-2) 22397394',
    'street': 'Castillo Urízar',
    'number': '2463',
    'commune': 'Macul',
    'coordinate': '-33.4775271,-70.6124869'
  },
  {
    'id': '3',
    'name': 'Cancha de Futbolito Don Manuel',
    'phone': '(56) 9 9542 2622',
    'street': 'Av Senador J Guzmán',
    'number': '144',
    'commune': 'Isla de Maipo',
    'coordinate': '-33.7505065,-70.9080593'
  },
  {
    'id': '4',
    'name': 'Espacio Futbolito LTDA.',
    'phone': '(56-2) 22397394',
    'street': 'Av Los Toros',
    'number': '5321',
    'commune': 'Puente Alto',
    'coordinate': '-33.567247,-70.561764',
    'schedule': 'Lunes a Sábado de 9:00 a 00:00hrs y Domingo de 9:00 a 23:00hrs.',
    'website': 'http://WWW.ESPACIOFUTBOLITO.CL',
    'email': 'contacto@espaciofutbolito.cl'
  },
  {
    'id': '5',
    'name': 'Deportes Alfe Limitada',
    'phone': '(56) 9 9051 3234',
    'street': 'Av José Manuel Infante',
    'number': '2013',
    'commune': 'ÑUÑOA',
    'coordinate': '-33.4494336,-70.6206432'
  },
  {
    'id': '6',
    'name': 'Marbe S a',
    'phone': ' ',
    'street': 'Mons.Escrivá de B.',
    'number': '12352',
    'commune': 'Lo Barnechea',
    'coordinate': 'no corresponde'
  },
  {
    'id': '7',
    'name': 'Club el Rancho Melipilla',
    'phone': '(56) 9 9656 3895',
    'phone2': '8324989',
    'street': 'Av Padre Demetrio Bravo ',
    'number': ' ',
    'commune': 'Melipilla',
    'coordinate': 'no corresponde'
  },
  {
    'id': '8',
    'name': 'Terrasoccer',
    'phone': '56 2 2237 0967',
    'phone2': '56 9 82683354',
    'street': 'Williams Rebolledo ',
    'number': '1800',
    'commune': 'ÑUÑOA',
    'coordinate': '-33.4718222,-70.6215581',
    'schedule': 'Lunes a Domingo de 9.00 a 23.00',
    'website': 'http://www.terrasoccer.cl/',
    'email': 'terra.soccer.nunoa@gmail.com'
  },
  {
    'id': '9',
    'name': 'Carlos encina',
    'phone': ' ',
    'street': ' ',
    'number': ' ',
    'commune': ' ',
    'coordinate': ' ',
    'schedule': ' ',
    'website': 'http://www.carlosencinas.cl/'
  },
  {
    'id': '10',
    'name': 'Club Futbol 7',
    'phone': '02 8578251 (Mall Pza Sur)',
    'street': 'Serafín Zamora ',
    'number': '127',
    'commune': 'Santiago',
    'coordinate': '-33.5203164,-70.6011829',
    'email': 'mps@elclubfutbol7.cl'
  },
  {
    'id': '11',
    'name': 'Club Soccer',
    'phone': '(56) 2 2237 9026',
    'street': 'Williams Rebolledo ',
    'number': '1788',
    'commune': 'Ñuñoa',
    'coordinate': '-33.4718421,-70.6222044',
    'website': ' '
  },
  {
    'id': '12',
    'name': 'Futbolito Maipu',
    'phone': '(2) 2301 2491',
    'street': 'avenida tres poniente',
    'number': '2600',
    'commune': 'Maipu',
    'coordinate': '-33.5043206,-70.7824134',
    'schedule': 'Lunes a Domingo de 9.00 a 01.00',
    'website': 'https://bit.ly/2BMeEVT',
    'email': 'contacto@futbolitomaipu.cl'
  },
  {
    'id': '13',
    'name': 'Soccer Pro',
    'phone': '(56) 2 2237 9026',
    'street': 'Francisco Meneses',
    'number': '1580',
    'commune': 'Ñuñoa',
    'coordinate': '-33.4715762,-70.6196143',
    'schedule': ' ',
    'website': 'http://www.soccerpro.cl'
  },
  {
    'id': '14',
    'name': 'Club Pato Cornejo',
    'phone': '988087925',
    'phone2': '2217-2031 / 2217-3071',
    'street': ' ',
    'number': ' ',
    'commune': ' ',
    'coordinate': ' ',
    'schedule': 'Lunes a Viernes 10:00 a 23:00hrs Sábado 10:00 a 20:00hrs Domingo 9:00 a 14:00hrs',
    'website': 'http://www.clubpatocornejo.cl',
    'email': 'info@clubpatocornejo.cl'
  },
  {
    'id': '15',
    'name': 'Centro Deportivo Bollenar',
    'phone': '(56) 9 7369 8931',
    'street': 'Las Culebras Verdes',
    'number': '1',
    'commune': 'MELIPILLA',
    'coordinate': '-33.5671828,-71.2141779'
  },
  {
    'id': '16',
    'name': 'Pro Club',
    'phone': '232167826',
    'street': 'Av La Montaña ',
    'number': '11',
    'commune': 'Lampa',
    'coordinate': '-33.3266442,-70.7559236',
    'website': 'http://www.proclub.cl'
  },
  {
    'id': '17',
    'name': 'Complejo Deportivo Don Oscar',
    'phone': '979288480',
    'street': 'Av Los Pajaritos ',
    'number': '4155',
    'commune': 'Maipu',
    'coordinate': '-33.4861848,-70.7493336',
    'website': 'http://www.donoscar.cl'
  },
  {
    'id': '18',
    'name': 'Canchas Futbolito las Palmeras de Albano',
    'phone': '23129530',
    'street': 'AV. fernandez albano ',
    'number': '200',
    'commune': 'La cisterna',
    'coordinate': '-33.5238911,-70.6595479'
  },
  {
    'id': '19',
    'name': 'Jardin Vivero Bora Bora',
    'phone': '24191686',
    'street': 'Av Camilo Henríquez ',
    'number': '3527',
    'commune': 'Puente alto',
    'coordinate': '-33.567983,-70.5556128',
    'website': 'http://www.borafutbol.cl'
  },
  {
    'id': '20',
    'name': 'Soccer Arena S.A.',
    'phone': '56974974295',
    'phone2': '2 2267 8810',
    'street': 'Av José Joaquín Prieto Vial ',
    'number': '7600',
    'commune': 'La Cisterna',
    'coordinate': '-33.5222891,-70.6784592',
    'schedule': 'Lunes a Domingo de 9.00 a 00.00',
    'website': 'http://www.soccerarena.cl',
    'email': 'reservas@soccerarena.cl'
  },
  {
    'id': '21',
    'name': 'Sierra 10',
    'phone': '9 8846 4828',
    'street': 'Lo Blanco',
    'number': '2795',
    'commune': 'La pintana',
    'coordinate': '-33.5733763,-70.7122723',
    'website': ' '
  },
  {
    'id': '22',
    'name': 'Cristo Salva Arriendo de Canchas',
    'phone': '222389813',
    'street': 'av. Macul',
    'number': '2645',
    'commune': 'Macul',
    'coordinate': '-33.4789017,-70.6013945'
  },
  {
    'id': '23',
    'name': 'Cancha Futbolito Diagonal Oriente',
    'phone': '224469222',
    'street': 'Diagonal Oriente',
    'number': '1696',
    'commune': 'Providencia',
    'coordinate': '-33.4457918,-70.6117942',
    'schedule': 'Lunes a Domingo de 8.00 a 22.00',
    'website': 'http://www.providencia.cl/centro-deportivo-diagonal-oriente'
  },
  {
    'id': '24',
    'name': 'Canchas Futbolito, PUC San Joaquín',
    'phone': '223544738',
    'street': ' ',
    'number': ' ',
    'commune': 'Macul',
    'coordinate': ' '
  },
  {
    'id': '25',
    'name': 'Campo Deportivo Quilin Limitada',
    'phone': '224808351',
    'street': 'av. Quilin',
    'number': '2501',
    'commune': 'macul',
    'coordinate': '-33.485392,-70.6102171',
    'schedule': 'Lunes a Viernes 09:00 a 22:00hrs Sábado, Domingo y Festivo 09:00 a 23:00hrs',
    'website': 'https://www.recrear.cl/web/campo-deportivo/'
  },
  {
    'id': '26',
    'name': 'Corporacion club de tenis estadio nacional',
    'phone': '222370897',
    'street': 'Av. Grecia',
    'number': '2001',
    'commune': 'nuñoa',
    'coordinate': '-33.4625264,-70.6135749',
    'schedule': 'Martes a Viernes 08:00 a 21:30hrs Sábado 08:00 a 18:00hrs, Domingo 08:00 a 17:00hrs',
    'website': 'http://www.tenisnacional.cl/'
  },
  {
    'id': '27',
    'name': 'Complejo deportivo mundo Sport',
    'phone': '227526650',
    'street': 'El libano',
    'number': '5001',
    'commune': 'macul',
    'coordinate': '-33.4967783,-70.5949198',
    'website': 'http://www.mundosport.cl/'
  },
  {
    'id': '28',
    'name': 'Canchas de Futbolito',
    'phone': '950056406',
    'street': 'San Jose de la estrella',
    'number': '777',
    'commune': 'la florida',
    'coordinate': '-33.5531922,-70.5800035'
  },
  {
    'id': '29',
    'name': 'Los Cancheros',
    'phone': '995418771',
    'street': 'Carlos Ossandon ',
    'number': '40',
    'commune': 'La reina',
    'coordinate': '-33.4498273,-70.5462111',
    'website': 'http://www.loscancheros.cl/'
  },
  {
    'id': '30',
    'name': 'Canchas Soto Aguilar',
    'phone': '22543166',
    'street': 'Soto aguilar',
    'number': '1509',
    'commune': 'San Miguel',
    'coordinate': '-33.4858361,-70.6584653'
  },
  {
    'id': '31',
    'name': 'Club Palestino',
    'phone': '222129451',
    'street': 'Kennedy',
    'number': '9351',
    'commune': 'Las Condes',
    'coordinate': '-33.3881484,-70.5454845',
    'website': 'http://clubpalestino.cl/',
    'email': 'info@clubpalestino.cl'
  },
  {
    'id': '32',
    'name': 'Canchas Soocer Pro Ñuñoa',
    'phone': '973885078',
    'street': 'Francisco Meneses ',
    'number': '1580',
    'commune': 'Ñuñoa',
    'coordinate': '-33.4715807,-70.6196143',
    'website': 'http://soccerpro.cl/'
  },
  {
    'id': '33',
    'name': 'Canchas Parque Centenario',
    'phone': ' ',
    'street': 'Centenario',
    'number': '2221',
    'commune': 'Pedro Aguirre Cerda',
    'coordinate': '-33.4760409,-70.6718241',
    'website': 'http://www.cordesansantiago.cl/'
  },
  {
    'id': '34',
    'name': 'Terra soccer',
    'phone': '222370967',
    'phone2': '56982683354',
    'street': 'Williams Rebolledo ',
    'number': '1800',
    'commune': 'Ñuñoa',
    'coordinate': '-33.4718222,-70.6215581',
    'website': 'http://www.terrasoccer.cl/',
    'email': 'terra.soccer.nunoa@gmail.com'
  },
  {
    'id': '35',
    'name': 'Cancha de Futbolito',
    'phone': '997904079',
    'street': 'Palena',
    'number': '743',
    'commune': 'Estacion central',
    'coordinate': '-33.4718754,-70.7092674'
  },
  {
    'id': '36',
    'name': 'Club Oriente',
    'phone': '56223031232',
    'phone2': '56223031216',
    'street': 'Nueva Bilbao',
    'number': '9495',
    'commune': 'Las condes',
    'coordinate': '-33.4292111,-70.5336402',
    'website': 'http://www.cluboriente.cl/',
    'email': 'contacto@canchasoriente.cl'
  },
  {
    'id': '37',
    'name': 'Massu Tenis',
    'phone': '223406342',
    'street': 'Padre Hurtado sur',
    'number': '2650',
    'commune': 'Las condes',
    'coordinate': '-33.4299877,-70.5420937',
    'website': 'http://www.massutenis.com/'
  },
  {
    'id': '38',
    'name': 'Liga Amigos del Futbol',
    'phone': '222988438',
    'street': 'Quilin',
    'number': '8809',
    'commune': 'peñalolen',
    'coordinate': '-33.5013425,-70.5466761',
    'website': 'http://www.laf.cl/'
  },
  {
    'id': '39',
    'name': 'Canchas Futbolito',
    'phone': '987654321',
    'street': 'Covadonga ',
    'number': '399',
    'commune': 'La cisterna',
    'coordinate': '-33.5249657,-70.6562949'
  },
  {
    'id': '40',
    'name': 'Club de Tenis Tobalaba',
    'phone': '223266595',
    'street': ' ',
    'number': ' ',
    'commune': 'La Reina',
    'coordinate': ' ',
    'website': 'http://www.canchasdetenis.cl/club-de-tenis-tobalaba-biomachine/'
  },
  {
    'id': '41',
    'name': 'Futbolito Greenland',
    'phone': '56225955130',
    'street': 'Laguna del Maule',
    'number': '392',
    'commune': 'Estacion central',
    'coordinate': '-33.457361,-70.7255178',
    'website': 'http://futbolitogreenland.cl/',
    'email': 'contacto@futbolitogreenland.cl'
  },
  {
    'id': '42',
    'name': 'Canchas de Tenis PArque Brasil',
    'phone': '222211238',
    'street': 'Punta Arenas ',
    'number': '6711',
    'commune': 'La Granja',
    'coordinate': '-33.5187546,-70.6156403',
    'website': 'https://www.municipalidadlagranja.cl/patrimonio/'
  },
  {
    'id': '43',
    'name': 'Soccer Pro Macul',
    'phone': '975854238',
    'street': 'Castillo Urizar',
    'number': '2463',
    'commune': 'Macul',
    'coordinate': '-33.4775271,-70.6124923',
    'website': 'https://www.facebook.com/soccerpro.cl/'
  },
  {
    'id': '44',
    'name': 'Canchas Quimey',
    'phone': '228416326',
    'street': 'Portales',
    'number': '2744',
    'commune': 'San Bernardo',
    'coordinate': '-33.623308,-70.7033946',
    'website': 'http://www.canchasquimey.cl/'
  },
  {
    'id': '45',
    'name': 'Pasco Club',
    'phone': '982129614',
    'street': 'Cerro de Pasco',
    'number': '1372',
    'commune': 'Providencia',
    'coordinate': '-33.4420122,-70.5989744',
    'website': 'http://www.pascoclub.cl/'
  }
]

export default places
