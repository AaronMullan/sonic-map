import { APIData } from '../types/data'

// export interface TwitterPercentage {
//     name: string,
//     url: string,
//     promoted_content: any,
//     query: string,
//     tweet_volume: any,
//     portlandTweetVolume?: number,
//     portlandPercentage: number,
//     mesaTweetVolume?: number,
//     mesaPercentage: number,
//     unitedstatesTweetVolume?: number,
//     unitedstatesPercentage: number,
//     partisanship: number
// }

// export const demoPercentage: TwitterPercentage[] = [{
//     name: '#SenateBlueWave',
//     url: 'http://twitter.com/search?q=%23SenateBlueWave',
//     promoted_content: null,
//     query: '%23SenateBlueWave',
//     tweet_volume: 12993,
//     portlandTweetVolume: 13266,
//     portlandPercentage: 0.003867124370637606,
//     unitedstatesTweetVolume: 12993,
//     unitedstatesPercentage: 0.0038670632641192603,
//     mesaPercentage: 0,
//     partisanship: 0
// },
// {
//     name: 'Yannick Ngakoue',
//     url: 'http://twitter.com/search?q=%22Yannick+Ngakoue%22',
//     promoted_content: null,
//     query: '%22Yannick+Ngakoue%22',
//     tweet_volume: 13627,
//     mesaTweetVolume: 13627,
//     mesaPercentage: 0.00429119406167013,
//     portlandPercentage: 0,
//     unitedstatesPercentage: 0,
//     partisanship: Infinity
// },
// {
//     name: 'Ngakoue',
//     url: 'http://twitter.com/search?q=Ngakoue',
//     promoted_content: null,
//     query: 'Ngakoue',
//     tweet_volume: 16844,
//     portlandTweetVolume: 16844,
//     portlandPercentage: 0.004910134396126929,
//     unitedstatesPercentage: 0,
//     mesaPercentage: 0,
//     partisanship: 0
// },
// {
//     name: 'Rambo',
//     url: 'http://twitter.com/search?q=Rambo',
//     promoted_content: null,
//     query: 'Rambo',
//     tweet_volume: 18556,
//     mesaTweetVolume: 18556,
//     mesaPercentage: 0.005843354884299621,
//     portlandPercentage: 0,
//     unitedstatesPercentage: 0,
//     partisanship: Infinity
// },
// {
//     name: 'Yannick',
//     url: 'http://twitter.com/search?q=Yannick',
//     promoted_content: null,
//     query: 'Yannick',
//     tweet_volume: 19037,
//     portlandTweetVolume: 19063,
//     portlandPercentage: 0.005556987176048899,
//     unitedstatesTweetVolume: 19037,
//     unitedstatesPercentage: 0.005665918830065293,
//     mesaPercentage: 0,
//     partisanship: 0
// },
// {
//     name: 'Luka',
//     url: 'http://twitter.com/search?q=Luka',
//     promoted_content: null,
//     query: 'Luka',
//     tweet_volume: 22741,
//     mesaTweetVolume: 22741,
//     mesaPercentage: 0.00716122728087183,
//     portlandPercentage: 0,
//     unitedstatesPercentage: 0,
//     partisanship: Infinity
// },
// {
//     name: '#TrumpIsPathetic',
//     url: 'http://twitter.com/search?q=%23TrumpIsPathetic',
//     promoted_content: null,
//     query: '%23TrumpIsPathetic',
//     tweet_volume: null,
//     portlandTweetVolume: 19443,
//     portlandPercentage: 0.005667759621461404,
//     unitedstatesTweetVolume: 18885,
//     unitedstatesPercentage: 0.005620679576917743,
//     mesaTweetVolume: 0,
//     mesaPercentage: 0,
//     partisanship: 0
// },
// {
//     name: 'Tom Holland',
//     url: 'http://twitter.com/search?q=%22Tom+Holland%22',
//     promoted_content: null,
//     query: '%22Tom+Holland%22',
//     tweet_volume: 45498,
//     mesaTweetVolume: 45498,
//     mesaPercentage: 0.014327493022519086,
//     portlandPercentage: 0,
//     unitedstatesPercentage: 0,
//     partisanship: Infinity
// },
// {
//     name: 'Streamers',
//     url: 'http://twitter.com/search?q=Streamers',
//     promoted_content: null,
//     query: 'Streamers',
//     tweet_volume: 23181,
//     portlandTweetVolume: 23597,
//     portlandPercentage: 0.00687867735368126,
//     unitedstatesTweetVolume: 23181,
//     unitedstatesPercentage: 0.006899283731666941,
//     mesaPercentage: 0,
//     partisanship: 0
// },
// {
//     name: 'Tony Bobulinski',
//     url: 'http://twitter.com/search?q=%22Tony+Bobulinski%22',
//     promoted_content: null,
//     query: '%22Tony+Bobulinski%22',
//     tweet_volume: 108176,
//     mesaTweetVolume: 108176,
//     mesaPercentage: 0.034065033302651204,
//     portlandPercentage: 0,
//     unitedstatesPercentage: 0,
//     partisanship: Infinity
// },
// {
//     name: 'shawn',
//     url: 'http://twitter.com/search?q=shawn',
//     promoted_content: null,
//     query: 'shawn',
//     tweet_volume: 63256,
//     portlandTweetVolume: 63514,
//     portlandPercentage: 0.018514739731394312,
//     unitedstatesTweetVolume: 63256,
//     unitedstatesPercentage: 0.0188266723493518,
//     mesaPercentage: 0,
//     partisanship: 0
// },
// {
//     name: 'The Prom',
//     url: 'http://twitter.com/search?q=%22The+Prom%22',
//     promoted_content: null,
//     query: '%22The+Prom%22',
//     tweet_volume: 10986,
//     portlandTweetVolume: 11058,
//     portlandPercentage: 0.0032234781615038933,
//     unitedstatesTweetVolume: 11035,
//     unitedstatesPercentage: 0.003284310253179099,
//     mesaTweetVolume: 10986,
//     mesaPercentage: 0.003459533129926473,
//     partisanship: 10.732298953477166
// },
// {
//     name: 'Stadia',
//     url: 'http://twitter.com/search?q=Stadia',
//     promoted_content: null,
//     query: 'Stadia',
//     tweet_volume: 10973,
//     portlandTweetVolume: 18572,
//     portlandPercentage: 0.00541385751631853,
//     unitedstatesTweetVolume: 17986,
//     unitedstatesPercentage: 0.005353113204683215,
//     mesaTweetVolume: 10973,
//     mesaPercentage: 0.00345543938054644,
//     partisanship: 6.382582788946705
// },
// {
//     name: 'Irene',
//     url: 'http://twitter.com/search?q=Irene',
//     promoted_content: null,
//     query: 'Irene',
//     tweet_volume: 426887,
//     portlandTweetVolume: 431546,
//     portlandPercentage: 0.12579843612627592,
//     unitedstatesTweetVolume: 431266,
//     unitedstatesPercentage: 0.1283562614995503,
//     mesaTweetVolume: 426887,
//     mesaPercentage: 0.13442833781493924,
//     partisanship: 10.68601025214659
// },
// {
//     name: 'HARRY IS GOLDEN',
//     url: 'http://twitter.com/search?q=%22HARRY+IS+GOLDEN%22',
//     promoted_content: null,
//     query: '%22HARRY+IS+GOLDEN%22',
//     tweet_volume: 85312,
//     portlandTweetVolume: 114694,
//     portlandPercentage: 0.03343403908984695,
//     unitedstatesTweetVolume: 113918,
//     unitedstatesPercentage: 0.03390503447409666,
//     mesaTweetVolume: 85312,
//     mesaPercentage: 0.026865072854568295,
//     partisanship: 8.03524599058285
// },
// {
//     name: 'Nintendo',
//     url: 'http://twitter.com/search?q=Nintendo',
//     promoted_content: null,
//     query: 'Nintendo',
//     tweet_volume: 104367,
//     portlandTweetVolume: 105551,
//     portlandPercentage: 0.03076879575193502,
//     unitedstatesTweetVolume: 105346,
//     unitedstatesPercentage: 0.03135377869790715,
//     mesaTweetVolume: 104367,
//     mesaPercentage: 0.032865564734301494,
//     partisanship: 10.681459553786603
// },
// {
//     name: 'Trump\'s Twitter',
//     url: 'http://twitter.com/search?q=%22Trump%27s+Twitter%22',
//     promoted_content: null,
//     query: '%22Trump%27s+Twitter%22',
//     tweet_volume: 282566,
//     portlandTweetVolume: 367489,
//     portlandPercentage: 0.10712540840051585,
//     unitedstatesTweetVolume: 383327,
//     unitedstatesPercentage: 0.11408833678481056,
//     mesaTweetVolume: 282566,
//     mesaPercentage: 0.08898110671680355,
//     partisanship: 8.30625600829682
// },
// {
//     name: 'Ravens',
//     url: 'http://twitter.com/search?q=Ravens',
//     promoted_content: null,
//     query: 'Ravens',
//     tweet_volume: 46486,
//     portlandTweetVolume: 47554,
//     portlandPercentage: 0.013862297024069103,
//     unitedstatesTweetVolume: 47482,
//     unitedstatesPercentage: 0.014131909328631625,
//     mesaTweetVolume: 46486,
//     mesaPercentage: 0.014638617975401605,
//     partisanship: 10.560023313585457
// },
// {
//     name: 'Bubu',
//     url: 'http://twitter.com/search?q=Bubu',
//     promoted_content: null,
//     query: 'Bubu',
//     tweet_volume: 46507,
//     portlandTweetVolume: 59748,
//     portlandPercentage: 0.017416926496069327,
//     mesaTweetVolume: 46507,
//     mesaPercentage: 0.01464523095516935,
//     unitedstatesPercentage: 0,
//     partisanship: 8.40861960258861
// },
// {
//     name: 'Ivy Park',
//     url: 'http://twitter.com/search?q=%22Ivy+Park%22',
//     promoted_content: null,
//     query: '%22Ivy+Park%22',
//     tweet_volume: 18928,
//     portlandTweetVolume: 19587,
//     portlandPercentage: 0.005709736548144037,
//     unitedstatesTweetVolume: 19514,
//     unitedstatesPercentage: 0.005807886749482278,
//     mesaTweetVolume: 18928,
//     mesaPercentage: 0.005960499097328262,
//     partisanship: 10.439184097321856
// },
// {
//     name: 'Hetalia',
//     url: 'http://twitter.com/search?q=Hetalia',
//     promoted_content: null,
//     query: 'Hetalia',
//     tweet_volume: 20222,
//     portlandTweetVolume: 23329,
//     portlandPercentage: 0.006800553629021914,
//     unitedstatesTweetVolume: 23181,
//     unitedstatesPercentage: 0.006899283731666941,
//     mesaTweetVolume: 20222,
//     mesaPercentage: 0.006367984612540792,
//     partisanship: 9.363920880448468
// },
// {
//     name: '#8YearsOfRed',
//     url: 'http://twitter.com/search?q=%238YearsOfRed',
//     promoted_content: null,
//     query: '%238YearsOfRed',
//     tweet_volume: 53157,
//     portlandTweetVolume: 55051,
//     portlandPercentage: 0.016047720769483707,
//     unitedstatesTweetVolume: 54974,
//     unitedstatesPercentage: 0.01636172830614117,
//     mesaTweetVolume: 53157,
//     mesaPercentage: 0.016739341214955537,
//     partisanship: 10.430977367693867
// },
// {
//     name: 'Suburban',
//     url: 'http://twitter.com/search?q=Suburban',
//     promoted_content: null,
//     query: 'Suburban',
//     tweet_volume: 48769,
//     portlandTweetVolume: 55904,
//     portlandPercentage: 0.01629637575879125,
//     unitedstatesTweetVolume: 55416,
//     unitedstatesPercentage: 0.0164932792922676,
//     mesaTweetVolume: 48769,
//     mesaPercentage: 0.015357543347295118,
//     partisanship: 9.423901102065795
// },
// {
//     name: 'Shadow Dragon',
//     url: 'http://twitter.com/search?q=%22Shadow+Dragon%22',
//     promoted_content: null,
//     query: '%22Shadow+Dragon%22',
//     tweet_volume: 17107,
//     portlandTweetVolume: 17733,
//     portlandPercentage: 0.005169283617105131,
//     unitedstatesTweetVolume: 17702,
//     unitedstatesPercentage: 0.005268587231697002,
//     mesaTweetVolume: 17107,
//     mesaPercentage: 0.005387059280325157,
//     partisanship: 10.421287898577294
// },
// {
//     name: '#DefundNPR',
//     url: 'http://twitter.com/search?q=%23DefundNPR',
//     promoted_content: null,
//     query: '%23DefundNPR',
//     tweet_volume: 21415,
//     portlandTweetVolume: 24121,
//     portlandPercentage: 0.0070314267257763985,
//     unitedstatesTweetVolume: 24015,
//     unitedstatesPercentage: 0.007147504370647582,
//     mesaTweetVolume: 21415,
//     mesaPercentage: 0.006743664844108449,
//     partisanship: 9.590748943435552
// },
// {
//     name: 'Dez Bryant',
//     url: 'http://twitter.com/search?q=%22Dez+Bryant%22',
//     promoted_content: null,
//     query: '%22Dez+Bryant%22',
//     tweet_volume: 11947,
//     portlandTweetVolume: 12480,
//     portlandPercentage: 0.0036380003124948986,
//     unitedstatesTweetVolume: 12445,
//     unitedstatesPercentage: 0.0037039638514557217,
//     mesaTweetVolume: 11947,
//     mesaPercentage: 0.003762155680250462,
//     partisanship: 10.34127365885359
// },
// {
//     name: '60 Minutes',
//     url: 'http://twitter.com/search?q=%2260+Minutes%22',
//     promoted_content: null,
//     query: '%2260+Minutes%22',
//     tweet_volume: 270691,
//     portlandTweetVolume: 304402,
//     portlandPercentage: 0.08873514191699296,
//     unitedstatesTweetVolume: 302818,
//     unitedstatesPercentage: 0.09012671157654631,
//     mesaTweetVolume: 270691,
//     mesaPercentage: 0.0852416241100425,
//     partisanship: 9.606298279184761
// },
// {
//     name: 'Mother 3',
//     url: 'http://twitter.com/search?q=%22Mother+3%22',
//     promoted_content: null,
//     query: '%22Mother+3%22',
//     tweet_volume: 13766,
//     portlandTweetVolume: 14402,
//     portlandPercentage: 0.004198275681133937,
//     unitedstatesTweetVolume: 14359,
//     unitedstatesPercentage: 0.004273621289116329,
//     mesaTweetVolume: 13766,
//     mesaPercentage: 0.004334965689656639,
//     partisanship: 10.325586071293401
// },
// {
//     name: 'Leno',
//     url: 'http://twitter.com/search?q=Leno',
//     promoted_content: null,
//     query: 'Leno',
//     tweet_volume: 23050,
//     portlandTweetVolume: 25503,
//     portlandPercentage: 0.007434288619355561,
//     unitedstatesTweetVolume: 25448,
//     unitedstatesPercentage: 0.007574003382229426,
//     mesaTweetVolume: 23050,
//     mesaPercentage: 0.007258532554597233,
//     partisanship: 9.763587245858686
// },
// {
//     name: '#2YearsWithMono',
//     url: 'http://twitter.com/search?q=%232YearsWithMono',
//     promoted_content: null,
//     query: '%232YearsWithMono',
//     tweet_volume: 284414,
//     portlandTweetVolume: 298143,
//     portlandPercentage: 0.08691060313847489,
//     unitedstatesTweetVolume: 297675,
//     unitedstatesPercentage: 0.08859601763616569,
//     mesaTweetVolume: 284414,
//     mesaPercentage: 0.08956304893636519,
//     partisanship: 10.305192427863393
// },
// {
//     name: 'Leslie Stahl',
//     url: 'http://twitter.com/search?q=%22Leslie+Stahl%22',
//     promoted_content: null,
//     query: '%22Leslie+Stahl%22',
//     tweet_volume: 118348,
//     portlandTweetVolume: 130526,
//     portlandPercentage: 0.038049168973454256,
//     unitedstatesTweetVolume: 129886,
//     unitedstatesPercentage: 0.03865753706791305,
//     mesaTweetVolume: 118348,
//     mesaPercentage: 0.03726823474062791,
//     partisanship: 9.794756560026007
// },
// {
//     name: 'Nathan Drake',
//     url: 'http://twitter.com/search?q=%22Nathan+Drake%22',
//     promoted_content: null,
//     query: '%22Nathan+Drake%22',
//     tweet_volume: 34830,
//     portlandTweetVolume: 36673,
//     portlandPercentage: 0.010690415501612614,
//     unitedstatesTweetVolume: 36553,
//     unitedstatesPercentage: 0.010879147501989634,
//     mesaTweetVolume: 34830,
//     mesaPercentage: 0.010968099300504193,
//     partisanship: 10.259750239688712
// },
// {
//     name: 'Kehlani',
//     url: 'http://twitter.com/search?q=Kehlani',
//     promoted_content: null,
//     query: 'Kehlani',
//     tweet_volume: 14163,
//     portlandTweetVolume: 15578,
//     portlandPercentage: 0.00454108724904211,
//     unitedstatesTweetVolume: 15501,
//     unitedstatesPercentage: 0.004613510941053848,
//     mesaTweetVolume: 14163,
//     mesaPercentage: 0.0044599824976468815,
//     partisanship: 9.821397945145545
// },
// {
//     name: 'Derek Chauvin',
//     url: 'http://twitter.com/search?q=%22Derek+Chauvin%22',
//     promoted_content: null,
//     query: '%22Derek+Chauvin%22',
//     tweet_volume: 21236,
//     portlandTweetVolume: 22416,
//     portlandPercentage: 0.006534408253596607,
//     unitedstatesTweetVolume: 22367,
//     unitedstatesPercentage: 0.006657015625995189,
//     mesaTweetVolume: 21236,
//     mesaPercentage: 0.006687297064183377,
//     partisanship: 10.233974990011712
// },
// {
//     name: 'Buhari',
//     url: 'http://twitter.com/search?q=Buhari',
//     promoted_content: null,
//     query: 'Buhari',
//     tweet_volume: 980848,
//     portlandTweetVolume: 1062669,
//     portlandPercentage: 0.30977485208963473,
//     unitedstatesTweetVolume: 1060348,
//     unitedstatesPercentage: 0.3155878394506526,
//     mesaTweetVolume: 980848,
//     mesaPercentage: 0.308872760915904,
//     partisanship: 9.970879134712016
// },
// {
//     name: 'Buhari',
//     url: 'http://twitter.com/search?q=Buhari',
//     promoted_content: null,
//     query: 'Buhari',
//     tweet_volume: 980848,
//     portlandTweetVolume: 1062669,
//     portlandPercentage: 0.30977485208963473,
//     unitedstatesTweetVolume: 1060348,
//     unitedstatesPercentage: 0.3155878394506526,
//     mesaTweetVolume: 980848,
//     mesaPercentage: 0.308872760915904,
//     partisanship: 9.970879134712016
// }];

export const portlandData: APIData = [
    {
        "trends": [
            {
                "name": "60 Minutes",
                "url": "http://twitter.com/search?q=%2260+Minutes%22",
                "promoted_content": null,
                "query": "%2260+Minutes%22",
                "tweet_volume": 304402
            },
            {
                "name": "Stadia",
                "url": "http://twitter.com/search?q=Stadia",
                "promoted_content": null,
                "query": "Stadia",
                "tweet_volume": 18572
            },
            {
                "name": "#2YearsWithMono",
                "url": "http://twitter.com/search?q=%232YearsWithMono",
                "promoted_content": null,
                "query": "%232YearsWithMono",
                "tweet_volume": 298143
            },
            {
                "name": "HARRY IS GOLDEN",
                "url": "http://twitter.com/search?q=%22HARRY+IS+GOLDEN%22",
                "promoted_content": null,
                "query": "%22HARRY+IS+GOLDEN%22",
                "tweet_volume": 114694
            },
            {
                "name": "#TrumpIsPathetic",
                "url": "http://twitter.com/search?q=%23TrumpIsPathetic",
                "promoted_content": null,
                "query": "%23TrumpIsPathetic",
                "tweet_volume": 19443
            },
            {
                "name": "Kenny Beats",
                "url": "http://twitter.com/search?q=%22Kenny+Beats%22",
                "promoted_content": null,
                "query": "%22Kenny+Beats%22",
                "tweet_volume": null
            },
            {
                "name": "Nathan Drake",
                "url": "http://twitter.com/search?q=%22Nathan+Drake%22",
                "promoted_content": null,
                "query": "%22Nathan+Drake%22",
                "tweet_volume": 36673
            },
            {
                "name": "Suburban",
                "url": "http://twitter.com/search?q=Suburban",
                "promoted_content": null,
                "query": "Suburban",
                "tweet_volume": 55904
            },
            {
                "name": "Gold Glove",
                "url": "http://twitter.com/search?q=%22Gold+Glove%22",
                "promoted_content": null,
                "query": "%22Gold+Glove%22",
                "tweet_volume": null
            },
            {
                "name": "#DefundNPR",
                "url": "http://twitter.com/search?q=%23DefundNPR",
                "promoted_content": null,
                "query": "%23DefundNPR",
                "tweet_volume": 24121
            },
            {
                "name": "Leslie Stahl",
                "url": "http://twitter.com/search?q=%22Leslie+Stahl%22",
                "promoted_content": null,
                "query": "%22Leslie+Stahl%22",
                "tweet_volume": 130526
            },
            {
                "name": "Ravens",
                "url": "http://twitter.com/search?q=Ravens",
                "promoted_content": null,
                "query": "Ravens",
                "tweet_volume": 47554
            },
            {
                "name": "#SenateBlueWave",
                "url": "http://twitter.com/search?q=%23SenateBlueWave",
                "promoted_content": null,
                "query": "%23SenateBlueWave",
                "tweet_volume": 13266
            },
            {
                "name": "Nintendo",
                "url": "http://twitter.com/search?q=Nintendo",
                "promoted_content": null,
                "query": "Nintendo",
                "tweet_volume": 105551
            },
            {
                "name": "Buhari",
                "url": "http://twitter.com/search?q=Buhari",
                "promoted_content": null,
                "query": "Buhari",
                "tweet_volume": 1062669
            },
            {
                "name": "Irene",
                "url": "http://twitter.com/search?q=Irene",
                "promoted_content": null,
                "query": "Irene",
                "tweet_volume": 431546
            },
            {
                "name": "#8YearsOfRed",
                "url": "http://twitter.com/search?q=%238YearsOfRed",
                "promoted_content": null,
                "query": "%238YearsOfRed",
                "tweet_volume": 55051
            },
            {
                "name": "Leno",
                "url": "http://twitter.com/search?q=Leno",
                "promoted_content": null,
                "query": "Leno",
                "tweet_volume": 25503
            },
            {
                "name": "Kehlani",
                "url": "http://twitter.com/search?q=Kehlani",
                "promoted_content": null,
                "query": "Kehlani",
                "tweet_volume": 15578
            },
            {
                "name": "Hetalia",
                "url": "http://twitter.com/search?q=Hetalia",
                "promoted_content": null,
                "query": "Hetalia",
                "tweet_volume": 23329
            },
            {
                "name": "Dez Bryant",
                "url": "http://twitter.com/search?q=%22Dez+Bryant%22",
                "promoted_content": null,
                "query": "%22Dez+Bryant%22",
                "tweet_volume": 12480
            },
            {
                "name": "Mother 3",
                "url": "http://twitter.com/search?q=%22Mother+3%22",
                "promoted_content": null,
                "query": "%22Mother+3%22",
                "tweet_volume": 14402
            },
            {
                "name": "Yannick",
                "url": "http://twitter.com/search?q=Yannick",
                "promoted_content": null,
                "query": "Yannick",
                "tweet_volume": 19063
            },
            {
                "name": "John Piper",
                "url": "http://twitter.com/search?q=%22John+Piper%22",
                "promoted_content": null,
                "query": "%22John+Piper%22",
                "tweet_volume": null
            },
            {
                "name": "Connie Chung",
                "url": "http://twitter.com/search?q=%22Connie+Chung%22",
                "promoted_content": null,
                "query": "%22Connie+Chung%22",
                "tweet_volume": null
            },
            {
                "name": "Tatum",
                "url": "http://twitter.com/search?q=Tatum",
                "promoted_content": null,
                "query": "Tatum",
                "tweet_volume": null
            },
            {
                "name": "Gerald Green",
                "url": "http://twitter.com/search?q=%22Gerald+Green%22",
                "promoted_content": null,
                "query": "%22Gerald+Green%22",
                "tweet_volume": null
            },
            {
                "name": "Ivy Park",
                "url": "http://twitter.com/search?q=%22Ivy+Park%22",
                "promoted_content": null,
                "query": "%22Ivy+Park%22",
                "tweet_volume": 19587
            },
            {
                "name": "Hallie Jackson",
                "url": "http://twitter.com/search?q=%22Hallie+Jackson%22",
                "promoted_content": null,
                "query": "%22Hallie+Jackson%22",
                "tweet_volume": null
            },
            {
                "name": "Sully",
                "url": "http://twitter.com/search?q=Sully",
                "promoted_content": null,
                "query": "Sully",
                "tweet_volume": null
            },
            {
                "name": "Jack Harlow",
                "url": "http://twitter.com/search?q=%22Jack+Harlow%22",
                "promoted_content": null,
                "query": "%22Jack+Harlow%22",
                "tweet_volume": null
            },
            {
                "name": "Money Trees",
                "url": "http://twitter.com/search?q=%22Money+Trees%22",
                "promoted_content": null,
                "query": "%22Money+Trees%22",
                "tweet_volume": null
            },
            {
                "name": "shawn",
                "url": "http://twitter.com/search?q=shawn",
                "promoted_content": null,
                "query": "shawn",
                "tweet_volume": 63514
            },
            {
                "name": "Bubu",
                "url": "http://twitter.com/search?q=Bubu",
                "promoted_content": null,
                "query": "Bubu",
                "tweet_volume": 59748
            },
            {
                "name": "Ball Arena",
                "url": "http://twitter.com/search?q=%22Ball+Arena%22",
                "promoted_content": null,
                "query": "%22Ball+Arena%22",
                "tweet_volume": null
            },
            {
                "name": "Ngakoue",
                "url": "http://twitter.com/search?q=Ngakoue",
                "promoted_content": null,
                "query": "Ngakoue",
                "tweet_volume": 16844
            },
            {
                "name": "Rudy Gay",
                "url": "http://twitter.com/search?q=%22Rudy+Gay%22",
                "promoted_content": null,
                "query": "%22Rudy+Gay%22",
                "tweet_volume": null
            },
            {
                "name": "Trump's Twitter",
                "url": "http://twitter.com/search?q=%22Trump%27s+Twitter%22",
                "promoted_content": null,
                "query": "%22Trump%27s+Twitter%22",
                "tweet_volume": 367489
            },
            {
                "name": "Streamers",
                "url": "http://twitter.com/search?q=Streamers",
                "promoted_content": null,
                "query": "Streamers",
                "tweet_volume": 23597
            },
            {
                "name": "Shadow Dragon",
                "url": "http://twitter.com/search?q=%22Shadow+Dragon%22",
                "promoted_content": null,
                "query": "%22Shadow+Dragon%22",
                "tweet_volume": 17733
            },
            {
                "name": "Jamal Murray",
                "url": "http://twitter.com/search?q=%22Jamal+Murray%22",
                "promoted_content": null,
                "query": "%22Jamal+Murray%22",
                "tweet_volume": null
            },
            {
                "name": "2k13",
                "url": "http://twitter.com/search?q=2k13",
                "promoted_content": null,
                "query": "2k13",
                "tweet_volume": null
            },
            {
                "name": "Derek Chauvin",
                "url": "http://twitter.com/search?q=%22Derek+Chauvin%22",
                "promoted_content": null,
                "query": "%22Derek+Chauvin%22",
                "tweet_volume": 22416
            },
            {
                "name": "Alex Hutchinson",
                "url": "http://twitter.com/search?q=%22Alex+Hutchinson%22",
                "promoted_content": null,
                "query": "%22Alex+Hutchinson%22",
                "tweet_volume": null
            },
            {
                "name": "Sing About Me",
                "url": "http://twitter.com/search?q=%22Sing+About+Me%22",
                "promoted_content": null,
                "query": "%22Sing+About+Me%22",
                "tweet_volume": null
            },
            {
                "name": "Klutch",
                "url": "http://twitter.com/search?q=Klutch",
                "promoted_content": null,
                "query": "Klutch",
                "tweet_volume": null
            },
            {
                "name": "The Prom",
                "url": "http://twitter.com/search?q=%22The+Prom%22",
                "promoted_content": null,
                "query": "%22The+Prom%22",
                "tweet_volume": 11058
            },
            {
                "name": "Lacazette",
                "url": "http://twitter.com/search?q=Lacazette",
                "promoted_content": null,
                "query": "Lacazette",
                "tweet_volume": null
            },
            {
                "name": "Crystal Dunn",
                "url": "http://twitter.com/search?q=%22Crystal+Dunn%22",
                "promoted_content": null,
                "query": "%22Crystal+Dunn%22",
                "tweet_volume": null
            }
        ],
        "as_of": "2020-10-22T19:30:53Z",
        "created_at": "2020-10-21T05:29:40Z",
        "locations": [
            {
                "name": "Portland",
                "woeid": 2475687
            }
        ]
    }
]
export const mesaData: APIData = [
    {
        "trends": [
            {
                "name": "#2YearsWithMono",
                "url": "http://twitter.com/search?q=%232YearsWithMono",
                "promoted_content": null,
                "query": "%232YearsWithMono",
                "tweet_volume": 284414
            },
            {
                "name": "60 Minutes",
                "url": "http://twitter.com/search?q=%2260+Minutes%22",
                "promoted_content": null,
                "query": "%2260+Minutes%22",
                "tweet_volume": 270691
            },
            {
                "name": "#BidenHarrisLandslide2020",
                "url": "http://twitter.com/search?q=%23BidenHarrisLandslide2020",
                "promoted_content": null,
                "query": "%23BidenHarrisLandslide2020",
                "tweet_volume": null
            },
            {
                "name": "HARRY IS GOLDEN",
                "url": "http://twitter.com/search?q=%22HARRY+IS+GOLDEN%22",
                "promoted_content": null,
                "query": "%22HARRY+IS+GOLDEN%22",
                "tweet_volume": 85312
            },
            {
                "name": "Nathan Drake",
                "url": "http://twitter.com/search?q=%22Nathan+Drake%22",
                "promoted_content": null,
                "query": "%22Nathan+Drake%22",
                "tweet_volume": 34830
            },
            {
                "name": "Stadia",
                "url": "http://twitter.com/search?q=Stadia",
                "promoted_content": null,
                "query": "Stadia",
                "tweet_volume": 10973
            },
            {
                "name": "Kenny Beats",
                "url": "http://twitter.com/search?q=%22Kenny+Beats%22",
                "promoted_content": null,
                "query": "%22Kenny+Beats%22",
                "tweet_volume": null
            },
            {
                "name": "Ravens",
                "url": "http://twitter.com/search?q=Ravens",
                "promoted_content": null,
                "query": "Ravens",
                "tweet_volume": 46486
            },
            {
                "name": "#DefundNPR",
                "url": "http://twitter.com/search?q=%23DefundNPR",
                "promoted_content": null,
                "query": "%23DefundNPR",
                "tweet_volume": 21415
            },
            {
                "name": "Tom Holland",
                "url": "http://twitter.com/search?q=%22Tom+Holland%22",
                "promoted_content": null,
                "query": "%22Tom+Holland%22",
                "tweet_volume": 45498
            },
            {
                "name": "Irene",
                "url": "http://twitter.com/search?q=Irene",
                "promoted_content": null,
                "query": "Irene",
                "tweet_volume": 426887
            },
            {
                "name": "Leslie Stahl",
                "url": "http://twitter.com/search?q=%22Leslie+Stahl%22",
                "promoted_content": null,
                "query": "%22Leslie+Stahl%22",
                "tweet_volume": 118348
            },
            {
                "name": "Nintendo",
                "url": "http://twitter.com/search?q=Nintendo",
                "promoted_content": null,
                "query": "Nintendo",
                "tweet_volume": 104367
            },
            {
                "name": "Leno",
                "url": "http://twitter.com/search?q=Leno",
                "promoted_content": null,
                "query": "Leno",
                "tweet_volume": 23050
            },
            {
                "name": "Suburban",
                "url": "http://twitter.com/search?q=Suburban",
                "promoted_content": null,
                "query": "Suburban",
                "tweet_volume": 48769
            },
            {
                "name": "#8YearsOfRed",
                "url": "http://twitter.com/search?q=%238YearsOfRed",
                "promoted_content": null,
                "query": "%238YearsOfRed",
                "tweet_volume": 53157
            },
            {
                "name": "#TrumpIsPathetic",
                "url": "http://twitter.com/search?q=%23TrumpIsPathetic",
                "promoted_content": null,
                "query": "%23TrumpIsPathetic",
                "tweet_volume": null
            },
            {
                "name": "Dez Bryant",
                "url": "http://twitter.com/search?q=%22Dez+Bryant%22",
                "promoted_content": null,
                "query": "%22Dez+Bryant%22",
                "tweet_volume": 11947
            },
            {
                "name": "Mother 3",
                "url": "http://twitter.com/search?q=%22Mother+3%22",
                "promoted_content": null,
                "query": "%22Mother+3%22",
                "tweet_volume": 13766
            },
            {
                "name": "Buhari",
                "url": "http://twitter.com/search?q=Buhari",
                "promoted_content": null,
                "query": "Buhari",
                "tweet_volume": 980848
            },
            {
                "name": "Kehlani",
                "url": "http://twitter.com/search?q=Kehlani",
                "promoted_content": null,
                "query": "Kehlani",
                "tweet_volume": 14163
            },
            {
                "name": "John Piper",
                "url": "http://twitter.com/search?q=%22John+Piper%22",
                "promoted_content": null,
                "query": "%22John+Piper%22",
                "tweet_volume": null
            },
            {
                "name": "Hetalia",
                "url": "http://twitter.com/search?q=Hetalia",
                "promoted_content": null,
                "query": "Hetalia",
                "tweet_volume": 20222
            },
            {
                "name": "Tatum",
                "url": "http://twitter.com/search?q=Tatum",
                "promoted_content": null,
                "query": "Tatum",
                "tweet_volume": null
            },
            {
                "name": "Hallie Jackson",
                "url": "http://twitter.com/search?q=%22Hallie+Jackson%22",
                "promoted_content": null,
                "query": "%22Hallie+Jackson%22",
                "tweet_volume": null
            },
            {
                "name": "Ball Arena",
                "url": "http://twitter.com/search?q=%22Ball+Arena%22",
                "promoted_content": null,
                "query": "%22Ball+Arena%22",
                "tweet_volume": null
            },
            {
                "name": "Ivy Park",
                "url": "http://twitter.com/search?q=%22Ivy+Park%22",
                "promoted_content": null,
                "query": "%22Ivy+Park%22",
                "tweet_volume": 18928
            },
            {
                "name": "Money Trees",
                "url": "http://twitter.com/search?q=%22Money+Trees%22",
                "promoted_content": null,
                "query": "%22Money+Trees%22",
                "tweet_volume": null
            },
            {
                "name": "Gerald Green",
                "url": "http://twitter.com/search?q=%22Gerald+Green%22",
                "promoted_content": null,
                "query": "%22Gerald+Green%22",
                "tweet_volume": null
            },
            {
                "name": "Elneny",
                "url": "http://twitter.com/search?q=Elneny",
                "promoted_content": null,
                "query": "Elneny",
                "tweet_volume": null
            },
            {
                "name": "Gold Glove",
                "url": "http://twitter.com/search?q=%22Gold+Glove%22",
                "promoted_content": null,
                "query": "%22Gold+Glove%22",
                "tweet_volume": null
            },
            {
                "name": "Sully",
                "url": "http://twitter.com/search?q=Sully",
                "promoted_content": null,
                "query": "Sully",
                "tweet_volume": null
            },
            {
                "name": "Bubu",
                "url": "http://twitter.com/search?q=Bubu",
                "promoted_content": null,
                "query": "Bubu",
                "tweet_volume": 46507
            },
            {
                "name": "Yannick Ngakoue",
                "url": "http://twitter.com/search?q=%22Yannick+Ngakoue%22",
                "promoted_content": null,
                "query": "%22Yannick+Ngakoue%22",
                "tweet_volume": 13627
            },
            {
                "name": "Trump's Twitter",
                "url": "http://twitter.com/search?q=%22Trump%27s+Twitter%22",
                "promoted_content": null,
                "query": "%22Trump%27s+Twitter%22",
                "tweet_volume": 282566
            },
            {
                "name": "Derek Chauvin",
                "url": "http://twitter.com/search?q=%22Derek+Chauvin%22",
                "promoted_content": null,
                "query": "%22Derek+Chauvin%22",
                "tweet_volume": 21236
            },
            {
                "name": "The Prom",
                "url": "http://twitter.com/search?q=%22The+Prom%22",
                "promoted_content": null,
                "query": "%22The+Prom%22",
                "tweet_volume": 10986
            },
            {
                "name": "Shadow Dragon",
                "url": "http://twitter.com/search?q=%22Shadow+Dragon%22",
                "promoted_content": null,
                "query": "%22Shadow+Dragon%22",
                "tweet_volume": 17107
            },
            {
                "name": "connie chung",
                "url": "http://twitter.com/search?q=%22connie+chung%22",
                "promoted_content": null,
                "query": "%22connie+chung%22",
                "tweet_volume": null
            },
            {
                "name": "Dezi",
                "url": "http://twitter.com/search?q=Dezi",
                "promoted_content": null,
                "query": "Dezi",
                "tweet_volume": null
            },
            {
                "name": "Klutch",
                "url": "http://twitter.com/search?q=Klutch",
                "promoted_content": null,
                "query": "Klutch",
                "tweet_volume": null
            },
            {
                "name": "David Luiz",
                "url": "http://twitter.com/search?q=%22David+Luiz%22",
                "promoted_content": null,
                "query": "%22David+Luiz%22",
                "tweet_volume": null
            },
            {
                "name": "judon",
                "url": "http://twitter.com/search?q=judon",
                "promoted_content": null,
                "query": "judon",
                "tweet_volume": null
            },
            {
                "name": "2k13",
                "url": "http://twitter.com/search?q=2k13",
                "promoted_content": null,
                "query": "2k13",
                "tweet_volume": null
            },
            {
                "name": "Lacazette",
                "url": "http://twitter.com/search?q=Lacazette",
                "promoted_content": null,
                "query": "Lacazette",
                "tweet_volume": null
            },
            {
                "name": "Rambo",
                "url": "http://twitter.com/search?q=Rambo",
                "promoted_content": null,
                "query": "Rambo",
                "tweet_volume": 18556
            },
            {
                "name": "Tony Bobulinski",
                "url": "http://twitter.com/search?q=%22Tony+Bobulinski%22",
                "promoted_content": null,
                "query": "%22Tony+Bobulinski%22",
                "tweet_volume": 108176
            },
            {
                "name": "Luka",
                "url": "http://twitter.com/search?q=Luka",
                "promoted_content": null,
                "query": "Luka",
                "tweet_volume": 22741
            },
            {
                "name": "Bellerin",
                "url": "http://twitter.com/search?q=Bellerin",
                "promoted_content": null,
                "query": "Bellerin",
                "tweet_volume": null
            }
        ],
        "as_of": "2020-10-22T18:52:24Z",
        "created_at": "2020-10-21T05:29:40Z",
        "locations": [
            {
                "name": "Mesa",
                "woeid": 2449808
            }
        ]
    }
]
export const usaData: APIData = [
    {
        "trends": [
            {
                "name": "Stadia",
                "url": "http://twitter.com/search?q=Stadia",
                "promoted_content": null,
                "query": "Stadia",
                "tweet_volume": 17986
            },
            {
                "name": "#2YearsWithMono",
                "url": "http://twitter.com/search?q=%232YearsWithMono",
                "promoted_content": null,
                "query": "%232YearsWithMono",
                "tweet_volume": 297675
            },
            {
                "name": "HARRY IS GOLDEN",
                "url": "http://twitter.com/search?q=%22HARRY+IS+GOLDEN%22",
                "promoted_content": null,
                "query": "%22HARRY+IS+GOLDEN%22",
                "tweet_volume": 113918
            },
            {
                "name": "60 Minutes",
                "url": "http://twitter.com/search?q=%2260+Minutes%22",
                "promoted_content": null,
                "query": "%2260+Minutes%22",
                "tweet_volume": 302818
            },
            {
                "name": "#TrumpIsPathetic",
                "url": "http://twitter.com/search?q=%23TrumpIsPathetic",
                "promoted_content": null,
                "query": "%23TrumpIsPathetic",
                "tweet_volume": 18885
            },
            {
                "name": "Kenny Beats",
                "url": "http://twitter.com/search?q=%22Kenny+Beats%22",
                "promoted_content": null,
                "query": "%22Kenny+Beats%22",
                "tweet_volume": null
            },
            {
                "name": "Nathan Drake",
                "url": "http://twitter.com/search?q=%22Nathan+Drake%22",
                "promoted_content": null,
                "query": "%22Nathan+Drake%22",
                "tweet_volume": 36553
            },
            {
                "name": "#DefundNPR",
                "url": "http://twitter.com/search?q=%23DefundNPR",
                "promoted_content": null,
                "query": "%23DefundNPR",
                "tweet_volume": 24015
            },
            {
                "name": "Leslie Stahl",
                "url": "http://twitter.com/search?q=%22Leslie+Stahl%22",
                "promoted_content": null,
                "query": "%22Leslie+Stahl%22",
                "tweet_volume": 129886
            },
            {
                "name": "Suburban",
                "url": "http://twitter.com/search?q=Suburban",
                "promoted_content": null,
                "query": "Suburban",
                "tweet_volume": 55416
            },
            {
                "name": "Ravens",
                "url": "http://twitter.com/search?q=Ravens",
                "promoted_content": null,
                "query": "Ravens",
                "tweet_volume": 47482
            },
            {
                "name": "Gold Glove",
                "url": "http://twitter.com/search?q=%22Gold+Glove%22",
                "promoted_content": null,
                "query": "%22Gold+Glove%22",
                "tweet_volume": null
            },
            {
                "name": "#SenateBlueWave",
                "url": "http://twitter.com/search?q=%23SenateBlueWave",
                "promoted_content": null,
                "query": "%23SenateBlueWave",
                "tweet_volume": 12993
            },
            {
                "name": "Nintendo",
                "url": "http://twitter.com/search?q=Nintendo",
                "promoted_content": null,
                "query": "Nintendo",
                "tweet_volume": 105346
            },
            {
                "name": "Buhari",
                "url": "http://twitter.com/search?q=Buhari",
                "promoted_content": null,
                "query": "Buhari",
                "tweet_volume": 1060348
            },
            {
                "name": "Irene",
                "url": "http://twitter.com/search?q=Irene",
                "promoted_content": null,
                "query": "Irene",
                "tweet_volume": 431266
            },
            {
                "name": "#8YearsOfRed",
                "url": "http://twitter.com/search?q=%238YearsOfRed",
                "promoted_content": null,
                "query": "%238YearsOfRed",
                "tweet_volume": 54974
            },
            {
                "name": "Leno",
                "url": "http://twitter.com/search?q=Leno",
                "promoted_content": null,
                "query": "Leno",
                "tweet_volume": 25448
            },
            {
                "name": "Hetalia",
                "url": "http://twitter.com/search?q=Hetalia",
                "promoted_content": null,
                "query": "Hetalia",
                "tweet_volume": 23181
            },
            {
                "name": "Kehlani",
                "url": "http://twitter.com/search?q=Kehlani",
                "promoted_content": null,
                "query": "Kehlani",
                "tweet_volume": 15501
            },
            {
                "name": "Dez Bryant",
                "url": "http://twitter.com/search?q=%22Dez+Bryant%22",
                "promoted_content": null,
                "query": "%22Dez+Bryant%22",
                "tweet_volume": 12445
            },
            {
                "name": "Mother 3",
                "url": "http://twitter.com/search?q=%22Mother+3%22",
                "promoted_content": null,
                "query": "%22Mother+3%22",
                "tweet_volume": 14359
            },
            {
                "name": "John Piper",
                "url": "http://twitter.com/search?q=%22John+Piper%22",
                "promoted_content": null,
                "query": "%22John+Piper%22",
                "tweet_volume": null
            },
            {
                "name": "Yannick",
                "url": "http://twitter.com/search?q=Yannick",
                "promoted_content": null,
                "query": "Yannick",
                "tweet_volume": 19037
            },
            {
                "name": "Tatum",
                "url": "http://twitter.com/search?q=Tatum",
                "promoted_content": null,
                "query": "Tatum",
                "tweet_volume": null
            },
            {
                "name": "Connie Chung",
                "url": "http://twitter.com/search?q=%22Connie+Chung%22",
                "promoted_content": null,
                "query": "%22Connie+Chung%22",
                "tweet_volume": null
            },
            {
                "name": "Gerald Green",
                "url": "http://twitter.com/search?q=%22Gerald+Green%22",
                "promoted_content": null,
                "query": "%22Gerald+Green%22",
                "tweet_volume": null
            },
            {
                "name": "Ivy Park",
                "url": "http://twitter.com/search?q=%22Ivy+Park%22",
                "promoted_content": null,
                "query": "%22Ivy+Park%22",
                "tweet_volume": 19514
            },
            {
                "name": "Money Trees",
                "url": "http://twitter.com/search?q=%22Money+Trees%22",
                "promoted_content": null,
                "query": "%22Money+Trees%22",
                "tweet_volume": null
            },
            {
                "name": "Hallie Jackson",
                "url": "http://twitter.com/search?q=%22Hallie+Jackson%22",
                "promoted_content": null,
                "query": "%22Hallie+Jackson%22",
                "tweet_volume": null
            },
            {
                "name": "Jack Harlow",
                "url": "http://twitter.com/search?q=%22Jack+Harlow%22",
                "promoted_content": null,
                "query": "%22Jack+Harlow%22",
                "tweet_volume": null
            },
            {
                "name": "shawn",
                "url": "http://twitter.com/search?q=shawn",
                "promoted_content": null,
                "query": "shawn",
                "tweet_volume": 63256
            },
            {
                "name": "Ball Arena",
                "url": "http://twitter.com/search?q=%22Ball+Arena%22",
                "promoted_content": null,
                "query": "%22Ball+Arena%22",
                "tweet_volume": null
            },
            {
                "name": "Trump's Twitter",
                "url": "http://twitter.com/search?q=%22Trump%27s+Twitter%22",
                "promoted_content": null,
                "query": "%22Trump%27s+Twitter%22",
                "tweet_volume": 383327
            },
            {
                "name": "Rudy Gay",
                "url": "http://twitter.com/search?q=%22Rudy+Gay%22",
                "promoted_content": null,
                "query": "%22Rudy+Gay%22",
                "tweet_volume": null
            },
            {
                "name": "Shadow Dragon",
                "url": "http://twitter.com/search?q=%22Shadow+Dragon%22",
                "promoted_content": null,
                "query": "%22Shadow+Dragon%22",
                "tweet_volume": 17702
            },
            {
                "name": "Streamers",
                "url": "http://twitter.com/search?q=Streamers",
                "promoted_content": null,
                "query": "Streamers",
                "tweet_volume": 23181
            },
            {
                "name": "Jamal Murray",
                "url": "http://twitter.com/search?q=%22Jamal+Murray%22",
                "promoted_content": null,
                "query": "%22Jamal+Murray%22",
                "tweet_volume": null
            },
            {
                "name": "2k13",
                "url": "http://twitter.com/search?q=2k13",
                "promoted_content": null,
                "query": "2k13",
                "tweet_volume": null
            },
            {
                "name": "Derek Chauvin",
                "url": "http://twitter.com/search?q=%22Derek+Chauvin%22",
                "promoted_content": null,
                "query": "%22Derek+Chauvin%22",
                "tweet_volume": 22367
            },
            {
                "name": "The Prom",
                "url": "http://twitter.com/search?q=%22The+Prom%22",
                "promoted_content": null,
                "query": "%22The+Prom%22",
                "tweet_volume": 11035
            },
            {
                "name": "Alex Hutchinson",
                "url": "http://twitter.com/search?q=%22Alex+Hutchinson%22",
                "promoted_content": null,
                "query": "%22Alex+Hutchinson%22",
                "tweet_volume": null
            },
            {
                "name": "Klutch",
                "url": "http://twitter.com/search?q=Klutch",
                "promoted_content": null,
                "query": "Klutch",
                "tweet_volume": null
            },
            {
                "name": "Kemba",
                "url": "http://twitter.com/search?q=Kemba",
                "promoted_content": null,
                "query": "Kemba",
                "tweet_volume": null
            },
            {
                "name": "Lacazette",
                "url": "http://twitter.com/search?q=Lacazette",
                "promoted_content": null,
                "query": "Lacazette",
                "tweet_volume": null
            },
            {
                "name": "Crystal Dunn",
                "url": "http://twitter.com/search?q=%22Crystal+Dunn%22",
                "promoted_content": null,
                "query": "%22Crystal+Dunn%22",
                "tweet_volume": null
            },
            {
                "name": "Dezi",
                "url": "http://twitter.com/search?q=Dezi",
                "promoted_content": null,
                "query": "Dezi",
                "tweet_volume": null
            },
            {
                "name": "Bellerin",
                "url": "http://twitter.com/search?q=Bellerin",
                "promoted_content": null,
                "query": "Bellerin",
                "tweet_volume": null
            },
            {
                "name": "Steve Novak",
                "url": "http://twitter.com/search?q=%22Steve+Novak%22",
                "promoted_content": null,
                "query": "%22Steve+Novak%22",
                "tweet_volume": null
            },
            {
                "name": "Rich Paul",
                "url": "http://twitter.com/search?q=%22Rich+Paul%22",
                "promoted_content": null,
                "query": "%22Rich+Paul%22",
                "tweet_volume": null
            }
        ],
        "as_of": "2020-10-22T19:29:01Z",
        "created_at": "2020-10-21T05:29:40Z",
        "locations": [
            {
                "name": "United States",
                "woeid": 23424977
            }
        ]
    }
]
