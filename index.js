// No 1 Question 

function instagram(Handleofauthor, content, Imagelink, Numberofviews, Numberoflikes){
this.Handleofauthor = Handleofauthor;
this.content = content;
this.Imagelink = Imagelink;
this.Numberofviews = Numberofviews;
this.Numberoflikes = Numberoflikes;
}

//No 2 Question
let tee = new instagram("Tee", "Being Happy is a choice", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwearehomesforstudents.com%2Fblog%2Fsimple-ways-to-make-yourself-happy&psig=AOvVaw2w8AuRBz67wd4w6toZCguh&ust=1677506614595000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCPixm_Wss_0CFQAAAAAdAAAAABAD", "450", "400")
console.log(tee);

let rythm = new instagram("Rhythm", "#Baddie", "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia1.popsugar-assets.com%2Ffiles%2Fthumbor%2FCX4iUNVhGZp-PxaBcPQx-50evTU%2Ffit-in%2F2048xorig%2Ffilters%3Aformat_auto-!!-%3Astrip_icc-!!-%2F2017%2F11%2F01%2F801%2Fn%2F1922441%2Ftmp_kxURtd_e3a880309601db42_eye-for-ebony-399310.jpg&imgrefurl=https%3A%2F%2Fwww.popsugar.com%2Fsmart-living%2FWhat-Makes-Person-Happy-44206058&tbnid=1xyFUcFvFgWEJM&vet=12ahUKEwiBss75rbP9AhWVkycCHWxdCxwQMygDegUIARDjAQ..i&docid=nTNlj72Gfyo7EM&w=2048&h=1536&q=happy&hl=en&ved=2ahUKEwiBss75rbP9AhWVkycCHWxdCxwQMygDegUIARDjAQ", "6000", "5800")
console.log(rythm);

//No 3 Question
function createPerson(name, age, location){
    return {
    name: name,
    age: age,
  location: location,
    };
  }
   const dawodu = createPerson("Musa,Dawodu", 19, "Lekki")
  console.log(dawodu)
  
  function createJambscores(Eng, Govt, Lit, Crk) {
    return {
      Eng: Eng,
      Govt: Govt,
      Lit: Lit,
      Crk: Crk,
    };
    }
  const dawod = createJambscores(70,85,82,94)
  console.log(dawod)
  dawodu.scores = new createJambscores(70,85,82,94)
  console.log(dawodu)

  //No 4 Question

//There are various ways we can clone an object
//a) Object assign method
 const firstphone = {
    Brand: "Apple",
    Name: "Iphone",
    Edition: "14",
  };
 const Secondphone = Object.assign({}, firstphone)
 console.log(firstphone)
 console.log(Secondphone)
 
 Secondphone.Edition = 13;
 //After the change
 console.log({Secondphone})
 
 //b) The Spread Syntax Method
 const Thirdphone = {...firstphone};
 Thirdphone.Edition = "X";
 console.log({Thirdphone})
 
 //c) The JSON.parse method
 const Fourthphone = JSON.parse;
 Fourthphone.Edition = 12;
 console.log({Fourthphone})
 
 //NO 5 Question 
 const presidentialCanditates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
 }
  