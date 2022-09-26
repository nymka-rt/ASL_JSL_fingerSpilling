import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const ShiSign = new GestureDescription("Shi");
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Diagonal Up Left"
//     ],
//     [
//       "Index",
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Middle",
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Ring",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Pinky",
//       "Full Curl",
//       "Vertical Up"
//     ]
//   ]

//Thumb
ShiSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
ShiSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.7);

//Index
ShiSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
ShiSign.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.7);

//Middle
ShiSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
ShiSign.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 0.7);

//Ring
ShiSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
ShiSign.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 0.7);

//Pinky
ShiSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
ShiSign.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 0.7);

export default ShiSign;
