import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const ruSign = new GestureDescription("Ru");
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Diagonal Up Left"
//     ],
//     [
//       "Index",
//       "No Curl",
//       "Diagonal Up Right"
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
//       "Diagonal Up Left"
//     ]
//   ]

//Thumb
ruSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
ruSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.7);

//Index
ruSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
ruSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.7);

//Middle
ruSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
ruSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.7);

//Ring
ruSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
ruSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.7);

//Pinky
ruSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
ruSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.7);

export default ruSign;
