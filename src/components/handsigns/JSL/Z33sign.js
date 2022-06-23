import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const Z33Sign = new GestureDescription("Z33");
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
Z33Sign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.8);
Z33Sign.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.7);

//Index
Z33Sign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
Z33Sign.addDirection(Finger.Index, FingerDirection.DiagonalDownRight, 0.7);

//Middle
Z33Sign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
Z33Sign.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 0.7);

//Ring
Z33Sign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
Z33Sign.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 0.7);

//Pinky
Z33Sign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
Z33Sign.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 0.7);
