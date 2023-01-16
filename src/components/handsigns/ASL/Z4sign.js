import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const z4Sign = new GestureDescription("Z4");
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Horizontal Left"
//     ],
//     [
//       "Index",
//       "No Curl",
//       "Horizontal Left"
//     ],
//     [
//       "Middle",
//       "No Curl",
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
z4Sign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);
z4Sign.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 0.7);

//Index
z4Sign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
z4Sign.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1);

//Middle
z4Sign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
z4Sign.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 0.7);

//Ring
z4Sign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
z4Sign.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.7);

//Pinky
z4Sign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
z4Sign.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.7);
