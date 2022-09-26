import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const muSign = new GestureDescription("Mu");
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
muSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
muSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.7);

//Index
muSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
muSign.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.7);

//Middle
muSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
muSign.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 0.7);

//Ring
muSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
muSign.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 0.7);

//Pinky
muSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
muSign.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 0.7);

export default muSign;
