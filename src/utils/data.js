const techniques = [
  {
    _id: 1,
    name: "technique1",
    points: [
      {
        text: "t1-1",
        points: [
          {
            text: "t1-1.1",
            points: [
              { text: "t1-1.1.1" },
              { text: "t1-1.1.2" },
              { text: "t1-1.1.3" }
            ]
          },
          { text: "t1-1.2" },
          { text: "t1-1.3" }
        ]
      },
      { text: "t1-2" },
      { text: "t1-3" }
    ]
  },
  {
    _id: 2,
    name: "technique2",
    points: [
      { text: "t2-1" },
      {
        text: "t2-2",
        points: [
          {
            text: "t2-2.1",
            points: [
              { text: "t2-2.1.1" },
              { text: "t2-2.1.2" },
              { text: "t2-2.1.3" }
            ]
          },
          { text: "t2-2.2" },
          { text: "t2-2.3" }
        ]
      },
      { text: "t2-3" }
    ]
  },
  {
    _id: 3,
    name: "technique3",
    points: [
      { text: "t3-1" },
      { text: "t3-2" },
      {
        text: "t3-3",
        points: [
          {
            text: "t3-3.1",
            points: [
              { text: "t3-3.1.1" },
              { text: "t3-3.1.2" },
              { text: "t3-3.1.3" }
            ]
          },
          { text: "t3-3.2" },
          { text: "t3-3.3" }
        ]
      }
    ]
  }
];

module.exports = techniques;
