
// Opens/hides menu upon menu icon click

var menulist = document.getElementById("menulist");
menulist.style.maxheight = "0px";

function togglemenu(){
    if(menulist.style.display == "none")
    {
        menulist.style.display = "block";
    }
    else
    {
        menulist.style.display = "none";
    }
    }

    //Defining data arrays
    let bedtimes = ["22:34","19:16","23:47","19:35","21:54","23:55","19:17","22:35","23:05"];
    let woketimes = ["10:14","08:18","09:35","10:30","06:35","08:35","09:25","11:30","12:35"];
    let days = [1, 2, 3, 4, 5, 6, 0, 1, 2];

    //Adds user input data to arrays
    function addbedtime(){
        bedtimes.push(bedtime.value)
    }

    function addwoketime(){
        woketimes.push(woketime.value)
    }

    //Adds the day the user input data on to array
    function addday(){
        const d = new Date();
        let day = d.getDay();
        days.push(day);
    }


    // Converts time that is sent to function from minutes to hh/mm
    function timeconvert(convertant){
        let hour = Math.floor(convertant/60);
        let min = Math.floor((convertant/60 - hour)*60);
        const zeroPad = (num, places) => String(num).padStart(places, '0')
        let converted = zeroPad(hour,2) + ":" + zeroPad(min,2);
        return converted;
    }

    // Converts time that is sent to function from hh/mm to minutes
    function minconver(convertant){
        let value = String(convertant);
        var hour = value.substring(0,2);
        var min = value.substring(3,5);
        hour = parseInt(hour);
        min = parseInt(min);
        let resultant = (hour*60)+min
        return resultant
    }

    // Calculates average time users went to bed from array
    function avgsleep(){
            let totalsleep = 0
        for (let i = 0; i < bedtimes.length; i++) {
            let resultant = minconver(bedtimes[i]);

            totalsleep += resultant;
          }
        console.log(totalsleep/bedtimes.length)
        return totalsleep/bedtimes.length;
    }

    // Calculates average time users woke up from array
    function avgwoke(){
       
            let totalsleep = 0
        for (let i = 0; i < woketimes.length; i++) {
            let resultant = minconver(woketimes[i]);

            totalsleep += resultant;
          }
        console.log(totalsleep/bedtimes.length)
        return totalsleep/bedtimes.length;
    }

    // Calculates the time difference between two sets of time converted to minutes
    function calcdif(one,two){        
        let sleep = one;
        let woke = two;        
        let difference = woke - sleep;

        if(sleep > woke)
        {
            let hour = Math.floor((difference+1440)/60);
            let min = Math.floor(((difference+1440)/60 - hour)*60);
            let converted = hour + "hr " + min + "min";
            return converted;
        }
        else{
            let hour = Math.floor((difference)/60);
            let min = Math.floor(((difference)/60 - hour)*60);
            let converted = hour + "hr " + min + "min";
            return converted;
        }
    }

    // Calculates time the active user have slept
    function calcyou(one,two){
        return calcdif(minconver(one),minconver(two));
    }

    // Calculates average time users went to bed on a day provided to function
    function weeklybed(day){
        let bed = 0;
        let temp = 0;
        for (let i = 0; i < days.length; i++) {
            if(days[i] == day)
            {
                bed += minconver(bedtimes[i]);
                temp += 1;
            }
          }
        return timeconvert(bed/temp);
    }

    // Calculates average time users woke up on a day provided to function
    function weeklywoke(day){
        let woke = 0;
        let temp = 0;
        for (let i = 0; i < days.length; i++) {
            if(days[i] == day)
            {
                woke += minconver(woketimes[i]);
                temp += 1;
            }
          }
        return timeconvert(woke/temp);
    }