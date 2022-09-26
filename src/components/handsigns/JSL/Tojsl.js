import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const ToSign = new GestureDescription("To");
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Diagonal Up Right"
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
//       "Diagonal Up Right"
//     ],
//     [
//       "Pinky",
//       "Full Curl",
//       "Diagonal Up Right"
//     ]
//   ]
//Thumb
ToSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
ToSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.7);

//Index
ToSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
ToSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.7);

//Middle
ToSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
ToSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.7);

//Ring
ToSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
ToSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 0.7);

//Pinky
ToSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
ToSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.7);

export default ToSign;
