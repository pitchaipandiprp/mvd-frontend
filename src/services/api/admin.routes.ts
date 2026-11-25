import { apiService } from "@/services/api/api.service";

const userList = async (payload: any) => {
    return await apiService.post<any>("/admin/user-list", payload);
};

const createUser = async (payload: any) => {
    return await apiService.post<any>("/admin/create-user", payload);
};

const updateUserStatus = async (payload: any) => {
    return await apiService.post<any>("/admin/update-user-status", payload);
};

export const adminRoutes = {
    userList,
    createUser,
    updateUserStatus,
}