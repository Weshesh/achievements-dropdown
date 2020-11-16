import { Company } from './userSlice';

const sampleCompanies: Company[] = [
  {
    name: "Ahab & Co",
    achievements: [
      {
        name: "Sharpen the harpoons",
        description: "Do We have all We need?",
        toDo: 100,
        done: 100,
        showPercentage: true
      },
      {
        name: "Fit Pequod for voyage",
        description: "Do We have all We need? Most importantly, do we have enough rum?",
        toDo: 5,
        done: 1,
        showPercentage: true
      },
      {
        name: "Heave up the anchor",
        description: "Cant leave without doing it.",
        toDo: 1,
        done: 1
      },
      {
        name: "Hoist the sails",
        toDo: 1,
        done: 1
      },
      {
        name: "Leave Nantucket",
        description: "Head out to south.",
        toDo: 1,
        done: 1
      },
      {
        name: "Sail to Cape Horn",
        description: "Very dangerous!!",
        toDo: 6636,
        done: 3124,
        showPercentage: true
      },
      {
        name: "Meet M.D.",
        description: "Take revenger on the white whale.",
        toDo: 1,
        done: 1
      }
    ]
  },
  {
    name: "Naughty Tractor AS",
    description: "Long description is long",
    achievements: [
      {
        name: "Change the oil",
        description: "Its old.",
        toDo: 2,
        done: 1,
        showPercentage: true
      },
      {
        name: "Fill the tank",
        description: "Its empty.",
        toDo: 80,
        done: 42,
        showPercentage: true
      },
      {
        name: "Take it to a drive",
        description: "Its old",
        toDo: 1,
        done: 1
      }
    ]
  },
  {
    name: "S.P Gnomes ltd.",
    achievements: [
      {
        name: "Collect underpants",
        description: "As much as You can.",
        toDo: 1,
        done: 1
      },
      {
        name: "???",
        toDo: 1,
        done: 0
      },
      {
        name: "Profit",
        toDo: 10,
        done: 5
      }
    ]
  }
]

export default sampleCompanies
