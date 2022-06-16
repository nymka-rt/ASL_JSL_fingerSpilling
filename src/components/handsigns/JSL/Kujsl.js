import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const KuSign = new GestureDescription("Ku");
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
//       "Half Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Ring",
//       "Half Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Pinky",
//       "Half Curl",
//       "Diagonal Up Right"
//     ]
//   ]

//Thumb
KuSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
KuSign.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 0.8);

//Index
KuSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
KuSign.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 0.8);

//Middle
KuSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
KuSign.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 0.8);

//Ring
KuSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
KuSign.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.8);

//Pinky
KuSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
KuSign.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.8);
