import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const z1Sign = new GestureDescription("Z1");
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
z1Sign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);
z1Sign.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.7);

//Index
z1Sign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
z1Sign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.9);

//Middle
z1Sign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
z1Sign.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 0.7);

//Ring
z1Sign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
z1Sign.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 0.7);

//Pinky
z1Sign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
z1Sign.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 0.7);
