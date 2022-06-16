import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const ASign = new GestureDescription("A");
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
ASign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
ASign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.7);
// aSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
ASign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
ASign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.7);
// aSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Middle
ASign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
ASign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.7);
// aSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.70);

//Ring
ASign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
ASign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.7);

//Pinky
ASign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
ASign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.7);
