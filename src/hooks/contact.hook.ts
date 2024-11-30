import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner";

import { sendMessageToAdmin } from "../services/contact.services"
import { IContact } from "../types";

export const useSendMessage = () => {
    return useMutation({
        mutationKey: ["SEND_MESSAGE"],
        mutationFn: async (payload: IContact) => sendMessageToAdmin(payload),
        onSuccess: () => {
            toast.success('Message send successfully!', {
                position: "top-center"
            });
        },
        onError: () => {
            toast.error('Something went wrong!', {
                position: "top-center"
            });
        }
    });
}