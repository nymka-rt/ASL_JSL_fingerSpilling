import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const soSign = new GestureDescription("So");
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Index",
//       "Half Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Middle",
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Ring",
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Pinky",
//       "No Curl",
//       "Vertical Up"
//     ]
//   ]

//Thumb
soSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
soSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.7);

//Index
soSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
soSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.7);

//Middle
soSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
soSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.7);

//Ring
soSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
soSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 0.7);

//Pinky
soSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
soSign.addDirection(Finger.Pinky, FingerDirection.HorizintalLeft, 0.7);

export default soSign;
