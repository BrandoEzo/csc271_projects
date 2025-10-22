var zodiacSign = "Cancer";
var birthMonth = "July";
var birthdate = 14;
var luckyNum = 66;
var signDescription = "emotional, nurturing, and intuitive, as well as loyal and protective of their loved ones";
var believeAstrology = false;

document.getElementById("sign").innerHTML = "Zodiac Sign:" + zodiacSign;
document.getElementsByClassName("birthday")[0].innerHTML = "Birthday: " +birthMonth + " " + birthdate + "th";
document.getElementsByClassName("luckyNum")[0].innerHTML = "Lucky Number: " + luckyNum;
document.getElementsByTagName("p")[0].innerHTML = "Horoscope: " + signDescription;
document.getElementsByTagName("p")[1].innerHTML += believeAstrology ? "I believe in Astrology!" : "I do not believe in Astrology."

var cancerMoodRating = 4.6;
var saggitariusMoodRating = 5.0;
var ariesMoodRating = 4.2;
var avgRating = (cancerMoodRating + saggitariusMoodRating + ariesMoodRating)/3
document.getElementsByTagName("p")[2].innerHTML = "Mood Rating for Cancer is " + cancerMoodRating + " out of 5. The average mood rating of Cancer, Saggitarius and Ares is " + avgRating.toFixed(2) + " out of 5.";


var signs = [ "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"];
var mySign = signs[6];
var p1Sign = signs[11];
var p2Sign = signs[3];

document.getElementsByTagName("p")[4].innerHTML = "My zodiac sign is "+ mySign +". Emmanuel\'s zodiac sign is "+ p2Sign + ". Marven\'s zodiac sign is " + p1Sign +".";

var signDescriptions = ["Today is a day for new beginnings. Embrace change and seize opportunities.","Your determination will lead to success today. Stay focused on your goals.", "Communication is key today. Express yourself clearly and listen to others.", "Trust your intuition. It will guide you in making the right decisions.", "Your creativity shines today. Use it to inspire and lead others.", "Pay attention to the details. Your meticulous work will pay off.", "Balance is essential. Find harmony in all aspects of your life.", "Embrace transformation. Let go of what no longer serves you.", "Adventure awaits. Explore new horizons and expand your horizons.", "Hard work leads to success. Keep pushing toward your goals.", "Your unique perspective is an asset. Share your ideas with others.", "Trust your emotions. They will guide you in making the right choices."];
var myDescriotion = signDescriptions[6];
var p1Description = signDescriptions[11];
var p2SignDescrption = signDescriptions[3];

document.getElementsByTagName("p")[5].innerHTML = mySign + " Horoscope: " + myDescriotion;
document.getElementsByTagName("p")[6].innerHTML = p1Sign + " Horoscope: " + p1Description;
document.getElementsByTagName("p")[7].innerHTML = p2Sign + " Horoscope: " + p2SignDescrption;