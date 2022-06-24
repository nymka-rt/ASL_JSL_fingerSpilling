import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const Z44Sign = new GestureDescription("Z44");
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
Z44Sign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.8);
Z44Sign.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 0.7);

//Index
Z44Sign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
Z44Sign.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 0.7);

//Middle
Z44Sign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
Z44Sign.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 0.7);

//Ring
Z44Sign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
Z44Sign.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.7);

//Pinky
Z44Sign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
Z44Sign.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.7);
