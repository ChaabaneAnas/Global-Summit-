const data = [
  {
   spimg:'src="./assest/speakers/speaker1.png" alt=""',
   Name : 'yochai benkler',
   title : '3D Across ArcGIS',
   dsc: '3D is an essential component of many organizations spatial systems of record and engagement. Esri provides 3D capabilities including customizable and tailored solutions for a wide variety of partners and users'
},
{
  spimg:'src="./assest/speakers/speaker2.png" alt=""',
  Name : 'kilnam chon',
  title : 'How to Make Your Web App World-Ready!',
  dsc: 'In this session we will give an overview of what you need to consider when globalizing your web app and show you how Esri’s APIs, SDKs, and component libraries can help you with that task.'
},
{
  spimg:'src="./assest/speakers/speaker3.png" alt=""',
  Name : 'SohYeong Noh',
  title : 'Strategies for Web Developers.',
  dsc: 'This session demonstrates how to design and build useful web mapping apps using the power of ArcGIS. We will explore no-code/low-code options such as map embedding, builders, templates, and ArcGIS Hub'
},
{
  spimg:'src="./assest/speakers/speaker4.png" alt=""',
  Name : 'Julia leds',
  title : 'Building Web Apps with React',
  dsc: 'Empower your spatially-enabled React Apps with modern web technologies. In this session, we’ll demonstrate how you can use Calcite Components and React to create a user-friendly experience.'
},
{
  spimg:'src="./assest/speakers/speaker5.png" alt=""',
  Name : 'lilatretklov',
  title : 'Strategies for Mobile Development.',
  dsc: 'ArcGIS gives mobile and embedded device developers many tools for building useful mapping applications that use the power of GIS. In this session, we will tour these capabilities, for designing and building your apps using the right tools.'
},
{
  spimg:'src="./assest/speakers/speaker6.png" alt=""',
  Name : 'ryan Merkley',
  title : '3D Across ArcGIS',
  dsc: '3D is an essential component of many organizations spatial systems of record and engagement. Esri provides 3D capabilities including customizable and tailored solutions for a wide variety of partners and users'
},
];
const section = document.querySelector('.speakrs');
const container = document.querySelector('.grid-container');
data.forEach((speaker) => {
const card = document.createElement('div')
card.classList.add('s-card')
  card.innerHTML = (`
  <div class="sc-img">
    <img ${speaker.spimg}>
  </div>
  <div class="sc-content">
    <h4>${speaker.Name}</h4>
    <span>${speaker.title}</span>
    <span></span>
    <p>${speaker.dsc}</p>
  </div>
`);
container.appendChild(card)
})

  


