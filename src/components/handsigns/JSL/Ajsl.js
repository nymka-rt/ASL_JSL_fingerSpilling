import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const Ajsl = new GestureDescription("A");
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Index",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Middle",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Ring",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Pinky",
//       "Full Curl",
//       "Diagonal Up Left"
//     ]
//   ]

//Thumb
Ajsl.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
Ajsl.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.7);
// aSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
Ajsl.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
Ajsl.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.7);
// aSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Middle
Ajsl.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
Ajsl.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.7);
// aSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.70);

//Ring
Ajsl.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
Ajsl.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.7);

//Pinky
Ajsl.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
Ajsl.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.7);

export default Ajsl;
