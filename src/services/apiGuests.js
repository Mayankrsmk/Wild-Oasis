import supabase from "./supabase";

export async function getGuests() {
    const { data, error } = await supabase.from('guests').select();
    if (error) {
        console.error("Error fetching guests:", error);
        return null;
    }
    return data;
}

export async function createGuest(newGuest) {
    const guestData = {
        fullName: newGuest.fullName,
        email: newGuest.email,
        nationalID: newGuest.nationalID,
        nationality: newGuest.nationality,
        countryFlag: newGuest.countryFlag, // e.g., "https://flagcdn.com/pt.svg"
    };

    const { data, error } = await supabase
        .from('guests')
        .insert(guestData)
        .select();

    if (error) {
        console.error("Error creating guest:", error);
        return null;
    }

    return data;
}

export async function deleteGuest(id) {
    const { error } = await supabase.from('guests').delete().eq('id', id);
    if (error) {
        console.error("Error deleting guest:", error);
        return false;
    }
    return true;
}
