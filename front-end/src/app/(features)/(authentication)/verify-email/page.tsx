"use client";

import { useState, useEffect } from "react";

import {
    Text,
    Button,
    Image,
    Paper,
    Flex,
    PinInput,
} from "@mantine/core";

import mail from "./_assets/mail.png";
import ScaffledLogo from "@/app/_components/ScaffledLogo";

import { createClient } from "@/utilities/supabase/client";
import { notifications } from "@mantine/notifications";
import { useRouter, useSearchParams, notFound } from "next/navigation";

const supabase = createClient();

export default function Page() {
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [counter, setCounter] = useState(0);
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        async function sendEmailOTP() {
            const queryEmail = searchParams.get("email");
            console.log("User data:", queryEmail);
            if (!queryEmail) {
                console.error("No email provided in query parameters!");
                return;
            }
            setEmail(queryEmail);

            await supabase.auth.signInWithOtp({
                email: queryEmail,
                options: {
                    emailRedirectTo: `${window.location.origin}/verify-email`,
                },
            });
        }
        sendEmailOTP();
    }, [counter]);

    const verifyEmailOTP = async (email: string, otp: string) => {
        const { data, error } = await supabase.auth.verifyOtp({
            email,
            token: otp,
            type: 'email',
        });

        if (error) {
            console.error('OTP verification failed:', error.message);
            notifications.show({
                title: "Error",
                message: error.message,
                color: "red",
            });
            return false;
        }

        console.log('User verified:', data.user);
        notifications.show({
            title: "Success",
            message: "Email verified successfully!",
            color: "green",
        });
        router.push("/dashboard");

        return data.user;
    };

    if (!searchParams.get("email")) {
        return notFound();
    } else {
        return (
            <Flex
                justify="center"
                align="center"
                style={{ height: "100vh", background: "linear-gradient(to right, #0D6E6E, #683598)" }}
            >
                <Paper
                    shadow="md"
                    radius="md"
                    p={{ base: "md", sm: "xl" }}
                    style={{
                        width: "60%",
                        background: "white",
                    }}
                >
                    <Flex direction="row" wrap="wrap" gap={{ base: "40px", sm: "40px" }}>
                        <Flex
                            direction="column"
                            align="flex-start"
                            p={"20px"}
                        >
                            <ScaffledLogo size={64} variant="full" color="original" />
    
                            <Image
                                src={mail.src}
                                alt="mail"
                                style={{ width: "100%", maxWidth: 300 }}
                            />
                        </Flex>
    
                        <Flex
                            direction="column"
                            justify="space-between" // Distribute space vertically
                            align="stretch" // Stretch horizontally
                            p="20x"
                        >
                            <Flex
                                direction="column"
                            >
                                <Text size="xl" mb="sm" style={{ fontWeight: 700 }}>
                                    Email Confirmation
                                </Text>
                                <Text size="md" mb="md">
                                    We sent a confirmation email to: <strong>{email}</strong>
                                    <br />
                                    Check your email and enter the code to continue.
                                </Text>
                                <PinInput length={6} inputMode="numeric" size="lg" mb="lg" onChange={(value) => setOtp(value)} />
                            </Flex>
    
                            <Flex justify="space-between">
                                <Button color="gray" size="md" radius="sm" onClick={() => {
                                    notifications.show({
                                        title: "Resending OTP",
                                        message: "Please check your email.",
                                        color: "blue",
                                    });
                                    setCounter(counter + 1);
                                    setOtp("");
                                }}>
                                    Resend Code
                                </Button>
                                <Button color="purple" size="md" radius="sm" onClick={() => verifyEmailOTP(email, otp)}>
                                    Continue
                                </Button>
                            </Flex>
                        </Flex>
                    </Flex>
                </Paper>
            </Flex>
        );
    }
}