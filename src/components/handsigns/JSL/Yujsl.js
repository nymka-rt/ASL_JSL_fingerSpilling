import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const yuSign = new GestureDescription("Yu");
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Diagonal Up Left"
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
//       "Vertical Up"
//     ]
//   ]

//Thumb
yuSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
yuSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.7);

//Index
yuSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
yuSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.7);

//Middle
yuSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
yuSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.7);

//Ring
yuSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
yuSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.7);

//Pinky
yuSign.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1);
yuSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.7);

export default yuSign;
