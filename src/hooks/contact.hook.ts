import { useMutation } from "@tanstack/react-query"
import { sendMessageToAdmin } from "../services/contact.services"
import { IContact } from "../types";
import { toast } from "sonner";

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