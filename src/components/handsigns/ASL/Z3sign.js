import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const z3Sign = new GestureDescription("Z3");
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Horizontal Left"
//     ],
//     [
//       "Index",
//       "No Curl",
//       "Diagonal Up Left"
//     ],
//     [
//       "Middle",
//       "Full Curl",
//       "Horizontal Left"
//     ],
//     [
//       "Ring",
//       "Full Curl",
//       "Horizontal Left"
//     ],
//     [
//       "Pinky",
//       "Full Curl",
//       "Horizontal Left"
//     ]
//   ]

//Thumb
z3Sign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);
z3Sign.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.7);

//Index
z3Sign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
z3Sign.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.7);

//Middle
z3Sign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
z3Sign.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 0.9);

//Ring
z3Sign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
z3Sign.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 0.7);

//Pinky
z3Sign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
z3Sign.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 0.7);
