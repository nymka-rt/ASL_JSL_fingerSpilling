import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const TuSign = new GestureDescription("Tu");
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
TuSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
TuSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.7);

//Index
TuSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
TuSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.7);

//Middle
TuSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
TuSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.7);

//Ring
TuSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
TuSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.7);

//Pinky
TuSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
TuSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.7);

export default TuSign;
