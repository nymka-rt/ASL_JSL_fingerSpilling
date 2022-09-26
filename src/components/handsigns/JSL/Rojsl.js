import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const roSign = new GestureDescription("Ro");
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
roSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
roSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.7);

//Index
roSign.addCurl(Finger.Index, FingerCurl.HalfCurl, 1);
roSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.7);

//Middle
roSign.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1);
roSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.7);

//Ring
roSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
roSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.7);

//Pinky
roSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
roSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.7);

export default roSign;
