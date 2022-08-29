//libraries
import { useDispatch } from "react-redux";
//bll
import { AppDispatch } from "bll/store";

export const useAppDispatch: () => AppDispatch = useDispatch;
