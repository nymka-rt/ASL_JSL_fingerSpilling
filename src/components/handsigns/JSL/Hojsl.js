import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const HoSign = new GestureDescription("Ho");
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
HoSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);
HoSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1);

//Index
HoSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
HoSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.7);

//Middle
HoSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
HoSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.8);

//Ring
HoSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
HoSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.8);

//Pinky
HoSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
HoSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.8);

export default HoSign;
