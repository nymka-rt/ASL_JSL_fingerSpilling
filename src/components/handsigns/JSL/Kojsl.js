import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const KoSign = new GestureDescription("Ko");
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
KoSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
KoSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.7);

//Index
KoSign.addCurl(Finger.Index, FingerCurl.HalfCurl, 1);
KoSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.7);

//Middle
KoSign.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1);
KoSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.7);

//Ring
KoSign.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1);
KoSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 0.7);

//Pinky
KoSign.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1);
KoSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.7);

export default KoSign;
