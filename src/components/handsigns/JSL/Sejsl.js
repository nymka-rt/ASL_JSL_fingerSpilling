import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const SeSign = new GestureDescription("Se");
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
SeSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
SeSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.7);

//Index
SeSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
SeSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.7);

//Middle
SeSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
SeSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.7);

//Ring
SeSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
SeSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.7);

//Pinky
SeSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
SeSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.7);

export default SeSign;
