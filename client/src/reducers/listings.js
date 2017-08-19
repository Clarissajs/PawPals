// dummy data
const defaultState = {
  listings: [{"id":1,"username":"lboxen0","name":"Lona Boxen","firstName":"Lona","lastName":"Boxen","email":"lboxen0@cornell.edu","hashPass":"WDY-773180uaNViZINVob+FHV","salt":"YVO-534538hqJEqVIFTsi+HAF"},
{"id":2,"username":"gmcnicol1","name":"Gottfried McNicol","firstName":"Gottfried","lastName":"McNicol","email":"gmcnicol1@cdbaby.com","hashPass":"ELQ-383417bkRInPWVHeb+RFD","salt":"REQ-028540hqPYmHJIAwg+GRF"},
{"id":3,"username":"pareles2","name":"Priscella Areles","firstName":"Priscella","lastName":"Areles","email":"pareles2@tripadvisor.com","hashPass":"VSP-167836jmLPeZYTApc+DJS","salt":"PIH-759634vtFDlPGUVjp+SOA"},
{"id":4,"username":"agawith3","name":"Aloisia Gawith","firstName":"Aloisia","lastName":"Gawith","email":"agawith3@mtv.com","hashPass":"RMJ-237379xvGUhJWGFpf+YBX","salt":"XNS-827845tvPJdIQWVcf+XZO"},
{"id":5,"username":"emunn4","name":"Erv Munn","firstName":"Erv","lastName":"Munn","email":"emunn4@soundcloud.com","hashPass":"SXN-326937xyOXqWIQUbq+AFB","salt":"MPO-653559siUPcOZTHqc+PEJ"},
{"id":6,"username":"htrelease5","name":"Henka Trelease","firstName":"Henka","lastName":"Trelease","email":"htrelease5@quantcast.com","hashPass":"YML-680288bnQCpUQNIzi+RUX","salt":"UBZ-915871kwNTnIJRBka+XLI"},
{"id":7,"username":"warmit6","name":"Winslow Armit","firstName":"Winslow","lastName":"Armit","email":"warmit6@last.fm","hashPass":"IEK-443555ocBLyGVPMfh+OLA","salt":"EIR-213498jtVZjIQBCqf+PKN"},
{"id":8,"username":"dtrinder7","name":"Derek Trinder","firstName":"Derek","lastName":"Trinder","email":"dtrinder7@newsvine.com","hashPass":"YFP-983144faQCxKAHEne+WVL","salt":"PBI-431285udRWpOVGNfq+YPE"},
{"id":9,"username":"rshaudfurth8","name":"Royall Shaudfurth","firstName":"Royall","lastName":"Shaudfurth","email":"rshaudfurth8@abc.net.au","hashPass":"BDV-408746flTKjCQJZwd+IKB","salt":"QSJ-064834sfTZsFXBEjp+LYP"},
{"id":10,"username":"sgarrold9","name":"Sherrie Garrold","firstName":"Sherrie","lastName":"Garrold","email":"sgarrold9@nydailynews.com","hashPass":"YSA-223511ynZQqLZQUib+JGV","salt":"KUN-885129weCWpNGIAwz+TFD"}]
};

const listings = (state=defaultState, action) => {

  if (action.type === 'UPDATE_LISTINGS') {
    return {...state, listings: action.payload};
  }

  return state;
}

export default listings