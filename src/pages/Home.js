import React from "react";
import Title from "../ui/views/Title";
import { useTranslation } from "react-i18next";
import MovieListItem from "../ui/views/MovieListItem";
import MovieList from "../ui/views/MovieList";

const data = [
	{
		"score": 23.753315,
		"show": {
			"id": 975,
			"url": "http://www.tvmaze.com/shows/975/batman",
			"name": "Batman",
			"type": "Scripted",
			"language": "English",
			"genres": [
				"Comedy",
				"Action",
				"Science-Fiction"
			],
			"status": "Ended",
			"runtime": 30,
			"premiered": "1966-01-12",
			"officialSite": null,
			"schedule": {
				"time": "19:30",
				"days": [
					"Thursday"
				]
			},
			"rating": {
				"average": 7.9
			},
			"weight": 85,
			"network": {
				"id": 3,
				"name": "ABC",
				"country": {
					"name": "United States",
					"code": "US",
					"timezone": "America/New_York"
				}
			},
			"webChannel": null,
			"externals": {
				"tvrage": 2719,
				"thetvdb": 77871,
				"imdb": "tt0059968"
			},
			"image": {
				"medium": "http://static.tvmaze.com/uploads/images/medium_portrait/6/16463.jpg",
				"original": "http://static.tvmaze.com/uploads/images/original_untouched/6/16463.jpg"
			},
			"summary": "<p>Wealthy entrepreneur Bruce Wayne and his ward Dick Grayson lead a double life: they are actually crime fighting duo Batman and Robin. A secret Batpole in the Wayne mansion leads to the Batcave, where Police Commissioner Gordon often calls with the latest emergency threatening Gotham City. Racing to the scene of the crime in the Batmobile, Batman and Robin must (with the help of their trusty Bat-utility-belt) thwart the efforts of a variety of master criminals, including Catwoman, Egghead, The Joker, King Tut, The Penguin, and The Riddler.</p>",
			"updated": 1561941419,
			"_links": {
				"self": {
					"href": "http://api.tvmaze.com/shows/975"
				},
				"previousepisode": {
					"href": "http://api.tvmaze.com/episodes/95649"
				}
			}
		}
	},
	{
		"score": 19.80557,
		"show": {
			"id": 481,
			"url": "http://www.tvmaze.com/shows/481/the-batman",
			"name": "The Batman",
			"type": "Animation",
			"language": "English",
			"genres": [
				"Action",
				"Adventure",
				"Science-Fiction"
			],
			"status": "Ended",
			"runtime": 30,
			"premiered": "2004-09-11",
			"officialSite": null,
			"schedule": {
				"time": "10:30",
				"days": [
					"Saturday"
				]
			},
			"rating": {
				"average": 8.5
			},
			"weight": 39,
			"network": {
				"id": 5,
				"name": "The CW",
				"country": {
					"name": "United States",
					"code": "US",
					"timezone": "America/New_York"
				}
			},
			"webChannel": null,
			"externals": {
				"tvrage": 5602,
				"thetvdb": 73180,
				"imdb": "tt0398417"
			},
			"image": {
				"medium": "http://static.tvmaze.com/uploads/images/medium_portrait/3/9370.jpg",
				"original": "http://static.tvmaze.com/uploads/images/original_untouched/3/9370.jpg"
			},
			"summary": "<p>Hidden in the shadows, The Batman casts a protective eye while tracking the thugs, thieves and criminal masterminds that claim Gotham City's dark alleys each night. In one magnificent swoop, he descends up on opponents and battles with a fierceness that seems almost inhuman. This is the young Bruce Wayne who assumes the role of Gotham's greatest defender in a fresh retelling of the Dark Knight's beginnings.</p><p>With incredible gadgets, awesome animation and a cool new vibe, these 13 exciting episodes from the hit series showcase The Batman taking on your favourite villains – The Joker, The Penguin, Mr. Freeze, Catwoman, Bane – and new crazies you'll love to hate!</p>",
			"updated": 1563712987,
			"_links": {
				"self": {
					"href": "http://api.tvmaze.com/shows/481"
				},
				"previousepisode": {
					"href": "http://api.tvmaze.com/episodes/43721"
				}
			}
		}
	},
	{
		"score": 17.053492,
		"show": {
			"id": 504,
			"url": "http://www.tvmaze.com/shows/504/batman-beyond",
			"name": "Batman Beyond",
			"type": "Animation",
			"language": "English",
			"genres": [
				"Action",
				"Adventure",
				"Science-Fiction"
			],
			"status": "Ended",
			"runtime": 30,
			"premiered": "1999-01-10",
			"officialSite": null,
			"schedule": {
				"time": "",
				"days": [
					"Saturday"
				]
			},
			"rating": {
				"average": 9
			},
			"weight": 0,
			"network": {
				"id": 71,
				"name": "The WB",
				"country": {
					"name": "United States",
					"code": "US",
					"timezone": "America/New_York"
				}
			},
			"webChannel": null,
			"externals": {
				"tvrage": 2722,
				"thetvdb": 75417,
				"imdb": "tt0147746"
			},
			"image": {
				"medium": "http://static.tvmaze.com/uploads/images/medium_portrait/4/10842.jpg",
				"original": "http://static.tvmaze.com/uploads/images/original_untouched/4/10842.jpg"
			},
			"summary": "<p><b>Batman Beyond</b> tells the story of Terry McGinnis was just an ordinary teenager...until his father was mysteriously murdered. Suspecting foul play at his father's company Wayne/Powers Corporation, Terry meets Bruce Wayne and learns a secret identity hidden for decades. Now too old to battle injustice, Wayne is a bitter shell of his former self and refuses to help. So Terry does what any brash young kid would do: steal the Batsuit and take matters into his own hands! Vowing to avenge his father's death, Terry dons the high-tech suit - tricked out with jetpacks for flying, a supersensitive microphone for eavesdropping and even camouflage capabilities - in search of his father's assassin.</p>",
			"updated": 1551302373,
			"_links": {
				"self": {
					"href": "http://api.tvmaze.com/shows/504"
				},
				"previousepisode": {
					"href": "http://api.tvmaze.com/episodes/45957"
				}
			}
		}
	},
	{
		"score": 14.427952,
		"show": {
			"id": 757,
			"url": "http://www.tvmaze.com/shows/757/batman-the-animated-series",
			"name": "Batman: The Animated Series",
			"type": "Animation",
			"language": "English",
			"genres": [
				"Action",
				"Adventure",
				"Science-Fiction"
			],
			"status": "Ended",
			"runtime": 30,
			"premiered": "1992-09-05",
			"officialSite": null,
			"schedule": {
				"time": "10:00",
				"days": [
					"Saturday"
				]
			},
			"rating": {
				"average": 9
			},
			"weight": 88,
			"network": {
				"id": 4,
				"name": "FOX",
				"country": {
					"name": "United States",
					"code": "US",
					"timezone": "America/New_York"
				}
			},
			"webChannel": null,
			"externals": {
				"tvrage": 2721,
				"thetvdb": 76168,
				"imdb": "tt0103359"
			},
			"image": {
				"medium": "http://static.tvmaze.com/uploads/images/medium_portrait/80/202273.jpg",
				"original": "http://static.tvmaze.com/uploads/images/original_untouched/80/202273.jpg"
			},
			"summary": "<p>Experience the thrills of vigilante justice as millionaire playboy Bruce Wayne and alter-ego Batman protect the streets of Gotham City from a host of villains including archnemesis The Joker, deadly-beautiful Poison Ivy and primitive Killer Croc in a fresh take on super hero storytelling. Intelligent, dramatic stories, unique characters and sharp dialog shaped this edgy TV series into an Emmy®-winning powerhouse that brought the Caped Crusader out of the dark alleys of TV history and into the present for fans of all ages.</p>",
			"updated": 1558393086,
			"_links": {
				"self": {
					"href": "http://api.tvmaze.com/shows/757"
				},
				"previousepisode": {
					"href": "http://api.tvmaze.com/episodes/66866"
				}
			}
		}
	},
	{
		"score": 12.454555,
		"show": {
			"id": 5951,
			"url": "http://www.tvmaze.com/shows/5951/the-new-batman-adventures",
			"name": "The New Batman Adventures",
			"type": "Animation",
			"language": "English",
			"genres": [
				"Science-Fiction"
			],
			"status": "Ended",
			"runtime": null,
			"premiered": "1997-09-13",
			"officialSite": null,
			"schedule": {
				"time": "",
				"days": []
			},
			"rating": {
				"average": 8.6
			},
			"weight": 75,
			"network": {
				"id": 71,
				"name": "The WB",
				"country": {
					"name": "United States",
					"code": "US",
					"timezone": "America/New_York"
				}
			},
			"webChannel": null,
			"externals": {
				"tvrage": 2720,
				"thetvdb": 77084,
				"imdb": "tt0118266"
			},
			"image": {
				"medium": "http://static.tvmaze.com/uploads/images/medium_portrait/23/58624.jpg",
				"original": "http://static.tvmaze.com/uploads/images/original_untouched/23/58624.jpg"
			},
			"summary": "<p>The New Batman Adventures comes from the creators of Batman and Superman. This series was created because Fox had not lived up to the contract that they had given Batman, so the WB decided to give the show another chance. Bruce Timm then went back and decided to re-design all of the characters from Batman and ended up revamping the series all-together.</p><p>(Source: animeflavor)</p>",
			"updated": 1549580882,
			"_links": {
				"self": {
					"href": "http://api.tvmaze.com/shows/5951"
				},
				"previousepisode": {
					"href": "http://api.tvmaze.com/episodes/355338"
				}
			}
		}
	},
	{
		"score": 12.291132,
		"show": {
			"id": 11464,
			"url": "http://www.tvmaze.com/shows/11464/batman-unlimited",
			"name": "Batman Unlimited",
			"type": "Animation",
			"language": "English",
			"genres": [
				"Action",
				"Children",
				"Science-Fiction"
			],
			"status": "Ended",
			"runtime": 4,
			"premiered": "2015-05-04",
			"officialSite": "https://www.youtube.com/channel/UCyu8StPfZWapR6rfW_JgqcA",
			"schedule": {
				"time": "",
				"days": []
			},
			"rating": {
				"average": null
			},
			"weight": 2,
			"network": null,
			"webChannel": {
				"id": 21,
				"name": "YouTube",
				"country": null
			},
			"externals": {
				"tvrage": null,
				"thetvdb": 301558,
				"imdb": null
			},
			"image": {
				"medium": "http://static.tvmaze.com/uploads/images/medium_portrait/38/96515.jpg",
				"original": "http://static.tvmaze.com/uploads/images/original_untouched/38/96515.jpg"
			},
			"summary": "<p>A webseries began airing on DC Kids' YouTube channel on May 4, 2015.</p>",
			"updated": 1529747391,
			"_links": {
				"self": {
					"href": "http://api.tvmaze.com/shows/11464"
				},
				"previousepisode": {
					"href": "http://api.tvmaze.com/episodes/896355"
				}
			}
		}
	},
	{
		"score": 11.396998,
		"show": {
			"id": 33618,
			"url": "http://www.tvmaze.com/shows/33618/the-adventures-of-batman",
			"name": "The Adventures of Batman",
			"type": "Animation",
			"language": "English",
			"genres": [
				"Action",
				"Adventure"
			],
			"status": "Ended",
			"runtime": 15,
			"premiered": "1968-09-14",
			"officialSite": null,
			"schedule": {
				"time": "10:30",
				"days": [
					"Saturday"
				]
			},
			"rating": {
				"average": null
			},
			"weight": 0,
			"network": {
				"id": 2,
				"name": "CBS",
				"country": {
					"name": "United States",
					"code": "US",
					"timezone": "America/New_York"
				}
			},
			"webChannel": null,
			"externals": {
				"tvrage": null,
				"thetvdb": 248509,
				"imdb": null
			},
			"image": {
				"medium": "http://static.tvmaze.com/uploads/images/medium_portrait/136/342479.jpg",
				"original": "http://static.tvmaze.com/uploads/images/original_untouched/136/342479.jpg"
			},
			"summary": "<p><b>The Adventures of Batman</b>, with Robin, the Boy Wonder! Batman and Robin, the Dynamic Duo against crime and corruption, whose real identities as millionaire philanthropist Bruce Wayne and his young ward Dick Grayson and known only to Alfred, the faithful butler. Ever alert, they respond swiftly to a signal from the police, and moments later, from the secret Batcave deep beneath Wayne Manor, they roar out to protect life, limb and property as Batman and Robin, caped crimefighters! Batman and Robin, scourge of Gotham City's kooky criminals: The Joker, Clown Prince of Crime - The Penguin, pudgy purveyor of perfidy - and the cool, cruel, Mr. Freeze! Watch out, villains, here come... Batman and Robin!</p>",
			"updated": 1540405455,
			"_links": {
				"self": {
					"href": "http://api.tvmaze.com/shows/33618"
				},
				"previousepisode": {
					"href": "http://api.tvmaze.com/episodes/1364486"
				}
			}
		}
	},
	{
		"score": 10.073223,
		"show": {
			"id": 22309,
			"url": "http://www.tvmaze.com/shows/22309/batman-black-and-white",
			"name": "Batman: Black and White",
			"type": "Animation",
			"language": "English",
			"genres": [
				"Action",
				"Adventure",
				"Science-Fiction"
			],
			"status": "Ended",
			"runtime": null,
			"premiered": "2008-12-08",
			"officialSite": null,
			"schedule": {
				"time": "",
				"days": [
					"Thursday"
				]
			},
			"rating": {
				"average": null
			},
			"weight": 0,
			"network": null,
			"webChannel": {
				"id": 3,
				"name": "Amazon Prime",
				"country": null
			},
			"externals": {
				"tvrage": null,
				"thetvdb": 103851,
				"imdb": "tt1458796"
			},
			"image": {
				"medium": "http://static.tvmaze.com/uploads/images/medium_portrait/81/204143.jpg",
				"original": "http://static.tvmaze.com/uploads/images/original_untouched/81/204143.jpg"
			},
			"summary": "<p>This collection includes animated adaptations of ten short stories, bundled into five episodes, that take place in and around Gotham City, featuring Batman and his nefarious villains. Each story comes from the unique perspective of different writers and artists, applying their spin on the Batman universe.</p>",
			"updated": 1526271793,
			"_links": {
				"self": {
					"href": "http://api.tvmaze.com/shows/22309"
				},
				"previousepisode": {
					"href": "http://api.tvmaze.com/episodes/970807"
				}
			}
		}
	},
	{
		"score": 10.073223,
		"show": {
			"id": 3557,
			"url": "http://www.tvmaze.com/shows/3557/beware-the-batman",
			"name": "Beware the Batman",
			"type": "Animation",
			"language": "English",
			"genres": [
				"Action",
				"Adventure",
				"Science-Fiction"
			],
			"status": "Ended",
			"runtime": 30,
			"premiered": "2013-07-14",
			"officialSite": null,
			"schedule": {
				"time": "02:30",
				"days": [
					"Sunday"
				]
			},
			"rating": {
				"average": 9.5
			},
			"weight": 0,
			"network": {
				"id": 11,
				"name": "Cartoon Network",
				"country": {
					"name": "United States",
					"code": "US",
					"timezone": "America/New_York"
				}
			},
			"webChannel": null,
			"externals": {
				"tvrage": 30092,
				"thetvdb": 258331,
				"imdb": "tt2329077"
			},
			"image": {
				"medium": "http://static.tvmaze.com/uploads/images/medium_portrait/18/46698.jpg",
				"original": "http://static.tvmaze.com/uploads/images/original_untouched/18/46698.jpg"
			},
			"summary": "<p>In this new interpretation of the Batman legend, Bruce Wayne has recently returned to Gotham. With the aide of his butler and former SAS operative Alfred Pennyworth, Bruce takes on the guise of Batman and fights the villains of Gotham City. Helping him is Katana, a young martial artist who Alfred hires to assist Bruce when he realizes that he's too old to serve in the field.</p>",
			"updated": 1520574080,
			"_links": {
				"self": {
					"href": "http://api.tvmaze.com/shows/3557"
				},
				"previousepisode": {
					"href": "http://api.tvmaze.com/episodes/232900"
				}
			}
		}
	},
	{
		"score": 10.073223,
		"show": {
			"id": 19752,
			"url": "http://www.tvmaze.com/shows/19752/the-new-adventures-of-batman",
			"name": "The New Adventures of Batman",
			"type": "Animation",
			"language": "English",
			"genres": [
				"Science-Fiction"
			],
			"status": "Ended",
			"runtime": 30,
			"premiered": "1977-02-10",
			"officialSite": null,
			"schedule": {
				"time": "",
				"days": []
			},
			"rating": {
				"average": null
			},
			"weight": 11,
			"network": {
				"id": 2,
				"name": "CBS",
				"country": {
					"name": "United States",
					"code": "US",
					"timezone": "America/New_York"
				}
			},
			"webChannel": null,
			"externals": {
				"tvrage": null,
				"thetvdb": 70909,
				"imdb": "tt0075543"
			},
			"image": {
				"medium": "http://static.tvmaze.com/uploads/images/medium_portrait/69/174489.jpg",
				"original": "http://static.tvmaze.com/uploads/images/original_untouched/69/174489.jpg"
			},
			"summary": "<p>The New Adventures of Batman is an animated series produced by Filmation in 1977 featuring the DC Comics superheroes Batman and Robin, and Batgirl. In The New Adventures of Batman, the \"Dynamic Duo\" fights crime in Gotham City, encountering the classic Batman rogues gallery as well as some original villains. Complicating matters is Bat-Mite, a well meaning imp from another dimension called Ergo, who considers himself Batman's biggest fan. As a result, he wears a variant of Batman's costume and attempts to help him, only to often create more problems (although he is occasionally an asset). Missing is Alfred, the faithful butler of Batman's alter ego Bruce Wayne</p>",
			"updated": 1494693254,
			"_links": {
				"self": {
					"href": "http://api.tvmaze.com/shows/19752"
				},
				"previousepisode": {
					"href": "http://api.tvmaze.com/episodes/884694"
				}
			}
		}
	}
];

/**
 * Home page display Batman TV shows
 * @returns {*}
 * @constructor
 */
const Home = () => {
	const { t } = useTranslation("translations");
	return <div className={"home"}>
		<Title value={t("titles.batmanTvShows")}/>
		<MovieList>
			{data.map(({ show }) => <MovieListItem key={"batman" + show.id} id={show.id} imageSrc={show.image.medium} title={show.name} genres={show.genres}/>)}
		</MovieList>
	</div>;
};

export default Home;