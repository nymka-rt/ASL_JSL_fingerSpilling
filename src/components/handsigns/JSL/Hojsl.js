import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const TeSign = new GestureDescription("Te");
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
TeSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
TeSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.7);

//Index
TeSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
TeSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.7);

//Middle
TeSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
TeSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.7);

//Ring
TeSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
TeSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.7);

//Pinky
TeSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
TeSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.7);

export default TeSign;
