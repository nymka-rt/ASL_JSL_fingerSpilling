import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const waSign = new GestureDescription("Wa");
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Diagonal Up Left"
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
//       "Vertical Up"
//     ],
//     [
//       "Pinky",
//       "Full Curl",
//       "Vertical Up"
//     ]
//   ]

//Thumb
waSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
waSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.7);

//Index
waSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
waSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.7);

//Middle
waSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
waSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.7);

//Ring
waSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
waSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.7);

//Pinky
waSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
waSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.7);

export default waSign;
