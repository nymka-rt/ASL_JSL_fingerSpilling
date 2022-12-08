import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const KaSign = new GestureDescription("Ka");
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Diagonal Up Left"
//     ],
//     [
//       "Index",
//       "No Curl",
//       "Diagonal Up Right"
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
KaSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
KaSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.7);

//Index
KaSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
KaSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.7);

//Middle
KaSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
KaSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.7);

//Ring
KaSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
KaSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.7);

//Pinky
KaSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
KaSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.7);

export default KaSign;
