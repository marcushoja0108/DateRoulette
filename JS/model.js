const model = {
    app: {
        loggedinuserID: 0,
        pages: ["HomePage", "Login", "infopage", "memory", "ongoingDate", "friendPage"],
        currentpage: "Login",
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
            home: false,
            buttoncounter: 0,
            disableTimeSpent: true,
            disablePrice: true,
            disableFromTime: true,
            disableHome: true,
            timeUsage: 4,
            maxPrice: 800,
            fromTime: 15,
            startWheel: false,
        },
        endDate: {
            rating: null,
            comment: null,
            memoryPicture: null,
            showongoingMessage: '',
        }
    },

    data: {
        users:
            [
                {
                    ID: 0,
                    name: "Martin",
                    password: "123",
                    birthday: '13.10.16',
                    adress: "getacademny",
                    eMail: "martinskal@paadate.no",
                    phone: "69696969",
                    ongoingDate: false,
                    doneDates: ['kino','piknik i parken'],
                    finishedDates: [
                        {
                            Name: "kino",
                            Rating: 2,
                            day: '14.10.2024, 11:08:13',
                            comment: 'Koselig, men dårlig film.',
                            memoryPicture: "dateImage/kino.jpg",
                        },
                        {
                            Name: "piknik i parken",
                            Rating: 4,
                            day: '14.10.2024, 11:08:13',
                            comment: 'Raff pølse i Thermos date.',
                            memoryPicture: "dateImage/park.jpg",
                        }
                    ],
                }
            ],

        Dates: [
            {
                Name: "kino",
                home: false,
                timeSpent: 5,
                maxPrice: 300,
                fromTime: 18,
                description: "Gå på kino",
                Picture: "dateImage/kino.jpg",
                Category: ["cozy","kultur","sosialt","inne"],
                review: [{
                    comment: null,
                    Rating: null
                }]
            },

            {
                Name: "piknik i parken",
                home: false,
                timeSpent: 4,
                maxPrice: 0,
                fromTime: 11,
                description: "Nyt en piknik med hjemmelaget mat i parken",
                Picture: "dateImage/park.jpg",
                Category: ["cozy","ute","sosialt"],
                review: [{
                    comment: null,
                    Rating: null
                }]
            },

            {
                Name: "museumstur",
                home: false,
                timeSpent: 3,
                maxPrice: 200,
                fromTime: 10,
                description: "Besøk et lokalt museum",
                Picture: "dateImage/museum.jpg",
                Category: ["kultur","innadvent","sosialt"],
                review: [{
                    comment: null,
                    Rating: null
                }]
            },

            {
                Name: "hjemmekino",
                home: true,
                timeSpent: 2,
                maxPrice: 0,
                fromTime: 19,
                description: "Se en film hjemme med popcorn",
                Picture: "dateImage/home_theater.jpg",
                Category: ["cozy","inne","usosialt"],
                review: [{
                    comment: null,
                    Rating: null
                }]
            },

            {
                Name: "tur i skogen",
                home: false,
                timeSpent: 5,
                maxPrice: 0,
                fromTime: 9,
                description: "Gå en tur i skogen og nyt naturen",
                Picture: "dateImage/forest.jpg",
                Category: ["ute","usosialt"],
                review: [{
                    comment: null,
                    Rating: null
                }]
            },

            {
                Name: "baking",
                home: true,
                timeSpent: 3,
                maxPrice: 150,
                fromTime: 11,
                description: "Bak noe godt sammen",
                Picture: "dateImage/baking.jpg",
                Category: ["cozy","inne","usosialt","mat"],
                review: [{
                    comment: null,
                    Rating: null
                }]
            },

            {
                Name: "brettspillkveld",
                home: true,
                timeSpent: 4,
                maxPrice: 0,
                fromTime: 20,
                description: "Spill brettspill hjemme",
                Picture: "dateImage/boardgames.jpg",
                Category: ["cozy","inne","sosialt","kreativitet"],
                review: [{
                    comment: null,
                    Rating: null
                }]
            },

            {
                Name: "kafébesøk",
                home: false,
                timeSpent: 2,
                maxPrice: 100,
                fromTime: 11,
                description: "Nyt kaffe og kake på en koselig kafé",
                Picture: "dateImage/cafe.jpg",
                Category: ["inne","sosialt","mat"],
                review: [{
                    comment: null,
                    Rating: null
                }]
            },

            {
                Name: "konsert i parken",
                home: false,
                timeSpent: 3,
                maxPrice: 0,
                fromTime: 11,
                description: "Hør på en gratis konsert i parken",
                Picture: "dateImage/concert.jpg",
                Category: ["sosialt","ute","kultur"],
                review: [{
                    comment: null,
                    Rating: null
                }]
            },

            {
                Name: "sightseeing",
                home: false,
                timeSpent: 4,
                maxPrice: 0,
                fromTime: 10,
                description: "Utforsk en ny del av byen",
                Picture: "dateImage/sightseeing.jpg",
                Category: ["sosialt","ute","kultur"],
                review: [{
                    comment: null,
                    Rating: null
                }]
            },

            {
                Name: "lesekveld",
                home: true,
                timeSpent: 3,
                maxPrice: 0,
                fromTime: 20,
                description: "Les bøker sammen",
                Picture: "dateImage/reading.jpg",
                Category: ["cozy","inne","sosialt"],
                review: [{
                    comment: null,
                    Rating: null
                }]
            },

            {
                Name: "fotosafari",
                home: false,
                timeSpent: 4,
                maxPrice: 0,
                fromTime: 9,
                description: "Ta bilder av naturen",
                Picture: "dateImage/photosafari.jpg",
                Category: ["sosialt","ute","kultur"],
                review: [{
                    comment: null,
                    Rating: null
                }]
            },

            {
                Name: "kunst og håndverk",
                home: true,
                timeSpent: 3,
                maxPrice: 100,
                fromTime: 8,
                description: "Lag noe kreativt sammen",
                Picture: "dateImage/crafting.jpg",
                Category: ["inne","usosialt","kreativitet"],
                review: [{
                    comment: null,
                    Rating: null
                }]
            },

            {
                Name: "fugletitting",
                home: false,
                timeSpent: 4,
                maxPrice: 0,
                fromTime: 8,
                description: "Observer fugler i naturen",
                Picture: "dateImage/birdwatching.jpg",
                Category: ["sosialt","ute"],
                review: [{
                    comment: null,
                    Rating: null
                }]
            },

            {
                Name: "matlagingskurs hjemme",
                home: true, 
                timeSpent: 3,
                maxPrice: 200,
                fromTime: 12,
                description: "Lag en ny oppskrift sammen",
                Picture: "dateImage/cooking_class.jpg",
                Category: ["cozy","inne","usosialt","mat"],
                review: [{
                    comment: null,
                    Rating: null
                }]
            },

            {
                Name: "sykkeltur",
                home: false,
                timeSpent: 3,
                maxPrice: 0,
                fromTime: 10,
                description: "Ta en sykkeltur i nærområdet",
                Picture: "dateImage/biking.jpg",
                Category: ["sosialt","ute"],
                review: [{
                    comment: null,
                    Rating: null
                }]
            },

            {
                Name: "frivillig arbeid",
                home: false,
                timeSpent: 5,
                maxPrice: 0,
                fromTime: 10,
                description: "Gjøre frivillig arbeid sammen",
                Picture: "dateImage/volunteering.jpg",
                Category: ["sosialt","ute"],
                review: [{
                    comment: null,
                    Rating: null
                }]
            },

            {
                Name: "hagearbeid",
                home: true,
                timeSpent: 4,
                maxPrice: 0,
                fromTime: 9,
                description: "Jobbe i hagen sammen",
                Picture: "dateImage/gardening.jpg",
                Category: ["usosialt","ute","kreativitet"],
                review: [{
                    comment: null,
                    Rating: null
                }]
            },

            {
                Name: "samtalekveld",
                home: true,
                timeSpent: 2,
                maxPrice: 0,
                fromTime: 20,
                description: "Ha dype samtaler",
                Picture: "dateImage/talking.jpg",
                Category: ["cozy","inne","usosialt"],
                review: [{
                    comment: null,
                    Rating: null
                }]
            },

            {
                Name: "vin- og ostekveld",
                home: true,
                timeSpent: 2,
                maxPrice: 400,
                fromTime: 19,
                description: "Nyt vin og ost hjemme",
                Picture: "dateImage/wine_cheese.jpg",
                Category: ["cozy","inne","usosialt","mat"],
                review: [{
                    comment: null,
                    Rating: null
                }]
            },

            {
                Name: "besøk en gård",
                home: false,
                timeSpent: 3,
                maxPrice: 100,
                fromTime: 11,
                description: "Besøk en lokal gård",
                Picture: "dateImage/farm_visit.jpg",
                Category: ["sosialt","ute","kultur"],
                review: [{
                    comment: null,
                    Rating: null
                }]
            },

            {
                Name: "loppemarked",
                home: false,
                timeSpent: 3,
                maxPrice: 50,
                fromTime: 9,
                description: "Dra på loppemarked",
                Picture: "dateImage/flea_market.jpg",
                Category: ["sosialt","ute","kultur"],
                review: [{
                    comment: null,
                    Rating: null
                }]
            },

            {
                Name: "standup-show",
                home: false,
                timeSpent: 3,
                maxPrice: 200,
                fromTime: 16,
                description: "Se et standup-show",
                Picture: "dateImage/standup.jpg",
                Category: ["inne","sosialt","kreativitet","kultur"],
                review: [{
                    comment: null,
                    Rating: null
                }]
            },

            {
                Name: "puzzle-kveld",
                home: true,
                timeSpent: 3,
                maxPrice: 100,
                fromTime: 19,
                description: "Legg puslespill sammen",
                Picture: "dateImage/puzzle.jpg",
                Category: ["cozy","inne","usosialt","kreativitet"],
                review: [{
                    comment: null,
                    Rating: null
                }]
            },

            {
                Name: "treningssenter",
                home: false,
                timeSpent: 2,
                maxPrice: 100,
                fromTime: 9,
                description: "Tren sammen på senteret",
                Picture: "dateImage/gym.jpg",
                Category: ["inne","sosialt"],
                review: [{
                    comment: null,
                    Rating: null
                }]
            },

            {
                Name: "klatring",
                home: false,
                timeSpent: 3,
                maxPrice: 150,
                fromTime: 10,
                description: "Prøv klatring",
                Picture: "dateImage/climbing.jpg",
                Category: ["inne","sosialt","ute"],
                review: [{
                    comment: null,
                    Rating: null
                }]
            },

            {
                Name: "badminton",
                home: false,
                timeSpent: 2,
                maxPrice: 0,
                fromTime: 9,
                description: "Spill badminton i parken",
                Picture: "dateImage/badminton.jpg",
                Category: ["sosialt","ute"],
                review: [{
                    comment: null,
                    Rating: null
                }]
            },

            {
                Name: "frisbeegolf",
                home: false,
                timeSpent: 3,
                maxPrice: 50,
                fromTime: 16,
                description: "Spill frisbeegolf",
                Picture: "dateImage/frisbeegolf.jpg",
                Category: ["sosialt","ute"],
                review: [{
                    comment: null,
                    Rating: null
                }]
            },

            {
                Name: "utendørs yoga",
                home: false,
                timeSpent: 2,
                maxPrice: 0,
                fromTime: 9,
                description: "Gjør yoga utendørs",
                Picture: "dateImage/yoga.jpg",
                Category: ["sosialt","ute"],
                review: [{
                    comment: null,
                    Rating: null
                }]
            },

            {
                Name: "spakveld",
                home: true,
                timeSpent: 2,
                maxPrice: 200,
                fromTime: 19,
                description: "Ha en spakveld hjemme",
                Picture: "dateImage/spa.jpg",
                Category: ["cozy","inne","sosialt"],
                review: [{
                    comment: null,
                    Rating: null
                }]
            },

            {
                Name: "kajakkpadling",
                home: false,
                timeSpent: 4,
                maxPrice: 300,
                fromTime: 12,
                description: "Prøv kajakkpadling",
                Picture: "dateImage/kayaking.jpg",
                Category: ["sosialt","ute"],
                review: [{
                    comment: null,
                    Rating: null
                }]
            },

            {
                Name: "opera",
                home: false,
                timeSpent: 3,
                maxPrice: 200,
                fromTime: 18,
                description: "Gå på opera",
                Picture: "dateImage/opera.jpg",
                Category: ["inne","sosialt","kreativitet","kultur"],
                review: [{
                    comment: null,
                    Rating: null
                }]
            },

            {
                Name: "teaterstykke",
                home: false,
                timeSpent: 3,
                maxPrice: 250,
                fromTime: 18,
                description: "Se et teaterstykke",
                Picture: "dateImage/theater.jpg",
                Category: ["inne","sosialt","kreativitet","kultur"],
                review: [{
                    comment: null,
                    Rating: null
                }]
            },

            {
                Name: "slakkline",
                home: false,
                timeSpent: 2,
                maxPrice: 0,
                fromTime: 14,
                description: "Prøv slakkline i parken",
                Picture: "dateImage/slackline.jpg",
                Category: ["sosialt","ute"],
                review: [{
                    comment: null,
                    Rating: null
                }]
            },

            {
                Name: "middag ute",
                home: false,
                timeSpent: 2,
                maxPrice: 500,
                fromTime: 17,
                description: "Spis middag på restaurant",
                Picture: "dateImage/dinner_out.jpg",
                Category: ["sosialt","ute","mat"],
                review: [{
                    comment: null,
                    Rating: null
                }]
            },

            {
                Name: "historisk vandring",
                home: false,
                timeSpent: 3,
                maxPrice: 0,
                fromTime: 12,
                description: "Gå en historisk vandring",
                Picture: "dateImage/historic_walk.jpg",
                Category: ["sosialt","ute","kreativitet","kultur"],
                review: [{
                    comment: null,
                    Rating: null
                }]
            },

            {
                Name: "bingo",
                home: false,
                timeSpent: 2,
                maxPrice: 50,
                fromTime: 17,
                description: "Spill bingo",
                Picture: "dateImage/bingo.jpg",
                Category: ["inne","sosialt"],
                review: [{
                    comment: null,
                    Rating: null
                }]
            },

            {
                Name: "utendørs skøyting",
                home: false,
                timeSpent: 3,
                maxPrice: 100,
                fromTime: 15,
                description: "Skøyte utendørs",
                Picture: "dateImage/ice_skating.jpg",
                Category: ["sosialt","ute"],
                review: [{
                    comment: null,
                    Rating: null
                }]
            },

            {
                Name: "bygge møbler sammen",
                home: true,
                timeSpent: 3,
                maxPrice: 0,
                fromTime: 13,
                description: "Bygg møbler sammen",
                Picture: "dateImage/building_furniture.jpg",
                Category: ["cozy","inne","usosialt","kreativitet"],
                review: [{
                    comment: null,
                    Rating: null
                }]
            },

            {
                Name: "utendørs maleri",
                home: false,
                timeSpent: 3,
                maxPrice: 150,
                fromTime: 10,
                description: "Mal utendørs",
                Picture: "dateImage/outdoor_painting.jpg",
                Category: ["sosialt","ute","kreativitet"],
                review: [{
                    comment: null,
                    Rating: null
                }]
            },
            {
                Name: "romantisk middag hjemme",
                home: true,
                timeSpent: 2,
                maxPrice: 300,
                fromTime: 18,
                description: "Lag en romantisk middag hjemme",
                Picture: "dateImage/dinner_home.jpg",
                Category: ["cozy","inne","usosialt","mat"],
                review: [{
                    comment: null,
                    Rating: null
                }]
            },

            {
                Name: "ballongferd",
                home: false,
                timeSpent: 3,
                maxPrice: 2000,
                fromTime: 9,
                description: "Ta en tur i luftballong",
                Picture: "dateImage/hot_air_balloon.jpg",
                Category: ["sosialt","ute"],
                review: [{
                    comment: null,
                    Rating: null
                }]
            },

            {
                Name: "weekendtur",
                home: false,
                timeSpent: 48,
                maxPrice: 2000,
                fromTime: 9,
                description: "Ta en weekendtur sammen",
                Picture: "dateImage/weekend_trip.jpg",
                Category: ["sosialt","ute"],
                review: [{
                    comment: null,
                    Rating: null
                }]
            },

            {
                Name: "dansekurs",
                home: false,
                timeSpent: 2,
                maxPrice: 300,
                fromTime: 10,
                description: "Delta på dansekurs sammen",
                Picture: "dateImage/dance_class.jpg",
                Category: ["inne","sosialt","kreativitet"],
                review: [{
                    comment: null,
                    Rating: null
                }]
            },

            {
                Name: "gokart",
                home: false,
                timeSpent: 2,
                maxPrice: 500,
                fromTime: 14,
                description: "Kjør gokart",
                Picture: "dateImage/gokart.jpg",
                Category: ["inne","sosialt","ute"],
                review: [{
                    comment: null,
                    Rating: null
                }]
            },

            {
                Name: "kampsport",
                home: false,
                timeSpent: 2,
                maxPrice: 300,
                fromTime: 16,
                description: "Prøv kampsport",
                Picture: "dateImage/martial_arts.jpg",
                Category: ["inne","sosialt"],
                review: [{
                    comment: null,
                    Rating: null
                }]
            },

            {
                Name: "dyrehagebesøk",
                home: false,
                timeSpent: 4,
                maxPrice: 400,
                fromTime: 9,
                description: "Besøk dyrehagen",
                Picture: "dateImage/zoo.jpg",
                Category: ["sosialt","ute"],
                review: [{
                    comment: null,
                    Rating: null
                }]
            },

            {
                Name: "matlagingskurs",
                home: false,
                timeSpent: 3,
                maxPrice: 600,
                fromTime: 15,
                description: "Delta på et matlagingskurs",
                Picture: "dateImage/cooking_class.jpg",
                Category: ["inne","sosialt","mat"],
                review: [{
                    comment: null,
                    Rating: null
                }]
            },

            {
                Name: "småflytur",
                home: false,
                timeSpent: 1,
                maxPrice: 2000,
                fromTime: 8,
                description: "Ta en tur i småfly",
                Picture: "dateImage/small_plane.jpg",
                Category: ["sosialt","ute"],
                review: [{
                    comment: null,
                    Rating: null
                }]
            },

            {
                Name: "klatrepark",
                home: false,
                timeSpent: 3,
                maxPrice: 400,
                fromTime: 11,
                description: "Besøk en klatrepark",
                Picture: "dateImage/climbing_park.jpg",
                Category: ["sosialt","ute"],
                review: [{
                    comment: null,
                    Rating: null
                }]
            },

            {
                Name: "spadag",
                home: false,
                timeSpent: 5,
                maxPrice: 2000,
                fromTime: 8,
                description: "Tilbring en dag på spa",
                Picture: "dateImage/spa_day.jpg",
                Category: ["cozy","inne","sosialt",],
                review: [{
                    comment: null,
                    Rating: null
                }]
            },
        ]
    }
}
