const model = {
    app: {
        loggedinuserID: 0,
        pages: ["HomePage", "Login", "infopage", "memory", "ongoingDate", "friendPage","profilePage"],
        currentpage: "profilePage",
        selectedDate: 9,
        selectedFriend: 0,
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
            showMessage: '',
        },
        filter: {
            isOpen: false,
            home: false,
            buttoncounter: 0,
            disableTimeSpent: true,
            disablePrice: true,
            disableFromTime: true,
            disableHome: true,
            disableCategory: true,
            categoryDropDown: false,
            timeUsage: 4,
            maxPrice: 800,
            fromTime: 15,
            categories: ['cozy', 'ute', 'inne', 'sosialt', 'usosialt', 'kultur',
                 'innadvent', 'mat', 'kreativitet'],
            selectedCategory: 'kultur',
            startWheel: false,
        },
        endDate: {
            rating: null,
            comment: null,
            memoryPicture: null,
            showongoingMessage: '',
        },
        profile: {
            inputSearch: '',
            searchresult: '',
            showSearch: '',
        }
    },

    data: {
        users:
            [
                {
                    ID: 0,
                    name: "Therese",
                    password: "123",
                    birthday: '13.10.16',
                    adress: "getacademny",
                    eMail: "therese@date.no",
                    phone: "69696969",
                    partner: [
                        {
                            userId: 1,
                            hasAccepted: false,
                        }
                    ],
                    ongoingDate: false,
                    doneDates: ["kino","piknik i parken","sightseeing"],
                    finishedDates: [
                        {
                            Name: "kino",
                            Rating: 5,
                            day: '14.10.2024, 11:08:13',
                            comment: 'Rågod film og hyggelig selskap.',
                            memoryPicture: "dateImage/kino.jpg",
                        },
                        {
                            Name: "piknik i parken",
                            Rating: 4,
                            day: '14.10.2024, 11:08:13',
                            comment: 'Raff pølse i Thermos date.',
                            memoryPicture: "dateImage/park.jpg",
                        },
                        {
                            Name: "sightseeing",
                            Rating: 2,
                            day: '14.10.2024, 11:08:13',
                            comment: 'Grei date, men satt ikke pris på alle duene.',
                            memoryPicture: "dateImage/sightseeing.jpg",
                        }
                    ],
                },
                {
                    ID: 1,
                    name: "Martin",
                    password: "123",
                    birthday: '13.10.16',
                    adress: "getacademny",
                    eMail: "martinskal@paadate.no",
                    phone: "69696969",
                    partner: [
                        {
                            userId: 0,
                            hasAccepted: true,
                        }
                    ],
                    ongoingDate: false,
                    doneDates: ["hjemmekino","sightseeing","kino","piknik i parken","museumstur","tur i skogen","baking","brettspillkveld","kafébesøk","konsert i parken"],
                    finishedDates: [
                        {
                            Name: "hjemmekino",
                            Rating: 5,
                            day: '14.10.2024, 11:08:13',
                            comment: 'Filmen var god, og likte daten.',
                            memoryPicture: "dateImage/home_theater.jpg",
                        },
                        {
                            Name: "sightseeing",
                            Rating: 4,
                            day: '14.10.2024, 11:08:13',
                            comment: 'Kult å se nye sider av byen.',
                            memoryPicture: "dateImage/sightseeing.jpg",
                        },
                        {
                            Name: "kino",
                            Rating: 2,
                            day: '14.10.2024, 11:08:13',
                            comment: 'Koselig, men dårlig film.',
                            memoryPicture: "dateImage/kino.jpg",
                        },
                        {
                            Name: "piknik i parken",
                            Rating: 1,
                            day: '14.10.2024, 11:08:13',
                            comment: 'Likte ikke maten',
                            memoryPicture: "dateImage/park.jpg",
                        },
                        {
                            Name: "museumstur",
                            Rating: 1,
                            day: '14.10.2024, 11:08:13',
                            comment: 'Alt for mye gamle folk.',
                            memoryPicture: "dateImage/museum.jpg",
                        },
                        {
                            Name: "tur i skogen",
                            Rating: 1,
                            day: '14.10.2024, 11:08:13',
                            comment: 'Alt for mye joggere.',
                            memoryPicture: "dateImage/forest.jpg",
                        },
                        {
                            Name: "baking",
                            Rating: 5,
                            day: '14.10.2024, 11:08:13',
                            comment: 'Likte å leke med deg.',
                            memoryPicture: "dateImage/baking.jpg",
                        },
                        {
                            Name: "brettspillkveld",
                            Rating: 1,
                            day: '14.10.2024, 11:08:13',
                            comment: 'Tapte.',
                            memoryPicture: "dateImage/boardgames.jpg",
                        },
                        {
                            Name: "kafébesøk",
                            Rating: 4,
                            day: '14.10.2024, 11:08:13',
                            comment: 'Mye folk, men hyggelig selskap.',
                            memoryPicture: "dateImage/cafe.jpg",
                        },
                        {
                            Name: "konsert i parken",
                            Rating: 1,
                            day: '14.10.2024, 11:08:13',
                            comment: 'Mannen hadde ikke peiling på stratocasteren.',
                            memoryPicture: "dateImage/concert.jpg",
                        },
                    ],
                },
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
                review: [
                    {
                    userId: 0,
                    comment: 'Rågod film og hyggelig selskap.',
                    Rating: 5,
                    },
                    {
                    userId: 1,
                    comment: 'Koselig, men dårlig film.',
                    Rating: 2,
                    },
                ]
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
                review: [
                    {
                    userId: 0,    
                    comment: 'Raff pølse i Thermos date.',
                    Rating: 4,
                    },
                    {
                    userId: 1,    
                    comment: 'Likte ikke maten',
                    Rating: 1,
                    },
            ]
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
                review: [
                    {
                        userId: 1,    
                        comment: 'Alt for mye gamle folk.',
                        Rating: 1,
                    },
                ]
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
                review: [
                    {
                    userId: 1,
                    comment: 'Filmen var god, og likte daten.',
                    Rating: 5,
                    }
            ]
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
                review: [
                    {
                    userId: 1,
                    comment: 'Alt for mye joggere.',
                    Rating: 1,
                    }
                ]
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
                review: [
                    {
                    userId: 1,
                    comment: 'Likte å leke med deg.',
                    Rating: 5,
                    }
                ]
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
                review: [
                    {
                    userId: 1,
                    comment: 'Tapte.',
                    Rating: 1,
                    }
                ]
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
                review: [
                    {
                    userId: 1,
                    comment: 'Mye folk, men hyggelig selskap.',
                    Rating: 4,
                    }
                ]
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
                review: [
                    {
                    userId: 1,
                    comment: 'Mannen hadde ikke peiling på stratocasteren.',
                    Rating: 1,
                    }
                ]
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
                review: [
                    {
                    userId: 1,
                    comment: 'Kult å se nye sider av byen.',
                    Rating: 4,
                    },
                    {
                    userId: 0,
                    comment: 'Grei date, men satt ikke pris på alle duene.',
                    Rating: 2,
                    },
            ]
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
                review: []
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
                review: []
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
                review: []
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
                review: []
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
                review: []
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
                review: []
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
                review: []
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
                review: []
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
                review: []
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
                review: []
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
                review: []
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
                review: []
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
                review: []
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
                review: []
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
                review: []
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
                review: []
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
                review: []
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
                review: []
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
                review: []
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
                review: []
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
                review: []
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
                review: []
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
                review: []
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
                review: []
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
                review: []
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
                review: []
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
                review: []
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
                review: []
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
                review: []
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
                review: []
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
                review: []
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
                review: []
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
                review: []
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
                review: []
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
                review: []
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
                review: []
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
                review: []
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
                review: []
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
                review: []
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
                review: []
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
                review: []
            },
        ]
    }
}
