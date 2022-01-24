let _videosHTML = "";

const videos = [
  {id:1,title:"Abersoch",url:"yZ4Vm3iT-go",image:"Abersoch.jpg",activity:"Paramotor",order:1,year:2018,description:"21-02-2018 - Black Rock Sands to Abersoch. (Camera and Edit Jason Grunill)"},
  {id:2,title:"Alton Towers",url:"4sY4PLUxyDE",image:"Alton-Towers.jpg",activity:"Paramotor",order:2,year:2019,description:"24-08-2019 - School Reunion tribute to Ian Barnes. (Camera and Edit Jason Grunill)"},
  {id:3,title:"Balterley",url:"zuUJBipJOgo",image:"Balterley.jpg",activity:"Paramotor",order:3,year:2019,description:"30-03-2019 - Mission Balterley. (Camera and Edit Jason Grunill)"},
  {id:4,title:"Chase A",url:"Qiwn9Cq-gws",image:"Chase-A.jpg",activity:"Paramotor",order:4,year:2018,description:"25-11-2018 - Chase flight. (Camera and Edit Jason Grunill)"},
  {id:5,title:"Cloud A",url:"EjU8qW25Qao",image:"Cloud-A.jpg",activity:"Paramotor",order:5,year:2018,description:"26-01-2018 - Cloud flight. (Camera and Edit Jason Grunill)"},
  {id:6,title:"Cloud B",url:"cpW1-Old-SY",image:"Cloud-B.jpg",activity:"Paramotor",order:6,year:2018,description:"17-02-2018 - Cloud flight. (Camera and Edit Jason Grunill)"},
  {id:7,title:"Devon",url:"n8KNdJSHCw8",image:"Devon.jpg",activity:"Paramotor",order:7,year:2018,description:"04-08-2018 - Devon flyin. (Combined camera footage from Jason Grunill, JPD and CD)"},
  {id:8,title:"Legend",url:"R4DA1uIRals",image:"Legend.jpg",activity:"Paramotor",order:8,year:2018,description:"2018 - Tribute to JS a true legend. (Camera and Edit Jason Grunill)"},
  {id:9,title:"Llandudno",url:"JmlPlmjE9ss",image:"Llandudno.jpg",activity:"Paramotor",order:9,year:2015,description:"06-10-2015 - Beach flight. (Camera and Edit Jason Grunill)"},
  {id:10,title:"Parafest 2018",url:"DlsQpSk6Who",image:"Parafest-2018.jpg",activity:"Paramotor",order:10,year:2018,description:"2018 - Parafest annual flying festival held this year at Llanbedr. (Camera and Edit Jason Grunill)"},
  {id:11,title:"Snowdon 2018",url:"3UnE10D8cFI",image:"Snowdon-2018.jpg",activity:"Paramotor",order:11,year:2018,description:"21-02-2018 - Black Rock Sands to Snowdon. Just short of the summit due to cloud cover. (Camera and Edit Jason Grunill)"},
  {id:12,title:"Stafford Castle",url:"EsuXYr16ieY",image:"Stafford-Castle.jpg",activity:"Paramotor",order:12,year:2019,description:"23-03-2019 - Barlaston to Stafford Castle. (Camera and Edit Jason Grunill)"},
  {id:13,title:"The Wild Boys",url:"LjvnaeTtIRU",image:"The-Wild-Boys.jpg",activity:"Paramotor",order:13,year:2019,description:"05-05-2019 - Quarry flight. (Camera and Edit Jason Grunill)"},
  {id:14,title:"The Wild Geese",url:"cOb7jvDIJaI",image:"The-Wild-Geese.jpg",activity:"Paramotor",order:14,year:2019,description:"08-09-2019 - Amazing flight. I was joined by a flock of geese as I flew along the canal. (Camera and Edit Jason Grunill)"},
  {id:15,title:"Trike",url:"d2-1bN1-N9s",image:"Trike.jpg",activity:"Paramotor",order:15,year:2019,description:"10-11-2019 - JG and KG first trike flights on KG trike. (Camera and Edit Jason Grunill, thanks to KG for extra footage)"},
  {id:16,title:"Yellow",url:"OSsSV2dmysY",image:"Yellow.jpg",activity:"Paramotor",order:16,year:2018,description:"19-05-2018 - Footdragging rapeseed fields. Flyby at the model flyers weekend. Landed out in a field full of cows because of heavy rain on the way back. Rescued by JS. (Camera and Edit Jason Grunill)"},
  {id:17,title:"Edge Top",url:"557xLuPDkNw",image:"Edge-Top.jpg",activity:"Paraglide",order:17,year:2015,description:"04-01-2015 - Edge Top. (Camera and Edit Jason Grunill)"},
  {id:18,title:"Treak Cliff",url:"CzPn4VFYPcQ",image:"Treak-Cliff.jpg",activity:"Paraglide",order:18,year:2015,description:"01-05-2015 - Birthday flight thermals to 3000ft and 06-02-2015 Snow flight. (Camera and Edit Jason Grunill)"},
  {id:19,title:"Betton Pool",url:"nGq_pVExarg",image:"Betton-Pool.jpg",activity:"Wakeboard",order:19,year:2018,description:"18-11-2018 - Wakeboard session"},
  {id:20,title:"Raley",url:"7U0MNCZSXqw",image:"Raley.jpg",activity:"Wakeboard",order:20,year:2011,description:"27-03-2011 - Wakeboard session at Blackpool Wake Park"},
  {id:21,title:"Blackpool",url:"wxrsrKFM6nU",image:"Blackpool.jpg",activity:"Kitesurf",order:21,year:2018,description:"13-09-2018 - Kitesurf session. (Camera and Edit Jason Grunill)"},
  {id:22,title:"La Mata",url:"MhutHIObN3c",image:"La-Mata.jpg",activity:"Kitesurf",order:22,year:2019,description:"12-06-2019 - Kitesurf session. (Camera Rebecca, Edit Jason Grunill)"},
  {id:23,title:"Snow In June",url:"pVg-LlASjJU",image:"Snow-In-June.jpg",activity:"Snowboard",order:23,year:2018,description:"June-2018 - JG Snowboarding and JE Skiing at Chill Factor"},
  {id:24,title:"Piper Archer",url:"uyFLhvaAOlw",image:"Piper-Archer.jpg",activity:"Plane",order:24,year:2018,description:"July-2018 - JD takes JG and KM on a flight over Snowdon. KM takes over controls on flight out, JG takes over controls on flight home. (Camera and Edit Jason Grunill)"},
  {id:25,title:"Skydive",url:"FpSbgRd5Lfw",image:"Skydive.jpg",activity:"Skydive",order:25,year:2000,description:"January-2000 - JG and DG tandem Skydive, Langar airfield."},
  {id:26,title:"Stafford Castle 2",url:"lEca8eG18hQ",image:"Stafford-Castle-2.jpg",activity:"Paramotor",order:26,year:2020,description:"25-05-2020 Barlaston to Stafford Castle JG, CS, KG, AF. (Camera and Edit Jason Grunill)"},
  {id:27,title:"The Return",url:"wDhjB02C4MQ",image:"The-Return.jpg",activity:"Paramotor",order:27,year:2020,description:"16-05-2020 Return to Barlaston. (Camera and Edit Jason Grunill)"},
  {id:28,title:"Angel",url:"RA08xzVucXk",image:"Angel.jpg",activity:"Paramotor",order:28,year:2020,description:"19-05-2020 Barlaston. (Camera and Edit Jason Grunill)"},
  {id:29,title:"Beeston Castle",url:"F2IldKuoYWQ",image:"Beeston-Castle.jpg",activity:"Paramotor",order:29,year:2020,description:"27-05-2020 Beeston Castle and Peckforton Castle. (Camera and Edit Jason Grunill)"},
  {id:30,title:"Freeride 19M",url:"a7qxT6N-WUE",image:"Freeride-19M.jpg",activity:"Paramotor",order:30,year:2020,description:"08-06-2020 First flight on Jon's Ozone Freeride 19M. (Camera and Edit Jason Grunill)"},
  {id:31,title:"Landboarding",url:"xe0wClCPP50",image:"Landboarding.jpg",activity:"Landboard",order:31,year:1989,description:"1989 Landboarding Age 18"},
  {id:32,title:"St Annes",url:"meRg557HaDA",image:"St-Annes.jpg",activity:"Kitesurf",order:32,year:2018,description:"22n29-09-2018 - Kitesurf session. (Camera and Edit Jason Grunill)"},
  {id:33,title:"Vision Ascent",url:"ILpaSPLwbDw",image:"Vision-Ascent.jpg",activity:"Paramotor",order:33,year:2020,description:"02-07-2020 Vision Part 1 - Cloud flight ascent to 8500ft. (Camera and Edit Jason Grunill)"},
  {id:34,title:"Vision Descent",url:"T1QKAtq6Sas",image:"Vision-Descent.jpg",activity:"Paramotor",order:34,year:2020,description:"02-07-2020 Vision Part 2 - Cloud flight descent from 8500ft. (Camera and Edit Jason Grunill)"},
  {id:35,title:"Legend 2",url:"njdAHL_LNHQ",image:"Legend-2.jpg",activity:"Paramotor",order:35,year:2020,description:"12-07-2020 Whiston and Barlaston Flypast tribute to JS. (Camera and Edit Jason Grunill)"},
  {id:36,title:"Rock The Boat",url:"pVs48-OJaFY",image:"Rock-The-Boat.jpg",activity:"Sailing",order:36,year:2018,description:"22-07-2018 Sailing the RS Venture at Rhos-on-Sea. (Camera and Edit Jason Grunill)"},
  {id:37,title:"Kite School",url:"ls9m_1JbIYU",image:"Kite-School.jpg",activity:"Kitesurf",order:37,year:2020,description:"02-08-2020 Jase and Tom St Annes. Tom's Kitesurfing Lessons - Day 1. (Camera and Edit Jason Grunill)"},
  {id:38,title:"Engine Out Practice",url:"g4vhfkqnEGQ",image:"Engine-Out-Practice.jpg",activity:"Paramotor",order:38,year:2020,description:"30-07-2020 Engine out practice (1000ft, 1000ft and 4000ft) with an XC to Sandon Hall Drive-In. (Camera and Edit Jason Grunill)"},
  {id:39,title:"Kite School 2",url:"--Ugr7XHjdE",image:"Kite-School-2.jpg",activity:"Kitesurf",order:39,year:2020,description:"05-09-2020 Jase and Tom St Annes. Tom's Kitesurfing Lessons - Day 2"},
  {id:40,title:"Touch And Go",url:"WkujXRObVeM",image:"Touch-And-Go.jpg",activity:"Paramotor",order:40,year:2021,description:"08-03-2021 JG, JB and AF Touch and Go practice plus bonus JG new years eve snow flight over home. (Camera and Edit Jason Grunill)"},
  {id:41,title:"Caravan",url:"FArl1GFprQs",image:"Caravan.jpg",activity:"Paramotor",order:41,year:2021,description:"18-04-2021 The Chosen Few evening flight. Big thanks to our hosts Rob and Dan. (Camera and Edit Jason Grunill, thanks to Rob for ground footage)"},
  {id:42,title:"Windsurf 1988",url:"PuesEMvFrx4",image:"Windsurf-1988.jpg",activity:"Windsurf",order:42,year:1988,description:"The only surviving footage of me Windsurfing from over 30 years ago! Image stabilization was rubbish back then. (Edit Jason Grunill)"},
  {id:43,title:"Blithfield Bumps",url:"dQNN5bmq-u4",image:"Blithfield-Bumps.jpg",activity:"Paramotor",order:43,year:2021,description:"22-04-2021 Aston Marina to Blithfield Reservoir. (Camera and Edit Jason Grunill and AF)"},
  {id:44,title:"Wake Me Up",url:"K-8N9eK6Hno",image:"Wake-Me-Up.jpg",activity:"Wakeboard",order:44,year:2021,description:"09-10-2021 Sheffield Wake Park. (Camera and Edit Jason Grunill)"},
  {id:45,title:"Snowdon 2022",url:"tD9V0hrTs9A",image:"Snowdon-2022.jpg",activity:"Paramotor",order:45,year:2022,description:"12-01-2022 - Black Rock Sands to Snowdon. Finally made the summit after coming so close in 2018. (Camera and Edit Jason Grunill)"},
];

function formatVideosHTML(value) {
  _videosHTML +=
  `
  <div class="col-sm-6 col-md-4">
    <br /><br />
    <h6>${value.title}</h6>
    <h6 style="font-size:0.5em">${value.activity} (${value.year})</h6>
    <a href="https://youtu.be/${value.url}" target="_blank">
      <img src="/images/${value.image}" class="img-fluid" style="border: 5px solid firebrick;" />
    <a/>
  </div>
  `
}

function getVideosHTML(myFilter){
  _videosHTML = "";
  //Sort videos array by year desc
  let videosSortedByYearDesc = videos.sort(function(a, b){return b.year - a.year})
  //Filter Sorted Array by Activity
  myFilter === "All" ? videosSortedByYearDesc.forEach(formatVideosHTML) : videosSortedByYearDesc.filter((value)=>{return value.activity === myFilter}).forEach(formatVideosHTML);
  return _videosHTML;
}


