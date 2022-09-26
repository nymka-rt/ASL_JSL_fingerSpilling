import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const meSign = new GestureDescription("Me");
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
meSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
meSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.7);

//Index
meSign.addCurl(Finger.Index, FingerCurl.HalfCurl, 1);
meSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.7);

//Middle
meSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
meSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.7);

//Ring
meSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
meSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.7);

//Pinky
meSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
meSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.7);

export default meSign;
