import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createGuest } from "../../services/apiGuests";
import { toast } from "react-hot-toast";

export function useCreateGuest() {
    const queryClient = useQueryClient();
    const { mutate : guest, isLoading : isCreating} = useMutation({
        mutationFn: createGuest,
        onSuccess: () => {
            toast.success("Guest successfully created");
            queryClient.invalidateQueries({ queryKey: ["guests"] });
        },
        onError: (err) => toast.error(err.message),
    });

    return { isCreating, guest };
}
