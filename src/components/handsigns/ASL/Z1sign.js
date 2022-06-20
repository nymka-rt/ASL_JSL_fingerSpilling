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
z1Sign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.8);
z1Sign.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 0.7);

//Index
z1Sign.addCurl(Finger.Index, FingerCurl.NoCurl, 0.8);
z1Sign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.7);

//Middle
z1Sign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
z1Sign.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 0.7);

//Ring
z1Sign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
z1Sign.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.7);

//Pinky
z1Sign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
z1Sign.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.7);
