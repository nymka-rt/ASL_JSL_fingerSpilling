import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const yoSign = new GestureDescription("Yo");
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
//       "Half Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Ring",
//       "Half Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Pinky",
//       "Half Curl",
//       "Diagonal Up Right"
//     ]
//   ]

//Thumb
yoSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
yoSign.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.8);

//Index
yoSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
yoSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.8);

//Middle
yoSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
yoSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.8);

//Ring
yoSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
yoSign.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 0.8);

//Pinky
yoSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
yoSign.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 0.8);

export default yoSign;
