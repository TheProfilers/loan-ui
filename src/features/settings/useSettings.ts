import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/settingsapi";
import { SettingsType } from "../../types/SettingsType";

export function useSettings() {
    const {data,isLoading,error}=useQuery<SettingsType,Error>({
        queryKey:["settings"],
        queryFn:getSettings
    });
    return {data,isLoading,error};
}