import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const nuSign = new GestureDescription("Nu");
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Vertical Up"
//     ],
//     [
//       "Index",
//       "Half Curl",
//       "Vertical Up"
//     ],
//     [
//       "Middle",
//       "Half Curl",
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
nuSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
nuSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.7);

//Index
nuSign.addCurl(Finger.Index, FingerCurl.HalfCurl, 1);
nuSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.7);

//Middle
nuSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
nuSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.7);

//Ring
nuSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
nuSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.7);

//Pinky
nuSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
nuSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.7);

export default nuSign;
