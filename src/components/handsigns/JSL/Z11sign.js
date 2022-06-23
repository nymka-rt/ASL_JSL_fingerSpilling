import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const Z11Sign = new GestureDescription("Z11");
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
Z11Sign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.8);
Z11Sign.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.7);

//Index
Z11Sign.addCurl(Finger.Index, FingerCurl.NoCurl, 0.8);
Z11Sign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.7);

//Middle
Z11Sign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
Z11Sign.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 0.7);

//Ring
Z11Sign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
Z11Sign.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 0.7);

//Pinky
Z11Sign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
Z11Sign.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 0.7);
