import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const HiSign = new GestureDescription("Hi");
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Vertical Up"
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
HiSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
HiSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.7);

//Index
HiSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
HiSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.7);

//Middle
HiSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
HiSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.7);

//Ring
HiSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
HiSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.7);

//Pinky
HiSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
HiSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.7);

export default HiSign;
