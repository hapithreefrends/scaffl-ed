import chess from "../../_assets/chess.png";
import scaffy from "../../_assets/scaffy.png";
import { Flex, Stack } from "@mantine/core";

export default function Pictures() {
    return (
        <Flex
            p="lg"
            w={{ base: "100%", sm: "100%" }}
            align="center"
            justify={"space-between"}
            style={{ position: "relative" }} // Make the Flex container relative
        >
            <Stack>
                <div
                    style={{
                        position: "relative", // To position the gradient overlay
                        width: "100vw", // Full width of the screen
                        height: "150px", // Limited height
                        overflow: "hidden", // Crop excess content
                        borderRadius: "0px", // Remove rounded corners for full-width
                        background: "linear-gradient(90deg, rgba(128,0,128,0.5), rgba(0,128,128,0.5))", // Purple-teal gradient
                    }}
                >
                    <img
                        src={chess.src}
                        alt="Chess"
                        style={{
                            width: "100%", // Full width of the container
                            height: "100%", // Full height of the container
                            objectFit: "cover", // Scale and crop to fit
                            mixBlendMode: "multiply", // Blend the gradient with the image
                        }}
                    />
                </div>
                <img
                    src={scaffy.src}
                    alt="Scaffy courses greeting hello"
                    style={{
                        top: "80px", // Move the image down (adjust this value as needed)
                        position: "absolute", // Position the image absolutely
                        width: "150px", // Set width
                        height: "150px", // Set height
                        borderRadius: "50%", // Make it circular
                        objectFit: "cover", // Ensure the image fits within the circle
                        border: "3px solid #fff", // Add a white border
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Add shadow

                    }}
                />
            </Stack>
        </Flex>
    );
}