//
//
// 
function fade2Content() {
    console.log('fade2Content called');
    document.body.classList.remove("blackScreen");
  }
  
    const wandaObj= document.getElementById('wanda');
    const visionObj= document.getElementById('vision');
    const captainAmericaObj= document.getElementById('captainAmerica');
    const ironManObj= document.getElementById('ironMan');
    const doctorStrangeObj= document.getElementById('doctorStrange');
    const blackWidowObj= document.getElementById('blackWidow');
    const spidermanObj= document.getElementById('spiderMan');
    const hulkObj= document.getElementById('hulk');
    const thorObj= document.getElementById('thor');
    const hawkeyeObj= document.getElementById('hawkeye');
    const blackPantherObj= document.getElementById('blackPanther');
    const starLordObj= document.getElementById('starLord');

    const helpObj = document.getElementById('help')
//   const pisObj = document.getElementById('pis');
//   const scoObj = document.getElementById('sco');
//   const aquObj = document.getElementById('aqu');
  
  const displayObj = document.getElementById('display');

  helpObj.addEventListener('click', function (evt) {
    console.log('help button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
  });
  
  wandaObj.addEventListener('click', function (evt) {
    console.log('piscies button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
  });
  
  visionObj.addEventListener('click', function (evt) {
    console.log('scorpio button clicked: ' + evt.target.id); 
    const idName = evt.target.id;
    userPicked(idName);
  });
  
  captainAmericaObj.addEventListener('click', function (evt) {
    console.log('aquarius button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
  });

  ironManObj.addEventListener('click', function (evt) {
    console.log('taurus button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
  });

  doctorStrangeObj.addEventListener('click', function (evt) {
    console.log('cancer button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
  });

  blackWidowObj.addEventListener('click', function (evt) {
    console.log('libra button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
  });

  spidermanObj.addEventListener('click', function (evt) {
    console.log('aries button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
  });

  hulkObj.addEventListener('click', function (evt) {
    console.log('gemini button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
  });

  thorObj.addEventListener('click', function (evt) {
    console.log('leo button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
  });

  hawkeyeObj.addEventListener('click', function (evt) {
    console.log('virgo button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
  });

  blackPantherObj.addEventListener('click', function (evt) {
    console.log('sagittarius button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
  });

  starLordObj.addEventListener('click', function (evt) {
    console.log('capricorn button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
  });
  
  function userPicked(whichOne) {
    console.log('userPicked called: ' + whichOne);
    switch (whichOne) {
      case 'wanda':
        // displayObj.src = 'img/ful_pisces.png';
        zDisplayObj.src = 'wanda.jpeg';
        // display title
        zTitleObj.innerHTML = 'SCARLET WITCH';
        // display date range
        zDateRangeObj.innerHTML = 'FEBRUARY 20 - MARCH 20';
        // display description
        zMoreInfo.innerHTML = '<p>YOU ARE WANDA, ALSO KNOWN AS THE SCARLET WITCH. YOU ARE A FEELING DRIVEN PERSON USING YOUR POWERS IN THE WAY YOU SEE MOST FIT TO KEEP PERSONAL RELATIONSHIPS AFLOAT. WHEN YOU LATCH ON TO SOMEONE, GOOD LUCK TO ANYONE TRYING TO RIP THEM AWAY.</p>';
        // Show hide modal
        modal.hidden = !modal.hidden;
        // play sound
        stopAllAudio();
        sndWandaObj.play();
        break;

      case 'vision':
        // displayObj.src = 'img/ful_scorpio.png';
        zDisplayObj.src = 'Vision.jpg';
        // display title
        zTitleObj.innerHTML = 'VISION';
        // display date range
        zDateRangeObj.innerHTML = 'OCTOBER 23 - NOVEMBER 22';
        // display description
        zMoreInfo.innerHTML = '<p>YOU ARE VISION. LIKE WANDA, YOU ARE DRIVEN BY FEELINGS BUT LOOK AT THE LOGIC OF A SITUATION FIRST. YOU ARE LEVEL HEADED MOST OF THE TIME AND CAN BE TRUSTED TO DO THE RIGHT THING EVEN IF IT HURTS YOU. THERE IS NO EVIL IN YOU. ALL YOU WANT IS GOOD FOR HUMANITY.</p>';
        // Show hide modal
        modal.hidden = !modal.hidden;
        // play sound
        stopAllAudio();
        sndVisionObj.play();
        break;  

      case 'captainAmerica':
        // displayObj.src = 'img/ful_aquarius.png';
        zDisplayObj.src = 'captainAmerica.jpeg';
        // display title
        zTitleObj.innerHTML = 'CAPTAIN AMERICA';
        // display date range
        zDateRangeObj.innerHTML = 'JANUARY 20 - FEBRUARY 19';
        // display description
        zMoreInfo.innerHTML = "<p>YOU ARE STEVE ROGERS, ALSO KNOWN AS CAPTAIN AMERICA. YOUR MORALS GUIDE YOUR DECISIONS. YOU ARE VERY STRONG WILLED AND WILL STOP AT NOTHING WHEN YOU HAVE MADE A DECISION. PERSONAL RELATIONSHIPS ARE ALSO VERY IMPORTANT TO YOU. FRIENDS TO YOU ARE NOT JUST FRIENDS, THEY'RE FAMILY.</p>";
        // Show hide modal
        modal.hidden = !modal.hidden;
        // play sound
        stopAllAudio();
        sndCapObj.play();
        break;

        case 'ironMan':
        // displayObj.src = 'img/ful_aquarius.png';
        zDisplayObj.src = 'TonyStank.jpeg';
        // display title
        zTitleObj.innerHTML = 'IRON MAN';
        // display date range
        zDateRangeObj.innerHTML = 'APRIL 21 - MAY 20';
        // display description
        zMoreInfo.innerHTML = "<p>YOU ARE TONY STARK, ALSO KNOWN AS IRON MAN. WHEN YOU WERE YOUNGER IT SEEMED NOTHING COULD BOTHER YOU WERE VERY COCKY. HOWEVER, AS YOU'VE GROWN, YOU'VE STARTED TO LOOK AT THE FULL PICTURE AND PUT OTHERS BEFORE YOURSELF. YOUR RELATIONSHIP WITH FAMILY COMES FIRST AND YOU WILL PROTECT THEM WITH YOUR LIFE.</p>";
        // Show hide modal
        modal.hidden = !modal.hidden;
        // play sound
        stopAllAudio();
        sndIronObj.play();
        break;

        case 'doctorStrange':
        // displayObj.src = 'img/ful_aquarius.png';
        zDisplayObj.src = 'Doctor_Strange.jpg';
        // display title
        zTitleObj.innerHTML = 'DOCTOR STRANGE';
        // display date range
        zDateRangeObj.innerHTML = 'JUNE 21 - JULY 22';
        // display description
        zMoreInfo.innerHTML = '<p>YOU ARE DOCTOR STRANGE. IN THE PAST YOU USED TO ONLY CONSIDER HOW YOU FELT AND USED YOUR INTELLIGENCE TO BECOME POPULAR. AFTER AN ACCIDENT LEADING YOU TO LOSING YOUR LIVELYHOOD, YOU BECAME HUMBLED AND PUT HUMANITY FIRST. YOU DO YOUR BEST KEEPING PEOPLE SAFE FROM DANGERS THEY COULD NOT UNDERSTAND.<p>';
        // Show hide modal
        modal.hidden = !modal.hidden;
        // play sound
        stopAllAudio();
        sndDoctorObj.play();
        break;

        case 'blackWidow':
        // displayObj.src = 'img/ful_aquarius.png';
        zDisplayObj.src = 'Black_widow.jpeg';
        // display title
        zTitleObj.innerHTML = 'BLACK WIDOW';
        // display date range
        zDateRangeObj.innerHTML = 'SEPTEMBER 23 - OCTOBER 22';
        // display description
        zMoreInfo.innerHTML = "<p>YOU ARE BLACK WIDOW. YOU ARE EXTREMELY SKILLED AT HAND TO HAND COMBAT AND WITH EXPERIENCE SINCE BEING A CHILD, NO AVERAGE HUMAN CAN BEAT YOU. YOUR ABILITY TO BLEND IN AND SPY ON YOUR ENEMIES MAKES YOU A THREAT TO ANYONE YOU OPPOSE BUT A LARGE ASSET TO YOUR FRIENDS.</p>";
        // Show hide modal
        modal.hidden = !modal.hidden;
        // play sound
        stopAllAudio();
        sndWidowObj.play();
        break;

        case 'spiderMan':
        // displayObj.src = 'img/ful_aquarius.png';
        zDisplayObj.src = 'spiderman.jpeg';
        // display title
        zTitleObj.innerHTML = 'SPIDER MAN';
        // display date range
        zDateRangeObj.innerHTML = 'MARCH 21 - APRIL 20';
        // display description
        zMoreInfo.innerHTML = '<p>YOU ARE PETER PARKER, ALSO KNOWN AS SPIDERMAN. YOU ARE A YOUNG AND CHEERFUL SOUL WHO IS SIMULTANIOUSLY SMART AND WITTY. THE BONDS YOU MAKE ARE STRONGER THAN STEEL. EVEN THROUGH TRAUMA AND STRUGGLE, YOU CAN COME OUT ON TOP AND CRACK A FEW JOKES ALONG THE WAY.</p>';
        // Show hide modal
        modal.hidden = !modal.hidden;
        // play sound
        stopAllAudio();
        sndSpiderObj.play();
        break;

        case 'hulk':
        // displayObj.src = 'img/ful_aquarius.png';
        zDisplayObj.src = 'hulk.jpeg';
        // display title
        zTitleObj.innerHTML = 'THE HULK';
        // display date range
        zDateRangeObj.innerHTML = 'MAY 21 - JUNE 20';
        // display description
        zMoreInfo.innerHTML = '<p>YOU ARE THE HULK. DESPITE BEING PERCIEVED AS A MONSTER FULL OF RAGE BY THE PUBLIC, THE PEOPLE CLOSEST TO YOU KNOW HOW SMART YOU REALLY ARE. IN THE PAST YOU STRUGGLED WITH ANGER PROBLEMS BUT HAVE LEARNED TO CONTROL THEM AND RELEASE THE BEAST ON COMMAND.</p>';
        // Show hide modal
        modal.hidden = !modal.hidden;
        // play sound
        stopAllAudio();
        sndHulkObj.play();
        break;

        case 'thor':
        // displayObj.src = 'img/ful_aquarius.png';
        zDisplayObj.src = 'thor.jpeg';
        // display title
        zTitleObj.innerHTML = 'THOR';
        // display date range
        zDateRangeObj.innerHTML = 'JULY 23 - AUGUST 22';
        // display description
        zMoreInfo.innerHTML = '<p>YOU ARE THOR THE GOD OF THUNDER. YOU ARE GIFTED WITH A LONG LIFE AND SEEK THE THRILL OF ADVENTURE AND COMBAT AND ARE QUITE GOOD AT BOTH. KNOWN FOR BEING STRONG, YOU ACTUALLY HAVE A SOFT CENTER UNDERNEATH ALL THAT MUSCLE.</p>';
        // Show hide modal
        modal.hidden = !modal.hidden;
        // play sound
        stopAllAudio();
        sndThorObj.play();
        break;

        case 'hawkeye':
        // displayObj.src = 'img/ful_aquarius.png';
        zDisplayObj.src = 'Hawkeye.jpg';
        // display title
        zTitleObj.innerHTML = 'HAWKEYE';
        // display date range
        zDateRangeObj.innerHTML = 'AUGUST 23 - SEPTEMBER 22';
        // display description
        zMoreInfo.innerHTML = '<p>YOU ARE CLINT, ALSO KNOWN AS HAWKEYE. NOTHING GETS PAST YOU. YOU ARE ABLE TO SEE WHAT PEOPLE ARE TRYING TO DO TO YOU FROM MILES AWAY. YOUR FAMILY COMES FIRST TO YOU AND IF TAKEN AWAY, YOU WILL STOP AT NOTHING FOR JUSTICE.</p>';
        // Show hide modal
        modal.hidden = !modal.hidden;
        // play sound
        stopAllAudio();
        sndHawkObj.play();
        break;

        case 'blackPanther':
        // displayObj.src = 'img/ful_aquarius.png';
        zDisplayObj.src = 'BlackPanther.jpeg';
        // display title
        zTitleObj.innerHTML = 'THE BLACK PANTHER';
        // display date range
        zDateRangeObj.innerHTML = 'NOVEMBER 23 - DECEMBER 21';
        // display description
        zMoreInfo.innerHTML = '<p>YOU ARE THE BLACK PANTHER. THE WISDOM, FRIENDSHIP, FORGIVNESS, AND COMPASSION YOU SHOW FOR OTHER PEOPLE GREATLY OUTWEIGHS THE BAD SIDE OF YOU. VERY RARELY WILL THE TIME COME WHERE THE BLACK PANTHER SEEKS OUT REVENGE.</p>';
        // Show hide modal
        modal.hidden = !modal.hidden;
        // play sound
        stopAllAudio();
        sndPantherObj.play();
        break;

        case 'starLord':
        // displayObj.src = 'img/ful_aquarius.png';
        zDisplayObj.src = 'Star-Lord.jpg';
        // display title
        zTitleObj.innerHTML = 'STAR LORD';
        // display date range
        zDateRangeObj.innerHTML = 'DECEMBER 22 - JANUARY 19';
        // display description
        zMoreInfo.innerHTML = '<p>YOU ARE PETER QUILL, ALSO KNOWN AS STAR LORD. YOU MAY TRY TO PROJECT A BIG TOUGH GUY, BUT EVERYONE KNOWS YOU ARE A SOFT SOUL WITH LOTS OF LOVE TO GIVE. YOU HAVE HAD YOUR FAIR SHARE OF ADVENTURES AND AT THE END OF THE DAY, WANT TO BE WITH THE ONE YOU LOVE.</p>';
        // Show hide modal
        modal.hidden = !modal.hidden;
        // play sound
        stopAllAudio();
        sndStarObj.play();
        break;

        case 'help':
        // displayObj.src = 'img/ful_aquarius.png';
        zDisplayObj.src = 'tanos.jpg';
        // display title
        zTitleObj.innerHTML = 'HELP';
        // display date range
        zDateRangeObj.innerHTML = '';
        // display description
        zMoreInfo.innerHTML = '<p>HEY THERE. ALL YOU HAVE TO DO IS EITHER CLICK A PICTURE TO SEE INFO, OR INPUT YOUR BIRTHDAY TO SEE INFO. WHEN FINISHED, CLICK CLOSE. SAFE TRAVELS BALANCING THE UNIVERSE!</p>';
        // Show hide modal
        modal.hidden = !modal.hidden;
        // play sound
        stopAllAudio();
        sndThanosObj.play();
        break;
      default:
        // displayObj.src = 'img/ful_blank.png';
    }
  }
  
  // Sound Controls
  //
  
  function stopAllAudio() {
    sndWandaObj.pause();
    sndWandaObj.currentTime = 0;
    //
    sndVisionObj.pause();
    sndVisionObj.currentTime = 0;
    //
    sndCapObj.pause();
    sndCapObj.currentTime = 0;
    //
    sndIronObj.pause();
    sndIronObj.currentTime = 0;
    //
    sndDoctorObj.pause();
    sndDoctorObj.currentTime = 0;
    //
    sndWidowObj.pause();
    sndWidowObj.currentTime = 0;
    //
    sndSpiderObj.pause();
    sndSpiderObj.currentTime = 0;
    //
    sndHulkObj.pause();
    sndHulkObj.currentTime = 0;
    //
    sndThorObj.pause();
    sndThorObj.currentTime = 0;
    //
    sndHawkObj.pause();
    sndHawkObj.currentTime = 0;
    //
    sndPantherObj.pause();
    sndPantherObj.currentTime = 0;
    //
    sndStarObj.pause();
    sndStarObj.currentTime = 0;
  }
  
  const sndWandaObj = document.getElementById('sndWanda');
  const sndVisionObj = document.getElementById('sndVision');
  const sndCapObj = document.getElementById('sndCap');
  const sndIronObj = document.getElementById('sndIron');
  const sndDoctorObj = document.getElementById('sndDoctor');
  const sndWidowObj = document.getElementById('sndWidow');
  const sndSpiderObj = document.getElementById('sndSpider');
  const sndHulkObj = document.getElementById('sndHulk');
  const sndThorObj = document.getElementById('sndThor');
  const sndHawkObj = document.getElementById('sndHawk');
  const sndPantherObj = document.getElementById('sndPanther');
  const sndStarObj = document.getElementById('sndStar');
  const sndThanosObj = document.getElementById('sndThanos')
  
  // Modal Controls
  //
  
  const modal = document.getElementById('modal');
  
  const closeModalObj = document.getElementById('btn-modal-close');
  closeModalObj.addEventListener('click', function() {
    modal.hidden = !modal.hidden;
    stopAllAudio();
  });
  
  // Link modal element/objects to JS
  const zDisplayObj = document.getElementById('zDisplayImg');
  const zTitleObj = document.getElementById('zTitle');
  const zDateRangeObj = document.getElementById('zDateRange');
  const zMoreInfoObj = document.getElementById('zMoreInfo');
  
  
  
  
  // Calendar Input Code
  //
  
  const userSubmitObj = document.getElementById('userSubmit');
  
  userSubmitObj.addEventListener('click', function () {
    console.log('User submit button clicked');
    // Get the user first name and store it in a variable
    // const userFirstName = document.getElementById('fname').value;
    // console.log('userFirstName is: ' + userFirstName);
  
    // Get the user date and extract the month of year and day of month
    const userBday = new Date(document.getElementById('bday').value);
    console.log('userBday is: ' + userBday);
  
    // Figure out the zodiac sign based on month and of year and day of month
    let whichMonth = userBday.getUTCMonth();
    whichMonth++;
    console.log('whichMonth is: ' + whichMonth);
  
    const whichDayOfMonth = userBday.getUTCDate();
    console.log('whichDayOfMonth is: ' + whichDayOfMonth);
  
    let AstroSign = "";
  
    if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
      AstroSign = "starLord";
    } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
      AstroSign = "blackPanther";
    } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
      AstroSign = "vision";
    } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
      AstroSign = "blackWidow";
    } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
      AstroSign = "hawkeye";
    } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
      AstroSign = "thor";
    } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
      AstroSign = "doctorStrange";
    } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
      AstroSign = "hulk";
    } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
      AstroSign = "ironMan";
    } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
      AstroSign = "spiderMan";
    } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
      AstroSign = "wanda";
    } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
      AstroSign = "captainAmerica";
    }
  
    console.log('AstroSign is: ' + AstroSign);
  
    userPicked(AstroSign);
    // Display custom image based on zodiac sign
  
  }); 