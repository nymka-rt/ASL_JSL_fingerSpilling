import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const fuSign = new GestureDescription("Fu");
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
fuSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
fuSign.addDirection(Finger.Index, FingerDirection.DiagonalDownRight, 0.7);

//Index
fuSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
fuSign.addDirection(Finger.Index, FingerDirection.VerticalDown, 0.7);

//Middle
fuSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
fuSign.addDirection(Finger.Middle, FingerDirection.VerticalDown, 0.7);

//Ring
fuSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
fuSign.addDirection(Finger.Ring, FingerDirection.VerticalDown, 0.7);

//Pinky
fuSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
fuSign.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 0.7);
export default fuSign;
