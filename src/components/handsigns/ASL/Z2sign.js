import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const z2Sign = new GestureDescription("Z2");
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
z2Sign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);
z2Sign.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 0.7);

//Index
z2Sign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
z2Sign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.9);

//Middle
z2Sign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
z2Sign.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 0.7);

//Ring
z2Sign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
z2Sign.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.7);

//Pinky
z2Sign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
z2Sign.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.7);
