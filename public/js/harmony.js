// // create a synth
// const synth = new Tone.MembraneSynth().toMaster();
// // create an array of notes to be played
// const notes = ["C3", "Eb3", "G3", "Bb3"];
// // create a new sequence with the synth and notes
// const synthPart = new Tone.Sequence(
//   function(time, note) {
//     synth.triggerAttackRelease(note, "10hz", time);
//   },
//   notes,
//   "4n"
// );

// // Setup the synth to be ready to play on beat 1
// synthPart.start();
// // Note that if you pass a time into the start method 
// // you can specify when the synth part starts 
// // e.g. .start('8n') will start after 1 eighth note
// // start the transport which controls the main timeline
// Tone.Transport.start();


const chineseGamut = [261.626, 279.38284, 294.32925, 314.3057, 331.12041, 353.59391, 372.51046, 392.439, 441.49388, 471.45855, 496.68061, 530.39087];

const convertNote = (freq) => {
    return Tone.Frequency(freq).toNote();
}
// create a new synth
const synth = new Tone.MembraneSynth().toMaster();
const synthPart = new Tone.Sequence(
  function(time, note) {
    synth.triggerAttackRelease(convertNote(note), time);
  },
  chineseGamut,
  "4n"
);
synthPart.start();
// Tone.Transport.start();



// create a new synth
// const synth = new Tone.MembraneSynth().toMaster();
// // create a new tone loop
// const loop = new Tone.Loop(function(time) {
//   // trigger synth note
//   const cnote = Tone.Frequency(260.7).toNote();
//   synth.triggerAttackRelease(cnote, "2n");
// }, "2n").start(0);
// // Start the transport which is the main timeline
// Tone.Transport.start();

