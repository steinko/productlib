import avatar from '../images/avatar.png'
import snowboard from '../images/Banana-Snowboard.png'
import femaleAvatar from '../images/FemaleAvatar.png'
import sugarinStrawberries from '../images/sugarinstrawberries.jpg'

const seedProducts =
  [
    { id: 1,
      title: 'Yellow Pale',
      description: 'On demand sand castle expertise',
      url: '#',
      votes: 41, // generateVoteCount(),
      submitterAvatarUrl: avatar,
      productImageUrl: snowboard
    },
    { id: 2,
      title: 'Strawberries',
      description: 'Strawberries Forever',
      url: '#',
      votes: 46, // generateVoteCount(),
      submitterAvatarUrl: femaleAvatar,
      productImageUrl: sugarinStrawberries
    }
  ]

export {seedProducts}
