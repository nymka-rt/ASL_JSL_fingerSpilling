import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const TaSign = new GestureDescription("Ta");
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
TaSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
TaSign.addDirection(Finger.Index, FingerDirection.Vertical, 1);

//Index
TaSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
TaSign.addDirection(Finger.Index, FingerDirection.Horizontal, 0.9);

//Middle
TaSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
TaSign.addDirection(Finger.Middle, FingerDirection.Horizontal, 0.9);

//Ring
TaSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
TaSign.addDirection(Finger.Ring, FingerDirection.Horizontal, 0.9);

//Pinky
TaSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
TaSign.addDirection(Finger.Pinky, FingerDirection.Horizontal, 0.9);

export default TaSign;
