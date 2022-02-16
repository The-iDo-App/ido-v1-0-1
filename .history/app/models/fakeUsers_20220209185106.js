const FakeUsers = [
    {
        id: 0, 
        nickname: 'Coeli', 
        age: 18,
        city: 'Quezon City', 
        distance: '12km', 
        bio: 'I love my life', 
        image: require('../src/assets/samplePhotos/1.jpg'),
        matchRate: '74%',
        interests: [
            {sports: ['Basketball', 'Cricket', 'Volleyball']},
            {hobbies: ['Basketball', 'Cricket', 'Volleyball']},
            {musicGenre: ['Basketball', 'Cricket', 'Volleyball']},
            {filmGenre: ['Basketball', 'Cricket', 'Volleyball']},
            {pet: ['Basketball', 'Cricket', 'Volleyball']},
            {bookGenre: ['Basketball', 'Cricket', 'Volleyball']},
            {food: ['Basketball', 'Cricket', 'Volleyball']},
        ],
        

    },
    {
        id: 1, 
        nickname: 'Carla', 
        age: 23,
        city: 'Caloocan City', 
        distance: '100km', 
        bio: 'Bakit ganon ang buhay?', 
        image: require('../src/assets/samplePhotos/2.jpg'),
        matchRate: '82%',
    },
    {
        id: 2, 
        nickname: 'Jean', 
        age: 32,
        city: 'Marikina City', 
        distance: '1km', 
        bio: 'Ang buhay ay parang life', 
        image: require('../src/assets/samplePhotos/3.jpg'),
        matchRate: '96%',
    },
    {
        id: 3, 
        nickname: 'Val', 
        age: 34,
        city: 'Marikina City', 
        distance: '1km', 
        bio: 'Ang buhay ay parang life', 
        image: require('../src/assets/samplePhotos/1.jpg'),
        matchRate: '96%',
    },
    
]


export default FakeUsers;