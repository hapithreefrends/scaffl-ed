"use client";

import { Flex, Image, Stack, FileInput, Group, Button } from "@mantine/core";
import { IconUpload } from "@tabler/icons-react";
import { useState } from "react";
import { createClient } from "@/utilities/supabase/client";

import { useUpdateUserProfileFormContext } from "./update-user-profile-form-context";

const supabase = createClient();

const predefinedAvatars = [
    "https://isecqdxblpruegaghvnq.supabase.co/storage/v1/object/public/scaffled-avatars//avatar1.png",
    "https://isecqdxblpruegaghvnq.supabase.co/storage/v1/object/public/scaffled-avatars//avatar2.png",
    "https://isecqdxblpruegaghvnq.supabase.co/storage/v1/object/public/scaffled-avatars//avatar3.png",
    "https://isecqdxblpruegaghvnq.supabase.co/storage/v1/object/public/scaffled-avatars//avatar4.png",
    "https://isecqdxblpruegaghvnq.supabase.co/storage/v1/object/public/scaffled-avatars//avatar5.png",
    "https://isecqdxblpruegaghvnq.supabase.co/storage/v1/object/public/scaffled-avatars//avatar6.png",
];

export function Avatar() {
    const form = useUpdateUserProfileFormContext();
    const [uploading, setUploading] = useState(false);

    const handleAvatarSelect = (avatarUrl: string) => {
        form.setFieldValue("avatar", avatarUrl);
    };

    const handleFileUpload = async (file: File) => {
        setUploading(true);
        const fileName = `${Date.now()}-${file.name}`;
        const { data, error } = await supabase.storage
            .from("scaffled-avatars")
            .upload(fileName, file);

        if (error) {
            console.error("Error uploading file:", error.message);
        } else if (data) {
            const publicUrl = supabase.storage
                .from("scaffled-avatars")
                .getPublicUrl(data.path).data.publicUrl;
            handleAvatarSelect(publicUrl);
        }
        setUploading(false);
    };

    return (
        <Stack align="center" style={{ overflowY: "auto" }}>
            <Group gap="md">
                <label htmlFor="avatar">
                    <div
                        style={{
                            width: "160px",
                            height: "160px",
                            borderRadius: "50%",
                            background: "linear-gradient(to left, #0D6E6E, #683598)",
                            overflow: "hidden",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            cursor: "pointer",
                        }}
                    >
                        {form.getValues().avatar ? (
                            <Image
                                src={form.getValues().avatar}
                                alt="Selected Avatar"
                                style={{ maxWidth: "100%", maxHeight: "100%" }}
                            />
                        ) : (
                            <IconUpload size={72} stroke={1.5} color="white" />
                        )}
                    </div>
                </label>

                <Stack gap="sm">
                    <Button
                        component="label"
                        htmlFor="avatar"
                        variant="outline"
                        color="teal"
                        leftSection={<IconUpload size={16} />}
                        disabled={uploading}
                    >
                        {uploading ? "Uploading..." : "Upload Avatar"}
                    </Button>
                    <FileInput
                        display="none"
                        id="avatar"
                        placeholder="Upload your avatar"
                        accept="image/*"
                        onChange={(file) => file && handleFileUpload(file)}
                        
                        disabled={uploading}
                    />

                    {
                        form.getValues().avatar &&
                        <Button onClick={() => handleAvatarSelect("")} variant="outline" color="red">
                            Clear
                        </Button>
                    }
                </Stack>
            </Group>

            <Flex direction="row" gap={4}>
                {predefinedAvatars.map((avatar, index) => (
                    <div
                        key={index}
                        style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            background: "linear-gradient(to left, #0D6E6E, #683598)",
                            overflow: "hidden",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            cursor: "pointer",
                            border: form.getValues().avatar === avatar ? "2px solid white" : "none"
                        }}
                        onClick={() => {
                            handleAvatarSelect(avatar)
                        }}
                    >
                        <Image
                            src={avatar}
                            alt={`avatar${index + 1}`}
                            style={{ maxWidth: "100%", maxHeight: "100%" }}
                        />
                    </div>
                ))}
            </Flex>
        </Stack>
    );
}