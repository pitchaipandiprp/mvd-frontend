import { apiService } from "@/services/api/api.service";


const createUser = async (payload: any) => {
    return await apiService.post<any>("/user/create", payload);
}

const changePassword = async (payload: any) => {
    return await apiService.post<any>("/user/change-password", payload);
}

const userUpdate = async (payload: any) => {
    return await apiService.post<any>("/user/update", payload);
}

const userProfile = async (payload: any) => {
    return await apiService.post<any>("/user/profile", payload);
}

export const userRoutes = {
    createUser,
    changePassword,
    userUpdate,
    userProfile,
};
