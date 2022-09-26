import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const saSign = new GestureDescription("Sa");
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Vertical Up"
//     ],
//     [
//       "Index",
//       "Full Curl",
//       "Diagonal Up Right"
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
//       "Diagonal Up Left"
//     ]
//   ]

//Thumb
saSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
saSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.7);

//Index
saSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
saSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.7);

//Middle
saSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
saSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.7);

//Ring
saSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
saSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.7);

//Pinky
saSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
saSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.7);
export default saSign;
