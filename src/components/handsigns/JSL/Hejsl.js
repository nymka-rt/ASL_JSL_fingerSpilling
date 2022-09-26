import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const HeSign = new GestureDescription("He");
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
HeSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
HeSign.addDirection(Finger.Index, FingerDirection.DiagonalDownRight, 0.7);

//Index
HeSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
HeSign.addDirection(Finger.Index, FingerDirection.VerticalDown, 0.7);

//Middle
HeSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
HeSign.addDirection(Finger.Middle, FingerDirection.VerticalDown, 0.7);

//Ring
HeSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
HeSign.addDirection(Finger.Ring, FingerDirection.VerticalDown, 0.7);

//Pinky
HeSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
HeSign.addDirection(Finger.Pinky, FingerDirection.DiagonalDownLeft, 0.7);

export default HeSign;
