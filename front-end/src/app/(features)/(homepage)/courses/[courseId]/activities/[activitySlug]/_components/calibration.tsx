"use client";

import { useState, useEffect } from "react";
import useWebGazer from "../_hooks/use-webgazer";
import { Modal, Button, Center, Box, Grid } from "@mantine/core";

// TODO
export default function Calibration() {
    // const { setCalibrated } = useWebGazer();
    // const [pointsClicked, setPointsClicked] = useState(0);
    // const [open, setOpen] = useState(true);
    // const totalPoints = 25;

    // const handleClick = () => {
    //     if (window.webgazer) {
    //         window.webgazer.recordScreenPosition();
    //         setPointsClicked((prev) => prev + 1);
    //     }
    // };

    // useEffect(() => {
    //     if (pointsClicked >= totalPoints) {
    //         window.webgazer.saveData().then(() => {
    //             setCalibrated(true);
    //         })
    //     }
    // }, [pointsClicked])

    // // Generate 5x5 grid points dynamically
    // const calibrationPoints = [];
    // for (let row = 0; row < 5; row++) {
    //     for (let col = 0; col < 5; col++) {
    //         calibrationPoints.push({
    //             top: `${10 + row * 20}%`, // Spacing between rows
    //             left: `${10 + col * 20}%`, // Spacing between columns
    //         });
    //     }
    // }

    // return (
    //     <Modal opened={open} onClose={() => setOpen(false)} title="Eye-Tracking Calibration" centered>
    //         <Center style={{ height: "50vh", flexDirection: "column" }}>
    //             <p>Click all the dots to calibrate your eye tracking.</p>
    //             <Box style={{ position: "relative", width: "100%", height: "60vh" }}>
    //                 {calibrationPoints.map((pos, index) => (
    //                     <Box
    //                         key={index}
    //                         onClick={handleClick}
    //                         style={{
    //                             position: "absolute",
    //                             top: pos.top,
    //                             left: pos.left,
    //                             width: "15px",
    //                             height: "15px",
    //                             borderRadius: "50%",
    //                             backgroundColor: "red",
    //                             cursor: "pointer",
    //                             transform: "translate(-50%, -50%)",
    //                         }}
    //                     />
    //                 ))}
    //             </Box>
    //             <Button disabled={pointsClicked < totalPoints} onClick={() => setOpen(false)}>
    //                 Finish Calibration
    //             </Button>
    //         </Center>
    //     </Modal>
    // );

    return <></>
}

// "use client";

// import { useState, useEffect } from "react";
// import { Modal, Button, Center, Box } from "@mantine/core";
// import useWebGazer from "../_hooks/use-webgazer";

// const Calibration = () => {
//     const { setCalibrated } = useWebGazer();
//     const [pointsClicked, setPointsClicked] = useState(0);
//     const totalPoints = 25; // 5x5 grid
//     const [open, setOpen] = useState(true);

//     useEffect(() => {
//         if (typeof window !== "undefined" && window.webgazer) {
//             window.webgazer.resume(); // Ensure WebGazer is active
//         }
//     }, []);

//     const handleClick = () => {
//         setPointsClicked((prev) => prev + 1);

//         if (pointsClicked + 1 === totalPoints) {
//             setTimeout(() => {
//                 setCalibrated(true); // Mark calibration as done
//                 setOpen(false);
//             }, 500);
//         }
//     };

//     // Generate 5x5 grid points dynamically
//     const calibrationPoints = [];
//     for (let row = 0; row < 5; row++) {
//         for (let col = 0; col < 5; col++) {
//             calibrationPoints.push({
//                 top: `${10 + row * 20}%`,
//                 left: `${10 + col * 20}%`,
//             });
//         }
//     }

//     return (
//         <Modal opened={open} onClose={() => setOpen(false)} title="Eye-Tracking Calibration" centered>
//             <Center style={{ height: "50vh", flexDirection: "column" }}>
//                 <p>Click all the dots to calibrate your eye tracking.</p>
//                 <Box style={{ position: "relative", width: "100%", height: "60vh" }}>
//                     {calibrationPoints.map((pos, index) => (
//                         <Box
//                             key={index}
//                             onClick={handleClick}
//                             style={{
//                                 position: "absolute",
//                                 top: pos.top,
//                                 left: pos.left,
//                                 width: "15px",
//                                 height: "15px",
//                                 borderRadius: "50%",
//                                 backgroundColor: "red",
//                                 cursor: "pointer",
//                                 transform: "translate(-50%, -50%)",
//                             }}
//                         />
//                     ))}
//                 </Box>
//                 <Button disabled={pointsClicked < totalPoints} onClick={() => setOpen(false)}>
//                     Finish Calibration
//                 </Button>
//             </Center>
//         </Modal>
//     );
// };

// export default Calibration;
