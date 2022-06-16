import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const KiSign = new GestureDescription("Ki");
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
//       "No Curl",
//       "Diagonal Up Left"
//     ]
//   ]

//Thumb
KiSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
KiSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.7);

//Index
KiSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
KiSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.7);

//Middle
KiSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
KiSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.7);

//Ring
KiSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
KiSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.7);

//Pinky
KiSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
KiSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.7);
