"use client"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link } from "@nextui-org/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaLock, FaLockOpen } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

import { useUserLogin } from "@/src/hooks/auth.hook";


export default function Login() {
    const [isVisible, setIsVisible] = useState(false);
    const searchParams = useSearchParams();
    const redirect = searchParams.get("redirect");

    const toggleVisibility = () => setIsVisible(!isVisible);
    const router = useRouter();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { mutate: loginUser, isPending, isSuccess } = useUserLogin();

    const onClose = () => {
        router.push(process.env.NEXT_PUBLIC_CLIENT_URL as string);
    }

    const [email, setEmail] = useState("ubaidullhasan2023@gmail.com");
    const [password, setPassword] = useState("123456");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleLogin = () => {
        // Reset error messages
        setEmailError("");
        setPasswordError("");

        // Validate email
        if (!email) {
            setEmailError("Email is required");
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError("Email is invalid");
        }

        // Validate password
        if (!password) {
            setPasswordError("Password is required");
        } else if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters");
        }

        // If there are errors, do not proceed with login
        if (emailError || passwordError) {
            return;
        }

        // login in 
        const userData = {
            email: email,
            password: password
        }
        
        loginUser(userData);
    }

    useEffect(() => {
        if (!isPending && isSuccess) {
            if (redirect) {
                router.push(redirect);
            } else {
                router.push("/dashboard");
            }
        }
    },[isPending, isSuccess]);

    return (
        <>
            <Modal
                isOpen={true}
                placement="top-center"
                onClose={onClose}
                onOpenChange={onOpenChange}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
                            <ModalBody>
                                <Input
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                    endContent={
                                        <IoIosMail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    errorMessage={emailError}
                                    isInvalid={!!emailError}
                                    label="Email"
                                    placeholder="Enter your email"
                                    type="email"
                                    variant="bordered"
                                    value={email}
                                    isRequired={true}
                                />
                                <Input
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    isRequired={true}
                                    label="Password"
                                    placeholder="Enter your password"
                                    type={isVisible ? "text" : "password"}
                                    variant="bordered"
                                    errorMessage={passwordError}
                                    isInvalid={!!passwordError}
                                    endContent={
                                        <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                                            {isVisible ? (
                                                <FaLockOpen className="text-2xl text-default-400 pointer-events-none" />
                                            ) : (
                                                <FaLock className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                            )}
                                        </button>
                                    }

                                />
                                <div className="flex py-2 px-1 justify-between">
                                    <Checkbox
                                        classNames={{
                                            label: "text-small",
                                        }}
                                    >
                                        Remember me
                                    </Checkbox>
                                    <Link color="primary" href="#" size="sm">
                                        Forgot password?
                                    </Link>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="flat" onPress={onClose}>
                                    Close
                                </Button>
                                <Button type="submit" color="primary" onPress={handleLogin}>
                                    Sign in
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}