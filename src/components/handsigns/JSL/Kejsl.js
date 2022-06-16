import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const KeSign = new GestureDescription("Ke");
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Vertical Up"
//     ],
//     [
//       "Index",
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Middle",
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Ring",
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Pinky",
//       "No Curl",
//       "Vertical Up"
//     ]
//   ]

//Thumb
KeSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
KeSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.7);
KeSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.7);

//Index
KeSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
KeSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.7);

//Middle
KeSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
KeSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.7);

//Ring
KeSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
KeSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.7);

//Pinky
KeSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
KeSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.7);
