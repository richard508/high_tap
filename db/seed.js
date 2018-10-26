const Interest = require('../models/Interest')
const interestList = ['Foodie', 'Development', 'Nothing but Net', 'Pop Culture', 'Fashion', 'Art', 'Space', 'Mental Space', 'Healthy Living', 'Olden Days', 'Green Power', 'Activism', 'Written Word', 'The Outdoors', 'Science', 'The Programmer', 'Home Decor']
for(var i = 0; i< interestList.length; i++){
  Interest.create({
    interestList: interestList[i]
  }).then((interestList) => {
    interestList.save(err => console.log(err))
  })
}
