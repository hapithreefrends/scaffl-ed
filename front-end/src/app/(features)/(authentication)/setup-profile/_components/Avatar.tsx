import { Flex, Image, Stack } from "@mantine/core";
import { IconUpload } from "@tabler/icons-react";

import avatar1 from "../_assets/avatar1.png";
import avatar2 from "../_assets/avatar2.png";
import avatar3 from "../_assets/avatar3.png";
import avatar4 from "../_assets/avatar4.png";
import avatar5 from "../_assets/avatar5.png";
import avatar6 from "../_assets/avatar6.png";

export function Avatar() {
    return (
        <Stack style={{overflowY: "auto"}}>
            <div
                style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background: "linear-gradient(to left, #0D6E6E, #683598)",
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <IconUpload size={24} stroke={1.5} color="white" />
            </div>
            <Flex direction="row" gap={4}>
                <div
                    style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        background: "linear-gradient(to left, #0D6E6E, #683598)",
                        overflow: "hidden",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Image
                        src={avatar1.src}
                        alt="avatar1"
                        style={{ maxWidth: "100%", maxHeight: "100%" }} // Make the image fit inside the circle
                    />
                </div>

                <div
                    style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        background: "linear-gradient(to left, #0D6E6E, #683598)",
                        overflow: "hidden",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Image
                        src={avatar2.src}
                        alt="avatar2"
                        style={{ maxWidth: "100%", maxHeight: "100%" }} // Make the image fit inside the circle
                    />
                </div>

                <div
                    style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        background: "linear-gradient(to left, #0D6E6E, #683598)",
                        overflow: "hidden",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Image
                        src={avatar3.src}
                        alt="avatar3"
                        style={{ maxWidth: "100%", maxHeight: "100%" }} // Make the image fit inside the circle
                    />
                </div>

                <div
                    style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        background: "linear-gradient(to left, #0D6E6E, #683598)",
                        overflow: "hidden",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Image
                        src={avatar4.src}
                        alt="avatar4"
                        style={{ maxWidth: "100%", maxHeight: "100%" }} // Make the image fit inside the circle
                    />
                </div>

                <div
                    style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        background: "linear-gradient(to left, #0D6E6E, #683598)",
                        overflow: "hidden",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Image
                        src={avatar5.src}
                        alt="avatar5"
                        style={{ maxWidth: "100%", maxHeight: "100%" }} // Make the image fit inside the circle
                    />
                </div>

                <div
                    style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        background: "linear-gradient(to left, #0D6E6E, #683598)",
                        overflow: "hidden",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Image
                        src={avatar6.src}
                        alt="avatar6"
                        style={{ maxWidth: "100%", maxHeight: "100%" }} // Make the image fit inside the circle
                    />
                </div>
            </Flex>
        </Stack>
    );
}