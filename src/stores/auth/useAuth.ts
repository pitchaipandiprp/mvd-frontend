import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./authStore";

export const useAuthDispatch = useDispatch.withTypes<AppDispatch>();

export const useAuthSelector = useSelector.withTypes<RootState>();