import ageRatings from './ageRatings'
import genres from './genres'
import theResisters from './descriptions/the-resisters'
import virusOnOrbis1 from './descriptions/virus-on-orbis-1'
import leviathan from './descriptions/leviathan'
import hive from './descriptions/hive'
import skyward from './descriptions/skyward'
import outOfTheSilentPlanet from './descriptions/out-of-the-silent-planet'
import steelheart from './descriptions/steelheart'

const sciFi = [
  {title: 'The Resisters', author: 'Eric Nylund', recommendationLevel: 3, slug: 'the-resisters', isbn: '9780375868566', ageRating: {age: ageRatings.KIDS, aimedAt: true}, series: {finished: true}, description: theResisters},
  {title: 'Virus on Orbis 1', author: 'P. J. Haarsma', recommendationLevel: 3, slug: 'virus-on-orbis-1', isbn: '9780763627096', ageRating: {age: ageRatings.KIDS, aimedAt: true}, series: {name: 'The Softwire', finished: true}, description: virusOnOrbis1},
  {title: 'Leviathan', author: 'Scott Westerfeld', recommendationLevel: 3, slug: 'leviathan', isbn: '9781416971733', ageRating: {age: ageRatings.KIDS, aimedAt: true}, series: {finished: true}, description: leviathan},
  {title: 'H.I.V.E.', author: 'Mark Walden', recommendationLevel: 3, slug: 'hive', isbn: '9780747583707', ageRating: {age: ageRatings.KIDS}, series: {}, description: hive},
  {title: 'Skyward', author: 'Brandon Sanderson', recommendationLevel: 3, slug: 'skyward', isbn: '9780399555770', ageRating: {age: ageRatings.KIDS}, series: {}, description: skyward},
  {title: 'A Wrinkle in Time', author: 'Madeleine L\'Engle', recommendationLevel: 2, slug: 'a-wrinkle-in-time', isbn: '9781250153272', ageRating: {age: ageRatings.KIDS}, series: {name: 'Time Quintet', finished: true}},
  {title: 'Steelheart', author: 'Brandon Sanderson', recommendationLevel: 3, slug: 'steelheart', isbn: '9780385743563', ageRating: {age: ageRatings.TEEN}, series: {name: 'The Reckoners', finished: true}, description: steelheart},
  {title: 'Ender\'s Game', author: 'Orson Scott Card', recommendationLevel: 2, slug: 'enders-game', isbn: '9780812550702', ageRating: {age: ageRatings.TEEN}, series: {name: 'The Ender Quintet', finished: true}},
  {title: 'All Systems Red', author: 'Martha Wells', recommendationLevel: 3, slug: 'all-systems-red', isbn: '9780765397522', ageRating: {age: ageRatings.TEEN}, series: {name: 'The Murderbot Diaries', finished: true}},
  {title: 'Out of the Silent Planet', author: 'C. S. Lewis', recommendationLevel: 1, slug: 'out-of-the-silent-planet', isbn: '9780007157150', ageRating: {age: ageRatings.ADULT}, series: {name: 'The Space Trilogy', finished: true}, description: outOfTheSilentPlanet},
  {title: 'Sleeping Giants', author: 'Sylvain Neuvel', recommendationLevel: 1, slug: 'sleeping-giants', isbn: '9781101886694', ageRating: {age: ageRatings.ADULT}, series: {name: 'Themis Files', finished: true}},
  {title: 'Into the Storm', author: 'Taylor Anderson', recommendationLevel: 3, slug: 'into-the-storm', isbn: '9780451462077', ageRating: {age: ageRatings.ADULT}, series: {name: 'Destroyermen'}},
  {title: 'Ancillary Justice', author: 'Ann Leckie', recommendationLevel: 2, slug: 'ancillary-justice', isbn: '9780316246620', ageRating: {age: ageRatings.ADULT}, series: {name: 'Imperial Radch', finished: true}},
  {title: 'Leviathan Wakes', author: 'James S. A. Corey', recommendationLevel: 3, slug: 'leviathan-wakes', isbn: '9781841499888', ageRating: {age: ageRatings.ADULT}, series: {name: 'The Expanse'}},
]

const fantasy = [
  {title: 'Redwall', author: 'Brian Jacques', recommendationLevel: 3, slug: 'redwall', isbn: '9781862301382', ageRating: {age: ageRatings.KIDS, aimedAt: true}, series: {finished: true}},
  {title: 'The Ruins of Gorlan', author: 'John Flanagan', recommendationLevel: 3, slug: 'the-ruins-of-gorlan', isbn: '9780142406632', ageRating: {age: ageRatings.KIDS, aimedAt: true}, series: {name: 'Ranger\'s Apprentice', finished: true}},
  {title: 'The Lion, the Witch and the Wardrobe', author: 'C. S. Lewis', recommendationLevel: 3, slug: 'narnia', isbn: '9780061125232', ageRating: {age: ageRatings.KIDS, aimedAt: true}, series: {name: 'The Chronicles of Narnia', finished: true}},
  {title: 'The Lightning Thief', author: 'Rick Riordan', recommendationLevel: 3, slug: 'the-lightning-thief', isbn: '9780786838653', ageRating: {age: ageRatings.KIDS, aimedAt: true}, series: {name: 'Percy Jackson and the Olympians', finished: true}},
  {title: 'The Frog Princess', author: 'E. D. Baker', recommendationLevel: 3, slug: 'the-frog-princess', isbn: '9781582349237', ageRating: {age: ageRatings.KIDS, aimedAt: true}, series: {name: 'The Tales of the Frog Princess', finished: true}},
  {title: 'Sky Raiders', author: 'Brandon Mull', recommendationLevel: 3, slug: 'sky-raiders', isbn: '9781442497023', ageRating: {age: ageRatings.KIDS, aimedAt: true}, series: {name: 'Five Kingdoms', finished: true}},
  {title: 'Princess Academy', author: 'Shannon Hale', recommendationLevel: 2, slug: 'princess-academy', isbn: '9781599900735', ageRating: {age: ageRatings.KIDS, aimedAt: true}, series: {finished: true}},
  {title: 'Atherton: The House of Power', author: 'Patrick Carman', recommendationLevel: 3, slug: 'atherton', isbn: '9780316112727', ageRating: {age: ageRatings.KIDS}, series: {name: 'Atherton', finished: true}},
  {title: 'Fablehaven', author: 'Brandon Mull', recommendationLevel: 3, slug: 'fablehaven', isbn: '9781590385814', ageRating: {age: ageRatings.KIDS}, series: {finished: true}},
  {title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J. K. Rowling', recommendationLevel: 3, slug: 'harry-potter', isbn: '9780780797086', ageRating: {age: ageRatings.KIDS}, series: {name: 'Harry Potter', finished: true}},
  {title: 'Artemis Fowl', author: 'Eoin Colfer', recommendationLevel: 3, slug: 'artemis-fowl', isbn: '9780786817870', ageRating: {age: ageRatings.KIDS}, series: {finished: true}},
  {title: 'The Blue Sword', author: 'Robin McKinley', recommendationLevel: 2, slug: 'the-blue-sword', isbn: '9780441068807', ageRating: {age: ageRatings.KIDS}, series: {name: 'Damar', finished: true}},
  {title: 'Eragon', author: 'Christopher Paolini', recommendationLevel: 3, slug: 'eragon', isbn: '9780375826696', ageRating: {age: ageRatings.KIDS}, series: {name: 'The Inheritance Cycle', finished: true}},
  {title: 'The Dragon\'s Tooth', author: 'N. D. Wilson', recommendationLevel: 3, slug: 'the-dragons-tooth', isbn: '9780375864391', ageRating: {age: ageRatings.KIDS}, series: {name: 'Ashtown Burials'}},
  {title: 'Peter and the Starcatchers', author: 'Dave Barry & Ridley Pearson', recommendationLevel: 3, slug: 'peter-and-the-starcatchers', isbn: '9780786849079', ageRating: {age: ageRatings.TEEN}, series: {finished: true}},
  {title: 'Mistborn', author: 'Brandon Sanderson', recommendationLevel: 3, slug: 'mistborn', isbn: '9780765311788', ageRating: {age: ageRatings.TEEN}, series: {finished: true}},
  {title: 'Warbreaker', author: 'Brandon Sanderson', recommendationLevel: 3, slug: 'warbreaker', isbn: '9780765360045', ageRating: {age: ageRatings.TEEN}, series: {finished: true}},
  {title: 'The Way of Kings', author: 'Brandon Sanderson', recommendationLevel: 3, slug: 'the-way-of-kings', isbn: '9780765326355', ageRating: {age: ageRatings.TEEN}, series: {name: 'The Stormlight Archive'}},
  {title: 'The Eye of the World', author: 'Robert Jordan', recommendationLevel: 3, slug: 'the-eye-of-the-world', isbn: '9780812511819', ageRating: {age: ageRatings.TEEN}, series: {name: 'The Wheel of Time', finished: true}},
  {title: 'The Name of the Wind', author: 'Patrick Rothfuss', recommendationLevel: 3, slug: 'the-name-of-the-wind', isbn: '9780756404079', ageRating: {age: ageRatings.ADULT}, series: {name: 'The Kingkiller Chronicle'}},
  {title: 'Foundryside', author: 'Robert Jackson Bennett', recommendationLevel: 3, slug: 'foundryside', isbn: '9780525573845', ageRating: {age: ageRatings.ADULT}, series: {name: 'The Founders Trilogy'}},
]

const comics = [
  {title: 'Calvin and Hobbes', author: 'Bill Waterson', recommendationLevel: 3, slug: 'calvin-and-hobbes', isbn: '9780740748479', ageRating: {age: ageRatings.KIDS}, series: {finished: true}},
  {title: 'Lunch Lady and the Cyborg Substitute', author: 'Jarrett J. Krosoczka', recommendationLevel: 3, slug: 'lunch-lady', isbn: '9780375846830', ageRating: {age: ageRatings.KIDS, aimedAt: true}, series: {name: 'Lunch Lady', finished: true}},
  {title: 'The Secret of the Unicorn', author: 'Hergé', recommendationLevel: 3, slug: 'tintin', isbn: '9780867199031', ageRating: {age: ageRatings.KIDS}, series: {name: 'The Adventures of Tintin', finished: true}},
  {title: 'Asterix the Gaul', author: 'René Goscinny', recommendationLevel: 3, slug: 'asterix', isbn: '9780752866055', ageRating: {age: ageRatings.KIDS}, series: {name: 'Astérix', finished: true}},
  {title: 'Akiko on the Planet Smoo', author: 'Mark Crilley', recommendationLevel: 3, slug: 'akiko', isbn: '9780440416487', ageRating: {age: ageRatings.KIDS}, series: {name: 'Akiko', finished: true}},
  {title: 'Rapunzel\'s Revenge', author: 'Shannon Hale', recommendationLevel: 3, slug: 'rapunzels-revenge', isbn: '9781599900704', ageRating: {age: ageRatings.KIDS}, series: {finished: true}},
  {title: 'The Stonekeeper', author: 'Kazu Kibuishi', recommendationLevel: 3, slug: 'amulet', isbn: '9780439846806', ageRating: {age: ageRatings.KIDS}, series: {name: 'Amulet'}},
  {title: 'Understanding Comics: The Invisible Art', author: 'Scott McCloud', recommendationLevel: 3, slug: 'understanding-comics', isbn: '9780878162437', ageRating: {age: ageRatings.TEEN}, series: {name: 'The Comic Books', finished: true}},
]

const childrens = [
  {title: 'Lost Treasure of the Emerald Eye', author: 'Geronimo Stilton', recommendationLevel: 3, slug: 'geronimo-stilton', isbn: '9780439559638', ageRating: {age: ageRatings.EARLY, aimedAt: true}, series: {name: 'Geronimo Stilton', finished: true}},
  {title: 'Dinosaurs Before Dark', author: 'Mary Pope Osborne', recommendationLevel: 3, slug: 'magic-treehouse', isbn: '9780679824114', ageRating: {age: ageRatings.EARLY, aimedAt: true}, series: {name: 'Magic Tree House', finished: true}},
  {title: 'The Boxcar Children', author: 'Gertrude Chandler Warner', recommendationLevel: 3, slug: 'the-boxcar-children', isbn: '9780807508527', ageRating: {age: ageRatings.EARLY, aimedAt: true}, series: {finished: true}},
  
]

const nonFic = [
  {title: 'Tattoos on the Heart', author: 'Gregory Boyle', recommendationLevel: 3, slug: 'tattoos-on-the-heart', isbn: '9781439153024', ageRating: {age: ageRatings.TEEN}, series: {single: true}},
]

const applyData = (array, genre) => array.map(b => ({ ...b, genre }))

export default [
  ...applyData(sciFi, genres.SCIFI),
  ...applyData(fantasy, genres.FANTASY),
  ...applyData(comics, genres.COMICS),
  ...applyData(childrens, genres.KID),
  ...applyData(nonFic, genres.NONFIC),
]
