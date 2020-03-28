const techniques = [
  {
    _id: 1,
    name: "Scalar",
    points: [
      { text: "Use 1, 2, 3, 4, slots for verse, hook, bridge, etc..." },
      {
        text: "Scale lock",
        points: [
          { text: "Play known chords (Cm) to generate new chord progressions" },
          { text: "Record onto Scalar-> Instrument track" }
        ]
      },
      {
        text: "Detect new midi with Scalar",
        points: [
          { text: "Save progression" },
          {
            text:
              "Experiment with changes chords to conform to scale suggests in Scalar B section (Bbb sus2 -> Bbb sus4)",
            points: [
              { text: "Alter octave, inversion" },
              {
                text:
                  "Edit chord - click notes in or out of scale and audition chord"
              },
              { text: "Substitution, right-click Chord in C" },
              { text: "Explore scales to changes other chords" },
              { text: "Generate Parallel harmony" }
            ]
          }
        ]
      },
      { text: "Arpeggio and Strumming" }
    ]
  },
  { _id: 2, name: "", points: [] },
  { _id: 3, name: "", points: [] }
];

module.exports = techniques;
