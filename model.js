const model = {
    app:{
        loggedinuserID: null,
        pages:["HomePage","Login","infopage","memory"],
        currentpage: "Login"
    },

    input:  {
        register: {
            name: null,
            eMail: null,
            password: null,
            secondPassword: null,
            birthday: null,
            adress: null,
            phone: null
        },
        login: {
            eMail: null,
            password: null,
            showMessage: null
        },
        filter: {
            isOpen: false,
            home: true,
            timeUsage: null,
            maxPrice: null,
            fromTime: null,
        },
        endDate: {
            rating: null,
            comment: null,
            memoryPicture: null,
        }

    },

    data:   {
        users:
        [
            {
            name: "Martin",
            password: "MartinErKul",
            birthday: '13.10.16',
            adress: "getacademny",
            eMail: "martinskal@paadate.no",
            phone: "69696969",
            doneDates: ['kino'],
            finishedDates: [
                {
                Name: "kino",
                Rating: 2,
                day: '14.10.24',
                comment: 'Koselig, men dårlig film.',
                memoryPicture: 'img1051.jpg',
                    },
                ],
            }
        ],

        Dates:[
        {
            Name: "kino",    
            home: false,
            timeSpent: 5,
            maxPrice: 300,
            fromTime: "18:00",
            description: "Gå på kino",
            Picture: "kino.jpg",
        },

        {   Name: "piknik i parken", 
            home: false, 
            timeSpent: 4, 
            maxPrice: 0, 
            fromTime: "11:00", 
            description: "Nyt en piknik med hjemmelaget mat i parken", 
            Picture: "park.jpg" },

        {   Name: "museumstur", 
            home: false, 
            timeSpent: 3, 
            maxPrice: 200, 
            fromTime: "10:00", 
            description: "Besøk et lokalt museum", 
            Picture: "museum.jpg" },
        
        {   Name: "hjemmekino", 
            home: true, 
            timeSpent: 2, 
            maxPrice: 0, 
            fromTime: "19:00", 
            description: "Se en film hjemme med popcorn", 
            Picture: "home_theater.jpg" },
        
        {   Name: "tur i skogen", 
            home: false, 
            timeSpent: 5, 
            maxPrice: 0, 
            fromTime: "09:00", 
            description: "Gå en tur i skogen og nyt naturen", 
            Picture: "forest.jpg" },
        
        {   Name: "baking", 
            home: true, 
            timeSpent: 3, 
            maxPrice: 150, 
            fromTime: "11:00", 
            description: "Bak noe godt sammen", 
            Picture: "baking.jpg" },
        
        {   Name: "brettspillkveld", 
            home: true, 
            timeSpent: 4, 
            maxPrice: 0, 
            fromTime: "20:00", 
            description: "Spill brettspill hjemme", 
            Picture: "boardgames.jpg" },
        
        {   Name: "kafébesøk", 
            home: false, 
            timeSpent: 2, 
            maxPrice: 100, 
            fromTime: "11:00", 
            description: "Nyt kaffe og kake på en koselig kafé", 
            Picture: "cafe.jpg" },
        
        {   Name: "konsert i parken", 
            home: false, 
            timeSpent: 3, 
            maxPrice: 0, 
            fromTime: "11:00", 
            description: "Hør på en gratis konsert i parken", 
            Picture: "concert.jpg" },
        
        {   Name: "sightseeing", 
            home: false, 
            timeSpent: 4, 
            maxPrice: 0, 
            fromTime: "10:00", 
            description: "Utforsk en ny del av byen", 
            Picture: "sightseeing.jpg" },
        
        {   Name: "lesekveld", 
            home: true, 
            timeSpent: 3, 
            maxPrice: 0, 
            fromTime: "20:00", 
            description: "Les bøker sammen", 
            Picture: "reading.jpg" },
        
        {   Name: "fotosafari", 
            home: false, 
            timeSpent: 4, 
            maxPrice: 0, 
            fromTime: "09:00", 
            description: "Ta bilder av naturen", 
            Picture: "photosafari.jpg" },
        
        {   Name: "kunst og håndverk", 
            home: true, 
            timeSpent: 3, 
            maxPrice: 100, 
            fromTime: "08:00", 
            description: "Lag noe kreativt sammen", 
            Picture: "crafting.jpg" },
        
        {   Name: "fugletitting", 
            home: false, 
            timeSpent: 4, 
            maxPrice: 0, 
            fromTime: "08:00", 
            description: "Observer fugler i naturen", 
            Picture: "birdwatching.jpg" },
        
        {   Name: "matlagingskurs hjemme", 
            home: true, timeSpent: 3, 
            maxPrice: 200, 
            fromTime: "12:0", 
            description: "Lag en ny oppskrift sammen", 
            Picture: "cooking_class.jpg" },
        
        {   Name: "sykkeltur", 
            home: false, 
            timeSpent: 3, 
            maxPrice: 0, 
            fromTime: null, 
            description: "Ta en sykkeltur i nærområdet", 
            Picture: "biking.jpg" },
        
        {   Name: "frivillig arbeid", 
            home: false, 
            timeSpent: 5, 
            maxPrice: 0, 
            fromTime: "10:00", 
            description: "Gjøre frivillig arbeid sammen", 
            Picture: "volunteering.jpg" },
        
        {   Name: "hagearbeid", 
            home: true, 
            timeSpent: 4, 
            maxPrice: 0, 
            fromTime: "09:00", 
            description: "Jobbe i hagen sammen", 
            Picture: "gardening.jpg" },
        
        {   Name: "samtalekveld", 
            home: true, 
            timeSpent: 2, 
            maxPrice: 0, 
            fromTime: "20:00", 
            description: "Ha dype samtaler", 
            Picture: "talking.jpg" },
        
        {   Name: "vin- og ostekveld", 
            home: true, 
            timeSpent: 2, 
            maxPrice: 400, 
            fromTime: "19:00", 
            description: "Nyt vin og ost hjemme", 
            Picture: "wine_cheese.jpg" },
        
        {   Name: "besøk en gård", 
            home: false, 
            timeSpent: 3, 
            maxPrice: 100, 
            fromTime: null, 
            description: "Besøk en lokal gård", 
            Picture: "farm_visit.jpg" },
        
        {   Name: "loppemarked", 
            home: false, 
            timeSpent: 3, 
            maxPrice: 50, 
            fromTime: "09:00", 
            description: "Dra på loppemarked", 
            Picture: "flea_market.jpg" },
        
        {   Name: "standup-show", 
            home: false, 
            timeSpent: 3, 
            maxPrice: 200, 
            fromTime: "16:00", 
            description: "Se et standup-show", 
            Picture: "standup.jpg" },
        
        {   Name: "puzzle-kveld", 
            home: true, 
            timeSpent: 3, 
            maxPrice: 100, 
            fromTime: "19:00", 
            description: "Legg puslespill sammen", 
            Picture: "puzzle.jpg" },
        
        {   Name: "treningssenter", 
            home: false, 
            timeSpent: 2, 
            maxPrice: 100, 
            fromTime: "09:00", 
            description: "Tren sammen på senteret", 
            Picture: "gym.jpg" },
        
        {   Name: "klatring", 
            home: false, 
            timeSpent: 3, 
            maxPrice: 150, 
            fromTime: "10:00", 
            description: "Prøv klatring", 
            Picture: "climbing.jpg" },
        
        {   Name: "badminton", 
            home: false, 
            timeSpent: 2, 
            maxPrice: 0, 
            fromTime: "09:00", 
            description: "Spill badminton i parken", 
            Picture: "badminton.jpg" },
        
        {   Name: "frisbeegolf", 
            home: false, 
            timeSpent: 3, 
            maxPrice: 50, 
            fromTime: null, 
            description: "Spill frisbeegolf", 
            Picture: "frisbeegolf.jpg" },
        
        {   Name: "utendørs yoga", 
            home: false, 
            timeSpent: 2, 
            maxPrice: 0, 
            fromTime: "09:00", 
            description: "Gjør yoga utendørs", 
            Picture: "yoga.jpg" },
        
        {   Name: "spakveld", 
            home: true, 
            timeSpent: 2, 
            maxPrice: 200, 
            fromTime: "19:00", 
            description: "Ha en spakveld hjemme", 
            Picture: "spa.jpg" },
        
        {   Name: "kajakkpadling", 
            home: false, 
            timeSpent: 4, 
            maxPrice: 300, 
            fromTime: "12:00", 
            description: "Prøv kajakkpadling", 
            Picture: "kayaking.jpg" },
        
        {   Name: "opera", 
            home: false, 
            timeSpent: 3, 
            maxPrice: 200, 
            fromTime: '18:00', 
            description: "Gå på opera", 
            Picture: "opera.jpg" },
        
        { 
            Name: "teaterstykke", 
            home: false, 
            timeSpent: 3, 
            maxPrice: 250, 
            fromTime: '18:00', 
            description: "Se et teaterstykke", 
            Picture: "theater.jpg" },
            
        { 
            Name: "slakkline", 
            home: false, 
            timeSpent: 2, 
            maxPrice: 0, 
            fromTime: '14:00', 
            description: "Prøv slakkline i parken", 
            Picture: "slackline.jpg" },
        
        { 
            Name: "middag ute", 
            home: false, 
            timeSpent: 2, 
            maxPrice: 500, 
            fromTime: '17:00', 
            description: "Spis middag på restaurant", 
            Picture: "dinner_out.jpg" },
        
        { 
            Name: "historisk vandring", 
            home: false, 
            timeSpent: 3, 
            maxPrice: 0, 
            fromTime: '12:00', 
            description: "Gå en historisk vandring", 
            Picture: "historic_walk.jpg" },
        
        { 
            Name: "bingo", 
            home: false, 
            timeSpent: 2, 
            maxPrice: 50, 
            fromTime: '10:00', 
            description: "Spill bingo", 
            Picture: "bingo.jpg" },
        
        { 
            Name: "utendørs skøyting", 
            home: false, 
            timeSpent: 3, 
            maxPrice: 100, 
            fromTime: '15:00', 
            description: "Skøyte utendørs", 
            Picture: "ice_skating.jpg" },
        
        { 
            Name: "bygge møbler sammen", 
            home: true, 
            timeSpent: 3, 
            maxPrice: 0, 
            fromTime: '13:00',
            description: "Bygg møbler sammen", 
            Picture: "building_furniture.jpg" 
        },
        
        { 
            Name: "utendørs maleri", 
            home: false, 
            timeSpent: 3, 
            maxPrice: 150, 
            fromTime: '10:00', 
            description: "Mal utendørs", 
            Picture: "outdoor_painting.jpg" 
        },
        { 
            Name: "romantisk middag hjemme", 
            home: true, 
            timeSpent: 2, 
            maxPrice: 300, 
            fromTime: '18:00', 
            description: "Lag en romantisk middag hjemme", 
            Picture: "dinner_home.jpg" 
        },

        { 
            Name: "ballongferd", 
            home: false, 
            timeSpent: 3, 
            maxPrice: 2000, 
            fromTime: '09:00', 
            description: "Ta en tur i luftballong", 
            Picture: "hot_air_balloon.jpg" 
        },

        { 
            Name: "weekendtur", 
            home: false, 
            timeSpent: 48, 
            maxPrice: 2000, 
            fromTime: '09:00', 
            description: "Ta en weekendtur sammen", 
            Picture: "weekend_trip.jpg" 
        },

        { 
            Name: "dansekurs", 
            home: false, 
            timeSpent: 2, 
            maxPrice: 300, 
            fromTime: '10:00', 
            description: "Delta på dansekurs sammen", 
            Picture: "dance_class.jpg" 
        }

        ,{ Name: "gokart", 
            home: false, 
            timeSpent: 2, 
            maxPrice: 500, 
            fromTime: '14:00', 
            description: "Kjør gokart", 
            Picture: "gokart.jpg" }

        ,{ Name: "kampsport", 
            home: false, 
            timeSpent: 2, 
            maxPrice: 300, 
            fromTime: '16:00', 
            description: "Prøv kampsport", 
            Picture: "martial_arts.jpg" }

        ,{ Name: "dyrehagebesøk", 
            home: false, 
            timeSpent: 4, 
            maxPrice: 400, 
            fromTime: '09:00', 
            description: "Besøk dyrehagen", 
            Picture: "zoo.jpg" }

        ,{ Name: "matlagingskurs", 
            home: false, 
            timeSpent: 3, 
            maxPrice: 600, 
            fromTime: '15:00', 
            description: "Delta på et matlagingskurs", 
            Picture: "cooking_class.jpg" }

        ,{ Name: "småflytur", 
            home: false, 
            timeSpent: 1, 
            maxPrice: 2000, 
            fromTime: '08:00', 
            description: "Ta en tur i småfly", 
            Picture: "small_plane.jpg" }

        ,{ Name: "klatrepark", 
            home: false, 
            timeSpent: 3, 
            maxPrice: 400, 
            fromTime: '11:00', 
            description: "Besøk en klatrepark", 
            Picture: "climbing_park.jpg" }

        ,{ Name: "spadag", 
            home: false, 
            timeSpent: 5, 
            maxPrice: 2000, 
            fromTime: '08:00', 
            description: "Tilbring en dag på spa", 
            Picture: "spa_day.jpg" }
        ]
    }
}