const model = {
    app: {
        loggedinuserID: 0,
        pages: ["HomePage", "Login", "infopage", "memory", "ongoingDate"],
        currentpage: "ongoingDate",
        selectedDate: 0,
    },

    input: {
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

    data: {
        users:
            [
                {
                    ID: 0,
                    name: "Martin",
                    password: "MartinErKul",
                    birthday: '13.10.16',
                    adress: "getacademny",
                    eMail: "martinskal@paadate.no",
                    phone: "69696969",
                    ongoingDate: false,
                    doneDates: ['kino'],
                    finishedDates: [
                        {
                            Name: "kino",
                            Rating: 2,
                            day: '14.10.2024, 11:08:13',
                            comment: 'Koselig, men dårlig film.',
                            memoryPicture: 'img1051.jpg',
                        },
                    ],
                }
            ],

        Dates: [
            {
                Name: "kino",
                home: false,
                timeSpent: 5,
                maxPrice: 300,
                fromTime: "18:00",
                description: "Gå på kino",
                Picture: "dateImage/kino.jpg",
            },

            {
                Name: "piknik i parken",
                home: false,
                timeSpent: 4,
                maxPrice: 0,
                fromTime: "11:00",
                description: "Nyt en piknik med hjemmelaget mat i parken",
                Picture: "dateImage/park.jpg"
            },

            {
                Name: "museumstur",
                home: false,
                timeSpent: 3,
                maxPrice: 200,
                fromTime: "10:00",
                description: "Besøk et lokalt museum",
                Picture: "dateImage/museum.jpg"
            },

            {
                Name: "hjemmekino",
                home: true,
                timeSpent: 2,
                maxPrice: 0,
                fromTime: "19:00",
                description: "Se en film hjemme med popcorn",
                Picture: "dateImage/home_theater.jpg"
            },

            {
                Name: "tur i skogen",
                home: false,
                timeSpent: 5,
                maxPrice: 0,
                fromTime: "09:00",
                description: "Gå en tur i skogen og nyt naturen",
                Picture: "dateImage/forest.jpg"
            },

            {
                Name: "baking",
                home: true,
                timeSpent: 3,
                maxPrice: 150,
                fromTime: "11:00",
                description: "Bak noe godt sammen",
                Picture: "dateImage/baking.jpg"
            },

            {
                Name: "brettspillkveld",
                home: true,
                timeSpent: 4,
                maxPrice: 0,
                fromTime: "20:00",
                description: "Spill brettspill hjemme",
                Picture: "dateImage/boardgames.jpg"
            },

            {
                Name: "kafébesøk",
                home: false,
                timeSpent: 2,
                maxPrice: 100,
                fromTime: "11:00",
                description: "Nyt kaffe og kake på en koselig kafé",
                Picture: "dateImage/cafe.jpg"
            },

            {
                Name: "konsert i parken",
                home: false,
                timeSpent: 3,
                maxPrice: 0,
                fromTime: "11:00",
                description: "Hør på en gratis konsert i parken",
                Picture: "dateImage/concert.jpg"
            },

            {
                Name: "sightseeing",
                home: false,
                timeSpent: 4,
                maxPrice: 0,
                fromTime: "10:00",
                description: "Utforsk en ny del av byen",
                Picture: "dateImage/sightseeing.jpg"
            },

            {
                Name: "lesekveld",
                home: true,
                timeSpent: 3,
                maxPrice: 0,
                fromTime: "20:00",
                description: "Les bøker sammen",
                Picture: "dateImage/reading.jpg"
            },

            {
                Name: "fotosafari",
                home: false,
                timeSpent: 4,
                maxPrice: 0,
                fromTime: "09:00",
                description: "Ta bilder av naturen",
                Picture: "dateImage/photosafari.jpg"
            },

            {
                Name: "kunst og håndverk",
                home: true,
                timeSpent: 3,
                maxPrice: 100,
                fromTime: "08:00",
                description: "Lag noe kreativt sammen",
                Picture: "dateImage/crafting.jpg"
            },

            {
                Name: "fugletitting",
                home: false,
                timeSpent: 4,
                maxPrice: 0,
                fromTime: "08:00",
                description: "Observer fugler i naturen",
                Picture: "dateImage/birdwatching.jpg"
            },

            {
                Name: "matlagingskurs hjemme",
                home: true, timeSpent: 3,
                maxPrice: 200,
                fromTime: "12:0",
                description: "Lag en ny oppskrift sammen",
                Picture: "dateImage/cooking_class.jpg"
            },

            {
                Name: "sykkeltur",
                home: false,
                timeSpent: 3,
                maxPrice: 0,
                fromTime: null,
                description: "Ta en sykkeltur i nærområdet",
                Picture: "dateImage/biking.jpg"
            },

            {
                Name: "frivillig arbeid",
                home: false,
                timeSpent: 5,
                maxPrice: 0,
                fromTime: "10:00",
                description: "Gjøre frivillig arbeid sammen",
                Picture: "dateImage/volunteering.jpg"
            },

            {
                Name: "hagearbeid",
                home: true,
                timeSpent: 4,
                maxPrice: 0,
                fromTime: "09:00",
                description: "Jobbe i hagen sammen",
                Picture: "dateImage/gardening.jpg"
            },

            {
                Name: "samtalekveld",
                home: true,
                timeSpent: 2,
                maxPrice: 0,
                fromTime: "20:00",
                description: "Ha dype samtaler",
                Picture: "dateImage/talking.jpg"
            },

            {
                Name: "vin- og ostekveld",
                home: true,
                timeSpent: 2,
                maxPrice: 400,
                fromTime: "19:00",
                description: "Nyt vin og ost hjemme",
                Picture: "dateImage/wine_cheese.jpg"
            },

            {
                Name: "besøk en gård",
                home: false,
                timeSpent: 3,
                maxPrice: 100,
                fromTime: null,
                description: "Besøk en lokal gård",
                Picture: "dateImage/farm_visit.jpg"
            },

            {
                Name: "loppemarked",
                home: false,
                timeSpent: 3,
                maxPrice: 50,
                fromTime: "09:00",
                description: "Dra på loppemarked",
                Picture: "dateImage/flea_market.jpg"
            },

            {
                Name: "standup-show",
                home: false,
                timeSpent: 3,
                maxPrice: 200,
                fromTime: "16:00",
                description: "Se et standup-show",
                Picture: "dateImage/standup.jpg"
            },

            {
                Name: "puzzle-kveld",
                home: true,
                timeSpent: 3,
                maxPrice: 100,
                fromTime: "19:00",
                description: "Legg puslespill sammen",
                Picture: "dateImage/puzzle.jpg"
            },

            {
                Name: "treningssenter",
                home: false,
                timeSpent: 2,
                maxPrice: 100,
                fromTime: "09:00",
                description: "Tren sammen på senteret",
                Picture: "dateImage/gym.jpg"
            },

            {
                Name: "klatring",
                home: false,
                timeSpent: 3,
                maxPrice: 150,
                fromTime: "10:00",
                description: "Prøv klatring",
                Picture: "dateImage/climbing.jpg"
            },

            {
                Name: "badminton",
                home: false,
                timeSpent: 2,
                maxPrice: 0,
                fromTime: "09:00",
                description: "Spill badminton i parken",
                Picture: "dateImage/badminton.jpg"
            },

            {
                Name: "frisbeegolf",
                home: false,
                timeSpent: 3,
                maxPrice: 50,
                fromTime: null,
                description: "Spill frisbeegolf",
                Picture: "dateImage/frisbeegolf.jpg"
            },

            {
                Name: "utendørs yoga",
                home: false,
                timeSpent: 2,
                maxPrice: 0,
                fromTime: "09:00",
                description: "Gjør yoga utendørs",
                Picture: "dateImage/yoga.jpg"
            },

            {
                Name: "spakveld",
                home: true,
                timeSpent: 2,
                maxPrice: 200,
                fromTime: "19:00",
                description: "Ha en spakveld hjemme",
                Picture: "dateImage/spa.jpg"
            },

            {
                Name: "kajakkpadling",
                home: false,
                timeSpent: 4,
                maxPrice: 300,
                fromTime: "12:00",
                description: "Prøv kajakkpadling",
                Picture: "dateImage/kayaking.jpg"
            },

            {
                Name: "opera",
                home: false,
                timeSpent: 3,
                maxPrice: 200,
                fromTime: '18:00',
                description: "Gå på opera",
                Picture: "dateImage/opera.jpg"
            },

            {
                Name: "teaterstykke",
                home: false,
                timeSpent: 3,
                maxPrice: 250,
                fromTime: '18:00',
                description: "Se et teaterstykke",
                Picture: "dateImage/theater.jpg"
            },

            {
                Name: "slakkline",
                home: false,
                timeSpent: 2,
                maxPrice: 0,
                fromTime: '14:00',
                description: "Prøv slakkline i parken",
                Picture: "dateImage/slackline.jpg"
            },

            {
                Name: "middag ute",
                home: false,
                timeSpent: 2,
                maxPrice: 500,
                fromTime: '17:00',
                description: "Spis middag på restaurant",
                Picture: "dateImage/dinner_out.jpg"
            },

            {
                Name: "historisk vandring",
                home: false,
                timeSpent: 3,
                maxPrice: 0,
                fromTime: '12:00',
                description: "Gå en historisk vandring",
                Picture: "dateImage/historic_walk.jpg"
            },

            {
                Name: "bingo",
                home: false,
                timeSpent: 2,
                maxPrice: 50,
                fromTime: '10:00',
                description: "Spill bingo",
                Picture: "dateImage/bingo.jpg"
            },

            {
                Name: "utendørs skøyting",
                home: false,
                timeSpent: 3,
                maxPrice: 100,
                fromTime: '15:00',
                description: "Skøyte utendørs",
                Picture: "dateImage/ice_skating.jpg"
            },

            {
                Name: "bygge møbler sammen",
                home: true,
                timeSpent: 3,
                maxPrice: 0,
                fromTime: '13:00',
                description: "Bygg møbler sammen",
                Picture: "dateImage/building_furniture.jpg"
            },

            {
                Name: "utendørs maleri",
                home: false,
                timeSpent: 3,
                maxPrice: 150,
                fromTime: '10:00',
                description: "Mal utendørs",
                Picture: "dateImage/outdoor_painting.jpg"
            },
            {
                Name: "romantisk middag hjemme",
                home: true,
                timeSpent: 2,
                maxPrice: 300,
                fromTime: '18:00',
                description: "Lag en romantisk middag hjemme",
                Picture: "dateImage/dinner_home.jpg"
            },

            {
                Name: "ballongferd",
                home: false,
                timeSpent: 3,
                maxPrice: 2000,
                fromTime: '09:00',
                description: "Ta en tur i luftballong",
                Picture: "dateImage/hot_air_balloon.jpg"
            },

            {
                Name: "weekendtur",
                home: false,
                timeSpent: 48,
                maxPrice: 2000,
                fromTime: '09:00',
                description: "Ta en weekendtur sammen",
                Picture: "dateImage/weekend_trip.jpg"
            },

            {
                Name: "dansekurs",
                home: false,
                timeSpent: 2,
                maxPrice: 300,
                fromTime: '10:00',
                description: "Delta på dansekurs sammen",
                Picture: "dateImage/dance_class.jpg"
            },

            {
                Name: "gokart",
                home: false,
                timeSpent: 2,
                maxPrice: 500,
                fromTime: '14:00',
                description: "Kjør gokart",
                Picture: "dateImage/gokart.jpg"
            },

            {
                Name: "kampsport",
                home: false,
                timeSpent: 2,
                maxPrice: 300,
                fromTime: '16:00',
                description: "Prøv kampsport",
                Picture: "dateImage/martial_arts.jpg"
            },

            {
                Name: "dyrehagebesøk",
                home: false,
                timeSpent: 4,
                maxPrice: 400,
                fromTime: '09:00',
                description: "Besøk dyrehagen",
                Picture: "dateImage/zoo.jpg"
            },

            {
                Name: "matlagingskurs",
                home: false,
                timeSpent: 3,
                maxPrice: 600,
                fromTime: '15:00',
                description: "Delta på et matlagingskurs",
                Picture: "dateImage/cooking_class.jpg"
            },

            {
                Name: "småflytur",
                home: false,
                timeSpent: 1,
                maxPrice: 2000,
                fromTime: '08:00',
                description: "Ta en tur i småfly",
                Picture: "dateImage/small_plane.jpg"
            },

            {
                Name: "klatrepark",
                home: false,
                timeSpent: 3,
                maxPrice: 400,
                fromTime: '11:00',
                description: "Besøk en klatrepark",
                Picture: "dateImage/climbing_park.jpg"
            },

            {
                Name: "spadag",
                home: false,
                timeSpent: 5,
                maxPrice: 2000,
                fromTime: '08:00',
                description: "Tilbring en dag på spa",
                Picture: "dateImage/spa_day.jpg"
            },
        ]
    }
}