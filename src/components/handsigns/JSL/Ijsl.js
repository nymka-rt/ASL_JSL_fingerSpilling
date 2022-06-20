import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const ISign = new GestureDescription("I  ");
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Diagonal Up Left"
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
//       "No Curl",
//       "Vertical Up"
//     ]
//   ]

//Thumb
ISign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
ISign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.7);

//Index
ISign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
ISign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.7);

//Middle
ISign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
ISign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.7);

//Ring
ISign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
ISign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.7);

//Pinky
ISign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
ISign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.7);
