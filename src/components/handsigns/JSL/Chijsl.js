import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const chiSign = new GestureDescription("Chi");
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
//       "Full Curl",
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
chiSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
chiSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

//Index
chiSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
chiSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.8);

//Middle
chiSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
chiSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.8);

//Ring
chiSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
chiSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.8);

//Pinky
chiSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
chiSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.8);

export default chiSign;
