import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const Z22Sign = new GestureDescription("Z22");
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
Z22Sign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.8);
Z22Sign.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 0.7);

//Index
Z22Sign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
Z22Sign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.7);

//Middle
Z22Sign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
Z22Sign.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 0.7);

//Ring
Z22Sign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
Z22Sign.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.7);

//Pinky
Z22Sign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
Z22Sign.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.7);
